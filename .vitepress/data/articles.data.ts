import { createContentLoader } from "vitepress";

export interface Article {
  date: {
    time: number;
    string: string;
  };
  link: string;
  frontmatter: Record<string, any>;
}

declare const data: Article[];
export { data };

export default createContentLoader("articles/*.md", {
  transform(raw): Article[] {
    return raw
      .filter(({frontmatter}) => frontmatter.exclude !== true)
      .map(({url, frontmatter}) => ({
        date: formatDate(frontmatter.date),
        link: url,
        frontmatter: frontmatter,
      }))
  }
});

function formatDate(raw: string | number) {
  const date = new Date(raw);
  date.setUTCHours(-4);
  return {
    time: +date,
    string: date.toLocaleDateString(
      "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    )
  };
}