import React from 'react'
import "../styles/main.css"
import PageTitle from './PageTitle'
import Dashboard from './Dashboard'

const Main = () => {
  return (
    <main id="main" className='main'>
        <PageTitle page= "Dashboard"/>
        <Dashboard/>
    </main>
  )
}

export default Main