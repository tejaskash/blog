+++
aliases = []
author = "Tejas Kashinath"
categories = ["Cloud", "Web", "Nginx"]
date = 2020-04-20T17:40:00Z
description = "An In-depth guide to hosting a static website with NGINX on Google Cloud"
featured = "/img/2020/04/google_logo.svg"
featured_image = "/img/2020/04/google_logo.svg"
slug = "hosting-static-site-gcloud"
tags = ["Hosting", "Cloud", "Google", "NGINX"]
title = "Hosting a static website on Google Cloud Platform"

+++
![GCP Logo](/img/2020/04/cloud_logo.svg)

<center><a href="[https://upload.wikimedia.org/wikipedia/commons/d/d8/Google-Compute-Engine-Logo.svg](https://upload.wikimedia.org/wikipedia/commons/d/d8/Google-Compute-Engine-Logo.svg "https://upload.wikimedia.org/wikipedia/commons/d/d8/Google-Compute-Engine-Logo.svg")"><em>(Image Source)</em></a></center>

The next step after setting up your blog or website is making it available for the world to see. There are several hosting services such as such as [Netlify](https://www.netlify.com/), [ZEIT](https://vercel.com/) and [GitHub Pages](https://pages.github.com/) that are free and provide support for a wide range of Content Management Systems and static site generators and are easily integrable with git. These services are incredibly easy to setup and will have you up and running in no time. 

The other, less commonly used method of getting your blog site live is to self-host your website using an instance or virtual machine in the cloud, like AWS's[ EC2](https://aws.amazon.com/ec2/) or Google's [Compute Engine](https://cloud.google.com/compute). Now granted, this is probably not the best or the cheapest way to host a static website given that you can also host it out of an [S3]() or [GCS]() bucket or any of the services I listed above. But, if like me you already have an instance running that you use for stuff, it is super easy to configure to host your website.  