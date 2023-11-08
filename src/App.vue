<script>
import PageHeader from './components/PageHeader.vue';
import MainContent from './components/MainContent.vue';
import PageFooter from './components/PageFooter.vue';

import axios from 'axios';

import { store } from './store';

export default {
  components: {
    PageHeader,
    MainContent,
    PageFooter
  },
  data() {
    return {
      productsUrl: 'http://localhost:3000/products',
      store
    }
  }, mounted() {
    axios.get(this.productsUrl)
      .then(res => {
        console.log(res.data);

        this.store.products = res.data;
      })
  }
}
</script>

<template>
  <PageHeader />
  <MainContent />
  <PageFooter />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
