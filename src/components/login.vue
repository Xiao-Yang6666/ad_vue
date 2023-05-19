<template>
  <div class="login-container">
    <div class="form-container">
      <h2>Login</h2>
      <form>
        <div class="form-group">
          <label for="account">Account</label>
          <input type="text" v-model="account" id="account" placeholder="Enter email/phone/username" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" placeholder="Enter password" />
        </div>
        <div class="form-group">
          <label for="captcha">Captcha</label>
          <div class="captcha-group">
            <input type="text" v-model="captcha" id="captcha" placeholder="Enter captcha" />
            <img :src="captchaImage" @click="refreshCaptcha" />
          </div>
        </div>
        <button type="button" @click="login">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";

export default {
  data() {
    return {
      account: '',
      password: '',
      captcha: '',
      captchaImage: '',
    };
  },
  mounted() {
    this.refreshCaptcha();
  },
  methods: {
    login() {
      // Perform login logic
      api.login({username: this.account, password: this.password, captcha: this.captcha})
          .then(response => {
            console.log("response: " + response)
          })
          .catch(err => {

          })
    },
    refreshCaptcha() {
      // Generate new captcha image and update captchaImage data property
      console.log('Refreshing captcha');
    },
  },
};
</script>

<style>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
}


.form-container {
  position: absolute;
  top: 35%;
  right: 20%;
  transform: translate(50%, -50%);
  width: 400px;
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.login-container h2 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.captcha-group {
  display: flex;
  align-items: center;
}

.captcha-group input[type="text"] {
  flex: 1;
}

.captcha-group img {
  cursor: pointer;
  margin-left: 10px;
}

button {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: #00a4d8;
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

/* 添加背景动画效果 */
.login-container:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to right, #00a4d8, #0065ab);
  z-index: -1;
  opacity: 0.8;
  animation: gradientAnimation 8s linear infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
