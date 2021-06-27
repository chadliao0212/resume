<template>
  <div
    class="flex project-card"
    :class="{ 'flex-row-reverse': reverse }"
    style="margin: 160px 0"
  >
    <img width="560" :src="require(`@/assets/Home/${image}`)" />
    <div class="flex flex-1 justify-center items-center flex-col">
      <div>
        <slot name="title"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["project", "reverse", "image"],
    methods: {
      toProjectDetail(id) {
        this.$router.push({
          path: "project-detail",
          query: { id },
        });
      },
    },
  };
</script>
