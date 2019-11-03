<template>
  <div>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">Andrea Binelli</div>
        <div class="text-green-700 leading-tight">Full-stack web developer, homebrewer<br>&amp; tech enthusiast</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <img src="../assets/img/developer.svg" alt="hero" class="mx-auto sm:mx-0" />
      </div>
    </div>

    <div class="container-inner mx-auto">
      <p class="text-lg sm:text-xl">
        Benvenuti sul mio sito personale, che raccoglie il mio portfolio e i progetti personali.<br>
        Sono laureato in ingegneria informatica e lavoro come sviluppatore web, sia backend che frontend.<br>
        Principalmente con il mondo ASP.NET quindi C# e SQL Server ma ho sviluppato anche con Ruby on Rails e PostgreSQL.
        Anche un po' di C e Java all'università.<br>
        E ovviamente l'immancabile trio HTML, CSS e Javascript/Typescript.
      </p>
      <div class="flex justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <img src="../assets/img/mind_map.svg" alt="browser" />
        </div>
        <div class="w-1/2 px-8 hidden sm:flex justify-end">
          <img src="../assets/img/code_review.svg" alt="mobile" />
        </div>
      </div>
    </div>

    <div class="overflow-x-hidden">
      <div class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
        <h2 class="font-bold mb-6" id="projects">I miei progetti:</h2>

        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>

        <ul class="text-lg sm:text-xl">
          <li class="checkmark mb-6">
            <div>Eniblog</div>
            <div class="text-lg text-gray-600">
              Creai un blog nel 2016 per il vecchio gruppo di birrai casalinghi ma nel tempo è diventato qualcosa di più personale. 
              Parlo delle mie produzioni brassicole e le tecniche che utilizzo ma anche di tecnologia e sviluppo web.
              E dei mei progetti ovviamente.
            </div>
          </li>
          <li class="checkmark mb-6">
            <div>Enibrauhaus</div>
            <div class="text-lg text-gray-600">
              Il mio birrificio personale e il tentativo di razionalizzare i processi produttivi della birrificazione.
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="overflow-x-hidden border-gray-200 border-b">
      <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
        <h2 class="font-bold mb-6" id="about">Su di me:</h2>
        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div><img src="../assets/img/avatar.jpg" alt="avatar" class="w-32 h-32 rounded-full mb-8 lg:mb-0" /></div>
          <div class="flex-1 text-lg sm:text-xl ml-6">
            Mi piace scrivere codice pulito e mettere la mani sulle nuove tecnologie web, pc (soprattutto assemblati) e tecnologia più in generale.<br><br>
            Adoro le automobili, i videogiochi, le serie tv e i film. Specialmente i cinecomic.<br><br>
            Nel tempo libero faccio la birra in casa con il metodo all grain.<br>
            Coltivo alcune varietà di luppolo che poi utilizzo nelle mie birre.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export const data = {
  layout: 'default',
}

export default {
  props: ['page'],
}
</script>

