//importar a dependencia do sqlite3 

const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer as operaçoes no banco
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db

//utilizar o objeto de banco de dados, para nossa operação
db.serialize(() =>{
    //criar uma tabela com comandos sql
// db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//         name TEXT,
//         address TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//     );
// `)


//     //inserir dados na tabela
// const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);
//     `

// const values = [
//     "https://images.unsplash.com/phothttps://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80o-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
//     "Papersider",
//     "Guilherme Gamballa, Jardmin América",
//     "Número 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas"

// ] 

// function afterInsertData(err){
//     if(err){
//         return console.log(err)
//     }

//     console.log("cadastrado com sucesso") 
//     console.log(this)
// }

//  db.run(query, values, afterInsertData)  

    //consultar os dados da tabela
    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("aqui estão seus registros: ")
    //     console.log(rows)
    // })


    // deletar dado da tabela

    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    //     if (err) {  
    //         return console.log(err)
    //     }
    //     console.log("registros deletados com sucesso!")
    // })


})






