---
title: Learning Java recursion
date: 2024/11/4
desc: Some basic Java methods
tags: Study/CS007/recursion
---


# introduction
```
*A recursive algorithm breaks down the input or the
search space and applies the same logic to a smaller
and smaller piece of the problem until the remaining
piece is solvable without recursion*
```
## factorial function
```java
i.e fact(5) // is 5*4*3*2*1 and it is doesn't contain in java

static int fact(int n){
    if (n == 0){
        return 1;
    }
        return n * fact(n-1)!; 
}
```

## understand recursion
```java
public class Rev
{
    public static void main (String[] args)
    {
        System.out.println( rev(31415926));
    }
    static void rev(int n){// we want print the reverse number by recursion
        if(n==0) return;//Base case. 
        //This retunr will return to where it calls from rev(0) then rev(3) then rev(31).........
        System.out.print ( n % 10);// Operation
        n = n / 10;// Reduction
        rev(n); //Recursive Call
    }
}
```
# more example 
## (1)
```java
main rev(314)

    rev(int n)
    if(n == 0) return;
    rev(n % 10);//after rev(0), it will go to print()
    print(n);
```

## (2)
```java
public void foo( int x)
{
if (x ==0)
return;
else
{ System.out.println( x );
foo( x - 1 );
}
}
public static void main( String args[])
{
foo( 7 );
}
//28
```
## (3)
```java
public int foo( int x)
{
if (x ==0)
return 0;
else
return x + foo(x-1);
}
public static void main( String args[])
{
System.out.println( foo(7) );
}
// print 7
```


