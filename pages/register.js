import React from 'react'
import Link from 'next/link';

const register = () => {
  return (
    <>
    <div className='register'>
      <div className='register-text'>REGISTER</div>
      <Link href="/">Go Back To Homepage</Link>
    </div>

    <style jsx>
      {
        `
          .register{
            padding:30px
          }
          .register-text{
            margin-bottom:20px
          }
        `
      }
      </style>

    </>
  )
}

export default register
