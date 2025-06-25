// Actualizar el estado global de la aplicación
let currentUser = null
let currentPage = 1
let currentSection = "novedades"
let currentMonth = new Date().getMonth()
let currentYear = new Date().getFullYear()

// Datos mock actualizados con imágenes por género
const mockData = {
  users: {
    "afiliado@test.com": {
      type: "afiliado",
      name: "Juan Pérez",
      email: "afiliado@test.com",
      phone: "+54 11 1234-5678",
      genres: ["Rock", "Jazz", "Tango"],
      favoriteEvents: [1, 3],
      attendingEvents: [1, 2],
      eventHistory: [4, 5],
      usedBenefits: [1, 2],
    },
    "empresa@test.com": {
      type: "empresa",
      name: "Empresa Musical SA",
      email: "empresa@test.com",
      ownEvents: [1, 3], // Eventos propios de la empresa
      ownBenefits: [1], // Beneficios propios de la empresa
    },
    "admin@test.com": {
      type: "admin",
      name: "Administrador",
      email: "admin@test.com",
    },
  },

  // Imágenes por género
  genreImages: {
    rock: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1GMNYbY19i8wfENiGt6brnICTDjz5Rllhjw&s",
    jazz: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJKotPo05RIknT-cU771K2gwXh_j-Nu4CwQ&s",
    clasica: "https://musicaclasica.com.ar/wp-content/uploads/92213804_212123373455654_8855503586826649600_n.jpg",
    folclore: "https://www.el1digital.com.ar/wp-content/uploads/2024/08/folclore-2.webp",
    tango: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBUdDX4_Tl56fqYz63upmxdtT56Y3HPBtwHg&s",
    general: "/placeholder.svg?height=300&width=500",
    benefit: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJkDWNWnyww-fIfsnVJrKR0KmjjqpWxxNJw&s",
    metting: "https://img.freepik.com/vector-gratis/concepto-dormitorio-estudiantil-hobby-simbolos-fiesta-ilustracion-vectorial-plana_1284-84762.jpg?semt=ais_hybrid&w=740",
    marcha: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNW6JjwXzpONRsvm6KWMeDW--4HwabfTijvw&s",
  },

  news: [
    {
      id: 1,
      title: "Nuevo Concierto de Rock Nacional",
      type: "evento",
      date: "2025-09-17",
      location: "Buenos Aires",
      genre: "rock",
      description: "Gran concierto con las mejores bandas de rock nacional.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1GMNYbY19i8wfENiGt6brnICTDjz5Rllhjw&s",
    },
    {
      id: 2,
      title: "Descuento en Instrumentos Musicales",
      type: "beneficio",
      date: "2026-02-10",
      location: "Córdoba",
      genre: "general",
      description: "30% de descuento en instrumentos para afiliados.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJkDWNWnyww-fIfsnVJrKR0KmjjqpWxxNJw&s",
    },
    {
      id: 3,
      title: "Festival de Jazz en Rosario",
      type: "evento",
      date: "2024-03-01",
      location: "Rosario",
      genre: "jazz",
      description: "Festival internacional de jazz con artistas reconocidos.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJKotPo05RIknT-cU771K2gwXh_j-Nu4CwQ&s",
    },
    {
      id: 4,
      title: "Taller de Composición Musical",
      type: "evento",
      date: "2024-02-20",
      location: "Mendoza",
      genre: "clasica",
      description: "Taller gratuito para afiliados sobre composición.",
      image: "https://musicaclasica.com.ar/wp-content/uploads/92213804_212123373455654_8855503586826649600_n.jpg",
    },
    {
      id: 5,
      title: "Beneficio en Estudios de Grabación",
      type: "beneficio",
      date: "2024-02-12",
      location: "Buenos Aires",
      genre: "general",
      description: "50% de descuento en horas de estudio.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJkDWNWnyww-fIfsnVJrKR0KmjjqpWxxNJw&s",
    },
    {
      id: 6,
      title: "Concierto de Música Folclórica",
      type: "evento",
      date: "2024-03-15",
      location: "Córdoba",
      genre: "folclore",
      description: "Celebración del folclore argentino.",
      image: "https://www.el1digital.com.ar/wp-content/uploads/2024/08/folclore-2.webp",
    },
  ],

  events: [
    {
      id: 1,
      title: "Concierto de Rock Nacional",
      type: "concierto",
      date: "2026-02-15T20:00",
      location: "Teatro Colón, Buenos Aires",
      genre: "rock",
      description: "Gran concierto con las mejores bandas de rock nacional.",
      attendees: 150,
      favorites: 45,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1GMNYbY19i8wfENiGt6brnICTDjz5Rllhjw&s",
      active: true,
      creator: "empresa@test.com",
    },
    {
      id: 2,
      title: "Reunión Mensual del Sindicato",
      type: "reunion",
      date: "2026-02-20T18:00",
      location: "Sede Central, Buenos Aires",
      genre: "general",
      description: "Reunión mensual para tratar temas importantes.",
      attendees: 80,
      favorites: 12,
      image: "https://img.freepik.com/vector-gratis/concepto-dormitorio-estudiantil-hobby-simbolos-fiesta-ilustracion-vectorial-plana_1284-84762.jpg?semt=ais_hybrid&w=740",
      active: true,
      creator: "admin@test.com",
    },
    {
      id: 3,
      title: "Festival de Jazz",
      type: "concierto",
      date: "2024-03-01T19:30",
      location: "Centro Cultural, Rosario",
      genre: "jazz",
      description: "Festival internacional de jazz.",
      attendees: 200,
      favorites: 67,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJKotPo05RIknT-cU771K2gwXh_j-Nu4CwQ&s",
      active: true,
      creator: "empresa@test.com",
    },
    {
      id: 4,
      title: "Marcha por los Derechos de los Músicos",
      type: "marcha",
      date: "2024-01-15T16:00",
      location: "Plaza de Mayo, Buenos Aires",
      genre: "general",
      description: "Marcha pacífica por mejores condiciones laborales.",
      attendees: 300,
      favorites: 89,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNW6JjwXzpONRsvm6KWMeDW--4HwabfTijvw&s",
      active: true,
      creator: "admin@test.com",
    },
    {
      id: 5,
      title: "Taller de Composición",
      type: "taller",
      date: "2024-01-20T14:00",
      location: "Conservatorio, Córdoba",
      genre: "clasica",
      description: "Taller gratuito sobre técnicas de composición.",
      attendees: 25,
      favorites: 18,
      image: "https://musicaclasica.com.ar/wp-content/uploads/92213804_212123373455654_8855503586826649600_n.jpg",
      active: true,
      creator: "admin@test.com",
    },
    {
      id: 6,
      title: "Milonga en San Telmo",
      type: "concierto",
      date: "2024-03-10T21:00",
      location: "Plaza Dorrego, Buenos Aires",
      genre: "tango",
      description: "Tradicional milonga al aire libre con orquesta en vivo.",
      attendees: 120,
      favorites: 35,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBUdDX4_Tl56fqYz63upmxdtT56Y3HPBtwHg&s",
      active: true,
      creator: "admin@test.com",
    },
  ],

  benefits: [
    {
      id: 1,
      title: "Descuento en Instrumentos",
      company: "Casa de Música SA",
      discount: "30%",
      description: "Descuento en guitarras, bajos y amplificadores.",
      validUntil: "2024-12-31",
      category: "instrumentos",
      active: true,
      creator: "empresa@test.com",
    },
    {
      id: 2,
      title: "Estudio de Grabación",
      company: "Sound Studio",
      discount: "50%",
      description: "Descuento en horas de estudio y mezcla.",
      validUntil: "2024-06-30",
      category: "servicios",
      active: true,
      creator: "admin@test.com",
    },
    {
      id: 3,
      title: "Clases de Música",
      company: "Academia Musical",
      discount: "25%",
      description: "Descuento en clases particulares de cualquier instrumento.",
      validUntil: "2024-12-31",
      category: "educacion",
      active: true,
      creator: "admin@test.com",
    },
    {
      id: 4,
      title: "Equipos de Audio",
      company: "Pro Audio",
      discount: "40%",
      description: "Descuento en micrófonos, interfaces y monitores.",
      validUntil: "2024-09-30",
      category: "equipos",
      active: true,
      creator: "admin@test.com",
    },
  ],

  // Lista de géneros musicales disponibles
  genres: ["Rock", "Jazz", "Clásica", "Folclore", "Tango", "Pop", "Electrónica", "Hip Hop", "Reggae", "Metal"],
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
  loadNovedades()
  generateCalendar()
  loadEvents()
  loadBenefits()
  setupEventListeners()
})

