const {createApp} = Vue
const url = "https://mindhub-xj03.onrender.com/api/amazing"

createApp ({
    data(){
        return{
            arrayData:[],
            categorys:[]
        }
    },
    created(){
        fetch(url)
        .then (response =>response.json())
        .then(data=>{
            this.arrayData = data
            console.log(this.arrayData)
            this.categorys = [...new Set(this.arrayData.events.map(function (events){return events.category}))]
            console.log(this.categorys)
        })
        .catch(error =>console.log(error))

    },
    methods:{
        filter
    },
    computed:{

    }
}).mount ('#app')