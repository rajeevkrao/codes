const esprima = require("esprima")
const fs = require("fs")

var code = fs.readFileSync("./express.js").toString();

var expressHandle = "app"
var methods = ['get','post']

esprima.parse(code).body.forEach((exp,index)=>{
    if(exp.type!="ExpressionStatement")
        return
    if(exp.expression.callee.object.name==expressHandle && methods.includes(exp.expression.callee.property.name))
        console.log(exp.expression.callee.property.name,exp.expression.arguments[0].value)
})
