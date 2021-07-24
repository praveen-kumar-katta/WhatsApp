import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';

const useStyles = (theme) => ({
    box: {
        height: 75,
        width: "100%",

    },
    iconButton: {
        color: 'white',
    },
    avatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
})

export class ChatBoxHeader extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Box bgcolor='#075e54' color='white' className={classes.box}>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                    <Grid item xs={8}>
                        <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                            <Grid item xs={8} sm={1}>
                                <IconButton aria-label="arrowBackIcon" component="span">
                                    <ArrowBackRoundedIcon className={classes.iconButton} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={8} sm={2}>
                                <IconButton aria-label="displayPicture" component="span">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={8} sm={5}>
                                <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                                    <Grid item>
                                        <Typography noWrap align="left" variant="h6" >Roopa</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" variant="caption" >Online</Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                            <Grid item xs={4} sm={4}>
                                <IconButton aria-label="videoCamIcon" component="span">
                                    <VideocamRoundedIcon className={classes.iconButton} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <IconButton aria-label="callICon" component="span">
                                    <CallRoundedIcon className={classes.iconButton} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={4} sm={3}>
                                <IconButton aria-label="moreVertIcon" component="span">
                                    <MoreVertIcon className={classes.iconButton} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default withStyles(useStyles)(ChatBoxHeader);
