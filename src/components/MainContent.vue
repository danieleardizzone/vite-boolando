<script></script>

<template>
    <main class="main-content">
        <div class="container">
            <div class="row">
                <div class="col col-1" v-for="n in 6" :key="n">
                    <div class="card">
                        <figure class="card-image">
                            <img class="first" src="/img/1.webp">
                            <img class="second" src="/img/1b.webp">
                        </figure>
                        <div class="heart">&hearts;</div>
                        <ul class="mini-cards">
                            <li class="red-card">-50%</li>
                            <li class="green-card">Sostenibilità</li>
                        </ul>
                    </div>
                    <p class="brand-name">Levi's</p>
                    <p class="model-name">RELAXED FIT TEE UNISEX</p>
                    <div class="price">
                        <span class="actual-price">14,99&euro;</span>
                        <span class="full-price">29,99&euro;</span>
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

.actual-price {
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