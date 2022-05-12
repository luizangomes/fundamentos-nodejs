const express = require('express');

const app = express();

app.use(express.json());

/**
 * Tipos de parâmetros
 * 
 * Route Params => Identificar um recurso, e editar, deletar ou buscar
 * Query Params => Pagination / Filtro
 * Body Params => Inserção e Alteração de objetos
 */

app.get("/courses", (request, response) => {
    //{{ _.baseURL }}/courses?page=1&order=asc >>>>>> pra pegar a página especifica ?, page = smth e & pra fechar
    const query = request.query;
    console.log(query);
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

//criar
app.post("/courses", (request, response) =>{
    const body = request.body;
    console.log(body);
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

//alterar
app.put("/courses/:id", (request, response) =>{
    const {id} = request.params;
    console.log(id);
    return response.json("Curso 6", "Curso 2", "Curso 3", "Curso 4");
});

app.patch("/courses/:id", (request, response) =>{
    return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
    return response.json("Curso 6", "Curso 2", "Curso 4");
});

//localhost:3333
app.listen(3333);