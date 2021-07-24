import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Avatar from '@material-ui/core/Avatar';
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
import ButtonBase from '@material-ui/core/ButtonBase';
import Badge from '@material-ui/core/Badge';

const useStyles = (theme) => ({
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    badge: {
        right: -25,
        top: 13,
        border: `2px solid `,
        padding: '0 4px',
      },
})

export class ChatHead extends Component {
    render() {
        const { classes } = this.props;
        return (

            <Box bgcolor='#000000' color='#FFF'>

                <Grid container spacing={3}>

                    <Grid item xs={2}>
                        <IconButton aria-label="upload picture" component="span">
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={10}>
                        <Grid container spacing={3}>
                            <Grid item xs={9}>
                                {/* <ButtonBase style={{color: 'white', textTransform:'none', alignItems: 'left',justifyContent: 'left', padding:0,  left: 0,right: 0,top: 0,bottom: 0,}}> */}
                                {/* <Button variant="outlined" disableRipple disableFocusRipple style={{color: 'white', textTransform:'none', textAlign:'left',padding:0}} > */}


                                <span>
                                    <Typography style={{ textAlign: 'left', alignItems:'center', }} variant="h6" >Roopa</Typography>
                                </span>



                                {/* </Button> */}
                                {/* </ButtonBase> */}

                                <span>
                                    <Typography disableRipple disableFocusRipple style={{ textTransform: 'none' }} align='left' variant="body2">Em peekutunnav</Typography>
                                </span>

                            </Grid>
                            <Grid item xs={1} >
                                <Button variant="outlined" disableRipple disableFocusRipple style={{ color: 'white', textTransform: 'none', textAlign: 'left', padding: 0 }} >
                                <Typography align='right' variant="body2" >Time</Typography>
                                </Button>
                                <Badge badgeContent={4} color="primary" className={classes.badge}>
                                    
                                    </Badge>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
               
            </Box>
        )
    }
}

export default withStyles(useStyles)(ChatHead);
