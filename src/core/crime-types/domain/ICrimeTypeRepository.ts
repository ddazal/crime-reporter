import { CrimeType } from './CrimeType'

export interface ICrimeTypeRepository {
  getAll(): Promise<CrimeType[]>
  getMany(): Promise<CrimeType[]>
}
