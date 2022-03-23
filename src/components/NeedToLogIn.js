import React from 'react'
import { Link } from 'react-router-dom'

const NeedToLogIn = () => {
  return (
    <div className='need-login'>
        <h1>
            Oops You Are Not Logged In 
        </h1>
        <div className='btn-submit'>
          <button>
          <Link to='/signin' className='link'>Login</Link>
          </button>
        </div>
        <div className='btn-submit'>
          <button >
            <Link to='/register' className='link'>SignUp</Link>
          </button>
        </div>
    </div>
  )
}

export default NeedToLogIn