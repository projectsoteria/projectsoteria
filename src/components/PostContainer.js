import { API } from "aws-amplify";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import CardColumns from "react-bootstrap/CardColumns";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import FilterMenu from "./FilterMenu"
import PlusButton from "./PlusButton";
import Post from "./Post";
import React from "react";

export default class PostContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: "",
      author: "",
      date: "",
      postData: []
    }
  }

  fetchPosts(){
    API.graphql( {
      query: `
      query ListPosts(
        $filter: ModelPostFilterInput
        $limit: Int
        $nextToken: String
      ) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          items {
            userID
            id
            title
            text
            image
            comments {
              nextToken
              items {
                id
                text
              }
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    `, 
    variables:  {
      filter: {
          title: {
             contains: this.state.keyword
           }
         }
     } 
  }).then((response) => {
      console.log(response);
     this.setState({postData: response.data.listPosts.items}); 
    }).catch(e=>{
      console.log(e)
    });
  }

  componentDidMount(){
    this.fetchPosts()
  }

  render() {
    const posts = this.state.postData.map((post) => {
      return (
        <Post
          id={post.id}
          title={post.title}
          author={"shreya"}
          date={post.createdAt}
          text={post.text}
          comments={post.comments}
          img={post.image}
          key={post.id}
        ></Post>
      );
    });
    return (
      <div>
       <Button>Filtering</Button>
       <FilterMenu
        author= {this.state.author} 
        setAuthor= {(author)=> this.setState({author:author})}
        keyword = {this.state.keyword}
        setKeyword = {(keyword)=> this.setState({keyword:keyword})} 
        date = {this.state.date} 
        setDate = {(date)=> this.setState({date:date})}
        onSubmit = {() => {
          this.fetchPosts()
        }}
        >
      </FilterMenu>
        <DropdownButton
          as={ButtonGroup}
          key={"Sorting"}
          id={"dropdown-variants-Sorting"}
          variant={"sorting"}
          title={"Sorting"}
        >
          <Dropdown.Item eventKey="1">Date, old to new: </Dropdown.Item>
          <Dropdown.Item eventKey="2">Date, new to old: </Dropdown.Item>
          <Dropdown.Item eventKey="3">Alphabetically A to Z: </Dropdown.Item>
          <Dropdown.Item eventKey="4">Alphabetically Z to A: </Dropdown.Item>
        </DropdownButton>
        <CardColumns>{posts}</CardColumns>
        <PlusButton onCreatePost={this.props.onCreatePost}></PlusButton>
      </div>
    );
  }
}

