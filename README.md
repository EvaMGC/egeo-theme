# Egeo themes

Egeo Theme is a theme to work with [Egeo](https://github.com/Stratio/egeo), the Stratio's component's library to build interfaces.

In this repository, you'll find the CSS to put an skin over the Egeo components but this is only one part of the project. You can discover more in:

* [egeo](https://github.com/Stratio/egeo): The egeo library of components.
* [egeo-web](http://egeo.stratio.com): The official website of Egeo.
* [egeo-ui-base](https://github.com/Stratio/egeo-ui-base): Fonts and assets needed in Egeo projects.


## Table of contents

* [About this repo](#about-this-repo)
* [Getting Started](#getting-started)
   * [Dependencies](#dependencies)
   * [Installing](#installing)
   * [Work with the code](#work-with-the-code)
   * [How to build](#how-to-build)
* [License](#license)

## About this repo

This repository contains necesary .scss files to load different fonts, component skins and the grid used in Stratio's applications.

* Documentation website (soon)

## Getting Started

### Dependencies

What you need to run this app:
* [`node`](https://nodejs.org/es/) and `npm`
* Ensure you're running the latest versions Node `v8.x.x` or greater.

### Installing

You can install egeo-theme from npm:

```
npm i @stratio/egeo-themes
```

### Work with the code

You can use Npm or Yarn to work with egeo-themes. If you want to use Yarn, it has to be installed first as a global dependency in your local machine.

```
sudo npm i -g yarn
```

Once Yarn is installed or Npm is ready, you can install egeo-theme using:

```
yarn
```

or

```
npm install
```

### How to Build

If you want to build a distributable package you must use the `build` command. This will create the css and minified css files in the root folder.

```
yarn build
```

or

```
npm run build
```

## License

Egeo-theme is distributed under the Apache 2 license. You may obtain a copy of the license here at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)
