<script>
import Product from './Product.vue';
import { store } from '../store.js'

export default {
    components: {
        Product,
    },
    data() {
        return {
            store,
            selectedProduct: {},
            open: false
        }
    }, methods: {
        showModal(product) {
            this.selectedProduct = product,
                this.open = true
        }, closeModal() {
            this.open = false,
                this.selectedProduct = {}
        }
    }
}
</script>

<template>
    <main class="main-content">
        <div class="container">
            <div class="row">
                <div class="col col-1" v-for="(product, index) in store.products" :key="index">
                    <Product @show="showModal" :product="product" />
                </div>
            </div>
        </div>

        <div v-if="open" class="modal">
            <div class="card">
                <div class="card-img">
                    <img :src="'/img/' + selectedProduct.frontImage">
                    <img :src="'/img/' + selectedProduct.backImage" class="card-img__back">
                </div>
                <div class="card-txt">
                    <h3>{{ selectedProduct.name }}</h3>
                    <p>{{ selectedProduct.brand }}</p>
                    <p>{{ selectedProduct.price }}</p>
                </div>
                <font-awesome-icon @click="closeModal()" class="xmark" icon="fa-solid fa-xmark" />
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

.modal {
    position: relative;
    z-index: 100;

    .card {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: white;
        padding: 25px;
        border-radius: 20px;

        display: flex;
        gap: 5px;

        .card-img {
            max-width: 60%;

            position: relative;

            .card-img__back {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;

                opacity: 0;

                &:hover {
                    opacity: 1;
                }
            }
        }

        .card-txt {
            align-self: center;
        }
    }

    .xmark {
        position: absolute;
        top: 10px;
        right: 7px;

        cursor: pointer;
    }

}
</style>