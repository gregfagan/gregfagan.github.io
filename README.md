Personal Website
================

A playground for my studies in game design and web development.

Structure
---------

    ├── README.md       this document
    ├── Gruntfile.js    Grunt configuration
    ├── package.json    npm configuration
    ├── index.html      main page
    ├── js/             
    ├── css/           
    ├── img/           
    └── build/          output of build, root of server


I build and deploy the site with [Grunt](http://gruntjs.com):

    $ grunt                     // build
    $ http-server build &       // preview locally
    $ grunt watch &             // rebuild when changed
    $ grunt deploy              // deploy to S3

Stylesheets are created with [Stylus](https://github.com/LearnBoost/stylus).