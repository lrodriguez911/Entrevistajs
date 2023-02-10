/*
 * Create the necessary implementation to make all the following methods return what's commented out
 *
 * You must use Javascript or Typescript
 */

class ORM {
  // Your code here
  constructor() {
    this.tables = []
    this.select = ''
  }
  createTable(name, model) {
    let i = this.tables.length
    this.tables[i] = {name, model}
  }
  table(table) {
    this.select = table
    return this
  }
  insert(obj) {
    console
    let index = this.tables.indexOf(this.select)
    return this.tables[index]
  }
  getTables() {
    return this.tables.map(table => table.name)
  }
  getAll() {
    return this.tables[0];
  }
}

const orm = new ORM();

orm.createTable("users", {
  id: { type: "integer", primaryKey: true, autoIncrement: true },
  name: { type: "text", notNull: true },
  email: { type: "text", notNull: true },
});
orm.createTable("pc", {
  id: { type: "integer", primaryKey: true, autoIncrement: true },
  name: { type: "text", notNull: true },
  email: { type: "text", notNull: true },
});
orm.createTable("buyers", {
  id: { type: "integer", primaryKey: true, autoIncrement: true },
  name: { type: "text", notNull: true },
  email: { type: "text", notNull: true },
});

console.log("getTables:", orm.getTables());
// getTables: [ 'users' ]

//console.log(orm.table("users"));
console.log(
  "insert:",
  orm.table("users").insert({ name: "John Doe", email: "john.doe@email.com" }),
); 
// insert: { id: 1, name: 'John Doe', email: 'john.doe@email.com' }
/*

console.log('insert:', orm.table('users').insert({ name: 'Jane Doe', email: 'jane.doe@email.com' }))
// insert: { id: 2, name: 'Jane Doe', email: 'jane.doe@email.com' }

console.log('getAll:', orm.table('users').getAll())
// getAll: [
//   { id: 1, name: 'John Doe', email: 'john.doe@email.com' },
//   { id: 2, name: 'Jane Doe', email: 'jane.doe@email.com' }
// ]

console.log('delete:', orm.table('users').deleteById(1))
// delete: { id: 1, name: 'John Doe', email: 'john.doe@email.com' }

console.log('getAll:', orm.table('users').getAll())
// getAll: [ { id: 2, name: 'Jane Doe', email: 'jane.doe@email.com' } ] */

/*
 * *************
 * *** BONUS ***
 * *************
 */

/* console.log('update:', orm.table('users').update(2, { name: 'Jane Doe Updated' }))
// update: { id: 2, name: 'Jane Doe Updated', email: 'jane.doe@email.com' }

console.log('getAll', orm.table('users').getAll())
// getAll: [ { id: 2, name: 'Jane Doe Updated', email: 'jane.doe@email.com' } ]

console.log('insert:', orm.table('users').insert({ name: 'John Doe' }))
// insert: Invalid: email cannot be null

console.log('insert:', orm.table('users').insert({ name: 10, email: 'john.doe@email.com' }))
// insert: Invalid: name must be a string

console.log('update:', orm.table('users').update(2, { name: 10 }))
// update: Invalid: name must be a string

console.log('update:', orm.table('users').update(2, { name: 'Other', lastName: 'Person' }))
// update: Invalid: lastName doesnt exists on schema */
