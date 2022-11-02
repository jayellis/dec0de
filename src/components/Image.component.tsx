import React, { useRef, useEffect, useState } from 'react'
import ImageData from '../types/Image.type'
import UseOnScreen from '../hooks/UseOnScreen'

const ImageCard: React.FC<ImageData> = ( {
  url,
  alt,
  description,
} ) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>
  const onScreen = UseOnScreen( ref )
  return (
    <>
      <div 
        ref={ref}
        className={ onScreen ? 'show gallery-item' : 'hide gallery-item' } 
        style={ { 
          backgroundImage: `url(${ url })` 
        } }
        >
      </div>
      <p>{ description }</p>
    </>
  )
}


export default ImageCard
