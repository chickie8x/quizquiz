<template>
  <div>
    <div>
      <span class="bg-indigo-500 text-white block px-2 py-4 rounded-t-md"
        >Câu hỏi {{ questNumber +1 }}: {{ quest.question }}</span
      >
      <div v-for="(jtem, jdx) in quest.ans" :key="jdx">
        <div
          class="flex items-center p-4 hover:bg-indigo-100 duration-200 select-none"
          @click="selectAns(jdx)"
          :class="[selectedItem === jdx?'!bg-green-400 !text-green-800':'']"
        >
          <span
            :class="[selectedItem === jdx?'!border-2 border-white !text-white':'']"
            class="flex items-center justify-center w-6 h-6 text-gray-500 border-2 border-gray-500 rounded-full mr-2"
            >{{ answerLabels[jdx] }}</span
          >
          <span>
            {{ jtem.text }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { answerLabels } from '../../../Helpers'
import { ref } from 'vue'

export default {
  name: 'QuestComponent',
  props: {
    quest: {
      type: Object,
      require: true,
      default: () => {}
    },
    questNumber: {
      type: Number,
      require: false
    }
  },

  setup(props) {
    const selectedItem = ref(undefined)
    const selectAns = (idx) => {
      if(props.quest.ans[idx].isCorrected){
        selectedItem.value = idx
      }
      else {
        selectedItem.value = undefined
      }
    }


    return {
      answerLabels,
      selectAns,
      selectedItem,
    }
  }
}
</script>
