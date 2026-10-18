const app = document.getElementById("app");

let content = null;

async function loadContent() {
  try {
    const response = await fetch("./gold.json");

    if (!response.ok) {
      throw new Error("No se pudo cargar content.json");
    }

    content = await response.json();

    renderPage();
    initializeInteractions();

  } catch (error) {
    console.error(error);

    app.innerHTML = `
      <main class="min-h-screen bg-[#0f0f1a] text-[#f0e6d0] flex items-center justify-center px-6">
        <div class="text-center max-w-xl">
          <div class="deco-line mb-8"></div>

          <h1 class="font-serif font-bold tracking-widest uppercase text-3xl">
            Error de carga
          </h1>

          <p class="font-serif mt-5 text-[#f0e6d0]">
            No fue posible cargar el contenido del sitio.
          </p>

          <div class="deco-line mt-8"></div>
        </div>
      </main>
    `;
  }
}


function renderPage() {
  app.innerHTML = `
    ${renderNavigation()}

    <main>

      ${renderHero()}

      ${renderAbout()}

      ${renderValues()}

      ${renderServices()}

      ${renderCTA()}

      ${renderContact()}

      ${renderScheduleAndDirection()}

    </main>

    ${renderFooter()}
  `;
}


/* =========================================================
   NAVIGATION
========================================================= */

