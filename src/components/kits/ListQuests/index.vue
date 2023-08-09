<template>
  <div
    v-for="(item, idx) in items"
    :key="idx"
    class="border border-indigo-500 border-opacity-40 my-6 bg-indigo-50 rounded-lg overflow-hidden"
  >
    <QuestComponent :quest="item" :questNumber="questsIndex * 10 + idx" />
  </div>
</template>

<script>
import QuestComponent from './Quest/index.vue'

export default {
  name: 'QuestionList',
  components: {
    QuestComponent
  },
  props: {
    items: {
      type: Array,
      require: true,
      default: () => []
    },
    questsIndex: {
      type: Number,
      require: false
    }
  },
 
}
</script>
