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
            this.arrayData = data.events.filter(evento => Date.parse(evento.date) < Date.parse(data.currentDate))
            this.arrayFiltered = this.arrayData
            this.categorys = [...new Set(data.events.map(function (events){return events.category}))]
        })
        .catch(error =>console.log(error))

    },
    methods:{
        filter(){
            this.arrayFiltered= this.arrayData.filter(evento =>{
                return (this.checked.includes(evento.category)|| this.checked.length ===0 ) && evento.name.toLowerCase().includes(this.inputSearch.toLowerCase())
            })

        }
      
    },
    computed:{

    }
}).mount ('#app')