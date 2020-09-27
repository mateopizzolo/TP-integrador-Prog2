var mysql = require("mysql");

connectToDb = () => {
    var dbConfig = {
        host: "localhost",
        user: "root",
        password: "mateo",
        database: "fakebook",
    }

    var connection = mysql.createConnection(dbConfig);

    connection.connect(function(error) {
        if (error) {
            console.log("Connection Failed: " + error.message);
        } else {
            console.log("Connection Successful: MySQL DB")
        }
    });

    createUsersTable(connection);
    createPostsTable(connection);
    createCommentsTable(connection);
}


function createUsersTable(connection) {
    var sql = `
        CREATE TABLE IF NOT EXISTS usuarios (
            id INT PRIMARY KEY AUTO_INCREMENT,
            fecha DATETIME DEFAULT NOW(),
            nombre_de_usuario VARCHAR(200) UNIQUE
        );`;

        connection.query(sql, function(error) {
            if (error) {
                console.log("Query Failed: " + error.message);
            }
        })
}

function createPostsTable(connection) {
    var sql = `
        CREATE TABLE IF NOT EXISTS posts (
            id INT PRIMARY KEY AUTO_INCREMENT,
            usuario_id INT,
            nombre_de_usuario VARCHAR(200),
            url_de_la_imagen VARCHAR(200),
            titulo VARCHAR(300),    
            fecha DATETIME DEFAULT NOW(),
            CONSTRAINT posts_usuario_id FOREIGN KEY(usuario_id) REFERENCES usuarios(id)
        );`;

        connection.query(sql, function(error) {
            if (error) {
                console.log("Query Failed: " + error.message);
            }
        })
    }

    function createCommentsTable(connection) {
        var sql = `
            CREATE TABLE IF NOT EXISTS comentarios (
                id INT PRIMARY KEY AUTO_INCREMENT,
                post_id INT,
                usuario_id INT,
                texto VARCHAR(300),    
                fecha DATETIME DEFAULT NOW(),
                CONSTRAINT post_id FOREIGN KEY(post_id) REFERENCES posts(id),
                CONSTRAINT comentarios_usuario_id FOREIGN KEY(usuario_id) REFERENCES usuarios(id)
            );`
    
            connection.query(sql, function(error) {
                if (error) {
                    console.log("Query Failed: " + error.message);
                }
            })
    }

module.exports = { connectToDb };