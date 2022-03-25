<template>
<div class="container mt-5 pt-2">
    <div id="cart">
       <MDBCard class="mb-3">
        <MDBRow class="g-0">
          <MDBCol md="4">
            <MDBCardImg fluid src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp" alt="..."/>
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </MDBCardText>
              <MDBCardText>
                <small class="text-muted">Last updated 3 mins ago</small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>

    </div>
</div>
</template>

<script>
import { 
    MDBRow, 
    MDBCol, 
    MDBCard, 
    MDBCardBody, 
    MDBCardTitle, 
    MDBCardText } 
    from "mdb-vue-ui-kit";
    
  export default {
    components: {
      MDBRow,
      MDBCol,
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
    }
  };
</script>

<style>

</style>