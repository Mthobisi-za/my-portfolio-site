var myobj = {
    name: "mthobisi"
}
var fjj = []
function storedata(){
    var name = localStorage.getItem("name")
    var task = localStorage.getItem("task")
   
  fjj.push(myobj.Name = name);
  fjj.push(myobj.Task = task);

    console.log(myobj)
    console.log(fjj)
}
storedata()