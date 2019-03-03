---
title: Switching to variable fonts
categories: writing
og:
  title: Switching to variable fonts
  description: Pros, Cons, and lessons learned along the way
  image: /images/variable-1.gif
  image_width: 800
  image_height: 424
updated: 2019-03-03
---

Ever since I first learned about variable fonts, I've wanted to use them in my own work. After learning that  [Source Serif](https://github.com/adobe-fonts/source-serif-pro) and [Inter](https://rsms.me/inter/) both had variable versions, I started switching this site over to use them. Here's how I implemented the change, and what I learned along the way.

## What are variable fonts?

Variable fonts are a new[^1] type of font file. Instead of requiring individual files for bold and light weights, or regular or italic variations, you only need a single variable file.

{% include image.html src="/images/variable-1.gif" caption="A responsive lettering example, courtesy of Erik van Blokland." %}

Why use variable fonts? In addition to technical simplicity (1 font file instead of multiple), variable fonts tend to come in smaller files than their more traditional cousins. Smaller files mean faster load times. Faster load times mean a better internet.

## How I implemented variable fonts

I started with Clearleft's [case study of implementing variable fonts](https://medium.com/clear-left-thinking/how-to-use-variable-fonts-in-the-real-world-e6d73065a604). The instructions they provide are incredibly detailed and useful, so I won't try to re-create them here.

Before I switched to variable fonts, I was loading Source Serif in Roman and Italic at a two different weights. I used typekit's CSS-only loader, as it was super-speedy compared to the javascript equivalent. To get those two fonts from Typekit's server took 4 requests, bringing the page to a total of 8 requests[^2].

<table class="table--responsive l--mar-top-m l--mar-btm-m">
  <colgroup></colgroup>
  <colgroup span="5"></colgroup>
  <thead>
    <tr>
      <th class="table--header-empty"></th>
      <th class="t--align-right table--group-start">First Byte</th>
      <th class="t--align-right">Start Render</th>
      <th class="t--align-right">Requests</th>
      <th class="t--align-right">Bytes in</th>
      <th class="t--align-right table--group-end">Speed Index</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Typekit fonts</th>
      <td data-label="First Byte" class="t--align-right t--numbers-tabular table--group-start">0.21s</td>
      <td data-label="Start Render" class="t--align-right t--numbers-tabular">0.80s</td>
      <td data-label="Requests" class="t--align-right t--numbers-tabular">8</td>
      <td data-label="Bytes In" class="t--align-right t--numbers-tabular">80 KB</td>
      <td data-label="Speed Index" class="t--align-right t--numbers-tabular table--group-end">0.82s</td>
    </tr>
  </tbody>
</table>

My initial attempt at including a variable version of Source Serif, along with introducing Inter, resulted in a surprisingly substantial _increase_ in most metrics.

<table class="table--responsive l--mar-top-m l--mar-btm-m">
  <colgroup></colgroup>
  <colgroup span="5"></colgroup>
  <thead>
    <tr>
      <th class="table--header-empty"></th>
      <th class="t--align-right table--group-start">First Byte</th>
      <th class="t--align-right">Start Render</th>
      <th class="t--align-right">Requests</th>
      <th class="t--align-right">Bytes in</th>
      <th class="t--align-right table--group-end">Speed Index</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Typekit</th>
      <td data-label="First Byte" class="t--align-right t--numbers-tabular table--group-start">0.21s</td>
      <td data-label="Start Render" class="t--align-right t--numbers-tabular">0.80s</td>
      <td data-label="Requests" class="t--align-right t--numbers-tabular">8</td>
      <td data-label="Bytes In" class="t--align-right t--numbers-tabular">80 KB</td>
      <td data-label="Speed Index" class="t--align-right t--numbers-tabular table--group-end">0.82s</td>
    </tr>
    <tr>
      <th scope="row">Variable</th>
      <td data-label="First Byte" class="t--align-right t--numbers-tabular table--group-start">0.22s</td>
      <td data-label="Start Render" class="t--align-right t--numbers-tabular">
        <span class="c--green t--size-s">(-0.1)</span> 0.70s</td>
      <td data-label="Requests" class="t--align-right t--numbers-tabular">
        <span class="c--green t--size-s">(-2)</span> 6</td>
      <td data-label="Bytes In" class="t--align-right t--numbers-tabular">
        <span class="c--red t--size-s">(+464)</span> 544 KB</td>
      <td data-label="Speed Index" class="t--align-right t--numbers-tabular table--group-end">
        <span class="c--red t--size-s">(+0.19)</span> 1.12s</td>
    </tr>
  </tbody>
</table>

Looking into this, I realized that the variable font files were huge: Inter weighs in at 387kb, making up most of the difference. What happened? I thought variable fonts were supposed to be small?

