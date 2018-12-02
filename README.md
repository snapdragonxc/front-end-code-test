# Test Code
A ReactJS app for a shop front.

### Description

This App displays a list of shop items (women's shirts) filtered by size.

The code was written in ReactJS using Flow type-checking and ESLint for linting. Unit testing was done with Jest using Enzyme and Sinon.

The styling was done with SASS and is responsive using media queries. Color values, font size and layout were taken from the jpg/psd with Gimp software.

All the React/SASS source code is located in the folder named 'src'.

For convenience, the app uses ExpressJS server for api calls and to display the public folder using the template index.ejs (located in the views folder).

### Installation

The code is pre-compiled and built. To install locally, clone the code and navigate to the folder 'front-end-code-test'. Ensure that you have first installed NodeJS, then use npm:

```
npm install
```
### Running Locally
To run the website locally:
```
npm start
```
and navigate to 'http:\localhost:3000' in your web browser.

### Development Details

The code is pre-compiled, built and tested. For development:

#### Testing
To run the unit tests:
```
npm run test
```
#### Compiling SASS
To compile the SASS to html:
```
npm run compile:sass
```

#### Webpack
To bundle the ReactJS:
```
npm run webpack
```

#### Linting
To lint the code:
```
npm run lint
```
