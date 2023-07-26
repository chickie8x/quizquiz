<template>
  <div
    v-for="(item, idx) in questionsA"
    :key="idx"
    class="border border-indigo-500 border-opacity-40 my-6 bg-indigo-50 rounded-lg overflow-hidden"
  >
    <span class="bg-indigo-500 text-white block px-2 py-4 rounded-t-md"
      >Câu hỏi {{ idx + 1 }}: {{ item.question }}</span
    >
    <AnswerComponent :answer="item.ans" :index="idx + 1" />
  </div>
</template>

<script>
import { questionsA } from '../assets/data'
import AnswerComponent from '../components/kits/Answer/index.vue'

export default {
  name: 'PartA',
  components: {
    AnswerComponent
  },
  setup() {
    return {
      questionsA
    }
  }
}
</script>
