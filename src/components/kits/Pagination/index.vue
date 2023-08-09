<template>
  <div>
    <div class="h-[510px] overflow-auto">
        <component :is="currPage.components" v-bind="currPage.propsdata" :key="keyX"></component>
    </div>
    <div class="flex space-x-4 items-center justify-center h-[40px]">
      <div v-for="pageIndex, idx in pages.length" :value="pageIndex+1" :key="idx" @click="pageSelected(idx)">
        <span>{{ pageIndex }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { pagination } from '../../Helpers'
import  QuestionList  from '../ListQuests/index.vue'
import { ref, shallowRef } from 'vue'

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
    const pageItems =[]
    for(let i=0; i<pages.length; i++){
      pageItems.push({
        components: shallowRef(QuestionList),
        propsdata:{
          items: pages[i],
          questsIndex: i
        }
      })
    }
    const currPage = ref(pageItems[0])
    const pageSelected = (pageNum) => {
      currPage.value = pageItems[pageNum]
    }
    const keyX = ref(1)
    return {
      pages,
      QuestionList,
      currPage,
      pageSelected, 
      keyX
      }
  }
}
</script>
