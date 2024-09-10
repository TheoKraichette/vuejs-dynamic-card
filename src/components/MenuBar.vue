<template>
  <nav class="menu-bar">
    <div class="icon-navigation menu">
      <router-link :to="{ name: 'home' }" :title="$t('menu.home')" class="icon-navigation-item">
        <svg class="button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M13.5578 5.53423C12.6873 4.69887 11.3127 4.69887 10.4422 5.53423L5.81574 9.97357C5.70239 10.0823 5.62614 10.224 5.5978 10.3785C5.04367 13.4004 5.00277 16.494 5.47681 19.5295L5.58933 20.25H8.56579V14.0387C8.56579 13.6244 8.90158 13.2887 9.31579 13.2887H14.6842C15.0984 13.2887 15.4342 13.6244 15.4342 14.0387V20.25H18.4107L18.5232 19.5295C18.9972 16.494 18.9563 13.4004 18.4022 10.3785C18.3739 10.224 18.2976 10.0823 18.1843 9.97357L13.5578 5.53423ZM9.40363 4.45191C10.8546 3.05965 13.1454 3.05965 14.5964 4.45191L19.2228 8.89125C19.5634 9.21804 19.7925 9.64373 19.8776 10.108C20.4621 13.2956 20.5053 16.559 20.0052 19.7609L19.8245 20.9184C19.7497 21.3971 19.3374 21.75 18.8529 21.75H14.6842C14.27 21.75 13.9342 21.4142 13.9342 21V14.7887H10.0658V21C10.0658 21.4142 9.73 21.75 9.31579 21.75H5.14706C4.66258 21.75 4.25029 21.3971 4.17554 20.9184L3.99478 19.7609C3.49473 16.559 3.53788 13.2956 4.12241 10.108C4.20754 9.64373 4.43662 9.21804 4.77719 8.89125L9.40363 4.45191Z"
            fill="currentColor" />
        </svg>
        <div><span></span></div>
      </router-link>
      <router-link :to="{ name: 'pricing' }" :title="$t('menu.dashboards')" class="icon-navigation-item">
        <svg class="button-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path stroke-width="1.4" fill="none" stroke="currentColor"
              d="m14.00178,7.34019l0,11.75988a1.23072,1.08978 0 0 1 -0.54188,0.91899a3.33396,2.95216 0 0 1 -3.08599,0a1.21235,1.07351 0 0 1 -0.52351,-0.91899l0,-11.72735a1.21235,1.07351 0 0 1 0.54188,-0.95152a3.33396,2.95216 0 0 1 3.08598,0a1.23072,1.08978 0 0 1 0.52352,0.91899z" />
            <path stroke-width="1.4" fill="none" stroke="currentColor"
              d="m20.5496,4.40227c0,4.80621 0,9.61243 0,14.41864a0.82814,1.29885 0 0 1 -0.54899,1.13832a4.8572,7.61795 0 0 1 -3.12648,0a0.83745,1.31344 0 0 1 -0.55829,-1.13832l0,-14.41864a0.83745,1.31344 0 0 1 0.55829,-1.13832a4.8572,7.61795 0 0 1 3.12648,0a0.80953,1.26966 0 0 1 0.54899,1.13832z" />
            <path stroke-width="1.4" fill="none" stroke="currentColor"
              d="m7.49194,10.28406l0,9.09972a1.23072,0.84326 0 0 1 -0.54188,0.71111a3.33396,2.28436 0 0 1 -3.08599,0a1.21235,0.83068 0 0 1 -0.52351,-0.71111l0,-9.07455a1.21235,0.83068 0 0 1 0.54188,-0.73628a3.33396,2.28436 0 0 1 3.08598,0a1.23072,0.84326 0 0 1 0.52352,0.71111z" />
          </g>
        </svg>
        <div><span></span></div>
      </router-link>

    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuBar'
})
</script>

<style scoped lang="scss">
.menu-bar {
  z-index: 2;
  background: #FFFFFF;
  box-shadow: 0 0 4px 0 #0000003b;
  user-select: none;
  padding-top: 95px;
  display: grid;
  width: 75px;
  height: 100vh;
}

.icon-navigation {
  position: relative;
  text-align: center;

  &.menu {
    margin-bottom: auto;
  }

  &.logout {
    margin-top: auto;
  }

  .icon-navigation-item {
    position: inherit;
    color: #7e7e7e;
    margin-bottom: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: normal;

    >div {
      margin-top: -3px;
      height: 16px;
    }

    span {
      display: none;
      color: #105494;
      font-size: 12px;
    }

    &.router-link-active,
    &.is-active {
      span {
        display: block;
      }
    }
  }

  .button-icon {
    width: 35px;
    height: 35px;
    cursor: pointer;
    border-radius: 4px;
    display: inline-block;
    line-height: 0;

    &.icon-user {
      width: 38px;
      height: 38px;
    }

    &.icon-settings {
      width: 33px;
      height: 33px;
    }
  }

  .router-link-active,
  .is-active {
    .button-icon {
      color: #105494;
    }
  }
}
</style>
