'use client'
import {useParams, usePathname, useRouter} from 'next/navigation'

// dynamic routing 
export default function PropertyPage() {

  const route = useRouter()
  const {id } = useParams()
  const pathname = usePathname()
  return (
    <div>
      <h1 className="text-3xl text-center">Product {id}</h1>
      <p>{pathname}</p>
      <button onClick={()=> route.push('/')} className="bg-blue-500 p-2">Home </button>
    </div>
  )
}
