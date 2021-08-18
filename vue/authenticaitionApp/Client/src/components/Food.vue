<template>
  <div>
    <Triangle :imageUrl="getImageUrl('food.jpg')" :height="'500px'" />
    <div class="card-columns">
      <div class="card">
        <img class="card-img-top" src="../assets/Gold-Class-Menu-Cheese-Crackers-t.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Gold Class Menu</h5>
          <span class="badge badge-pill badge-warning">GOLD</span>
          <p class="card-text">Crafted with care, focussed on flavour</p>
          <a href="#" class="btn btn-primary">Order</a>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="../assets/Vrewards-Exclusive-Food-and-Beverage-Offers-t.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Vrewards Exclusive Combos</h5>
          <span class="badge badge-pill badge-primary">EXCL</span>
          <p class="card-text">Save 20% at the Candy Bar with Vrewards</p>
          <a href="#" class="btn btn-primary">Order</a>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="../assets/Vjunior-Experiences-t.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Vjunior Menu</h5>
          <span class="badge badge-pill badge-success">VJNR</span>
          <p class="card-text">Food and drinks that will keep every tummy satisfied</p>
          <a href="#" class="btn btn-primary">Order</a>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="../assets/Chicken-Sliders-t.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Meals made for the movies</h5>
          <span class="badge badge-pill badge-info">STND</span>
          <p class="card-text">Fresh and ready in minutes from the Candy Bar</p>
          <a href="#" class="btn btn-primary">Order</a>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="../assets/The-Bucket-Boss-t.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">The Bucket Boss</h5>
          <span class="badge badge-pill badge-secondary">SNR</span>
          <p class="card-text">Savour it...dropped over a pile of crunchin' potato gems!</p>
          <a href="#" class="btn btn-primary">Order</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Triangle from '@/components/Triangle';
export default {
  components: {
    Triangle,
  },
  methods: {
    getImageUrl: function(imgPath) {
      return require(`../assets/${imgPath}`);   
    }
  }
};
</script>

<style scoped>
.card-columns {
  column-count: 2;
  margin: 5rem;
  padding-left: 10rem;
  padding-right: 10rem;
}
</style>