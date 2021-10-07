<template>
  <div class="card">
    <div class="card-content">
      <div class="card-body">
        <div class="card-icon">
          <b-icon pack="fas" :icon="`${card.icon}`" type="is-primary" size="is-large" />
        </div>
        <div>
          <span class="title is-5">{{ card.title }}</span>
        </div>
        <div v-if="card.description" class="card-text">
          <p>
            {{ card.description }}
          </p>
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
.card {
  border-radius: 5px;
  padding: 0;

  .card-content {
    height: 300px;
    width: 100%;
    padding: 5px;

    .card-body {
      width: 100%;
      height: 100%;
      display: flex;
      text-align: center;
      flex-direction: column;
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

    .button-router {
      margin-left: 75px;
      font-size: 18px;
      font-weight: 500;
    }
  }
}
</style>
