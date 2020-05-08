import React from 'react';
import Box from '@material-ui/core/Box';

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
            <Box boxShadow={3}>
                <div style={style}>
                    {children}
                </div>
            </Box>
        </div>

    )
}

export default Footer