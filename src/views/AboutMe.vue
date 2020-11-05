<template>
    <div id="about-me">
        <v-card class="about-me-block" height="264px" tile flat>
            <div class="d-flex d-sm-none">設計，<br>讓世界有趣</div>
            <div class="d-none d-sm-flex">設計，讓世界有趣</div>
        </v-card>
        <v-row no-gutters>
            <v-col cols="12" sm="6" md="6">
                <v-card flat tile>
                    <v-card-text>
                    <v-img
                        height="300"
                        src="@/assets/about.me.jpeg"
                    ></v-img>
                    </v-card-text>
                    <v-card-text>
                        <div>{{aboutMe.name}} {{aboutMe.englishName}}</div>
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
    </div>
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
<style lang="scss">
#about-me {
    > .row {
        justify-content: center;
        margin-top: 264px;

        .v-card {
            .v-card__title {
                color: #F633A8;
                font-size: 14px;
                font-weight: 500;
            }

            .v-card__text {
                color: #333333;
            }
        }
        @media screen and (min-width: 600px) {
            > div {
                max-width: 360px;
            }
        }  
    }

    .about-me-block {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 36px;
        font-weight: 500;
        background: #222222;
        color: #FFFFFF;
    }


}
</style>