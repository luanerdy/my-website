var btnLeft = document.querySelector('.directional-left');
var btnRight = document.querySelector('.directional-right');
var photo = document.querySelector('.photo img');
var photoDiv = document.querySelector('.photo');
var balls = document.querySelectorAll('.ball')
var number = 0;

btnRight.addEventListener('click', function(e) {
	number++;
	if(number == 9){
		number = 0;
	}
	trocaFoto();
});

btnLeft.addEventListener('click', function(e) {
	number--;
	if(number == -1){
		number = 8;
	}
	trocaFoto();
});

function trocaFoto(){
	photo.setAttribute('src', `../assets/projeto${number+1}.jpg`);
	photoDiv.appendChild(photo);

	for(var i = 0; i < balls.length; i++){
		ball = balls[i];

		if(ball.classList.contains('active-ball')){
			ball.classList.remove('active-ball');
		}
		if (i === number){
			ball.classList.add('active-ball');
		}
	}
}