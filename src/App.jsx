import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import users from './json/users.json'

const totalColors = [
  '#D4F5602', '#23C1E7', '#7D4AF0', '#63A007', '#964F44', '#594754', '#1C333A', '#66A94E', '#6E412E', '#450B15'  
]

  function App() {

  console.log(users)

  const createNumberRandom = array => {
    return Math.floor(Math.random() * array.length) 
  }

  const getElementRandom = array => {
    const i = createNumberRandom(array)
    return array[i]
  }

  

  const [quoteBox, setUserRandom] = useState(getElementRandom(users))
  const [colorRandom, setColorRandom] = useState(getElementRandom(totalColors))
 
  const clickButton = () => {
    setUserRandom(getElementRandom(users))
    setColorRandom(getElementRandom(totalColors))
  }

  const appStyle = {
    backgroundColor: colorRandom
  }
  
  return (
    
   <div style={appStyle} className="App">
       <Card
      quoteBox={quoteBox}
      colorRandom={colorRandom}
      clickButton={clickButton}
      /> 

   </div>
  )
 }

export default App
