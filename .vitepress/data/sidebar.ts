import { readdirSync, statSync } from "fs";
import path from "path";
import matter from "gray-matter";


// read all markdown files from articles folder
// exclude non-article
// sort by year, then by month, descending
// group by year, then by month

export function makeSidebar() {
  // get absolute path of articles folder
  const articleDir = path.join(process.cwd(), "/articles");

  // get all paths in this folder
  const paths: string[] = readdirSync(articleDir);

  // filter out only markdown files
  const articles: string[] = paths
    .filter((fileOrDir) => {
      // get absolute path
      const fullPath = path.join(articleDir, fileOrDir);

      // check if it's a file, not a folder
      const isFile = statSync(fullPath).isFile();

      // check for extension name
      const isMarkdown = path.extname(fileOrDir).toLowerCase() === ".md";

      // only keep single markdown file
      return isFile && isMarkdown;
    });

  // group articles
  const groups: Record<string, Record<string, {}[]>> = {};
  for (const article of articles) {
    // get absolute path of article file
    const articlePath = path.join(articleDir, article);

    // read frontmatter of each article
    const { data } = matter.read(articlePath);

    // exclude
    if (data.exclude === true) {
      // only process article that has no exclude or exclude: false
      continue;
    }

    // read date
    const date = new Date(data.date);
    // get year
    const year = date.getUTCFullYear();
    // get month
    const month = date.getUTCMonth() + 1;
    // set month sory key
    const key = String(month).padStart(2, "0");
    
    // if haven't added this year yet, add it
    if (!groups[year]) {
      groups[year] = {};
    }
    // if haven't added this month of this year yet, add it
    if (!groups[year][key]) {
      groups[year][key] = [];
    }

    // save this article to this year of this month
    groups[year][key].push(
      {
        md: article,
        time: +date,
        title: data.title,
      }
    )
  }

  // sort by year and sort by month
  const sortedGroups: Record<string, Record<string, {}[]>> = {};
  const years = Object.keys(groups)
    .sort((a, b) => Number(a) - Number(b));
  for (const year of years) {
    // this by month, descending
    const months = Object.keys(groups[year])
      .sort((a, b) => Number(b) - Number(a));
    sortedGroups[year] = {};

    // save new sorted groups 
    for (const month of months) {
      sortedGroups[year][month] = groups[year][month];
      sortedGroups[year][month].sort(
        (a, b) => (b as any).time - (a as any).time
      );
    }
  }
  
  let sidebars: Array<{}> = [];
  // make a sidebar
  for (const year in sortedGroups) {
    // make a new year category
    const thisYear = {
      text: year,
      collapsed: true,
      items: [{}],
    }

    // get all months of this year
    const months = groups[year];
    for (const month in months) {
      // get all articles of this month
      const thisMonth = months[month];
      const monthName = new Date(2024, Number(month) - 1, 1).toLocaleString(
        "en-US",
        { month: "long" }
      );

      thisYear.items.push({
        text: monthName,
        collapsed: true,
        items: thisMonth.map((thisArticle) => {
          return {
            text: (thisArticle as any).title,
            link: "/articles/" + (thisArticle as any).md
          }; 
        }),
      });
    }
    
    sidebars.push(thisYear);
  }

  sidebars.reverse();
  (sidebars[0] as any).collapsed = false;

  return sidebars;
}