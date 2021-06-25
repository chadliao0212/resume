<template>
  <div
    class="flex project-card"
    :class="{ 'flex-row-reverse': reverse }"
    style="margin: 160px 0"
  >
    <div style=" height: 560px;background: black; width: 560px"></div>
    <div
      class="flex flex-1 justify-center items-center flex-col"
      :style="[
        reverse ? { 'margin-right': '160px' } : { 'margin-left': '160px' },
      ]"
    >
      <div>
        <slot name="title"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["project", "reverse"],
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
