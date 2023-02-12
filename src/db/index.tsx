import Dexie, { Table } from 'dexie';
import {IUser, IAuth} from 'interfaces'

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  users!: Table<IUser>;
  auth!: Table<IAuth>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      auth: '++username, pass',
      users: '++id ,name,email,website,phone' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();