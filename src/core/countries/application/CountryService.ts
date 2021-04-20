import { Subdivision } from '../../subdivisions/domain/Subdivision'
import { Country } from '../domain/Country'
import { ICountryRepository } from '../domain/ICountryRepository'

export class CountryService {
  private repository: ICountryRepository

  constructor (repository: ICountryRepository) {
    this.repository = repository
  }

  getAll (): Promise<Country[]> {
    return this.repository.getAll()
  }

  getByCode (code: string): Promise<Country | undefined> {
    return this.repository.getByCode(code)
  }

  getSubdivisions (code: string): Promise<Subdivision[]> {
    return this.repository.getSubdivisions(code)
  }

  updateCountry (code: string, data: Country): Promise<boolean> {
    return this.repository.updateCountry(code, data)
  }
}
