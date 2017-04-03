# Angular 2 short workshops: Liderferencja 2017, Gdańsk

## TypeScript basics and Angular 2 short
This repository contains simple Angular application with few exercises in it - which are created for workshops purpouse.

* [`notes-app` Angular 2 app here](notes-app/)
* [TypeScript examples here](typescript-examples/)

:wave: Keep in mind that this code do not cover lot of fields, nor it doesn't have all-best practises.

## Where to go next with learning Angular?
It might sound too obvious - but do official **Tour of heroes** tutorial. It is really well written (:clap::clap::clap:) and always up to date!

[Just grab it here](https://angular.io/docs/ts/latest/tutorial/)

---

## Preconditions before you run enything here:
1. clone the repository
1. install `nodejs` (if you don't have it)

## How to run `notes-app`
1. install `@angular/cli` npm package (if you don't have it)
1. go to `notes-app` folder
    * install all packages by `npm install`
    * run application by `npm start`
1. enjoy the :fireworks:

## How to run `typescript-examples`
Distribution is versioned here.

Just run `node dist/app.js`.

##### But if you really want to compile it, the way without installing `tsc` globally:
1. go to `typescript-examples`
1. install locally typescript by `npm install typescript`
1. compile by `node_modules/typescript/bin/tsc -p tsconfig.json`
1. run app by `node dist/app.js`