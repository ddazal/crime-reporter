import { Subdivision } from '../../subdivisions/domain/Subdivision'
import { Country } from './Country'

export interface ICountryRepository {
  getAll(): Promise<Country[]>
  getByCode(code: string): Promise<Country | undefined>
  getSubdivisions(code: string): Promise<Subdivision[]>
  updateCountry(id: string, data: Country): Promise<number>
}
