import React from "react";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

export default function UserPage() {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" style={{marginTop : "10em"}} bg="secondary" >
      <Tab eventKey="home" title="Posts">
        <p>home</p>
      </Tab>
      <Tab eventKey="comments" title="Comments">
        <p>not home</p>
      </Tab>
      <Tab eventKey="liked" title="Liked">
        <p>not home</p>
      </Tab>
    </Tabs>
  );
}
///
