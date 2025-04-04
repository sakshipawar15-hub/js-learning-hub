async function get() 
{
    return await fetch("https://jsonplaceholder.typicode.com/todos",{method:"GET"})
                        .then((response)=>{response.json()})
                          .then((response)=>{console.log(response)})
                        .catch((error)=>{console.log(error)});
}
get().then((response)=>{console.log(response)});


async function getOne(id) 
{
    return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{method:"GET"})
                        .then((response)=>{response.json()})
                         .then((response)=>{console.log(response)})
                        .catch((error)=>{console.log(error)});
}

getOne(2);



async function add(user) {
    return await fetch("https://jsonplaceholder.typicode.com/todos",method:{"POST"},
        Headers:{"content.type":"application/json"},
        body:JSON.stringify(user)})
}