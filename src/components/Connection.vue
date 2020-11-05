<template>
    <v-card flat tile>
        <v-card-title>{{connection.title}}</v-card-title>
        <v-card-text class="pt-0 pb-0" v-for="(items, index) in connection.payload" :key="index">
            <v-icon>{{items.icon}}</v-icon>{{items.name}}:{{items.content}}
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    props: ["connection"]
}
</script>