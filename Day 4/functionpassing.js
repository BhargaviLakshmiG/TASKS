function something(oper,arr) {
      var res;
	var param1 = 100 , param2 = 20;
    var ret = aa[oper](param1,param2);
     console.log(ret);
}

function add(a,b){
	return a+b;
}
function sub(a,b){
	return a-b;
}
function mul(a,b){
	return a*b;
}
function div(a,b){
	return a/b;
}

let aa = [add,sub,mul,div];

something(0,aa); // 120
something(1,aa); // 80
something(2,aa); //2000
something(3,aa); //5

