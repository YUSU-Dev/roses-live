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
          <h2 class="modal-title">Add to Calendar | {{ title }}</h2>
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
            ><NuxtImg
              src="/assets/img//gcal-logo.webp"
              alt=""
              class="w-8 h-8"
            /><span>Add to Google Calendar</span></a
          >
          <a
            :href="outlookLink"
            target="_blank"
            class="flex gap-2 bg-roses-red text-white px-6 md:px-3 py-2 text-center hover:bg-roses-red-dark transition duration-200 ease-in-out"
            ><NuxtImg
              src="/assets/img/outlook-logo.png"
              alt=""
              class="w-8 h-8"
            /><span>Add to Outlook</span></a
          ><a
            :href="appleLink"
            target="_blank"
            class="flex gap-2 bg-roses-red text-white px-6 md:px-3 py-2 text-center hover:bg-roses-red-dark transition duration-200 ease-in-out"
            ><NuxtImg
              src="/assets/img/icloud-logo.png"
              alt=""
              class="w-8 h-8"
            /><span>Add to Apple Calendar</span></a
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
import { ICalCalendar } from "ical-generator";
export default {
  name: "AddToCalendarModal",
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
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Roses 2025 | ${this.title}&dates=${this.formattedStartDate}/${this.formattedEndDate}&ctz=UTC&details=${this.description}&location=${this.location}&sf=true&output=xml`;
    },
    outlookLink() {
      const startDateTime = encodeURIComponent(this.startDate);
      const endDateTime = encodeURIComponent(this.endDate);
      const subject = encodeURIComponent(this.title);
      const body = encodeURIComponent(this.description);
      const location = encodeURIComponent(this.location);

      return `https://outlook.live.com/calendar/0/action/compose?startdt=${startDateTime}&enddt=${endDateTime}&subject=Roses 2025 | ${subject}&body=${body}&location=${location}&allday=false&rru=addevent`;
    },
    appleLink() {
      const calendar = new ICalCalendar();
      calendar.createEvent({
        start: new Date(this.startDate),
        end: new Date(this.endDate),
        summary: `Roses 2025 | ${this.title}`,
        description: this.description,
        location: this.location,
      });
      const icsFile = calendar.toString();
      const blob = new Blob([icsFile], { type: "text/calendar" });
      const url = URL.createObjectURL(blob);
      return url;
    },
  },
};
</script>
