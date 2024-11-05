//import json-server package
const JSONserver=require('json-server')

//creating server using create() method from json-server
const Testserver=JSONserver.create()

//generating path/route to server resource
const router=JSONserver.router('db.json')

//initializing json server middlewares
const middleware=JSONserver.defaults()

//creating PORT number for server
const PORT=3000 | process.env.PORT

//impementing middleware to resource server
Testserver.use(middleware)
//impementing route to resource server
Testserver.use(router)


//run command for server
Testserver.listen(PORT,()=>{
    console.log(`Server is running at:${PORT}`);
})