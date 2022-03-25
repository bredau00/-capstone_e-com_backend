<template>
    <MDBNavbar expand="lg" dark bg="dark" position="top" container>
      <MDBNavbarBrand 
      data-hover="TheModernMan" 
      class="text" 
      href="#">
        現代人
      </MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem router-link :to="{name: 'Home'}">
          Home
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name: 'About'}">
          About
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name: 'Products'}">
          All Products
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name: 'Contact'}">
          Contact
        </MDBNavbarItem>
      </MDBNavbarNav>
      
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <!-- <MDBNavbarItem router-link :to="{name: 'Cart'}">
          Cart
        </MDBNavbarItem> -->
      </MDBNavbarNav>
      
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem router-link :to="{name: 'Login'}">
          Login
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name: 'Register'}">
          Register
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name: 'Home'}" @click="logOut()">
          Logout
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script>
   import {
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';
  export default {
    data(){
    return{
     loggedin: false,
     isAdmin:false
    }
  },
    components: {
      MDBBtn,
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarBrand,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBCollapse,
      MDBDropdown,
      MDBDropdownToggle,
      MDBDropdownMenu,
      MDBDropdownItem
    },
    setup() {
      const collapse1 = ref(false);
      const dropdown1 = ref(false);
      return {
        collapse1,
        dropdown1
      }
    },
    methods:{
      logOut() {
      localStorage.removeItem("jwt");
      this.$router.push({ name: "Home" });
    },
    }
  };
  
</script>

<style>
.text:hover{
    font-size: 0%;
    }

.text:hover:after{
  content: attr(data-hover);
  font-size: 20px;
    }
</style>