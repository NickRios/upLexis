<template>
  <div class="details">
    <Carrousel />

    <section>
      <div class="container">
        <div class="columns is-multiline" style="text-align: -webkit-center;">
          <div class="button-router column is-full">
            <div style="margin-right: 10px; color: #ff6d01;">
              <b-icon pack="fas" icon="chevron-left" size="is-small" />
            </div>
            <div style="margin-top: -3px;">
              <router-link to="/">{{ card.title }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cover">
      <div class="container" style="margin-top: 30px;">
        <div class="columns is-multiline" style="text-align: -webkit-center;">
          <div class="column is-full">
            <div style="width: 80%;">
              <b-carousel
                :autoplay="true"
                :indicator="indicator"
                :pause-text="text"
                :icon-pack="iconPack"
                :icon-prev="iconPrev"
                :icon-next="iconNext"
                class="p-0-mobile"
              >
                <b-carousel-item v-for="(item, i) in 3" :key="i">
                  <section>
                    <img :src="getImgUrl(i + 1)" :alt="`${i + 1}`" />
                  </section>
                </b-carousel-item>
              </b-carousel>
              <div class="text-details">
                <span>
                  {{ card.description }}
                </span>
              </div>
              <div style="margin-top: 20px; display: flex">
                <div class="text-currency">
                  <span>R$</span>
                </div>
                <div class="text-value">
                  <span>{{ card.price }} </span>
                </div>
                <div style="margin-left: 10px">
                  <b-button class="button-enable">Habilitar</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Api from "@/services/api.js";
import Carrousel from "@/components/Carrousel.vue";
export default {
  name: "Details",
  components: { Carrousel },
  data() {
    return {
      indicator: false,
      progress: true,
      iconPack: "fas",
      iconPrev: "arrow-left",
      iconNext: "arrow-right",
      card: {},
      text: ""
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  created() {
    this.loadCard(this.id);
  },
  methods: {
    getImgUrl(value) {
      return require(`@/assets/images/0${value}.jpg`);
    },
    loadCard(id) {
      this.card = Api.getCardById(id);
    }
  }
};
</script>

<style lang="scss">
.button-router {
  display: flex;
  margin-top: 25px;
}

.text-details {
  font-size: 15px;
  color: #7a7a7a;
  text-align: justify;
  margin-top: 40px;
}

.text-currency {
  align-self: flex-end;
  text-align: start;
  margin-bottom: 9px;
  font-weight: 500;
  color: black;
}

.text-value {
  font-size: 35px;
  color: black;
  margin-left: 10px;
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
.button-enable:hover {
  background-color: #ff6d01;
  color: white;
  border-color: transparent;
}
</style>
