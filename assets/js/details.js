const {createApp} = Vue
const url = "https://mindhub-xj03.onrender.com/api/amazing"

createApp ({
    data(){
        return{
            arrayData:[],
            card:{},
           
        }
    },
    created(){
        fetch(url)
        .then (response =>response.json())
        .then(data=>{

            this.arrayData =data.events
            const id =  new URLSearchParams(location.search).get("id");
            this.card = this.arrayData.find(evento => evento._id == id) 
            console.log(this.card)
        })
        .catch(error =>console.log(error))

    },
    methods:{
     
      
    },
    computed:{

    }
}).mount ('#app')