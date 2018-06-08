---
layout: post
title: WSJ.com Accessibility Guidelines v1
---

## Introduction

**Accessibility** is the word we use when describing a broad set of guidelines and principles that make our products _easy to use_.

This document provides guidelines, tools, and resources to ensure our products are accessible to all our members.

### Why Accessibility is Important

Many of our members have visual, hearing, motor, or cognitive disabilities. It is our goal to provide the same value to them as any other member.

However, **accessibility is for everybody**. Here are some examples of _situational disabilities_: 

- Visual: Reading a story outside in bright sunlight that makes it difficult to read small text
- Hearing: Watching a video in a loud place that makes it difficult to hear audio
- Motor: Wearing winter gloves that make it difficult to use a touchscreen accurately
- Cognitive: Listening to a podcast while cooking, making it difficult to pay attention

By adhering to and maintaining these principles and guidelines, we can make our products better for **all** our users.

### How to Use This Document

This document is a snapshot of our current set of accessibility principles and guidelines. It will be updated to reflect our evolving understanding; please refer to it often.

By familiarizing yourself with this document, you’re supporting our mission of producing more accessible and inclusive products.

## Principles & Guidelines

### Principle #1: Perceivable

Users should be able to clearly perceive content and interface elements.

-   [WCAG 2.0 Definition of Perceivable](https://www.w3.org/TR/WCAG20/#perceivable)

#### Guidelines****: Text alternatives

*   **Provide alternative text for all images.** Use alt attributes in image tags. Screen readers use these attributes to indicate what an image displays.
*   **Provide captions or transcripts for audio and video.**
*   **When using icons without text labels, provide**  **[ARIA labels](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)** **or other text-based alternatives to communicate functionality.**

#### Guidelines: Adaptable content

*   **Render HTML in the order that the page is intended to be read.**

#### Guidelines: Distinguishable content

*   **Ensure that the contrast ratio of text color to background color is at least 4.5:1**
*   **Ensure there is no loss of content or functionality when text is resized up to 200% using the browser’s built-in resizing mechanism.**
*   **Use actual text instead of images of text.**
*   **Provide play, pause, and volume controls for all audio.**
*   **Ensure that at least 75% of page text is at or above 16px in size.**

### Principle #2: Operable

All users should be able to navigate and operate all of the functions of an interface.

*   [WCAG 2.0 Definition of Operable](https://www.w3.org/TR/WCAG20/#operable)

#### Guidelines: Keyboard accessible

*   **Ensure all functional elements have a clear focus state.**
*   **Avoid keyboard traps.** Keyboard traps occur when a user cannot continue past a certain element using keyboard navigation alone

#### Guidelines: Enough time

*   **Provide controls for timed content** Timed content includes slideshows, automatic redirects, or automated log-out systems. Users should be able to pause or delay any timed action.

#### Guidelines: Seizures

*   **Flashing light should not occur more than three times per second.**

#### Guidelines: Navigable

*   **Provide a link for users to skip to the page's main content.** One of the first links on every page of a website should include a link for users to bypass repeated blocks of content, such as the navigation. This is especially important for pages that have large, multi-layered navigation menus.

*   **Write meaningful page titles.**
*   **Provide more than one way to locate a given page.** Pages should be accessible using search or a sitemap in addition to the site’s primary navigation.
*   **Provide information about the user’s current location.** Information about the user’s location can be conveyed through bread crumbs, highlighted navigation, or clear titles.

### Principle #3: Understandable

Users should be able to understand content. Users should also be able to understand how to operate the functions of an interface.

*   [WCAG 2.0 Definition of Understandable](https://www.w3.org/TR/WCAG20/#understandable)

#### Guidelines: Readable

*   **Specify page language in HTML.**

#### Guidelines: Predictable

*   **Provide consistent navigation.**
*   **Clearly communicate automatic redirects or popups before they occur.**

#### Guidelines: Input Assistance

*   **Provide labels & instructions for input elements.**
*   **Provide error messages in simple language.** Avoid using error codes as the only means to communicate an error state.
*   **Help users avoid errors.** Check inputs for errors before submission, and give the user is the opportunity to correct before submission.

### **Principle #4: Robust**

Content and interface elements should operate reliably by a wide variety of operating systems, consumer hardware, and assistive technology.

*   [WCAG 2.0 Definition of Robust](https://www.w3.org/TR/WCAG20/#robust)

#### Guidelines: Compatible

*   **Validate html code.**
*   **Specify the purpose of interface elements.** If semantic HTML can’t be used, add [ARIA roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques) to clearly communicate the purpose of the element.

## Tools & Resources

### Tools For Designers

*   [Contrast](https://usecontrast.com/) - a Mac app to check color contrast ratios
*   [Stark](http://www.getstark.co/) - a Sketch plugin to simulate color blindness and check contrast ratios
*   [Funkify](http://www.funkify.org/) - a Chrome extension to simulate various vision and motor impairments

### Tools For Developers

*   [Pa11y](http://pa11y.org/) - automated accessibility testing from the command line
*   [Lighthouse](https://developers.google.com/web/tools/lighthouse/) - accessibility testing built into Chrome’s dev tools
*   A[utomated Accessibility Testing Tool](https://github.com/paypal/AATT) - scriptable Node.js-based accessibility testing

### Resources

*   [WebAIM’s WCAG 2.0 Checklist](https://webaim.org/standards/wcag/checklist) - an easier-to-use version of the official WCAG 2.0.
*   [WebAIM: Using VoiceOver to Evaluate Web Accessibility](https://webaim.org/articles/voiceover/) - a guide to using VoiceOver to familiarize yourself with screen reader technology

## References

*   [WCAG 2.0](https://www.w3.org/WAI/intro/wcag.php)
*   [The Accessibility Cheatsheet](https://bitsofco.de/the-accessibility-cheatsheet/)
*   [Accessibility - MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
*   [Accessibility - W3C](https://www.w3.org/standards/webdesign/accessibility)