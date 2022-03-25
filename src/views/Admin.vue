<template>
<!-- Product CARDS -->
  <div id="products" class="container pt-5 pb-4 border-bottom border-dark">
    <h3 class="pt-5">Products</h3>
    <MDBBtn 
    color="dark" 
    aria-controls="exampleModal"
    @click="exampleModal=true" 
    size="lg">
      add product
    </MDBBtn>
      <div class="container d-flex justify-content-end mt-5 pt-4"> 
        <!-- Search form -->
          <form class="d-flex input-group w-auto">
            <input
              type="search"
              class="form-control"
              placeholder="search name"
              aria-label="Search"
              v-model="search"
              label="search"
            />
          </form>
        <div class="d-flex w-25 ms-3">
          <label for="" class="form-label">Sort by category</label>
          <select
            class="form-select"
            v-model="category"
            v-on:change="sortCategory(category)"
          >
            <option value="">All</option>
            <option value="Tops">Tops</option>
            <option value="Bottoms">Bottoms</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        <div class="d-flex w-25 ms-3">
          <label class="form-label">Sort name</label>
          <select 
          class="form-select" 
          v-model="title" 
          v-on:change="sortTitle(title)">
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
        <div class="d-flex w-25 ms-3">
          <label for="" class="form-label">Sort price</label>
          <select
            class="form-select"
            v-model="price"
            v-on:change="sortPrice(price)"
          >
            <option value=""></option>
            <option value="asc">Lowest-Highest</option>
            <option value="desc">Highest-Lowest</option>
          </select>
        </div>
    </div>
    <div v-if="products.length" id="products" class="row pt-5">
      <div v-for="(product, index) in products" :key="index" class="col-6 mt-2 mb-2">
        <MDBCard class="" style="max-height: 300px" >
          <MDBCardBody>
            <MDBRow class="g-0">
              <MDBCol  md="4">
                <MDBCardImg style="max-width: 200px" :src="product.img_front" :alt="product.title" />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardTitle>{{ product.title }}</MDBCardTitle>
                <MDBRow>
                  <MDBCardText>
                    {{ product.category }}
                    R{{ product.price }}
                  </MDBCardText>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <MDBBtn
                    @click="exampleModal2=true" 
                    aria-controls="exampleModal2"
                    color="dark"
                    >
                      edit
                    </MDBBtn>
                    <MDBBtn 
                    @click="deleteProduct(id)"
                    color="dark"
                    >
                      delete
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
    <div v-else class="hollow-dots-spinner mx-auto" style="width: 200px" :style="spinnerStyle">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>

<!-- USER CARDS -->
  <div id="users" class="container pb-5 pt-3 border-bottom">
    <h3 class="pt-5">Users</h3>
    <MDBBtn 
    color="dark"  
    size="lg">
      add user
    </MDBBtn>
    <div class="container d-flex justify-content-end mt-5 pt-4"> 
        <!-- Search form -->
          <form class="d-flex input-group w-auto"> 
            <input
              type="search"
              class="form-control"
              placeholder="search name"
              aria-label="Search"
              v-model="search"
              label="search"
            />
          </form>
        <div class="d-flex w-25 ms-3">
          <label for="" class="form-label">Sort by category</label>
          <select
            class="form-select"
            v-model="category"
            v-on:change="sortCategory(category)"
          >
            <option value="">All</option>
            <option value="Tops">Tops</option>
            <option value="Bottoms">Bottoms</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        <div class="d-flex w-25 ms-3">
          <label class="form-label">Sort name</label>
          <select
          class="form-select" 
          v-model="title" 
          v-on:change="sortTitle(title)">
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
        <div class="d-flex w-25 ms-3">
          <label for="" class="form-label">Sort price</label>
          <select
            class="form-select"
            v-model="price"
            v-on:change="sortPrice(price)"
          >
            <option value=""></option>
            <option value="asc">Lowest-Highest</option>
            <option value="desc">Highest-Lowest</option>
          </select>
        </div>
    </div>
    <div v-if="users.length" id="users" class="row pt-5 pb-5 justify-content-between">
        <MDBCard v-for="(user, index) in users" :key="index" class=" pt-5 m-3 col-3">
          <MDBCardBody>
            <MDBCardTitle>{{ user.name }}</MDBCardTitle>
            <MDBCardText>
              {{ user.email }}
            </MDBCardText>
            <MDBCardText>
              {{ user.contact }}
            </MDBCardText>
            <MDBBtn
            @click="exampleModal3=true" 
            aria-controls="exampleModal3"
            color="dark"
            >
              edit
            </MDBBtn>
            <MDBBtn
            color="dark"
            >
              delete
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
    </div>
    <div v-else class="hollow-dots-spinner mx-auto" style="width: 200px" :style="spinnerStyle">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>


