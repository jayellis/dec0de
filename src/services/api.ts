import ProjectData from '../types/Project.type'
import projects from '../projects.json'

function getProjects() {
  return projects.data
}

function getProject( title: any ) {
  const project = projects.data.filter( ( project: any ) => {
    const urlEncTitle = project.title.toLowerCase().replace(/ /g, '_')
    return title == urlEncTitle
  } )
  return project[0]
}

export { getProjects, getProject }
