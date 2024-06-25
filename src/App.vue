<template>
  <div class="container-fluid mt-4">
  <div class="p-main">
      <Leaderboard/>
    <Results/>
  </div>
  </div>
</template>

<script>
import Leaderboard from './components/Pto-Leaderboard/Pto-Leaderboard.vue'
import Results from './components/Pto-Results/Pto-Results.vue'

export default {
  name: 'App',
  components: {
    Leaderboard,
    Results
  }
}
</script>