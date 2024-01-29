<template>
  <nav>
    <router-link v-for="item, index of links" :key="index" :to="item.link">{{ item.title }}</router-link>
  </nav>
  <hr>
  <div class="box">
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        title: 'Bosh sahifa',
        link: '/'
      },
      {
        title: 'Biz haqimizda',
        link: '/about'
      },
      {
        title: 'Yangiliklar',
        link: '/news'
      },
      {
        title: 'Mahsulot',
        link: '/product'
      }
    ]
  })
}
</script>

<style>
nav {
  display: flex;
  align-items: center;
  gap: 10px;
}

.box {
  border: 1px solid #111;
  padding: 15px;
}
</style>