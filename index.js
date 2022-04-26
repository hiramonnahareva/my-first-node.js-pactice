const express = require ('express') ;
const app = express();
const cors = require ('cors') ;
const port = process.env.PORT || 5000;
app.use (cors())
app.use (express.json());
app.get('/', (req, res) =>{
    res.send ('Look my My code node change num!!!')
});
const users = [
    {id: 0, name: 'karina', email: 'karina@gmail.com', phone: '017229988'},
    {id: 1, name: 'karim', email: 'karim@gmail.com', phone: '017229988'},
    {id: 2, name: 'monika', email: 'monika@gmail.com', phone: '017229988'},
    {id: 3, name: 'kona', email: 'kona@gmail.com', phone: '017229988'},
    {id: 4, name: 'karan', email: 'karan@gmail.com', phone: '017229988'},
    {id: 5, name: 'malona', email: 'malona@gmail.com', phone: '017229988'},
    {id: 6, name: 'salma', email: 'salma@gmail.com', phone: '017229988'}
]
app.get('/users', (req, res)=> {
    res.send(users);
})
app.get('/user/:id', (req, res)=> {
    console.log (res.params)
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    res.send(user);
});
app.post('/user', (req, res) => {
    console.log ('request', req)
    res.send ('post method success')
})
app.listen(port , ()=> {
    console.log ('Lisening, my port' , port);
})