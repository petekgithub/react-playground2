import React from 'react'

const Kisiler = ({kisiler}) => {
  return (
    <>
    {kisiler.map((kisi) => {
      const {id,name,age,image} = kisi;
      return (
        <article key={id}
        className='person'>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <h2>{age} yaşındadır</h2>
          </div>
        </article>
      )
    })}
      
    </>
  )
}

export default Kisiler;