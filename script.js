document.addEventListener('DOMContentLoaded', () => {
    let webWeaver = "web weaver";
    let alchemistOfTheBrowser = "alchemist of the browser";
    let cssCloak = "CSS cloak";
    let javaScriptSpells = "JavaScript spells";
    let debuggingSpectacles = "debugging spectacles";
    let responsiveSea = "responsive sea";
    let seoWhisperer = "SEO whisperer";
    let gitAlchemist = "Git alchemist";
    let webDeveloper = "web developer";

    let sentence1 = "In the <mark><span>realm</span></mark> of ones and zeros<span>,</span>";
    let sentence2 = "Where <mark><span>pixels</mark></span> dance and <mark><span>code</mark></span> unfurls<span>,</span>";
    let sentence3 = "There resides a silent sorcerer<span>,</span>";
    let sentence4 = "A <mark><span><i> " + webWeaver + "</i></mark></span> with dreams and <mark><span>pearls</mark>.</span>";

    let sentence5 = "<mark><span>Mary</mark></span>, the <mark><span><i>" + alchemistOfTheBrowser + "</i></mark>,</span>";
    let sentence6 = "Wields her <mark><span>keyboard</mark></span> like a <mark><span>wand</mark>,</span>";
    let sentence7 = "She conjures <mark><span>pages</mark></span> from thin air<span>,</span>";
    let sentence8 = "<mark><span>Painting</mark></span> landscapes with lines so fond<span>.</span>";

    let sentence9 = "Her <mark<<span>fingers</mark></span> dance upon the <mark><span>keys</mark>,</span>";
    let sentence10 = "Crafting <mark><span>tags</mark></span> like musical notes<span>.</span>";
    let sentence11 = "<mark><span>HTML</mark</span> whispers secrets to the breeze<span>,</span>";
    let sentence12 = "As <mark><span>Mary</mark></span> orchestrates <mark><span>symphonies</mark></span> in quotes<span>.</span>";

    let sentence13 = "Next<span>,</span> she dons her <mark><span><i>" + cssCloak + "</i></mark>,</span>";
    let sentence14 = "<mark><span>Styling</mark></span> elements with flair and grace<span>.</span>";
    let sentence15 = "<mark><span>Colors bloom, fonts</mark></span> sing<span>,</span> layouts <mark><span>evoke</mark>,</span>";
    let sentence16 = "A <mark><span>visual</mark></span> ballet in this digital space<span>.</span>";

    let sentence17 = "But wait<span>,</span> the <mark><span>magic</mark></span> deepens still<span>,</span>";
    let sentence18 = "<mark><span>Mary</mark></span> summons <mark><span><i>" + javaScriptSpells + "</i></mark>.</span>";
    let sentence19 = "Interactivity blooms at her <mark><span>will</mark>,</span>";
    let sentence20 = "<mark><span>Forms</marks></span> validate<span>,</span> <mark><span>animations</mark></span> propel<span>.</span>";

    let sentence21 = "Yet<span>,</span> <mark><span>bugs</mark></span> creep in like shadows dark<span>,</span>";
    let sentence22 = " <mark><span>Mary</span></mark> dons er <mark><span><i>" + debuggingSpectacles + "</i></mark>.</span>";
    let sentence23 = "Chasing  <mark><span>glitches</span></mark> through the <mark><span>code's arc</mark>,</span>";
    let sentence24 = "She <mark><span>tames</mark></span> wild loops and elusive <mark><span>variables</mark>.</span>";          

    let sentence25 = "<mark><span>Across</mark></span> screens<span>,</span> <mark><span>devices</mark>,</span> and dimensions<span>,</span>";
    let sentence26 = "<mark><span>Mary</mark></span> sails on the <mark><span><i>" + responsiveSea + "</i></mark>,</span>";
    let sentence27 = "Media queries <mark><span>guide</mark></span> her intentions<span>,</span>";
    let sentence28 = "<mark><span>Adapting</mark></span> layouts with <mark><span>fluidity</mark>.</span>";

    let sentence29 = "In the <mark><span>labyrinth</mark></span> of search engines<span>,</span>";
    let sentence30 = "<mark><span>Mary</mark></span> becomes an <mark><span><i>" + seoWhisperer + "</i></mark>,</span>";
    let sentence31 = "<mark><span>Meta tags</mark>,</span> keywords, backlink strings<span>,</span>";
    let sentence32 = "She crafts pathways to digital <mark><span>wanderers</mark>.</span>";

    let sentence33 = "Version control<span>,</span> a <mark><span>mystical potion</mark>,</span>";
    let sentence34 = "<mark><span>Mary</mark></span> brews commits in <mark><span>Git's</mark></span> cauldron<span>,</span>";
    let sentence35 = "Branches fork<span>,</span> <mark><span>merge</mark></span> conflicts in motion<span>,</span>";
    let sentence36 = "Her <mark><span>repository</mark></span> a saga of <mark><span>code</mark></span> reborn<span>.</span>";

    let sentence37 = "And when the <mark><span>moon</mark></span> kisses the horizon<span>,</span>";
    let sentence38 = "<mark><span>Mary</mark></span> unfurls her creation to the <mark><span>world</mark>,</span>";
    let sentence39 = "<mark><span>Deployments</mark></span> like shooting stars<span>,</span> arisen<span>,</span>";
    let sentence40 = "Her <mark><span>website</mark></span> sails<span>,</span> its sails <mark><span>unfurled</mark>.</span>";

    let sentence41 = "So here's to <mark><span>Mary</span></mark>, the <mark><span><i>" + webDeveloper + "</mark>,</i></span>";
    let sentence42 = "A poet of <mark><span>pixels</mark>,</span> a composer of <mark><span>clicks</mark>,</span>";
    let sentence43 = "In the <mark><span>binary</mark><span> symphony<span>,</span> She's the reveler<span>,</span>";
    let sentence44 = "Weaving dreams into the digital <mark><span>matrix</mark>.</span>";

    let sentence45 = "<mark><span><i>Mary, may your lines be bug-free,</i></mark></span>";
    let sentence46 = "<mark><span><i>May your CSS always cascade gracefully,</i></mark></span>";
    let sentence47 = "<mark><span><i>And may your JavaScript forever flow,</i></mark></span>";
    let sentence48 = "<mark><span><i>As you navigate the web's eternal ebb and flow.</i></mark></span>";

    let contentDiv = document.getElementById("content");

    contentDiv.innerHTML += "<h1>Ode to Mary: The Web Weaver</h1>";
    contentDiv.innerHTML += "<p>" + sentence1 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence2 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence3 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence4 + "</p>";
    contentDiv.innerHTML += "<h2>I. The Blank Canvas</h2>";
    contentDiv.innerHTML += "<p>" + sentence5 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence6 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence7 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence8 + "</p>";
    contentDiv.innerHTML += "<h2>II. The HTML Symphony</h2>";
    contentDiv.innerHTML += "<p>" + sentence9 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence10 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence11 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence12 + "</p>";
    contentDiv.innerHTML += "<h2>III. The CSS Enchanter</h2>";
    contentDiv.innerHTML += "<p>" + sentence13 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence14 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence15 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence16 + "</p>";
    contentDiv.innerHTML += "<h2>IV. The JavaScript Magician</h2>";
    contentDiv.innerHTML += "<p>" + sentence17 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence18 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence19 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence20 + "</p>";
    contentDiv.innerHTML += "<h2>V. The Debugging Sage</h2>";
    contentDiv.innerHTML += "<p>" + sentence21 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence22 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence23 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence24 + "</p>";
    contentDiv.innerHTML += "<h2>VI. The Responsive Voyager</h2>";
    contentDiv.innerHTML += "<p>" + sentence25 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence26 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence27 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence28 + "</p>";
    contentDiv.innerHTML += "<h2>VII. The SEO Whisperer</h2>";
    contentDiv.innerHTML += "<p>" + sentence29 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence30 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence31 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence32 + "</p>";
    contentDiv.innerHTML += "<h2>VIII. The Git Alchemist</h2>";
    contentDiv.innerHTML += "<p>" + sentence33 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence34 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence35 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence36 + "</p>";
    contentDiv.innerHTML += "<h2>IX. The Deployment Dreamer</h2>";
    contentDiv.innerHTML += "<p>" + sentence37 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence38 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence39 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence40 + "</p>";
    contentDiv.innerHTML += "<h2>X. The Web Developer's Anthem</h2>";
    contentDiv.innerHTML += "<p>" + sentence41 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence42 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence43 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence44 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence45 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence46 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence47 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence48 + "</p>";
});