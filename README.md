# Gulp Live Reload Dev Environment

Live Reload via Gulp for SASS

### Version

1.0.5

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


## Future Features:

* Fix bugs in min files
* Refactor for ES6 JS

## Known "bugs"

* CSS and JS are minified but not prefixed or complied.  Unminified versions are working as intended.


#### Change Log

###### 1.0.5

* Upgraded to Gulp v4

###### 1.0.4

* Removed jsuglify to use babel complier, will work on fix