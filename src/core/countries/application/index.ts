import { CountryService } from './CountryService'
import { CountryRepository } from '../infra/CountryRepository'

const service = new CountryService(new CountryRepository())

export { service as countryService }
