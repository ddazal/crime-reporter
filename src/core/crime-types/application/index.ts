import { CrimeTypeService } from './CrimeTypeService'
import { MongoCrimeTypeRepository } from '../infra/MongoCrimeTypeRepository'

const service = new CrimeTypeService(new MongoCrimeTypeRepository())

export { service as CrimeTypeService }
