import React from 'react'
import { Link } from 'react-router-dom'

function Profiles() {
  return (
    <div>
        <p>Profiles Page</p>
        <Link to="/" className="underline">go to dashboard</Link>
    </div>

  )
}

export default Profiles