class Pen{
    constructor(){
        console.log("chair object");
    }

        rotate(){
            console.log("360 degree rotate");
        }
        writting(){
            console.log("used for writting")
        }
        display_info(){
            console.log(this.name,this.type,this.color);
        }
}
let pen=new pen();
pen.name="pen";
pen.type="black"
pen.display_info();
pen.rotate();
pen.writting();