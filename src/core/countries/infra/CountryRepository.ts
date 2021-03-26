import { getRepository, Repository } from 'typeorm'
import { Country } from '../domain/Country'
import { ICountryRepository } from '../domain/ICountryRepository'

export class CountryRepository extends Repository<Country> implements ICountryRepository {
  async getAll (): Promise<Country[]> {
    return await getRepository(Country).find()
  }

  async getByCode (code: string): Promise<Country | undefined> {
    return await getRepository(Country).findOne({ code })
  }
}
