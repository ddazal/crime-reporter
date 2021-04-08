import { SubdivisionService } from './SubdivisionService'
import { MongoSubdivisionRepository } from '../infra/MongoSubdivisionRepository'

const service = new SubdivisionService(new MongoSubdivisionRepository())

export { service as subdivisionService }
