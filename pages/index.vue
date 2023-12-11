<template>
  <div class="p-4">
    <div class="flex flex-col space-y-4 w-full items-stretch">
      <div class="p-1 hidden md:block">
        <img src="/icaifs24.png" alt = "ICAIFS" />
      </div>
      <div class="p-4">
        <HomePage />
      </div>
      <div
        class="
          flex flex-col
          md:flex-row md:space-x-4
          space-y-4
          md:space-y-0
          justify-between
        "
      >
        <div class="p-1 flex flex-col justify-start">
          <div class="py-1 text-md">
            <div
              class="
                py-2
                text-lg text-gray-700
                dark:text-white
                font-semibold
                border-gray-400 border-b-2
              "
            >
              About Conference (ICAIFS - 2024)
            </div>
            <p class="py-1 text-justify">
              Join us at the prestigious International Conference on Artificial Intelligence and Future Science (ICAIFS’24), 
              where brilliance converges with the boundless possibilities of tomorrow. Immerse yourself in a symphony of intellect, 
              as we explore the frontiers of innovation and chart the course for a future sculpted by Artificial Intelligence. 
              Connect with visionaries, researchers, and thought leaders from across the globe. Engage in dynamic discussions, 
              exchange ground breaking ideas, and forge collaborations that transcend borders. Be captivated by thought-provoking 
              keynotes and participate in expert panels featuring luminaries at the forefront of AI and future science 
              from 21 March 2024 to 22 March 2024.
            </p>
            <div class="p-1">
        <!--<img
          class="flex-none flex-grow-0 h-36 w-auto mx-auto"
          src="/eec3.webp"
          alt = "Easwari Engineering College"
        />-->
      </div>
      <br>
            <div
              class="
                py-2
                text-lg text-gray-700
                dark:text-white
                font-semibold
                border-gray-400 border-b-2
              "
            >
              About the Institution
            </div>
            <p class="py-1 text-justify">
              Easwari Engineering College was instituted in the academic year 1996 -1997, with the Approval of 
              Government of Tamil Nadu and AICTE, New Delhi. As per Govt., Regulations for affiliation, originally 
              the college was affiliated to the University of Madras, subsequently, the college is affiliated to 
              Anna University Chennai since 2002. Pursuing the philosophy of continuous learning, the Institution 
              prepares the students to score creditably in the Academic sessions and also encourages them to develop 
              their interpersonal and intrapersonal skills and attitudes to approach life with confidence.
            </p>
            <br>
            <div
              class="
                py-2
                text-lg text-gray-700
                dark:text-white
                font-semibold
                border-gray-400 border-b-2
              "
            >
              About the Department
            </div>
            <p class="py-1 text-justify">
              Easwari Engineering College, a unit of SRM group of Institutions, was established in 1996. 
              The Department of Artificial Intelligence and Data Science was started in the year 2020, 
              with the goal of creating a space for innovation and new technology. The department aims 
              to develop an institute for research and education that integrates data science, machine 
              learning, and artificial intelligence.
            </p>
          </div>
        </div>
      </div>
      
      
      <div
        class="
          flex flex-col
          md:flex-row md:space-x-4
          space-y-4
          md:space-y-0
          justify-between
        "
      >
        <div class="p-1 flex flex-col justify-start">
          <div class="py-1 text-md">
            <div
              class="
                py-2
                text-lg text-gray-700
                dark:text-white
                font-semibold
                border-gray-400 border-b-2
              "
            >
              Organizers, Partners and Indexing
            </div>
            <div class="py-1">
              After the review, Selected papers will be published in one of the following Journals
              <ul class="space-y-2 list-disc p-4">
                <li>
                  International Journal of Vehicle Structure and Systems
                </li>
                <li>Material Today Proceedings (under process)</li>
                <li>IOP-Journal of Physics (under process)</li>
              </ul>
              
              <p class="text-xl font-bold">
                (*Publication charges are applicable as per journal norms)
              </p>
            </div>
            <div
              class="
                grid grid-cols-1
                md:grid-cols-4
                space-y-4
                md:space-y-0 md:space-x-4
                items-center
              "
            >
              <!--<img
                class="flex-none flex-grow-0 h-36 w-auto mx-auto"
                alt = "AIP Publishing"
                src="/icons/1.svg"
              />
              <img
                class="flex-none flex-grow-0 h-36 w-auto mx-auto"
                alt = "Scopus"
                src="/icons/2.svg"
              />
              <img
                class="flex-none flex-grow-0 h-36 w-auto mx-auto"
                alt = "Web of Science"
                src="/icons/3.svg"
              />
              <img
                class="flex-none flex-grow-0 h-36 w-auto mx-auto"
                alt = "Google Scholar"
                src="/icons/4.svg"
              />-->
            </div> 
          </div>
        </div>
      </div>
      <div>
        <div class="text-lg">
          <div
            class="
              flex
              md:flex-row md:space-x-12
              flex-col
              items-stretch
              md:justify-between
              justify-start
            "
          >
            <div class="py-2 w-full">
              <NuxtLink
                to="/speakers/keynote"
                class="
                  p-2
                  block
                  text-gray-700
                  dark:text-white
                  font-semibold
                  border-gray-400 border-b-2
                "
              >
                Keynote Speakers:
              </NuxtLink>
              <div class="flex flex-col md:flex-row items-start w-full">
                <MiscPersonLite
                  :news="article"
                  v-for="article in articles"
                  :key="article.title"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  async asyncData({ $content }) {
    const conference = await $content("conference").fetch();
    const conferencetracks = await $content("conferencetracks").fetch();
    const organizer = await $content("organizer").fetch();

    const about = await $content("about").fetch();

    const articles = await $content("speakers/keynote").fetch();
    return {
      about,
      articles,
      organizer,
      conference,
      conferencetracks,
    };
  },
};
</script>
