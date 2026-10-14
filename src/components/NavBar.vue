<template>
  <nav class="navbar navbar-expand bg-body-clay">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Primeira geração</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/geracao2">Segunda geração</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/geracao3">Terceira geração</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.bg-body-clay {
  background-color: #f5f4f4;
}

.nav-link {
  position: relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 10%;
  width: 80%;
  height: 2px;
  background-color: #7b2cbf;
  opacity: 1;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.2s ease;
}

.nav-link:hover::after {
  transform: scaleX(0.7);
}
.nav-link:hover {
  color: #7b2cbf;
}
</style>
