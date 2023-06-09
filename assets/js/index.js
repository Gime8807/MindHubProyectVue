const {createApp} = Vue
const url = "https://mindhub-xj03.onrender.com/api/amazing"

createApp ({
    data(){
        return{
            arrayData:[],
            arrayFiltered:[],
            categorys:[],
            inputSearch:'',
            checked:[],
        }
    },
    created(){
        fetch(url)
        .then (response =>response.json())
        .then(data=>{
            this.arrayData = data
            console.log(this.arrayData)
            this.arrayFiltered = this.arrayData.events
            this.categorys = [...new Set(this.arrayData.events.map(function (events){return events.category}))]
            console.log(this.categorys)
        })
        .catch(error =>console.log(error))

    },
    methods:{
        filter(){
            this.arrayFiltered= this.arrayData.events.filter(evento =>{
                return (this.checked.includes(evento.category)|| this.checked.length ===0 ) && evento.name.toLowerCase().includes(this.inputSearch.toLowerCase())
            })

        }
      
    },
    computed:{

    }
}).mount ('#app')