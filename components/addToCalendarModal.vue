<template>
  <div
    v-if="!modalClosed"
    id="error-modal"
    class="modal z-50 flex items-start"
    aria-label="Error Modal"
    tabindex="-1"
    role="dialog"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">Add to Calendar</h2>
          <button
            type="button"
            class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-dismiss="modal"
            aria-label="Close"
            @click="$emit('close')"
          >
            <svg
              class="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="modal-body">
          <a
            :href="googleCalendarLink"
            target="_blank"
            class="flex gap-2 bg-roses-red text-white px-6 md:px-3 py-2 text-center hover:bg-roses-red-dark transition duration-200 ease-in-out"
            ><CalendarPlus /><span>Add to Google Calendar</span></a
          >
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="flex gap-2 bg-roses-red text-white px-6 md:px-3 py-2 text-center hover:bg-roses-red-dark transition duration-200 ease-in-out"
            data-dismiss="modal"
            @click="$emit('close')"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { CalendarPlus } from "lucide-vue-next";

export default {
  name: "AddToCalendarModal",
  components: {
    CalendarPlus,
  },
  props: {
    modalClosed: {
      type: Boolean,
      default: true,
    },
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
  emits: ["close"],
  computed: {
    formattedStartDate() {
      return this.startDate.replace(/[-:]/g, "").slice(0, 15);
    },
    formattedEndDate() {
      return this.endDate.replace(/[-:]/g, "").slice(0, 15);
    },
    googleCalendarLink() {
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${this.title}&dates=${this.formattedStartDate}/${this.formattedEndDate}&ctz=UTC&details=${this.description}&location=${this.location}&sf=true&output=xml`;
    },
  },
};
</script>
