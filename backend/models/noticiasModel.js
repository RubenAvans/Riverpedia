var pool = require('./bd');

// listar
async function getNoticias () {
        var query = 'select * from noticias order by id asc';
        var rows = await pool.query(query);
        return rows;
};

// insert
async function insertNoticia(obj){
    try{
        var query = "insert into noticias set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } // cierro try
    catch (error){
        console.error(error);
        throw error;
    }; // cierro catch
}; // cierro async function

module.exports = { getNoticias, insertNoticia};