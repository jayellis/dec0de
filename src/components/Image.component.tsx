import React from 'react'
import ImageData from '../types/Image.type'

const ImageCard: React.FC<ImageData> = ( {
  url,
  alt,
  description,
} ) => {
  return (
    <>
      <div className='gallery-item' style={ { backgroundImage: `url(${ url })` } }>
      </div>
      <p>{ description }</p>
    </>
  )
}

export default ImageCard
