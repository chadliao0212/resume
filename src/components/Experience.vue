<template>
    <v-card flat tile>
       <v-card-title>
            {{experience.title}}
        </v-card-title>
        <v-card-text
            :key="index"
            v-for="(payload,index) in experience.payload" 
            :color="payload.color" 
            small>
            <div>
                <span class="pr-4">{{payload.company}}</span>{{payload.duration}}
            </div>
            <div>
                {{payload.jobTitle}}
            </div>
            <div class="mt-4" v-for="(project, pIndex) in payload.projects" :key="pIndex">
                <strong>{{project.title}}</strong>
                <div>{{project.content}}</div>
            </div>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    props: ['experience']
}
</script>