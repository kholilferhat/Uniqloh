<script>
import { mapState, mapActions } from 'pinia'
import { useUserStore, useProductsStore } from '../stores'

export default {
  //   props: ['username', 'currentPage']
  data() {
    return {
      search: '',
      dataLogin: null
    }
  },

  computed: {
    // loggedIn() {
    //   return (this.dataLogin = localStorage.getItem('access_token'))
    // },
    ...mapState(useUserStore, ['username', 'isLogin'])
  },
  methods: {
    ...mapActions(useUserStore, ['logoutHandler']),
    ...mapActions(useProductsStore, ['fetchProducts']),
    searchProduct() {
      this.fetchProducts(null, this.search)
    },
    loggedIn() {
      // window.location.reload()

      this.dataLogin = localStorage.getItem('access_token')
    }
  },
  created() {
    this.loggedIn()
    // watch(this.dataLogin, (newDataLogin) => {
    //   this.dataLogin = newDataLogin
    // })

    // window.location.reload()
  },
  mounted() {
    // window.location.reload()
  }
}
// watch: {
//   localStorage(newVal, oldVal) {
//     console.log(newVal, oldVal)

//   }
// }
</script>

<template>
  <nav>
    <router-link to="/">
      <i class="logoIcon">
        <svg height="45.3" viewBox="0 0 420 169" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3715_6)">
            <path d="M419.49 0H213.14V168.46H419.49V0Z" fill="#ED1D24" />
            <path
              d="M235.98 68.11C234.34 65.37 233.53 62.27 233.53 58.79V23.36H243.58V58.48C243.58 61.5 244.37 63.84 245.96 65.5C247.54 67.16 249.72 67.99 252.48 67.99C255.24 67.99 257.43 67.16 259.04 65.5C260.65 63.84 261.46 61.5 261.46 58.48V23.36H271.58V58.79C271.58 62.27 270.75 65.37 269.09 68.11C267.43 70.85 265.15 72.97 262.26 74.48C259.37 75.99 256.11 76.74 252.48 76.74C248.9 76.74 245.67 75.99 242.78 74.48C239.88 72.97 237.62 70.85 235.98 68.11Z"
              fill="white"
            />
            <path
              d="M324.25 76.28H314.2L294.72 43.23V76.28H284.67V23.36H294.72L314.2 56.49V23.36H324.25V76.28Z"
              fill="white"
            />
            <path d="M347.87 23.36V76.27H337.82V23.36H347.87Z" fill="white" />
            <path
              d="M397.49 83.87L389.82 88.09L383.61 76.66C382.38 76.81 381.08 76.89 379.7 76.89C367.07 76.89 360.76 69.86 360.76 55.8V43.69C360.76 29.63 367.18 22.6 380.01 22.6C385.89 22.6 390.54 24.25 393.97 27.55C397.4 30.85 399.11 36.23 399.11 43.69V55.8C399.11 64.29 396.71 70.22 391.9 73.59L397.49 83.87ZM380 67.92C383.07 67.92 385.34 66.94 386.83 64.97C388.31 63 389.05 59.9 389.05 55.65V44.22C389.05 39.72 388.31 36.46 386.83 34.44C385.35 32.42 383.07 31.41 380 31.41C376.78 31.41 374.45 32.39 373.02 34.36C371.59 36.33 370.87 39.61 370.87 44.21V55.64C370.87 59.99 371.59 63.12 373.02 65.03C374.45 66.96 376.78 67.92 380 67.92Z"
              fill="white"
            />
            <path d="M243.58 96.3V140.47H266.74V149.21H233.53V96.3H243.58Z" fill="white" />
            <path
              d="M293.96 116.62C293.96 102.56 300.38 95.53 313.21 95.53C319.09 95.53 323.74 97.18 327.17 100.48C330.6 103.78 332.31 109.16 332.31 116.62V128.74C332.31 136.2 330.56 141.59 327.06 144.88C323.56 148.18 318.84 149.83 312.91 149.83C300.28 149.83 293.97 142.8 293.97 128.74L293.96 116.62ZM322.26 128.58V117.15C322.26 112.65 321.52 109.39 320.04 107.37C318.56 105.35 316.28 104.34 313.21 104.34C309.99 104.34 307.66 105.32 306.23 107.29C304.8 109.26 304.08 112.54 304.08 117.14V128.57C304.08 132.92 304.8 136.05 306.23 137.96C307.66 139.88 309.99 140.84 313.21 140.84C316.28 140.84 318.55 139.86 320.04 137.89C321.52 135.93 322.26 132.83 322.26 128.58Z"
              fill="white"
            />
            <path
              d="M402.01 149.21H391.96V126.82H374.4V149.21H364.35V96.3H374.4V118.08H391.96V96.3H402.01V149.21Z"
              fill="white"
            />
            <path d="M0 168.46H168.91V0H0V168.46Z" fill="#ED1D24" />
            <path d="M95.96 74.31H143.67V63.96H95.96V74.31Z" fill="white" />
            <path d="M138.69 22.98H101.35V33.75H138.69V22.98Z" fill="white" />
            <path
              d="M62.1991 22.9822H30.1991V33.7522H51.3691V63.9722H24.8091V74.3122H72.9891V63.9722H62.1991V22.9822Z"
              fill="white"
            />
            <path
              d="M95.966 94.1415V145.511H143.676V94.1415H95.966ZM133.276 134.691H106.756V104.521H133.276V134.691Z"
              fill="white"
            />
            <path
              d="M30.1978 94.1415L24.6778 119.841H35.4678L38.7178 104.521H59.9578L53.5978 134.701H21.5478L19.3878 145.521H62.1978L72.9878 94.1515H30.1978V94.1415Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_3715_6">
              <rect width="419.49" height="168.46" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </i>
    </router-link>

    <!-- Nav-Menu -->
    <!-- search -->
    <div v-if="$route.path !== '/login'" class="menu">
      <div class="search">
        <input
          v-model="search"
          class="search-input"
          type="text"
          placeholder="cari produk berdasarkan nama"
        />
        <span @click.prevent="searchProduct" class="material-symbols-outlined search-icon">
          search
        </span>
      </div>
    </div>
    <!-- Nav-Menu -->

    <div class="menu-right">
      <div style="display: flex; align-items: center; gap: 24px">
        <!-- account  -->
        <div
          v-if="$route.path !== '/login'"
          style="display: flex; align-items: center; gap: 4px"
        >
          <span class="material-symbols-outlined"> account_circle </span>
          <div>Hello,{{ username }}</div>
        </div>
        <!-- wishlist  -->
        <div style="align-items: center; display: flex; gap: 4px">
          <span class="material-symbols-outlined"> favorite </span>
          <router-link to="/wishlist" class="logout"> Wishlist </router-link>
        </div>
        <!-- logout  -->
        <div
          v-if="$route.path !== '/login'"
          style="align-items: center; display: flex; gap: 4px"
        >
          <span class="material-symbols-outlined"> logout </span>

          <a @click.prevent="logoutHandler" href="" class="logout"> Keluar </a>
        </div>
        <!-- login  -->
        <div
          v-if="$route.path === '/login'"
          style="align-items: center; display: flex; gap: 4px"
        >
          <span class="material-symbols-outlined"> login </span>
          <router-link to="/login" class="logout">Masuk</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.search {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
}

.search-icon {
  color: white;
  background-color: #1d1d1d;
  padding: 8px;
}
.search-input {
  border-radius: 0;
  padding: 12px;
  /* height: 20px; */
  font-family: d-din;
  width: 100%;
  border: 1px solid #a2a2a2;
}
nav {
  display: flex;
  background-color: white;
  position: sticky;
  width: 100%;
  height: 72px;
  border-bottom: solid 0.5px #a2a2a2;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  top: 0px;
}
.logout {
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  text-decoration: none;
  color: #1d1d1d;
  gap: 4px;
}
.menu-right {
  /* display: flex; */
  /* flex-direction: column; */
  padding: 28px;
  /* align-items: center; */
  /* text-align: center; */
  /* width: 100px; */
}
.logoIcon {
  padding: 16px;
  height: 45.3;
}
</style>
