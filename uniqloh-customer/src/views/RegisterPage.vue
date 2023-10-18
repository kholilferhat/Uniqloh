<template>
  <section class="register-page">
    <span class="title margin-left">BUAT AKUN</span>
    <div id="register-section">
      <div class="login-title">
        <form id="register-form" @submit.prevent="doRegister">
          <label class="form-title">USERNAME <span class="required">*</span> </label><br /><br />
          <input
            v-model="dataRegister.username"
            class="form-input"
            type="text"
            id="register-username"
            name="email"
            placeholder="Masukkan alamat e-mail anda"
          /><br /><br />
          <label class="form-title">ALAMAT EMAIL <span class="required">*</span> </label
          ><br /><br />
          <input
            v-model="dataRegister.email"
            class="form-input"
            type="email"
            id="register-email"
            name="email"
            placeholder="Masukkan alamat e-mail anda"
          /><br /><br />
          <label class="form-title">KATA SANDI <span class="required">*</span></label
          ><br /><br />
          <input
            v-model="dataRegister.password"
            class="form-input"
            type="text"
            id="register-password"
            name="password"
          />
          <p>Kata sandi minimal 5 karakter, dan terdiri dari huruf dan angka.</p>
          <label class="form-title">NOMOR TELEPON <span class="required">*</span></label
          ><br /><br />
          <input
            v-model="dataRegister.phoneNumber"
            class="form-input"
            type="number"
            id="register-phoneNumber"
            name="phoneNumber"
          /><br /><br />
          <label class="form-title">ALAMAT <span class="required">*</span></label
          ><br /><br />
          <input
            v-model="dataRegister.address"
            class="form-input"
            type="text"
            id="register-address"
            name="address"
          /><br /><br />
          <PrimaryButton buttonTitle="DAFTAR" />
        </form>
        <label class="already-account form-title">Sudah Punya Akun?</label>
        <router-link to="/login">
          <SecondaryButton buttonTitle="MASUK" />
        </router-link>
      </div>
    </div>
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
      dataRegister: {
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: ''
      }
    }
  },
  components: { PrimaryButton, SecondaryButton },
  methods: {
    ...mapActions(useUserStore, ['registerHandler']),
    doRegister() {
      this.registerHandler(this.dataRegister)
    }
  }
}
</script>

<style scoped>
.already-account {
  margin-top: 16px;
}
.register-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 5%;
}
</style>
