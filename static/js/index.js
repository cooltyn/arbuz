window.addEventListener('load', function() {
	var app = new Vue({
		el: '.app',
		data: {
			mass: null,
			length_e: null,
			length_m: null
		},
		computed: {
			result: function() {
				var mass = this.mass/1000;
				var length_e = this.length_e/100;
				var length_m = this.length_m/100;
				var r_e = length_e/(2*Math.PI);
				var r_m = Math.max(0, Math.sqrt(Math.pow(length_m,2)/(2*Math.pow(Math.PI,2))-Math.pow(r_e,2)));
				var v = Math.PI*Math.pow(r_e,2)*r_m*4/3;
				console.log(mass, length_e, length_m, r_e, r_m, v);
				return (mass/v).toFixed(3) || null;
			}
		}
	})
	var r_e = 7;
	var length_m = 65.6;
	var r_m = Math.sqrt(Math.pow(length_m,2)/(2*Math.pow(Math.PI,2))-Math.pow(r_e,2));
	console.log(r_m)
})