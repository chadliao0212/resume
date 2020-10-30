<template>
    <v-app-bar
        id="app-bar"
        dark
        fixed
        dense
    >
        <v-toolbar-title class="font-weight-black">CHAD LIAO</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn
            class="d-none d-sm-flex"
            v-for="(btn, index) in buttons"
            :key="index"
            text
            @click="jumpPage(btn.link)"
        >
            <span>{{btn.text}}</span>
        </v-btn>
    </v-app-bar>
</template>
<script>
export default {
    data: () => ({
        buttons: [{
            text: '首頁',
            link: '/home-page'
        }, {
            text: '關於我',
            link: '/about-me'
        }, {
            text: '關於專案',
            link: '/about-project'
        }]
    }),
    methods: {
        jumpPage(link) {
            this.$router.push(link)
        }
    }
}
</script>