<template>
    <section>
        <h1>Add your car</h1>

        <button v-if="!connected" @click="connect" class="wallet">Connect wallet</button>

        <form v-on:submit.prevent="onSubmit">

            <input v-model="name" placeholder="Name" />
            <br />
            <input v-model="category" placeholder="category" />
            <br />
            <input v-model="typeVehicle" placeholder="typeVehicle" />
            <br />
            <input v-model="energy" placeholder="energy" />
            <br />
            <input v-model="transmission" placeholder="transmission" />
            <br />
            <input v-model="mileage" placeholder="mileage" />
            <br />
            <input v-model="year" placeholder="year" />
            <br />
            <input v-model="nb_door" placeholder="nb_door" />
            <br />
            <input v-model="nb_seat" placeholder="nb_seat" />
            <br />


      <button @click="add_car" >
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      New car</button>
            
        </form>

        <button @click="getCarFromAddress" >
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      Get list car </button>
            

    </section>
</template>

<script>

// https://medium.com/web3labs/web3j-openapi-openapi-generation-straight-from-solidity-smart-contracts-b004ca1fe120
// https://docs.web3j.io/4.8.7/web3j_openapi/

// https://www.ludu.co/course/ethereum/running-dapps-locally




const Web3 = require('web3');


const provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);

// const { HelloWorld } = output.contracts["HelloWorld.sol"];
// const { abi } = HelloWorld;
 


import carfactory from "../../../decentralize-car-sharing-front/decentralize-car-sharing/build/contracts/CarHelper.json"
var abi = carfactory.abi;

let carFactoryContract = "0x992D0C653bF5D1a78cfC81B472CAFf1f3118862E";
console.log(carFactoryContract);


var contract = new web3.eth.Contract(abi, carFactoryContract) //, 0x12345678912345678912345678912345678912);

console.log("Methods")
console.log(contract.methods);



// const contract = new web3.eth.Contract(json_path, carFactoryContract);
// const contract = new web3.eth.Contract(abi);

// console.log("abi")
// console.log(abi)
// console.log(contract);
// const DecentralizeCar = require("../decentralize-car.ts");

import { DecentralizeCar } from "../decentralize-car.ts";

export default {
    data() {
        return {
            name: "",
            category: "",
            typeVehicle: "",
            energy: "",
            transmission: "",
            mileage: "",
            year: "",
            nb_door: "",
            nb_seat: "",
            connected: false,
            address: '',
        }
    },
    methods: {
        add_car: function() {
            if (this.connected) {

                console.log("address user");
                console.log(this.address);
                contract.methods
                    .createCar(
                        this.name, 
                        this.category, 
                        this.typeVehicle, 
                        this.energy, 
                        this.transmission, 
                        Number(this.mileage), // uint
                        Number(this.year),    // int16
                        Number(this.nb_door), // uint8
                        Number(this.nb_seat)  // uint8
                    ).send({from: this.address, gas: 3000000})
                    .on('receipt', function() {
                        console.log("on receipt")
                    })

                    // TODO :: Get the emit event : Check if it is possible
            }
        }, 
        connect: function () {
            let ethereum = window.ethereum;
            if (ethereum) {
                ethereum.request({ method: 'eth_requestAccounts' })
                .then(() => {
                    this.connected = true;
                    this.address = ethereum.selectedAddress;
                });
            }
        },
        getCarFromAddress: function () {
            if (this.connected) {

                console.log(DecentralizeCar);



                const decentralizeCar = DecentralizeCar.Instance;

                decentralizeCar.getCarFromAddress(this.address);

                // contract.methods
                //     .getCarByOwner(this.address)
                //     .call()
                //     .then(function (carList) {
                //         console.log(carList);

                //         for (let i = 0; i < carList.length; i++) {
                //             contract.methods.cars(i).call().then(function (car) {
                //                 console.log(car);
                //             });
                            
                //         }
                //     });
            }
        }
    }
}
</script>