function initializeApp() {
  // Verificar si hay usuario logueado en localStorage
  const savedUser = localStorage.getItem("currentUser")
  if (savedUser) {
    currentUser = JSON.parse(savedUser)
    updateUIForLoggedUser()
  } else {
    // Si no hay usuario logueado, ocultar opciones de trámites
    updateTramitesOptions()
  }
}

function setupEventListeners() {
  // Navegación
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const section = this.dataset.section
      showSection(section)
    })
  })

  // Login/Logout
  document.getElementById("login-btn").addEventListener("click", () => {
    document.getElementById("login-modal").style.display = "block"
  })

  document.getElementById("logout-btn").addEventListener("click", logout)

  // Formulario de login
  document.getElementById("login-form").addEventListener("submit", handleLogin)

  // Filtros
  document.getElementById("location-filter").addEventListener("change", applyFilters)
  document.getElementById("genre-filter").addEventListener("change", applyFilters)
  document.getElementById("date-filter").addEventListener("change", applyFilters)
  document.getElementById("clear-filters").addEventListener("click", clearFilters)

  // Paginación
  document.getElementById("prev-page").addEventListener("click", () => changePage(-1))
  document.getElementById("next-page").addEventListener("click", () => changePage(1))

  // Calendario
  document.getElementById("prev-month").addEventListener("click", () => changeMonth(-1))
  document.getElementById("next-month").addEventListener("click", () => changeMonth(1))

  // Crear evento
  document.getElementById("create-event-btn").addEventListener("click", () => {
    document.getElementById("create-event-modal").style.display = "block"
  })

  document.getElementById("create-event-form").addEventListener("submit", handleCreateEvent)

  // Trámites
  document.getElementById("tramite-tipo").addEventListener("change", function () {
    const documentosGroup = document.getElementById("documentos-group")
    if (this.value === "afiliacion") {
      documentosGroup.style.display = "block"
    } else {
      documentosGroup.style.display = "none"
    }
  })

  document.getElementById("tramites-form").addEventListener("submit", handleTramiteSubmit)

  // Editar perfil - géneros musicales
  document.getElementById("edit-genres-btn").addEventListener("click", showEditGenres)
  document.getElementById("save-genres-btn").addEventListener("click", saveGenres)
  document.getElementById("cancel-genres-btn").addEventListener("click", cancelEditGenres)

  // Editar perfil - eventos favoritos
  document.getElementById("edit-favorites-btn").addEventListener("click", showEditFavorites)
  document.getElementById("save-favorites-btn").addEventListener("click", saveFavorites)
  document.getElementById("cancel-favorites-btn").addEventListener("click", cancelEditFavorites)

  // Editar evento
  document.getElementById("edit-event-form").addEventListener("submit", handleEditEvent)

  // Editar beneficio
  document.getElementById("edit-benefit-form").addEventListener("submit", handleEditBenefit)

  // Cerrar modales
  document.querySelectorAll(".close").forEach((closeBtn) => {
    closeBtn.addEventListener("click", function () {
      this.closest(".modal").style.display = "none"
    })
  })

  // Cerrar modal al hacer click fuera
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none"
    }
  })
}

