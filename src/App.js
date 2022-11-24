// import './App.css'
// import Hero from './components/Hero'
// import ErrorBoundary from './components/ErrorBoundary'

import Counter from "./components/Counter"

// import ClickCounter from "./components/ClickCounter"
import CLickCounterTwo from "./components/CLickCounterTwo"
import HovereCounterTwo from "./components/HovereCounterTwo"
// import User from "./components/User"
// import HoverCounter from "./components/HoverCounter"

function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="superMan"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="joker"></Hero>
      </ErrorBoundary> */}
      {/* <ClickCounter name="Vince"/> */}
      {/* <HoverCounter/> */}
      {/* <CLickCounterTwo/> */}
      {/* <User render={(isLoggedIn)=>isLoggedIn ? 'vince' :'guest'}/> */}
      {/* <HovereCounterTwo/> */}
      <Counter render = {(count,incrementCount)=><CLickCounterTwo count = {count} incrementCount={incrementCount} />}/>
      <Counter render = {(count,incrementCount)=><HovereCounterTwo count = {count} incrementCount={incrementCount} />}/>

    </div>
  )
}

export default App
