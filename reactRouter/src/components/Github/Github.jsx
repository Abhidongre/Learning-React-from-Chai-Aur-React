// import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()
    // const[data,setData] = useState([])

    // useEffect(() => {
    // fetch('https://api.github.com/users/Abhidongre')
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     setData(data);
    // })
    // }, [])

  return (
    <div className='text-center m-4 bg-red-400 p-4 text-3xl text-white font-bold'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Github picture" width={300} className='rounded-lg '/>
    </div>
  )
}

export const githubInfoLoader = async() => {
    const response =await fetch('https://api.github.com/users/Abhidongre')
    return response.json() 
}