<script>
// import Navbar from '../components/Navbar.vue'
import Herosection from '../components/Herosection.vue'
import ProductCard from '../components/ProductCard.vue'
import { mapActions, mapState } from 'pinia'
import { useProductsStore, useWishlistStore } from '../stores/index'

export default {
  data() {
    return {
      totalPage: 0
    }
  },
  components: {
    // Navbar,
    Herosection,
    ProductCard
  },
  methods: {
    ...mapActions(useProductsStore, ['fetchProducts']),
    ...mapActions(useWishlistStore, ['fetchWishlists']),
    getPaginationButton() {
      this.fetchProducts()
      console.log(this.totalData, this.limit)
      this.totalPage = Math.ceil(localStorage.getItem('totalData') / localStorage.getItem('limit'))
    }
  },
  mounted() {
    this.getPaginationButton()
  },
  created() {
    this.fetchProducts()
    this.fetchWishlists()
    // this.isLogin
    // this.getPaginationButton()
  },
  computed: {
    ...mapState(useProductsStore, ['products', 'isLogin', 'totalData', 'limit', 'page']),
    ...mapState(useWishlistStore, ['wishlists', 'isWishlisted'])
  }
}
</script>

<template>
  <!-- <Navbar /> -->
  <Herosection />
  <div class="title-container">
    <h1 class="title">Best Selling Products</h1>
  </div>

  <div class="card-container">
    <div class="card-grid">
      <!-- single-card -->
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :isWishlisted="isWishlisted"
      />
      <!-- single-card -->
    </div>
    <div class="button-page-container">
      <!-- {{ totalPage }} -->
      <!-- <router-link :to="fetchProducts()"> -->
      <button
        v-if="totalPage"
        v-for="index in totalPage"
        :key="index"
        class="pagination-button"
        @click.prevent="fetchProducts(index)"
      >
        {{ index }}
      </button>
      <!-- </router-link -->
      
      <!-- <button class="pagination-button" @click.prevent="fetchProducts(2)">2</button> -->
    </div>
  </div>
</template>

<style scoped>
.pagination-button {
  background-color: white;
  color: #1b1b1b;
  /* border: solid 2px #1b1b1b; */
  border: 2px solid #1b1b1b;

  border-radius: 0;
  font-family: 'd-din', sans-serif;
  font-weight: 600;
  font-size: 18px;
  padding: 8px;
  width: 35px;
  height: 35px;
  transition: all 0.3s ease;
}

.pagination-button:hover {
  background-color: #1b1b1b;
  color: white;
}
.button-page-container {
  display: flex;
  justify-content: center;
  gap: 8px;
}
.card-container {
  /* display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 5%; */
  display: flex;
  /* width: 700px; */
  justify-content: center;
  padding: 40px 50px;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;
}

.card-grid {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  /* padding: 5%; */
}
</style>
