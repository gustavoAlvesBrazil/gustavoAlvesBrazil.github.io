			var slideAtual = 0;
			var timeToChangeInMilis = 3000;
			var mockup = document.getElementById('mockup');
			
			var slides = ['images/mockup.png', 'images/mockup1.png', 'images/mockup2.png', 'images/mockup3.png', 'images/mockup4.png'];
			
			//console.log('trocando para: ' + slides[slideAtual]);
			//mockup.src = slides[slideAtual];
			
			//slideAtual = 1;
			
			trocaSlides();
			
			setInterval(trocaSlides, timeToChangeInMilis);
			

			
			
			function trocaSlides() {
				
				if (slideAtual < slides.length) {
					console.log('trocando para: ' + slides[slideAtual]);
					mockup.src = slides[slideAtual];
					slideAtual++;
				} else {
					
					slideAtual = 0;
					
				}
				
				
			}