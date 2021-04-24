import Joi from 'joi'
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity('countries')
export class Country {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  name: string;

  @Column()
  code: string;

  static schema: Joi.ObjectSchema = Joi.object({
    name: Joi.string(),
    code: Joi.string().length(2)
  }).min(1).unknown(false)

  private constructor (name: string, code: string) {
    this.name = name
    this.code = code
  }

  static create (name: string, code: string) {
    return new Country(name, code)
  }
}