function showSection(sectionName) {
  // Ocultar todas las secciones
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active")
  })

  // Mostrar la sección seleccionada
  document.getElementById(sectionName).classList.add("active")

  // Actualizar navegación
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
  })
  document.querySelector(`[data-section="${sectionName}"]`).classList.add("active")

  currentSection = sectionName

  // Cargar contenido específico de la sección
  switch (sectionName) {
    case "perfil":
      loadProfile()
      break
  }
}

function handleLogin(e) {
  e.preventDefault()
  const email = document.getElementById("email").value
  const userType = document.getElementById("user-type").value

  // Simulación de login
  if (mockData.users[email]) {
    currentUser = mockData.users[email]
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
    updateUIForLoggedUser()
    document.getElementById("login-modal").style.display = "none"
    document.getElementById("login-form").reset()
  } else {
    alert("Usuario no encontrado")
  }
}

function logout() {
  currentUser = null
  localStorage.removeItem("currentUser")
  updateUIForLoggedUser()
  showSection("novedades")
}

function updateUIForLoggedUser() {
  const loginBtn = document.getElementById("login-btn")
  const logoutBtn = document.getElementById("logout-btn")
  const perfilLink = document.getElementById("perfil-link")
  const createEventBtn = document.getElementById("create-event-btn")

  if (currentUser) {
    loginBtn.style.display = "none"
    logoutBtn.style.display = "block"

    // Mostrar perfil solo para afiliados
    if (currentUser.type === "afiliado") {
      perfilLink.style.display = "block"
    } else {
      perfilLink.style.display = "none"
    }

    // Mostrar botón crear evento para empresas y admins
    if (currentUser.type === "empresa" || currentUser.type === "admin") {
      createEventBtn.style.display = "block"
    } else {
      createEventBtn.style.display = "none"
    }

    logoutBtn.innerHTML = `<i class="fas fa-sign-out-alt"></i> ${currentUser.name}`

    // Actualizar opciones de trámites
    updateTramitesOptions()
  } else {
    loginBtn.style.display = "block"
    logoutBtn.style.display = "none"
    perfilLink.style.display = "none"
    createEventBtn.style.display = "none"

    // Actualizar opciones de trámites para no logueados
    updateTramitesOptions()
  }

  // Recargar eventos para mostrar botones de favoritos/asistencia
  if (currentSection === "eventos") {
    loadEvents()
  }

  // Recargar beneficios para mostrar botones de solicitud
  if (currentSection === "beneficios") {
    loadBenefits()
  }

  // Recargar novedades para mostrar corazones de favoritos
  if (currentSection === "novedades") {
    loadNovedades()
  }
}

// Función para actualizar opciones de trámites según usuario
function updateTramitesOptions() {
  const tramiteTipo = document.getElementById("tramite-tipo")
  const loggedOnlyOptions = document.querySelectorAll(".logged-only")

  if (!currentUser) {
    // Si no hay usuario logueado, ocultar todas las opciones excepto afiliación
    loggedOnlyOptions.forEach((option) => {
      option.style.display = "none"
    })
  } else {
    // Si hay usuario logueado, mostrar todas las opciones
    loggedOnlyOptions.forEach((option) => {
      option.style.display = "block"
    })
  }
}

