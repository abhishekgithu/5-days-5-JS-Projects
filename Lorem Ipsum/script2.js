const text = [
    `I'm baby tbh aesthetic mukbang cold-pressed, taxidermy irony man braid. Tbh four loko ugh pabst, artisan cliche portland four dollar toast DSA letterpress af. Hella vibecession edison bulb meh. Fingerstache austin mixtape iceland meh cold-pressed blog trust fund, roof party Brooklyn af before they sold out. Vice vibecession flannel narwhal food truck man braid kitsch vape hot chicken bushwick hammock offal marfa la croix.`,
    `Post-ironic twee ramps activated charcoal yuccie. Typewriter taiyaki YOLO art party roof party fixie woke. Yr selvage etsy cliche authentic wolf polaroid pop-up bushwick next level sartorial. Kogi enamel pin farm-to-table biodiesel, tbh mumblecore mixtape copper mug whatever fanny pack bitters YOLO tumblr glossier. Polaroid green juice next level heirloom. Man bun vape bushwick wolf.`,
    `Pok pok asymmetrical ethical snackwave, single-origin coffee forage taiyaki brunch yuccie cred raclette. Sus flannel adaptogen meh fingerstache shaman polaroid chicharrones single-origin coffee microdosing lomo messenger bag viral bespoke. Tonx vinyl vegan, glossier lumbersexual forage mixtape food truck seitan squid keytar poutine hoodie direct trade vibecession. Green juice glossier tonx cliche health goth enamel pin offal tofu.`,
    `Same single-origin coffee small batch tilde crucifix asymmetrical drinking vinegar bespoke hella waistcoat. Occupy intelligentsia raclette helvetica prism four dollar toast subway tile listicle iPhone 8-bit echo park. Keffiyeh brunch asymmetrical, blue bottle chambray tacos tote bag sartorial helvetica PBR&B polaroid gastropub. Freegan bodega boys before they sold out fam skateboard 8-bit venmo kitsch YOLO iPhone raclette.`,
    `Readymade meditation roof party humblebrag bruh organic. Selvage tilde hoodie actually drinking vinegar. Green juice dreamcatcher affogato street art, chicharrones salvia fit vexillologist schlitz big mood trust fund poutine tacos shaman chartreuse. Normcore craft beer man braid fixie yr portland four loko. Bruh yr four dollar toast biodiesel man bun pug ethical truffaut gochujang microdosing gluten-free tumblr humblebrag. XOXO kogi actually, lo-fi vape keffiyeh shoreditch pabst coloring book cred ugh cold-pressed paleo tote bag.`,
    `I'm baby tbh aesthetic mukbang cold-pressed, taxidermy irony man braid. Tbh four loko ugh pabst, artisan cliche portland four dollar toast DSA letterpress af. Hella vibecession edison bulb meh. Fingerstache austin mixtape iceland meh cold-pressed blog trust fund, roof party Brooklyn af before they sold out. Vice vibecession flannel narwhal food truck man braid kitsch vape hot chicken bushwick hammock offal marfa la croix.`,
    `Post-ironic twee ramps activated charcoal yuccie. Typewriter taiyaki YOLO art party roof party fixie woke. Yr selvage etsy cliche authentic wolf polaroid pop-up bushwick next level sartorial. Kogi enamel pin farm-to-table biodiesel, tbh mumblecore mixtape copper mug whatever fanny pack bitters YOLO tumblr glossier. Polaroid green juice next level heirloom. Man bun vape bushwick wolf.`,
    `Pok pok asymmetrical ethical snackwave, single-origin coffee forage taiyaki brunch yuccie cred raclette. Sus flannel adaptogen meh fingerstache shaman polaroid chicharrones single-origin coffee microdosing lomo messenger bag viral bespoke. Tonx vinyl vegan, glossier lumbersexual forage mixtape food truck seitan squid keytar poutine hoodie direct trade vibecession. Green juice glossier tonx cliche health goth enamel pin offal tofu.`,
    `Same single-origin coffee small batch tilde crucifix asymmetrical drinking vinegar bespoke hella waistcoat. Occupy intelligentsia raclette helvetica prism four dollar toast subway tile listicle iPhone 8-bit echo park. Keffiyeh brunch asymmetrical, blue bottle chambray tacos tote bag sartorial helvetica PBR&B polaroid gastropub. Freegan bodega boys before they sold out fam skateboard 8-bit venmo kitsch YOLO iPhone raclette.`,
    `Readymade meditation roof party humblebrag bruh organic. Selvage tilde hoodie actually drinking vinegar. Green juice dreamcatcher affogato street art, chicharrones salvia fit vexillologist schlitz big mood trust fund poutine tacos shaman chartreuse. Normcore craft beer man braid fixie yr portland four loko. Bruh yr four dollar toast biodiesel man bun pug ethical truffaut gochujang microdosing gluten-free tumblr humblebrag. XOXO kogi actually, lo-fi vape keffiyeh shoreditch pabst coloring book cred ugh cold-pressed paleo tote bag.`
]

const form = document.querySelector(".lorem-form");
const numofpara = document.getElementById("numofpara");
const numofparaRange = document.getElementById("numofparaRange");
const result = document.querySelector(".lorem-text");

function syncParaNumbers(e){
    const value =e.target.value;
    numofpara.value = value;
    numofparaRange.value = value;
}

form.addEventListener('submit', e=>{
    e.preventDefault();
    const value = parseInt(numofpara.value);
    let tempText = text.slice(0,value);
    tempText = tempText.map(item => `<p class="result">${item}</p>`).join("");
    result.innerHTML = tempText;
})

numofpara.addEventListener('input',syncParaNumbers);
numofparaRange.addEventListener('input',syncParaNumbers);