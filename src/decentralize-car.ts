
const carfactory = require("../decentralize-car-sharing/build/contracts/CarHelper.json");
const Web3 = require('web3');

const provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);
        

export class DecentralizeCar
{
    private static _instance: DecentralizeCar;

    public contract: any;

    public static carContractAddress = "0x992D0C653bF5D1a78cfC81B472CAFf1f3118862E";

    private constructor()
    {
        const abi = carfactory.abi;
        this.contract = new web3.eth.Contract(abi, DecentralizeCar.carContractAddress);  

    }

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }


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

}

const DecentralizeCarInstance = DecentralizeCar.Instance;