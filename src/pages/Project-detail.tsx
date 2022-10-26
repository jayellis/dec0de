import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectData from '../types/Project.type'
import ImageData from '../types/Image.type'

import { getProject } from '../services/api'

const ProjectDetail: React.FC = () => {
  const { title } = useParams() 
  const project: any = getProject( title )
  return (
    <>
      <h1>
        { project.title }
      </h1>
      <div className='gallery'>
        { project.images && project.images.map( ( image: ImageData, index: number ) => (
          <img key={ index } className={ index == 0 ? 'hero' : 'image' } src={ image.url } alt={ image.alt } />
        ) ) }
      </div>
    </>
  )
}

export default ProjectDetail
