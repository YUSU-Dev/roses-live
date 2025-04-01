<template>
  <div>
    <HeroBanner
      title="FOOD & DRINK"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_Food_Drink.png"
    />
    <div class="body">
      <div class="py-28">
        <TextImageSection
          image="https://assets-cdn.sums.su/YU/website/img/Roses/Roses_cafe_Image.png"
          alt=""
          sub-title="Food & Drink"
        >
          <template #text>
            <p>
              Supporting Team York is hard work - but we’ve got you covered!
              We’ll have a range of food and drink options across campus to keep
              you full and hydrated across the weekend. From bagels and pizza to
              coffee and puddings, there will be plenty of tasty treats on
              offer!
            </p>
            <p>
              As well as some of your favourite on-campus venues open across the
              weekend, we’ll have our brand new Fan Zone, a temporary setup of
              food and drink stalls at the heart of the action.
            </p>
          </template>
        </TextImageSection>
      </div>
    </div>
  </div>
</template>

<script>
import HeroBanner from "~/components/HeroBanner.vue";
import TextImageSection from "~/components/TextImageSection.vue";
export default {
  name: "FoodAndDrinkPage",
  components: {
    HeroBanner,
    TextImageSection,
  },
};
</script>
