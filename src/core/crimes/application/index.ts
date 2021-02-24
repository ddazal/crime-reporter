import { CrimeService } from './service'
import { MongoCrimeRepository } from '../infra/MongoCrimeRepository'

const service = new CrimeService(new MongoCrimeRepository())

export { service as crimeService }
