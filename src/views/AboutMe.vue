<template>
    <v-row no-gutters>
        <v-col cols="12" sm="6" md="6">
            <v-card id="view-about"
                flat
                tile
                color="#121212"
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
        </v-col>
        <v-col cols="12" sm="6" md="6">
            <experience :experience="aboutMe.experience" />
            <skill :skills="aboutMe.skills" />
            <connection :connection="aboutMe.connection" />
        </v-col>
    </v-row>
</template>
<script>
import Data from '@/data/about.me.json'
import Experience from '@/components/Experience.vue';
import Skill from '@/components/Skill.vue';
import Connection from '@/components/Connection.vue';

export default {
    data: () => ({
        tabs: null,
        aboutMe: Data
    }),
    components: { 
        experience: Experience,
        skill: Skill,
        connection: Connection
    }
}
</script>