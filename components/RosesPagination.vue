<template>
  <div class="flex gap-1">
    <button
      v-if="page > 3"
      aria-label="Go back to the first page"
      class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
      @click="updatePage(1)"
    >
      <i class="fa-solid fa-angles-left"></i>
    </button>
    <button
      v-if="page > 1"
      aria-label="Go back one page"
      class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
      @click="updatePage(page - 1)"
    >
      <i class="fa-solid fa-arrow-left"></i>
    </button>
    <button
      v-for="selectablePage in paginationRange()"
      :key="selectablePage"
      :class="{ '!bg-roses-red text-white': selectablePage === page }"
      class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
      @click="updatePage(selectablePage)"
    >
      {{ selectablePage }}
    </button>
    <button
      v-if="page < totalPages"
      aria-label="Go forward one page"
      class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
      @click="updatePage(page + 1)"
    >
      <i class="fa-solid fa-arrow-right"></i>
    </button>
    <button
      v-if="totalPages > 3 && page < totalPages - 2"
      aria-label="Go to the last page"
      class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
      @click="updatePage(totalPages)"
    >
      <i class="fa-solid fa-angles-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "RosesPagination",
  props: {
    page: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  emits: ["update:page"],
  methods: {
    updatePage(newPage) {
      this.$emit("update:page", newPage);
    },
    paginationRange() {
      const range = [];
      if (this.totalPages <= 3) {
        for (let i = 1; i <= this.totalPages; i++) {
          range.push(i);
        }
      } else if (this.page === 1) {
        range.push(1, 2, 3);
      } else if (this.page === this.totalPages) {
        range.push(this.totalPages - 2, this.totalPages - 1, this.totalPages);
      } else {
        range.push(this.page - 1, this.page, this.page + 1);
      }
      return range.filter((i) => i > 0 && i <= this.totalPages);
    },
  },
};
</script>
