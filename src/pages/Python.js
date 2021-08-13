import React from 'react'
import {Col, Row, Card, Button, Tabs, Tab, OverlayTrigger,Tooltip } from 'react-bootstrap';
import './Pages.css';
import Pdata from "./data/PythonBasics.json";
import P2data from "./data/PythonBasics2.json";
import P3data from "./data/PythonBasics3.json";
import { BiCopyAlt } from "react-icons/bi"
function testUnd(t) {
  if (t === undefined) {
    return '';
  }
  return t;
}
const Python = () => {
  return (    
    <div className='Python' >
      <Tabs defaultActiveKey="Data types" transition={false} bg = 'dark' text = 'white'>
        <Tab eventKey="Data types" title="Python Basics">
          <Row>
            <Col xs={6} md={4}>
              {Pdata.map(p => {return(
                <div key={p.id}>
                  <Card body bg = 'dark' text = 'white'>
                    <Card.Title>{p.head} 
                    </Card.Title>
                    <Card.Text>
                               <div>{p.code}</div>
                               <div>{p.code1}</div>
                               <div>{p.code2}</div>
                               <div>{p.code3}</div>
                               <div>{p.code4}</div>
                    </Card.Text>
                    <Card.Text className="text-success">
                                <div>{p.exp}</div>
                                <div>{p.exp2}</div>
                    </Card.Text>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{p.but}</Tooltip>}>
                      <Button variant="primary" onClick={() =>  navigator.clipboard.writeText
                            (p.code + testUnd(p.code2) + testUnd(p.code3) + testUnd(p.code4))}><BiCopyAlt/>
                      </Button>
                    </OverlayTrigger>
                  </Card>
                </div>
              )})}
            </Col>
            <Col xs={6} md={4}>
            {P2data.map(p => {return(
                <div key={p.id}>
                  <Card body bg = 'dark' text = 'white'>
                    <Card.Title>{p.head}</Card.Title>
                    <Card.Text>
                               <div>{p.code}</div>
                               <div>{p.code1}</div>
                               <div>{p.code2}</div>
                               <div>{p.code3}</div>
                               <div>{p.code4}</div>
                    </Card.Text>
                    <Card.Text className="text-success">
                                <div>{p.exp}</div>
                                <div>{p.exp2}</div>
                    </Card.Text>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{p.but}</Tooltip>}>
                      <Button variant="primary" onClick={() =>  navigator.clipboard.writeText
                            (p.code + testUnd(p.code2) + testUnd(p.code3) + testUnd(p.code4))}><BiCopyAlt/>
                      </Button>
                    </OverlayTrigger>
                  </Card>
                </div>
              )})}
            </Col>
            <Col xs={6} md={4}>
            {P3data.map(p => {return(
                <div key={p.id}>
                  <Card body bg = 'dark' text = 'white'>
                    <Card.Title>{p.head}</Card.Title>
                    <Card.Text>
                               <div>{p.code}</div>
                               <div>{p.code1}</div>
                               <div>{p.code2}</div>
                               <div>{p.code3}</div>
                               <div>{p.code4}</div>
                    </Card.Text>
                    <Card.Text className="text-success">
                                <div>{p.exp}</div>
                                <div>{p.exp2}</div>
                    </Card.Text>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{p.but}</Tooltip>}>
                      <Button variant="primary" onClick={() =>  navigator.clipboard.writeText
                            (p.code + testUnd(p.code2) + testUnd(p.code3) + testUnd(p.code4))}><BiCopyAlt/>
                      </Button>
                    </OverlayTrigger>
                  </Card>
                </div>
              )})}
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="2" title="2">        
        </Tab>
      </Tabs> 
    </div>
  );
};

export default Python;