function renderNavigation() {
  return `
    <nav
      class="fixed top-0 left-0 w-full z-50
             bg-[#0f0f1a]/95
             border-b-2 border-[#d4af37]
             px-6 md:px-12 lg:px-20"
      aria-label="Navegación principal"
    >

      <div
        class="max-w-6xl mx-auto
               min-h-[78px]
               flex items-center justify-between
               gap-5 md:gap-8"
      >

        <a
          href="#inicio"
          class="focus-deco
                 font-serif font-bold
                 tracking-widest uppercase
                 text-lg md:text-xl
                 text-[#d4af37]"
        >
          ${content.site.name}
        </a>

        <button
          id="menuToggle"
          type="button"
          aria-label="Abrir menú de navegación"
          aria-expanded="false"
          class="md:hidden
                 rounded-none
                 border-2 border-[#d4af37]
                 font-serif font-bold
                 tracking-widest uppercase
                 transition-all duration-400 ease-in-out
                 bg-transparent text-[#d4af37]
                 px-4 py-3
                 focus-deco"
        >
          MENU
        </button>

        <div
          id="desktopMenu"
          class="hidden md:flex
                 items-center
                 gap-5 md:gap-8
                 font-serif text-xs md:text-sm"
        >
          ${content.navigation.map(nav => `
            <a
              href="${nav.href}"
              class="focus-deco
                     text-[#f0e6d0]
                     hover:text-[#d4af37]
                     opacity-100 hover:opacity-90
                     transition-all duration-400 ease-in-out"
            >
              ${nav.label}
            </a>
          `).join("")}
        </div>
      </div>

      <div
        id="mobileMenu"
        class="hidden md:hidden
               border-t border-[#d4af37]/50
               py-5"
      >
        <div class="flex flex-col items-center gap-5">
          ${content.navigation.map(nav => `
            <a
              href="${nav.href}"
              class="mobile-link
                     focus-deco
                     font-serif
                     tracking-wider uppercase
                     text-sm
                     text-[#f0e6d0]
                     hover:text-[#d4af37]
                     transition-all duration-400 ease-in-out"
            >
              ${nav.label}
            </a>
          `).join("")}
        </div>
      </div>

    </nav>
  `;
}


/* =========================================================
   HERO
========================================================= */

function renderHero() {
  return `
    <section
      id="inicio"
      class="relative min-h-screen
             bg-[#1a1a2e]
             text-[#f0e6d0]
             pt-32 pb-20
             md:pt-40 md:pb-28
             lg:pt-48 lg:pb-36
             px-6 md:px-12 lg:px-20
             overflow-hidden"
    >

      <div class="absolute inset-0 deco-pattern opacity-40"></div>

      <div class="deco-radial"></div>

      <div class="relative max-w-6xl mx-auto">

        <div
          class="border-2 border-[#d4af37]
                 p-6 md:p-10 lg:p-16
                 deco-corner"
        >

          <div
            class="grid
                   grid-cols-1
                   lg:grid-cols-[1fr_auto]
                   gap-12 lg:gap-20
                   items-center"
          >

            <div class="text-center lg:text-left">

              <div class="flex items-center justify-center lg:justify-start gap-4 mb-7">
                <span class="deco-small-diamond"></span>

                <p class="font-serif text-xs md:text-sm
                          tracking-[0.3em] uppercase
                          text-[#d4af37]">
                  ${content.hero.eyebrow}
                </p>

                <span class="deco-small-diamond"></span>
              </div>

              <h1
                class="font-serif font-bold
                       tracking-widest uppercase
                       text-4xl md:text-6xl lg:text-7xl
                       leading-tight
                       text-[#d4af37]"
              >
                ${content.hero.title}
              </h1>

              <div class="deco-line max-w-xl mt-8 mb-8 mx-auto lg:mx-0"></div>

              <p
                class="font-serif text-sm md:text-base
                       leading-7
                       text-[#f0e6d0]
                       max-w-2xl
                       mx-auto lg:mx-0"
              >
                ${content.hero.description}
              </p>

              <div
                class="flex flex-col sm:flex-row
                       items-center justify-center lg:justify-start
                       gap-5 md:gap-8
                       mt-10"
              >

                <a
                  href="${content.hero.primaryAction.href}"
                  class="focus-deco
                         rounded-none
                         border-2 border-[#d4af37]
                         font-serif font-bold
                         tracking-widest uppercase
                         transition-all duration-400 ease-in-out
                         gold-shimmer
                         text-[#1a1a2e]
                         px-7 py-4
                         text-xs md:text-sm
                         hover:opacity-90
                         active:opacity-80"
                >
                  ${content.hero.primaryAction.label}
                </a>

                <a
                  href="${content.hero.secondaryAction.href}"
                  class="focus-deco
                         rounded-none
                         border-2 border-[#d4af37]
                         font-serif font-bold
                         tracking-widest uppercase
                         transition-all duration-400 ease-in-out
                         bg-transparent
                         text-[#d4af37]
                         px-7 py-4
                         text-xs md:text-sm
                         hover:opacity-90
                         active:opacity-80"
                >
                  ${content.hero.secondaryAction.label}
                </a>

              </div>

            </div>

            <div class="flex justify-center">

              <div class="deco-seal">

                <div class="relative z-10 text-center">

                  <p class="font-serif font-bold
                            tracking-[0.3em]
                            text-xs text-[#d4af37]">
                    ${content.hero.seal.top}
                  </p>

                  <p class="font-serif font-bold
                            tracking-widest
                            text-5xl md:text-6xl
                            text-[#d4af37]
                            my-2">
                    ${content.hero.seal.center}
                  </p>

                  <p class="font-serif
                            tracking-[0.3em]
                            text-[9px]
                            text-[#f0e6d0]">
                    ${content.hero.seal.bottom}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  `;
}


/* =========================================================
   ABOUT
========================================================= */

function renderAbout() {
  return `
    <section
      id="nosotros"
      class="bg-[#0f0f1a]
             text-[#f0e6d0]
             py-16 md:py-28 lg:py-36
             px-6 md:px-12 lg:px-20"
    >

      <div class="max-w-6xl mx-auto">

        <div class="text-center mb-14 md:mb-20">

          <div class="flex items-center justify-center gap-5 mb-6">
            <span class="deco-line max-w-24 flex-1"></span>

            <span class="deco-diamond"></span>

            <span class="deco-line max-w-24 flex-1"></span>
          </div>

          <p
            class="font-serif
                   text-xs md:text-sm
                   tracking-[0.3em] uppercase
                   text-[#d4af37]"
          >
            ${content.about.eyebrow}
          </p>

          <h2
            class="font-serif font-bold
                   tracking-widest uppercase
                   text-2xl md:text-3xl
                   mt-5
                   text-[#d4af37]"
          >
            ${content.about.title}
          </h2>

        </div>

        <div
          class="grid
                 grid-cols-1
                 lg:grid-cols-2
                 gap-10 md:gap-16
                 items-center"
        >

          <div
            class="relative
                   border-2 border-[#d4af37]
                   p-8 md:p-12
                   deco-corner"
          >

            <p
              class="font-serif
                     text-sm md:text-base
                     leading-7
                     text-[#f0e6d0]"
            >
              ${content.about.description}
            </p>

            <p
              class="font-serif
                     text-sm md:text-base
                     leading-7
                     text-[#f0e6d0]
                     mt-6"
            >
              ${content.about.secondaryDescription}
            </p>

          </div>

          <div
            class="grid
                   grid-cols-1
                   sm:grid-cols-3
                   lg:grid-cols-1
                   gap-5 md:gap-8"
          >

            ${content.about.stats.map(stat => `
              <div
                class="text-center
                       border-2 border-[#d4af37]
                       bg-[#1a1a2e]
                       p-6 md:p-8
                       shadow-[0_4px_12px_rgba(212,175,55,0.2)]"
              >

                <div
                  class="font-serif font-bold
                         tracking-widest
                         text-3xl md:text-4xl
                         text-[#d4af37]"
                >
                  ${stat.number}
                </div>

                <div class="deco-line my-4"></div>

                <p
                  class="font-serif
                         text-xs md:text-sm
                         tracking-wider uppercase
                         text-[#f0e6d0]"
                >
                  ${stat.label}
                </p>

              </div>
            `).join("")}

          </div>

        </div>

      </div>

    </section>
  `;
}


/* =========================================================
   VALUES
========================================================= */

function renderValues() {
  return `
    <section
      id="valores"
      class="bg-[#1a1a2e]
             text-[#f0e6d0]
             py-16 md:py-28 lg:py-36
             px-6 md:px-12 lg:px-20
             border-y-2 border-[#d4af37]"
    >

      <div class="max-w-6xl mx-auto">

        <div class="text-center mb-14 md:mb-20">

          <p
            class="font-serif
                   text-xs md:text-sm
                   tracking-[0.3em] uppercase
                   text-[#d4af37]"
          >
            ${content.values.eyebrow}
          </p>

          <h2
            class="font-serif font-bold
                   tracking-widest uppercase
                   text-2xl md:text-3xl
                   mt-5"
          >
            ${content.values.title}
          </h2>

          <div class="deco-line max-w-md mx-auto mt-8"></div>

        </div>

        <div
          class="grid
                 grid-cols-1
                 md:grid-cols-3
                 gap-5 md:gap-8"
        >

          ${content.values.items.map(value => `
            <article
              class="group
                     rounded-none
                     border-2 border-[#d4af37]
                     bg-[#1a1a2e]
                     shadow-[0_4px_12px_rgba(212,175,55,0.2)]
                     p-6 md:p-10
                     text-center
                     transition-all duration-400 ease-in-out
                     hover:shadow-[0_6px_20px_rgba(212,175,55,0.3)]
                     deco-corner"
            >

              <div
                class="font-serif font-bold
                       tracking-[0.3em]
                       text-xl
                       text-[#d4af37]"
              >
                ${value.number}
              </div>

              <div class="deco-line max-w-24 mx-auto my-6"></div>

              <h3
                class="font-serif font-bold
                       tracking-widest uppercase
                       text-lg md:text-xl
                       text-[#d4af37]"
              >
                ${value.title}
              </h3>

              <p
                class="font-serif
                       text-sm md:text-base
                       leading-7
                       text-[#f0e6d0]
                       mt-5"
              >
                ${value.description}
              </p>

            </article>
          `).join("")}

        </div>

      </div>

    </section>
  `;
}


/* =========================================================
   SERVICES
========================================================= */

function renderServices() {
  return `
    <section
      id="servicios"
      class="bg-[#0f0f1a]
             text-[#f0e6d0]
             py-16 md:py-28 lg:py-36
             px-6 md:px-12 lg:px-20"
    >

      <div class="max-w-6xl mx-auto">

        <div class="text-center max-w-3xl mx-auto mb-14 md:mb-20">

          <p
            class="font-serif
                   text-xs md:text-sm
                   tracking-[0.3em] uppercase
                   text-[#d4af37]"
          >
            ${content.services.eyebrow}
          </p>

          <h2
            class="font-serif font-bold
                   tracking-widest uppercase
                   text-2xl md:text-3xl
                   mt-5
                   text-[#d4af37]"
          >
            ${content.services.title}
          </h2>

          <div class="deco-line my-7"></div>

          <p
            class="font-serif
                   text-sm md:text-base
                   leading-7
                   text-[#f0e6d0]"
          >
            ${content.services.description}
          </p>

        </div>

        <div
          class="grid
                 grid-cols-1
                 md:grid-cols-2
                 lg:grid-cols-3
                 gap-5 md:gap-8"
        >

          ${content.services.items.map(service => `
            <article
              class="group
                     rounded-none
                     border-2 border-[#d4af37]
                     bg-[#1a1a2e]
                     shadow-[0_4px_12px_rgba(212,175,55,0.2)]
                     p-6 md:p-10
                     text-center
                     transition-all duration-400 ease-in-out
                     hover:shadow-[0_6px_20px_rgba(212,175,55,0.3)]
                     deco-corner"
            >

              <div
                class="service-number
                       inline-block
                       font-serif font-bold
                       tracking-widest
                       text-xl
                       text-[#d4af37]"
              >
                ${service.number}
              </div>

              <h3
                class="font-serif font-bold
                       tracking-widest uppercase
                       text-lg md:text-xl
                       mt-8
                       text-[#d4af37]"
              >
                ${service.title}
              </h3>

              <div class="deco-line my-6"></div>

              <p
                class="font-serif
                       text-sm md:text-base
                       leading-7
                       text-[#f0e6d0]"
              >
                ${service.description}
              </p>

            </article>
          `).join("")}

        </div>

      </div>

    </section>
  `;
}


/* =========================================================
   WHATSAPP CTA
========================================================= */

function renderCTA() {
  const whatsappUrl =
    `https://wa.me/${content.cta.whatsappNumber}?text=${encodeURIComponent(content.cta.whatsappMessage)}`;

  return `
    <section
      class="relative
             bg-[#d4af37]
             text-[#1a1a2e]
             py-16 md:py-28
             px-6 md:px-12 lg:px-20
             overflow-hidden"
    >

      <div
        class="absolute inset-0
               opacity-20
               deco-pattern"
      ></div>

      <div class="relative max-w-4xl mx-auto text-center">

        <div
          class="border-2 border-[#1a1a2e]
                 p-8 md:p-14
                 deco-corner"
          style="
            --gold:#1a1a2e;
          "
        >

          <p
            class="font-serif
                   text-xs md:text-sm
                   tracking-[0.3em] uppercase"
          >
            ${content.cta.eyebrow}
          </p>

          <h2
            class="font-serif font-bold
                   tracking-widest uppercase
                   text-3xl md:text-5xl
                   mt-5"
          >
            ${content.cta.title}
          </h2>

          <div
            class="h-[2px]
                   bg-[#1a1a2e]
                   max-w-md
                   mx-auto
                   my-8"
          ></div>

          <p
            class="font-serif
                   text-sm md:text-base
                   leading-7
                   max-w-2xl
                   mx-auto"
          >
            ${content.cta.description}
          </p>

          <div class="mt-9">

            <a
              href="${whatsappUrl}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="${content.cta.button}"
              class="focus-deco
                     rounded-none
                     border-2 border-[#d4af37]
                     font-serif font-bold
                     tracking-widest uppercase
                     transition-all duration-400 ease-in-out
                     bg-[#1a1a2e]
                     text-[#d4af37]
                     inline-block
                     px-8 py-4
                     text-xs md:text-sm
                     hover:opacity-90
                     active:opacity-80"
            >
              ${content.cta.button}
            </a>

          </div>

        </div>

      </div>

    </section>
  `;
}


/* =========================================================
   CONTACT
========================================================= */

function renderContact() {
  return `
    <section
      id="contacto"
      class="bg-[#1a1a2e]
             text-[#f0e6d0]
             py-16 md:py-28 lg:py-36
             px-6 md:px-12 lg:px-20"
    >

      <div class="max-w-5xl mx-auto">

        <div class="text-center mb-14">

          <p
            class="font-serif
                   text-xs md:text-sm
                   tracking-[0.3em] uppercase
                   text-[#d4af37]"
          >
            ${content.contact.eyebrow}
          </p>

          <h2
            class="font-serif font-bold
                   tracking-widest uppercase
                   text-2xl md:text-3xl
                   mt-5
                   text-[#d4af37]"
          >
            ${content.contact.title}
          </h2>

          <div class="deco-line max-w-md mx-auto mt-7"></div>

          <p
            class="font-serif
                   text-sm md:text-base
                   leading-7
                   max-w-2xl
                   mx-auto
                   mt-7"
          >
            ${content.contact.description}
          </p>

        </div>

        <form
          id="contactForm"
          class="rounded-none
                 border-2 border-[#d4af37]
                 bg-[#1a1a2e]
                 shadow-[0_4px_12px_rgba(212,175,55,0.2)]
                 p-6 md:p-10
                 deco-corner"
        >

          <div
            class="grid
                   grid-cols-1
                   md:grid-cols-2
                   gap-5 md:gap-8"
          >

            <div>
              <label
                for="name"
                class="font-serif
                       text-xs md:text-sm
                       tracking-wider uppercase
                       text-[#d4af37]
                       block mb-3"
              >
                ${content.contact.fields.name}
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                autocomplete="name"
                class="w-full
                       rounded-none
                       border-2 border-[#d4af37]
                       bg-[#0f0f1a]
                       text-[#f0e6d0]
                       font-serif
                       px-4 py-4
                       focus:shadow-[0_4px_16px_rgba(212,175,55,0.25)]
                       focus:outline-none
                       focus:ring-0"
              />
            </div>

            <div>
              <label
                for="email"
                class="font-serif
                       text-xs md:text-sm
                       tracking-wider uppercase
                       text-[#d4af37]
                       block mb-3"
              >
                ${content.contact.fields.email}
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autocomplete="email"
                class="w-full
                       rounded-none
                       border-2 border-[#d4af37]
                       bg-[#0f0f1a]
                       text-[#f0e6d0]
                       font-serif
                       px-4 py-4
                       focus:shadow-[0_4px_16px_rgba(212,175,55,0.25)]
                       focus:outline-none
                       focus:ring-0"
              />
            </div>

            <div class="md:col-span-2">

              <label
                for="phone"
                class="font-serif
                       text-xs md:text-sm
                       tracking-wider uppercase
                       text-[#d4af37]
                       block mb-3"
              >
                ${content.contact.fields.phone}
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autocomplete="tel"
                class="w-full
                       rounded-none
                       border-2 border-[#d4af37]
                       bg-[#0f0f1a]
                       text-[#f0e6d0]
                       font-serif
                       px-4 py-4
                       focus:shadow-[0_4px_16px_rgba(212,175,55,0.25)]
                       focus:outline-none
                       focus:ring-0"
              />

            </div>

            <div class="md:col-span-2">

              <label
                for="message"
                class="font-serif
                       text-xs md:text-sm
                       tracking-wider uppercase
                       text-[#d4af37]
                       block mb-3"
              >
                ${content.contact.fields.message}
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                required
                class="w-full
                       rounded-none
                       border-2 border-[#d4af37]
                       bg-[#0f0f1a]
                       text-[#f0e6d0]
                       font-serif
                       px-4 py-4
                       focus:shadow-[0_4px_16px_rgba(212,175,55,0.25)]
                       focus:outline-none
                       focus:ring-0
                       resize-y"
              ></textarea>

            </div>

          </div>

          <div class="deco-line mt-8 mb-6"></div>

          <div
            class="flex flex-col
                   md:flex-row
                   items-center
                   justify-between
                   gap-6"
          >

            <p
              class="font-serif
                     text-xs md:text-sm
                     leading-6
                     text-[#f0e6d0]
                     max-w-xl"
            >
              ${content.contact.privacy}
            </p>

            <button
              type="submit"
              class="focus-deco
                     rounded-none
                     border-2 border-[#d4af37]
                     font-serif font-bold
                     tracking-widest uppercase
                     transition-all duration-400 ease-in-out
                     bg-[#d4af37]
                     text-[#1a1a2e]
                     px-7 py-4
                     text-xs md:text-sm
                     hover:opacity-90
                     active:opacity-80
                     whitespace-nowrap"
            >
              ${content.contact.submit}
            </button>

          </div>

          <p
            id="formMessage"
            class="hidden
                   font-serif
                   text-sm
                   text-[#d4af37]
                   text-center
                   mt-6"
            role="status"
            aria-live="polite"
          ></p>

        </form>

      </div>

    </section>
  `;
}


/* =========================================================
   SCHEDULE + DIRECTION
========================================================= */

function renderScheduleAndDirection() {
  return `
    <section
      class="bg-[#0f0f1a]
             text-[#f0e6d0]
             py-16 md:py-28 lg:py-36
             px-6 md:px-12 lg:px-20
             border-t-2 border-[#d4af37]"
    >

      <div
        class="max-w-6xl mx-auto
               grid
               grid-cols-1
               lg:grid-cols-2
               gap-8 md:gap-12"
      >

        <!-- SCHEDULE -->

        <article
          class="rounded-none
                 border-2 border-[#d4af37]
                 bg-[#1a1a2e]
                 shadow-[0_4px_12px_rgba(212,175,55,0.2)]
                 p-6 md:p-10
                 deco-corner"
        >

          <div class="text-center">

            <p
              class="font-serif
                     text-xs md:text-sm
                     tracking-[0.3em] uppercase
                     text-[#d4af37]"
            >
              ${content.schedule.eyebrow}
            </p>

            <h2
              class="font-serif font-bold
                     tracking-widest uppercase
                     text-2xl md:text-3xl
                     mt-5
                     text-[#d4af37]"
            >
              ${content.schedule.title}
            </h2>

            <div class="deco-line my-7"></div>

            <p
              class="font-serif
                     text-sm md:text-base
                     leading-7"
            >
              ${content.schedule.description}
            </p>

          </div>

          <div class="mt-9">

            ${content.schedule.days.map(day => `
              <div
                class="flex
                       items-center
                       justify-between
                       gap-5
                       py-5
                       border-b
                       border-[#d4af37]/40"
              >

                <span
                  class="font-serif
                         text-sm md:text-base
                         tracking-wider"
                >
                  ${day.day}
                </span>

                <span
                  class="font-serif
                         text-sm md:text-base
                         text-[#d4af37]
                         whitespace-nowrap"
                >
                  ${day.hours}
                </span>

              </div>
            `).join("")}

          </div>

          <p
            class="font-serif
                   text-xs md:text-sm
                   leading-6
                   text-[#f0e6d0]
                   mt-7
                   text-center"
          >
            ${content.schedule.appointment}
          </p>

        </article>


        <!-- DIRECTION -->

        <article
          class="rounded-none
                 border-2 border-[#d4af37]
                 bg-[#1a1a2e]
                 shadow-[0_4px_12px_rgba(212,175,55,0.2)]
                 p-6 md:p-10
                 deco-corner"
        >

          <div class="text-center">

            <p
              class="font-serif
                     text-xs md:text-sm
                     tracking-[0.3em] uppercase
                     text-[#d4af37]"
            >
              ${content.direction.eyebrow}
            </p>

            <h2
              class="font-serif font-bold
                     tracking-widest uppercase
                     text-2xl md:text-3xl
                     mt-5
                     text-[#d4af37]"
            >
              ${content.direction.title}
            </h2>

          </div>

          <div
            class="mt-8
                   border-2 border-[#d4af37]
                   overflow-hidden"
          >

            <iframe
              src="${content.direction.mapUrl}"
              title="Mapa de ubicación de ${content.site.name}"
              class="w-full
                     aspect-[4/3]
                     border-0
                     grayscale
                     opacity-80"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

          <div class="text-center mt-7">

            <p
              class="font-serif
                     font-bold
                     tracking-wider
                     text-[#d4af37]"
            >
              ${content.direction.address}
            </p>

            <p
              class="font-serif
                     text-sm md:text-base
                     mt-2"
            >
              ${content.direction.city}
            </p>

            <p
              class="font-serif
                     text-sm
                     leading-6
                     mt-4"
            >
              ${content.direction.reference}
            </p>

            <a
              href="${content.direction.mapUrl.replace("&output=embed", "")}"
              target="_blank"
              rel="noopener noreferrer"
              class="focus-deco
                     rounded-none
                     border-2 border-[#d4af37]
                     font-serif font-bold
                     tracking-widest uppercase
                     transition-all duration-400 ease-in-out
                     bg-transparent
                     text-[#d4af37]
                     inline-block
                     px-6 py-3
                     mt-6
                     text-xs
                     hover:opacity-90
                     active:opacity-80"
            >
              ${content.direction.button}
            </a>

          </div>

        </article>

      </div>

    </section>
  `;
}


/* =========================================================
   FOOTER
========================================================= */

function renderFooter() {
  return `
    <footer
      class="bg-[#0f0f1a]
             text-[#f0e6d0]
             py-16 md:py-28
             px-6 md:px-12 lg:px-20"
    >

      <div class="max-w-6xl mx-auto">

        <div
          class="grid
                 grid-cols-1
                 md:grid-cols-3
                 gap-8 md:gap-12"
        >

          <div class="text-center md:text-left">

            <span
              class="font-serif font-bold
                     tracking-widest uppercase
                     text-lg md:text-xl
                     text-[#d4af37]"
            >
              ${content.site.name}
            </span>

            <p
              class="font-serif
                     text-xs md:text-sm
                     leading-6
                     mt-4"
            >
              ${content.footer.description}
            </p>

          </div>


          <div class="text-center">

            <h3
              class="font-serif font-bold
                     tracking-widest uppercase
                     text-lg md:text-xl
                     text-[#d4af37]"
            >
              ${content.footer.navigationTitle}
            </h3>

            <div class="deco-line my-5"></div>

            <ul
              class="font-serif
                     text-xs md:text-sm
                     space-y-3"
            >

              ${content.navigation.map(nav => `
                <li>
                  <a
                    href="${nav.href}"
                    class="focus-deco
                           hover:text-[#d4af37]
                           transition-all duration-400 ease-in-out"
                  >
                    ${nav.label}
                  </a>
                </li>
              `).join("")}

            </ul>

          </div>


          <div class="text-center md:text-right">

            <h3
              class="font-serif font-bold
                     tracking-widest uppercase
                     text-lg md:text-xl
                     text-[#d4af37]"
            >
              ${content.footer.contactTitle}
            </h3>

            <div class="deco-line my-5"></div>

            <div
              class="font-serif
                     text-xs md:text-sm
                     space-y-3"
            >

              <p>${content.footer.phone}</p>

              <p>${content.footer.email}</p>

              <p>${content.footer.address}</p>

            </div>

          </div>

        </div>

        <div class="deco-line mt-14 mb-7"></div>

        <div class="text-center">

          <p
            class="font-serif
                   text-xs
                   tracking-wider
                   text-[#8a7a5a]"
          >
            © ${new Date().getFullYear()}
            ${content.footer.copyright || content.site.copyright}
            · ${content.footer.legal}
          </p>

        </div>

      </div>

    </footer>
  `;
}


/* =========================================================
   INTERACTIONS
========================================================= */

function initializeInteractions() {

  /*
   * Mobile navigation
   */

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

      const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      mobileMenu.classList.toggle("hidden");

      menuToggle.textContent =
        isOpen ? "MENU" : "CERRAR";

      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Abrir menú de navegación"
          : "Cerrar menú de navegación"
      );
    });

    document.querySelectorAll(".mobile-link").forEach(link => {

      link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.textContent = "MENU";

        menuToggle.setAttribute(
          "aria-label",
          "Abrir menú de navegación"
        );

      });

    });

  }


  /*
   * Contact form
   */

  const contactForm =
    document.getElementById("contactForm");

  const formMessage =
    document.getElementById("formMessage");

  if (contactForm && formMessage) {

    contactForm.addEventListener("submit", event => {

      event.preventDefault();

      const formData =
        new FormData(contactForm);

      const name =
        formData.get("name");

      const email =
        formData.get("email");

      const phone =
        formData.get("phone");

      const message =
        formData.get("message");

      const whatsappMessage = `
Hola, soy ${name}.

Correo: ${email}
Teléfono: ${phone}

Consulta:
${message}
      `.trim();

      const whatsappUrl =
        `https://wa.me/${content.cta.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      formMessage.textContent =
        content.contact.success;

      formMessage.classList.remove("hidden");

      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );

      contactForm.reset();

    });

  }


  /*
   * Smooth navigation with fixed header offset
   */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId =
        link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      const headerOffset = 85;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top: targetPosition,
        behavior:
          window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches
            ? "auto"
            : "smooth"
      });

    });

  });

}


/* =========================================================
   START
========================================================= */

loadContent();