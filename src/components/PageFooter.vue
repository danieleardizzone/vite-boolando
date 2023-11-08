<script></script>

<template>
    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col footer_col-1">
                    <h3>Boolando s.r.l.</h3>
                    <ul class="information">
                        <li><a href="#">
                                Informazioni legali
                            </a></li>
                        <li><a href="#">
                                Informativa sulla privacy
                            </a></li>
                        <li><a href="#">
                                Diritto di recesso
                            </a></li>
                    </ul>
                </div>
                <div class="col footer_col-2">
                    <h3>trovaci anche su</h3>
                    <ul class="social">
                        <li><a href="#">
                                <font-awesome-icon icon="fa-brands fa-x-twitter" />
                            </a></li>
                        <li><a href="#">
                                <font-awesome-icon icon="fa-brands fa-facebook" />
                            </a></li>
                        <li><a href="#">
                                <font-awesome-icon icon="fa-brands fa-instagram" />
                            </a></li>
                        <li><a href="#">
                                <font-awesome-icon icon="fa-brands fa-pinterest" />
                            </a></li>
                        <li><a href="#">
                                <font-awesome-icon icon="fa-brands fa-youtube" />
                            </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.page-footer {
    background-color: #1A1A1A;
    color: white;
    line-height: 1.8em;
}

.page-footer .row {
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
}

.footer_col-1 {
    display: flex;
    flex-direction: column;
}

.information {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.footer_col-2 {
    display: flex;
    flex-direction: column;
}

.social {
    display: flex;
    flex-direction: row;
    gap: 20px;
}
</style>