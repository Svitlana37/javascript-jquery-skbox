/* 
function printRandomNumbers(number1, number2)
{
	console.log(Math.random());
}
setInterval(printRandomNumbers, 1500)
*/

$(function(){

	function changeFontColor()
	{
		$('.container').toggleClass('newStyle');
	}

	/*
	$('textarea').on('keydown', function(event){
		if(event.which < 48 || event.which > 57)
		{
			return false;
		}
	});
*/
	$('textarea').on('focus', function () {
		$(this).css('background-color', 'pink');
	});

	$('textarea').on('blur', function () {
		$(this).css('background-color', 'white');
	});

	$('a').on('click', function(){
		changeFontColor();
		return false;
	});

});
