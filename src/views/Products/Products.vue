<template>
	<div class="pb-5">
		<div class="container mt-5 pt-2 pb-5">
			<div v-if="products.length" class="row p-b-5">
				<div class="container d-flex justify-content-end mb-3 mt-5 pt-4">
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
							v-on:change="sortTitle(title)"
						>
							<option value="asc">Ascending</option>
							<option value="desc">Descending</option>
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
							<option value="asc">Ascending</option>
							<option value="desc">Descending</option>
						</select>
					</div>
				</div>

				<!-- Products -->
				<h2>Products</h2>
				<div
					v-for="(product, index) in filterProducts"
					:key="index"
					class="col-3 mt-2 mb-2"
				>
					<!-- Project Card -->
					<MDBCard class="">
						<a v-mdb-ripple="{ color: 'light' }" class="card">
							<MDBCardImg :src="product.img_front" :alt="product.title" />
							<MDBCardImg
								:src="product.img_back"
								class="img-top"
								:alt="product.title"
							/>
						</a>
						<MDBCardBody>
							<MDBCardTitle>{{ product.title }}</MDBCardTitle>
							<MDBCardText>{{ product.category }}</MDBCardText>
							<MDBCardText>R{{ product.price }}</MDBCardText>
							<!-- buttons -->
							<MDBBtnGroup>
								<MDBBtn tag="a" href="#!" color="dark">add to cart</MDBBtn>
								<routerlink :to="{ name: 'productDetails', params: { id: product._id } }" color="dark"> View Product </routerlink>
							</MDBBtnGroup>
						</MDBCardBody>
					</MDBCard>
				</div>
			</div>
			<div
				v-else
				class="hollow-dots-spinner mx-auto"
				style="width: 200px"
				:style="spinnerStyle"
			>
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	import {
		MDBCard,
		MDBCardBody,
		MDBCardTitle,
		MDBCardText,
		MDBCardImg,
		MDBBtn,
		mdbRipple,
		MDBModal,
		MDBModalHeader,
		MDBModalTitle,
		MDBModalBody,
		MDBModalFooter,
		MDBRow,
		MDBCol,
		MDBInput,
		MDBBtnGroup,
	} from "mdb-vue-ui-kit";
	import { ref } from "vue";

	export default {
		props: ["id"],
		data() {
			return {
				product: null,
				products: [],
				filterProducts: null,
				title: "",
				category: "",
				description: "",
				img: "",
				price: "",
				search: "",
			};
		},
		components: {
			MDBCard,
			MDBCardBody,
			MDBCardTitle,
			MDBCardText,
			MDBCardImg,
			MDBModal,
			MDBModalHeader,
			MDBModalTitle,
			MDBModalBody,
			MDBModalFooter,
			MDBBtn,
			MDBRow,
			MDBCol,
			MDBInput,
			MDBBtnGroup,
		},
		directives: {
			mdbRipple,
		},

		mounted() {
			fetch("https://eccomerce-backend.herokuapp.com/products", {
				method: "GET",
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((response) => response.json())
				.then((json) => {
					this.products = json;
					this.filterProducts = json.results;
				});
		},
		methods: {
			// Single View
			getOne() {
				fetch("https://eccomerce-backend.herokuapp.com/products/" + this.id, {
					method: "GET",
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
				})
					.then((response) => response.json())
					.then((json) => {
						this.products = json;
					});
			},

			// SORT BY PRICE
			sortPrice(price) {
				this.products = this.products.sort((a, b) => a.price - b.price);
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
				return this.products.filter((product) => {
					return product.title.toLowerCase().match(this.search.toLowerCase());
				});
			},
		},
	};
</script>

<style>
	.card {
		justify-content: center;
	}

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
	.hollow-dots-spinner,
	.hollow-dots-spinner * {
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

	/* Hide scrollbar for Chrome, Safari and Opera */
	.scrollbar-hidden::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge add Firefox */
	.scrollbar-hidden {
		-ms-overflow-style: none;
		scrollbar-width: none; /* Firefox */
	}
</style>
