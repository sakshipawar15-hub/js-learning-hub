class mobile{
    constructor(company,model,price){
        this.company=company;
        this.model=model;
        this.price=price;
    }

    calling(){
        console.log("used for calling");
    }

    gaming(){
        console.log("used for gaming");
    }

    camera(){
        console.log("used for camera");
    }

    display_info(){
        console.log(this.company,this.model,price);
    }   
}

let m1=new mobile("vivo","Y21",16000);
m1.display_info();
m1.calling();
m1.gaming();
m1.camera();
