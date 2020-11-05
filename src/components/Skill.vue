<template>
    <v-card flat tile>
        <v-card-title>
            {{skills.title}}
        </v-card-title>
        <div v-for="(skill, index) in skills.payload" :key="index">
            <v-card-text class="pt-0 pb-0">
                {{skill.name}}
            </v-card-text>
            <v-card-text class="pt-0">
                <span v-for="(item, sIndex) in skill.items" :key="sIndex">
                    {{item}} <span v-if="skill.items.length-1 !== sIndex">/</span>
                </span>
            </v-card-text>
        </div>
    </v-card>
</template>
<script>
export default {
    props: ["skills"]
}
</script>