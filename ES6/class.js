class student{
    constructor(rollno,name,sub,marks){
        this.rollno=rollno;
        this.name=name;
        this.sub=sub;
        this.marks=marks;
    }
    display_info(){
        console.log(this.rollno+"\n"+this.name+"\n"+this.sub+"\n"+this.marks)
    }
    setrollno(rollno){
        this.rollno=rollno;
    }
    setname(name){
        this.name=name;
    }
    setsub(sub){
        this.sub=sub;
    }
    setmarks(marks){
        this.marks=marks;
    }


    getrollno(rollno){
        return this.rollno;
    }

    getname(name){
        this.name=name;
    }
    getsub(sub){
        this.sub=sub;
    }
    getmarks(marks){
        this.marks=marks;
    }
}


let stu=new student(1,"sakshi","maths",20);
let stu1=new student(2,"ankita","maths",20);
let stu2=new student(3,"raj","maths",20);

student.display_student();
student.setrollno(2);
student.display_student();
console.log(student.getrollno());