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

// https://www.ludu.co/course/ethereum/running-dapps-locally


import { DecentralizeCar } from "@/api/decentralize-car.ts";

const decentralizeCar = DecentralizeCar.Instance;

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
                decentralizeCar.createCar(
                        this.name, 
                        this.category, 
                        this.typeVehicle, 
                        this.energy, 
                        this.transmission, 
                        Number(this.mileage), // uint
                        Number(this.year),    // int16
                        Number(this.nb_door), // uint8
                        Number(this.nb_seat),  // uint8
                        this.address
                    )

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
                decentralizeCar.getCarFromAddress(this.address);
            }
        }
    }
}
</script>
