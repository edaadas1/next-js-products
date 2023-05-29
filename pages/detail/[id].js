import React from 'react'

const Detail = ({data}) => {

    console.log("detail",data)

  return (
    <>
    <div>
      {
        <div className='detail-div'>
            <img className='image' src={data.image} width={150}></img>
            <div>
                <p>{data.title}</p>
                <p>{data.description}</p>
                <p>Price : {data.price}</p>
            </div>
        </div>
      }
    </div>

    <style jsx>
      {
        `
            .detail-div{
                display:flex;
                padding:30px
            }
            .image{
                margin-right: 20px
            }
        `
      }            
    </style>
    </>
  )
}

export default Detail

export const getServerSideProps =async(context)=> {
    const data = await fetch(`https://fakestoreapi.com/products/${context.params.id}`).then(res=>res.json())
    return {
        props :{
            data
        }
    }
}
