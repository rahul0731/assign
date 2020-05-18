import React,{ Component } from 'react';
import Head from './component/head';
import Value1 from './component/value1';
import Value2 from './component/value2';
import Gauge from './component/gauge';
import Modedisplay from './component/modedisplay'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/style.css'
class App extends Component {
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <Head/>
        </header>
        <section className="App-section">
          <Value1/>
          <Gauge/>
          
        </section>
        <footer className="App-footer">
          
          <Modedisplay/>
        </footer>

      </div>
    )
  }
}

export default App;