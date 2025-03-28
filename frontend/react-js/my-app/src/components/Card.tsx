import React from 'react'
import Title from './Title'
import Description from './Description'

function Card({imageUrl , title , description}) {
  return (
    <div>
        <img src={imageUrl} alt='Image' height={200} width={350}/>
        <Title title={title}/>
        <Description description={description}/>
    </div>
  )
}

export default Card