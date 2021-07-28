import React, { Component } from 'react'
import { ChatScreen } from './ChatScreen';
import ContactBoxHeader from './ContactBoxHeader';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
    box: {
        color: '#000000',
        bgcolor:'#000000'
    },
    
})

// bg color : bgcolor='#000000'
export class ContactBox extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Box borderRadius={16} bgcolor='#000000' >
                <ContactBoxHeader />
                <div style={{
                    '*::-webkit-scrollbar': {
                        width: '0.4em'
                      },
                      '*::-webkit-scrollbar-track': {
                        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
                      },
                      '*::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(0,0,0,.1)',
                        outline: '1px solid slategrey'
                      }
                }} >
                    <ChatScreen />
                </div>
            </Box>

        )
    }
}

export default withStyles(useStyles)(ContactBox);
