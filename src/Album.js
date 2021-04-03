import React from 'react'
import { Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        width: 204,
        height: 264,
        backgroundColor: "#414141",
        borderTopLeftRadius: 46,
        borderTopRightRadius: 46,
        borderBottomLeftRadius: 46,
        borderBottomRightRadius: 46,
        position: "absolute"
    },
    albumBackground: {
        width: 204,
        height: 72,
        right: 0,
        background: "#A53131",
        borderTopLeftRadius: 46,
        borderTopRightRadius: 46,
        zIndex: 999,
        position: "absolute"
    },
    album: {
        height: 80,
        width: 80,
        zIndex: 1000,
        margin: 10,
        position: "relative",
        background: "#414141"
    },
    albumTitle: {
        color: "white",
        textAlign: "center"
    },
    reviewText: {
        width: 63,
        height: 16,
        paddingTop: 20,
        paddingLeft: 2,
        fontSize: "11px",
        textAlign: "center",
        color: "#EEEEEE",
    }
});



export default function Album(props) {
    const classes = useStyles();
    // console.log(props)
    return (
        <>
            {/* Actual Album Card */}
            <Card className={classes.root}>
                {/* Contains the album cover and text */}
                <Grid container direction="column"
                    justify="center"
                    alignItems="center">

                    {/* Red section of card */}
                    <Grid item>
                        <Card className={classes.albumBackground}> </Card>
                    </Grid>

                    {/* Album Cover */}
                    <Grid item>
                        <img className={classes.album} src={props.albumCover} />
                    </Grid>

                    {/* Album Name */}
                    <Grid item>
                        <Typography className={classes.albumTitle}>
                            {/* {Album} */}
                            {props["Albums"]}
                        </Typography>
                    </Grid>

                    {/* Artist */}
                    <Grid item>
                        <Typography className={classes.albumTitle}>
                            {props["Artist"]}
                        </Typography>
                    </Grid>

                    {/* Contains reviews */}
                    <Grid container>
                        {/* KD Review */}
                        <Grid item>
                            <Typography className={classes.reviewText}>
                                KD's Review
                                    </Typography>
                            <Typography className={classes.reviewText}>
                                {props["KD's Ratings"]}
                            </Typography>
                        </Grid>
                        {/* Kyle Review */}
                        <Grid item>
                            <Typography className={classes.reviewText}>
                                Kyle's Review
                                    </Typography>
                            <Typography className={classes.reviewText}>
                                {props["Kyle's Ratings"]}
                            </Typography>
                        </Grid>
                        {/* Connor Review */}
                        <Grid item>
                            <Typography className={classes.reviewText}>
                                Connor's Review
                                        </Typography>
                            <Typography className={classes.reviewText}>
                                {props["Connor's Ratings"]}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}
