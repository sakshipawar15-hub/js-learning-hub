let name="sakshi";
console.log("welcome");
try{
    console.log(name,length());
}catch(e){
    console.log(e.message);
    console.log(e.error);
    console.log(e.stack);
    console.log("lenght is not a function");
}finally{
    console.log("connection is close");
}
console.log("end");
