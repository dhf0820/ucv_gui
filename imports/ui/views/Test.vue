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
  data: () => ({
    currentPage: 1,
    totalPages: 100,
  }),
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
      console.log(page);
    },
  },
};
</script>

<style lang="scss">
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  margin: 3rem;
  border-radius: 0.6rem;
  background: #ffffff;
  box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);
  a {
    color: #29333d !important;
    text-decoration: none !important;
  }
  ul {
    list-style-type: none;
  }

  &__btn {
    color: var(--greyLight);
    pointer-events: none;

    &.active {
      color: var(--greyDark);
      pointer-events: initial;

      &:hover {
        color: #29333d;
      }
    }
  }
}

.page__numbers,
.page__btn,
.page__dots {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.8rem;
  font-size: 1.4rem;
  cursor: pointer;
}

.page__dots {
  width: 2.6rem;
  height: 2.6rem;
  color: #29333d;
  text-decoration: none;
  cursor: initial;
}

.page__numbers {
  width: 2.6rem;
  height: 2.6rem;
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
  color: var(--greyLight);
  pointer-events: none;

  &.active {
    color: var(--greyDark);
    pointer-events: initial;

    &:hover {
      color: #29333d;
    }
  }
}
</style>
