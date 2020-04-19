+++
aliases = []
author = "Tejas Kashinath"
date = 2020-04-16T16:33:00Z
featured_image = "/img/2020/04/hugo_logo.svg"
slug = "how-i-set-up-this-blog-part1"
title = "How I Set Up This Blog: Part 1"
+++
![Hugo Logo](/img/2020/04/hugo_logo.svg)
<center><em><a href="https://gohugo.io/">(Image Source)</a></em></center>

So, I've been meaning to start a blog site for a long time and for the most part this was because I wanted to learn more about web development, deployment hosting, DNS Setup etc. The lockdown because of the Corona Virus was the perfect excuse for me finally get down to it. After alot of reading, research and endless google searches, I decided on  [Hugo](https://gohugo.io), a framework for building static websites based on Go. Hugo offers a huge number of [themes](https://themes.gohugo.io/), open source and easy to use. The best part about hugo is, I can write all my posts in Markdown which hugo automatically renders to HTML, no dealing with an HTML Spaghetti or formatting issues. 

First things first though, installing Hugo: 

If you're using a distribution of linux that supports snap, simply run
```bash
sudo snap install Hugo --channel=extended
```
instructions for installing Hugo in other operating systems can be found [here](https://gohugo.io/getting-started/installing/).

Next, we create our site. Run the following command to create a blank website in Hugo. 
```bash
hugo new site mysite
```
Then navigate to ```mysite/themes``` and clone the repository for your prefered theme. In my case, 
```bash
git clone https://github.com/rhazdon/hugo-theme-hello-friend-ng.git
```
Now, to quickly setup and test your website from the mysite directory, run

```bash
cp themes/your-theme-name/exampleSite/config.toml mysite/config.toml
cp -r themes/your-theme-name/exampleSite/content mysite/content
```
And then from the project root, run
```bash
hugo serve
```
Then navigate to ```localhost:1313``` in your browser, and you should see your website. 

Now, you can customize your website by modifying the ```config.toml``` file, and adding your own settings to it.  You can add new posts under the relevant directory in your ```mysite/content``` folder.

Since Hugo is a static site generator, it basically gives you a full ready to use version of your website every time you build it. To build the site, run
```bash
hugo
```
Your site should be available in the ```mysite/public``` folder. To preview the website, you can open up the ```index.html``` file in a browser. 

And thats it !!!!. In the next post, I'll cover hosting and adding a CMS. If you have any questions or suggestions on how i can improve, please do [contact me](/contact).



