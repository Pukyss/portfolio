import React from 'react'
import {Col, Row, Card, Button, Tabs, Tab, OverlayTrigger,Tooltip } from 'react-bootstrap';
import './Pages.css';
import Pdata from "./data/PythonBasics.json";
import P2data from "./data/PythonBasics2.json";
import P3data from "./data/PythonBasics3.json";
import CLogic from "./data/conditionalLogic.json";
import CLogic2 from "./data/conditionalLogic2.json";
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
                  <Card.Title>{p.head}</Card.Title>
                  <Card.Text>
                             <div>{p.code}</div>
                             <div>{p.code1}</div>
                             <div>{p.code2}</div>
                             <div>{p.code3}</div>
                             <div>{p.code4}</div>
                             <div>{p.code5}</div>
                  </Card.Text>
                  <Card.Text className="text-success">
                              <div>{p.exp}</div>
                              <div>{p.exp2}</div>
                  </Card.Text>
                  <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{p.but}</Tooltip>}>
                    <Button variant="primary" onClick={() =>  navigator.clipboard.writeText
                          (p.code + testUnd(p.code2) + testUnd(p.code3) + testUnd(p.code4) + testUnd(p.code5))}><BiCopyAlt/>
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
                             <div>{p.code5}</div>
                  </Card.Text>
                  <Card.Text className="text-success">
                              <div>{p.exp}</div>
                              <div>{p.exp2}</div>
                  </Card.Text>
                  <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{p.but}</Tooltip>}>
                    <Button variant="primary" onClick={() =>  navigator.clipboard.writeText
                          (p.code + testUnd(p.code2) + testUnd(p.code3) + testUnd(p.code4) + testUnd(p.code5))}><BiCopyAlt/>
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
                               <div>{p.code5}</div>
                    </Card.Text>
                    <Card.Text className="text-success">
                                <div>{p.exp}</div>
                                <div>{p.exp2}</div>
                    </Card.Text>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{p.but}</Tooltip>}>
                      <Button variant="primary" onClick={() =>  navigator.clipboard.writeText
                            (p.code + testUnd(p.code2) + testUnd(p.code3) + testUnd(p.code4) + testUnd(p.code5))}><BiCopyAlt/>
                      </Button>
                    </OverlayTrigger>
                  </Card>
                </div>
              )})}
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="Conditional logic" title="Conditional logic">
        <Row>
            <Col xs={6} md={4}>
              {CLogic.map(p => {return(
                <div key={p.id}>
                <Card body bg = 'dark' text = 'white'>
                  <Card.Title>{p.head}</Card.Title>
                  <Card.Text>
                             <div>{p.code}</div>
                             <div>{p.code1}</div>
                             <div>{p.code2}<p></p></div>
                             <div>{p.code3}</div>
                             <div>{p.codes1}</div>
                             <div className='ml-3'>{p.codes2}</div>
                             <div className='ml-3'> {p.code4}<p></p></div>                             
                             <div>{p.code5}</div>
                             <div className='ml-3'>{p.code6}<p></p></div>
                             <div>{p.code7}</div>
                             <div className='ml-3'>{p.code8}<p></p></div>
                             <div>{p.code9}</div>
                             <div className='ml-3'>{p.code10}</div>
                             
                  </Card.Text>
                  <Card.Text className="text-success">
                              <div>{p.exp}</div>
                              <div>{p.exp2}</div>
                              <div>{p.exp3}</div>
                              <div>{p.exp4}</div>
                              <div>{p.exp5}</div>
                              <div>{p.exp6}</div>
                              <div>{p.exp7}</div>
                              <div>{p.exp8}</div>
                  </Card.Text>
                  <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{p.but}</Tooltip>}>
                    <Button variant="primary" onClick={() =>  navigator.clipboard.writeText
                                   (testUnd(p.code) + testUnd(p.code2) + testUnd(p.code3) + testUnd(p.codes1) + testUnd(p.codes2) + testUnd(p.code4)
                                   + testUnd(p.code5) + testUnd(p.code6) + testUnd(p.code7) + testUnd(p.code8) + testUnd(p.code9) + testUnd(p.code10)
                                  )}><BiCopyAlt/>
                    </Button>
                  </OverlayTrigger>
                </Card>
              </div>
              )})}
            </Col>
            <Col xs={6} md={4}>
              {CLogic2.map(p => {return(
                <div key={p.id}>
                <Card body bg = 'dark' text = 'white'>
                  <Card.Title>{p.head}</Card.Title>
                  <Card.Text>
                             <div>{p.code}</div>
                             <div>{p.code1}</div>
                             <div>{p.code2}<p></p></div>
                             <div>{p.code3}</div>
                             <div>{p.codes1}</div>
                             <div className='ml-3'>{p.codes2}</div>
                             <div className='ml-3'>{p.codes2a}</div>
                             <div className='ml-3'>{p.codes2b}</div> 
                             <div className='ml-5'>{p.codes1a1}</div>                              
                             <div className='ml-3'>{p.code4}<p></p></div>
                             <div>{p.codes3}</div>
                             <div>{p.codes4}</div>                             
                             <div>{p.code5}</div>
                             <div className='ml-3'>{p.code6}<p></p></div>
                             <div>{p.code7}</div>
                             <div className='ml-3'>{p.code8}<p></p></div>
                             <div>{p.code9}</div>
                             <div className='ml-3'>{p.code10}</div>
                             
                  </Card.Text>
                  <Card.Text className="text-success">
                              <div>{p.exp}</div>
                              <div>{p.exp2}</div>
                              <div>{p.exp3}</div>
                              <div>{p.exp4}</div>
                              <div>{p.exp5}</div>
                              <div>{p.exp6}</div>
                              <div>{p.exp7}</div>
                              <div>{p.exp8}</div>
                  </Card.Text>
                  <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{p.but}</Tooltip>}>
                    <Button variant="primary" onClick={() =>  navigator.clipboard.writeText
                                   (testUnd(p.code) + testUnd(p.code2) + testUnd(p.code3) + testUnd(p.codes1) + testUnd(p.codes2) + testUnd(p.codes2a) + testUnd(p.codes2b) + testUnd(p.codes1a1) 
                                   + testUnd(p.code4) + testUnd(p.codes3) + testUnd(p.codes4) + testUnd(p.code5) + testUnd(p.code6) + testUnd(p.code7) + testUnd(p.code8) + testUnd(p.code9) + testUnd(p.code10)
                                  )}><BiCopyAlt/>
                    </Button>
                  </OverlayTrigger>
                </Card>
              </div>
              )})}
            </Col>                      
          </Row>        
        </Tab>
      </Tabs> 
    </div>
  );
};

export default Python;
