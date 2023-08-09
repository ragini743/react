### why do we use componentDidMount ?
it is a part of classComponents lifecycle it is used to perfom a task  or actionns after a component has been rendered and mounted the DOM for the  first time.this method is used for external API fetching data from server settingUp eventListeners or performing otherinitialization steps.
### why do we use componentWillUnmount? show with example .
it is perform cleanup actions before a component is unMount and reoved from DOM this is useful for preventing memory leaks.
##### example-
class EventListenerComponent extends from React.component{
    componentDidMount(){
        //add event when component mount
        this. addEventListener("resize",this.handleResize)
    }
    componentWillUnmount(){
        //remove eventListener when component is about to unmount
        window.removeEventListener("resize",this.handleResize)
    }
    const handleResize =( ) =>{
        console.log("window resized")
    }
    render(){
        return(
            <p>component with eventListener</p>
        )
    }
}

### what is the order of life cycle method calls  in class based components ?
##### 1- Mounting
this methods are called in the following order when an instance of a component is being created and inserted into the DOM:

constructor()

render()

componentDidMount()
##### 2-Updating
An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

static getDerivedStateFromProps()

shouldComponentUpdate()

render()

getSnapshotBeforeUpdate()

componentDidUpdate()
##### 3-Unmounting
This method is called when a component is being removed from the DOM:

componentWillUnmount()
##### 4- Error Handling
These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

static getDerivedStateFromError()
componentDidCatch()
### how do you create nested routes react-router-dom ?



