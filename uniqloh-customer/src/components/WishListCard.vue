<template>
  <!-- wishlist-card -->
  <div class="product-card">
    <div class="img-container">
      <span style="color: #ed1d24; font-size: 32px" class="wishlist"
        @click.prevent="deleteWishlist(wishlist.ProductId)">
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

      <img :src="wishlist.Product.imgUrl" alt="" />
    </div>
    <div class="product-content">
      <h2 class="card-title">{{ wishlist.Product.name }}</h2>
      <p class="description">{{ wishlist.Product.description }}</p>
      <h2 class="price">
        {{
          wishlist.Product.price.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR'
          })
        }}
      </h2>
    </div>
  </div>
  <!-- wishlist-card -->
  <hr class="line" />
</template>

<script>
import { mapActions } from 'pinia';
import {useWishlistStore} from '../stores/index'
export default {
  props: ['wishlist', 'isWishlisted'],
  methods: {
    ...mapActions(useWishlistStore, ['deleteWishlist'])
  }
}
</script>

<style scoped>
.product-card {
  margin: 8px 0 8px 0px;
  /* padding-bottom: 3%; */
  display: flex;

  gap: 150px;
  width: 800px;
  justify-content: space-between;
  /* flex-direction: start; */
}

/* v-if="isWishlisted.includes(product.id)"
        @click.prevent="deleteWishlist(product.id)" */

.wishlist {
  width: 18px;
  /* display: flex; */
  /* justify-content: end; */
  position: absolute;
  z-index: 2;
  padding-left: 280px;
  padding-top: 8px;
  cursor: pointer;
}
.line {
  width: 100%;
}
</style>
