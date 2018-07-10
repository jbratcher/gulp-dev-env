# Gulp Live Reload Dev Environment

Use Typescript and SASS, compile on file change, live browser reload, build a package

### Version

1.0.7

## Install Dependencies

```bash
npm install
```

## Start live reload server and compile Typescript, SASS

gulp

```bash
gulp
```
OR

```bash
npm start
```

## Folder and File Structure

```
/src
    /css
    styles.css
        /vendor
        /fonts
            -fontawesome-webfont.eot
            -fontawesome-webfont.svg
            -fontawesome-webfont.ttf
            -fontawesome-webfont.wotf
            -fontawesome-webfont.wotf2
            -FontAwesome.otf
        -font-awesome.min.css
    /img
    /js
        -index.js
        -main.js
    /scss
    -styles.scss
    /ts
      -main.ts
-index.html
-gulpfile.js
-LICENSE
-package.json
-readme.md
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

* Typescript compiles to Javascript
* Sass compiles in to CSS
* JS and CSS are bundled and minified
* Images are optimized and cached
* Font Awesome icons are loaded
* Server is started and refreshes on save
* Autoprefix CSS
* Complile ES6 to ES5


## Future Features:

* Webpack

## Known "bugs"

* ???

#### Change Log

###### 1.0.7

* Added optional Typescript functionality and complier

###### 1.0.6

* Converted to ES6, fixed JS, CSS bug with minified files

###### 1.0.5

* Upgraded to Gulp v4

###### 1.0.4

* Removed jsuglify to use babel complier, will work on fix
