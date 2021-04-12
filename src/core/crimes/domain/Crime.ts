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
  lat: string

  @Column()
  lng: string

  @ManyToMany(accused => Accused)
  accused: Accused[];

  @ManyToMany(types => CrimeType)
  types: CrimeType[];

  private constructor (accused: Accused[], description: string, occuredDate: Date, lat: string, lng: string, types: CrimeType[]) {
    this.accused = accused
    this.description = description
    this.occuredDate = occuredDate
    this.lat = lat
    this.lng = lng
    this.types = types
  }

  static create (accused: Accused[], description: string, occuredDate: Date, lat: string, lng: string, types: CrimeType[]) {
    return new Crime(accused, description, occuredDate, lat, lng, types)
  }
}
