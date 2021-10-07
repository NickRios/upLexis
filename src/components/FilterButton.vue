<template>
  <div class="container">
    <div class="columns" style="text-align: center;">
      <div class="column">
        <button
          v-for="(value, index) in mockData"
          :key="index"
          class="button is-primary is-outlined"
          @click="filterCards(value.slug)"
        >
          <div>
            <div>
              <span>
                <b-icon pack="fas" :icon="`${value.icon}`" size="is-medium" />
              </span>
            </div>
            <span>
              {{ value.name }}
            </span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterButton",
  data() {
    return {
      mockData: [
        {
          icon: "globe",
          name: "Todos",
          slug: null
        },
        {
          icon: "briefcase",
          name: "Profissional",
          slug: "Profissional"
        },
        {
          icon: "university",
          name: "Reguladores",
          slug: "Reguladores"
        },
        {
          icon: "tree",
          name: "Sócio Ambiental",
          slug: "Sócio Ambiental"
        },
        {
          icon: "gavel",
          name: "Jurídico",
          slug: "Jurídico"
        },
        {
          icon: "ban",
          name: "Listas Restritiva",
          slug: "Listas Restritivas"
        },
        {
          icon: "globe-americas",
          name: "Mídia / Internet",
          slug: "Mídia / Internet"
        },
        {
          icon: "gem",
          name: "Bens e Imóveis",
          slug: "Bens e Imóveis"
        },
        {
          icon: "male",
          name: "Cadastro",
          slug: "Cadastro"
        },
        {
          icon: "piggy-bank",
          name: "Financeiro",
          slug: "Financeiro"
        }
      ]
    };
  },
  methods: {
    filterCards(name) {
      this.$emit("filter", name);
    }
  }
};
</script>

<style lang="scss">
.button.is-primary.is-outlined {
  height: 80px;
  width: 130px;
  margin-top: 15px;
  font-size: 13px;
  color: #575757;
  background-color: #f9f0f0;
  border-radius: 3px;
  border: 0.1px solid #e3e2e2;
  cursor: pointer;
}

.button-class:hover {
  color: white;
  background-color: #ff6d01;
  border-radius: 3px;
  border: 0.1px solid #ff6d01;
}
</style>
