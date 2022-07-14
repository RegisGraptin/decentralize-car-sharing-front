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
                <li class="nav-item">
                  <a class="nav-link" href="#">How it works</a>
                </li>
              </ul>
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
    
    <input v-model="city" placeholder="Where" />

    <input v-model="starting_date" placeholder="Departure" />
    <input v-model="ending_date" placeholder="Arrival" />

    <select v-model="typeOfVehicle">
      <option value="">Vehicle</option>
      <option>Doesn't matter</option>
      <option>Car</option>
      <option>Truck</option>
    </select>

    <button v-on:click="search_car">Search</button>

  </div>


</template>

<script>
export default {
  data ()  {
    return {
      city: "",
      starting_date: "",
      ending_date: "",
      typeOfVehicle: "",
    }
  },
  methods: {
    search_car: function () {
      console.log(this.city, this.starting_date, this.ending_date, this.typeOfVehicle);
    }
  }

}
</script>

<style>
</style>