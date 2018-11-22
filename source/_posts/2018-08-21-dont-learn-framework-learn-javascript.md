---
layout: post
title: "Don't learn framework, learn Javascript"
permalink: dont-learn-framework-learn-javascript
date: 2018-08-21 22:35:29
comments: true
description: "Don't learn framework, learn Javascript"
image: https://lucassenarj.github.io/blog/images/post/2018-11-12-dont-learn-framework-learn-javascript.png
keywords: "Javascript, ReactJs, Angular, Frameworks, jQuery, Ionic, React-Native, Fecth API, Ajax"
categories: topics

tags:

---

Recently in my current job, I am dealing a lot with front-end, special **Angular** and **Ionic framework**. We are developing some new features using these technologies. In my parallel projects, I am using **React** and **React-Native** for web and mobile respectively.

All those frameworks had in common that they consume a lot of small libraries and modules that help you to write your code and sometimes make they simple and practical. Like in Angular by example, when you need to do an **HTTP Request**, you had a whole module to explore which give you an asynchronous return that you can easily handle. With **React/React-Native**, you can use an external library like axios or you can implement a new javascript feature called **Fetch API**. In all those cases, you can easily handle with the return of the request.

## But what is the importance to learn native codes, instead frameworks, since I just said that with frameworks it's more practical?

This is something that I always hear talk about. But I never realized the importance to learn the native language of the framework. Now, I have a simple answer to this question: Legacy codes.

At some point in your life, you probably will have to give support to some project that doesn't use this technology. So you will deal with some jquery code, some ajax requests and others old-fashioned techniques. Ok, jQuery and Ajax are not that old like XMLHttpRequest and some other dinosaurs features, but in the world of frameworks, yes, they are old rs.

This was my case a few days ago. I was refactoring an old feature and faced it with the following code:

```
$.ajax({
    url: path,
    dataType: "json",
    type: 'GET',
    success: function(response) {
        div = '';
        if(response.div){
            if(response.div.add){
                div += '<div class="col-md-12">Content added by: '+ response.div.user +'</div>';
            }

            if(response.div.remove){
                div += '<div class="col-md-12">Content removed by '+ response.div.user +'</div>';
            }
        }

        if(!div){
            div += '<div class="col-md-12">Theres no content to show</div>';
        }

        $('#divContent').html(div);
        $('#modal-div').modal();    
    }
});
```

My first thought was: **WHAT THE HELL!** After a few seconds, I started to figure out what I was dealing with. An Ajax request. It's been a while since I saw an ajax request. 

Nowadays we don't use more HTTP request like this. In javascript, using the new feature called Fetch API, we can use like:

```
fetch(url)
.then(response => response.json())
.then(json => {
    alert(json);
}).catch(error => {
    alert(error);
});
```

### In React, using Axios library, we can use like:
```
axios.get(url)
.then(function (response) {
    alert(response)
})
.catch(function (error) {
    alert(error)
});
```

### Using Angular HTTP Module:
```
http.get(url) 
.subscribe(response=>{
    alert(response);
}, (error)=>{
    alert(error);
});
```

It's way simpler to do an HTTP request nowadays than was a few years ago, it's also much more intuitive. But, as you may note, it's also very similar. All of those calls had one method, one callback for success and another one for error. So in the end, had the same logic. This is the reason why is important for you to know the native language to the framework because you won't be tied to one way to write, you will be able to write the same call in several different ways.