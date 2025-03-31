<template>
  <div>
    <div class="flex flex-col items-end justify-end">
      <a
        href="javascript:void(0)"
        class="flex gap-2 bg-roses-red text-white px-6 md:px-3 py-2 text-center hover:bg-roses-red-dark transition duration-200 ease-in-out"
        @click="togglePopUp()"
      >
        <CalendarPlus />
      </a>
    </div>
    <Teleport to="#teleports">
      <AddToCalendarModal
        :modal-closed="modalClosed"
        :start-date="startDate"
        :end-date="endDate"
        :title="title"
        :description="description"
        :location="location"
        @close="modalClosed = true"
      />
    </Teleport>
  </div>
</template>
<script>
import AddToCalendarModal from "../components/addToCalendarModal.vue";
import { CalendarPlus } from "lucide-vue-next";
export default {
  name: "AddToCalendar",
  components: {
    CalendarPlus,
    AddToCalendarModal,
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
  data() {
    return {
      modalClosed: true,
    };
  },
  methods: {
    togglePopUp() {
      this.modalClosed = !this.modalClosed;
      console.log(this.modalClosed);
    },
  },
};
</script>
