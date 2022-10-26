import Images from './Image.type'

interface ProjectData {
    id?: any | null
    title: string
    client: string
    completeddate: number
    keywords:[ string ]
    images: [ Images ]
}

export default ProjectData
