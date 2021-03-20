import { Country } from './Country'

export interface ICountryRepository {
  getAll(): Promise<Country[]>
  getByCode(code: string): Promise<Country | undefined>
}
