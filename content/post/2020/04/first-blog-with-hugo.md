+++
author = "Tejas Kashinath"
categories = ["Static Websites", "Hugo", "Web"]
date = 2020-04-16T16:33:00Z
description = "A fast and simple tutorial on getting started with hugo"
draft = true
featured = "/img/2020/04/hugo_logo.svg"
featured_image = "/img/2020/04/hugo_logo.svg"
slug = "first-blog-with-hugo"
tags = ["Hugo", "Web", "Static", "Blog", "Setup"]
title = "Creating Your First Blog With Hugo"

+++
![Hugo Logo](/img/2020/04/hugo_logo.svg)
<center><em><a href="https://gohugo.io/">(Image Source)</a></em></center>

So, I've been meaning to start a blog site for a long time and for the most part this was because I wanted to learn more about web development, deployment hosting, DNS Setup etc. The lockdown because of the Corona Virus was the perfect excuse for me finally get down to it.

I decided that I wanted this to be my first post, because I spent a lot of time browsing, and searching for good tutorials on how to get started with Hugo, and decided to document what worked best for me. 

#### Installation

Let's start off by installing Hugo. If you're using a distribution of linux that supports snap, you can install it using the following command. 

```bash
sudo snap install Hugo --channel=extended
```

The extended channel enables support for SCSS which was a requirement of the template I used. Instructions for installing Hugo on other operating systems can be found [here](https://gohugo.io/getting-started/installing/).

Test your hugo installation. If your output is similar to the one below, you are good to go!!!. 

```bash
$ hugo version
Hugo Static Site Generator v0.69.0/extended linux/amd64 BuildDate: 2020-04-10T12:13:21Z    
```

#### Creating a Hugo Site

Next, we create our site. Run the following command to create a blank website template. 

```bash
hugo new site mysite
```

It is recommended to run the command in a separate empty directory in your home directory because the command will create a new folder called mysite. 

![Hugo New Site Screenshot](/img/2020/04/hugo__screen1.jpg)

#### Applying a theme

Hugo does not ship with a default theme out of the box, so you'll need a theme. You can browse some awesome hugo themes [here](https://themes.gohugo.io "Hugo Themes"). I liked [this](https://themes.gohugo.io/hugo-theme-hello-friend-ng/ "hello-friend-ng") theme the best even though it was a little complicated to set up in the beginning, given that I had never worked with Hugo or Go templates before. 

Hugo themes must be copied to the ```mysite/themes``` directory. I chose to directly clone the repository for my template. 

```bash
git clone https://github.com/rhazdon/hugo-theme-hello-friend-ng.git themes/hello-friend-ng
```

Now, take a look within the folder for your theme. All themes come with an ```exampleSite``` directory that contains the bare minimum needed to build the website. The files you'll need from this directory are the ```config.toml``` and the files within the content directory. Do note that Hugo also supports configuration files in JSON and YAML format, so you might have to adapt accordingly.

![Hugo Directory Structure](/img/2020/04/hugo_directory.jpg)

The config file basically tells Hugo what content goes where, what extras to include etc. Copy the config file from within the ```exampleSite``` directory and paste it to the ```mysite``` directory. Here is a look at my configuration file.

```toml
baseURL = "https://tejaskashinath.ml"
title   = "Hello, World"

DefaultContentLanguage = "en"
theme = "hello-friend-ng"

archetypeDir = "archetypes"
contentDir   = "content"
dataDir      = "data"
layoutDir    = "layouts"
publishDir   = "public"

enableRobotsTXT = true
enableGitInfo   = false
enableEmoji     = true

[permalinks]
  post = "/:year/:month/:filename/"

[author]
  name = "Tejas Kashinath"

[taxonomies]
  tag      = "tags"
  category = "categories"

[params]
  dateform        = "Jan 2, 2006"
  dateformShort   = "Jan 2"
  dateformNum     = "2006-01-02"
  dateformNumTime = "2006-01-02 15:04 +0530"
  comments = true
  ...
```

Now, copy the contents of ```exampleSite/content``` to ```mysite/content```.  Now run

```bash
hugo serve
```

Navigate to `localhost:1313` in your browser, and you should see your website.

Now, you can customize your website by modifying the `config.toml` file, and adding your own settings to it.  You can add new posts under the relevant directory in your `mysite/content` folder. All Hugo posts are Markdown files, so if you need to create a new post, just add a new markdown file. 

Since Hugo is a static site generator, it basically gives you a full ready to use version of your website every time you build it. To build the site, run

```bash
hugo
```

Your site should be available in the `mysite/public` folder. To preview the website, you can open up the `index.html` file in a browser.

#### Closing Thoughts

Hugo is simple to use, easy and no-fuss, and does not require extensive knowledge of any programming language. Other static site generators like Gatsby.js and Ghost are also good options when creating a blog.  

And that's it !!!!.  In the next post, I'll cover hosting and adding a CMS (Content Management System). 

 If you have any questions or suggestions on how i can improve, please do [contact me](/contact).