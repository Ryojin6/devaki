<template>
  <header
    class="pin-x-center bg-blur-2xl custom-transition fixed top-0 z-50 w-full bg-opacity-30 px-6 scrolled:bg-black scrolled:py-2"
  >
    <div class="x mx-auto flex w-full max-w-8xl items-center justify-between">
      <g-link
        to="/"
        class="w-40 transition-all duration-300 ease-in-out scrolled:w-24 xl:w-32"
      >
        <img src="/logo.jpg" alt="" class="rounded-full" />
      </g-link>

      <div class="flex w-full items-center justify-end space-x-4 md:w-auto">
        <AtomIconTwitter
          link="https://twitter.com/DevakiOfficial"
          class="text-white hover:text-n-pink"
        />

        <!-- <AtomIconEtherscan
          link="https://etherscan.io/address/0x7ac8D18d6FbE083008b615873004826AE5F35F15#code"
          class="text-white hover:text-n-pink"
        />
        <AtomIconOpensea
          link="https://opensea.io/collection/bored-apes-ai-club"
          class="text-white hover:text-n-pink"
        /> -->
      </div>
    </div>
  </header>
</template>
