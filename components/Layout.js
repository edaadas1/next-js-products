import React from 'react'

const Layout = ({children}) => {
  return (
    <>

        <div className='layout'>
        {children}
        </div>

        <style jsx>
            {
                `
                .layout{
                    width : 75% ;
                    margin : auto ;
                    background-color : lightgray
                }
                ` 
            }

        </style>

    </>
  )
}

export default Layout
