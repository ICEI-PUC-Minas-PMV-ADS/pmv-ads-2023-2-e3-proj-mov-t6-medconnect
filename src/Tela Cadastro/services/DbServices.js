import * as SQLite from 'expo-sqlite';

export const Database = {
    getConnection: () => {
        const db = SQLite.openDatabase('fuel_manager.db');
  
      db.transaction((tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS cadastro (id INTEGER PRIMARY KEY NOT NULL, nome TEXT NOT NULL, sobrenome TEXT NOT NULL, cpf TEXT NOT NULL, email TEXT NOT NULL);'
        );
      });
  
      const ExecuteQuery = (sql, params = []) =>
        new Promise((resolve, reject) => {
          db.transaction((trans) => {
            trans.executeSql(
              sql,
              params,
              (trans, results) => {
                resolve(results);
              },
              (error) => {
                reject(error);
              }
            );
          });
        });
  
      return ExecuteQuery;
    },
  };
  
  export default Database;
  