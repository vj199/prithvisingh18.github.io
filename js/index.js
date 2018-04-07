var particles = Particles.init({
	selector: '.background',
  color: ['#DA0463', '#404B69', '#DBEDF3'],
  maxParticles : 100,
  connectParticles: true,

  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 50,
        color: '#48F2E3',
        connectParticles: false
      }
    }, {
      breakpoint: 425,
      options: {
        maxParticles: 25,
        connectParticles: true
      }
    }, {
      breakpoint: 320,
      options: {
        maxParticles: 0 // disables particles.js
      }
    }
  ],

});
