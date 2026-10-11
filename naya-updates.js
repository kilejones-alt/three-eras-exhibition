'use strict';

/*
  STOPAZ exhibition content update
  Source authority: "What Naya needs to do", complete document text retrieved 2026-09-24.
  This layer intentionally changes content only. It does not redesign existing pages,
  remove existing material, or activate the deferred "Antizionist crimes" section.
*/
(() => {
  const esc = (s) => String(s).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const p = (text, cls='') => `<p class="${cls}" data-en="${esc(text)}">${esc(text)}</p>`;

  function installStyles() {
    if (document.getElementById('naya-content-update-styles')) return;
    const style = document.createElement('style');
    style.id = 'naya-content-update-styles';
    style.textContent = `
      .naya-eras-context summary{cursor:pointer;font:500 clamp(1.6rem,3vw,2.6rem)/1.2 var(--museum-serif,Georgia,serif);padding:1rem 0;color:#eee}
      .naya-eras-context .era-source-section{margin:2rem 0}
      .naya-section-links{display:flex;flex-wrap:wrap;gap:.7rem 1.4rem;margin-top:1.5rem}
      .naya-section-links a{color:#eee;text-underline-offset:5px}
      .naya-archive-guide{margin:1.5rem 0}
      .naya-archive-guide summary{cursor:pointer;padding:.8rem 0}
      .naya-archive-guide h3{font-size:1.3rem;margin-top:1rem}
      .era-libels-grid{grid-template-columns:1fr!important;gap:3rem!important}
      .era-libel-card{max-width:850px;width:100%;margin-inline:auto;scroll-margin-top:5rem}
      .era-libel-card p{line-height:1.7!important;max-width:78ch;margin:0 0 1.2rem!important}
      .naya-source-update{max-width:1180px;margin:clamp(4rem,8vw,8rem) auto;padding:0 clamp(1.1rem,4vw,3rem)}
      .naya-source-update .naya-kicker{font:500 .72rem/1.2 var(--museum-sans,"Source Sans 3",sans-serif);letter-spacing:.18em;text-transform:uppercase;color:#9d9da7;margin-bottom:1rem}
      .naya-source-update h2,.naya-source-update h3{font-family:var(--museum-serif,"Cormorant Garamond",serif);font-weight:500;color:#f0f0f2}
      .naya-source-update h2{font-size:clamp(2.25rem,5vw,4.6rem);line-height:.98;margin:0 0 1.3rem}
      .naya-source-update h3{font-size:clamp(1.5rem,2.4vw,2.15rem);line-height:1.05;margin:0 0 .8rem}
      .naya-source-update p{max-width:78ch;color:#d1d1d7;font:400 clamp(.98rem,1.08vw,1.08rem)/1.62 var(--museum-sans,"Source Sans 3",sans-serif);margin:.8rem 0}
      .naya-source-update .naya-lede{font-size:clamp(1.1rem,1.45vw,1.3rem);line-height:1.55;color:#eeeeef;max-width:70ch}
      .naya-archive-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.06);margin-top:2rem}
      .naya-archive-card{background:#17171a;padding:clamp(1.25rem,2.4vw,2rem);min-width:0}
      .naya-archive-card .naya-object-meta{display:flex;flex-wrap:wrap;gap:.45rem .8rem;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:#8f8f99;margin-bottom:.7rem}
      .naya-archive-card img{display:block;width:100%;height:auto;max-height:520px;object-fit:contain;background:#111114;margin:0 0 1.15rem}
      .naya-archive-card p{font-size:.96rem;line-height:1.55;margin:.55rem 0;max-width:none}
      .naya-archive-card .naya-verification{color:#a9a9b1;font-size:.83rem}
      .era-libel-card .naya-expanded-copy{margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,.07)}
      .era-libel-card .naya-expanded-copy p{margin:.72rem 0}
      .home-source-context .three-eras-intro .naya-home-lede{font-size:clamp(1.05rem,1.45vw,1.24rem);line-height:1.56}
      @media(max-width:760px){.naya-archive-grid{grid-template-columns:1fr}.naya-source-update{margin:3.5rem auto}.naya-source-update p{line-height:1.58}}
    `;
    document.head.appendChild(style);
  }

  const sourceCopy = {
  "intro": [
    "Central to understanding this continuity is a recurring pattern: before society can vilify the Jew, it must first establish what it considers virtuous. The Jew is then accused of violating that virtue."
  ],
  "eras": [
    {
      "title": "Antijudaism",
      "paragraphs": [
        "When faith represented the highest moral good, the Jew was portrayed as the enemy of God.",
        "This is what makes Jew-hatred so enduring and so difficult to recognize: it presents itself as a virtuous hatred. The Jew is not merely disliked but cast as a cosmic villain whose extermination becomes a moral act."
      ]
    },
    {
      "title": "Antisemitism",
      "paragraphs": [
        "When race and nation became organizing ideals, the Jew was portrayed as their corrupting enemy."
      ]
    },
    {
      "title": "Antizionism",
      "paragraphs": [
        "Today, as human rights have become a dominant moral ideal, the Jewish state is accused of committing humanity’s gravest crimes."
      ]
    }
  ],
  "framework": [
    "Today, as human rights have become a dominant moral ideal, the Jewish state is accused of committing humanity’s gravest crimes."
  ],
  "libelIntro": [
    "Three core libels, colonialism, apartheid (racism) , and Genocide (Nazism)  have acquired exceptional authority within contemporary antizionism. They place Zionism inside the most discredited categories of the modern era. Israel appears not as a nation whose history, borders, governments, wars, or laws can be argued over, but as colonial seizure, racial domination, and exterminatory violence made permanent in political form."
  ],
  "libels": [
    {
      "title": "Colonialism",
      "id": "colonialism",
      "paragraphs": [
        "The colonizer libel developed gradually, beginning with the denial of Jewish peoplehood. Before Jews could be portrayed as foreign colonizers in their ancestral homeland, they first had to be stripped of their identity as a nation. This process can be traced to early Soviet Marxism. In 1903, Lenin attacked the idea of Jewish nationhood as “reactionary,” and in 1913 Stalin explicitly argued that Jews did not constitute a nation. The next step was to recast Zionism as colonialism. In the 1920s, the Soviet Yevsektsiya and its newspaper Der Emes portrayed Zionism as an instrument of British imperialism and Western capitalism. The formula was taking shape: deny Jewish nationhood, then redefine the Jewish national movement as a colonial project."
      ]
    },
    {
      "title": "Apartheid and Racism Libels",
      "id": "apartheid",
      "paragraphs": [
        "The equation “Zionism = Racism” was crucial to the emerging apartheid charge. Apartheid South Africa had become the postwar world’s most recognizable symbol of institutionalized racism. By defining Zionism itself as a racist ideology, Soviet propaganda could place Israel within the same moral and political category as South Africa: colonialism became racial domination; racial domination became apartheid.",
        "The apartheid libel has a particularly traceable genealogy. It overlaps with the colonialism narrative we just mapped, but its history is distinct: the key move was to transform Zionism from a purported form of colonialism into a purported system of racial domination analogous to South Africa. One of the earliest explicit comparisons came not from Palestinian Arabs or the Soviet Union, but from Hendrik Verwoerd, the South African prime minister and principal architect of apartheid."
      ]
    },
    {
      "title": "Genocide",
      "id": "genocide",
      "paragraphs": [
        "After the 1967 Six-Day War, Soviet antizionist propaganda increasingly compared Israelis and Zionism with Nazi Germany. This matters enormously for the genocide genealogy because it supplied the necessary moral analogy: if Israelis could be represented as the ideological heirs or imitators of Nazis, Palestinian Arabs could correspondingly be represented as their victims.",
        "General Ion Pacepa, chief of Romania’s foreign intelligence service, played a significant role in Soviet bloc operations directed against Israel and the US. In 1978, he became the highest-ranking intelligence officer ever to defect from the Soviet sphere and, among many secret revelations, provided details of KGB operations against Israel. Pacepa says the chairman of the KGB, Yuri Andropov (later Leonid Brezhnev’s successor as General Secretary of the Soviet Communist Party), told him:",
        "“We needed to instill a Nazi-style hatred for the Jews throughout the Islamic world, and to turn this weapon of the emotions into a terrorist bloodbath against Israel and its main supporter, the United States.”",
        "To achieve its objectives, the Kremlin devised Operation SIG, a disinformation campaign intended “to turn the whole Islamic world against Israel and the US.” Pacepa reported that by 1978, under Operation SIG, the KGB had sent some 4,000 Soviet bloc “agents of influence” into Islamic countries to help achieve this. They also printed and circulated vast amounts of anti-Israel and anti-Jewish propaganda, including the fabricated, antisemitic text The Protocols of the Elders of Zion, translated into Arabic.",
        "These accusations reinforced one another. Palestinian Arabs could now be represented simultaneously as an indigenous population facing colonial dispossession, an Arab population subjected to racism, and a people facing Nazi-like violence. During the 1982 Lebanon War, the Soviet state moved from analogy to an explicit accusation of genocide. On June 6, the official Soviet news agency TASS accused Israel of pursuing: “genocide against the Arab people of Palestine” and described the objective as their: “physical extermination.” By 1984, the language becomes even more striking. The Soviet foreign-propaganda agency Novosti published an English-language pamphlet entitled Zionists Count on Terror. Izabella Tabarovsky has documented language in it including: “Genocide Israeli style,” “Zionist-engineered genocide” and even “the ‘final solution’ of the Palestinian question.”"
      ]
    }
  ],
  "archive": [
    "Posters, photographs, pamphlets, newspapers, caricatures, broadcasts, and state publications show how antizionism was produced, circulated, and transmitted."
  ]
};
  const homeIntro = ["In May 2026, Stop Antizionism made history with the first World Symposium Against Antizionism. In 2027, we are making history again.","The Third Era tells a story no museum has told. This first-of-its-kind exhibition brings the largely overlooked history of antizionism into public view. Through powerful archival documents, historical images, primary sources, multimedia, and survivor testimony, visitors will experience the evolution of Jew-hatred and discover how old libels were transformed, adapted, and given new language for a new era."];
  const paragraphs = values => values.map(text => p(text)).join('\n');
  const erasMarkup = () => '<div class="three-eras-intro" lang="en" dir="ltr">' + paragraphs(homeIntro) + '</div>' + sourceCopy.eras.map(era => '<div class="era-source-section" lang="en" dir="ltr"><h3>' + esc(era.title) + '</h3>' + paragraphs(era.paragraphs) + '</div>').join('');

  function updateHome() {
    const context = document.querySelector('.home-source-context');
    if (!context || context.dataset.nayaUpdated === '1') return;
    context.dataset.nayaUpdated = '1';
    const framework = document.querySelector('.home-framework');
    context.innerHTML = '<h2>The Three Eras of Jew-Hatred</h2>' + paragraphs(sourceCopy.intro) + erasMarkup();
    if (framework) context.querySelector('.era-source-section').before(framework);
  }

  const archiveObjects = [
  {
    "title": "“But He Does Not Listen to the UN…”",
    "img": "naya-nelyubin-un-1978.webp",
    "meta": "Fyodor F. Nelyubin with V. N. Suslov · design dated 1978; proof record 1980",
    "paragraphs": []
  },
  {
    "title": "“Sew on this little piece too!”",
    "img": "naya-lisogorsky-colonial-cartoon.webp",
    "meta": "N. Lisogorsky · Soviet anti-Zionist cartoon",
    "paragraphs": []
  },
  {
    "title": "“The Israeli Extremists’ Appetite”",
    "img": "naya-israeli-extremists-appetite.webp",
    "meta": "Sovetskaya Moldavia · June 4",
    "paragraphs": []
  },
  {
    "title": "“The Expansionists”",
    "img": "naya-expansionists-krokodil-1973.webp",
    "meta": "Krokodil · No. 20 · 1973",
    "paragraphs": []
  },
  {
    "title": "May Day anti-Zionist display, Moscow",
    "img": "naya-sychov-moscow-1972.webp",
    "meta": "Generally identified with photographer Vladimir Sychov · 1972",
    "paragraphs": []
  },
  {
    "title": "Zionist Colonialism in Palestine",
    "img": "naya-sayegh-1965.webp",
    "meta": "Fayez A. Sayegh · PLO Research Center · Beirut · September 1965 · Palestine Monographs No. 1",
    "paragraphs": []
  },
  {
    "title": "Beware: Zionism!",
    "img": "naya-ivanov-beware-zionism-1969.webp",
    "meta": "Yuri Ivanov · Moscow · 1969",
    "paragraphs": []
  },
  {
    "title": "“Israel: A Colonial-Settler State?”",
    "img": "naya-rodinson-1967.webp",
    "meta": "Maxime Rodinson · 1967",
    "paragraphs": []
  },
  {
    "title": "“Israeli Plan”",
    "img": "naya-cherepanov-israeli-plan-1979.webp",
    "meta": "Yuri Andreevich Cherepanov · 1979",
    "paragraphs": []
  },
  {
    "title": "Zionism = Racism",
    "img": "naya-efimovsky-zionism-racism-1976.webp",
    "meta": "Zh. (Joseph) Efimovsky · Combat Pencil · Leningrad · 1976",
    "paragraphs": []
  }
];

  function updateExhibition() {
    if (!/exhibition\.html$/i.test(location.pathname)) return;
    const libels = document.querySelector('.era-libels-section');
    if (!libels || libels.dataset.nayaUpdated === '1') return;
    libels.dataset.nayaUpdated = '1';

    const intro = document.createElement('section');
    intro.className = 'naya-source-update source-antizionism-framework';
    intro.id = 'antizionist-era';
    intro.lang = 'en';
    intro.dir = 'ltr';
    intro.innerHTML = '<h2>The Antizionist Era</h2>' + paragraphs(sourceCopy.framework) + '<h3>The Three Core Libels</h3>' + paragraphs(sourceCopy.libelIntro) + '<nav class="naya-section-links" aria-label="Explore the three libels"><a href="#colonialism">Colonialism</a><a href="#apartheid">Apartheid and racism</a><a href="#genocide">Genocide</a><a href="#exhibition-archive">The archive</a></nav>';
    libels.before(intro);
    const grid = libels.querySelector('.era-libels-grid');
    grid.innerHTML = sourceCopy.libels.map((essay,i)=>'<article class="era-libel-card" id="'+essay.id+'" lang="en" dir="ltr"><span aria-hidden="true" class="era-structure-number">0'+(i+1)+'</span><h3>'+esc(essay.title)+'</h3>'+paragraphs(essay.paragraphs).replace('<p class="" data-en="Settler-colonialism removes', '<h4>Settler-Colonialism and Settlers</h4><p class="" data-en="Settler-colonialism removes')+'</article>').join('');
    const archive = document.createElement('section');
    archive.className = 'naya-source-update naya-archive-update';
    archive.id = 'exhibition-archive';
    archive.lang = 'en';
    archive.dir = 'ltr';
    archive.innerHTML = '<h2>The Archive</h2>' + p(sourceCopy.archive[0],'naya-lede') + '<div class="naya-archive-grid">' + archiveObjects.map((o,i)=>'<article class="naya-archive-card"><img loading="lazy" decoding="async" src="'+esc(o.img)+'" alt="'+esc(o.title)+'"><div class="naya-object-meta"><span>Object '+String(i+1).padStart(2,'0')+'</span><span>'+esc(o.meta)+'</span></div><h3>'+esc(o.title)+'</h3>'+paragraphs(o.paragraphs)+'</article>').join('')+'</div>';
    libels.after(archive);
  }

  function run() {
    installStyles();
    updateHome();
    updateExhibition();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, {once:true});
  else run();
})();
