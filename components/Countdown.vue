<template>
  <div
    class="flex flex-col lg:flex-row gap-2 sm:gap-10 justify-center items-center lg:items-start"
  >
    <div class="flex gap-0 sm:gap-10">
      <div class="flex flex-col items-center justify-center gap-4 w-32">
        <p class="countdown-text xcond">
          {{ formatTime(time.days) }}
        </p>
        <p class="font-semibold">Days</p>
      </div>
      <p class="text-9xl leading-[0.75]">:</p>
      <div class="flex flex-col items-center justify-center gap-4 w-32">
        <p class="countdown-text xcond">
          {{ formatTime(time.hours) }}
        </p>
        <p class="font-semibold">Hours</p>
      </div>
    </div>
    <p class="hidden lg:flex text-9xl leading-[0.75]">:</p>
    <div class="flex gap-0 sm:gap-10">
      <div class="flex flex-col items-center justify-center gap-4 w-32">
        <p class="countdown-text xcond">
          {{ formatTime(time.minutes) }}
        </p>
        <p class="font-semibold">Minutes</p>
      </div>
      <p class="text-9xl leading-[0.75]">:</p>
      <div class="flex flex-col items-center justify-center gap-4 w-32">
        <p class="countdown-text xcond">
          {{ formatTime(time.seconds) }}
        </p>
        <p class="font-semibold">Seconds</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RosesCountdown",
  props: {
    date: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      time: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },
  mounted() {
    this.countdown();
  },
  methods: {
    countdown() {
      const countDownDate = new Date(this.date).getTime();
      const x = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        this.time.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.time.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        this.time.minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60),
        );
        this.time.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance < 0) {
          clearInterval(x);
          this.time.days = 0;
          this.time.hours = 0;
          this.time.minutes = 0;
          this.time.seconds = 0;
        }
      }, 1000);
    },
    formatTime(value) {
      return value < 10 ? "0" + value : value;
    },
  },
};
</script>
