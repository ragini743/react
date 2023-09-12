import React from "react";

export class UserClass extends React.Component {
  render() {
    return (
      <div className="user-card">
        <h2>name: ragini</h2>
        <h3>location : UP</h3>
        <h4>Contact:@raginiv</h4>
      </div>
    );
  }
}
// how to use props in class
export class UserClass2 extends React.Component {
    constructor(props){
        super(props)
        // console.log(props)
        // how to use useState
        // this.state={
        //     count:0,
        //     count2:2
        // }

        this.state = {
            userInfo:{
                name : "dummy",
                location:"default",
            },
        };
        console.log(this.props.name + "child Constructor")
    }

    async componentDidMount () {

        // console.log(this.props.name + "child componentDidMount")
        // how to make API call in functional component
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json()

        // const json = {
        //     "login": "akshaymarch7",
        //     "id": 12824231,
        //     "node_id": "MDQ6VXNlcjEyODI0MjMx",
        //     "avatar_url": "https://avatars.githubusercontent.com/u/12824231?v=4",
        //     "gravatar_id": "",
        //     "url": "https://api.github.com/users/akshaymarch7",
        //     "html_url": "https://github.com/akshaymarch7",
        //     "followers_url": "https://api.github.com/users/akshaymarch7/followers",
        //     "following_url": "https://api.github.com/users/akshaymarch7/following{/other_user}",
        //     "gists_url": "https://api.github.com/users/akshaymarch7/gists{/gist_id}",
        //     "starred_url": "https://api.github.com/users/akshaymarch7/starred{/owner}{/repo}",
        //     "subscriptions_url": "https://api.github.com/users/akshaymarch7/subscriptions",
        //     "organizations_url": "https://api.github.com/users/akshaymarch7/orgs",
        //     "repos_url": "https://api.github.com/users/akshaymarch7/repos",
        //     "events_url": "https://api.github.com/users/akshaymarch7/events{/privacy}",
        //     "received_events_url": "https://api.github.com/users/akshaymarch7/received_events",
        //     "type": "User",
        //     "site_admin": false,
        //     "name": "Akshay Saini",
        //     "company": "Founder @namastedev",
        //     "blog": "akshaysaini.in",
        //     "location": "India",
        //     "email": null,
        //     "hireable": true,
        //     "bio": "May the code be with you. Amen.",
        //     "twitter_username": "akshaymarch7",
        //     "public_repos": 6,
        //     "public_gists": 0,
        //     "followers": 1776,
        //     "following": 1,
        //     "created_at": "2015-06-10T04:36:48Z",
        //     "updated_at": "2023-07-12T19:56:39Z"
        //   }
          

        this.setState({userInfo:json})
        console.log(json)
    }
    componentDidUpdate () {
    console.log("componentDidUpdate")
    }
    componentWillUnmount () {
        console.log("componentWillUnmount")
    }

    render() {
        const { name , location ,avatar_url}=this.state.userInfo ;
        // const{ count ,count2} = this.state ;
        console.log(this.props.name + "child render")
        return (
        <div className="user-card">
            {/* <h1>{count}</h1> */}
        
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                   
                })
            }}>click me</button>
            <img src={avatar_url}></img>
          <h2>name: {name}</h2>
          <h3>location :{location} </h3>
          <h4>Contact:@raginiv</h4>
        </div>
      );
    }
  }


