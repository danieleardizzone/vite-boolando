<script>
import { store } from '../store';

export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },

}
</script>

<template>
    <div class="card">
        <div>
            <figure class="card-image">
                <img class="first" :src="'/img/' + product.backImage">
                <img class="second" :src="'/img/' + product.frontImage">
            </figure>
            <div class="heart" :class="product.isInFavorites === true ? 'red-heart' : ''">&hearts;</div>

            <div class="mini-cards">
                <div v-for="(badge, index) in product.badges" :key="index">
                    <div class="red-card" v-if="badge.type === 'discount'">
                        {{ badge.value }}
                    </div>
                    <div class="green-card" v-else-if="badge.type === 'tag'">
                        {{ badge.value }}
                    </div>
                </div>
            </div>

            <div class="info-box" @click="$emit('show', product)">
                <font-awesome-icon class="info-icon" icon="fa-solid fa-info" />
            </div>
        </div>

        <p class="brand-name">{{ product.brand }}</p>
        <p class="model-name">{{ product.name }}</p>
        <div class="price">
            <span class="discounted-price">
                {{ product.price }}&euro;
            </span>
            <span :class="product.discount !== false ? 'full-price' : 'discounted-price'">
                {{ product.price }}&euro;
            </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
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

    cursor: pointer;
}

.red-heart,
.heart:hover {
    color: red;
}

.mini-cards {
    position: absolute;
    bottom: 100px;
    left: 0;
    color: white;
    font-size: 12px;
    font-weight: 700;

    display: flex;
    flex-direction: row-reverse;
}

.red-card {
    background-color: red;
}

.green-card {
    background-color: green;
}

.info-box {
    position: absolute;
    bottom: 96px;
    right: 8px;
    font-size: 28px;

    cursor: pointer;

    background-color: white;
    padding: 8px;
    border-radius: 10px;
}
</style>