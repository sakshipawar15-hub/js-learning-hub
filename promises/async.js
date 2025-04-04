
async function friend1(){
    console.log("hello");
    await console.log("How are you?");
    console.log("I'm also good");
}

async function friend2(){
    console.log("hello");
    console.log("How are you?");
    await console.log("I'm also good");
}

friend1();
friend2();