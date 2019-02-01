# TypeScript Demo

## Overview

This demo is a simple React app that consists of a dropdown menu and several checkboxes to allow a user to show different gifs at different sizes from GIPHY. In the `javascript/` directory the project was written purely in JavaScript using `create-react-app`. If you run it you may notice some runtime errors. These are not always obvious from looking at the code, but they are sprinkled throughout the app to demonstrate TypeScript's ability to catch runtime errors during development. It is intended that you work in the `convert-me/` directory, converting the JavaScript files to TypeScript files. A completed version of this process is included in the `typescript/` directory for reference, but try not to look at the files in this directory unless you get stuck.

## Installation and Getting Started

It is expected that you do all of your work in the `convert-me/` directory. The `javascript` and `typescript` directories are included as a reference. For the steps below, it is assumed that you are inside `convert-me/`.

1. Follow the steps in the [React docs](https://facebook.github.io/create-react-app/docs/adding-typescript) to add TypeScript.

```
npm install --save typescript @types/node @types/react @types/react-dom

# or

yarn add typescript @types/node @types/react @types/react-dom
```

2. Create an account and get an api key from [GIPHY](https://developers.giphy.com/) and copy/paste it into line 1 of `convert-me/src/utils/api.js`.
3. Run `npm start`.
4. Rename any `*.js` file to `*.ts` or to `*.tsx` if the file contains any JSX. Kill the dev derver and run `npm start` again whenever you rename a file.

## The GIPHY API

This app only uses the [Get GIF by ID Endpoint](https://developers.giphy.com/docs/#operation--gifs--gif_id--get) from GIPHY. Take a look at the docs and the [schema definitions](https://developers.giphy.com/docs/#schema-definitions) to help you create type definitions for the response you expect.

## Helpful Suggestions

- Rename one file at a time and commit it without making any changes to the contents. Then convert the contents of the file to TypeScript and commit it again. This keeps the git history clean and makes it easy to see the conversion process. In general, when renaming a file and making change to its contents you should follow this approach.
- Convert one file at a time.
- Convert `api.ts` first. Add the interfaces for the API here based on the GIPHY documentation and the rest of the project will be easier to convert. Also, a couple bugs will shake out quickly.
- Convert `Main.tsx` after converting `api.ts` to see a couple areas where typescript truly shines.
- At any time you can run the `tsc` command to see if there are any compilation errors.
- `App.tsx` is the most difficult one to convert, specifically the `handleCheckboxChange` function. The code in `javascript/src/App.js` is an example of something that works in JavaScript that must be re-written to work with TypeScript. The TypeScript compiler has its reasons for enforcing this, so sometimes we have to restructure our code a bit.
- To increase TypeScript's power, set `noImplicitAny` to `true` in `tsconfig.json`.
