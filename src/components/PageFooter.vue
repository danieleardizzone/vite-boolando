<script></script>

<template>
    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col footer_col-1">
                    <h3>Boolando s.r.l.</h3>
                    <ul class="information">
                        <li>Informazioni legali</li>
                        <li>Informativa sulla privacy</li>
                        <li>Diritto di recesso</li>
                    </ul>
                </div>
                <div class="col footer_col-2">
                    <h3>trovaci anche su</h3>
                    <ul class="social">
                        <li>T</li>
                        <li>F</li>
                        <li>I</li>
                        <li>P</li>
                        <li>Y</li>
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