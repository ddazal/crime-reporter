import { CrimeType } from './CrimeType'

export interface ICrimeTypeRepository {
  getAll(): Promise<CrimeType[]>
  getMany(): Promise<CrimeType[]>
  createCrimeType(data: CrimeType): Promise<string>
  deleteCrimeType(id: string): Promise<boolean>
  updateCrimeType(id: string, data: CrimeType): Promise<boolean>
}
