<template>
  <div class="w-full flex items-center h-10.5">
    <form :action="search" class="w-full flex items-center h-10.5">
      <label for="searchInput" class="sr-only"
        >Search for a fixture or activity</label
      >
      <input
        id="searchInput"
        ref="searchInput"
        type="text"
        class="w-full bg-light-gray px-6 py-2 rounded-s-lg border placeholder-slate-500 border-slate-300"
        placeholder="Search for a fixture or activity..."
      />
      <button
        aria-label="Search"
        class="bg-roses-red h-full flex items-center justify-center w-10 rounded-e-lg hover:cursor-pointer"
        @click.prevent="search"
      >
        <i class="fa-solid fa-magnifying-glass text-white"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FixtureSearch",
  emits: ["search"],
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    search() {
      this.searchTerm = document.getElementById("searchInput").value;
      this.$emit("search", this.searchTerm);
    },
  },
};
</script>
