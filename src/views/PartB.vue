<template>
  <div>
    <div>
      <PaginationComponent :itemPerPage="itemPerPage" :items="questionsB" />
    </div>
  </div>
</template>

<script>
import { questionsB } from '../assets/dataB'
import PaginationComponent from '../components/kits/Pagination/index.vue'

export default {
  name: 'PartB',
  components: {
    PaginationComponent
  },
  setup() {
    const itemPerPage = 10

    return {
      itemPerPage,
      questionsB
    }
  }
}
</script>
