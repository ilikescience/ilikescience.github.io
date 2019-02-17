---
title: Switching to variable fonts
categories: writing
og:
  title: Switching to variable fonts
  description: Maximize your team's knowledge base, not their velocity
  image: /images/learning-0.jpg
  image_width: 1400
  image_height: 774
updated: 2019-02-16
---

A few weeks ago, I switched this site's typography over to variable fonts. Here's how I implemented the change, and what I learned along the way.

## What are variable fonts?

Variable fonts are a new type of font file. In a nutshell, a variable font is a single file that does what used to require multiple files: instead of needing files for bold and light weights, or regular or italic variations, you only need a single file.

To say that variable fonts are new is slightly misleading. The concept of variable fonts has been around since the 1970's[^1], and the technology to implement variable fonts on the web is at least three years old[^2]. However, until recently, browsers have been slow to support variable fonts. As of February 2019, however, [79% of internet users](https://caniuse.com/#search=variable%20fonts) benefit from websitses that use variable fonts.

{% include image.html src="/images/variablefonts-1.png" %}

## Why use variable fonts?

In addition to technical simplicity (1 font file instead of multiple), variable fonts tend to come in smaller files than their more traditional cousins. Smaller files mean faster load times. Faster load times mean a better internet.

## How I implemented variable fonts

I started with Clearleft's [case study of implementing variable fonts](https://medium.com/clear-left-thinking/how-to-use-variable-fonts-in-the-real-world-e6d73065a604).

[^1]:<https://eyeondesign.aiga.org/parametric-and-variable-typeface-systems-shape-shifters-for-letterforms/>

[^2]:<https://eyeondesign.aiga.org/parametric-and-variable-typeface-systems-shape-shifters-for-letterforms/>