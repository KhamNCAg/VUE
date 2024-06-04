const vapp= Vue.createApp({
    data(){
        return{
            title:"Testing Vue",
            author:"KNCA",
            age:"21",
            showBook:true
        }
    }
})

vapp.mount('#app');