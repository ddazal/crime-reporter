import { CountryService } from './CountryService'
import { MongoCountryRepository } from '../infra/MongoCountryRepository'

const service = new CountryService(new MongoCountryRepository())

export { service as countryService }
