import { Crime } from './Crime'

export interface ICrimeRepository {
  find(): Promise<Crime[]>
  findById(id: string): Promise<Crime>
}
