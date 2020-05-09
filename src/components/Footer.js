import React from 'react';
import Box from '@material-ui/core/Box';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

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

export default function Footer({ children }) {
    return (

        <div>
            <div style={phantom} />
            <Box boxShadow={3}>
                <div style={style}>
                    {children}
                    <WhatsAppIcon ontSize="large" style={{ fontSize: 40 }} />
                    <FacebookIcon ontSize="large" style={{ fontSize: 40 }} />
                    <InstagramIcon ontSize="large" style={{ fontSize: 40 }} />
                    <TwitterIcon ontSize="large" style={{ fontSize: 40 }} />
                </div>
            </Box>
        </div>

    )
}