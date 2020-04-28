class Member{
    constructor(id,name,position){
        this.id = id;
        this.name = name;
        this.position = position;
    }
    setMember(){
        console.log(`Name is : ${this.name} : Position: ${this.position}`)
    }
}

const member1 = new Member('01','Jhon','Teacher')
const member2 = new Member('0501','Doe','Student')
member1.setMember()