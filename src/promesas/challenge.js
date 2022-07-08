import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function peti(url) {
    const respones= await fetch(`${url}/products`)
    const data= await respones.json()
    const products=await data[0].id
    const product=await fetch(`${url}/products/${products}`)
    const ss=await product.json()
    const f= await ss.category.name
    console.log("data",data)
    console.log("products",products)
    console.log("f",f)
}
  
peti(API)
const data={
  "title": "New Productsssssssssssssssssssssssssssss",
  "price": 100000000000000000000000000000000,
  "description": "A descriptionsssssssssssssssssssssssssssssssssss",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

async function post(url,data){
const response=await fetch(`${url}/products`,{
  method:'POST',
  mode:'cors',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(data)
})
}

post(API,data).then(response=>(console.log("OK"))).catch(error=>(console.log("no error")))


const data1={
  "title": "olddddddddddddd Productsssssssssssssssssssssssssssss",
  "price": 10000000000,
  "description": "A descriptionsssssssssssssssssssssssssssssssssss",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

async function put(url,data){
const response=await fetch(`${url}/products/1314`,{
  method:'PUT',
  mode:'cors',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(data)
})
}

put(API,data1).then(response=>(console.log("OK"))).catch(error=>(console.log("no error")))