import React from 'react'
import ProjectData from '../types/Project.type'
import ImageCard from '../components/Image.component'

const GalleryComponent: React.FC<ProjectData> = ( {
  images
} ) => {
  console.log( 'images', images )
  return (
    <>
      { images && images.map( ( image ) => ( <>
        <p>
        Image.url
        </p>
        <ImageCard { ...image } />
        </>
      ) ) } 
    </>
  )
} 

export default GalleryComponent
