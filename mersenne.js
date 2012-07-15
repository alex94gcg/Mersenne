function smersenne(n) {
	var z = 0; 
	for (var z = 0; z <= n; z++) {
	if (n % z === 0) {
	z++;
		}
	}
	if (z === 2) {
	var a = (Math.pow(2, n) - 1);
	var e = 0;
	for (var y = 0; y <= a; y++) {
		if (a % y === 0) {
			e++;
			}
		}
	if (e === 2) {
		console.log("El numero que has introducido "+n+" es un numero primo de Mersenne");
		}
	} else if (z != 2) {
	var f = 1;
	function f1mersenne() {
			var b = (n + f);
			var c = (n - f);
			var g = 0;
			var h = 0;
			for (var u = 0; u <= c; u++) {
				if (c % u === 0) {
					h++;
					}
				}
			for (var v = 0; v <= b; v++) {
				if (b % v === 0) {
					g++;
					}
				}
				if (g === 2 || h === 2) {
				var j = (Math.pow(2, c) - 1);
				var k = (Math.pow(2, b) - 1);
				var r = 0; 
				var s = 0;
				for (t = 0; t <= j; t++) {
					if (j % t === 0) {
						r++;
						}
					}
				for (var t1 = 0; t1 <= k; t1++;) {
					if (k % t1 === 0) {
						s++;
						}
					}
				if (r === 2 || s === 2) {
					console.log("El numero primo de Mersenne mas cercano a "+n+" es "+c);
					console.log("El numero primo de Mersenne mas cercano a "+n+" es "+b);
					} else if (r != 2 && s != 2) {
					f++;
					return f1mersenne()	
					}
				} else if (g != 2 && h != 2) {
					f++;
					return f1mersenne()
				}
			}
		}
	}