function loadNovedades() {
  const grid = document.getElementById("novedades-grid")
  const itemsPerPage = 4
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const filteredNews = applyNewsFilters()
  const pageNews = filteredNews.slice(startIndex, endIndex)

  grid.innerHTML = ""

  pageNews.forEach((item) => {
    const card = document.createElement("div")
    card.className = "news-card"

    // Asignar imagen según el género si no tiene una específica
    if (!item.image && item.genre) {
      item.image = mockData.genreImages[item.genre.toLowerCase()] || mockData.genreImages.general
    } else if (!item.image) {
      item.image = mockData.genreImages.general
    }

    // Si tiene imagen, añadir clase para fondo
    card.classList.add("news-card-with-bg")

    // Añadir imagen de fondo
    const bgImage = document.createElement("img")
    bgImage.src = item.image
    bgImage.className = "news-card-bg"
    bgImage.alt = ""
    card.appendChild(bgImage)

    // Añadir overlay para mejorar legibilidad
    const overlay = document.createElement("div")
    overlay.className = "card-overlay"
    card.appendChild(overlay)

    // Añadir corazón para favoritos si es un evento y el usuario es afiliado
    if (item.type === "evento" && currentUser && currentUser.type === "afiliado") {
      const eventId = mockData.events.find((e) => e.title === item.title)?.id
      if (eventId) {
        const isFavorite = currentUser.favoriteEvents.includes(eventId)
        const favoriteIcon = document.createElement("i")
        favoriteIcon.className = `fas fa-heart favorite-icon ${isFavorite ? "active" : ""}`
        favoriteIcon.dataset.eventId = eventId
        favoriteIcon.addEventListener("click", function () {
          toggleFavorite(Number.parseInt(this.dataset.eventId))
          this.classList.toggle("active")
        })
        card.appendChild(favoriteIcon)
      }
    }

    card.innerHTML += `
            <div class="card-content">
                <h3>${item.title}</h3>
                <div class="meta">
                    <span><i class="fas fa-calendar"></i> ${formatDate(item.date)}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${item.location}</span>
                    <span><i class="fas fa-music"></i> ${item.genre}</span>
                </div>
                <p>${item.description}</p>
                <div style="margin-top: 1rem;">
                    <span class="badge ${item.type === "evento" ? "badge-event" : "badge-benefit"}">
                        ${item.type === "evento" ? "Evento" : "Beneficio"}
                    </span>
                </div>
            </div>
        `
    grid.appendChild(card)
  })

  updatePagination(filteredNews.length, itemsPerPage)
}

function applyNewsFilters() {
  const locationFilter = document.getElementById("location-filter").value
  const genreFilter = document.getElementById("genre-filter").value
  const dateFilter = document.getElementById("date-filter").value

  return mockData.news.filter((item) => {
    // Corregir el filtro de ubicación para que funcione correctamente
    const locationMatch = !locationFilter || item.location === locationFilter
    const genreMatch = !genreFilter || item.genre === genreFilter
    const dateMatch = !dateFilter || item.date === dateFilter

    return locationMatch && genreMatch && dateMatch
  })
}

function applyFilters() {
  currentPage = 1
  loadNovedades()
}

function clearFilters() {
  document.getElementById("location-filter").value = ""
  document.getElementById("genre-filter").value = ""
  document.getElementById("date-filter").value = ""
  applyFilters()
}

function changePage(direction) {
  const filteredNews = applyNewsFilters()
  const totalPages = Math.ceil(filteredNews.length / 4)

  currentPage += direction
  if (currentPage < 1) currentPage = 1
  if (currentPage > totalPages) currentPage = totalPages

  loadNovedades()
}

function updatePagination(totalItems, itemsPerPage) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  document.getElementById("page-info").textContent = `Página ${currentPage} de ${totalPages}`

  document.getElementById("prev-page").disabled = currentPage === 1
  document.getElementById("next-page").disabled = currentPage === totalPages
}

function generateCalendar() {
  const calendar = document.getElementById("calendar")
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]
  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]

  document.getElementById("current-month").textContent = `${monthNames[currentMonth]} ${currentYear}`

  calendar.innerHTML = ""

  // Agregar encabezados de días
  dayNames.forEach((day) => {
    const dayHeader = document.createElement("div")
    dayHeader.className = "calendar-day header"
    dayHeader.textContent = day
    calendar.appendChild(dayHeader)
  })

  // Obtener primer día del mes y días en el mes
  const firstDay = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate()

  // Días del mes anterior
  for (let i = firstDay - 1; i >= 0; i--) {
    const dayElement = document.createElement("div")
    dayElement.className = "calendar-day other-month"
    dayElement.textContent = daysInPrevMonth - i
    calendar.appendChild(dayElement)
  }

  // Días del mes actual
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div")
    dayElement.className = "calendar-day"
    dayElement.textContent = day

    // Verificar si hay eventos en este día
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    const eventsOnDay = mockData.events.filter((event) => event.date.startsWith(dateStr) && event.active)

    if (eventsOnDay.length > 0) {
      dayElement.classList.add("has-event")

      // Añadir eventos al día
      eventsOnDay.forEach((event) => {
        const eventElement = document.createElement("div")
        eventElement.className = "calendar-event"
        eventElement.textContent = event.title
        eventElement.dataset.eventId = event.id
        eventElement.addEventListener("click", () => showEventDetails(event.id))
        dayElement.appendChild(eventElement)
      })
    }

    calendar.appendChild(dayElement)
  }

  // Completar con días del siguiente mes
  const totalCells = calendar.children.length
  const remainingCells = 42 - totalCells // 6 semanas * 7 días

  for (let day = 1; day <= remainingCells; day++) {
    const dayElement = document.createElement("div")
    dayElement.className = "calendar-day other-month"
    dayElement.textContent = day
    calendar.appendChild(dayElement)
  }
}

