import React, { useState, useEffect } from 'react';
import { fetchData } from './api/index'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CopyrightIcon from '@material-ui/icons/Copyright';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Container from '@material-ui/core/Container';
import AlbumList from './AlbumList'
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  searchGridItem: {
    padding: '4rem'
  },
  searchBar: {
    background: '#424242',
    width: '25ch',
    textAlign: 'center',
  },
  albumList: {
    width: '90%'
  },
  footerBackground: {
    background: "#A53131",
    width: '100%',
    height: '100px',
    marginTop: '30px',
    position: 'relative',
    left: '0',
    bottom: '0',
    right: '0',
  },
  copyrightText: {
    fontSize: '11px',
    color: "#000000",
  },
  copyrightLogo: {
    color: "#000000",
    margin: '5px'
  },
  iconGrid: {
    marginTop: '30px',
  },
  Icons: {
    color: "#000000",
    width: '30px',
    cursor: 'pointer',
    paddingLeft: '5px',
    paddingRight: '5px'
  },
  warning: {
    color: '#616161',
    marginBottom: '4rem',
    textAlign: 'center'
  },
  description: {
    color: '#9e9e9e',
    marginBottom: '1rem',
    width: '30vw',
    textAlign: 'center'
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

  const githubClicked = () => {
    window.location = 'https://github.com/KhalidD98'
  }
  const linkedInClicked = () => {
    window.location = 'https://www.linkedin.com/in/khaliddakak/'
  }


  return (
    <>
      <Grid container spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ paddingBottom: '60px' }}>

        {/* Search Bar */}
        <Grid item className={classes.searchGridItem}>
          <form className={classes.searchBar} noValidate autoComplete="off">
            <TextField onChange={(e) => setSearchTerm(e.target.value)} id="filled-basic" label="Enter Album or Artist" variant="filled" color="secondary" />
          </form>
        </Grid>

        {/* Warning text */}
        <Grid item>
          <Typography className={classes.description}>
            Website created to show off Album Reviews from 3 guys who just love music. Have a favorite album or
            artist? Search it above and see what we thought of it.
          </Typography>
          <i>
            <Typography className={classes.warning}> *If covers are not showing, please refresh page</Typography>
          </i>
        </Grid>

        {/* Album List */}
        {data.length === 0 &&
          <CircularProgress />
        }
        
        {data.length > 0 &&
          <Grid item className={classes.albumList}>
            <AlbumList data={data} searchTerm={searchTerm} />
          </Grid>
        }

        {/* Webpage Style */}
        <style>{'body { background-color: #121212; }'}</style>
      </Grid >

      {/* Footer */}
      <AppBar className={classes.footerBackground}>
        <Container maxWidth="md">

          {/* Icons */}
          <Grid container direction="row"
            justify="center"
            alignItems="center" className={classes.iconGrid} >
            <GitHubIcon onClick={githubClicked} className={classes.Icons}></GitHubIcon>
            <LinkedInIcon onClick={linkedInClicked} className={classes.Icons}></LinkedInIcon>
          </Grid>

          {/* Copyright Information */}
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <CopyrightIcon className={classes.copyrightLogo}></CopyrightIcon>
            <Typography className={classes.copyrightText}>2021 Khalid Dakak</Typography>
          </Grid>
        </Container>
      </AppBar>
    </>
  )
}

export default App;