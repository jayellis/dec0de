import React from 'react'
import { Link } from 'react-router-dom'
import ProjectData from '../types/Project.type'
import ImageData from '../types/Image.type'
import ImageCard from './Image.component'

const renderImages = ( images: ImageData[] ) => {
  return images.map( ( image: ImageData, index: number ) => {
    if( index === 0 ) return <ImageCard {...image} key={ index } />
      else return ''
  } )
}

const ProjectCard: React.FC<ProjectData> = ( {
  id,
  title,
  client,
  completeddate,
  keywords,
  images
} ) => {
  const fullUrl = '/work/' + title.toLowerCase().replace(/ /g, '_')

  return (
    <li key={ id } className='project-card' >
      <h2>{ title }</h2>
      <p>{ client }</p>
      <Link to={ fullUrl } >
        <p>Go</p>
      </Link>
      <div className='gallery'>
        { renderImages( images ) } 
      </div>
    </li>
  )
}

export default ProjectCard