// Función para mostrar detalles de un evento
function showEventDetails(eventId) {
  const event = mockData.events.find((e) => e.id === eventId)
  if (!event) return

  const modal = document.getElementById("event-detail-modal")

  // Establecer la imagen como fondo del modal
  const modalContent = modal.querySelector(".modal-content")
  modalContent.style.backgroundImage = `url('${event.image || mockData.genreImages[event.genre.toLowerCase()] || mockData.genreImages.general}')`
  modalContent.style.backgroundSize = "cover"
  modalContent.style.backgroundPosition = "center"
  modalContent.classList.add("with-bg-image")

  document.getElementById("event-detail-title").textContent = event.title
  document.getElementById("event-detail-date").textContent = formatDateTime(event.date)
  document.getElementById("event-detail-location").textContent = event.location
  document.getElementById("event-detail-genre").textContent = event.genre
  document.getElementById("event-detail-description").textContent = event.description

  // Ya no necesitamos mostrar la imagen separada
  document.getElementById("event-detail-image").style.display = "none"

  // Acciones según tipo de usuario
  const actionsContainer = document.getElementById("event-detail-actions")
  actionsContainer.innerHTML = ""

  if (currentUser) {
    if (currentUser.type === "afiliado") {
      const isFavorite = currentUser.favoriteEvents.includes(event.id)
      const isAttending = currentUser.attendingEvents.includes(event.id)

      actionsContainer.innerHTML = `
        <button class="btn-favorite ${isFavorite ? "active" : ""}" onclick="toggleFavorite(${event.id})">
          <i class="fas fa-heart"></i> ${isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        </button>
        <button class="btn-attend ${isAttending ? "active" : ""}" onclick="toggleAttendance(${event.id})">
          <i class="fas fa-check"></i> ${isAttending ? "No asistiré" : "Asistiré"}
        </button>
      `
    } else if (
      currentUser.type === "admin" ||
      (currentUser.type === "empresa" && event.creator === currentUser.email)
    ) {
      actionsContainer.innerHTML = `
        <button class="btn-edit" onclick="openEditEventModal(${event.id})">
          <i class="fas fa-edit"></i> Editar evento
        </button>
        <button class="btn-delete" onclick="toggleEventStatus(${event.id})">
          ${event.active ? '<i class="fas fa-eye-slash"></i> Ocultar evento' : '<i class="fas fa-eye"></i> Mostrar evento'}
        </button>
      `
    }
  }

  modal.style.display = "block"
}

function changeMonth(direction) {
  currentMonth += direction
  if (currentMonth < 0) {
    currentMonth = 11
    currentYear--
  } else if (currentMonth > 11) {
    currentMonth = 0
    currentYear++
  }
  generateCalendar()
}

function loadEvents() {
  const container = document.getElementById("events-container")
  container.innerHTML = ""

  // Filtrar eventos futuros y activos
  const now = new Date()
  const upcomingEvents = mockData.events.filter((event) => new Date(event.date) >= now && event.active)

  upcomingEvents.forEach((event) => {
    const eventCard = document.createElement("div")
    eventCard.className = "event-card"

    // Añadir imagen de fondo
    if (!event.image && event.genre) {
      event.image = mockData.genreImages[event.genre.toLowerCase()] || mockData.genreImages.general
    }

    eventCard.style.backgroundImage = `url('${event.image}')`
    eventCard.classList.add("with-bg-image")

    let actionsHTML = ""
    if (currentUser) {
      if (currentUser.type === "afiliado") {
        const isFavorite = currentUser.favoriteEvents.includes(event.id)
        const isAttending = currentUser.attendingEvents.includes(event.id)

        actionsHTML = `
          <div class="event-actions">
            <button class="btn-favorite ${isFavorite ? "active" : ""}" onclick="toggleFavorite(${event.id})">
              <i class="fas fa-heart"></i> ${isFavorite ? "Favorito" : "Favorito"}
            </button>
            <button class="btn-attend ${isAttending ? "active" : ""}" onclick="toggleAttendance(${event.id})">
              <i class="fas fa-check"></i> ${isAttending ? "Asistiré" : "Asistir"}
            </button>
          </div>
        `
      } else if (
        currentUser.type === "admin" ||
        (currentUser.type === "empresa" && event.creator === currentUser.email)
      ) {
        actionsHTML = `
          <div class="event-actions">
            <button class="btn-edit" onclick="openEditEventModal(${event.id})">
              <i class="fas fa-edit"></i> Editar
            </button>
            <button class="btn-delete" onclick="toggleEventStatus(${event.id})">
              <i class="fas fa-eye-slash"></i> Ocultar
            </button>
          </div>
        `
      }
    }

    eventCard.innerHTML = `
      <div class="card-overlay"></div>
      <div class="event-content">
        <div class="event-header">
          <div>
            <h4>${event.title}</h4>
            <p><i class="fas fa-calendar"></i> ${formatDateTime(event.date)}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
            <p><i class="fas fa-music"></i> ${event.genre}</p>
          </div>
          ${actionsHTML}
        </div>
        <p>${event.description}</p>
        <div class="event-stats">
          <span><i class="fas fa-users"></i> ${event.attendees} asistentes</span>
          <span><i class="fas fa-heart"></i> ${event.favorites} favoritos</span>
        </div>
      </div>
    `

    container.appendChild(eventCard)
  })
}

function toggleFavorite(eventId) {
  if (!currentUser || currentUser.type !== "afiliado") return

  const index = currentUser.favoriteEvents.indexOf(eventId)
  if (index > -1) {
    currentUser.favoriteEvents.splice(index, 1)
  } else {
    currentUser.favoriteEvents.push(eventId)
  }

  localStorage.setItem("currentUser", JSON.stringify(currentUser))

  // Recargar la sección actual
  if (currentSection === "eventos") {
    loadEvents()
  } else if (currentSection === "novedades") {
    loadNovedades()
  } else if (currentSection === "perfil") {
    loadProfile()
  }
}

