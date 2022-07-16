<template>
  <main>
    <HeaderSearch></HeaderSearch>

    <!-- Explain in three axes the project innovation -->
    <section class="container">
        
        <div class="section-title d-flex justify-content-center">
          <h1>Be part of the future car rental innovation</h1>
        </div>
        
        <div class="row">

          <div class="col-md logo-functionality">
            <div class="round-logo center-logo">
              <!-- <font-awesome-icon icon="fa-solid fa-magnifying-glass" /> -->
              

              <font-awesome-icon icon="fa-solid fa-handshake" />

              
            </div>
            <h3 class="logo-title">Transparency</h3>

      By using blockchain technologies,
      the cost and the transaction are transparent. 

      We also removing additional intermediates and thus removing additional hidden fees.
      
      <br /><br />

            => Decentralization

            <p>No intermedirize involve. Be the master of all the process. To hidden fees, no comission</p>
          </div>

          <div class="col-md logo-functionality mt-5">
            <div class="round-logo center-logo">
              <font-awesome-icon icon="fa-solid fa-shield-halved" />
            </div>
            <h3 class="logo-title">Security</h3>
            <p>
              The security of the blockchain allow to secure all the transactions process.

              By using smart contract, we set a guaranty for the cost


              Protection of the data and verification of the user.


            </p>
          </div>


          <div class="col-md logo-functionality">
            <div class="round-logo center-logo">
              <font-awesome-icon icon="fa-solid fa-car" />
            </div>
            <h3 class="logo-title">Smart usage of car</h3>
            <p>
              <font-awesome-icon icon="fa-solid fa-hand-holding-dollar" />
              Have the freedom to decide when you need a car. And have the possibility to 
              rent your car when you do not need it.

            </p>
          </div>
        
        </div>
        
    </section>

    <!-- TODO :: Rapid shortcut of big cities -->

    <!-- TODO :: Interesting points : eventually to blog access on what car sharing improve

      TODO :: Presentation of the project (team + what for + how to contribute ?)
    -->

  </main>
</template>

<script>
import HeaderSearch from './HeaderSearch.vue'

export default {
  components: {
    HeaderSearch
  }
}
</script>

<style>

</style>