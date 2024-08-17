const express = require("express")
const app = express()
const port = 8888

app.get("/",(req, res)=>{

    // Авторизация
//     const BASE_URL = "https://dlr.novaform.com.ua/api/api-token-auth/"
// const USER_NAME = "KV1e18081"
// const PASSWORD = "u4id9AB@"
// fetch(BASE_URL, {
//     method: "POST",
//     headers: {"Content-type": "application/x-www-form-urlencoded\r\n"},
//     body: new URLSearchParams({
//         username: USER_NAME,
//         password: PASSWORD
//     }).toString()

// }).then(res=>res.json()).then(data=>console.log(data))
    // Авторизация



    // ТОВАРИ
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IktWMWUxODA4MSIsInVzZXJfaWQiOjI1NjAsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NvZGUiOiIxMDAwMTgwODEiLCJqdGkiOiIxOWQwNDIyYy01YmQ4LTExZWYtODI2MS0wMDBjMjllNzQ4OTkiLCJleHAiOjE3MjM4MzEzMTcsImVtYWlsIjoicG9ncmVibnlha2FsZXhleUBnbWFpbC5jb20ifQ.Y8obLsHsmA2xCF5ivQBUoJ-NwS595OG-dJMRoeb0zkU'
 
    
    // const BASE_URL =`https://dlr.novaform.com.ua/api/pricelist/0305070019/json/?payment_type=1`
    // fetch(BASE_URL, {
        
    //     headers: {"Authorization": `JWT ${token}`},
       
    
    // }).then(res=>res.json()).then(data=>res.send(data))


    // ТОВАРИ


   // ПРАЙС
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IktWMWUxODA4MSIsInVzZXJfaWQiOjI1NjAsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NvZGUiOiIxMDAwMTgwODEiLCJqdGkiOiIxOWQwNDIyYy01YmQ4LTExZWYtODI2MS0wMDBjMjllNzQ4OTkiLCJleHAiOjE3MjM4MzEzMTcsImVtYWlsIjoicG9ncmVibnlha2FsZXhleUBnbWFpbC5jb20ifQ.Y8obLsHsmA2xCF5ivQBUoJ-NwS595OG-dJMRoeb0zkU'
    
    const BASE_URL =`https://dlr.novaform.com.ua/api/pricelist/json/?payment_type=1`
    fetch(BASE_URL, {
        
        headers: {"Authorization": `JWT ${token}`},
       
    
    }).then(res=>res.json()).then(data=>res.send(data))
    // ПРАЙС


    // ВАЛЮТА

    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IktWMWUxODA4MSIsInVzZXJfaWQiOjI1NjAsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NvZGUiOiIxMDAwMTgwODEiLCJqdGkiOiJhMmI5Yzk5Yy01OTdmLTExZWYtODI2MS0wMDBjMjllNzQ4OTkiLCJleHAiOjE3MjM1NzM0MTksImVtYWlsIjoicG9ncmVibnlha2FsZXhleUBnbWFpbC5jb20ifQ.UJxOoFFGrOne2nCmXfvQ2ozmX8dlG6oN8PqTM9DHdIc'
    


    // const BASE_URL =`https://dlr.novaform.com.ua/api/currency/`
    // fetch(BASE_URL, {
        
    //     headers: {"Authorization": `JWT ${token}`},
       
    
    // }).then(res=>res.json()).then(data=>res.send(data))
    // ВАЛЮТА

})

app.listen(port, (()=>{
    console.log(`listening ${port}`);
}))

// const BASE_URL = "https://dlr.novaform.com.ua/api/api-token-auth/"
// const USER_NAME = "KV1e18081"
// const PASSWORD = "u4id9AB@"
// fetch(BASE_URL, {
//     method: "POST",
//     headers: {"Content-type": "application/x-www-form-urlencoded\r\n"},
//     body: new URLSearchParams({
//         username: USER_NAME,
//         password: PASSWORD
//     }).toString()

// }).then(res=>res.json()).then(data=>console.log("get", data))

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IktWMWUxODA4MSIsInVzZXJfaWQiOjI1NjAsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NvZGUiOiIxMDAwMTgwODEiLCJqdGkiOiJhMmI5Yzk5Yy01OTdmLTExZWYtODI2MS0wMDBjMjllNzQ4OTkiLCJleHAiOjE3MjM1NzM0MTksImVtYWlsIjoicG9ncmVibnlha2FsZXhleUBnbWFpbC5jb20ifQ.UJxOoFFGrOne2nCmXfvQ2ozmX8dlG6oN8PqTM9DHdIc'
// const params = new URLSearchParams({
//     product_code: "100430969",
   
//         })

// const BASE_URL =`https://dlr.novaform.com.ua/api/pricelist/${params}/json/?payment_type=1`
// fetch(BASE_URL, {
    
//     headers: {"Authorization": `JWT ${token}`},
   

// }).then(res=>res.json()).then(data=>console.log(data))