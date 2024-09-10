<template>
  <q-layout view="lHh Lpr lFf" class="page">
    <HeaderBar/>
    <MenuBar/>
    <div class="page-content">
      <router-view/>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import MenuBar from 'components/MenuBar.vue'
import HeaderBar from 'components/HeaderBar.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    HeaderBar,
    MenuBar
  }
})
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  .page-content {
    flex: 1;
    width: 100%;
    height: 100vh;
    padding-top: 72px;
  }
}
</style>
