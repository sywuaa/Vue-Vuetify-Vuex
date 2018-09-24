<template>
  <v-container>
    asd
  <v-btn @click='toogleComp'>switch</v-btn>
  <component :is='comp'></component>
  </v-container>

</template>

<script>
import Comp1 from './assets/components/comp1';
import Comp2 from './assets/components/comp2';

export default {
  name: 'App',
  data() {
    return {
      comp: 'comp1'
    }
  },
  components: {
    'comp1': Comp1,
    'comp2': Comp2,
  },
  methods: {
    toogleComp: function() {
      this.comp = this.comp == 'comp1' ? 'comp2' : 'comp1';
    }
  }
}

</script>

<style>

</style>
