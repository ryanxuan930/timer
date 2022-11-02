<template>
  <div :class="{'yellow': color == 'yellow', 'red': color == 'red'}" style="font-size:200pt;">
    <vue-countdown :time="70*60*1000" :interval="100" v-slot="{ hours, minutes, seconds, milliseconds }" @progress="timeData">
    {{ String(hours).padStart(2, '0') }}:{{ String(minutes).padStart(2, '0') }}:{{ String(seconds).padStart(2, '0') }}.{{ Math.floor(milliseconds / 100) }}
  </vue-countdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VueCountdown from '@chenfengyuan/vue-countdown';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const color = ref('black');
    return {
      color, 
      timeData: (data: any) => {
        if (data.totalMinutes <= 5) {
          color.value = 'red';
        } else if (data.totalMinutes <= 30) {
          color.value = 'yellow';
        }
      }
    }
  },
  components: {
    VueCountdown
  },
});
</script>

<style lang="css">
.yellow {
  color: yellow;
}
.red {
  color: red;
}
</style>
