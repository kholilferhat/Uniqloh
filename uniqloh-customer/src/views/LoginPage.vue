<template>
  <section id="login-section">
    <div class="login-title">
      <span class="title">MASUK</span>
      <p class="login-text">Masuk dengan alamat e-mail dan kata sandi anda</p>
      <form id="login-form" @submit.prevent="doLogin">
        <label class="form-title">ALAMAT EMAIL <span class="required">*</span> </label><br /><br />
        <input
          v-model="dataInput.email"
          class="form-input"
          type="email"
          id="login-email"
          name="email"
          placeholder="Masukkan alamat e-mail anda"
        /><br /><br />
        <label class="form-title">KATA SANDI <span class="required">*</span></label
        ><br /><br />
        <input
          v-model="dataInput.password"
          class="form-input"
          type="text"
          id="login-password"
          name="password"
        />
        <p>Kata sandi minimal 5 karakter, dan terdiri dari huruf dan angka.</p>
        <PrimaryButton buttonTitle="MASUK" />
        <!-- <button type="submit" value="submit">MASUK</button> -->
      </form>
      <br />
      <!-- <div style="display: flex; flex-direction: column; justify-content: center;"> -->
      <label class="form-title">Masuk Lewat Google <span class="required"></span></label>
      <GoogleLogin :callback="callback" style="width: 300px" />
      <!-- :callback="callback" -->
      <!-- </div> -->
      <br />
    </div>
    <hr />
    <section class="register-form">
      <div class="login-title">
        <span class="title">BUAT AKUN</span>
        <p class="login-text">
          Jika Anda membuat akun, Anda bisa mendapatkan layanan yang dipersonalisasi seperti melihat
          riwayat pembelian dan mendapatkan kupon diskon dengan keanggotaan Anda. Daftar hari ini,
          gratis!
        </p>
        <router-link to="/register"> <SecondaryButton buttonTitle="BUAT AKUN"/></router-link>
        
        <!-- <button
            @click.prevent="$emit('toRegister')"
            type="submit"
            value="Submit"
            id="button-register"
          >
            BUAT AKUN
          </button> -->
      </div>
    </section>
  </section>
</template>

<script>
import PrimaryButton from '../components/PrimaryButton.vue'
import SecondaryButton from '../components/SecondaryButton.vue'
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/index'

export default {
  data() {
    return {
      dataInput: {
        email: '',
        password: ''
      }
    }
  },
  components: { PrimaryButton, SecondaryButton },
  methods: {
    ...mapActions(useUserStore, ['loginHandler', 'googleLoginHandler']),
    doLogin() {
      this.loginHandler(this.dataInput)
    },
    callback(response) {
      // console.log(response);
      this.googleLoginHandler(response.credential)
      // this.$emit('googleLogin', response.credential)
      //   this.log = response
    }
  }
}
</script>

<style scoped>
#login-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 0.5px solid #a2a2a2;
  margin: 5%;
  padding: 0%;
}
</style>
