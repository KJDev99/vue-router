<template>
    <button @click="back()">Ortaga</button>
    <h1>{{ post.title }}</h1>
    <h3>{{ post.body }}</h3>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
        id: '',
        post: {},
        loading: false
    }),
    methods: {
        back() {
            this.$router.push('/news')
        },
        async getPostById() {
            let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
            if (res.status == 200) {
                this.post = { ...res.data };
                this.loading = true
            }
        }
    },
    mounted() {
        this.id = this.$route.params.id
        this.getPostById()
    }
}
</script>

<style></style>