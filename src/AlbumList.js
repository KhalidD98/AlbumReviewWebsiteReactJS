import React from 'react'
import Album from './Album'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  elements: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    height: '280px',
  },
  loading: {
    color: 'white'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  }
}));

export default function AlbumList({data, searchTerm}) {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      <Grid container className={classes.center}>
        {data.filter(temp => {
          if(temp.artist.toLowerCase().includes(searchTerm.toLowerCase())){
            return temp.artist.toLowerCase().includes(searchTerm.toLowerCase())
          }
          else if(temp.album.toLowerCase().includes(searchTerm.toLowerCase())){
            return temp.album.toLowerCase().includes(searchTerm.toLowerCase())
          }
          return null
        }).map((value, index) => {
          // Remove albums with no reviews
          if(!value.kdRating && !value.connorRating && !value.kyleRating){
            return null
          }
          return (
            <Grid item xs={7} sm={5} md={3} lg={2} className={classes.elements} >
              <Album key={index} data={value} />
            </Grid>
          )
        })}
      </Grid>
    </div >
  )
}