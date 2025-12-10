---
title: Learning Java set
date: 2024/11/11
desc: Some basic Java methods
tags: Study/CS007/set
---

# introduction
```java
What is a set?

A collection of items (**of the same type). 
Stored in the some container and no duplicates allowed.

The ordering of the objects within the container is of no importance

set X = { A, B, C }  
set X = { A, B, C } ==> { {A}, {B}, {C}, {A,B}, {A,C}, {B,C}, {A,B,C} {}}//superset, all are subsets. even the set itself is, but it isnt offically is a subset.
// if wants to know how many probability subsets for a set, just 2^n.
cardinality of X = |X| which is of course 3
```

## Operation
```java
SET OPERATIONS CREATE A THIRD SET AND DO NOT MODIFY THE FIRST TWO SETS 

ASSUME:  String[] set1 = { "A","B","C","D" },
         set2 = { "C","D","E","F"  };

        
1st operation: UNION is set2 + set1 = {"A","B","C","D","E","F"  } //doesn't matter of set2+ set1 or set 1 + set2

2nd operation: INTERSECTION is set2 * set1 = {  "C", "D"  } //same as union doesn't matter the order, set the length of intersection to the smallest set

3rd operation: DIFFERENCE is set1 - set2 = {  "A", "B"  }//only take out the intersection. looking for the cell that not in set2.

4th operation: XOR is set1 xor set2 =  
	union(set1,set2) - intersection(set1,set2)//  Not only remove the duplicate also the intersection got removed.

you will write a single one line return statement composed of a
call to ALL OF THE FIRST 3 FUNCTIONS

It will be of the form=>> return difference( ?, ? );

When you write the code of XOR there are NO LOOPS ALLOWED
you will NOT dimension a new array
you will NOT call downsize/trim function
you will write a single one line return statement composed of a
call to ALL OF THE FIRST 3 FUNCTIONS

```