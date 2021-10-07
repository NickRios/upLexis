<template>
  <div class="container">
    <div class="columns">
      <b-carousel
        :autoplay="false"
        :indicator="indicator"
        :pause-text="text"
        :icon-pack="iconPack"
        :icon-prev="iconPrev"
        :icon-next="iconNext"
        class="p-0-mobile"
      >
        <b-carousel-item v-for="(item, i) in 3" :key="i">
          <section>
            <div class="columns is-multiline">
              <div class="column">
                <img class="logo-image" src="../assets/upMiner.png" alt="upMiner" />
              </div>
              <div class="separator"></div>
              <div class="column banner-head-text-content">
                <span class="banner-head-text">
                  Histórico empresarial
                </span>
              </div>
              <div class="column banner-subtext-content">
                <span class="banner-subtext">
                  O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos <br />
                  os fatos e acontecimentos relevantes de uma empresa desde o seu ano <br />
                  de fundação.
                </span>
                <div class="columns" style="margin-top: 0">
                  <div class="text-currency column is-one-fifth">
                    <span>R$</span>
                  </div>
                  <div class="text-value column is-one-fifth">
                    <span>40,00</span>
                  </div>
                  <div class="column is-one-fifth">
                    <b-button class="button-enable" @click="goToHistorico">Saiba Mais</b-button>
                  </div>
                </div>
              </div>
            </div>
            <img :src="getImgUrl(i + 1)" :alt="`${i + 1}`" />
          </section>
        </b-carousel-item>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carrousel",
  data() {
    return {
      indicator: false,
      progress: true,
      iconPack: "fas",
      iconPrev: "arrow-left",
      iconNext: "arrow-right",
      text: ""
    };
  },
  methods: {
    getImgUrl(value) {
      return require(`@/assets/images/0${value}.jpg`);
    },
    goToHistorico() {
      return (window.location.href = "/historico");
    }
  }
};
</script>
<style lang="scss">
.carousel-items {
  height: 250px;

  .carousel-item {
    justify-content: center;
    display: flex;
  }

  .logo-image {
    position: absolute;
    height: 120px;
    margin-left: 137px;
    margin-top: 10px;
  }

  .separator {
    position: absolute;
    height: 30px;
    width: 1px;
    margin-top: 70px;
    margin-left: 267px;
    background-color: white;
  }

  .banner-head-text-content {
    position: absolute;
    margin-top: 57px;
    margin-left: 265px;

    .banner-head-text {
      font-size: 20px;
      color: white;
    }
  }

  .banner-subtext-content {
    position: absolute;
    margin-top: 105px;
    margin-left: 154px;

    .banner-subtext {
      font-weight: 300;
      font-size: 14px;
      color: white;
    }
  }

  .text-currency {
    width: 2% !important;
    align-self: flex-end;
    margin-bottom: 5px;
    font-weight: 500;
    color: white;
  }

  .text-value {
    font-size: 35px;
    width: 22% !important;
    color: white;
  }

  .button-enable {
    background-color: #ff6d01;
    color: white;
    font-size: 14px;
    border-color: transparent;
    border-radius: 5px;
    height: 35px;
    width: 120px;
    margin-top: 8px;
  }
}
</style>
