#### Redux Toolkit
```python
- install @reduxjs/toolkit and react-redux.
we use npm install @reduxjs/toolkit and npm install react-redux
-build our store
-connect our store to our app
-create a slice(cartSlice)
-dispatch (action)
-Selector
```


#### 1.  what is difference between useContext and Redux ?
In react application data is passed top to bottom (parent to child) as props . context provide a way to share values between components without having to explicitly pass a prop through every level of the tree . 

while redux is a predictable state container for javascript apps. redux is an open source library which provides a central store and actions to modify the store it can be used with any project using javascript . redux provide a great devloper experience such as live code editing .
#### 2. Advantage of using redux toolkit over redux ?
redux toolkit simplifies the devlopment of redux application by reducing .
 
```bash
redux toolkit is uses 'immer' library which allow you to write reducers that 'mutate' state in more 
natural library way while redux toolkit takes care of creating a new immutable state object behind the scene . 

```
#### 3.  Explain dispatcher ?
dispatcher is a key in many state management architectures including flux and redux .

it plays crucial role inn managing the flow of data and actions within the application . thee purpose of dispatcher is to receive actions (events) and ensure they are processed by the appropriate components (stores or reducers) in predictable manner .



when an action is received  by the dispatcher it needs to decide which parts of the application should respond to do it this is based on the action type . the dispatcher has a registry or mapping of action type to specific handlers or function .

#### 4. explain reducer ?
reducer is a fundamental concept in state management libraries like redux . it is pure javascript function responsible for specifying how applications state changes in response to actions.

reducer are used to update the state of your application in a predictable  and controlled manner .


```python
reducer take two arguments state and an action . the current state represent the applications state before the action is applied .
```
##### 5. explain slice ?
slice refers to a logical portion of the redux store that encapsulates the reducer , actions and selectors related to specifying part of the application's state..

* reducer - it is a function that specifies how the state should be updated in response to action. we define slice inside reducer function which take current state and action as a argument and return a new state. 
* Action - it is plain javascript object and describe event or changes in your application .
redux toolkit allows you to define action creators within your slice . these action creators are function that generated  action object with predefined types and payload structures . 
* selectors - selector are function that allow you to extract data from the redux store . they help you to access specific pieces of state without needing to know the structure of the state tree .you can define selector inside slice .
#### 6. explain selector ?
selector are function that takes current state as an argument and return a specific piece of data from that state .they act as a bridge between your component and the redux store enabling component to access the data they need . 
#### 7. explain createSlice and the configuration it takes ?
```python
import {createSlice} from '@reduxjs/toolkit'
const mySlice =createSlice({
       name:sliceName,
       initialState:{}
       reducers:{
  // -------
  actionName:(state,action) =>{},
        },
 }),
```
configuration for createSlice 
* 'Name' : (required) - it is string that represent name of the slice it is required .
* 'initialState':(required) - it is initial state of our slice it can be any valid javascript object ,represent hte starting data for your slice's state . it is required  . 
* 'reducers' : (optional) - it is define set of an  action creators and their associated reducer logic  . reducer function take two argument current state and action object .
action creators automatically generated badsed on reducers object key .
