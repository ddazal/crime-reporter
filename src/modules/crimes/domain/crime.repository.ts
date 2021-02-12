import { Crime } from './crime'

export interface CrimeRepository {
  find(): Promise<Crime[]>
  findById(id: string): Promise<Crime>
}
