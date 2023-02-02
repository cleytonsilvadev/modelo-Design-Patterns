import TypeVehicle from "./TypeVehicle";
import Car from "./vehicles/Car";
import Motorcycle from "./vehicles/Motorcycle";

const typeVehicle = TypeVehicle.CAR;
let vehicle;

if (typeVehicle === TypeVehicle.CAR) {
    vehicle = new Car("vermelho", 2023, 2.0, 4, 4);
} else if (typeVehicle === TypeVehicle.MOTORCYCLE) {
    vehicle = new Motorcycle("Preto", 2023, 250);
}
