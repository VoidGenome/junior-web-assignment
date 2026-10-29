<template>
  <div class="hero">
    <v-img
      src="/img/fieldbackground.png"
      alt="Background"
      height="calc(100vh - 194px)"
      min-height="400"
      max-height="900"
      cover
      gradient="to bottom, rgba(0,0,0,.35), rgba(0,0,0,.55)"
    />

    <div class="hero-content d-flex flex-column align-center justify-end text-center text-white pb-10">
      <div class="mb-5">
        <v-card
        rounded="circle"
        class="profile-img overflow-hidden"
        elevation="0"
        >
        <v-img
            src="/img/marci.png"
            alt="Marci Metzger"
            cover
            aspect-ratio="1"
        />
        </v-card>
      </div>
      <div class="my-2" style="font-size:20px;">206-919-6886</div>
      <div class="text-subtitle-1 mb-1">MARCI METZGER - THE RIDGE REALTY GROUP</div>
      <div
        class="hero-title"
        >
        PAHRUMP REALTOR
      </div>
      <v-btn size="large" color="white" rounded="pill"  href="tel:+2069196886">
        <span class="pa-2 text-black" style="font-size: 20px;">
            Call Now
        </span>
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
}
.hero-content {
  position: absolute;
  inset: 0;
}
.profile-img {
  width: 300px;
  max-width: 100%;      
  aspect-ratio: 1;  
}
.hero-title {
  font-size: clamp(1.75rem, 7vw, 3.125rem);
  line-height: 1.15;
  margin-bottom: 24px;
  overflow-wrap: anywhere;
}

@media (max-width: 375px) {
  .hero-title {
    font-size: 1.5rem; 
    margin-bottom: 16px;
  }
}

@media (max-width: 600px) {
  .profile-img {
    width: 200px;     
  }
}
</style>