import { Subdivision } from '../../subdivisions/domain/Subdivision'
import { Country } from './Country'

export interface ICountryRepository {
  getAll(): Promise<Country[]>
  getByCode(code: string): Promise<Country | undefined>
  getSubdivisions(code: string): Promise<Subdivision[]>
  updateCountry(code: string, data: Country): Promise<boolean>
}
