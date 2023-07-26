<template>
  <div class="bg-indigo-200 flex flex-col justify-center items-center h-screen">
    <div class="w-[1152px]">
      <div class="flex bg-indigo-50 w-fit rounded-t-lg overflow-hidden">
        <div v-for="(tab, idx) in tabs" :key="idx">
          <div
            :class="[
              tab === currTab ? 'text-indigo-600 bg-white' : 'text-gray-500'
            ]"
            class="px-4 py-2"
            @click="tabActive(tab)"
          >
            <span class="select-none">{{ tab.text }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="w-[1152px] bg-white shadow-sm h-[600px] overflow-auto px-4 relative border-y-[24px] border-white">
      <keep-alive>
        <component :is="currComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { tabItems } from './components/Helpers'
export default {
  setup() {
    const tabs = ref(tabItems)
    const currTab = ref(tabs.value[0])
    const tabActive = (tab) => {
      currTab.value = tab
    }
    const currComponent = computed(() => {
      return currTab.value.component
    })
    return {
      tabs,
      currTab,
      tabActive,
      currComponent
    }
  }
}
</script>
