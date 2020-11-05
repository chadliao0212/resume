<template>
    <div>
        <project-card v-for="(project, index) in projects" :project="project" :key="index"></project-card>
    </div>
</template>
<script>
import { data } from '@/data/projects.json';
import ProjectCard from '@/components/ProjectCard';
export default {
    data: () => ({
        projects: data,
    }),
    components: {
        "project-card": ProjectCard
    }
}
</script>