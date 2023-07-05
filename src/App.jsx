import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const students = [{name: 'Gopal', age: 30, grades:[80, 90, 70, 89]},
                    {name: 'Sagar', age: 27, grades:[88, 82, 96]},
                  {name: 'Rajesh', age: 25, grades: [78, 94]}]

function calculateAverageGrade(students){
  let totalGrade = 0
  for(let i = 0; i < students.grades.length; i++){
    totalGrade += students.grades[i]
  }
  const averageGrade = totalGrade/students.grades.length

  return averageGrade
}

function printStudentInfo(student){
  console.log('Student Name: ', student.name)
  console.log('Student Age: ', student.age)
  console.log('Studnet Average Grade', calculateAverageGrade(student))

}

printStudentInfo(students[0])

  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
