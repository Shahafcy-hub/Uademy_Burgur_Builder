import React, { Component } from 'react';
import Layout from './components/Layout/Layout.js'
import BurgurBuilder from './containers/BurgurBuilder/BurgurBuilder'

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgurBuilder/>
      </Layout>
    
    );
  }
}

export default App;