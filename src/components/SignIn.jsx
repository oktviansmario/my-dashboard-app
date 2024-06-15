import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div>
        <p>SignIn Page</p>
        <Link to="/" className="underline">go to dashboard</Link>
    </div>

  )
}

export default SignIn