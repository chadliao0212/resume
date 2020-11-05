<template>
    <v-card
        class="mx-auto fill-height"
        dark
        >
        <v-row dense>
            <v-col cols="8">
                <v-card-title v-html="project.title"></v-card-title>
                <v-chip
                    v-for="(category, cIndex) in project.categories"
                    :key="cIndex"
                    class="ma-2"
                    small
                    :color="category.color"
                >
                    {{category.name}}
                </v-chip>
            </v-col>
            <v-col cols="4" class="d-flex align-center justify-center">
                <v-img :src="require(`@/assets/${project.image}`)"></v-img>
            </v-col>
        </v-row>
        <v-card-text v-html="project.content"></v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined @click="toProjectDetail(project.id)">詳細內容</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props: ['project'],
    methods: {
        toProjectDetail(id) {
            this.$router.push({
                path: 'project-detail',
                query: { id }
            })
        }
    }
}
</script>