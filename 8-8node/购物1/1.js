var ul1 = document.getElementById('ul1');
var lis = ul1.getElementsByTagName('li');
Array.from(lis);
var ul2 = document.getElementById('ul2');

//渲染
var arr = [];
for(let i=0;i<lis.length;i++){
	lis[i].onclick = function(){
		if(!arr.includes(lis[i].innerHTML)){
			arr.push(lis[i].innerHTML);
			show(arr);
			localStorage.setItem('haha',JSON.stringify(arr));
		}	
	}
}
//当页面刷新时数据不会丢失
if(localStorage.getItem('haha')){
	arr = JSON.parse(localStorage.getItem('haha'));
	show(arr);
}
function show(arr){
	var html = '';
	arr.forEach(function(e){
		html += '<li>'+e+'</li>';
	})
	
	ul2.innerHTML = html;
}
//监听
window.addEventListener('storage',function(){
	if(localStorage.getItem('haha')){
		arr = JSON.parse(localStorage.getItem('haha'));
		show(arr);
	}
})