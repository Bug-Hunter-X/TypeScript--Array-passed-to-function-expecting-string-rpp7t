# TypeScript Bug: Array passed to function expecting string

This repository demonstrates a common TypeScript error that occurs when an array is passed to a function that expects a string argument.

## Bug Description

A TypeScript function `greeter` is defined to accept a string and return a greeting. However, when an array is passed to the function, TypeScript throws an error because of type mismatch. The code attempts to concatenate a string with an array, resulting in a runtime error.

## Solution

The solution is to modify either the function signature to accept an array of strings or adjust the way the array is handled. The provided solution demonstrates how to iterate through the array and generate greetings for each element.