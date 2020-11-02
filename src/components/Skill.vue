<template>
    <v-card flat tile color="#121212">
        <v-card-title>
            {{skills.title}}
        </v-card-title>
        <div v-for="(skill, index) in skills.payload" :key="index">
            <v-card-subtitle class="pt-0">
                {{skill.name}}
            </v-card-subtitle>
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