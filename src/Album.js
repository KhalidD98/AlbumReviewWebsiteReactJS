import React, { useState, useEffect } from 'react';
import { Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
const albumArt = require('album-art')

const useStyles = makeStyles({
    root: {
        width: 208,
        height: 264,
        backgroundColor: "#414141",
        borderTopLeftRadius: 46,
        borderTopRightRadius: 46,
        borderBottomLeftRadius: 46,
        borderBottomRightRadius: 46,
        position: "absolute"
    },
    albumBackground: {
        width: 208,
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
    },
    divider: {
        width: '100%',
        maxWidth: '120px',
        backgroundColor: "#A53131",
        margin: '6px'
    }
});

export default function Album(data) {
    const classes = useStyles()
    let albumTitleFontSize = 18

    const [albumData, setAlbumData] = useState('')

    useEffect(async () => {
            const art = await albumArt(data.data.album, { album: data.data.artist, size: 'small' })
            setAlbumData(art)
    }, [data])

    const changeFontSize = (word) => {
        return albumTitleFontSize = albumTitleFontSize - (word.split(' ').length)
    }

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
                        <img className={classes.album} src={albumData} />
                    </Grid>

                    {/* Album Name */}
                    <Grid item>
                        <Typography className={classes.albumTitle} style={{fontSize: changeFontSize(data.data.album) + "px"}}>
                            {/* {Album} */}
                            {data.data.album}
                        </Typography>
                    </Grid>

                    <Divider className={classes.divider} />

                    {/* Artist */}
                    <Grid item>
                        <Typography className={classes.albumTitle} style={{fontSize: "13px"}}>
                            {data.data.artist}
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
                                {data.data.kdRating}
                            </Typography>
                        </Grid>
                        {/* Kyle Review */}
                        <Grid item>
                            <Typography className={classes.reviewText}>
                                Kyle's Review
                                    </Typography>
                            <Typography className={classes.reviewText}>
                                {data.data.kyleRating}
                            </Typography>
                        </Grid>
                        {/* Connor Review */}
                        <Grid item>
                            <Typography className={classes.reviewText}>
                                Connor's Review
                                        </Typography>
                            <Typography className={classes.reviewText}>
                                {data.data.connorRating}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}
