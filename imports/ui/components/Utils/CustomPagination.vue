<template>
  <paginate
    v-model="currentPage"
    :page-count="totalPages"
    :click-handler="handlePageChange"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'page'"
    :page-class="'page__numbers'"
    :active-class="'active'"
    :next-class="'page__btn'"
    :prev-class="'page__btn'"
    :break-view-class="'page__dots'"
    :break-view-link-class="'page__dots'"
  />
</template>

<script>
export default {
  props: {
    handlePageChange: Function,
    CurrentPage: Number,
    totalPages: Number,
  },
  data: () => ({
    currentPage: 1,
  }),
  mounted() {
    this.currentPage = this.CurrentPage;
  },
  watch: {
    CurrentPage(value) {
      console.log("currentPage Changed", value);
      this.currentPage = value;
    },
  },
};
</script>

<style lang="scss">
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 5rem;
  // margin: 3rem;
  border-radius: 0.6rem;
  margin-top: 5px;
  // background: #ffffff;
  box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);
  a {
    color: #29333d !important;
    text-decoration: none !important;
  }
  ul {
    list-style-type: none;
  }

  // //   &__btn {
  // //     color: #2b3641;

  // //     // pointer-events: none;

  // //     &.active {
  // //       color: red;
  // //       //   pointer-events: initial;

  // //       &:hover {
  // //         color: #29333d;
  // //       }
  // //     }
  //   }
}

.page__numbers,
.page__btn,
.page__dots {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.8rem;
  font-size: 1rem;
  cursor: pointer;
}

.page__dots {
  width: 2rem;
  height: 2rem;
  color: #29333d;
  text-decoration: none;
  cursor: initial;
}

.page__numbers {
  width: 2rem;
  height: 2rem;
  border-radius: 0.4rem;

  &:hover {
    color: #29333d;
  }

  &.active {
    color: #ffffff !important;
    background: #29333d;
    font-weight: 600;
    border: 1px solid #29333d;
  }
  &.active a {
    color: #ffffff !important;
    background: #29333d;
    font-weight: 600;
    border: 1px solid #29333d;
  }
}

.page__btn {
  background: #29333d;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  a {
    color: #fff !important;
  }
}
</style>
