import { useState } from 'react'
import Header from './components/common/Header'
import Banner from './components/Banner'
import Category from './components/Category'
import './App.css'
import CategorySecond from './components/CategorySecond'



function App() {
  
  return (
    <>
    <Banner/>
    <Category/>
    <CategorySecond/>
    </>
  )
}

export default App
