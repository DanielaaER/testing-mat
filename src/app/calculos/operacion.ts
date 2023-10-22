export class Calculate {
  sumX(lista: number[]): number {
    var sum = 0;
    console.log(lista);
    for (let i = 0; i < lista.length; i++) {
      sum += lista[i];
    }

    return sum;
  }

  sumXX(lista: number[]): number {
    var sum = 0;

    for (let i = 0; i < lista.length; i++) {
      sum += lista[i] * lista[i];
    }

    return sum;
  }

  sumXY(listaX: number[], listaY: number[]): number {
    var sum = 0;

    for (let i = 0; i < listaX.length; i++) {
      sum += listaX[i] * listaY[i];
    }

    return sum;
  }

  calculateB1(
    sumXY: number,
    sumX: number,
    sumY: number,
    sumXX: number,
    n: number
  ): number {
    var b1 = 0;

    b1 = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);

    return b1;
  }

  calculateB0(sumX: number, sumY: number, b1: number, n: number): number {
    var b0 = 0;

    b0 = (sumY - b1 * sumX) / n;

    return b0;
  }

  calculateY(b0: number, b1: number, x: number): number {
    var y = 0;

    y = b0 + b1 * x;

    return y;
  }

  calculateMedia(lista: number[]): number {
    var media = 0;
    var sum = this.sumX(lista);

    media = sum / lista.length;

    return media;
  }
}
