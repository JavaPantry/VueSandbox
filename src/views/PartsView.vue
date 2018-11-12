<template>
  <div class="about">
    <h1>This is an PartsView page 2</h1>
    <hr>

    <h3>Master List</h3>
    <div class="table-responsive">
    <table class="table table-striped">
      <tr>
        <th >Parts Code</th>
        <th >Parts Name</th>
        <th >Category</th>
        <th >Product Code</th>
        <th >Vendor Parts Code</th>
        <th >Multiple Control</th>
        <th >Return Control</th>
      </tr>
      <tr v-for="part in parts">
        <td> {{part.pprtcd}}</td>
        <td> {{part.pprtn1}}</td>
        <td> {{part.pcat}}</td>
        <td> {{part.pprdcd}}</td>
        <td> {{part.pprtst}}</td>

        <td> {{part.multipleControl}}</td>
        <td> {{part.returnControl}}</td>

      </tr>
    </table>
    </div>
  </div>
</template>

<script>
  export default {
  	computed:{
  		parts(){
  			const parts = this.$store.getters.getParts;
		    console.log('src/views/PartsView.vue parts '+parts);
		    //parts.forEach(part => console.log( part.pprtcd ));
  			return parts;
        }
    }
  }

</script>