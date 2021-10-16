class StaffList {
    constructor() {
        this.members = [];
    }
    add(name, age) {
        if (age > 20) {
            this.members.push(name)                 
        } else {
            throw new Error("Staff member age must be greater than 20")
        }
    }
    remove(name){
	   const matchIdx = this.members.indexOf(name)
	   if(matchIdx === -1){
		 return false
	   } else {
		 this.members.splice(matchIdx, 1)
		 return true
	   }
	}
    getSize() {
        return this.members.length;
    }
}


let i = new StaffList;
i.add('michelle', 25)
i.add('john', 30);
i.add('michael', 30);
i.add('jane', 26);
i.remove('john');
console.log(i);