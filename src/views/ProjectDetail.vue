<template>
    <v-card v-if="projectDetail" flat tile>
        <v-img height="360px" v-if="projectDetail.backgroundImage" :src="require(`@/assets/${projectDetail.backgroundImage}`)">
            <v-card-title class="pa-0 mb-8">{{projectDetail.title}}</v-card-title>
            <v-card-subtitle class="pa-0  mt-0">目標</v-card-subtitle>
            <v-card-text class="pa-0 mb-8">{{projectDetail.target}}</v-card-text>

            <v-card-subtitle class="pa-0">專案連結</v-card-subtitle>
            <v-card-text class="pa-0">
                <a :href="projectDetail.projectLink['href']" target='_blank'>{{projectDetail.projectLink['title']}}</a>
             </v-card-text>
        </v-img>
        <div v-for="(item, index) in projectDetail.payload" :key="index">
            <template v-if="item.tag == 'text'">
                <v-card-title>{{item.title}}</v-card-title>
                <v-card-text v-html="item.context"></v-card-text>
            </template>
            <template v-if="item.tag == 'image'">
                <v-img :src="require(`@/assets/${item.src}`)"></v-img>
            </template>
        </div>
    </v-card>
</template>
<script>
import allProject from '@/data/project-details';

export default {
    data: () => ({
        projectDetail: null
    }),
    mounted () {
        this.projectDetail = allProject[this.$route.query.id];
    }
}
</script>
<style lang="scss" scoped>
.v-card {
    > .v-image {
        .v-card__title {
            color: #ffffff;
            font-size: 24px;
        }
        .v-card__subtitle {
            color: rgba(255, 255, 255, 0.5);;
        }
        .v-card__text {
            color: #ffffff;
            font-weight: 500;
        }

        padding: 96px 48px 0px 48px;

        @media screen and (max-width: 600px) {
            padding: 96px 24px 0px 24px;
        }
    }
}
</style>