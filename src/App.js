import React, { useState } from "react";
import Container from "react-bootstrap/Container";
///import PostButton from "./components/PostButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PostContainer from "./components/PostContainer";
import ArticleContainer from "./components/ArticleContainer";
import Navbar from "./components/Navbar";
import Amplify, { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {
  const [eventKey, setEventKey] = useState("Home");
  const [articles, setArticles] = useState([
    {
      author: "boe",
      date: "39/394839",
      imgUrl: "image.image",
      text: "yes",
    },
    {
      author: "Shreya",
      date: "6/2020",
      imgUrl: "google.com",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      author: "Sid",
      date: "5/2003",
      imgUrl: "twitter.com",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sapien orci. Integer nec mauris urna. Maecenas et felis in felis tempus congue. Cras mollis pharetra mi, eu ultrices sapien condimentum sed. Etiam non mi elit. Praesent at semper turpis. Suspendisse potenti. Donec vel erat id ipsum semper viverra vel sit amet odio. Phasellus consequat tempus est, ut pulvinar turpis vehicula in. Donec pretium pretium nisl, at tristique magna interdum eu. Nam luctus elit turpis, in congue risus pulvinar eget.",
    },
    {
      author: "Remmy",
      date: "90/4269",
      imgUrl: "youtube.com",
      text:
        "Nulla non faucibus orci. Donec mattis nibh eu orci convallis, id euismod ante luctus. Aliquam tristique eget urna vel tincidunt. Etiam euismod ut libero et aliquet. Maecenas sed turpis turpis. Curabitur sagittis magna sit amet cursus varius. Nulla in elit gravida, lobortis odio sed, rutrum nunc. Duis mollis velit nec risus mattis tincidunt. Duis ut felis quam. Phasellus faucibus tempor lacus et dictum. Proin a dui eu enim molestie mattis. Etiam eu odio lacinia, consectetur nisl at, eleifend felis.",
    },
    {
      author: "Anon",
      date: "4/20",
      imgUrl: "wikepedia.org",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sapien orci. Integer nec mauris urna. Maecenas et felis in felis tempus congue. Cras mollis pharetra mi, eu ultrices sapien condimentum sed. Etiam non mi elit. Praesent at semper turpis. Suspendisse potenti. Donec vel erat id ipsum semper viverra vel sit amet odio. Phasellus consequat tempus est, ut pulvinar turpis vehicula in. Donec pretium pretium nisl, at tristique magna interdum eu. Nam luctus elit turpis, in congue risus pulvinar eget.Nunc laoreet varius accumsan. Integer volutpat diam sed commodo mattis. Phasellus est quam, dapibus non dolor sit amet, accumsan elementum urna. Aenean et massa eget eros vehicula finibus. Mauris ac tortor ut ex cursus rutrum vel at sapien. Etiam nec aliquam purus. Suspendisse a viverra lorem. Sed at porttitor mauris. Morbi gravida sem luctus eros ultrices hendrerit. In interdum libero nec velit tristique, vitae euismod erat condimentum. Sed libero arcu, tincidunt id sagittis quis, euismod ut nisl.",
    },
    {
      author: "Anu",
      date: "8/1900",
      imgUrl: "google.com",
      text:
        "Greg grits his teeth and takes a deep breath. Be calm, he tells himself. Don't let it get to you. It's just Carl being Carl.But Greg has been gritting his teeth for months now, and he's finding Carl's irritating behavior increasingly disruptive and distracting. There's the frequent cursing, the reply all to emails, the smelly sandwiches, and the black hole of scattered papers that is his desk.Greg doesn't know what to do. Should he continue to ignore it and pretend everything's fine? Confront Carl? Talk to his supervisor? Go to HR? Or maybe even look for a job in another department?",
    },
    {
      author: "Ravi",
      date: "2/1700",
      imgUrl: "google.com",
      text:
        "As John says, it's 100% up to you. You just have to find a strong enough reason to override the benefits you get now from acting that way.Focus on your own self-interest - we depend for our happiness and survival on others in this world, any ideas you may have of being self-sufficient are an illusion. If you want people to genuinely be your friend, good partners for your life journey, then you have to be the sort of person they like and want to be around.In the end you only get out what you put in. If you are selfish bossy and manipulative you will only attract unhealthy people who are only with you as long as they are getting something from you to make the misery of being around you worth their while.So if you recognize this is true intellectually, your job now is to take it to heart. Meditate on it every day, write about it every day, make overcoming this obstacle to your future happiness your top priority for a while.Get the people around you to help, acknowledge this character flaw to them and ask them to remind you when you're acting it out, maybe a little hand signal or something they can use to help you stop the patterns and habits in which it manifests in your day-to-day interaction. ",
    },
  ]);
  const [posts, setPosts] = useState([
    {
      author: "boe",
      date: "39/394839",
      imgUrl: "image.image",
      text: "yes",
    },
    {
      author: "Shreya",
      date: "6/2020",
      imgUrl: "google.com",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      author: "Sid",
      date: "5/2003",
      imgUrl: "twitter.com",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sapien orci. Integer nec mauris urna. Maecenas et felis in felis tempus congue. Cras mollis pharetra mi, eu ultrices sapien condimentum sed. Etiam non mi elit. Praesent at semper turpis. Suspendisse potenti. Donec vel erat id ipsum semper viverra vel sit amet odio. Phasellus consequat tempus est, ut pulvinar turpis vehicula in. Donec pretium pretium nisl, at tristique magna interdum eu. Nam luctus elit turpis, in congue risus pulvinar eget.",
    },
    {
      author: "Remmy",
      date: "90/4269",
      imgUrl: "youtube.com",
      text:
        "Nulla non faucibus orci. Donec mattis nibh eu orci convallis, id euismod ante luctus. Aliquam tristique eget urna vel tincidunt. Etiam euismod ut libero et aliquet. Maecenas sed turpis turpis. Curabitur sagittis magna sit amet cursus varius. Nulla in elit gravida, lobortis odio sed, rutrum nunc. Duis mollis velit nec risus mattis tincidunt. Duis ut felis quam. Phasellus faucibus tempor lacus et dictum. Proin a dui eu enim molestie mattis. Etiam eu odio lacinia, consectetur nisl at, eleifend felis.",
    },
    {
      author: "Anon",
      date: "4/20",
      imgUrl: "wikepedia.org",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sapien orci. Integer nec mauris urna. Maecenas et felis in felis tempus congue. Cras mollis pharetra mi, eu ultrices sapien condimentum sed. Etiam non mi elit. Praesent at semper turpis. Suspendisse potenti. Donec vel erat id ipsum semper viverra vel sit amet odio. Phasellus consequat tempus est, ut pulvinar turpis vehicula in. Donec pretium pretium nisl, at tristique magna interdum eu. Nam luctus elit turpis, in congue risus pulvinar eget.Nunc laoreet varius accumsan. Integer volutpat diam sed commodo mattis. Phasellus est quam, dapibus non dolor sit amet, accumsan elementum urna. Aenean et massa eget eros vehicula finibus. Mauris ac tortor ut ex cursus rutrum vel at sapien. Etiam nec aliquam purus. Suspendisse a viverra lorem. Sed at porttitor mauris. Morbi gravida sem luctus eros ultrices hendrerit. In interdum libero nec velit tristique, vitae euismod erat condimentum. Sed libero arcu, tincidunt id sagittis quis, euismod ut nisl.",
    },
  ]);
  let page = undefined;
  if (eventKey === "Home") {
    page = <Home></Home>;
  } else if (eventKey === "About") {
    page = <About></About>;
  } else if (eventKey === "Articles") {
    page = <ArticleContainer articleData={articles}></ArticleContainer>;
  } else if (eventKey === "Posts") {
    page = <PostContainer postData={posts}></PostContainer>;
  }
  return (
    <Container>
      <Row>
        <Col>
          <Navbar
            title="Project Soteria"
            user="Shreya"
            onSelect={(eventKey) => setEventKey(eventKey)}
          ></Navbar>
        </Col>
      </Row>
      <Row>
        <Col>{page}</Col>
      </Row>
      <Row>
        <Col>
          <Footer title="Project Soteria"></Footer>
        </Col>
      </Row>
    </Container>
  );
}

export default withAuthenticator(App);
