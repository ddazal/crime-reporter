import Joi from 'joi'
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity('crimetypes')
export class CrimeType {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  name: string;

  static schema: Joi.ObjectSchema = Joi.object({
    name: Joi.string().required()
  }).unknown(false)

  private constructor (name: string) {
    this.name = name
  }

  static create (name: string) {
    return new CrimeType(name)
  }
}
