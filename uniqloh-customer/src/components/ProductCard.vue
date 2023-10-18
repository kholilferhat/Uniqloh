<template>
  <div class="card">
    <!-- add-wishlist -->
    <span
      v-if="!isWishlisted.includes(product.id)"
      @click.prevent="addWishlist(product.id)"
      style="font-size: 28px"
      class="material-symbols-outlined wishlist"
    >
      heart_plus
    </span>
    <span
      v-if="isWishlisted.includes(product.id)"
      @click.prevent="deleteWishlist(product.id)"
      style="color: #ed1d24; font-size: 28px"
      class="wishlisted"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        fill="#ed1d24"
        color="red"
        viewBox="0 -960 960 960"
        width="30"
      >
        <path
          d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"
        />
      </svg>
    </span>
    <!-- add-wishlist -->
    <!-- product-content -->
    <img :src="product.imgUrl" alt="" />
    <div class="product-content">
      <h2 class="card-title">{{ product.name }}</h2>
      <p class="description">{{ product.description }}</p>
      <h2 class="price">
        {{
          product.price.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR'
          })
        }}
      </h2>
      <!-- product-content -->
      <!-- button -->
      <div class="button-container">
        <router-link :to="`/detail/` + product.id" class="card-button"> DETAIL</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useWishlistStore } from '../stores/index'

export default {
  computed: {},
  methods: {
    ...mapActions(useWishlistStore, ['addWishlist', 'deleteWishlist'])
  },
  props: ['product', 'isWishlisted']
}
</script>

<style scoped>
.wishlist {
  width: 18px;
  position: absolute;
  z-index: 2;
  padding-left: 200px;
  padding-top: 8px;
  cursor: pointer;
}

.wishlisted {
  /* background-color: red;
  -webkit-mask: url(wishlisted.svg) no-repeat center;
  mask: url(wishlisted.svg) no-repeat center; */
  width: 18px;
  /* display: flex; */
  /* justify-content: end; */
  position: absolute;
  z-index: 2;
  padding-left: 200px;
  padding-top: 8px;
  cursor: pointer;
  /* color: #ed1d24; */
}

.wishlist-filled {
  width: 18px;
  /* display: flex; */
  /* justify-content: end; */
  position: absolute;
  z-index: 2;
  padding-left: 200px;
  padding-top: 8px;
  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
}


.button-container {
  width: 240px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: end;
}
.card-button {
  text-decoration: none;

  border-radius: 0;
  background-color: #1b1b1b;
  border: none;
  color: white;
  font-family: 'd-din', sans-serif;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  padding: 12px;
  width: 230px;
  /* height: 45px; */
  transition: all 0.3s ease;
  text-align: center;
}

.card-button:hover {
  background-color: #ed1d24;
}

.card-title {
  height: 80px;
}

.description {
  height: 100px;
}
.card img {
  width: 240px;
}

.card {
  display: flex;
  flex-direction: column;
  width: 240px;
}

.product-content {
  display: flex;
  flex-direction: column;
  height: 350px;
}
</style>
