import Knex from 'knex'

export async function up(Knex: Knex) {
  return Knex.schema.createTable('pascom', table => {
    table.increments()
    table.string('nome').notNullable().unique()
    table.string('senha').notNullable()
    table.timestamp('created_at', { precision: 0 }).defaultTo(Knex.fn.now(0))
    table.timestamp('updated_at', { precision: 0 }).defaultTo(Knex.fn.now(0))
  })
}

export async function down(Knex: Knex) {
  return Knex.schema.dropTable('pascom')
}