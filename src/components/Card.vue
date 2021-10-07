<template>
  <div
    class="card"
    style="
    height: 360px;
    border-radius: 5px;
    padding: 0;"
  >
    <div v-if="card.description" class="card-content">
      <div class="card-body">
        <div class="card-icon">
          <b-icon pack="fas" :icon="`${card.icon}`" size="is-large" />
        </div>
        <div>
          <span class="title is-5">{{ card.title }}</span>
        </div>
        <div class="card-text">
          <p>
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
    <div v-else class="card-without-description">
      <div class="card-body">
        <div class="card-icon">
          <b-icon pack="fas" :icon="`${card.icon}`" size="is-large" />
        </div>
        <div>
          <span class="title is-5">{{ card.title }}</span>
        </div>
      </div>
    </div>
    <div class="footer-card">
      <div class="footer-value">
        <span>R$ {{ card.price }}</span>
      </div>
      <div class="footer-button">
        <router-link style="color: white" :to="`/details/${card.id}`">Saiba mais</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.card-content {
  display: flex;
  text-align: center;
  min-height: 86%;
}

.card-without-description {
  display: flex;
  text-align: center;
  min-height: 86%;
  justify-content: center;
  align-items: center;
}

.card-icon {
  margin-top: 10px;
  margin-bottom: 20px;
}

.card-text {
  margin-top: 40px;
  font-size: 13px;
}

.footer-card {
  display: flex;
  justify-content: space-around;
  background-color: #ff6d01;
  height: 40px;
  padding: 8px;
  color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-top: 10px;
}

.button-router {
  margin-left: 75px;
  font-size: 18px;
  font-weight: 500;
}
</style>
