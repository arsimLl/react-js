
import './App.css'
import State from './components/State'
import StatusMessage from './components/StatusMessage'
import UseEffect from './components/UseEffect'
import WelcomeComponent from './components/WelcomeComponents'
import StudentsList from './components/StudentsList'
import UseStateComponent from './components/useStateComponent'

function App() {


  return (
    <>
      <State />
      <UseEffect />
      <WelcomeComponent isLoggedIn={false} />
      <StatusMessage isOnline={true} />
      <StudentsList />
      <UseStateComponent />
    </>
  )
}

export default App
