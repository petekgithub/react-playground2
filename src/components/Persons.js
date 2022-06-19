import React from 'react'


const Persons = (props) => {

  return (
    <>
    {props.persons.map((person) => {
      //console.log(persons);
      const {id,name,age,image} = person;
      return (
        <article key={id} className='person'>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <h2>{age} years old.</h2>
          </div>
        </article>
      )
    })}
      
    </>
  )
}

export default Persons;