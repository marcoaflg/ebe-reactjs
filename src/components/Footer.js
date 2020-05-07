import React from 'react';

var style = {
    backgroundColor: "#009688",
    textAlign: "center",
    padding: "20px",
    left: "0",
    bottom: "0",
    height: "70px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '70px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { children }
            </div>
        </div>
    )
}

export default Footer