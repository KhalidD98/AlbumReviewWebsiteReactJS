import React, { useState, useEffect } from 'react';
import AlbumList from './AlbumList'
import { fetchData } from './api/index'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '100px'
  },
  main: {
    background: '#424242',
    width: '25ch',
    textAlign: 'center',
  },
  albums: {
    width: '90%'
  }
})

function App() {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const classes = useStyles()


  useEffect(() => {
    async function fetchMyApi() {
      const fetchedData = await fetchData()
      setData(fetchedData)
    }
    fetchMyApi()
  }, [])


  return (
    <Grid container spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}>

      {/* Search Bar */}
      <Grid item className={classes.root}>
        <form className={classes.main} noValidate autoComplete="off">
          <TextField onChange={(e) => setSearchTerm(e.target.value)} id="filled-basic" label="Enter Album or Artist" variant="filled" color="secondary" />
        </form>
      </Grid>

      {/* Album List */}
      {/* {console.log(data["0"].art)} */}
      <Grid item className={classes.albums}>
        <AlbumList data={data} searchTerm={searchTerm}/>
      </Grid>

      {/* Webpage Style */}
      <style>{'body { background-color: #121212; }'}</style>
    </Grid >
  )
}

export default App;