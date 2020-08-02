<template>
  <div id="login">
    <section>
      <div class="col1">
        <h1>Vuestagram</h1>
        <p>Welcome to this sample social media web app powered by Vue.js and Firebase and coded alongside <a href="https://savvyapps.com/" target="_blank">Savvy Apps</a> tutorial.
          You can check out this as well as my other projects at my <a href="https://github.com/tinadelli" target="_blank">Github</a></p>
      </div>
      <div class="col2">
        <form @submit.prevent>
          <h1>Welcome Back</h1>
          <div>
            <label for="email1">Email</label>
            <input v-model.trim="loginForm.email" type="text" placeholder="you@email.com" id="email1" />
          </div>
          <div>
            <label for="password1">Password</label>
            <input v-model.trim="loginForm.password" type="password" placeholder="******" id="password1" />
          </div>
          <button class="button">Log In</button>
          <div class="extras">
            <a>Forgot Password</a>
            <a>Create an Account</a>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  }
}
</script>