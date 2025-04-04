class mobile{
    constructor(name,ram,price){
        this.name=name;
        this.ram=ram;
        this.price=price;
    }

    calling(){
        console.log("used for calling");
    }

    gaming(){
        console.log("used for gaming");
    }

    keypad(){
        console.log("used for keypad");
    }
}

class vivo extends mobile{
    constructor(model,name,ram,price){
        super(name,ram,price)
    }

    flash(){
        console.log("have a flash");
    }

    camera(){
        console.log("16mg camera")
    }

    display_info(){
        console.log(this.name,this.model,this.ram,this.price);
    }
}

let v=new vivo("vivo","Y21",64,16000)
v.display_info();
v.calling();
v.gaming();
v.keypad();
v.camera();
v.flash();
