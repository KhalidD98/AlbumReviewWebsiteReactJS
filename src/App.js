import React from 'react'
import AlbumList from './AlbumList'
import { fetchData } from './api/index'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    padding: '100px'
  },
  main: {
    background: '#424242',
    width: '25ch',
    textAlign: 'center',
  }
});

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }

  render() {
    const { classes } = this.props;
    const { data } = this.state
    return (
      <Grid container spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}>

        {/* Search Bar */}
        <Grid item className={classes.root}>
          <form className={classes.main} noValidate autoComplete="off">
            <TextField id="filled-basic" label="Enter Album or Artist" variant="filled" color="secondary" />
          </form>
        </Grid>

        {/* Album List */}
        <Grid item>
          <AlbumList data={data} />
        </Grid>

        {/* Webpage Style */}
        <style>{'body { background-color: #121212; }'}</style>
      </Grid >
    )
  }
}

export default withStyles(styles)(App);