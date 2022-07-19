<template>
  
    <h1>All the car owned</h1>

    <div>
        
    </div>

</template>

<script>

import { DecentralizeCar } from "@/api/decentralize-car.ts";

const decentralizeCar = DecentralizeCar.Instance;

export default {
    data () {
        return {
            address: "",
            connected: false,
        }
    },
    methods: {
        getCarFromAddress: function () {
            if (this.connected) {

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

<style>

</style>