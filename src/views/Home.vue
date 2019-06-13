<template>
  <div class="home">
    <TopBox/>
    <TabBar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopBox from '@/components/TopBox.vue'; // @ is an alias to /src
import TabBar from '@/components/TabBars.vue';
@Component({
  components: {
    TopBox,
    TabBar,
  },
})
export default class Home extends Vue {}
</script>
