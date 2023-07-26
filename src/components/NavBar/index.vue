<template>
  <div>
    <nav
      class="text-white mt-8 flex justify-center h-[48px] px-4 bg-indigo-300 rounded-t-lg w-fit m-auto items-center divide-x divide-violet-400"
    >
      <div v-for="(item, idx) in tabs" :key="idx">
        <router-link
          :to="item.path"
          :class="[item.path === activeRoute ? 'text-indigo-500 font-bold ' : '']"
          class="flex justify-center items-center px-4 h-full"
          >{{ item.text }}</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
import navItems from './nav'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
export default {
  name: 'NavBar',
  setup() {
    const tabs = ref(navItems)
    const route = useRouter()
    const activeRoute = computed(() => {
      return route.currentRoute.value.path
    })
    return {
      navItems,
      activeRoute,
      tabs
    }
  }
}
</script>
