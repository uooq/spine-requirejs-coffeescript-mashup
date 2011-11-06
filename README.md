# CoffeeScript, Spine & Modules in the browser

This is a minor reworking of the [spine "to do list" example](https://github.com/maccman/spine.todos). I took the original example and split it into a modular design, adding requirejs to do asynchronous module loading and require-cs to do coffeescript compilation when modules are loaded.

I did this as a technology proof of concept for a large web app my team is building. This represents a design-time environment but we will be optimizing/minifying the app when we push to a production environment. 

# Requirements

Because this app loads script files on demand via http, it will only work if you run it from a webserver (i.e. you use an http-like url), or if you have a browser that allows ajax calls to fetch modules from the file system. 

I like to do this by running chrome with the startup switch --allow-file-access-from-files. 
