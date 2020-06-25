import React from 'react'
import './style.css'
import projects from './components/data.json'
import Project from './components/project'



function App() {

  return (
    <div className="App">
      <header>
        <h1>Valtteri Hartikainen</h1>
        <h2>programming portfolio</h2>
      </header>
        <div>
        {
          projects.map(prjct => <Project key={prjct.name}  project={prjct}/>)
        }
        </div>

    </div>
  )
}

export default App
