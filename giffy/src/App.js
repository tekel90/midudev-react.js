import React from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'

import { Link, Route } from "wouter"


export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/panda'>Gifs de panda</Link>
        <Link to='/gif/ecuador'>Gifs de ecuador</Link>
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword" />
      </section>
    </div>
  )
}