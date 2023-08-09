export const answerLabels = ['A', 'B', 'C', 'D']

import { markRaw } from 'vue'
import PartA from '../../views/PartA.vue'
import PartB from '../../views/PartB.vue'
import RandomQ from '../../views/Random.vue'

export const tabItems = [
  {
    id: 0,
    text: 'Phần A',
    component: markRaw(PartA)
  },
  {
    id: 1,
    text: 'Phần B',
    component: markRaw(PartB)
  },
  {
    id: 2,
    text: 'Ngẫu nhiên',
    component: markRaw(RandomQ)
  }
]

export const shuffleArr = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export const pagination = (arr, items) => {
  if (arr.length <= items) {
    return [arr]
  }
  let ret = []
  const pages = Math.floor(arr.length / items) + (arr.length % items)
  let currIndex = 0
  let lastIndex = currIndex + items
  for (let i = 0; i < pages - 1; i++) {
    ret.push(arr.slice(currIndex, lastIndex))
    currIndex += items
    lastIndex += items
  }
  return ret
}
