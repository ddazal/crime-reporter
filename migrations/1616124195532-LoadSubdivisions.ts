import { MigrationInterface } from 'typeorm'
import { MongoQueryRunner } from 'typeorm/driver/mongodb/MongoQueryRunner'
import { Subdivision } from '../src/core/subdivisions/domain/Subdivision'
import subdivisions from '../src/seed/subdivisions.json'

export class LoadSubdivisions1616122740820 implements MigrationInterface {
  public async up (queryRunner: MongoQueryRunner): Promise<void> {
    const countriesMap = new Map()
    for (const subdivision of subdivisions) {
      const countryCode = subdivision.country_code
      if (countriesMap.has(countryCode)) {
        const { name, code, level } = subdivision
        if (!name || !code) continue
        const doc = Subdivision.create(name, code.toString(), level)
        doc.country = countriesMap.get(countryCode)
        const result = await queryRunner.insertOne('subdivisions', doc)
        console.log(`Inserted id: ${result.insertedId}`)
      } else {
        const cursor = await queryRunner.cursor('countries', { code: countryCode }).limit(1)
        const country = await cursor.next()
        countriesMap.set(countryCode, country)
      }
    }
    // console.log(countriesMap)
  }

  public async down (queryRunner: MongoQueryRunner): Promise<void> {
    await queryRunner.clearTable('subdivisions')
  }
}