<!-- MODALS -->

<!-- Add product modal -->
  <MDBModal
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="exampleModal"
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLabel"> Add Product </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
      <form @submit.prevent="createProduct">
        <!-- Name input -->
        <MDBInput
          type="text"
          label="title"
          id="title"
          v-model="title"
          wrapperClass="mb-4"
        />
  
        <!-- category input -->
        <select
            class="form-select"
            v-model="category"
            wrapperClass="mb-4"
          >
            <option value="Tops">Tops</option>
            <option value="Bottoms">Bottoms</option>
            <option value="Accessories">Accessories</option>
        </select>

        <!-- img front input -->
        <MDBInput
          type="text"
          label="img front link"
          id="img_front"
          v-model="img_front"
          wrapperClass="mb-4"
        />
        <!-- img back input -->
        <MDBInput
          type="text"
          label="img back link"
          id="img_back"
          v-model="img_back"
          wrapperClass="mb-4"
        />
        <!-- price input -->
        <MDBInput
          type="text"
          label="price"
          id="price"
          v-model="price"
          wrapperClass="mb-4"
        />
        <MDBBtn color="dark" type="submit" class="form-btn neu-border">add</MDBBtn>
      </form>
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="dark" @click="exampleModal = false">Close</MDBBtn>
    </MDBModalFooter>
  </MDBModal>

  <!-- Edit product modal -->
  <MDBModal
    id="exampleModal2"
    tabindex="-1"
    labelledby="exampleModalLabel2"
    v-model="exampleModal2"
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLabel2"> Edit Product </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
      <form>
        <!-- Name input -->
        <MDBInput
          type="text"
          label="Name of Product"
          id="title"
          v-model="title"
          wrapperClass="mb-4"
        />
  
        <!-- category input -->
        <MDBInput
          type="text"
          label="category"
          id="category"
          v-model="category"
          wrapperClass="mb-4"
        />

        <!-- img front input -->
        <MDBInput
          type="text"
          label="img front link"
          id="img_front"
          v-model="img_front"
          wrapperClass="mb-4"
        />
        <!-- img back input -->
        <MDBInput
          type="text"
          label="img back link"
          id="img_back"
          v-model="img_back"
          wrapperClass="mb-4"
        />
        <!-- price input -->
        <MDBInput
          type="text"
          label="price"
          id="price"
          v-model="price"
          wrapperClass="mb-4"
        />
        <MDBBtn color="dark" class="form-btn neu-border">add</MDBBtn>
      </form>
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="dark" @click="exampleModal2 = false">Close</MDBBtn>
    </MDBModalFooter>
  </MDBModal>

  <!-- Edit user modal -->
  <MDBModal
    id="exampleModal3"
    tabindex="-1"
    labelledby="exampleModalLabel3"
    v-model="exampleModal3"
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLabel2"> Edit User </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
      <form>
        
        <MDBBtn color="dark" class="form-btn neu-border">add</MDBBtn>
      </form>
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="dark" @click="exampleModal3 = false">Close</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</template>

