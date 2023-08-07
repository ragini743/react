### what are various ways to add images into your app ? explain with code examples ? 
example 1. using image tag -

import React from 'react';

function App() {

  return (

    <div>

      <h1>My Image App</h1>

      <img src="path/to/your/image.jpg" alt="Description of the image" />

    </div>

  );

}

2. using importing image

import React from 'react';

import myImage from './path/image.jpg';

function App() {

  return (

    <div>

      <h1>My Image App</h1>

      <img src={myImage} alt="Description of the image" />

    </div>

  );

}

export default App;

3. using css

import React from 'react';

const imageStyle = {

  backgroundImage: 'url(path/to/your/image.jpg)',

  backgroundSize: 'cover',

  width: '300px',

  height: '200px',

};

function App() {

  return (

    <div>

      <h1>My Image App</h1>

      <div style={imageStyle}></div>

    </div>

  );
  
}


### what will happen if we do console.log(useState()) ?
it will print an array with two elements.useState() function in react returns an array containing two elements the current state value and a function to update the state value.
### how will useState behave if we don't add a dependency array?
useState Hook does not require dependency array . it is use to declare a state variable and a corresponding function to update the varible .
###  what is SPA ?
it stand for single page application .it is a web application architecture where the entire application is contained with in a single web page . it is reload a single html page.in an SPA the content of the web page is dynamically updated and manipulated in response to user actions or events without the need to reload the entire page .
### what is difference betweeen client side routing and server side routing ?
#### client side routing-
1. client sidde routing can offer faster page load improve performance .
2. in client side routing the  initial html page is usually  a minimal shell that loads the required javascript and setup the client side routing ,rendering of components and fetching of data happen on the client side.
3. the routing logic and rendering of components happpen client side routing .
4. in client-side routing, a request to the server is prevented when a user clicks a link, hence no page refresh even when the URL changes
#### server side routing -
1. in server side routing the initial html page sent by the server already contains the rendered content and subsequent request trigger new server response.
2. Server-side routing involves the server being responsible for managing the routing and generating the HTML for each requested URL.
 When a user clicks on a link or enters a URL, the browser makes a request to the server, which responds by rendering and sending the relevant HTML page.
 3. in server side routing when the user navigates to a new page, the old page is completely discarded and the HTML of the new page is loaded or  When a user clicks on a link on a webpage, another whole page is loaded and rendered onto the screen.
 4.in server side routing Initial load time is often faster since only the necessary content is sent by the server.