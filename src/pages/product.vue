<template>
    <h1>Mahsulot</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ea veritatis reiciendis suscipit dolor iure nulla
        non? Quo aspernatur ducimus illum tenetur eligendi porro quisquam sunt inventore officia suscipit. Deserunt tempora
        sed laborum consequuntur ipsa amet, placeat consequatur rerum hic asperiores earum quaerat incidunt magnam id
        explicabo nemo cumque voluptas.</p>
    <hr>
    <ul>
        <li>
            <router-link to="/product/xarakteristika">Xarakteristika</router-link>
        </li>
        <li>
            <router-link to="/product/komentariya">Komentariya</router-link>
        </li>
        <li>
            <router-link to="/product/dostavka">Yetkazib Berish</router-link>
        </li>
    </ul>

    <router-view />
</template>

<script>
export default {

}
</script>

<style></style>