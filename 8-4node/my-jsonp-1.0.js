function jsonp(obj){
	let setting = {
		dataType:'',
		url:'',
		data:{},
		cb:'cb',
		success:function(){}
	}
	
	Object.assign(setting,obj);
	
	
	
	let fnName = 'jQuery' + Math.random() + (+new Date); 
	fnName = fnName.replace('0.','1_');
	
	window[fnName] = function(data){
		setting.success(data);
	}
	if(setting.cb){
		setting.data[setting.cb] = fnName;
	}
	
//	console.log(setting.data)
	let arr = [];
	
	for(var attr in setting.data){
		arr.push(attr+'='+setting.data[attr]);
	}
//	console.log(arr);
	var str = arr.join('&');
//	console.log(str);
	
	let script = document.createElement('script');
	
	script.src = setting.url+ '?' + str;
	console.log(script.src);
	document.getElementsByTagName('head')[0].appendChild(script);
	script.remove();
}