<script>
import axios from "axios";
import { 
  MDBCard, 
  MDBRow,
  MDBCol, 
  MDBCardBody, 
  MDBCardTitle, 
  MDBCardText, 
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBCardImg
  } from "mdb-vue-ui-kit";
  import { ref } from 'vue';
  export default {
    props: ["id"],
    data() {
    return {
      product: null,
      products: [], 
      user: null,
      users: [],
      filterProducts: null,
      title: "",
      category: "",
      img_front: "",
      img_back: "",
      price: "",
      search: "",
      name: "",
      email: "",
      password: "",
      id:"",
    };
    },
    components: {
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
      MDBBtn,
      MDBRow,
      MDBCol,
      MDBModal,
      MDBModalHeader,
      MDBModalTitle,
      MDBModalBody,
      MDBModalFooter,
      MDBInput,
      MDBCardImg
    },

    mounted() {
      fetch("https://eccomerce-backend.herokuapp.com/products/", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.products = json;
        }),
        fetch("https://eccomerce-backend.herokuapp.com/users", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.users = json;
        })
    },
    setup() {
      const form8Name = ref("");
      const form8Email = ref("");
      const exampleModal = ref(false);
      const exampleModal2 = ref(false);
      const exampleModal3 = ref(false);

      return {
        exampleModal,
        exampleModal2,
        exampleModal3,
        form8Name,
        form8Email
      };
    },
    methods: {
      // Create Product
    createProduct() {
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://eccomerce-backend.herokuapp.com/products/", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          category: this.category,
          price: this.price,
          img_front: this.img_front,
          img_back: this.img_back,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("Product Created");
          this.$router.push({ name: "Admin" });
        })
        .catch((err) => {
          alert(err);
        });
      },

      deleteProduct(id) {
        const config = {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        };
        let apiURL = `https://eccomerce-backend.herokuapp.com/products//${id}`;

        let indexOfArrayItem = this.products.findIndex((i) => i.id === id);

        if (window.confirm("Do you really want to delete?")) {
          axios
            .delete(apiURL, config)
            .then(() => {
              this.products.splice(indexOfArrayItem, 1);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      },

     // SORT BY PRICE
      sortPrice(price) {
      this.products = this.products.sort(
        (a, b) => a.price - b.price
      );
      if (price == "desc") this.products.reverse();
      },

      // SORT BY NAME
      sortTitle(desc) {
      this.products = this.products.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      if (desc == "desc") this.products.reverse();
      },
      
      // FILLTER CATEGORY
      filterCategory(category) {
      if (category) {
        this.filterProducts = this.products.filter(
          (product) => product.category == category
        );
      } else {
        this.fillterProducts = this.products;
      }
    },
  },
  computed: {
    filterProducts: function () {
      return this.products.filter((product) => {;
        return product.title.toLowerCase().match(this.search.toLowerCase())
      });
    },
  },
}
</script>

<style>
/* .tab {
  background-color:#262626 ;
} */
.card:hover .img-top {
        display: inline;
    }

.card .img-top {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
    }
/* loading */
.hollow-dots-spinner, .hollow-dots-spinner * {
      box-sizing: border-box;
    }

    .hollow-dots-spinner {
      height: 15px;
      width: calc(30px * 3);
    }

    .hollow-dots-spinner .dot {
      width: 15px;
      height: 15px;
      margin: 0 calc(15px / 2);
      border: calc(15px / 5) solid black;
      border-radius: 50%;
      float: left;
      transform: scale(0);
      animation: hollow-dots-spinner-animation 1000ms ease infinite 0ms;
    }

    .hollow-dots-spinner .dot:nth-child(1) {
      animation-delay: calc(300ms * 1);
    }

    .hollow-dots-spinner .dot:nth-child(2) {
      animation-delay: calc(300ms * 2);
    }

    .hollow-dots-spinner .dot:nth-child(3) {
      animation-delay: calc(300ms * 3);

    }

    @keyframes hollow-dots-spinner-animation {
      50% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
</style>