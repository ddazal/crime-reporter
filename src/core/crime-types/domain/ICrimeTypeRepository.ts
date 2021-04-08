import { CrimeType } from './CrimeType'

export interface ICrimeTypeRepository {
  getAll(): Promise<CrimeType[]>
  getByCode(code: string): Promise<CrimeType | undefined>
  getOne(): Promise<CrimeType | undefined>
}
