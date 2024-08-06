import UserContextPovider from '../context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextPovider>
      Hi, I am Abhishek
      <Login />
      <Profile />
    </UserContextPovider>
  )
}

export default App
