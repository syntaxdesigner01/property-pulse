import React from 'react'
import Link from 'next/link'
export default function HomePage() {
  return (
    <div> 
<h1 className="text-3xl text-center">Welcome</h1>

{/* this add reload on the page */}
{/* <a href="/properties">show property</a> */}
      
      {/* this doesn't reload page */}
<Link href={'/properties'}>Show property</Link>

    </div>
  )
}
