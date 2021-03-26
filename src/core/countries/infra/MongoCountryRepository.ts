import { getRepository } from 'typeorm'
import { Country } from '../domain/Country'
import { ICountryRepository } from '../domain/ICountryRepository'

export class MongoCountryRepository implements ICountryRepository {
  async getAll (): Promise<Country[]> {
    return await getRepository(Country).find()
  }

  async getByCode (code: string): Promise<Country | undefined> {
    return await getRepository(Country).findOne({ code })
  }
}
