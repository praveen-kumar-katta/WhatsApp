import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Blueticks from './Blueticks';



export class ChatScreen extends Component {

    state = {

        flexDesign: ["flex-start", "flex-end"],
        packets: [
            {
                sender: 0,
                messages: [
                    {
                        text: 'yo bubbu',
                        time: '11.28pm',
                        status: 0,
                    },
                    {
                        text: 'echhhyu',
                        time: '11.29pm',
                        status: 0,
                    },
                    {
                        text: 'yetena matalassga, boooold rojlavfoye matali... i lebchuu',
                        time: '11.30pm',
                        status: 0,
                    },
                    {
                        text: 'yeleh',
                        time: '11.30pm',
                        status: 0,
                    },
                ]
            },
            {
                sender: 1,
                messages: [
                    {
                        text: 'bibbbbuu',
                        time: '12.15am',
                        status: 2,
                    },
                    {
                        text: 'chooooly foolyyy. Atla gaadee bhandu.... i dont wanna give reejans',
                        time: '12.15am',
                        status: 1,
                    },
                    {
                        text: 'thinksh fa being theya fa me',
                        time: '12.15am',
                        status: 0,
                    },
                ]
            },
            {
                sender: 0,
                messages: [
                    {
                        text: 'palledleee nuv na bangu bongu pingu chingu dungu',
                        time: '11.28pm',
                        status: 2,
                    },
                    {
                        text: 'chaduuuthanavga',
                        time: '11.29pm',
                        status: 2,
                    },
                    {
                        text: 'palledleee nuv na bangu bongu pingu chingu dungu',
                        time: '11.28pm',
                        status: 2,
                    },
                    {
                        text: 'chaduuuthanavga',
                        time: '11.29pm',
                        status: 2,
                    },
                    {
                        text: 'palledleee nuv na bangu bongu pingu chingu dungu',
                        time: '11.28pm',
                        status: 2,
                    },
                    {
                        text: 'chaduuuthanavga',
                        time: '11.29pm',
                        status: 2,
                    },
                ]
            },
        ]
    }
    render() {

        // let {flexDesign} = this.state.flexDesign;
        // let {messagePackets} = this.state.packets;
        // const {designer} = this.state.design;
        return (

            <React.Fragment>
                {
                    this.state.packets.map(packet => {
                        let mrVal = 0, mlVal = 0;
                        // let paperColor="";
                        if (packet.sender) {
                            mrVal = 2;
                            mlVal = 0;
                            // paperColor = "#128c7e"
                        } else {
                            mrVal = 0;
                            mlVal = 2;
                            // paperColor =  "#2F4F4F"
                        }


                        return (
                            <Grid container direction="column" justifyContent="center" alignItems={this.state.flexDesign[packet.sender]}>
                                <Box height="100%" width="60%" mr={mrVal} ml={mlVal} my={0.5} color='#FFF'>
                                    <Grid item>
                                        <Grid container direction="column" justifyContent="center" alignItems={this.state.flexDesign[packet.sender]}>
                                            {
                                                packet.messages.map(message => {
                                                    return (
                                                        <Grid item >
                                                            <Box mb={0.5} >
                                                                <Paper style={{ padding: 10, color: '#FFF', backgroundColor: "#2F4F4F", borderRadius: 7 }} elevation={3} >
                                                                    <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end" >
                                                                        <Grid item>
                                                                            <Typography style={{ fontSize: '1.0rem' }} variant="body1">{message.text}</Typography>
                                                                        </Grid>
                                                                        <Grid item>
                                                                            <Box pl={1}>
                                                                                <Typography style={{ fontSize: '0.7rem' }} variant="caption">{message.time}</Typography>
                                                                            </Box>
                                                                        </Grid>
                                                                        {
                                                                            packet.sender ?
                                                                                <Grid item>
                                                                                    <Blueticks status={message.status} />
                                                                                </Grid>
                                                                                : null
                                                                        }
                                                                    </Grid>
                                                                </Paper>
                                                            </Box>
                                                        </Grid>
                                                    );
                                                })
                                            }
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                        );
                    })
                }

            </React.Fragment>
        )
    }
}

export default ChatScreen;
