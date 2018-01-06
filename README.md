# Gulp Live Reload Dev Environment

Live Reload via Gulp for SASS

### Version

1.0.6

## Install Dependencies

```bash
npm install 
```

## Compile Sass & Run Dev Server

gulp

```bash
gulp
```
OR

```bash
npm start
```

## Bundle and minify compiled CSS and JS

```bash
gulp useref
```

## Bulid to dist from src

```bash
gulp build
```
## Clean (delete) dist

```bash
gulp clean:dist
```

## Features: 

* Sass compiles in to CSS 
* JS and CSS are bundled and minified
* Images are optimized and cached
* Font Awesome icons are loaded
* Server is started and refreshes on save
* Autoprefix CSS
* Complile ES6 to ES5
* Written in ES6


## Future Features:

* Cleaner workflow
* Webpack


## Known "bugs"

* ???


#### Change Log

###### 1.0.6

* Converted to ES6, fixed JS, CSS bug with minified files

###### 1.0.5

* Upgraded to Gulp v4

###### 1.0.4

* Removed jsuglify to use babel complier, will work on fix