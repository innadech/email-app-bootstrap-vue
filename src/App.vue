<script>
import PageSignUp from './pages/PageSignUp.vue'

export default {
  components: {
    PageSignUp,
  },
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">
        <RouterLink to="/sign-up">Sign Up</RouterLink>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul id="elUl" class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link">
              <RouterLink to="/sign-in">Sign In</RouterLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <RouterLink to="/all-emails">All email</RouterLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <RouterLink to="/addresses">Address</RouterLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <RouterLink to="/compose">Compose</RouterLink>
            </a>
          </li>
          <li class="nav-item">
            <!-- <a
              class="nav-link disabled"
              aria-disabled="true"
              >-</a
            > -->
          </li>
          <!-- <li class="nav-item">
            <RouterLink to="/log out">Log out</RouterLink>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
  <div
    style="width: 70%; height: 600px"
    class="container-fluid mt-5 bg-light-subtle border rounded-3"
  >
    <RouterView />
    <PageSignUp />
  </div>
</template>
