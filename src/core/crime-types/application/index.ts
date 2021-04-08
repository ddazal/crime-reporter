import { CrimeTypeService } from './CrimeTypeService'
import { CrimeTypeRepository } from '../infra/CrimeTypeRepository'

const service = new CrimeTypeService(new CrimeTypeRepository())

export { service as crimeTypeService }
