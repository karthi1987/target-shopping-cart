# [Target Shopping cart demo](http://localhost:3333/)

A simple shopping cart based on [AngularJS](http://angularjs.org), [Grunt](http://gruntjs.org) and [LESS](http://lesscss.org) for Target shopping cart demo.<br/>

## Quick start
Install Node.js and then:
```sh
$ git clone git@github.com:karthi1987/target-shopping-cart.git
$ cd target-shopping-cart
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ bower install
$ grunt
```

## Grunt commands
* `grunt` or `grunt watch` - build developer project (build dir)
* `grunt prod` - build production project (prod dir)
* `grunt test` - run tests

## Tools
* [AngularJS](http://angularjs.org) - Base framework
* [Grunt](http://gruntjs.org) - Build tool
* [LESS](http://lesscss.org) - CSS, but smth more
* [Animate.css](http://daneden.github.io/animate.css/) - Animation library, use with ng-animate
* [Numeral.js](http://numeraljs.com/) - Work with numbers, use with filter


## Overall Directory Structure

At a high level, the structure looks roughly like this:

```
angular-shopping-cart/
  |- karma/
  |- src/
  |  |- app/
  |  |  |- <app logic>
  |  |- assets/
  |  |  |- <static files>
  |  |- common/
  |  |  |- <reusable code>
  |  |- less/
  |  |  |- main.less
  |- vendor/
  |  |- angular/
  |  |- bootstrap/
  |  |- etc ..
  |- .bowerrc
  |- bower.json
  |- build.config.js
  |- Gruntfile.js
  |- module.prefix
  |- module.suffix
  |- package.json
```

What follows is a brief description of each entry, but most directories contain
their own `README.md` file with additional documentation, so browse around to
learn more.

- `karma/` - test configuration.
- `src/` - our application sources.
- `vendor/` - third-party libraries. [Bower](http://bower.io) will install
  packages here. Anything added to this directory will need to be manually added
  to `build.config.js` and `karma/karma-unit.js` to be picked up by the build
  system.
- `.bowerrc` - the Bower configuration file. This tells Bower to install
  components into the `vendor/` directory.
- `bower.json` - this is our project configuration for Bower and it contains the
  list of Bower dependencies we need.
- `build.config.js` - our customizable build settings; see "The Build System"
  below.
- `Gruntfile.js` - our build script; see "The Build System" below.
- `module.prefix` and `module.suffix` - our compiled application script is
  wrapped in these, which by default are used to place the application inside a
  self-executing anonymous function to ensure no clashes with other libraries.
- `package.json` - metadata about the app, used by NPM and our build script. Our
  NPM dependencies are listed here.

### The Build System

The best way to learn about the build system is by familiarizing yourself with
Grunt and then reading through the heavily documented build script,
`Gruntfile.js`. But you don't need to do that to be very productive with
`ngBoilerplate`. What follows in this section is a quick introduction to the
tasks provided and should be plenty to get you started.

`grunt watch` will execute a full build up-front and then run any of the aforementioned `delta:*` tasks as needed to ensure the fastest possible build. So whenever we're working on the project, start with:

```sh
$ grunt
```

And everything will be done automatically!

Before push it to production, just run the `prod`
command:

```sh
$ grunt prod
```
This will concatenate and minify the sources and place them by default into the
`prod/` directory. There will only be three files: `index.html`,
`target-shopping-cart.js`, and `target-shopping-cart.css`. All of the vendor dependencies like
Bootstrap styles and AngularJS itself have been added to them for super-easy
deploying. If you use any assets (`src/assets/`) then they will be copied to
`prod/` as is.
