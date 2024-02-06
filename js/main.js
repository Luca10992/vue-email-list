const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            mails: [],
            mailCounter: '',
            loading: false,
        }
    },

    computed: {
        mailList() {
            return this.mails.length == this.mailCounter;
        }
    },

    methods: {
        printMail() {
            this.loading = true;
            this.mails = [];
            for (let i = 0; i < this.mailCounter; i++) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const randomMail = response.data.response;
                    this.loading = false;
                    this.mails.push(randomMail)
                })    
            }
        },
    },
})
    
app.mount('#app')