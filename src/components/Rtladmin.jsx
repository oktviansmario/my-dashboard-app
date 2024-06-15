import React from 'react'
import { Link } from 'react-router-dom'

function Rtladmin() {
  return (
    <div>
        <p>RTL Admin Page</p>
        <Link to="/" className="underline">go to dashboard</Link>
    </div>

  )
}

export default Rtladmin