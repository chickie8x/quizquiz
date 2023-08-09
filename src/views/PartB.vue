<template>
  <div>
    <QuestionList :items="segment" :questsIndex="currPage" />
  </div>
</template>

<script>
import { computed, provide, ref } from 'vue'
import { pagination } from '../components/Helpers/index'
import { questionsB } from '../assets/dataB'
import QuestionList from '../components/kits/ListQuests/index.vue'
import { questionStateB } from '../stores/'

export default {
  name: 'PartA',
  components: {
    QuestionList
  },
  setup() {
    const currPage = ref(0)
    const pages = pagination(questionsB, 10)
    const segment = computed(() => {
      return pages[currPage.value]
    })

    const store = questionStateB()

    provide('type', 'B')

    return {
      questionsB,
      pages,
      currPage,
      segment,
      store
    }
  }
}
</script>
