const express = require ('express') ;
const app = express();
const cors = require ('cors') ;
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json());
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
/* app.get ('/users', (req, res)=> {
    res.send (users);
}) */


// filter by search query parameter
app.get('/users', (req, res)=> {
    if (req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter (user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    res.send(users);
})
// filter by search id parameter
app.get('/user/:id', (req, res)=> {
    console.log (res.params)
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});
// app.post('/user', (req, res) => {
//     console.log ('request', req.body);
//     res.send ('post method success')
// })
app.post('/user', (req, res) => {
    console.log ('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send (user);
})

app.listen(port , ()=> {
    console.log ('Lisening, my port' , port);
})