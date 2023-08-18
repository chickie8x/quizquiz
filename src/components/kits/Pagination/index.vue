<template>
  <div>
    <div class="h-[500px] overflow-auto">
      <keep-alive>
        <QuestionList
          :items="currPage"
          :questsIndex="segmentIndex"
          :key="segmentIndex"
        ></QuestionList>
      </keep-alive>
    </div>
    <div class="flex items-center justify-center h-[40px] mt-2">
      <div class="flex items-center">
        <button
          class="select-none w-6 h-6 rounded-full flex items-center justify-center bg-indigo-100 text-sm text-indigo-500 mx-2 duration-300"
          :class="[segmentIndex === 0 ? '!bg-gray-400 !text-gray-700 duration-300' : '']"
          :disabled="segmentIndex === 0"
          @click="navPage('prev')"
        >
          &lt;
        </button>
        <div>
          <span
            :class="[segmentIndex === 0 ? '!text-white !bg-indigo-600 duration-200' : '']"
            class="select-none w-6 h-6 rounded-full flex items-center justify-center bg-indigo-100 text-sm text-indigo-500 mx-2 duration-200 hover:bg-indigo-200"
            @click="pageSelected(0)"
            >1</span
          >
        </div>
        <div v-if="segmentIndex > 5">
          <span
            class="select-none w-6 h-6 rounded-full flex items-center justify-center bg-gray-300 text-sm text-gray-500 mx-2 duration-200"
            >...</span
          >
        </div>
      </div>
      <div
        v-for="(pageIndex, idx) in pages.length"
        :value="pageIndex + 1"
        :key="idx"
        @click="pageSelected(idx)"
      >
        <div v-if="idx >= pageDisplay.startDisplayPage && idx <= pageDisplay.endDisplayPage">
          <span
            :class="[
              pageIndex === segmentIndex + 1 ? '!text-white !bg-indigo-600 duration-200' : ''
            ]"
            class="select-none w-6 h-6 rounded-full flex items-center justify-center bg-indigo-100 text-sm text-indigo-500 mx-2 duration-200 hover:bg-indigo-200"
            >{{ pageIndex }}</span
          >
        </div>
      </div>
      <div v-if="segmentIndex < pages.length - 7">
        <span
          class="select-none w-6 h-6 rounded-full flex items-center justify-center bg-gray-300 text-sm text-gray-500 mx-2 duration-200"
          >...</span
        >
      </div>
      <div>
        <span
          :class="[
            segmentIndex === pages.length - 1 ? '!text-white !bg-indigo-600 duration-200' : ''
          ]"
          class="select-none w-6 h-6 rounded-full flex items-center justify-center bg-indigo-100 text-sm text-indigo-500 mx-2 duration-200 hover:bg-indigo-200"
          @click="pageSelected(pages.length - 1)"
          >{{ pages.length }}</span
        >
      </div>
      <div>
        <button
          class="select-none w-6 h-6 rounded-full flex items-center justify-center bg-indigo-100 text-sm text-indigo-500 mx-2"
          :class="[
            segmentIndex === pages.length - 1 ? '!bg-gray-400 !text-gray-700 duration-300' : ''
          ]"
          :disabled="segmentIndex === pages.length - 1"
          @click="navPage('next')"
        >
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { pagination } from '../../Helpers'
import QuestionList from '../ListQuests/index.vue'
import { computed, ref } from 'vue'

export default {
  name: 'PaginationComponent',
  props: {
    itemPerPage: {
      type: Number,
      require: true,
      default: () => 1
    },
    items: {
      type: Array,
      require: true,
      default: () => []
    },
    pageRange: {
      type: Number,
      require: true,
      default: () => 10
    }
  },

  components: {
    QuestionList
  },

  setup(props) {
    const pages = pagination(props.items, props.itemPerPage)
    const segmentIndex = ref(0)
    const currPage = computed(() => {
      return pages[segmentIndex.value]
    })
    const pageSelected = (pageNum) => {
      segmentIndex.value = pageNum
    }
    const navPage = (state) => {
      if (state === 'prev') {
        segmentIndex.value -= 1
      } else {
        segmentIndex.value += 1
      }
    }

    const pageDisplay = computed(() => {
      if (pages.length <= props.pageRange) {
        return {
          startDisplayPage: 1,
          endDisplayPage: pages.length - 2
        }
      } else {
        if (segmentIndex.value > 5 && segmentIndex.value < pages.length - 6) {
          return {
            startDisplayPage: segmentIndex.value - 4,
            endDisplayPage: segmentIndex.value + 5
          }
        } else if (segmentIndex.value <= 5) {
          return {
            startDisplayPage: 1,
            endDisplayPage: segmentIndex.value + 8
          }
        } else if (segmentIndex.value >= pages.length - 7) {
          return {
            startDisplayPage: segmentIndex.value - 5,
            endDisplayPage: pages.length - 2
          }
        }
      }
    })

    return {
      pages,
      currPage,
      pageSelected,
      segmentIndex,
      navPage,
      pageDisplay
    }
  }
}
</script>
