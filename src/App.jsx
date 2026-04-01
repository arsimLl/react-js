import './App.css'
import State from './components/State'
import StatusMessage from './components/StatusMessage'
import UseEffect from './components/UseEffect'
import WelcomeComponent from './components/WelcomeComponents'
import StudentsList from './components/StudentsList'
import UseStateComponent from './components/useStateComponent'
import ClickEvents from './components/ClickEvents'
import OnChangeEvent from './components/OnChangeEvent'
import TwoStateComponent from './components/TwoStateComponent'
import DarkMode from './components/DarkMode'
import RenderLists from './components/Lists/Render.Lists'
import RenderListsObjects from './components/Lists/RenderListsObjects'
import Courses from './components/Lists/Courses'
import Movies from './components/Lists/Movies'

function App() {

  const courses = [
    {
      id: 1,
      title: "react",
      instructor: "Arsim",
      price: 250
    },

    {
      id: 2,
      title: "javascript",
      instructor: "Egzon",
      price: 350
    },

    {
      id: 3,
      title: "html & css",
      instructor: "Elton",
      price: 200
    }
  ]


  const movies = [
    {
      movieName: "Bruce Lee",
      movieDescription: "react",
      isAvailable: "true",
      movieRate: 4
    },

    {
      movieName: "Bruce Lee",
      movieDescription: "react",
      isAvailable: "true",
      movieRate: 4.2
    },

    {
      movieName: "Bruce Lee",
      movieDescription: "react",
      isAvailable: "true",
      movieRate: 4.5
    }
  ]


  return (
    <>
      <State />
      <UseEffect />
      <WelcomeComponent isLoggedIn={false} />
      <StatusMessage isOnline={true} />
      <StudentsList />
      <UseStateComponent />
      <ClickEvents />
      <OnChangeEvent />
      <TwoStateComponent />
      <DarkMode />
      <RenderLists />
      <RenderListsObjects />
      {
        courses.map(course => (
          <Courses
            title={course.title}
            instructor={course.instructor}
            price={course.price}
            key={course.id}
          />
        ))
      }


    {         
    movies.map(course => (
      <Movies
        title={course.movieName}
        director={course.movieDescription}
        year={course.isAvailable}
        key={course.id}
      />
    ))
  }

  )
}

export default App
