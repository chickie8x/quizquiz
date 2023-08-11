<template>
  <div>
    <div class="h-[510px] overflow-auto">
      <keep-alive>
        <QuestionList :items="currPage" :questsIndex="segmentIndex" :key="segmentIndex"></QuestionList>
      </keep-alive>
    </div>
    <div class="flex space-x-4 items-center justify-center h-[40px]">
      <div v-for="pageIndex, idx in pages.length" :value="pageIndex+1" :key="idx" @click="pageSelected(idx)">
        <span :class="[pageIndex===segmentIndex+1?'text-red-500':'']">{{ pageIndex }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { pagination } from '../../Helpers'
import  QuestionList  from '../ListQuests/index.vue'
import { ref } from 'vue'

export default {
  name: 'PaginationComponent',
  props:{
    itemPerPage: {
      type: Number,
      require: true,
      default: () => 1
    },
    items: {
      type: Array,
      require: true,
      default: () => []
    }
  },

  components:{
    QuestionList,
},

  setup(props){
    const pages = pagination(props.items, props.itemPerPage)
    const segmentIndex = ref(0)
    const currPage = ref(pages[segmentIndex.value])
    const pageSelected = (pageNum) => {
      currPage.value = pages[pageNum]
      segmentIndex.value = pageNum
    }
    return {
      pages,
      currPage,
      pageSelected,
      segmentIndex
      }
  }
}
</script>
