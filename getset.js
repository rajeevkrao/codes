let obj = {
    firstName:"Rajeev",
    /* middleName:"K", */
    lastName:"Rao",
    get name(){
        let name=[]
        name.push(this.firstName)
        if(this.middleName)
            name.push(this.middleName)
        name.push(this.lastName)
        return name.join(' ')
    },
    set age(value){
        this.years = value+" Years old"
    }
}

obj.age = 12
console.log(obj)
console.log(obj.name)

