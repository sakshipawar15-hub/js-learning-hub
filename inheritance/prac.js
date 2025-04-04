class animal{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }

    speaking(){
        console.log("animal speaking");
    }

    display_Info(){
        console.log(this.name,this.type);
    }
}
let dog=new animal("omi","voda")
dog.display_Info();
dog.speaking();
