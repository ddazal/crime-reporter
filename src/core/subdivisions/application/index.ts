import { SubdivisionService } from './SubdivisionService'
import { SubdivisionRepository } from '../infra/SubdivisionRepository'

const service = new SubdivisionService(new SubdivisionRepository())

export { service as subdivisionService }
