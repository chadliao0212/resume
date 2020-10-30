<template>
    <!-- <div > -->
        <v-card id="view-about"
            color="basil"
            flat
            tile
            >
            <v-img
                height="300"
                src="@/assets/about.me.jpeg"
            ></v-img>
            <v-card-text>
                <div>{{aboutMe.name}} {{aboutMe.englishName}} {{aboutMe.birthday}}</div>
                <div v-html="aboutMe.description"></div>
            </v-card-text>
        </v-card>
    <!-- </div> -->
</template>
<script>
import Data from '@/data/about.me.json'
export default {
    data: () => ({
        tabs: null,
        aboutMe: Data
    })
}
</script>