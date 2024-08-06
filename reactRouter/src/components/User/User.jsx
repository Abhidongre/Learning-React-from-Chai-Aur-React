import { useParams } from 'react-router-dom'

export default function User() {
    const{id} = useParams()
 
    return (
    <div  className=" bg-cyan-300 text-black p-4 text-center">User : {id}</div>
  )
}
