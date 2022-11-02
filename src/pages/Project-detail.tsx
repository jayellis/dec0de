import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectData from '../types/Project.type'
import ImageData from '../types/Image.type'
import ImageCard from '../components/Image.component'

import { getProject } from '../services/api'

const ProjectDetail: React.FC = () => {
  const { title } = useParams() 
  const project: any = getProject( title )

  return (
    <div 
      className='client-detail'
      style={ { background: project.background ? project.background : 'white' } }
      >
      <section 
        className='client-details-hero'
        >
        <h2>
          WORK/
        </h2>
        { project.logo ? <div className='logo'></div> : '' }
        <h1>
          { project.title }
        </h1>
        { project.hero ? <div className='hero'></div> : '' }
      </section>

      <div className='gallery'>
        { project.images.map( ( image: ImageData, index: number ) => (
          <ImageCard { ...image } key={ 'project-' + index } />
        ) ) }
      </div>
    </div>
  )
}

export default ProjectDetail
