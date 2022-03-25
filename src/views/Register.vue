<template>
<div class="container border rounded mt-5 pt-5">
    <h2 class="pb-5">Register</h2>
    <form @submit.prevent="register" class="form neu-border">
    <MDBRow class="mb-4">
      <MDBCol>
        <MDBInput
          type="text"
          label="fullname"
          v-model="name"
          id="name"
          required
        />
      </MDBCol>
    </MDBRow>

    <!-- Email input -->
    <MDBInput
      label="Email address"
      type="email"
      v-model="email"
      required
      wrapperClass="mb-4"
    />

    <!-- Contact -->
    <MDBInput
      label="Contact"
      type="text"
      v-model="contact"
      required
      wrapperClass="mb-4"
    />
    
    <!-- Password input -->
    <MDBInput
      label="Password"
      type="password"
      v-model="password"
      required
      wrapperClass="mb-4"
    />

    <!-- Submit button -->
    <MDBBtn color="dark" type="submit" block class="mb-4"> Sign up </MDBBtn>

    <!-- Register buttons -->
    <div class="text-center">
      <p>Already registerd? <a href="./login">Login</a></p>
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
    data() {
    return {
      name: "",
      email: "",
      contact: "",
      password: "",
    };
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
      const form3FirstName = ref("");
      const form3LastName = ref("");
      const form3Email = ref("");
      const form3Password = ref("");
      const form3SubscribeCheck = ref(true);

      return {
        form3FirstName,
        form3LastName,
        form3Email,
        form3Password,
        form3SubscribeCheck
      };
    },
    methods: {
      register() {
        fetch("https://eccomerce-backend.herokuapp.com/users", {
          method: "POST",
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            contact: this.contact,
            password: this.password,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            alert("User registered");
            localStorage.setItem("jwt", json.jwt);
            this.$router.push({ name: "Home" });
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