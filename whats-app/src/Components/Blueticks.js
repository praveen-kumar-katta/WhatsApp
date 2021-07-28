import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DoneIcon from '@material-ui/icons/Done';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
    tick: {
        fontSize: '1.2rem',
    }
})

export class Blueticks extends Component {
    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                {
                    this.props.status === 0 ?
                        <DoneIcon className={classes.tick} />
                        :
                        <React.Fragment>
                            {
                                this.props.status === 1 ?
                                    <DoneAllIcon className={classes.tick} />
                                    :
                                    <DoneAllIcon style={{color:"#00BFFF"}} className={classes.tick} />
                            }
                        </React.Fragment>
                }
            </React.Fragment>
        )
    }
}
//prev blue color - 77C3EC || 
export default withStyles(useStyles)(Blueticks);
