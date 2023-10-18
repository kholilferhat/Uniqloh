<template>
  <div class="title-container">
    <h1 class="title">Your Wishlist</h1>
  </div>

  <div class="container">
    <WishListCard v-for="wishlist in wishlists" :key="wishlist.id" :wishlist="wishlist" :isWishlisted="isWishlisted"/>
  </div>
</template>

<script>
import WishListCard from '../components/WishListCard.vue'
import { mapState, mapActions } from 'pinia'
import { useWishlistStore } from '../stores/index'

export default {
  components: {
    WishListCard
  },
  methods: {
    ...mapActions(useWishlistStore, ['fetchWishlists'])
  },
  computed: {
    ...mapState(useWishlistStore, ['wishlists', 'isWishlisted']),
    
    // ...mapState(useUserStore, ['isLogin'])
  },
  created(){
    this.fetchWishlists()
    // this.isLogin
  }
}
</script>

<style scoped>
.title-container {
  padding: 3% 0% 0% 3%;
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
</style>