function toggleAttendance(eventId) {
  if (!currentUser || currentUser.type !== "afiliado") return

  const index = currentUser.attendingEvents.indexOf(eventId)
  if (index > -1) {
    currentUser.attendingEvents.splice(index, 1)
  } else {
    currentUser.attendingEvents.push(eventId)
  }

  localStorage.setItem("currentUser", JSON.stringify(currentUser))

  // Recargar la sección actual
  if (currentSection === "eventos") {
    loadEvents()
  } else if (currentSection === "perfil") {
    loadProfile()
  }
}

function handleCreateEvent(e) {
  e.preventDefault()

  const genre = document.getElementById("event-genre").value || "general"

  const newEvent = {
    id: mockData.events.length + 1,
    title: document.getElementById("event-title").value,
    type: document.getElementById("event-type").value,
    date: document.getElementById("event-date").value,
    location: document.getElementById("event-location").value,
    genre: genre,
    description: document.getElementById("event-description").value,
    attendees: 0,
    favorites: 0,
    image: mockData.genreImages[genre.toLowerCase()] || mockData.genreImages.general,
    active: true,
    creator: currentUser.email,
  }

  mockData.events.push(newEvent)

  // Si es una empresa, añadir a sus eventos propios
  if (currentUser.type === "empresa") {
    currentUser.ownEvents = currentUser.ownEvents || []
    currentUser.ownEvents.push(newEvent.id)
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
  }

  // Agregar también a novedades
  mockData.news.unshift({
    id: mockData.news.length + 1,
    title: newEvent.title,
    type: "evento",
    date: newEvent.date.split("T")[0],
    location: newEvent.location.split(",")[1]?.trim() || newEvent.location,
    genre: newEvent.genre,
    description: newEvent.description,
    image: newEvent.image,
  })

  document.getElementById("create-event-modal").style.display = "none"
  document.getElementById("create-event-form").reset()

  loadEvents()
  generateCalendar()

  if (currentSection === "novedades") {
    loadNovedades()
  }

  alert("Evento creado exitosamente")
}

// Función para abrir el modal de edición de evento
function openEditEventModal(eventId) {
  const event = mockData.events.find((e) => e.id === eventId)
  if (!event) return

  document.getElementById("edit-event-id").value = event.id
  document.getElementById("edit-event-title").value = event.title
  document.getElementById("edit-event-type").value = event.type
  document.getElementById("edit-event-date").value = event.date
  document.getElementById("edit-event-location").value = event.location
  document.getElementById("edit-event-genre").value = event.genre
  document.getElementById("edit-event-description").value = event.description
  document.getElementById("edit-event-image").value = event.image
  document.getElementById("edit-event-active").value = event.active.toString()

  document.getElementById("edit-event-modal").style.display = "block"
}

// Función para manejar la edición de un evento
function handleEditEvent(e) {
  e.preventDefault()

  const eventId = Number.parseInt(document.getElementById("edit-event-id").value)
  const event = mockData.events.find((e) => e.id === eventId)

  if (!event) return

  // Verificar permisos
  if (currentUser.type !== "admin" && !(currentUser.type === "empresa" && event.creator === currentUser.email)) {
    alert("No tienes permisos para editar este evento")
    return
  }

  // Actualizar evento
  event.title = document.getElementById("edit-event-title").value
  event.type = document.getElementById("edit-event-type").value
  event.date = document.getElementById("edit-event-date").value
  event.location = document.getElementById("edit-event-location").value
  event.genre = document.getElementById("edit-event-genre").value
  event.description = document.getElementById("edit-event-description").value

  // Si se proporciona una imagen, usarla; de lo contrario, usar la imagen por defecto del género
  const imageInput = document.getElementById("edit-event-image").value
  event.image = imageInput || mockData.genreImages[event.genre.toLowerCase()] || mockData.genreImages.general

  event.active = document.getElementById("edit-event-active").value === "true"

  // Actualizar también en novedades si existe
  const newsItem = mockData.news.find((n) => n.type === "evento" && n.title === event.title)

  if (newsItem) {
    newsItem.title = event.title
    newsItem.date = event.date.split("T")[0]
    newsItem.location = event.location.split(",")[1]?.trim() || event.location
    newsItem.genre = event.genre
    newsItem.description = event.description
    newsItem.image = event.image
  }

  document.getElementById("edit-event-modal").style.display = "none"

  // Recargar datos
  loadEvents()
  generateCalendar()

  if (currentSection === "novedades") {
    loadNovedades()
  }

  alert("Evento actualizado exitosamente")
}

// Función para cambiar el estado de un evento (activo/inactivo)
function toggleEventStatus(eventId) {
  const event = mockData.events.find((e) => e.id === eventId)

  if (!event) return

  // Verificar permisos
  if (currentUser.type !== "admin" && !(currentUser.type === "empresa" && event.creator === currentUser.email)) {
    alert("No tienes permisos para modificar este evento")
    return
  }

  // Cambiar estado
  event.active = !event.active

  // Recargar datos
  loadEvents()
  generateCalendar()

  if (currentSection === "novedades") {
    loadNovedades()
  }

  // Cerrar modal si está abierto
  document.getElementById("event-detail-modal").style.display = "none"

  alert(`Evento ${event.active ? "activado" : "desactivado"} exitosamente`)
}

