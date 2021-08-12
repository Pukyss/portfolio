import React from 'react';
//import ReactDOM from 'react-dom';
class MoveBarOpen extends React.Component {
    MoveBarOpen = () => {
        return {marginLeft : `8.7%`};
    }
    render() {
        return( <div style={this.MoveBarOpen}/>
        );
    }
  }
class MoveBarClose extends React.Component {
    MoveBarClose = () => {
        return {marginLeft : `0%`};
    }
    render() {
        return( <div style={this.MoveBarClose}/>
        );
    }
  }


/*
function MoveBarOpen() {
  const div = styled.div
  `margin-left: 8.7%;`;
  return ("");
}

function MoveBarClose() {
    const div = styled.div
    `margin-left: 0%;`;
    return ("a");
  }
*/
  export {MoveBarOpen,
          MoveBarClose
  };