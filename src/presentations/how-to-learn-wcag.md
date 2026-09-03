---
SPDX-FileCopyrightText: 2026 Cam Coulter <git@camcoulter.com>
SPDX-License-Identifier: CC-BY-NC-ND-4.0
layout: layouts/page.njk
title: "How to Learn WCAG"
description: "You can't learn WCAG in an hour. But you can learn how to learn WCAG in an hour."
---

{{ description }}

Presentation notes for WordPress Accessibility Meetup. September 3, 2026.

## About Me

* Member of the International Association of Accessibility Professionals (IAAP)
* Certified Professional in Web Accessibility (CPWA)
* Deputy ADA/504 Coordinator, Digital Accessibility at Santa Clara University
* Previously worked in disability services and accessibility consulting
* Find me online at [www.camcoulter.com](https://www.camcoulter.com/)

## The Road Before Us

* Essential Context
* Beginning Your Journey
* Getting to Where You're Going
* When the Road Curves

## Essential Context

### What is WCAG?

* [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
* An international standard published by the World Wide Web Consortium (W3C)
* "[Disability is a Spectrum, Not a Binary](https://www.24a11y.com/2018/disability-is-a-spectrum-not-a-binary/)" by Steve Barnett and Nicola du Toit
	* And accessibility is too!
* WCAG gives us a specific, measurable way to assess accessibility.

### Why learn WCAG?

* It's the central standard for website accessibility. (Other standards reference or incorporate it.)
	* [Revised Section 508 ICT Standards](https://www.access-board.gov/ict/#E205.4)
	* [EN 301 549](https://accessible-eu-centre.ec.europa.eu/content-corner/digital-library/en-3015492021-accessibility-requirements-ict-products-and-services_en)
* Laws, regulations, and settlement agreements may cite WCAG.
	* The DOJ's [April 2024 regulation](https://www.ada.gov/resources/2024-03-08-web-rule/) under ADA Title II identifies WCAG 2.1 AA as the technical standard for web content and mobile apps.
	* "[Justice Department Applies ADA Title III To Carnival’s Cruise Ships, Website, and Mobile App in a Landmark Settlement](https://www.adatitleiii.com/2015/08/justice-department-applies-ada-title-iii-to-carnivals-cruise-ships-website-and-mobile-app-in-a-landmark-settlement/)" by Minh N. Vu
* You can apply WCAG to non-web content: [Guidance on Applying WCAG 2 to Non-Web Information and Communications Technologies](https://www.w3.org/WAI/standards-guidelines/wcag/non-web-ict/).

### How is WCAG structured?

#### Principles & Levels
* 4 broad **principles**, each broken up into **guidelines** and testable **success criteria**
* Perceivable, Operable, Understandable, and Robust (POUR)
* 3 levels: A, AA, and AAA

#### Versions
* WCAG 1.0 (1999)
* WCAG 2.0 (2008)
* WCAG 2.1 (2018)
* WCAG 2.2 (2023)
* WCAG 3 (draft)

### How do I conform?

* To make a page conform, satisfy each SC.
	* Or provide a conforming alternate version.
	* If an SC does not apply, it is satisfied.
* Use accessibility-supported methods.
* Ensure non-interference.

## Beginning Your Journey

### Read WCAG

Read WCAG 2.2 at [w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/).

### Resources in Plain English

#### Why?

* The standard itself can be sparse, technical, and hard to interpret.
* **1.3.1 Info and Relationships**: "Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text."
* **2.5.3 Label in Name**: "For user interface components with labels that include text or images of text, the name contains the text that is presented visually."

#### Let's break it down

* [WCAG in Plain English](https://aaardvarkaccessibility.com/wcag-plain-english/) by AAArdvark
* [Simple WCAG](https://simplewcag.org/) by Thiago Piacentini
* "[WCAG, but in language I can understand](https://www.tempertemper.net/blog/wcag-but-in-language-i-can-understand)" by Martin Underhill
* [The A11y Project's Checklist](https://www.a11yproject.com/checklist/)
* And a note of warning: "[The 2.1.1 'specific timings' Clause](https://adrianroselli.com/2026/08/the-2-1-1-specific-timings-clause.html)" by Adrian Roselli

### Layers of Guidance

* [The WCAG 2 Documents](https://www.w3.org/WAI/standards-guidelines/wcag/docs/)
	* Normative vs informative
* Understanding WCAG
* Techniques & Failures
* Accessibility Conformance Testing (ACT) Rules
* Bookmark this: [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG22/quickref/)
* W3C's [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)

## Getting to Where You're Going

### Learn How the Web Works

That is, learn HTML, CSS, and JavaScript.

* FreeCodeCamp
	* [Responsive Web Design Certification](https://www.freecodecamp.org/learn/responsive-web-design-v9/)
	* [JavaScript Certification](https://www.freecodecamp.org/learn/javascript-v9/)
* LinkedIn Learning
	* [Advance Your Skills in HTML](https://www.linkedin.com/learning/paths/advance-your-skills-in-html)
	* [Learn CSS](https://www.linkedin.com/learning/paths/learn-css)
	* [Getting Started with WordPress](https://www.linkedin.com/learning/paths/getting-started-with-wordpress)
* Watch some YouTube
	* [Jen Simons/Layout Land](https://www.youtube.com/@LayoutLand)
	* [Kevin Powell](https://www.youtube.com/@KevinPowell)
	* [Miriam Suzanne](https://www.youtube.com/watch?v=aHUtMbJw8iA)
* Read [MDN Web Docs](https://developer.mozilla.org/en-US/)
* Make a website!

### Learn ARIA

* [WAI-ARIA Overview](https://www.w3.org/WAI/standards-guidelines/aria/)
* The specification: [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
* [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)
* Look into browser and assistive tech support
	* [Assistive Technology Interoperability Reports](https://aria-at.w3.org/reports)
	* [a11ysupport.io](https://a11ysupport.io/)

### Start Testing

* Learn different ways to test the WCAG SCs (manual, bookmarklets, automatic tools, assistive technology)
	* [ANDI](https://www.ssa.gov/accessibility/andi/help/install.html)
	* [Section 508 ICT Testing Baseline for Web](https://ictbaseline.access-board.gov/web-baselines/)
* Use testing tools and see what WCAG SCs they reference.
	* [axe DevTools for Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
	* [Equalize Digital Accessibility Checker for WordPress](https://wordpress.org/plugins/accessibility-checker/)

### Learn a couple screen readers

Screen readers can help you test for conformance with WCAG.

They can also help you better understand and appreciate WCAG.

#### Which one?
* [NVDA](https://www.nvaccess.org/) on Windows
* [VoiceOver on Mac](https://support.apple.com/en-ca/guide/voiceover/welcome/mac)
* [TalkBack](https://support.google.com/accessibility/android/topic/3529932) on Android
* [VoiceOver on iPhone](https://support.apple.com/en-ca/guide/iphone/iph3e2e415f/ios)

#### Resources
* [Screen Reader Reference Guides (Deque)](https://dequeuniversity.com/screenreaders/)
* [Getting Started Guides (A11y Project)](https://www.a11yproject.com/posts/#assistive-technology)


### Check out WCAG-EM

* [WCAG-EM Overview](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/)
* The specification: [WCAG Evaluation Methodology (WCAG-EM) 2.0](https://www.w3.org/TR/wcag-em-2/)
* [WCAG-EM Report Tool](https://www.w3.org/WAI/eval/report-tool/)

### Practice

* Participate in Knowbility's [Accessibility Internet Rally (AIR)](https://knowbility.org/programs/air/).
* Audit your websites.
* Audit more websites.
* Get a job auditing websites: [www.a11yjobs.com](https://www.a11yjobs.com).

### Get Certified

* [Certified Professional in Accessibility Core Competencies (CPACC)](https://www.accessibilityassociation.org/cpacc)
* [Web Accessibility Specialist (WAS)](https://www.accessibilityassociation.org/was-exam)
* [Trusted Tester](https://www.section508.gov/test/trusted-tester/)

## When the Road Curves

### Be in Community (1)

* W3C
	* [github.com/w3c/wcag](https://github.com/w3c/wcag)
* IAAP
	* [Courses & Webinars](https://www.accessibilityassociation.org/education-overview)
	* [Connections Community](https://www.accessibilityassociation.org/connections-community)

### Be in Community (2)

* Newsletters: [A11y Weekly](https://a11yweekly.com/)
* Conferences:
	* [axe-con](https://www.deque.com/axe-con/)
	* [Inclusive Design 24](https://inclusivedesign24.org)
	* [WP Accessibility Day](https://wpaccessibility.day/)
	* "[These (still) aren't the SCs you're looking for](https://www.youtube.com/watch?v=ADIgU53Y2Rg)" by Patrick H. Lauke
* Organizations
	* [Tetralogical](https://tetralogical.com/)
	* [Vispero](https://vispero.com/resources/category/blog/) (see "[Heading off confusion: When do headings fail WCAG?](https://vispero.com/resources/heading-off-confusion-when-do-headings-fail-wcag/)")
* Blogs
	* [HTMHell](https://www.htmhell.dev/)
* People
	* [Adrian Roselli](https://adrianroselli.com/)
	* [Eric Eggert](https://yatil.net/)
	* [Nat Tarnoff](https://tarnoff.info/)

### WCAG 3

* [WCAG 3 Introduction](https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/) from W3C WAI
* "[Be a Digital Ally: WCAG 3 Update](https://knowbility.org/blog/2025/be-a-digital-ally-wcag-3-update)" by Rachael Bradley Montgomery (Knowbility webinar)
* "How we want to make WCAG better" by Hidde de Vries ([upcoming presentation in Inclusive Design 24](https://inclusivedesign24.org/2026/schedule/))

## Thank You!

Do we have any questions?

Find me on the web at [www.camcoulter.com](https://www.camcoulter.com/).
