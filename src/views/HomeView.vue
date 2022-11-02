<template>
  <div class="home" style="font-size:200pt;">
    <vue-countdown :time="60*60*1000" :interval="100" v-slot="{ hours, minutes, seconds, milliseconds }">
    {{ hours }}:{{ minutes }}:{{ seconds }}.{{ Math.floor(milliseconds / 100) }}
  </vue-countdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueCountdown from '@chenfengyuan/vue-countdown';

export default defineComponent({
  name: 'HomeView',
  setup() {
    return {
    }
  },
  components: {
    VueCountdown
  },
});
</script>
