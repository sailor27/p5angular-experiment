# P5experimentsa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
Cloning p5 and angular project:’

ERROR in node_modules/p5/lib/p5.d.ts(10268,9): error TS2415: Class 'Noise' incorrectly extends base class 'Oscillator'.
  Types of property 'amp' are incompatible.
    Type '(volume: number | object, rampTime?: number, timeFromNow?: number) => void' is not assignable to type '(vol: number | object, rampTime?: number, timeFromNow?: number) => AudioParam'.
      Type 'void' is not assignable to type 'AudioParam'.




///<reference path="p5.global-mode.d.ts" /> at top of p5.d.ts - no result

???
from beginning

ng new p5experimentsa
cd
npm init
npm install
bower init
bower install
bower install bootstrap —save


after you build and serve, add this to component

in component
/// <reference path="../../node_modules/p5/lib/p5.global-mode.d.ts" />
const p5 = require("p5");
import { Component, OnInit } from '@angular/core';


https://github.com/processing/p5.js/wiki/Global-and-instance-mode
https://github.com/processing/p5.js/pull/2279
