### 1. what is props drilling ?

props are properties that input into components . they are single or object containing a set of values that are passed to components on creation ,similar to html attributes.

props drilling is a process of passing data from parent component to its children . this process can continue indefinitely . at the end it's long chain of component dependencies that can be difficult to manage.
### 2. what is lifting state up in react ? 
sometimes we want the state of two components to always change together. to do it remove state from both of them move it to their closet common parent and then pass it down to them via props this is known as lifting state up .

how to use lifting state up - 


```python
1. move state to their common parent
2. pass information through props from their common parent.
3. pass event handlers down so that the children can change parent state.
4. it's useful to consider components as controlled (driven by props) or "uncontrolled" (driven by state)
```

### 3. what are context provider or context consumer ?
Context provider - 

```python
1. it is component that provide data to other component in the application.
2.it create a context and store data or state within that context.
3. this data can be accessed by any component that subscribe to that component. 
```
context consumer
```python
1. it is  a component that consumes or access the data provided by context.
2. it subscribe to a specific context and can read data or state from the context .
3. when the data in the context changes the context consumer will automatically re-render to reflect the updated data.
```
### 4. if you don't pass a value to provider ,does it take default value?
In React if you don't provide a "value" prop to context provider it does not automatically use a default value instead the "value" provided by nearest ancestor "context.provider" in the component tree will be used , this behavior is known as propagation.
```python
example -  <Context.provider value="someData">
              <childComponent />
           </Context.Provider>
in this case value available to childComponent and any other components within childCompnent subtree. 
```