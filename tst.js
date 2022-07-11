const a = {
    a:123,
    fun:function(){
        console.log(this.a)
    }
}

this.b =1 

a.fun(this)