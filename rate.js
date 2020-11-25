

Vue.component('progres-bar', {

    props: {
      rates: Array
    },

      template:
       `<span class="star-list">
		    <ul v-for="(progress, index) in 5">
			    <li><p>{{5 - index}} star</p> <span class="progres" title="84%"><span class="in-progress" :style="{width: calculate_rate(gat_rates[index])}"></span></span><p>{{calculate_rate(gat_rates[index])}}</p></li>
		    </ul>
	    </span>`,

      computed: {
          gat_rates () {
              let rate = this.rates;
              rate = rate.reduce((item, index) => {item[index] = (item[index] +1) || 1; return item} ,{});
              return  Object.values(rate).reverse()
         }       
      },

      methods: {
        calculate_rate (rate) {
           
           return ((rate * 100 ) / this.rates.length).toFixed(0) + '%'

        },
      }


});


var app = new Vue({

  el: '#app',

  data: {
  	rates: [1,2,3,1,2,3,1,4,1,2,1,3,1,2,3,1,4,1,2,3,5,5,5],
    total_rate: 0,
    value: null,
    select_value: null,
    current_val: 0,
  },

  methods: {

    star_over (index) {
        this.select_value = this.value;
        this.current_val = index;
        this.value = index;

    },

    star_out () {
        this.value = this.current_val;
    },

    sending_rate (value) {
        this.rates.push(value)
        this.select_value = value;
        
    },
  },

})


