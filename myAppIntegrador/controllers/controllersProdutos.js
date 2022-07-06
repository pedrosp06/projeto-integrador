let produtos = [{nome: 'Camiseta Branca', preco: 29.99} ,
    {nome: 'Camiseta Azul', preco: 29.99} , 
    {nome:'Camiseta Cinza', preco: 29.99}]


const controllersProduto = {
    produtoHome: (req, res) => {
        res.render('homePage', {produto: produtos})
    }

}