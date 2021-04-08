import { Crime } from './Crime'

export interface ICrimeRepository {
  getAll(page: number): Promise<Crime[]>
  getById(id: string): Promise<Crime | undefined>
}
