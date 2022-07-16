<template>

  <div class="large-container">
    <div id="header-search-image">
      <div id="header-search-container">
        <div class="container">

          <!-- Navigation -->
          <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#">Car Rental</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
              aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarToggler">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Find your car</a>
                </li>
                <li class="nav-item active">
                  <router-link :to="'/car/'">
                    <a :href="href" class="nav-link">Add your car</a>
                  </router-link>
                </li>
                <li class="nav-item active">
                  <router-link :to="'/account/car'">
                    <a :href="href" class="nav-link">My car</a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">How it works</a>
                </li>
              </ul>
            </div>


            <!-- Need to be shift right -->
            <div>
              <button v-if="!connected" @click="connect" class="wallet">Connect wallet</button>

              <!-- "callContract" event handler is added -->
              <!-- <button v-if="connected" @click="callContract">Call contract</button> -->
              <button v-if="connected" class="wallet">{{ show_address }}</button>

            </div>

          </nav>


          <h1>Rent you car for your next vacation</h1>
          <p>Rent a car has not be so easely</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Search component -->
  <div id="search-form" class="container">

    <div id="search-form-component">

      <input v-model="city" placeholder="Where" />

      <Datepicker class="datepicker" v-model="date" range></Datepicker>

      <select v-model="typeOfVehicle">
        <option value="">Vehicle</option>
        <option>Doesn't matter</option>
        <option>Car</option>
        <option>Truck</option>
      </select>

      <button v-on:click="search_car">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      Search</button>

<!-- https://fontawesome.com/icons

See the search bar

-->

    </div>

  </div>




</template>

<script>

import Web3 from 'web3'

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: { Datepicker },
  data() {
    return {
      city: "",
      typeOfVehicle: "",
      date: null,
      connected: false,
      contractResult: '',
      current_address: '',
      show_address: '',
    }
  },
  methods: {
    search_car: function () {
      console.log(this.city, this.starting_date, this.ending_date, this.typeOfVehicle);
    },
    connect: function () {
      let ethereum = window.ethereum;
      if (ethereum) {
        ethereum.request({ method: 'eth_requestAccounts' })
          .then(() => {
            this.connected = true;
            this.current_address = ethereum.selectedAddress;
            this.show_address = this.current_address.substring(0, 5) + "..." + this.current_address.slice(this.current_address.length - 3);
          });
      }
    },
    callContract: function () {
      // method for calling the contract method
      let web3 = new Web3(window.ethereum);

      let contractAddress = '';
      let abi = JSON.parse('');

      let contract = new web3.eth.Contract(abi, contractAddress);

      contract.methods.greet().call()
        .then(result => this.contractResult = result);
    }
  }

}
</script>

<style>
</style>