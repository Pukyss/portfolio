import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';


const Overview = () => {
  return (    
    <div className='home' >
<Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
  <Tab eventKey="home" title="Home">   
  </Tab>
  <Tab eventKey="profile" title="Profile">    
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>  
  </Tab>
</Tabs> 
    </div>
  );
};

export default Overview;
