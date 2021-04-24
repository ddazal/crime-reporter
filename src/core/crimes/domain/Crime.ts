import Joi from 'joi'
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'
import { Accused } from '../../accused/domain/Accused'
import { CrimeType } from '../../crime-types/domain/CrimeType'

@Entity('crimes')
export class Crime {
  @ObjectIdColumn()
  id!: ObjectID

  @Column()
  description: string

  @Column()
  occurredDate!: Date

  @Column()
  lat: number

  @Column()
  lng: number

  @Column(type => Accused)
  accused!: Accused[];

  @Column(type => CrimeType)
  types!: CrimeType[];

  static schema: Joi.ObjectSchema = Joi.object({
    description: Joi.string().required(),
    lat: Joi.number().required(),
    lng: Joi.number().required(),
    occurredDate: Joi.date().default(new Date())
  }).unknown(false)

  private constructor (description: string, occurredDate: Date, lat: number, lng: number, accused?: Accused[], types?: CrimeType[]) {
    this.description = description
    this.occurredDate = occurredDate
    this.lat = lat
    this.lng = lng
    if (accused) {
      this.accused = accused
    }
    if (types) {
      this.types = types
    }
  }

  static create (description: string, occurredDate: Date, lat: number, lng: number, accused?: Accused[], types?: CrimeType[]) {
    return new Crime(description, occurredDate, lat, lng, accused, types)
  }
}
