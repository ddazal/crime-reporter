import { Column, Entity, ObjectID, ObjectIdColumn, ManyToMany, JoinTable } from 'typeorm'
import { Crime } from '../../crimes/domain/Crime'

@Entity('crimetypes')
export class CrimeType {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  name: string;

  @ManyToMany(crimes => Crime)
  @JoinTable()
  crimes!: Crime[];

  private constructor (name: string) {
    this.name = name
  }

  static create (name: string) {
    return new CrimeType(name)
  }
}
