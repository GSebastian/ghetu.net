# [ghetu.net](https://ghetu.net) - my personal website
My personal website, build using the Stack HTML and CSS elements and Hugo. Hosted on AWS, using S3, CloudFront and Route 53

![desktop version of the website](/screenshots/desktop.png)
![mobile version of the website](/screenshots/mobile.png)

## Tech stack ##

### [Hugo](https://gohugo.io/) ###
Hugo is a static website generator that's got awesome Go-based templating, a nack for performance and pretty easy to pick up workflow.

### [Stack](https://themeforest.net/item/stack-multipurpose-html-with-page-builder/19337626) ###
Stack is a collection of HTML and CSS elements that helps developers who can't design (like myself!) build nice web pages.

### [AWS S3, CloudFront and Route 53](https://aws.amazon.com/) ###
Cheap and blazing fast web hosting, courtesy of Amazon Web Services.

## How do I get this thing to run? ###
1. First you'll need to install Hugo (I have used v0.30.2 successfully for development), otherwise you can't generate the pages
2. `cd` into the root folder of the project and run `hugo server`
3. Copy the IP address from the output, paste it into your browser and TA-DA!
4. (Optional) If you're planning on changing stuff in the `less` files, open another Terminal window, `cd` into the root folder and run `gulp watch`. This will make sure the `less` files get compiled to CSS as you modify them
