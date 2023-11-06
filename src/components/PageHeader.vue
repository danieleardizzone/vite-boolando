<script>

</script>

<template>
    <header class="page-header">
        <div class="container">
            <div class="row">
                <div class="col">
                    <ul class="gender">
                        <li><a href="#">Donna</a></li>
                        <li><a href="#">Uomo</a></li>
                        <li><a href="#">Bambini</a></li>
                    </ul>
                </div>
                <div class="col logo">
                    <a href="#"><img src="/img/boolean-logo.png"></a>
                </div>
                <div class="col">
                    <ul class="icons">
                        <li><a href="#">a</a></li>
                        <li><a href="#">b</a></li>
                        <li><a href="#">c</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.row {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}

.page-header {
    background-color: #FF6900;
    color: white;
    font-weight: 700;
    padding: 10px 20px;
}

.gender,
.icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.gender {
    flex-basis: calc((100%/9)*2);
}

.icons,
.logo {
    flex-basis: calc((100%/9)*1);
}

.logo {
    display: block;
}

.gender li,
.icons li {
    padding: 0 5px;
}

a {
    font-weight: 700
}
</style>