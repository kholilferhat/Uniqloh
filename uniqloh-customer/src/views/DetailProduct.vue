<template>
  <div class="container">
    <div class="product-card">
      <div class="img-container">
         <!-- add-wishlist -->
    <span
      v-if="!wishListed"
      @click.prevent="addWishlist($route.params.id)"
      style="font-size: 48px"
      class="material-symbols-outlined wishlist"
    >
      heart_plus
    </span>
    <span
      v-if="wishListed"
      @click.prevent="deleteWishlist($route.params.id)"
      style="color: #ed1d24; font-size: 28px"
      class="wishlisted"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        fill="#ed1d24"
        color="red"
        viewBox="0 -960 960 960"
        width="48"
      >
        <path
          d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"
        />
      </svg>
    </span>
    <!-- add-wishlist -->
        <img :src="product.product.imgUrl" alt="" />
      </div>
      <div class="product-content">
        <h2 class="card-title">{{ product.product.name }}</h2>
        <h2 class="price">
          {{
            product.product.price.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR'
            })
          }}
        </h2>
        <p class="description">{{ product.product.description }}</p>
        <!-- Qr-code -->
        <div v-html="qrCode.qr" class="qrCode">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useProductsStore, useWishlistStore } from '../stores/index'

export default {
  methods: {
    ...mapActions(useProductsStore, ['fetchProductsById', 'fetchQrCode']),
    ...mapActions(useWishlistStore, ['addWishlist', 'deleteWishlist'])
  },
  computed: {
    ...mapState(useProductsStore, ['product', 'qrCode']),
    ...mapState(useWishlistStore, ['isWishlisted', 'wishListed'])
  },
  created() {
    this.fetchProductsById(this.$route.params.id)
    this.fetchQrCode(this.$route.params.id)
    this.product
    this.qrCode
    this.isWishlisted

  }
}
</script>

<style scoped>

.wishlist {
  width: 32px;
  position: absolute;
  z-index: 2;
  padding-left: 440px;
  padding-top: 8px;
  cursor: pointer;
}

.wishlisted {
  /* background-color: red;
  -webkit-mask: url(wishlisted.svg) no-repeat center;
  mask: url(wishlisted.svg) no-repeat center; */
  width: 32px;
  /* display: flex; */
  /* justify-content: end; */
  position: absolute;
  z-index: 2;
  padding-left: 440px;
  padding-top: 8px;
  cursor: pointer;
  /* color: #ed1d24; */
}

.wishlist-filled {
  width: 32px;
  /* display: flex; */
  /* justify-content: end; */
  position: absolute;
  z-index: 2;
  padding-left: 440px;
  padding-top: 8px;
  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
}
.container {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  margin: 3%;
  min-height: 100px;
  max-width: 90%;
  padding: 1%;
  border: 0.5px solid #a2a2a2;
}

.qrCode{
  width: 150px;
  /* height: 150px; */
}

img {
  width: 750px;
}

.product-content {
  width: 500px;
  max-height: 500px;
}

.card-title {
  font-size: 48px;
}
.img-container {
  width: 500px;
}

.description {
  font-size: 16px;
}
.price {
  font-size: 32px;
}

.product-card {
  margin: 8px 0 8px 0px;
  /* padding-bottom: 3%; */
  display: flex;
  gap: 16px;
  width: 1020px;
  justify-content: space-between;
  /* flex-direction: start; */
}
</style>
