### when and why do we need lazy() ?
it is a function given by react which is come from react.lazy() is a concept related to lazy evalution which is strtegy where the evalution of an expression or computation is delayed until the result is actually needed.it is needed when we want to optimize memory usage ,improve performance deal with infinite data streams.
### what is suspense ?
suspense is a technique that allows a program or a system to pause the execution of a task or operation until a specific consition is met. it is in asynchronous programming scenaraos where operations might take some time to complete such as fetching data from a network or loading resources.
### advantage and disadvantage of using this code spliting pattern ?
#### advantage -
code spliting pattern improve the perrformance and load times of web application  by breaking the codebase into smalller chunks that are loaded only when needed.

2 - code spliting enables lazy loading of components improving the time .

3 - smaller chunks of code more cachable .if a useer revisit your application the browser  more likely to have cached the required chunks further improving load times.
#### disadvantage -
1- code spliting can introduce complexity to the build process and devlopment workflow managing multiple code chunks and dependencies require careful consideration and configuration .

2 - older browser or device not fully support some code spliting.

3 - code splitting adds a small amount of overhead for the initial load as the browser needs to fetch and process the initail bundle as well as load additional chunks when needed.
### when do and why do we need suspense ?
when data fetching from server or an API ,there can be a delay before the data arrives .instead of rendering empty or partially populated components you can use suspense to show loading indicators or placeholder until the data is available.
### why we got this error: A component suspended while responding to synchronous input this will cause the UI to be replaced with loading indicator .to fix updates that suspend should be wrapped with start transition . How does suspense fix this errror? 
