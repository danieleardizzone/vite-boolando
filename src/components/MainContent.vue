<script>
import Product from './Product.vue';
import ProductsJson from '../db.json';

export default {
    components: {
        Product,
    },
    data() {
        return {
            products: ProductsJson.products
        }
    }
}
</script>

<template>
    <main class="main-content">
        <div class="container">
            <div class="row">
                <div class="col col-1" v-for="(product, index) in products" :key="index">
                    <Product :product="product" />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
.col {
    flex-basis: calc(100%/3);
    flex-direction: column;
    padding: 10px;
}
</style>