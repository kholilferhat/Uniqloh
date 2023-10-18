import axios from 'axios'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// const baseUrl = 'http://localhost:3000/cust'
const baseUrl = 'https://admin.spreadthejoy.id/cust'



export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
        product: {},
        qrCode: {},
        totalData: null,
        limit: null,
        page: null
    }),
    getters: {
        // doubleCount: (state) => state.count * 2,
    },
    actions: {
        async fetchProducts(page, search) {
            // console.log(search, '<<<<<pinya');
            try {
                let option = {
                    url: `${baseUrl}/products`,
                    method: 'GET',
                    // data: dataInput
                }

                if (page) {
                    option.params = { page }
                }

                if (search) {
                    option.params = { search }
                }

                if (search && page) {
                    option.params = { page, search }
                }

                const { data } = await axios(option)
                // console.log(data, 'pinyaaa');
                // console.log(data.limit);
                this.products = data.data
                this.totalData = data.totalData
                this.limit = data.limit
                this.page = data.page
                localStorage.setItem('limit', data.limit)
                localStorage.setItem('page', data.page)
                localStorage.setItem('totalData', data.totalData)
                // this.router.push('/')
            } catch (error) {
                // console.log(error);
                console.log(error.response.data.message);

            }
        },
        async fetchProductsById(id) {
            // console.log(id);
            try {
                const { data } = await axios({
                    url: `${baseUrl}/products/` + id,
                    method: 'GET',
                })
                this.product = data

            } catch (error) {
                console.log(error);
            }
        },
        async fetchQrCode(id) {
            console.log(id);
            try {
                const { data } = await axios({
                    url: `${baseUrl}/products/${id}/qr`,
                    method: 'POST',
                })

                // const qr = new DOMParser().parseFromString(data, "text/xml");

                this.qrCode = data
                console.log(data);
            } catch (error) {
                // console.log(error);
                console.log(error.response.data.message);

            }
        }
    },
})

export const useUserStore = defineStore('user', {
    state: () => ({
        products: [],
        username: '',
        isLogin: false
    }),
    getters: {
        // doubleCount: (state) => state.count * 2,
    },
    actions: {
        async loginHandler(dataInput) {
            // console.log(dataInput, '<<<<< pinyaa');
            try {
                const { data } = await axios({
                    url: `${baseUrl}/login`,
                    method: 'POST',
                    data: dataInput
                })
                // console.log(data, 'pinyaaa');
                this.username = data.username
                localStorage.username = data.username
                localStorage.access_token = data.access_token
                this.router.push('/')
                this.isLogin = true
                // window.location.reload()

            } catch (error) {
                // console.log(error);
                toast(error.response.data.msg, {
                    autoClose: 2000,
                    type: toast.TYPE.ERROR,
                    position: toast.POSITION.TOP_CENTER,
                    transition: toast.TRANSITIONS.SLIDE,
                    theme: toast.THEME.COLORED
                })
            }
        },
        logoutHandler() {
            localStorage.clear()
            this.isLogin = false
            this.router.push('/login')
            toast(`See ya later, mate! 🙌🏻🕺🏻`, {
                autoClose: 2000,
                type: toast.TYPE.INFO,
                position: toast.POSITION.TOP_CENTER,
                transition: toast.TRANSITIONS.SLIDE,
                theme: toast.THEME.COLORED
            })
            // window.location.reload()

        },
        async registerHandler(dataRegister) {
            try {
                // console.log(dataRegister, '<<<<pinya');
                const { username, email, password, phoneNumber, address } = dataRegister
                await axios({
                    url: `${baseUrl}/register/`,
                    method: 'POST',
                    data: { username, email, password, phoneNumber, address }
                })
                this.router.push('/login')
                toast(`Welcome to our family! now you can login through this form 👇`, {
                    autoClose: 2000,
                    type: toast.TYPE.INFO,
                    position: toast.POSITION.TOP_CENTER,
                    transition: toast.TRANSITIONS.SLIDE,
                    theme: toast.THEME.COLORED
                })
            } catch (error) {
                // console.log(error)
                toast(`${error.response.data.msg} 🙄`, {
                    autoClose: 2000,
                    type: toast.TYPE.ERROR,
                    position: toast.POSITION.TOP_CENTER,
                    transition: toast.TRANSITIONS.SLIDE,
                    theme: toast.THEME.COLORED
                })
            }
        },
        async googleLoginHandler(googleToken) {
            console.log(googleToken)
            try {
                const { data } = await axios({
                    url: `${baseUrl}/login/google-sign-in`,
                    method: 'POST',
                    headers: {
                        token_google: googleToken
                    }
                })
                localStorage.setItem('access_token', data.access_token)
                localStorage.setItem('username', data.username)
                this.username = localStorage.username
                //   localStorage.setItem('role', data.role)
                //   this.currentPage = 'home'
                //   this.currentSection = 'dashboard'
                this.router.push('/')
                this.isLogin = true
                toast(`Welcome! 👋🏻`, {
                    autoClose: 2000,
                    type: toast.TYPE.INFO,
                    position: toast.POSITION.TOP_CENTER,
                    transition: toast.TRANSITIONS.SLIDE,
                    theme: toast.THEME.COLORED
                })
                //   this.fetchCategories()
                //   this.fetchProducts()
                //   this.fetchHistory()
            } catch (error) {
                // console.log(error)
                toast(error.response.data.msg, {
                    autoClose: 2000,
                    type: toast.TYPE.ERROR,
                    position: toast.POSITION.TOP_CENTER,
                    transition: toast.TRANSITIONS.SLIDE,
                    theme: toast.THEME.COLORED
                })
            }
        },
    }

})

export const useWishlistStore = defineStore('wishlist', {
    state: () => ({
        wishlists: [],
        isLogin: false,
        isWishlisted: [],
        wishListed: false
    }),
    getters: {
        // doubleCount: (state) => state.count * 2,
    },
    actions: {
        async fetchWishlists() {
            // console.log(dataInput, '<<<<< pinyaa');
            try {
                const { data } = await axios({
                    url: `${baseUrl}/wishlist`,
                    method: 'GET',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                // console.log(data, 'pinyaaa');
                this.wishlists = data
                this.isWishlisted = data.map(el => {
                    return el.ProductId
                })
                this.isLogin = true
            } catch (error) {
                // console.log(error);
                console.log(error.response.data.message);

            }
        },
        async addWishlist(id) {
            // console.log(id);
            try {
                const { data } = await axios({
                    url: `${baseUrl}/wishlist/` + id,
                    method: 'POST',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                toast(`Added to your wishlist 😬`, {
                    autoClose: 2000,
                    type: toast.TYPE.INFO,
                    position: toast.POSITION.TOP_CENTER,
                    transition: toast.TRANSITIONS.SLIDE,
                    theme: toast.THEME.COLORED
                })
                this.wishListed = true
                this.fetchWishlists()
                // console.log(data);
            } catch (error) {
                console.log(error.response.data.message);
            }
        },
        async deleteWishlist(id) {
            try {
                const { data } = await axios({
                    url: `${baseUrl}/wishlist/` + id,
                    method: 'DELETE',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                toast(`Removed from your wishlist 😭`, {
                    autoClose: 2000,
                    type: toast.TYPE.INFO,
                    position: toast.POSITION.TOP_CENTER,
                    transition: toast.TRANSITIONS.SLIDE,
                    theme: toast.THEME.COLORED
                })
                this.fetchWishlists()
                this.wishListed = false
                // console.log(data);
            } catch (error) {
                // console.log(error);
                console.log(error.response.data.message);
            }
        }
    },
})