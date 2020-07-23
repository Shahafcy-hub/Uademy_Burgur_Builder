import React, { Component } from 'react';
import Layout from './components/Layout/Layout.js'
import BurgurBuilder from './containers/BurgurBuilder/BurgurBuilder'

class App extends Component {
  render() {
    return (
      <Layout>
        <div>[App.js] hi אחים</div>
        <BurgurBuilder/>
      </Layout>
    
    );
  }
}

export default App;