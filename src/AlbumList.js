import React from 'react'
import Album from './Album'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  grid: {
    flexGrow: 1,
    width: '100%',
  },
  elements: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    height: '280px',
  }
}));

export default function AlbumList({ data }) {
  const classes = useStyles();


  // Loading until data retrieved from api
  if (Object.keys(data).length === 0) {
    return (<p> Loading... </p>)
  }

  console.log(data)
  return (
    <div className={classes.grid}>
      <Grid container spacing={1}>
        {Object.keys(data).map((keyName, keyIndex) => {
          return (
            // Each Album listed
            <Grid item xs={6} sm={5} md={3} lg={2} className={classes.elements}>
              <Album {...data[keyName]} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}