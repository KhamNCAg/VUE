const vapp= Vue.createApp({
    data(){
        return{
            title:"Testing Vue",
            author:"KNCA",
            age:"21"
        }
    }
})

vapp.mount('#app');