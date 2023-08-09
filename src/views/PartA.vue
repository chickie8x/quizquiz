<template>
  <div>
    <div>
        <PaginationComponent :itemPerPage="itemPerPage" :items="questionsA"/>
    </div>
  </div>
</template>

<script>
import { questionsA } from '../assets/dataA'
import PaginationComponent from '../components/kits/Pagination/index.vue'


export default {
  name: 'PartA',
  components: {
    PaginationComponent
  },
  setup() {
    const itemPerPage = 10

    return {
      itemPerPage,
      questionsA
    }
  }
}
</script>
