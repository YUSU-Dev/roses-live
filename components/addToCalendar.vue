<template>
  <div class="flex flex-col items-end justify-end">
    <a
      :href="`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formattedStartDate}/${formattedEndDate}&details=${description}&location=${location}&sf=true&output=xml`"
      target="_blank"
      class="flex gap-2 bg-roses-red text-white px-6 md:px-3 py-2 text-center hover:bg-roses-red-dark transition duration-200 ease-in-out"
      ><CalendarPlus /><span class="md:hidden">Add to Google Calendar</span></a
    >
  </div>
</template>
<script>
import { CalendarPlus } from "lucide-vue-next";
export default {
  name: "AddToCalendar",
  components: {
    CalendarPlus,
  },
  props: {
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  computed: {
    formattedStartDate() {
      return this.startDate.replace(/[-:]/g, "").slice(0, 15);
    },
    formattedEndDate() {
      return this.endDate.replace(/[-:]/g, "").slice(0, 15);
    },
  },
};
</script>
