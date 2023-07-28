<template>
  <div
    v-if="isDisplay"
    class="w-screen h-screen bg-gray-700 flex justify-center items-center fixed top-0 left-0"
  >
    <div class="w-[1152px] h-[600px] bg-white rounded-md relative overflow-hidden">
      <div
        class="h-[56px] px-6 border-b text-xl font-bold text-indigo-500 sticky top-0 left-0 bg-white rounded-md flex items-center justify-between"
      >
        <span>Danh sách câu hỏi đã trả lời sai</span>
        <span class="text-red-500 text-4xl cursor-pointer select-none" @click="closeM"
          >&times;</span
        >
      </div>
      <div class="p-6 h-[calc(100%-56px)]">
        <div class="h-full overflow-auto">
          <div v-for="(item, idx) in questList" :key="idx" class="mb-8 bg-indigo-50">
            <span class="block p-4 bg-blue-500 text-white"> Câu hỏi : {{ item.question }}</span>
            <div class="py-4 px-8">
              <div v-for="(jtem, jdx) in item.ans" :key="jdx">
                <div
                  class="p-4 flex items-center"
                  :class="[
                    jtem.isCorrected ? '!bg-green-400 text-green 800' : '',
                    item.wn === jdx ? '!bg-red-400 !text-red-800' : ''
                  ]"
                >
                  <span
                    class="flex justify-center items-center w-6 h-6 border-2 border-gray-500 rounded-full text-gray-500 mr-2"
                    :class="[
                      jtem.isCorrected ? '!border-white !text-white' : '',
                      item.wn === jdx ? '!border-white !text-white' : ''
                    ]"
                    >{{ answerLabels[jdx] }}</span
                  >
                  <span>{{ jtem.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { answerLabels } from '../../Helpers'
export default {
  name: 'ModalList',
  props: {
    questList: {
      require: true,
      type: Array,
      default: () => []
    },

    isDisplay: {
      require: true,
      type: Boolean,
      default: () => false
    }
  },
  setup(_, { emit }) {
    const closeM = () => {
      emit('closeModal')
    }
    return {
      answerLabels,
      // showModal,
      closeM
    }
  }
}
</script>
