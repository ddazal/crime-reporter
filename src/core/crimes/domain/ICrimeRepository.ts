import { Crime } from './Crime'

export interface ICrimeRepository {
  getAll(): Promise<Crime[]>
  getById(id: string): Promise<Crime | undefined>
}
