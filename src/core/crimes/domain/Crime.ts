import { Column, Entity, ManyToMany, ObjectID, ObjectIdColumn } from 'typeorm'
import { CrimeType } from '../../crime-types/domain/CrimeType'

@Entity('crimes')
export class Crime {
  @ObjectIdColumn()
  id!: ObjectID

  @Column()
  description: string

  @ManyToMany(types => CrimeType)
  types: CrimeType[];

  private constructor (description: string, types: CrimeType[]) {
    this.description = description
    this.types = types
  }

  static create (description: string, types: CrimeType[]) {
    return new Crime(description, types)
  }
}
