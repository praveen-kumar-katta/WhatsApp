import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import HeadBox from './HeadBox';
import ChatHead from './ChatHead';
import ContactBox from './ContactBox';
// import ContactBoxHeader from './ContactBoxHeader';
// import { ContactChatBox } from './ContactChatBox';

const useStyles = (theme) => ({
    box: {
        height: "100%",
        width: "40%",
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        elevation: 3,
        height: "100%",
    },
    divider: {
        height:1,
        background: 'white',
    },
})

export class MainPage extends Component {

    // state={
    //     contacts: ['Roopa', 'Yaswanth', 'Bonthu'],
    //     messages: [],
    // }

    // componentDidMount = ()=>{
        
    // }

    render() {
        const { classes } = this.props;
        return (
            <div> 
                <Box className={classes.box}>
                  <ContactBox />

                    {/* <Paper className={classes.paper} >
                       <HeadBox />
                      
                       <ChatHead />
                       <Divider className={classes.divider} />
                       <ChatHead />

                       
                      
                    </Paper> */}
                </Box>
            </div>
        )
    }
}

export default withStyles(useStyles)(MainPage);

