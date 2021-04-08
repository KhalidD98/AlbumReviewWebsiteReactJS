import React from 'react'
import Album from './Album'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
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
  }
}));

export default function AlbumList({data, searchTerm}) {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      <Grid container spacing={1}>
        {data.filter(album => {
          if(album.artist.toLowerCase().includes(searchTerm.toLowerCase())){
            return album.artist.toLowerCase().includes(searchTerm.toLowerCase())
          }
          else if(album.album.toLowerCase().includes(searchTerm.toLowerCase())){
            return album.album.toLowerCase().includes(searchTerm.toLowerCase())
          }
        }).map((value, index) => {
          return (
            <Grid item xs={6} sm={5} md={3} lg={2} className={classes.elements} >
              <Album key={index} data={value} />
            </Grid>
          )
        })}
      </Grid>
    </div >
  )
}