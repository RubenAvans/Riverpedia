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

//eliminar
async function deleteNoticiasById(id){
    var query = "delete from noticias where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows;
};

// editar
async function getNoticiaById(id){
    var query = 'select * from noticias where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
};

async function editarNoticiaById(obj, id){
    try{
        var query = 'update noticias set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } //cierro try
    catch (error){
        throw error;
    } // cierro catch
} //cierro editarNoticiaById

module.exports = { getNoticias, insertNoticia, deleteNoticiasById, getNoticiaById, editarNoticiaById};