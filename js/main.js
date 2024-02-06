const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            mails: [],
            mailCounter: 1,
        }
    },

    computed: {
        printMail() {
            return this.mails.length == this.mailCounter;
        }
    },

    methods: {
        askMail() {
            this.mails = [];
            for (let i = 0; i < this.mailCounter; i++) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const randomMail = response.data.response;

                    this.mails.push(randomMail)
                })    
            }

        }
    },
})
    
app.mount('#app')