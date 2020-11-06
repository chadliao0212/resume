<template>
    <v-card
        class="mx-auto fill-height"
        tile flat
        height="360px"
        >
        <v-img :src="require(`@/assets/${project.image}`)" height="100%">
            <v-container>
                <v-card-title v-html="project.title" class='pa-0 mb-6'></v-card-title>
                <v-chip
                    v-for="(category, cIndex) in project.categories"
                    :key="cIndex"
                    class="mr-2 mb-4"
                    small
                    :color="category.color"
                >
                    {{category.name}}
                </v-chip>
                    
                <v-card-text class="pa-0" v-html="project.content"></v-card-text>
            </v-container>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#ffffff" outlined @click="toProjectDetail(project.id)">詳細內容</v-btn>
            </v-card-actions>
        </v-img>
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
<style lang="scss" scoped>
.v-card {
    margin-top: 32px;
    padding: 0px 16px;
    .container {
        padding: 88px 120px 0px 120px;
        color: #ffffff;
    }
    .v-card__actions {
        position: absolute;
        right: 24px;
        bottom: 24px;
        padding: 0px;
    }
    @media screen and (max-width: 600px) {
        padding: 16px;
        margin-top: 0;

        .container {
            padding: 76px 18px 0px 18px;
        }
        .v-card__actions {
            right: 18px;
            bottom: 18px;
        }
    }

    
    
}
</style>