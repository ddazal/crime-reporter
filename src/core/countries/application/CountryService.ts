import { Country } from '../domain/Country'
import { ICountryRepository } from '../domain/ICountryRepository'

export class CountryService {
  private repository: ICountryRepository

  constructor (repository: ICountryRepository) {
    this.repository = repository
  }

  async getAll (): Promise<Country[]> {
    const countries = await this.repository.getAll()
    return countries
  }

  async getByCode (code: string): Promise<Country | undefined> {
    const country = await this.repository.getByCode(code)
    return country
  }
}
