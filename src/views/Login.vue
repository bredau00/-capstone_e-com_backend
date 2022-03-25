<template>
      
<div class="container border rounded mt-5 pt-5">
  <h2 class="pb-5">Login</h2>
  <form @submit.prevent="login()">
    <!-- Email input -->
    <MDBInput
      type="email"
      label="Email address"
      id="form2Email"
      v-model="email"
      wrapperClass="mb-4"
    />
    <!-- Password input -->
    <MDBInput
      type="password"
      label="Password"
      id="form2Password"
      v-model="password"
      wrapperClass="mb-4"
    />
    <!-- Submit button -->
    <MDBBtn type="submit" color="dark" block class="mb-4"> Sign in </MDBBtn>

    <!-- Register buttons -->
    <div class="text-center">
      <p>Not a member? <a href="./Register">Register</a></p>
    </div>
  </form>
</div>
</template>

<script>
 import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  } from "mdb-vue-ui-kit";
  import { ref } from "vue";
  export default {
    name: 'login',
        data() {
            return {
                email: '',
                password: ''
            }
        },
    components: {
      MDBRow,
      MDBCol,
      MDBInput,
      MDBCheckbox,
      MDBBtn,
      MDBIcon
    },
    setup() {
      const form2Email = ref("");
      const form2Password = ref("");
      const form2LoginCheck = ref(true);

      return {
        form2Email,
        form2Password,
        form2LoginCheck,
      };
    },
    methods: {
    login() {
      fetch("https://eccomerce-backend.herokuapp.com/users", {
        method: "PATCH",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          localStorage.setItem("jwt", json.jwt);
          alert("User logged in");
          this.$router.push({ name: "Products" });
        })
        .catch((err) => {
          alert(err);
        });
    },
    
  },
  };
</script>

<style>

</style>