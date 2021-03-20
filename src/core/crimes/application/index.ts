import { CrimeService } from './CrimeService'
import { MongoCrimeRepository } from '../infra/MongoCrimeRepository'

const service = new CrimeService(new MongoCrimeRepository())

export { service as crimeService }
