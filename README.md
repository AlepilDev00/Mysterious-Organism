# Mysterious-Organism

Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive.

# Table Of Contents

- [Overview](#overview)
- [Project Goals](#project_goals)
- [Project Extensions](#project_extensions)
- [My version](#my_version)
- [Sources](#sources)

## Overview

These functions were created to practice Javascript ES6 (functions, objects manipulation, loops) learned in Codeacademy Full-Stack Engineer career path. The project is called "Challenge Project: Mysterious Organism".

## Project Goals

In this project, the job is to create objects that simulate the DNA of P. aequor for our research team to study. There are two helper functions: returnRandBase() and mockUpStrand(). DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). These helper functions are used to create objects that represent P. aequor.

- returnRandBase(): Randomly returns one DNA base: ‘A’, ‘T’, ‘C’, or ‘G’.
- mockUpStrand(): Creates an array of 15 random DNA bases.

Below is a summary of what each function or method should do for this project:

1. Create a factory function pAequorFactory() that should return an object that contains the properties 'specimenNum' and 'dna', which correspond to the parameters provided. You will add more methods to this returned object in the later steps.

- Add the following methods to the factory function:

2. mutate(): Randomly selects a base in the object’s dna array and changes it to a different base. It then returns the updated dna.

3. compareDNA(): Compares the current pAequor’s dna with another pAequor’s dna, calculating how many bases are identical and in the same positions. This method does not return anything but prints a message stating the percentage of DNA the two objects have in common.

4. willLikelySurvive(): Returns true if at least 60% of the object’s dna consists of ‘C’ or ‘G’ bases; otherwise, returns false.

5. Create 30 instances of pAequor that are likely to survive in their natural environment. Store these instances in an array for your team to study.

## Project Extensions

a. Create a complementStrand() method to the factory function’s object that returns the [complementary DNA strand.](https://discoveringthegenome.org/discovering-genome/dna-sequencing/dna-complementary-base-pairing) The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's and vice versa.
b. Use the .compareDNA() to find the two most related instances of pAequor.

## My version

[Click here for my version!](https://github.com/AlepilDev00/Mysterious-Organism/blob/main/main.js)

NOTE : I stored the function calls and object destructuring to avoid complex console logs during testing. I left some console logs active for key function outputs and to show what I have tested.

Feel free to comment and give me advice to correct my mistakes and continue to improve. Thanks a lot in advance.

## Sources

- https://developer.mozilla.org/en-US/
- https://stackoverflow.com/questions
- https://discoveringthegenome.org/discovering-genome/dna-sequencing/dna-complementary-base-pairing
