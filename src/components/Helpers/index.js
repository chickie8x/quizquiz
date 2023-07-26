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
