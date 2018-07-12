import React, { Component } from 'react'
import './App.css'

const Greeter = ({ whom }) => (
  <button onClick={() => console.log(`Bonjour ${whom} !`)}>
    Vas-y, clique !
  </button>
)