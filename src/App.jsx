import React from 'react'
import Card from './Component/Card'

const users = [
  {
    "name": "Meera Desai",
    "city": "Mumbai",
    "age": 20,
    "profession": "Student",
    "profilePhoto": "https://images.unsplash.com/photo-1626701594060-8329551e05bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
  },
  {
    "name": "Rahul Sharma",
    "city": "Pune",
    "age": 24,
    "profession": "Software Engineer",
    "profilePhoto": "https://plus.unsplash.com/premium_photo-1780948462862-2dcd0636ed5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0MXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8"
  },
  {
    "name": "Ananya Patel",
    "city": "Bengaluru",
    "age": 22,
    "profession": "Graphic Designer",
    "profilePhoto": "https://images.unsplash.com/photo-1782830613404-fe3f314d804f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
  },
  {
    "name": "Rohit Verma",
    "city": "Delhi",
    "age": 27,
    "profession": "Data Analyst",
    "profilePhoto": "https://plus.unsplash.com/premium_photo-1779372801181-0d00b1448662?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
  },
  {
    "name": "Priya Kapoor",
    "city": "Hyderabad",
    "age": 25,
    "profession": "Doctor",
    "profilePhoto": "https://plus.unsplash.com/premium_photo-1781045230616-8fe522a552da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
  }
]


const App = () => {
  return (
    
   <div className="p-10 flex justify-between gap-4">
      {users.map(function(elem , idx){
        return <Card
  key={idx}
  user={elem.name}
  surname={elem.surname}
  age={elem.age}
  city={elem.city}
  profession={elem.profession}
  photo={elem.profilePhoto}
/>
      })}
      
    </div>
  )
}

export default App
