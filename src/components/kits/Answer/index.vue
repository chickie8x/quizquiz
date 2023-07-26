<template>
  <div>
    <div class="mt-2">
      <div
        v-for="(asw, jdx) in ans"
        :key="jdx"
        class="p-2 flex items-center hover:bg-indigo-100 duration-300"
        :class="[tf === jdx ? '!bg-green-400 !text-green-800' : '']"
      >
        <span
          class="mr-4 border-2 border-gray-500 rounded-full w-[24px] h-[24px] text-gray-500 flex justify-center items-center"
          :class="[tf === jdx ? '!border-white text-white' : '']"
          >{{ answerLabels[jdx] }}
        </span>
        <span class="select-none block w-full" @click="selectAns(asw, jdx)">{{ asw.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { answerLabels } from '../../Helpers/index'

export default {
  name: 'AnswerComponent',

  props: {
    answer: {
      require: true,
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      require: true
    }
  },

  setup(props) {
    const ans = ref(props.answer)
    const tf = ref(undefined)
    const idx = ref(props.index)
    const selectAns = (aws, jdx) => {
      if (aws.isCorrected) {
        tf.value = jdx
      } else {
        tf.value = undefined
      }
    }
    return {
      ans,
      tf,
      selectAns,
      answerLabels,
      idx
    }
  }
}
</script>