function loadBenefits() {
  const grid = document.getElementById("benefits-grid")
  grid.innerHTML = ""

  // Filtrar beneficios activos
  const activeBenefits = mockData.benefits.filter((benefit) => benefit.active)

  activeBenefits.forEach((benefit) => {
    const benefitCard = document.createElement("div")
    benefitCard.className = "benefit-card"

    let actionButton = ""
    let adminActions = ""

    if (currentUser) {
      if (currentUser.type === "afiliado") {
        actionButton = `<button class="btn-primary" onclick="requestBenefit(${benefit.id})">Solicitar Cupón</button>`
      } else if (
        currentUser.type === "admin" ||
        (currentUser.type === "empresa" && benefit.creator === currentUser.email)
      ) {
        adminActions = `
          <div class="admin-actions">
            <button class="btn-edit" onclick="openEditBenefitModal(${benefit.id})">
              <i class="fas fa-edit"></i> Editar
            </button>
            <button class="btn-delete" onclick="toggleBenefitStatus(${benefit.id})">
              <i class="fas fa-eye-slash"></i> Ocultar
            </button>
          </div>
        `
      }
    }

    benefitCard.innerHTML = `
      <h3>${benefit.title}</h3>
      <div class="benefit-discount">${benefit.discount} OFF</div>
      <p><strong>Empresa:</strong> ${benefit.company}</p>
      <p>${benefit.description}</p>
      <p><strong>Válido hasta:</strong> ${formatDate(benefit.validUntil)}</p>
      <div style="margin-top: 1rem;">
        ${actionButton}
      </div>
      ${adminActions}
    `

    grid.appendChild(benefitCard)
  })
}

// Función para abrir el modal de edición de beneficio
function openEditBenefitModal(benefitId) {
  const benefit = mockData.benefits.find((b) => b.id === benefitId)
  if (!benefit) return

  document.getElementById("edit-benefit-id").value = benefit.id
  document.getElementById("edit-benefit-title").value = benefit.title
  document.getElementById("edit-benefit-company").value = benefit.company
  document.getElementById("edit-benefit-discount").value = benefit.discount
  document.getElementById("edit-benefit-description").value = benefit.description
  document.getElementById("edit-benefit-valid").value = benefit.validUntil
  document.getElementById("edit-benefit-active").value = benefit.active.toString()

  document.getElementById("edit-benefit-modal").style.display = "block"
}

// Función para manejar la edición de un beneficio
function handleEditBenefit(e) {
  e.preventDefault()

  const benefitId = Number.parseInt(document.getElementById("edit-benefit-id").value)
  const benefit = mockData.benefits.find((b) => b.id === benefitId)

  if (!benefit) return

  // Verificar permisos
  if (currentUser.type !== "admin" && !(currentUser.type === "empresa" && benefit.creator === currentUser.email)) {
    alert("No tienes permisos para editar este beneficio")
    return
  }

  // Actualizar beneficio
  benefit.title = document.getElementById("edit-benefit-title").value
  benefit.company = document.getElementById("edit-benefit-company").value
  benefit.discount = document.getElementById("edit-benefit-discount").value
  benefit.description = document.getElementById("edit-benefit-description").value
  benefit.validUntil = document.getElementById("edit-benefit-valid").value
  benefit.active = document.getElementById("edit-benefit-active").value === "true"

  // Actualizar también en novedades si existe
  const newsItem = mockData.news.find((n) => n.type === "beneficio" && n.title === benefit.title)

  if (newsItem) {
    newsItem.title = benefit.title
    newsItem.description = benefit.description
  }

  document.getElementById("edit-benefit-modal").style.display = "none"

  // Recargar datos
  loadBenefits()

  if (currentSection === "novedades") {
    loadNovedades()
  }

  alert("Beneficio actualizado exitosamente")
}

// Función para cambiar el estado de un beneficio (activo/inactivo)
function toggleBenefitStatus(benefitId) {
  const benefit = mockData.benefits.find((b) => b.id === benefitId)

  if (!benefit) return

  // Verificar permisos
  if (currentUser.type !== "admin" && !(currentUser.type === "empresa" && benefit.creator === currentUser.email)) {
    alert("No tienes permisos para modificar este beneficio")
    return
  }

  // Cambiar estado
  benefit.active = !benefit.active

  // Recargar datos
  loadBenefits()

  if (currentSection === "novedades") {
    loadNovedades()
  }

  alert(`Beneficio ${benefit.active ? "activado" : "desactivado"} exitosamente`)
}

function requestBenefit(benefitId) {
  if (!currentUser || currentUser.type !== "afiliado") {
    alert("Debes ser afiliado para solicitar beneficios")
    return
  }

  alert("Cupón solicitado exitosamente. Recibirás el código por email.")

  // Agregar a beneficios utilizados
  if (!currentUser.usedBenefits.includes(benefitId)) {
    currentUser.usedBenefits.push(benefitId)
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
  }
}

function handleTramiteSubmit(e) {
  e.preventDefault()

  // Simular envío de trámite
  setTimeout(() => {
    document.getElementById("tramite-success-modal").style.display = "block"
    document.getElementById("tramites-form").reset()
    document.getElementById("documentos-group").style.display = "none"
  }, 1000)
}

