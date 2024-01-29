<template>
    <table border="1" width="100%" v-if="news.length > 0">
        <thead>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th></th>
            </tr>
            <tr v-for="item of news" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <td>
                    <!-- <router-link :to="`/news/${item.id}`">Batafsil</router-link> -->
                    <button @click="$router.push(`/news/${item.id}`)">
                        Batafsil
                    </button>
                </td>
            </tr>
        </thead>
    </table>
    <img src="@/assets/loading.gif" v-else>
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        news: []
    }),
    methods: {
        toPost(id) {

        },
        async getPosts() {
            let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            if (res.status == 200) {
                this.news = [...res.data]
            }
        }
    },
    mounted() {
        this.getPosts()
    }
}
</script>

<style>
img {
    height: 50px;
    width: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);

}
</style>