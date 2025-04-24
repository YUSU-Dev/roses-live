<template>
  <div>
    <HeroBanner
      title="CONTRIBUTORS"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_Homepage.png"
    />
    <div class="body">
      <div class="container mx-auto py-28 gap-6">
        <p>
          The Roses Live website represents a collaborative effort between
          staff, students, and alumni from the
          <a
            class="text-roses-red hover:underline"
            href="https://go.yorksu.org/vHmb9FY"
            target="_blank"
          >
            University of York Students' Union</a
          >
          and
          <a
            class="text-roses-red hover:underline"
            href="https://go.yorksu.org/4GpEEUC"
            target="_blank"
          >
            Lancaster University Students' Union</a
          >. We would like to thank the following people for their contributions
          to the website:
        </p>
        <ul class="list-disc pl-8">
          <li>
            <a
              class="text-roses-red hover:underline"
              href="https://github.com/YUSU-Dev"
              target="_blank"
              >York Students' Union Digital and Communications Team</a
            >
          </li>
          <li>
            <a
              class="text-roses-red hover:underline"
              href="https://github.com/YSTV"
              target="_blank"
              >YSTV Computing Team</a
            >
          </li>
          <li>
            <a
              class="text-roses-red hover:underline"
              href="https://github.com/UniversityRadioYork"
              target="_blank"
              >URY Computing Team</a
            >
          </li>
          <li>
            <a
              class="text-roses-red hover:underline"
              href="https://github.com/rosesmedia"
              target="_blank"
              >Roses Student Developer Forum</a
            >
          </li>
          <li>York SU Media Committee</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import HeroBanner from "~/components/HeroBanner.vue";

export default { name: "ContributorsPage", components: { HeroBanner } };
useHead({
  title: "Contributor",
});
</script>
