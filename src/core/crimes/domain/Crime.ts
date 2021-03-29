import { Column, Entity, ManyToMany, ObjectID, ObjectIdColumn } from 'typeorm'
import { Accused } from '../../accused/domain/Accused'
import { CrimeType } from '../../crime-types/domain/CrimeType'

@Entity('crimes')
export class Crime {
  @ObjectIdColumn()
  id!: ObjectID

  @Column()
  description: string

  @Column()
  occuredDate!: Date

  @Column()
  lat!: string

  @Column()
  lng!: string

  @ManyToMany(accuseds => Accused)
  accuseds: Accused[];

  @ManyToMany(types => CrimeType)
  types: CrimeType[];

  private constructor (accuseds: Accused[], description: string, types: CrimeType[]) {
    this.accuseds = accuseds
    this.description = description
    this.types = types
  }

  static create (accuseds: Accused[], description: string, types: CrimeType[]) {
    return new Crime(accuseds, description, types)
  }
}
