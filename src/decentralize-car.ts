
const carfactory = require("../decentralize-car-sharing/build/contracts/CarHelper.json");
const Web3 = require('web3');

const provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);


export class DecentralizeCar {
    private static _instance: DecentralizeCar;

    public contract: any;

    public static carContractAddress = "0x992D0C653bF5D1a78cfC81B472CAFf1f3118862E";

    private constructor() {
        const abi = carfactory.abi;
        this.contract = new web3.eth.Contract(abi, DecentralizeCar.carContractAddress);

    }

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }


    /**
     * Get the list of car given the address.
     * 
     * @param address string address of the car owner.
     */
    public getCarFromAddress(address: string) {
        
        this.contract.methods
            .getCarByOwner(address)
            .call()
            .then((carList: Array<any>) => {
                console.log(carList);

                for (let i = 0; i < carList.length; i++) {
                    this.contract.methods.cars(i).call().then(function (car: any) {
                        console.log(car);
                    });

                }
            });
    }


    /**
     * Create a new car for the current client 
     * 
     * @param name 
     * @param category 
     * @param typeVehicle 
     * @param energy 
     * @param transmission 
     * @param mileage 
     * @param year 
     * @param nb_door 
     * @param nb_seat 
     * @param address 
     */
    public createCar(
        name: string,
        category: string,
        typeVehicle: string,
        energy: string,
        transmission: string,
        mileage: Number,
        year: Number,
        nb_door: Number,
        nb_seat: Number,
        address: string
    ) {
        console.log(address);
        // TODO :: Create a new car and return it the id ? 
        this.contract.methods
            .createCar(
                name, 
                category, 
                typeVehicle, 
                energy, 
                transmission, 
                Number(mileage), // uint
                Number(year),    // int16
                Number(nb_door), // uint8
                Number(nb_seat)  // uint8
            ).send({from: address, gas: 3000000})
            .on('receipt', function() {
                console.log("on receipt")
            })
    }

}