<template>
  <div class="flex flex-col gap-6 lg:flex-row">
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6">
      <button
        role="button"
        :class="[
          'bg-roses-red text-white px-6 lg:px-10 py-2 rounded-full text-center hover:cursor-pointer',
          { '!bg-black !text-white': selectedDay === before },
        ]"
        @click="selectDay(before)"
      >
        Before
      </button>
      <button
        role="button"
        :class="[
          'bg-roses-red text-white px-6 lg:px-10 py-2 rounded-full text-center hover:cursor-pointer',
          { '!bg-black !text-white': selectedDay === friday },
        ]"
        @click="selectDay(friday)"
      >
        Friday
      </button>
      <button
        role="button"
        :class="[
          'bg-roses-red text-white px-6 lg:px-10 py-2 rounded-full text-center hover:cursor-pointer',
          { '!bg-black !text-white': selectedDay === saturday },
        ]"
        @click="selectDay(saturday)"
      >
        Saturday
      </button>
      <button
        role="button"
        :class="[
          'bg-roses-red text-white px-6 lg:px-10 py-2 rounded-full text-center hover:cursor-pointer',
          { '!bg-black !text-white': selectedDay === sunday },
        ]"
        @click="selectDay(sunday)"
      >
        Sunday
      </button>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:flex gap-6">
      <button
        role="button"
        :class="[
          'bg-roses-red text-white px-6 lg:px-10 py-2 rounded-full text-center hover:cursor-pointer',
          { '!bg-black !text-white': selectedDay === 'activities' },
        ]"
        @click="selectDay('activities')"
      >
        Activities
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DayFilters",
  props: {
    searchTerm: {
      type: String,
      default: "",
    },
  },
  emits: ["selectDay"],
  data() {
    return {
      selectedDay: null,
      locationId: null,
      before: {
        name: "Before",
        startsAt: "2025-03-05T00:00:00Z",
        endsAt: "2025-05-02T00:00:00Z",
      },
      friday: {
        name: "Friday",
        startsAt: "2025-05-02T00:00:00Z",
        endsAt: "2025-05-03T00:00:00Z",
      },
      saturday: {
        name: "Saturday",
        startsAt: "2025-05-03T00:00:00Z",
        endsAt: "2025-05-04T00:00:00Z",
      },
      sunday: {
        name: "Sunday",
        startsAt: "2025-05-04T00:00:00Z",
        endsAt: "2025-05-05T00:00:00Z",
      },
    };
  },
  watch: {
    searchTerm() {
      if (this.searchTerm === "" && this.selectedDay === null) {
        this.setDefaultDay();
      } else if (this.searchTerm !== "" && this.selectedDay !== "activities") {
        this.selectedDay = null;
        this.$emit("selectDay", null);
      }
    },
  },
  mounted() {
    this.locationId = this.$route.query.location;
    if (this.locationId) {
      this.selectedDay = null;
      this.$emit("selectDay", null);
    } else {
      this.setDefaultDay();
    }
  },
  methods: {
    setDefaultDay() {
      const currentDate = new Date();
      const beforeDate = new Date(this.before.endsAt);
      const fridayDate = new Date(this.friday.endsAt);
      const saturdayDate = new Date(this.saturday.endsAt);
      const sundayDate = new Date(this.sunday.endsAt);
      if (currentDate < beforeDate) {
        this.selectedDay = this.before;
      } else if (currentDate < fridayDate) {
        this.selectedDay = this.friday;
      } else if (currentDate < saturdayDate) {
        this.selectedDay = this.saturday;
      } else if (currentDate < sundayDate) {
        this.selectedDay = this.sunday;
      } else {
        this.selectedDay = this.friday;
      }
      this.$emit("selectDay", this.selectedDay);
    },
    selectDay(day) {
      this.selectedDay = day;
      this.$emit("selectDay", day);
    },
  },
};
</script>
