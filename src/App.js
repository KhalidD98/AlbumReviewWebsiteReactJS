import React from 'react'
import AlbumList from './AlbumList'
import { fetchData } from './api/index'

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }

  render() {
    const { data } = this.state
    return (
      <>
        <AlbumList data={data} />
        <style>{'body { background-color: #121212; }'}</style>
      </>
    )
  }
}
export default App