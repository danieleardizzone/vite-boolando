<script>
import ProductsJson from '../db.json';

export default {
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
                    <div class="card">
                        <figure class="card-image">
                            <img class="first" :src="'/img/' + product.backImage">
                            <img class="second" :src="'/img/' + product.frontImage">
                        </figure>
                        <div class="heart">&hearts;</div>
                        <ul class="mini-cards" v-for="badge in product.badges">
                            <li class="red-card" v-if="badge.type === 'discount'">
                                {{ badge.value }}
                            </li>
                            <li class="green-card" v-if="badge.type === 'tag'">
                                Sostenibilità
                            </li>
                        </ul>
                    </div>
                    <p class="brand-name">{{ product.brand }}</p>
                    <p class="model-name">{{ product.name }}</p>
                    <div class="price">
                        <span class="discounted-price" :class="product.discount !== false ? '' : 'd-none'">
                            {{ product.price }}&euro;
                        </span>
                        <span :class="product.discount !== false ? 'full-price' : 'discounted-price'">
                            {{ product.price }}&euro;
                        </span>
                    </div>
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

.model-name {
    font-weight: 700;
}

.discounted-price {
    font-weight: 700;
    color: red;
}

.full-price {
    text-decoration: line-through;
}

.card {
    position: relative;
}

.second {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.second {
    opacity: 0;
}

.card:hover .second {
    opacity: 1;
}

.heart {
    position: absolute;
    right: 0;
    top: 10px;
    background-color: white;
    padding: 10px 15px;
    font-size: 25px;
}

.heart:hover {
    color: red;
}

.mini-cards {
    position: absolute;
    bottom: 30px;
    left: 0;

    color: white;
    font-size: 12px;
    font-weight: 700;
}

.red-card {
    background-color: red;
}

.green-card {
    background-color: green;
}
</style>