var objPeople=[
	{
		username:"17021119",
		password:"1"
	},
	{
		username:"17021118",
		password:"1"
	},
	{
		username:"17021117",
		password:"1"
	}
]
function getInfo(){
	var username=document.getElementById("username").value
	var password=document.getElementById("password").value

	for(var i=0; i<objPeople.length; i++){
		if(username=== objPeople[i].username && password===objPeople[i].password){
			console.log(username + " is logged in!")
			return 
		}
	}
	console.log("incorrect password or username")
}