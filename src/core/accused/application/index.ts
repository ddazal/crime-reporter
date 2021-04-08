import { AccusedService } from './AccusedService'
import { MongoAccusedRepository } from '../infra/MongoAccusedRepository'

const service = new AccusedService(new MongoAccusedRepository())

export { service as accusedService }
