<template>
  <v-container>
  <div> Comp2 </div>
  <div> {{ count }}</div>
  <div> {{ count2 }}</div>
  <div> {{ count }} asdadadad</div>
</v-cointainer>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    name: 'Comp2',
    computed: mapState([
          'count',
          'count2'
        ])
  }
</script>

<style>

</style>
