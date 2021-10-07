<template>
  <div class="home">
    <section>
      <Carrousel />
    </section>

    <section>
      <FilterButton @filter="handleFilter" />
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-fifth" style="width: 10%; align-self: center;">
            <strong>
              ORDENAR
            </strong>
          </div>
          <div class="column is-one-quarter">
            <b-select placeholder="Selecione" v-model="selected" expanded>
              <option value="price">Preço</option>
              <option value="createdAt">Lançamento</option>
            </b-select>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="padding: 2rem 3rem;">
      <div class="container">
        <div class="columns is-multiline">
          <div
            v-for="(card, index) in cards"
            :key="`${card.title}${index}`"
            class="column is-one-quarter"
          >
            <Card :card="card" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Api from "@/services/api.js";
import Carrousel from "@/components/Carrousel.vue";
import Card from "@/components/Card.vue";
import FilterButton from "@/components/FilterButton.vue";

export default {
  name: "Home",
  components: { Carrousel, Card, FilterButton },
  data() {
    return {
      selected: "createdAt",
      filter: null,
      cards: []
    };
  },
  watch: {
    selected(newValue) {
      this.loadCards({ title: this.filter, orderBy: newValue });
    }
  },
  created() {
    this.loadCards({ orderBy: this.selected });
  },
  methods: {
    loadCards(queryParams) {
      this.cards = Api.getCards(queryParams);
    },
    handleFilter(title) {
      this.filter = title;
      this.loadCards({ title, orderBy: this.selected });
    }
  }
};
</script>
