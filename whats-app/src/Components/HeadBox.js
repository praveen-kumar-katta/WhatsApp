import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
// import CameraAltRoundedIcon from '@material-ui/icons/CameraAltRounded';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

const useStyles = (theme) => ({
    box: {
        height: "25%",
        width: "100%",
    },
    divider: {
        height:5,
        background: 'white',
    },
})


export class HeadBox extends Component {

    state={
        vertical:-1,
    }

    componentDidMount=()=>{
        this.setState({vertical : 1});
    }

    handleVerticalClick=(event)=>{
        let tag = event.target.innerHTML;

        if(tag==="CHATS")this.setState({vertical:1});
        else if(tag==="STATUS")this.setState({vertical:2});
        else if(tag ==="CALLS")this.setState({vertical:3});
    }
    render() {

        const { classes } = this.props;
        return (
            <div>
                <Box bgcolor='#075e54' color='white' className={classes.box}>
                    <Grid container spacing={3} alignItems="baseline" >
                        <Grid item xs={9}>
                            <Typography align='left' variant="h5" >WhatsApp</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton aria-label="upload picture" component="span">
                                <SearchIcon style={{color:'white'}}  />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton aria-label="upload picture" component="span">
                                <MoreVertIcon style={{color:'white'}} />
                            </IconButton>
                            {/* <Menu
                                id="main menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '20ch',
                                    },
                                }}
                            >
                                {options.map((option) => (
                                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu> */}
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>

                        <Grid item xs={1}>
                            <IconButton aria-label="upload picture" component="span">
                                <PhotoCamera style={{color:'white'}} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={4}>
                            <Button style={{color:'white'}} onClick={this.handleVerticalClick} >
                                <Typography align='center' variant="h6" >CHATS</Typography>
                            </Button>
                            {this.state.vertical===1?<Divider className={classes.divider} />:null}
                        </Grid>
                        <Grid item xs={3}>
                            <Button style={{color:'white'}} onClick={this.handleVerticalClick}>
                                <Typography align='center' variant="h6" >STATUS</Typography>
                            </Button>
                            {this.state.vertical===2?<Divider className={classes.divider} />:null}
                        </Grid>
                        <Grid item xs={4}>
                            <Button style={{color:'white'}} onClick={this.handleVerticalClick}>
                                <Typography align='center' variant="h6" >CALLS</Typography>
                            </Button>
                            {this.state.vertical===3?<Divider className={classes.divider} />:null}
                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
    }
}

export default withStyles(useStyles)(HeadBox);
