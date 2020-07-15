/**
 * © 2020 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */

'use strict';

const { Bundler } = require('scss-bundle');
const path = require('path');
const fse = require('fs-extra');
const sass = require('node-sass');

/**
 * Current declared theme names
 */
const themes = require('./themes');

const THEMES_PATH = './src/themes'
const OUTPUT_PATH = './dist';

themes.forEach(theme => generateCustomTheme(theme));

/**
 * Create custom theme
 * @param {string} theme
 */
function generateCustomTheme(theme) {

   const inputPath = path.resolve(__dirname, THEMES_PATH + '/' + theme);
   const outputPath = path.resolve(__dirname, OUTPUT_PATH + '/' + theme);

   return bundleScssTheme(inputPath, outputPath,
      () => generateCssTheme(inputPath, outputPath))
}


/**
 * Bundle Sass theme constants
 *
 * @param {string} inputPath
 * @param {string} outputPath
 * @param {Function} callback
 */
async function bundleScssTheme(inputPath, outputPath, callback) {

   const bundler = new Bundler();

   // Relative file path to project directory path.
   const result = await bundler.bundle(inputPath + "/constants/index.scss");

   fse.outputFile(outputPath + '/constants.scss', result.bundledContent)
      .then(() => callback())
}


/**
 * Generates CSS theme
 * @param {string} inputPath
 * @param {string} outputPath
 */
function generateCssTheme(inputPath, outputPath) {

   sass.render({
      file: inputPath + '/theme/index.scss',
   }, function (err, result) {

      if (err) {
         console.error(`Cannot generate theme. ` + err);
         return;
      }

      fse.outputFile(outputPath + '/theme.css', result.css)

   });
}
