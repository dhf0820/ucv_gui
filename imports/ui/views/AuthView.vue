<template>
  <div class="auth-container">
    <div class="card">
      <div class="card-header">
        <p>Sign In</p>
        <a href="#"> Forgot password?</a>
      </div>
      <div class="card-body">
        <template>
          <form @submit="handleSubmit">
            <b-alert variant="danger" :show="alert.show">
              <p class="text-capitalize">{{ alert.msg }}</p>
            </b-alert>
            <div class="form-group">
              <input requred type="text" class="form-control" id="username" v-model="formData.username"
                aria-describedby="usernameHelp" placeholder="Enter username or email" />
              <!-- <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            > -->
            </div>
            <div class="form-group">
              <input requred v-model="formData.password" type="password" class="form-control" id="password"
                placeholder="Password" />
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label c-pointer" for="exampleCheck1">Remember Me</label>
            </div>
            <div>
              <b-spinner v-if="loading" variant="primary" />
              <button type="submit" v-else class="btn btn-success">
                Login
              </button>
            </div>
          </form>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    formData: {
      username: "dhfrench@vertisoft.com",
      password: "password",
      // username: "",
      // password: "",
    },
    loading: false,
    alert: {
      show: false,
      msg: null,
    },
  }),
  methods: {
    async handleSubmit(e) {
      try {
        e.preventDefault();
        this.loading = true;
        // const { data } = await this.$axios.post("/auth/authorize", {
        //   ...this.formData,
        // });
        const postLogin = function (username, password) {
          return new Promise((resolver, reject) => {
            Meteor.call('loginPost', username, password, (error, result) => {
              if (error) reject(error);
              resolver(result)
            });
          })
        }
        const data = await postLogin(this.formData.username, this.formData.password)
        const { facilities, token } = data;
        this.$store.dispatch("setHeader", {
          head: "Authorization",
          value: token,
        });
        // RAED_DELETE
        this.$axios.defaults.headers.common["Authorization"] = token;

        this.facilities = [...facilities];
        await this.$store.dispatch("loginUser", { ...data });
        if (this.facilities) {
          console.log(this.facilities)
          await this.$store.dispatch("setAllFacilities", this.facilities.filter(f=>f.classification == "HOSP"));
          await this.$store.dispatch("setPractices", this.facilities.filter(f=>f.classification == "CLIN"));
        }
        this.$router.push("/");
      } catch (error) {
        this.alert = { show: true, msg: "Error Occured, Try again!" };
        console.log("error", error);
        const { response } = error;
        console.log(response);
        if (response.data.status === 400) {
          this.alert = {
            show: true,
            msg: response.data.message,
          };
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-container {
  display: flex;
  margin-top: 50px;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.card-header {
  background: #d9edf7;
  color: #3a87ad;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #3a87ad !important;
    font-size: 12px;
  }
}

.card {
  width: "min(50%, 550px)";
  border: 1px solid #d9edf7;

  p {
    margin: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    .form-check {
      display: flex;
      align-items: center;
      column-gap: 10px;

      .form-check-input {
        margin-top: 0;
      }
    }
  }
}
</style>
