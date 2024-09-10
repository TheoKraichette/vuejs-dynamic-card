<template>
  <div class="header">

  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderBar'
})
</script>

<style scoped lang="scss">
.header {
  z-index: 3;
  background: #105494;
  box-shadow: 0 0 4px 0 #0000003b;
  user-select: none;
  padding-top: 25px;
  position: fixed;
  width: 100vw;
  height: 68px;
}
</style>
