<template>
  <div class="container mt-5 pt-4">
      <div class="row">
          <h2 class="pb-5">Contact Us</h2>
          <div class="col border rounded-3 pt-5 pb-4">
            <form @submit.prevent="handleSubmit()">
              <!-- Name input -->
              <MDBInput
                type="text"
                label="Name"
                id="form4Name"
                v-model="name"
                wrapperClass="mb-4"
              />

              <!-- Email input -->
              <MDBInput
                type="email"
                label="Email address"
                id="form4Email"
                v-model="email"
                wrapperClass="mb-4"
              />

              <!-- Message input -->
              <MDBTextarea
                label="Message"
                id="form4Textarea"
                v-model="message"
                wrapperClass="mb-4"
              />

              <!-- Submit button -->
              <a>
                <MDBBtn color="dark" :to="{ name: 'Contact' }" type="submit" block class="mb-4"> Send </MDBBtn>
                <MDBBtn color="dark" type="reset" block class="mb-4"> reset </MDBBtn>
              </a>
              
            </form>
          </div>
          <div class="col-6 m">
            <MDBRow>
              <MDBCol col="12" sm="3">
                <i class="fas fa-phone"></i>
              Phone:
              <p class="text-muted">+27 67 839 8557</p>
              </MDBCol>
              <MDBCol col="12" sm="3">
                <i class="fas fa-phone"></i>
              Phone:
              <p class="text-muted">+27 67 839 8557</p>
              </MDBCol>
              <MDBCol col="12" sm="3">
                <i class="fas fa-phone"></i>
              Phone:
              <p class="text-muted">+27 67 839 8557</p>
              </MDBCol>
            </MDBRow>
          </div>
      </div>
  </div>
</template>

<script>
import {
    MDBInput,
    MDBBtn,
    MDBTextarea
  } from "mdb-vue-ui-kit";
  import { ref } from "vue";
  export default {
    components: {
      MDBInput,
      MDBBtn,
      MDBTextarea
    },
    data() {
    return {
      name: "",
      email: "",
      message: "",
    };
    },
    setup() {
      const name = ref("");
      const email = ref("");
      const message = ref("");


      return {
        name,
        email,
        message,
      };
    },
    methods: {
    handleSubmit() {
      fetch("https://eccomerce-backend.herokuapp.com/contact", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          (this.contact = data),
          alert("message sent");
          })
        .catch((err) => console.log(err.message));
    },
  },
  };
</script>

<style>

</style>