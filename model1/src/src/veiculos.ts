export default class vehicle {
  constructor(
    private color: string,
    private year: number,
    private engine: number,
    private seats: number,
    private doors: number
  ) {}
  car(): void {
    console.log(
      `criando um carro ${this.color},${this.year},${this.engine} potencia,${this.doors} portas com ${this.seats} assentos`
    );

    this.startvehicle();
  }

  motorcycle(): void {
    console.log(
      `criando uma moto ${this.color},${this.year},${this.engine} cilindrada`
    );
    this.startvehicle();
  }

  startvehicle(): void {
    console.log("ligando motor");
  }
}
