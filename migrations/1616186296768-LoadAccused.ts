import { MigrationInterface } from 'typeorm'
import { MongoQueryRunner } from 'typeorm/driver/mongodb/MongoQueryRunner'
import { Accused } from '../src/core/accused/domain/Accused'
import accused from '../src/seed/accused.json'

export class LoadAccused1616186296768 implements MigrationInterface {
  public async up (queryRunner: MongoQueryRunner): Promise<void> {
    const subdivisionsMap = new Map()
    for (const person of accused) {
      const subdivisionCode = person.birthPlace

      if (!subdivisionsMap.has(subdivisionCode)) {
        const cursor = await queryRunner.cursor('subdivisions', { code: subdivisionCode }).limit(1)
        const subdivision = await cursor.next()
        subdivisionsMap.set(subdivisionCode, subdivision)
      }

      const { firstName, lastName, gender, birthDate } = person
      const birthPlace = subdivisionsMap.get(subdivisionCode)
      const doc = Accused.create(firstName, lastName, gender, birthDate, birthPlace)
      const result = await queryRunner.insertOne('accused', doc)
      console.log(`Inserted id: ${result.insertedId}`)
    }
  }

  public async down (queryRunner: MongoQueryRunner): Promise<void> {
    await queryRunner.clearTable('accused')
  }
}
