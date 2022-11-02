import React from 'react'
import ProjectData from '../types/Project.type'
import ProjectCard from '../components/Project.component'

import { getProjects } from '../services/api'

const ProjectList: React.FC<any> = () => {
  const projects: Array<any> = getProjects()
  return (
    <>
      <h1>
        Projects
      </h1>
      <ul>
        { projects && projects.map( ( project: ProjectData, index: number ) => ( 
          <ProjectCard {...project} key={ index } />
        ) ) }
      </ul>
    </>
  )
}

export default ProjectList