function loadProfile() {
  if (!currentUser || currentUser.type !== "afiliado") {
    document.getElementById("perfil").innerHTML =
      '<div class="container"><p>Debes iniciar sesión como afiliado para ver tu perfil.</p></div>'
    return
  }

  // Datos personales
  document.getElementById("personal-data").innerHTML = `
        <p><strong>Nombre:</strong> ${currentUser.name}</p>
        <p><strong>Email:</strong> ${currentUser.email}</p>
        <p><strong>Teléfono:</strong> ${currentUser.phone}</p>
    `

  // Gustos musicales
  document.getElementById("musical-preferences").innerHTML = `
        <div class="genre-tags">
            ${currentUser.genres.map((genre) => `<span class="genre-tag">${genre}</span>`).join("")}
        </div>
    `

  // Historial de eventos
  const eventHistory = mockData.events.filter((event) => currentUser.eventHistory.includes(event.id))
  document.getElementById("events-history").innerHTML = eventHistory
    .map(
      (event) => `
        <div class="history-item">
            <h4>${event.title}</h4>
            <p>${formatDateTime(event.date)} - ${event.location}</p>
        </div>
    `,
    )
    .join("")

  // Eventos favoritos
  const favoriteEvents = mockData.events.filter((event) => currentUser.favoriteEvents.includes(event.id))
  document.getElementById("favorite-events").innerHTML = favoriteEvents
    .map(
      (event) => `
        <div class="history-item">
            <h4>${event.title}</h4>
            <p>${formatDateTime(event.date)} - ${event.location}</p>
        </div>
    `,
    )
    .join("")

  // Beneficios utilizados
  const usedBenefits = mockData.benefits.filter((benefit) => currentUser.usedBenefits.includes(benefit.id))
  document.getElementById("used-benefits").innerHTML = usedBenefits
    .map(
      (benefit) => `
        <div class="history-item">
            <h4>${benefit.title}</h4>
            <p>${benefit.company} - ${benefit.discount} descuento</p>
        </div>
    `,
    )
    .join("")
}

// Funciones auxiliares
function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("es-AR")
}

function formatDateTime(dateString) {
  const date = new Date(dateString)
  return date.toLocaleString("es-AR")
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none"
}

// Funciones para editar perfil
function showEditGenres() {
  document.getElementById("edit-genres-modal").style.display = "block"
}

function saveGenres() {
  const selectedGenres = Array.from(document.querySelectorAll("#edit-genres-modal input[type='checkbox']:checked")).map(
    (checkbox) => checkbox.value,
  )

  currentUser.genres = selectedGenres
  localStorage.setItem("currentUser", JSON.stringify(currentUser))

  document.getElementById("edit-genres-modal").style.display = "none"
  loadProfile()
}

function cancelEditGenres() {
  document.getElementById("edit-genres-modal").style.display = "none"
}

function showEditFavorites() {
  document.getElementById("edit-favorites-modal").style.display = "block"
}

function saveFavorites() {
  const selectedFavorites = Array.from(
    document.querySelectorAll("#edit-favorites-modal input[type='checkbox']:checked"),
  ).map((checkbox) => Number.parseInt(checkbox.value))

  currentUser.favoriteEvents = selectedFavorites
  localStorage.setItem("currentUser", JSON.stringify(currentUser))

  document.getElementById("edit-favorites-modal").style.display = "none"
  loadProfile()
}

function cancelEditFavorites() {
  document.getElementById("edit-favorites-modal").style.display = "none"
}

// Agregar estilos CSS adicionales
const additionalStyles = `
.badge {
    padding: 0.25rem 0.5rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: bold;
}

.badge-event {
    background: #e3f2fd;
    color: #1976d2;
}

.badge-benefit {
    background: #e8f5e8;
    color: #2e7d32;
}

.genre-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.genre-tag {
    background: #667eea;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.9rem;
}

.history-item {
    border-bottom: 1px solid #eee;
    padding: 1rem 0;
}

.history-item:last-child {
    border-bottom: none;
}

.event-stats {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    font-size: 0.9rem;
    color: #666;
}

.btn-favorite.active {
    background: #dc3545;
    color: white;
}

.btn-attend.active {
    background: #007bff;
    color: white;
}

.news-card-with-bg {
  position: relative;
  overflow: hidden;
}

.news-card-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  z-index: 0;
}

.news-card h3,
.news-card .meta,
.news-card p,
.news-card .badge {
  position: relative;
  z-index: 1;
}

.favorite-icon {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.2rem;
  color: #ccc;
  cursor: pointer;
  z-index: 2;
}

.favorite-icon.active {
  color: #dc3545;
}

.calendar-event {
  background-color: rgba(0, 123, 255, 0.2);
  color: #007bff;
  padding: 2px 5px;
  margin-top: 2px;
  border-radius: 5px;
  font-size: 0.8rem;
  cursor: pointer;
}

.admin-actions {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
}

.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Adjust the opacity as needed */
    z-index: 1; /* Ensure it's above the background image */
}

.news-card .card-content {
    position: relative;
    z-index: 2; /* Ensure the content is above the overlay */
    color: white; /* Make sure the text is visible on the dark overlay */
}

.event-card.with-bg-image {
    position: relative;
    overflow: hidden;
    color: white;
}

.event-card.with-bg-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
}

.event-card .event-content {
    position: relative;
    z-index: 2;
}

.modal-content.with-bg-image {
    color: white;
    text-shadow: 1px 1px 2px black;
}
`

// Agregar estilos adicionales al head
const styleSheet = document.createElement("style")
styleSheet.textContent = additionalStyles
document.head.appendChild(styleSheet)