It turns out that the variable font files I was using include a _massive_ amoount of characters: Diacritics for many languages, Cyrillic characters, Greek characters, and so on. I didn't need most of those; I write in english, and system fonts can support automatic translations.

So I used a tool called [glyphhanger](https://github.com/filamentgroup/glyphhanger) to subset my fonts to just latin characters, removing most of the characters I wouldn't need. In the case of Inter, this resulted in a 300kb reduction — that's a *78% reduction.*

With the new subset fonts, my numbers were looking much better:

<table class="table--responsive l--mar-top-m l--mar-btm-m">
  <colgroup></colgroup>
  <colgroup span="5"></colgroup>
  <thead>
    <tr>
      <th class="table--header-empty"></th>
      <th class="t--align-right table--group-start">First Byte</th>
      <th class="t--align-right">Start Render</th>
      <th class="t--align-right">Requests</th>
      <th class="t--align-right">Bytes In</th>
      <th class="t--align-right table--group-end">Speed Index</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Typekit</th>
      <td data-label="First Byte" class="t--align-right t--numbers-tabular table--group-start">0.21s</td>
      <td data-label="Start Render" class="t--align-right t--numbers-tabular">0.80s</td>
      <td data-label="Requests" class="t--align-right t--numbers-tabular">8</td>
      <td data-label="Bytes In" class="t--align-right t--numbers-tabular">80 KB</td>
      <td data-label="Speed Index" class="t--align-right t--numbers-tabular table--group-end">0.82s</td>
    </tr>
    <tr>
      <th scope="row">Variable (subset)</th>
      <td data-label="First Byte" class="t--align-right t--numbers-tabular table--group-start">0.21s</td>
      <td data-label="Start Render" class="t--align-right t--numbers-tabular">
        <span class="c--green t--size-s">(-0.2) </span>0.60s</td>
      <td data-label="Requests" class="t--align-right t--numbers-tabular">
        <span class="c--green  t--size-s">(-2) </span>6</td>
      <td data-label="Bytes In" class="t--align-right t--numbers-tabular">
        <span class="c--red  t--size-s">(+82) </span>162 KB</td>
      <td data-label="Speed Index" class="t--align-right t--numbers-tabular table--group-end">
        <span class="c--green  t--size-s">(-0.17) </span>0.65s</td>
    </tr>
  </tbody>
</table>

Fanstastic! The upsides were fantastic:

- **1 new font**, Inter (previously I was relying on system fonts for sans serif)
- Access to the **full spectrum of font weights** (previously I only had regular and bold)
- A Speed Index improvement of **21%**

And there was only one downside:

- The site downloads an extra 82kb on initial load :(

But wait! Because I am serving the fonts myself, I have better control over caching. Before I made this update, I was relying on Typekit's caching instructions, which only kept the css for a maximum of 10 minutes. Now, 100% of my static assets are cached for more than a week. This means return visitors will experience better performance.

## What I learned

Wrapping it all up:

1. **Variable font support is approaching critical levels for wide adoption** Almost all modern browsers support variable fonts, accounting for [79% of internet users](https://caniuse.com/#search=variable%20fonts).
2. **There are high-quality variable fonts that you can download and use today** Nick Sherman has created a [variable font repository](https://v-fonts.com/) if you'd like to browse and try what's available.
3. **Variable fonts can improve performance if you subset carefully** - While it's not 100% out-of-the-box, there ar easy-to-use subsetting tools like [glyphanger](https://github.com/filamentgroup/glyphhanger) and [fonttools](https://github.com/fonttools/fonttools) that can help you over the finish line.

Next time you're booting up a project, give variable fonts a try.

#### A note on fallback fonts

Astute readers will note that I chose not to implement fallback fonts for older browsers. The reason for this is twofold: first, I'm lazy. I wanted to ship this update without getting in the weeds. Second, I don't care if my site doesn't look identical in all browsers ever. I am confident that it'll look good in whatever fonts match my detailed [system font stacks](https://gist.github.com/don1138/5761014).

#### One weird bug

If you're reading this in Safari, you've probably noticed that all the sans-serif type is italic. I have no idea why this is happening. Do you have any ideas? [Say hi on twitter](https://twitter.com/ilikescience).


[^1]: To say that variable fonts are new is slightly misleading. The concept of variable fonts has been around since the [1970's](https://eyeondesign.aiga.org/parametric-and-variable-typeface-systems-shape-shifters-for-letterforms/), and the technology to implement variable fonts on the web is [at least three years old](https://medium.com/variable-fonts/https-medium-com-tiro-introducing-opentype-variable-fonts-12ba6cd2369). Until recently, browsers have been slow to support variable fonts. As of February 2019, however, [79% of internet users](https://caniuse.com/#search=variable%20fonts) benefit from websitses that use variable fonts.

[^2]: I used [https://www.webpagetest.org/](https://www.webpagetest.org/) for all of these measurements. Each result is the average of 3 runs.