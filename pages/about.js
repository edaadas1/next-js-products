import Link from 'next/link'
import React from 'react'

const about = () => {
  return (
    <>
    <div className='about'>
      <div className='about-text' >ABOUT</div>
      <Link href="/">Go Back To Homepage</Link>
    </div>

      <style jsx>
      {
        `
          .about{
            padding:30px
          }
          .about-text{
            margin-bottom:20px
          }
        `
      }
      </style>
    
    </>
  )
}

export default about
