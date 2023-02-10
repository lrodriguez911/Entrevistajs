class Rectangulo {
    constructor (alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
    // Getter
    get area() {
       return this.calcArea();
     }
    // Método
    calcArea () {
      let area = this.alto * this.ancho;
      return this
    }
    multBytwo () {
      return (this.alto + this.ancho) * 2;
    }
  }
/*  Rectangulo.prototype.multBytwo = function() {
    return this * 2
 } */
  const cuadrado = new Rectangulo(10, 10);

  console.log(cuadrado.calcArea().multBytwo());