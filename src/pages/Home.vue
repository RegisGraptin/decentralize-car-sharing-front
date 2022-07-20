<template>
  <main>
    <HeaderSearch></HeaderSearch>

    <KeyPoints></KeyPoints>

    <CityShortcut></CityShortcut>

    <!-- TODO :: Rapid shortcut of big cities -->

    <!-- TODO :: Interesting points : eventually to blog access on what car sharing improve

      TODO :: Presentation of the project (team + what for + how to contribute ?)
    -->

  </main>
</template>

<script>
import HeaderSearch from '@/components/HeaderSearch.vue'
import KeyPoints from '@/components/home/KeyPoints.vue'
import CityShortcut from '@/components/home/CityShortcut.vue'

export default {
  components: {
    HeaderSearch,
    KeyPoints,
    CityShortcut
}
}
</script>

<style>

</style>