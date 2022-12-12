<template>
  <TemplateDefault class="bg overflow-x-hidden">
    <div class="relative min-h-screen">
      <div
        class="fixed top-0 z-10 flex min-h-screen w-full flex-col items-center justify-center space-y-10 overflow-hidden"
      >
        <h1 class="logo-1 textXLarge neon relative z-10">
          Devaki by Bonishbil
        </h1>
        <a
          href="https://www.premint.xyz/devaki1/"
          target="_Blank"
          class="font-cursive mt-10 inline-block bg-white px-6 py-2 font-bold uppercase text-black hover:bg-yellow-500"
          >Do NOT miss out Premint</a
        >
      </div>
      <div
        id="section03"
        class="absolute left-1/2 bottom-10 z-20 flex h-16 -translate-x-1/2 animate-bounce items-center justify-center"
      >
        <a href="#section04" class=""
          ><span />
          <div class="pt-20">Scroll</div></a
        >
      </div>
    </div>
    <div class="relative z-20">
      <img src="/bg.jpg" alt="" class="w-full" />
    </div>
    <AtomSection
      tp="large"
      bp="large"
      id="section04"
      class="bg relative z-20 text-center text-white"
    >
      <AtomInner class="pt-24">
        <div
          class="flex w-full flex-col items-center space-y-10 py-10 lg:flex-row lg:space-x-10 lg:space-y-0 xl:space-x-16"
        >
          <div class="mx-auto max-w-5xl space-y-4 font-serif">
            <h2
              class="neon text-4xl font-bold uppercase text-n-pink sm:text-5xl md:text-6xl 2xl:text-7xl 2xl:leading-none"
            >
              A journey of 4 martially edged tribes consisting of 999 Unique
              pieces.
            </h2>
          </div>
        </div>
      </AtomInner>
    </AtomSection>

    <AtomSection fullWidth>
      <AtomInner fullWidth>
        <OrganismSlider />
      </AtomInner>
    </AtomSection>
  </TemplateDefault>
</template>
