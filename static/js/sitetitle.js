let logo_span = document.getElementsByClassName("logo__text")[0];
let url = window.location.toString().split("/");
if(url[3] == "about")
{
    logo_span.innerHTML = "/home/tejas/about";
}
else if(url[3] == "contact")
{
    logo_span.innerHTML = "/home/tejas/contact";
}
else if(url[3] == "post")
{
    logo_span.innerHTML = "/home/tejas/blog";
}
else if(url[3] == "")
{
    logo_span.innerHTML = "/home/tejas";
}
else
{
    logo_span.innerHTML = "/home/tejas/blog";
}
