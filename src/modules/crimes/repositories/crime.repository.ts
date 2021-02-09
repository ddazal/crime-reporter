import { Crime } from '../../../models/'

export interface ICrimeRepository {
  getAll(): Promise<Crime[]>
  getById(id: string): Promise<Crime>
}
