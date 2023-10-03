#### there are four types of testing(devloper)
* manually
* unit testing - you test your react component in isolation . you wre test only one specific component not whole application in isolation.
* Integration testing - testing the integration of the component . where multiple component are involved and talking to each other .
* End to End testing -e2e testing - testing a reacct application as soon user land to the website and leave the website,simulating what user do

#### what is react testing library ?
it builds on top of DOM testing library . it is uses 'jest'(it is a delightful javascript testing framework with a focus on simplicity ).DOM testing library also uses 'jest' .
```python
how to install -
npm install -D @testing-library/react
now we install jest - 
npm install -D jest
jest uses babel so we need to install dependencies - 
npm install --save-dev babel-jest @babel/core @babel/preset-env

now we have to configure babel
you have to create "babel.config.js" file which is root level of your project -
and then inside 'babel.config.js' file add code - 
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

* parcel already uses babel and we install parcel when we create our project parcel has its own config for babel.and now we are trying to add an extra confg so parcel will get confuse . so we will have to cahnges in parcel config .
for disable defaault babel transpilation
create a '.parcelrc' in root and write code
```python
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```

* how to run test cases
```
npm run test
if we got 'no test found' , then config set up to work for test cases
```
 then add jest configuration using -
```
npx jest --init
it is ask you few question
* 1. would you like to use typescript for the configuration file - no(choose)
* 2. we use  jsdom for testing

it is create a  file 'jest.config.js'
```

now we install jsdom library using -
```
npm install --save-dev jest-environment-jsdom
```
now we install @babel/preset-react to make jsx work in test cases . we use this so that babel convert jsx into normal html
```
npm i -D @babel/preset-react
```
now we need to add @babel/preset-react inside our babel config
```
["@babel/preset-react:",{runtime:"automatic"}]
```
we use ToBeInTheDocument,screen.getByRole to use this we need to install  @testing-library/jest-dom 


#### what is jsdom
whenn you run test cases there is no server running. test cases does not run on browser .so they will need a environment .
jsdom ia a library which parses and interacts with assembled HTML just like a browser.it is not actually a browser insted it implements web standards like browsers do . you can feed it some html and it will parse that html.
