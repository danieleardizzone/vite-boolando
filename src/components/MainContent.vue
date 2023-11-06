<script>
export default {
    data() {
        return {
            products: [
                {
                    brandName: "Levi's",
                    modelName: "RELAXED FIT TEE UNISEX",
                    discountedPrice: "14,99",
                    fullPrice: "29,99",
                    discount: "-50%",
                    sustainability: true,
                    src: "1.webp",
                    srcBis: "1b.webp",
                },
                {
                    brandName: "Guess",
                    modelName: "ROSES TEE",
                    discountedPrice: "20,99",
                    fullPrice: "29,99",
                    discount: "-30%",
                    sustainability: false,
                    src: "2.webp",
                    srcBis: "2b.webp",
                },
                {
                    brandName: "Come Zucchero Filato",
                    modelName: "VOGLIA DI COLORI PASTELLO",
                    discountedPrice: "129,99",
                    fullPrice: "184,99",
                    discount: "-30%",
                    sustainability: false,
                    src: "3.webp",
                    srcBis: "3b.webp",
                },
                {
                    brandName: "Levi's",
                    modelName: "TEE UNISEX",
                    discountedPrice: "14,99",
                    fullPrice: "29,99",
                    discount: "-50%",
                    sustainability: true,
                    src: "4.webp",
                    srcBis: "4b.webp",
                },
                {
                    brandName: "Maya Deluxe",
                    modelName: "STRIPE BODICE",
                    discountedPrice: false,
                    fullPrice: "99,99",
                    discount: false,
                    sustainability: false,
                    src: "5.webp",
                    srcBis: "5b.webp",
                },
                {
                    brandName: "Esprit",
                    modelName: "MAGLIONE - BLACK",
                    discountedPrice: false,
                    fullPrice: "14,99",
                    discount: false,
                    sustainability: true,
                    src: "6.webp",
                    srcBis: "6b.webp",
                },
            ]
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
                            <img class="first" src="/img/1.webp">
                            <img class="second" src="/img/1b.webp">
                        </figure>
                        <div class="heart">&hearts;</div>
                        <ul class="mini-cards">
                            <li class="red-card" :class="product.discount !== false ? '' : 'd-none'">
                                {{ product.discount }}
                            </li>
                            <li class="green-card" :class="product.sustainability !== false ? '' : 'd-none'">
                                Sostenibilità
                            </li>
                        </ul>
                    </div>
                    <p class="brand-name">{{ product.brandName }}</p>
                    <p class="model-name">{{ product.modelName }}</p>
                    <div class="price">
                        <span class="discounted-price" :class="product.discount !== false ? '' : 'd-none'">
                            {{ product.discountedPrice }}&euro;
                        </span>
                        <span :class="product.discount !== false ? 'full-price' : 'discounted-price'">
                            {{ product.fullPrice }}&euro;
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
.main-content .col {
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
    display: flex;
    flex-direction: row;
    gap: 3px;
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