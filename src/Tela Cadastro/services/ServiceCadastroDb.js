import Database from './DbServices';

const DB_EXEC = Database.getConnection();

export const getCadastro = async () => {
  let results = await DB_EXEC(`select * from cadastro`);
  
  return results.rows._array;
}

export const insertCadastro = async (param) => {
  let results = await DB_EXEC(`insert into cadastro(nome, sobrenome, cpf, email)
  values(?,?,?,?)`, [param.nome, param.sobrenome, param.cpf, param.email]); 

  return results.rowsAffected;
}
