---
title: Keeping Your Custom Email Address While Using Firebase Hosting
date: 2017-12-09 23:30:19 +0000
draft: false
thumbnail: img/post.jpg
thumbnailalt: post boxes with newpapers hanging off
description: In my last post I praised Firebase Hosting for its speed and how easy
  I found deployments, however I completely neglected the fact that it doesn't support
  email hosting. Almost two weeks after marking the switch I realised that my email
  was not working anymore (I know, I know, I should have figured it out earlier).
tags:
- web hosting
- web development
- firebase hosting
- email hosting

---

{{% figure src="/img/post.jpg" caption="Credit: Samuel Zeller via Unsplash" %}}

&nbsp;

In [my last post](./building-a-speedy-static-blog---hugo-stack-and-firebase-hosting/) I praised Firebase Hosting for its speed and how easy I found deployments, however I completely neglected the fact that it doesn't support email hosting. Almost two weeks after marking the switch I realised that my email was not working anymore (I know, I know, I should have figured it out earlier).

<!--more-->

### What Went Wrong ###

Short answer: **I pointed my domain's A-type DNS zone records directly to Firebase**.

My email setup uses _ghetu.net_ as a domain, with MX records pointing to [Zoho Mail](https://www.zoho.com/mail/) - this allows me to get 5GB of free storage while using a custom domain. Quite obviously, setting MX records requires a hosting provider that supports email, so when I pointed my domain to Firebase I made those MX records vanish into the abyss as well as all of my incoming emails.

### How I Fixed It ###

The [high-level solution](https://groups.google.com/d/msg/firebase-talk/Dr-jYjZ7cKY/kzldBzZSBAAJ) came from the Firebase Google Group - **using a hosting provider that does support email and redirecting just the http traffic to Firebase**. 

Instead of pointing the A-type DNS zone records directly to Firebase (from my domain name provider's website), I switched them back to my old hosting provider (which supports email). Afterwards, from my old hosting provider's cPanel, I removed the existing A-type records (which pointed http traffic to my old host) and added the ones provided by Firebase.

{{% figure src="/img/cpanel-overview-domains.png" caption="From cPanel, navigate to the Domains section and select Zone Editor" %}}

{{% figure src="/img/cpanel-zone-editor.png" caption="Clicking Manage takes you to all DNS records - remove A records for the domain/subdomain that you want to be hosted on Firebase" %}}

{{% figure src="/img/cpanel-add-a-record.png" caption="Add the A records provided by Firebase in the console" %}}

&nbsp;

As a result, incoming http requests get sent to my old hosting provider which routes them to Firebase. Incoming mail requests also get sent to my old hosting provider which routes them to Zoho Mail. Happy days!

![bunny rabbit chewing a letter](https://media.giphy.com/media/u8IJtQ7dfZhn2/giphy.gif#center-image)