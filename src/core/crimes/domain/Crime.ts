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

  @ManyToMany(accused => Accused)
  accused: Accused[];

  @ManyToMany(types => CrimeType)
  types: CrimeType[];

  private constructor (accuseds: Accused[], description: string, types: CrimeType[]) {
    this.accused = accuseds
    this.description = description
    this.types = types
  }

  static create (accused: Accused[], description: string, types: CrimeType[]) {
    return new Crime(accused, description, types)
  }
}
