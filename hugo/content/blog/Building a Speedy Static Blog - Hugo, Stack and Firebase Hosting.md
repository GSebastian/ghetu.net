---
title: "Building a Speedy Static Blog - Hugo, Stack and Firebase Hosting"
date: 2017-11-13T19:08:15Z
draft: false
thumbnail: /img/speed.jpg
thumbnailalt: "racing car speeding"
description: "Ever since I noticed that web hosting was part of Firebase's offering I wanted to give it a go - CDN hosting with a free tier, who could say no to that?"
tags: ["web development", "stack template", "firebase hosting", "hugo"]
---

{{% figure src="/img/speed.jpg" caption="Credit: chuttersnap via Unsplash" %}}

&nbsp;

Ever since I noticed that web hosting was part of Firebase's offering I wanted to give it a go - _CDN hosting with a free tier, who could say no to that?_. A couple of months ago I impulse-bought a front-end library called Stack but being the lazy Wordpress-loving guy I am, I never even considered that I could build a blog using it. After finding out about Hugo, a really well optimised CMS for building static websites, I finally connected the dots and the result is this blog.

<!--more-->

### Firebase Hosting ###

[Firebase Hosting](https://firebase.google.com/docs/hosting/)

Snappy loading times are not the sole reason why Firebase Hosting is an interesting proposition. I found myself deploying the website to Firebase a lot more than I probably should have because of the really convenient CLI. Furthermore, the pricing model is really friendly for a small development blog, with a free tier of 1GB of storage and 10GB of traffic (and $0.026/GB
$0.15/GB onwards). Last but not least, deployments are all saved so they can be reverted almost instantly - just in case something goes horribly wrong.

### Stack ###

[Demo / Themeforrest](https://themeforest.net/item/stack-multipurpose-html-with-page-builder/19337626)

Stack is a collection of predefined HTML elements and custom CSS that make building a good-looking website fairly easy. It even comes with a visual building tool called Variant that's great for laying out a basic structure that can be later customised. Though the number of blocks, elements and CSS classes that it offers can be quite daunting, I found it really useful to just go through their samples and pick the things I liked.

### Hugo ###

[Hugo](https://gohugo.io)

Lastly, Hugo had the steepest learning curve out of the three, though nowhere near as steep as learning how to build for Wordpress. Posts are generated from markdown files and, as with any  static website framework, naming conventions and file structure are crucial to getting things to work. 

#### A few of the things that really stuck with me (please note that there are other ways of achieving the same results) ####

* • templates are organised into _single_ and _list_ pages and need to be named `single.html` and `list.html` respectively
* • furthermore, as I mentioned above, the file structure is crucial. For example for this website, it's as follows:

```
- /layouts
  - index.html
  - /blog
    - list.html
    - single.html 
```

* • there are couple of really useful internal templates for Disqus comments and Google Analytics that should help you get everything up and running in a matter of minutes. More details can be found [here](https://gohugo.io/templates/internal/)
* • other templates include pagination, Opengraph and Twitter tags, though they're not documented
* • archetypes are a really useful and flexible way of setting up the SEO tags / metadata for your posts. Here's a basic post archetype:

```
---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
thumbnail: img/default-thumbnail.jpg
thumbnailalt: ""
description: ""
tags: []
---
```

![warp speed star wars](https://media.giphy.com/media/XAlKUAC4S1X32/giphy.gif#center-image)

### The results ###

After some CSS purging and JS minifying I put the website to the test. The results via [dotcom-tools.com](https://dotcom-tools.com) (what a great tool by the way!) for the landing page were:

* • `1.2 sec` average first visit 
* • `429.9 ms` average second visit
* • `342.5 KB` downloaded for the first visit
* • `35 b` downloaded for the second visit

And the results for loading a single article (this one!) were:

* • `1.7 sec` average first visit 
* • `506.9 ms` average second visit
* • `399.3 KB` downloaded for the first visit
* • `35 b` downloaded for the second visit

> Warp speed ahead, Chewy!
