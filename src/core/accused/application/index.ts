import { AccusedService } from './AccusedService'
import { AccusedRepository } from '../infra/AccusedRepository'

const service = new AccusedService(new AccusedRepository())

export { service as accusedService }
