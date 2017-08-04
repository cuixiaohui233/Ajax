function jsonp(obj){
	let setting = {
		dataType:'',
		url:'',
		data:{},
		success:function(){}
	}
	
	Object.assign(setting,obj);
	
	let arr = [];
	
	for(var attr in setting.data){
		arr.push(attr+'='+setting.data[attr]);
	}
	console.log(arr);
	var str = arr.join('&');
//	console.log(str);
}
