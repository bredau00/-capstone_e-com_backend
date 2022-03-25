<template>
  <MDBFooter dark bg="dark" :text="['center', 'lg-start']" class="fixed-bottom">
    <!-- Copyright -->
    <div class="text-center p-3" style="">
      © 2022 Copyright:
      <a class="text-light" href="https://ubaidullahb.netlify.app">UbaidullahBreda</a>
    </div>
    <!-- Copyright -->
  </MDBFooter>
</template>

<script>
  import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-vue-ui-kit';
  export default {
    components: {
      MDBFooter,
      MDBContainer,
      MDBRow,
      MDBCol,
      MDBBtn
    },
  };

</script>

<style>

</style>