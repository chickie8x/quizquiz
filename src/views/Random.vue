<template>
  <div class="main-wrapper relative h-full">
    <div :key="currIndex">
      <span class="block p-4 text-xl text-indigo-500 border-b border-indigo-500"
        >Câu hỏi: {{ currQuest.question }}</span
      >
      <div class="mt-4">
        <div
          v-for="(item, idx) in currQuest.ans"
          :key="idx"
          class="p-2 select-none flex items-center hover:bg-indigo-50"
          :class="[
            rightAns === idx ? '!bg-green-400 !text-green-800' : '',
            wrongAns === idx ? '!bg-red-400 !text-red-800' : ''
          ]"
          @click.once="nextQuest(item, idx, currQuest)"
        >
          <span
            class="mr-2 w-6 h-6 rounded-full flex justify-center items-center border-2 border-gray-500 text-gray-500"
            :class="[
              rightAns === idx ? '!border-white !text-white' : '',
              wrongAns === idx ? '!border-white !text-white' : ''
            ]"
            >{{ answerLabels[idx] }}</span
          >
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 right-0 p-4 space-y-4">
      <div class="min-w-[220px] text-green-500 w-fit bg-green-50 rounded-md p-4">
        <span
          >Số câu đã trả lời đúng : <span class="font-bold">{{ correctedList.length }}</span></span
        >
      </div>

      <div class="min-w-[220px] text-red-500 w-fit bg-red-50 rounded-md p-4">
        <span
          >Số câu đã trả lời sai : <span class="font-bold">{{ wrongList.length }}</span></span
        >
      </div>
      <button
        class="py-2 px-4 border-none outline-none bg-indigo-500 text-white rounded-md"
        @click="showModal"
      >
        Danh sách các câu trả lời sai
      </button>
    </div>

    <!-- <Teleport to="body"> -->
    <ModalList :questList="wrongList" :isDisplay="modalDisplay" @closeModal="aaa" />
    <!-- </Teleport> -->
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { questionsA } from '../assets/dataA'
import { questionsB } from '../assets/dataB'
import { shuffleArr, answerLabels } from '../components/Helpers/index'
import ModalList from '../components/kits/Modal/index.vue'

export default {
  name: 'RandomQ',
  components: {
    ModalList
  },

  setup() {
    const currIndex = ref(0)
    const questData = shuffleArr([...questionsA, ...questionsB])
    const rightAns = ref(undefined)
    const wrongAns = ref(undefined)
    const wrongList = ref([])
    const correctedList = ref([])
    const modalDisplay = ref(false)

    const currQuest = computed(() => {
      return questData[currIndex.value]
    })

    const nextQuest = (item, idx, currQ) => {
      if (item.isCorrected) {
        rightAns.value = idx
        correctedList.value.push(currQ)
        setTimeout(function () {
          if (currIndex.value < questData.length) {
            currIndex.value += 1
            rightAns.value = undefined
          }
        }, 200)
      } else {
        wrongAns.value = idx
        wrongList.value.push({ ...currQ, wn: idx })
        setTimeout(function () {
          if (currIndex.value < questData.length) {
            currIndex.value += 1
            wrongAns.value = undefined
          }
        }, 200)
      }
    }

    const showModal = () => {
      modalDisplay.value = true
    }

    const aaa = () => {
      modalDisplay.value = false
    }

    return {
      questData,
      currQuest,
      answerLabels,
      nextQuest,
      currIndex,
      rightAns,
      wrongAns,
      wrongList,
      correctedList,
      modalDisplay,
      showModal,
      aaa
    }
  }
}
</script>

<style></style>
