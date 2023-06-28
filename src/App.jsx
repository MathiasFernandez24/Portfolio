import { useState } from 'react'
import styles from './App.module.css'
import CardListWeb from './components/cardListWeb/CardListWeb'
import NavBar from './components/navBar/NavBar'
import CardListMobile from './components/cardListMobile/CardListMobile'

function App() {
  const [isMobileView, setIsMobileView] = useState(true)

  return (
    <div className={styles.container}>
      <NavBar setIsMobileView={setIsMobileView} isMobileView={isMobileView} />
      {
        isMobileView ?
          <CardListMobile />
          :
          <CardListWeb />
      }
    </div>
  )
}

export default App
