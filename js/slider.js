			var slideAtual = 0;
			var timeToChangeInMilis = 5000;
			var mockup = document.getElementById('mockup');
			
			var slides = ['images/mockup.png', 'images/mockup1.png', 'images/mockup2.png', 'images/mockup3.png', 'images/mockup4.png'];
			
			trocaSlides();
			
			setInterval(trocaSlides, timeToChangeInMilis);
			

			
			
			function trocaSlides() {
				
				if (slideAtual < slides.length) {
					mockup.src = slides[slideAtual];
					slideAtual++;
				} else {
					
					slideAtual = 0;
					
				}
				
				
			}
