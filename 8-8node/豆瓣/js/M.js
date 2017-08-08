/*
	https://api.douban.com/v2/movie/search?q=战狼2&start=0&callback=fn
*/
function addshuju(val,num){
	$.ajax({
		url:'https://api.douban.com/v2/movie/search?callback=?',
		dataType:'jsonp',
		data:{
			q:val,
			start:num,
			count:8
		},
		success:function(data){
//			console.log(data);
			let v = template('temp',data);
			$('#app').html(v);
			var spans = document.getElementsByTagName('span');
			var arr = [];
			for(let i=0;i<spans.length;i++){
				spans[i].onclick = function(){
					history.pushState('page','','#page='+i);
					let con =  i*data.count;
					localStorage.setItem(val+con,JSON.stringify(data));
					arr = JSON.parse(localStorage.getItem(val+con));
					console.log(arr);
					
					addshuju(val,con);
//					console.log(data.subjects);
				}
			}
		}
	})
}
