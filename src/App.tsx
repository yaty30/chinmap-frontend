import React, { Suspense} from 'react'
import logo from './logo.svg';
import './App.css';
import Drawer from './Views/Drawer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          
          <Route path="/">
            <Drawer />
          </Route>
          
          <Route path="/defaultScanModes">
            <Drawer />
          </Route>

          <Route path="/customisedScanModes">
            <Drawer />
          </Route>

          <Route path="/scanResult">
            <Drawer />
          </Route>

          <Route path="/scanComparison">
            <Drawer />
          </Route>

          <Route path="/scanHistory">
            <Drawer />
          </Route>

        </Switch>
      </Suspense>
    </Router>
  )
}

export default App;
