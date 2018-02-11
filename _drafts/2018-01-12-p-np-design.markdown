---
title:  "P, NP, and Design"
date:   2018-01-13
categories: writing
---

2013's _The Future of Employment_[^1] features a table of professions in order of likelihood of being fully automated in the coming decades. Graphic Design looks pretty safe:

|Rank|Profession|Likelihood of being automated|
|-|-|-|
|159.|Compliance Officers|0.08|
|160.|Fish and Game Wardens|0.08|
|**161.**|**Graphic Designers**|**0.082**|
|162.|Food Service Managers|0.083|
|163.|Childcare Workers|0.084|

The qualities that make a job difficult to automate — creativity, originality, emotional awareness — seem out of automation's reach for now. But with the rapid development of machine learning in the last few years, is it just a matter of time?

## The future of automation

Can we make a list of all the things that will be automated?

This was the subject of a letter John Nash sent to the National Security Agency in 1965.[^2] In it, Nash speculated that there may be mathematical processes that are impossible to automate. If his hypothesis was correct, the NSA could encrypt a message in a way that is impossible to break.

Similar ideas were explored in 1966 by mathematician Kurt Gödel. In a letter to John von Neumann, Gödel wondered if mathematical proofs be solved automatically. If so, how long would it take a machine to solve a given problem? Would mathematicians be out of a job soon?[^3]

These letters begin a process that eventually leads to the most important questions in all of mathematics, referred to today as **P vs. NP.** Understanding P v.s NP is the key to understanding what will and will not be automated by computers — including graphic design.

## The Millennium Prize

In 2000, the Clay Institute of Mathematics laid out a set of seven problems called the “Millennium Prize Problems.” At the time, they were regarded as the most important unsolved problems in mathematics. Anyone who solves a Millennium Prize Problem is awarded $1,000,000 (and a great deal of fame). Those problems are:

1. [Yang–Mills and Mass Gap](https://en.wikipedia.org/wiki/Yang%E2%80%93Mills_existence_and_mass_gap)
2. [Riemann Hypothesis](https://en.wikipedia.org/wiki/Riemann_hypothesis)
3. [P vs NP ](https://en.wikipedia.org/wiki/P_versus_NP_problem)
4. [Navier–Stokes Equation](https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness)
5. [Hodge Conjecture](https://en.wikipedia.org/wiki/Hodge_conjecture)
6. [Poincaré Conjecture](https://en.wikipedia.org/wiki/Poincar%C3%A9_conjecture)[^4]
7. [Birch and Swinnerton-Dyer Conjecture](https://en.wikipedia.org/wiki/Birch_and_Swinnerton-Dyer_conjecture)

In addition to being the most consequetial, P vs. NP  is one of the easiest to state:

> Can every problem whose answer can be quickly _checked_ by a computer also be quickly _solved_ by a computer?

P and NP are the two categories of problems here: P problems are fast for computers to solve. NP problems are fast for a computer to check[^5].

## An example of P vs. NP

Alice runs a second-hand board game store. She has lots of dominoes, but they’re all mixed up from different sets. She suspects there's a way to distribute the tiles into new boxes and sell them.

Randomly putting tiles into boxes won't do: some boxes will end up with lots of 🂓 dominoes, while some have too many 🁣 tiles. If each box is going to be fair, Alice needs to **divide up the dominoes so that each box has the exact same number of spots.**

Alice gets to work. She first uses an automatic shuffler to sort the tiles into piles, then a smartphone app to instantly counts the spots[^6]. The whole process takes a matter of seconds. This means the domino-sorting problem is **in NP,** which is just another way of saying that a computer can easily check the solution.

How long it will take to get the right distribution just by guessing and checking? If she has 100 dominoes and 5 boxes, how many combinations are there?

The answer: an astounding <span style="font-variant-numeric: lining-nums;">65,&#8203;738,&#8203;408,&#8203;701,&#8203;461,&#8203;898,&#8203;606,&#8203;895,&#8203;733,&#8203;752,&#8203;711,&#8203;432,&#8203;902,&#8203;699,&#8203;495,&#8203;364,&#8203;788,&#8203;241,&#8203;645,&#8203;840,&#8203;659,&#8203;777,&#8203;500</span> possible combinations[^6].

Is there a clever way to get the right combination without guessing and checking? If so, the problem would also be **in P,** which is to say that a computer could quickly solve the problem.

[^1]: <https://www.oxfordmartin.ox.ac.uk/downloads/academic/The_Future_of_Employment.pdf>

[^2]: [The letter](https://www.nsa.gov/news-features/press-room/press-releases/2012/assets/files/nash-exhibit/nash_letters1.pdf) is fascinanting. It's hand-written, and gives a fascinating peek into the mind of one of the most influential mathematicians of the 20th century.

[^3]: This letter is also worth exploring. Gödel and von Neumann are two of the most ground-greaking thinkers of the last 100 years, and in this correspondence, they are exploring some of the most fundamental questions of mathematics. An analysis of the letter, including key fragments, can be found [here](https://ecommons.cornell.edu/bitstream/handle/1813/6910/89-994.pdf).

[^4]: The only Millennium Prize Problem solved to date is the Poincaré conjecture. The solution was published by Grigori Perelman in 2003. Perelman was offered the Fields Medal — the highest honor in mathematics — but turned it down.

[^5]: <https://simple.wikipedia.org/wiki/P_versus_NP>

[^6]: [Here's a link](https://play.google.com/store/apps/details?id=com.gonzalez.dominoapp&hl=en) to such a domino-counting app.

[^6]: This is the [Stirling number of the second kind](https://en.m.wikipedia.org/wiki/Stirling_numbers_of_the_second_kind) S(n,k), where n is the number of objects and k is the number of partitions. In this case, we have [100 objects and 5 partitions](https://www.wolframalpha.com/input/?i=stirlings2(100,5)).
