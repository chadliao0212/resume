<template>
    <div>
        <v-card
            v-for="(project, index) in projects"
            :key="index"
            class="mx-auto fill-height"
            dark
            max-width="400"
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
                <v-btn outlined>詳細內容</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
import { data } from '@/data/projects.json';

export default {
    data: () => ({
        projects: data,
    })
}
</script>