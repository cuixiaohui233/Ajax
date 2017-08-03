function ajax(json){
	return new Promise(function(resolve,reject){
		
		let setting = {
			url:'',
//			method:'get',
	//		data:{},
//			dataType:'string',
			success:function(){},
			error:function(){}
		}
		
		//有配置走配置，没配置走默认
		
		Object.assign(setting,json);
		
		const ajax = new XMLHttpRequest;
	//	console.log(setting.data);//{user:111}
		var arr = [];
		for(var attr in setting.data){
	//		console.log(setting.data[attr]);
			arr.push(attr + '=' + setting.data[attr]);
	//		console.log(setting.data);
		}
		
		setting.data = arr.join('&');
	//	console.log(setting.data);
		if(setting.method == 'get'){
			ajax.open('get',setting.url+'?'+setting.data);
			ajax.send();
		}else if(setting.method == 'post'){
			ajax.open('post',url);
			ajax.setRequestHeader();
			ajax.send(setting.data);
		}else{
			alert('别瞎搞');
		}
		
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4){
				if(ajax.status >= 200 && ajax.status <= 207 || ajax.status === 304){
					if(setting.dataType == 'string'){
						setting.success(ajax.responseText);
					}else if(setting.dataType == 'json'){
						setting.success(eval(JSON.parse(ajax.responseText)));
					}else{
						setting.success(ajax.responseXML);
					}
				}else{
					setting.error({state:ajax.readyState,status:ajax.status});
				}
			}
		}
	})
	
}
