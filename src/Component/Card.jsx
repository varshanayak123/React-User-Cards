import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className="w-52 bg-pink-400 text-black rounded-xl p-4 text-center">
    <img
  className='ml-9 h-32 w-32 rounded-full mb-3 object-cover'
  src={props.photo}
  alt={props.user}
/>
        <h1 className='text-2xl font-semibold'>
  {props.user}
</h1>
        <h4>{props.profession}</h4>
        <h2>{props.city} , {props.age}</h2>
        <button className="bg-amber-400 hover:bg-amber-500 hover:scale-105 hover:shadow-lg text-black mt-3 rounded p-2 transition-all duration-300">
  Add Friend
</button>
    </div>
  )
}

export default Card