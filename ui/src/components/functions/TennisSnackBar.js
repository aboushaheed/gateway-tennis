import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Snackbar, IconButton, SnackbarContent } from '@material-ui/core';
import { Warning, CheckCircle, Error as ErrorIcon, Info } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';

const variantIcon = {
    success: CheckCircle,
    warning: Warning,
    error: ErrorIcon,
    info: Info,
};

const useStyles = makeStyles(theme => ({
    success: {
        backgroundColor: green[700],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

export default function TennisSnackBar(props) {

    const classes = useStyles();
    const Icon = variantIcon[props.variant] || variantIcon['info'];

    return (<Snackbar
        open={!!props.message}
        autoHideDuration={5000}
        onClose={props.handleClose}>
        <SnackbarContent
            className={classes[props.variant]}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={classes.icon + " " + classes.iconVariant} />
                    {props.message}
                </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={props.handleClose}>
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
        />

    </Snackbar>)
} 