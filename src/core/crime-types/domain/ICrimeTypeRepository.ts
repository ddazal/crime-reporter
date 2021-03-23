import { CrimeType } from './CrimeType'

export interface ICrimeTypeRepository {
  getAll(): Promise<CrimeType[]>
  getByName(name: string): Promise<CrimeType | undefined>
}
