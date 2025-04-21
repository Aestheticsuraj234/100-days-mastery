import React from 'react'
import Header from './components/Header'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
    <div className='flex flex-col h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
      <Header/>
       </div>
       </ThemeProvider>
  )
}

export default App