import Link from 'next/link'
import React from 'react'

const info = () => {
  return (
    <>
    <div className='info'>
      <div className='info-text' >INFO</div>
      <Link href="/">Go Back To Homepage</Link>
    </div>

      <style jsx>
      {
        `
          .info{
            padding:30px
          }
          .info-text{
            margin-bottom:20px
          }
        `
      }
      </style>
      </>
  )
}

export default info
