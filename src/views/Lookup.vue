<template>
  <!--<div class="about">
    <h1>This is an Lookup page</h1>
  </div>-->
  <div class="container">
    <div class="panel panel-default">
      <h2>Lookup Parts</h2>
      <form class="form-horizontal" @submit.prevent="handleSubmit">
        <div class="form-row mt-2">
          <label class="form-control-label col-4" htmlFor="field1">Parts Code:</label>
          <div class="col-8">
            <input type="text" id="field1" placeholder="Parts Code" v-model="pprtcd" class="form-control"></input>
          </div>
        </div>
        <div class="form-row mt-2">
          <label class="form-control-label col-4" htmlFor="field2">Parts Name:</label>
          <div class="col-8">
            <input type="text" id="field2" placeholder="Parts Name" v-model="pprtn1" class="form-control"></input>
          </div>
        </div>
        <div class="form-row mt-2">
          <label class="form-control-label col-4" htmlFor="field3">Vendor Parts Code:</label>
          <div class="col-8">
            <input type="text" id="field3" placeholder="Vendor Parts Code" v-model="pprtst" class="form-control"></input>
          </div>
        </div>

        <br/>
        <div class="form-row mt-2">
          <div class="offset-sm-4 col-4">
            <button type="submit" class="btn btn-primary">Lookup Part</button>
          </div>
        </div>
      </form>
    </div>
    <!--<Link to="/home">Back to list</Link>-->
  </div>
</template>
<script>

import { API_URL } from '../utils/api';
import axios from 'axios';

export default {
	data(){
		return {
			pprtcd:'',
			pprtn1:'',
			pprtst:''
        }
    },
    methods:{
	    handleSubmit: function (){
	    	console.log("pprtcd = "+this.pprtcd);
		    console.log("pprtn1 = "+this.pprtn1);
		    console.log("pprtst = "+this.pprtst);

		    let query = '';

		    if(this.pprtcd != null && this.pprtcd != undefined ) //Parts Code
			    query += `${API_URL.pprtcd}=${this.pprtcd}`;

		    if(this.pprtn1 != null && this.pprtn1 != undefined ) //Parts Name
			    query += `&${API_URL.pprtn1}=${this.pprtn1}`;

		    if(this.pprtst != null && this.pprtst != undefined ) //Vendor Parts Code
			    query += `&${API_URL.pprtst}=${this.pprtst}`;

		    axios.get(`${API_URL.partsApi}?${query}`)
			    .then((response) => {
					    console.log("lookup complete");
					    console.dir(response);
					    //dispatch({type: FETCH_PARTS_FULFILLED, payload: response.data});
                    this.$store.commit('setParts',response.data);
					    this.$router.push('/parts');
				    },
				    error => {
					    console.log("updatePart failed submit error: '"+error+"'");
					    //dispatch({type: LOOKUP_PARTS_REJECTED, payload: error})
				    });


        }
    }
}
</script>