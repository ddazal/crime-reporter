import { Country } from '../domain/Country'
import { ICountryRepository } from '../domain/ICountryRepository'

export class CountryService {
  private repository: ICountryRepository

  constructor (repository: ICountryRepository) {
    this.repository = repository
  }

  async getAll (): Promise<Country[]> {
    return await this.repository.getAll()
  }

  async getByCode (code: string): Promise<Country | undefined> {
    return await this.repository.getByCode(code)
  }
}
