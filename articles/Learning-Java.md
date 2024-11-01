---
title: Learning Java array
date: 2024/10/30
desc: Some basic Java methods
tags: Study/CS007/Array
---

# Sort the arr
```java
//infile -> 7 5 1 3 6 2 9
i = index of last initialize element in array// for example: i = array.length - 1

while(i is still in bounds AND is the value at[i] less than new value){
    copy arr[i] UP one slot;
    decrement i;
}

put new value into [i+1];
```

# forloop print array
```java
for(int value : array){
    System.out.println(value + " ")
}
```