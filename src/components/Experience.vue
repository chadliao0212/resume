<template>
    <v-card flat tile color="#121212">
       <v-card-title>
            {{experience.title}}
        </v-card-title>
        <v-card-text
        :key="index"
                    v-for="(payload,index) in experience.payload" 
                    :color="payload.color" 
                    small>
            <!-- <v-timeline
                class="pt-0"
                align-top
                dark
                dense>
                <v-timeline-item -->
                    
                    <div>
                        {{payload.duration}}
                    </div>
                    <div>
                        <strong class="pr-4">{{payload.company}}</strong>
                        {{payload.jobTitle}}
                    </div>
                    <div class="mt-4" v-for="(project, pIndex) in payload.projects" :key="pIndex">
                        <strong>{{project.title}}</strong>
                        <div>{{project.content}}</div>
                    </div>
                <!-- </v-timeline-item>
            </v-timeline> -->
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    props: ['experience']
}
</script>