import { Accused } from './Accused'

export interface IAccusedRepository {
  getAll(): Promise<Accused[]>
  getByCode(code: string): Promise<Accused | undefined>
}
