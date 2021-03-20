import { getRepository } from 'typeorm'
import { Country } from '../domain/Country'
import { ICountryRepository } from '../domain/ICountryRepository'

export class MongoCountryRepository implements ICountryRepository {
  async getAll (): Promise<Country[]> {
    const countries = await getRepository(Country).find()
    return countries
  }

  async getByCode (code: string): Promise<Country | undefined> {
    const country = await getRepository(Country).findOne({ code })
    return country
  }
}
