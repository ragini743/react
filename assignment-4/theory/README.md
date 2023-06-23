#Assignment-4
### is JSX is mandatory for React ?
JSX is not mandatory for React but it is recommended and most commonly used syntax .
### ES6 is mandatory for React ?
it  is mandatory for React and it is highly recommended . it is update js language .
### {TitleComponent} {<TitleComponent/>}  {<TitleComponent> </TitleComponent>}
{TitleComponent} - represent it is typically used when passing the component as a prop  or storing it in variable . 

{<TitleComponent/>} - represents rendering , the TitleComponent  it is self closing and it has no chidren  .

{<TitleComponent></TitleComponent>} - reprsent rendering , it have children element .  
### how can I write commas in JSX ? 
{/* */}
### what is <React.Fragment> </React.Fragment> and <> </> ?
<React.Fragment> and <> both are same . and used to wraped multiple element without creating extra <div> or any other HTML element .
### what is virtual DOM ?
it is a concept in React refers to the process of comparing the virtual DOM representation of a component with its previous state .
### what is React Fiber ?
React FIber represent internal rewrite of React core algorithm while maintaining backward compatibility with existing React application . 
### why we need key in React ? when we do we need key in React ?
by using key in React , React can rendered and optimize the process .we need 'key' attribute in React when we rendering list of components or elements .it serves as a identifier.
### can we use index as a key in React ?
it is impossible to use index as key in React. the index of an item within a list can change when the list is modyfied .
### what is props ? ways to ?
in React props are way to pass data from parent component to it's child component . it is build a reusable and dynamic component .
