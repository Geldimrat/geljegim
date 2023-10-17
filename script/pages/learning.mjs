const questions = {
    tests: [
        {
            q: '1. Komputeri nähili ulanmalydygyny öwrenemde,men makul bilýärin:',
            a1: 'Ilki düşündirişi okamagy',
            b1: 'Ilki bilen birinden nähili etmelidigini soramagy',
            c1: 'Komputer ulanyp başlamak we gerek ýerinde kömek soramagy',
            a: false,
            b: false,
            c: false,
        },
        {
            q: '2. Nätanyş ýere gideniňde, salgyny tapmak üçin saňa haýsysy makul:',
            a1: 'Karta seretmek',
            b1: 'Biriniň salgy bermegi',
            c1: 'Bilýän biri bilen gitmek ýa-da bilýän adamyň yzyna düşmek',
            a: false,
            b: false,
            c: false,
        },
        {
            q: '3. Telefon belgileri ýatda saklamak üçin men:',
            a1: 'Telefon belgä seredýärin we birnäçe gezek jaň aýlaýaryn',
            b1: 'Telefon belgini birnäçe gezek ýuwaş ýa-da gaty sesli gaýtalaýaryn',
            c1: 'Ýatda saklamaklyk üçin klawiaturadaky düwmelere basýaryn, olaryň seslerne görä ýa-da ýazyp ýat tutýaryn',
            a: false,
            b: false,
            c: false,
        },
        {
            q: '4. Dynç almak üçin men makul bilýärin:',
            a1: 'Kitaplary ýa-da ẑurnallary okamagy',
            b1: 'Saz çalmagy ýa-da diňlemegi',
            c1: 'Ýörişe gitmegi ýa-da fiziki taýdan işlemegi',
            a: false,
            b: false,
            c: false,
        },
        {
            q: '5. Men _______ ökderäk:',
            a1: 'Okamaga',
            b1: 'Gürlemäge',
            c1: 'Fiziki hereketleri etmäge',
            a: false,
            b: false,
            c: false,
        },
        {
            q: '6. Mekdepde meniň has gowy öwrenýän usulym:',
            a1: 'Okamak arkaly',
            b1: 'Diňlemek arkaly',
            c1: 'El bilen etmek arkaly',
            a: false,
            b: false,
            c: false,
        },
        {
            q: '7. Men has ymtylýaryn:',
            a1: 'Pikirlenýän adam bolmaga',
            b1: 'Gürleýän adam bolmaga',
            c1: 'Ýerine ýetirýän adam bolmaga',
            a: false,
            b: false,
            c: false,
        },
        {
            q: '8. Haçanda men synaga taýýarlanjak bolanymda has gowy ýadymda galýar',
            a1: 'Maglumatlary okap, keşbini ýadymda janlandyranymda',
            b1: 'Okap pikirleri içimden ýa-da daşymdan aýdanymda',
            c1: 'Möhüm sözleriň aşagyny çyzanymda we bellikleri edenimde',
            a: false,
            b: false,
            c: false,
        },
        {
            q: '9. Ýatda saklamagyň aňsat ýoly, meniň üçin:',
            a1: 'Ýüzleri',
            b1: 'Atlary',
            c1: 'Wakalary',
            a: false,
            b: false,
            c: false,
        },
        {
            q: '10. Men şenbe günleri _____ halaýaryn:',
            a1: 'Kino gitmegi',
            b1: 'Konserda gitmegi',
            c1: 'Atletika gatnaşmagy ýa-da daşarda bolmagy',
            a: false,
            b: false,
            c: false,
        },
        {
            q: '11. Ýokary okuw jaýlarynda bolmaly möhüm zatlaryň biri:',
            a1: 'Suratly, çyzgyly we diagramaly gowy okuw kitaplary',
            b1: 'Gyzykly leksiýalary berýän ökde mugallymlar',
            c1: 'El hereketleri bn ýa-da amaly ýerine ýetirilýän işlerler',
            a: false,
            b: false,
            c: false,
        },
        {
            q: '12. Öwrenmek üçin ______ has aňsady:',
            a1: 'Okamak we temany özleşdirmek',
            b1: 'Başgalar bilen tema barada gürleşmek',
            c1: 'Bellikler etmek',
            a: false,
            b: false,
            c: false,
        },
        {
            q: '13. Ýolumy ýitiren wagtym (azaşan wagtym)  makul bilýärin:',
            a1: 'Karta seredip tapmagy',
            b1: 'Jaň edip ýa-da birinden sorap tapmagy',
            c1: 'Tanyş ýere barýançam ýoly dowam edip tapmagy',
            a: false,
            b: false,
            c: false,
        },
        {
            q: '14. Haçanda nahar bişiremde men ýygy ýygydan:',
            a1: 'Täze reseptlara seredýärin',
            b1: 'Täze pikirleri alamak üçin başgalar bilen gürrüňdeş bolýaryn',
            c1: 'Öz adaty bişirşimçe edýärin we ol adatça oňat bolýar',
            a: false,
            b: false,
            c: false,
        },
        {
            q: '15. Täze oýnawajy ýa-da öý goşlarynyň böleklerini gurnanymda:',
            a1: 'Ilki düşündirişini okaýaryn',
            b1: 'Her ädimde özüm alyp çykýaryn',
            c1: 'Özüm edip başlaýaryn we bilmedik ädimlerimi düşündirişden öwrenýärin',
            a: false,
            b: false,
            c: false,
        },
        {
            q: '16. Meseläni çözenimde has peýdaly ýol bu:',
            a1: 'Meselä degişli iň köp satylan kitaplary okamak',
            b1: 'Ynamly dostum bilen gürleşmek',
            c1: 'Şol mesele babatda bir zatlar etmek',
            a: false,
            b: false,
            c: false,
        },
        {
            q: '17. Haýsy sözlem has göwnüňe ýaraýar:',
            a1: 'Bir surat 1000 söz baýlygyna eýe',
            b1: 'Maňa aýt men düşünerin',
            c1: 'Diňe ýerine ýetir',
            a: false,
            b: false,
            c: false,
        },
        {
            q: '18. Haçanda men çaga wagtym men:',
            a1: 'Okamana, surat çekmäne köp wagtymy sarp edýärdim',
            b1: 'Dostlarym köpdi we hemişe telefonda gürleşýärdim',
            c1: 'Täze zatlary işleýşine seretmän alýardym',
            a: false,
            b: false,
            c: false,
        },
    ]
}

const answers = {
    tests: [
        {
            name: 'Görmek arkaly öwrenýän öwrenijiler',
            text: 'Visual öwrenijiler seretmek bilen has gowy öwrenýärler. Şeýle hem, köplenç käbir temalarda, pikirleri we meseleleri şekiller bilen baglanyşdyrýarlar. <br/> <br/> Iň oňat öwrenmek usullary: diagrammalar we grafikler  bu öwrenijiler üçin niýetlenen. Eger siz ýazylan gollanmalardan öwrenýän bolsaňyz onda ýazyp otyrkaňyzam has gowy öwrenip bilýäňiz. Size ýygnaklarda mesele bilen bagly bellikleri almak peýdalydyr.',
            adv_name: 'Görmek arkaly öwrenýän diňleýjilere maslahatlar:',
            adv_text: ['Diagrammalary we grafiklary ulanmak.', 'Ýadyňyzda sahypalary keşp ediň', 'Möhüm sözleri şol sözüň baş harpy bilen ýa-da nyşanlar (symbollar) bilen çalşyň', 'Möhüm terminlary reňkler arkaly boýaň'],
            jobs_name: 'Görmek arkaly öwrenýän öwrenijiler:',
            jobs: ['Çeperçilik ukybyna eýe bolup biler.', 'Okamany halaýar', 'Olar grafiklary we suratlary görüp ýatda saklap bilýärler', 'Dilden düşündirmäni kyn görýärler', 'Golýazmalary ýazmakda ökde', 'Adamlaryň ýüzlerini ýatda saklap bilýäler', 'Öňdebaryjy meýilnamalary düzüp bilýäler', 'Başga bir zat hakda pikirlenende ýa-da içgysgynç wagtynda surat ýa-da nagyş çekýärler', 'Ýuwaş häsiýetli', 'Seresaply we daşky görnüşi hem tertipli', 'Jikme-jiklere üns bererýä', 'Reňkleri we modany halaýar', 'Diagrammalar we nyşanlar bilen gowy işleýär', 'Arzuwlary has öwüşgünli', 'Sessiz düşünmegi gerekli hasap edýäler', 'Orfografiýa (aýtmak) taýdan ökde bolsa-da,  terminleri ýa-da atlary ýatdan çykararlar.'],
            good_job_name: 'Görmek arkaly öwrenýän öwrenijiler üçin iň oňat iş:',
            good_job_text: 'Diagramma bilen işlemek, ýatda saklamak üçin beýniňde suratlandyrmak , düzmeleri ýazmak, seretmek arkaly öwrenmek, anyk wagtyny we maksadyny görkezýän diagrammaly algaritimleri düzmek.',
            bad_job_name: 'Görmek arkaly öwrenýän öwrenijiler üçin iň erbet iş:',
            bad_job_text: 'Söhbetdeşlikler, eşitmek we soraglara jogap bermek.'
        },
        {
            name: 'Eşitmek arkaly öwrenýän öwrenijiler',
            text: 'Eşidiş öwrenijiler diňlemek we gürlemek arkaly maglumat alýarlar. Käbir jikme-jikliklere doly düşünmek üçin bu öwrenijiler görkezmeleri diňlemegi we käwagt dilden gaýtalamagy makul bilýärler. <br/> <br/> <br/> Kimdir biri nädip etmelidigini  dilden düşündirende  gowy işleýärsiňiz. Haçanda siz sorag bereniňizde temany has gowy düşünýärsiniň. Okuw  ýazgylaryny diňlemek peýdaly bolup biler - mysal üçin ses formatlarynda  synag gollanmalary. Bu mümkin däl bolsa, materialy sesli okanyňyzda özüňizi ýazga alyň - ýazgyny soň diňlemek maglumaty has gowy berkitmäne kömek edip biler. <br/> <br/> Eşidiş öwrenijileri täze mazmunlary(temalary) eşitmek we gürlemek arkaly has gowy düşünýärler ýagny leksiýalarda ýa-da toparlaýyn çekeleşmelerde. Bu öwrenijiler şol temany gaýtalamak ýa-da ses enjamlaryň üsti bilen has gowy öwrenip bilýärler.',
            adv_name: 'Eşidiş diňleýjilere maslahatlar:',
            adv_text: ['Bellikleriňizi sesli ýazga alyň we olary diňläň.', 'Daşyňyzdan okaň. Egerde tema düşinmeýän bolsaňyz başga bilýän adamlar bilen pikir alşyň.', 'Bellikleriňizi ýa-da ýumuşyňyzy sesli okaň.', 'Bellikleriňizi başgalara düşindiriň.'],
            jobs_name: 'Eşidiş öwreniji:',
            jobs: ['Gepleşik ugurlaryny gowy ýerine ýetirýär.', 'Gaty ses bilen okamagy halaýar.', 'Özi bilen sesli gürleşýär.', 'Toparlaýyn işde gowy.', 'Toparda gürlemekden gorkmaýar.', 'Dilden hasabat bermegi halaýar.', 'Uzak wagtlap dymyp bilenok.', 'Düşündirmäge ökde.', 'Ara alyp maslahatlaşmakdan lezzet alýar.', 'Islendik atlary ýatda saklaýar.', 'Filmlerdäki ses effektlerine üns berýär.', 'Sazdan lezzet alýar.', 'Grammatika we daşary ýurt dillerini gowy bilýär.', 'Sese ünsi tiz bölünýä.', 'Aýdym aýtmany ýa-da hiňlenmäni halaýar.', 'Göwniaçyk adam.', 'Eşitmek ýaly oýunlardan lezzet alýar.'],
            good_job_name: 'Eşitmek arkaly öwrenýän öwrenijiler üçin iň oňat iş:',
            good_job_text: 'Auditory öwrenijiler eşiden okuwlaryna jogap ýazmaga ökde bolsalar-da, dilden sorag bermekde has gowy.',
            bad_job_name: 'Eşitmek arkaly öwrenýän öwrenijiler üçin iň erbet iş:',
            bad_job_text: 'Synag wagtynda bölekleýin hekeýalary okamak we jogap bermek.'
        },
        {
            name: 'Ellemek arkaly öwrenýän öwrenijiler',
            text: 'Ellemek arkaly öwrenýän öwrenijiler bular ýerine ýetirjilerdir. Bu öwrenijiler uzyn günläp diňläp hem okap bilýäler ýöne olara amaly ýa-da elläp görüp öwrenip bolýan işleri edenlerinde has höwesli ýerine ýetirýärler. <br/> <br/> Näme edýändigiňize doly düşünmek üçin, hemme zadyň hakyky wagtda nähili işleýändigini anyk görmegiňiz gerek. Kimdir biriniň maglumat bereninden edenini göreniňde köp zat öwrenip bilmersiň, şonuň üçin özüňiz etjek bolanyňyzda tälimçiňizden görkezmeler bermegini haýyş ediň.',
            adv_name: 'Ellemek arkaly öwrenýän öwrenijilere maslahatlar:',
            adv_text: ['Abstrakt düşünjelere kömek etmek üçin gysgaça mazmunda hakyky durmuş mysallaryny, amaly programmalary we mysallary ulanyň.', 'Tejribeleri we proýektlary gaýtalaň.', 'Suratlary öz pikiriňiz bilen baglanyşdyryp ulanyň.'],
            jobs_name: 'Ellemek arkaly öwrenýän öwrenijiler:',
            jobs: ['Fiziki hereketleri halaýar.', 'Köp wagtyny hereketde  geçirýär.', 'Gepleşende adamlara degmegi halaýar.', 'Okamak möhüm zat däl olar üçin.', 'Meseleleri fiziki taýdan işlemek arkaly çözmegi halaýar.', 'Täze zatlary synap görmegi halaýarlar.', 'Duýgularyny hereketli usullar bilen beýan edýär.', 'Gürlänlerinde ellerini hereketlendirýärler.', 'Egin-eşikleri olar üçin rahat bolmaly.'],
            good_job_name: 'Ellemek arkaly öwrenýän öwrenijiler üçin iň erbet iş:',
            good_job_text: 'Uzyn synaglary tabşyrmak, düzme ýazmak.',
            bad_job_name: 'Ellemek arkaly öwrenýän öwrenijiler üçin iň oňat iş:',
            bad_job_text: 'Köp ugurly saýlawlara gatnaşmak, amaly işler ýerine ýetirmek, gysga manyly sözler bilen işlemek.'
        },
    ]
}

let testsCards = document.getElementById('learning_test_cards');

function testContent() {
    let testsCardsContent = ''
    let testCardsQuestion = ''

    for (let i = 0; i < questions.tests.length; i++) {
        testCardsQuestion += `
                <div class="card_item">
                    <p class="test_q">${questions.tests[i].q}</p>
                    <ul class="test_ans">
                        <li onclick="testAnswerA(${i})" class="${questions.tests[i].a ? 'checked' : ''}">${questions.tests[i].a1}</li>
                        <li onclick="testAnswerB(${i})" class="${questions.tests[i].b ? 'checked' : ''}">${questions.tests[i].b1}</li>
                        <li onclick="testAnswerC(${i})" class="${questions.tests[i].c ? 'checked' : ''}">${questions.tests[i].c1}</li>
                    </ul>
            </div>
            `
    }
    testsCardsContent += testCardsQuestion

    testsCards.innerHTML = testsCardsContent
}

testContent()


let resultBtn = document.getElementById('result_btn')

function testAnswerA(i) {
    questions.tests[i].a = true
    questions.tests[i].b = false
    questions.tests[i].c = false

    testContent()

    resultBtn.classList.remove('hide')
}

function testAnswerB(i) {
    questions.tests[i].a = false
    questions.tests[i].b = true
    questions.tests[i].c = false

    testContent()

    resultBtn.classList.remove('hide')
}

function testAnswerC(i) {
    questions.tests[i].a = false
    questions.tests[i].b = false
    questions.tests[i].c = true

    testContent()

    resultBtn.classList.remove('hide')
}


let result = []

let learning = document.getElementById('learning')
let resultContent = document.getElementById('result')



function showResult_fn() {

    let userName = ''
    if (localStorage.getItem('user')) {
        let user = JSON.parse(localStorage.getItem('user'))
        userName = `${user.name} ${user.surname}`
    }

    let valueFinder = ''

    for (let i = 0; i < questions.tests.length; i++) {
        if (questions.tests[i].a) {
            valueFinder = `a`
            result.push(valueFinder)
            valueFinder = ''
        } else if (questions.tests[i].b) {
            valueFinder = 'b'
            result.push(valueFinder)
            valueFinder = ''
        } else if (questions.tests[i].c) {
            valueFinder = 'c'
            result.push(valueFinder)
            valueFinder = ''
        }
    }

    let a = result.filter((e) => {
        return e == 'a'
    })
    let b = result.filter((e) => {
        return e == 'b'
    })
    let c = result.filter((e) => {
        return e == 'c'
    })

    let maxNum = 0;
    let aL = a.length;
    let bL = b.length;
    let cL = c.length;
    if (aL > bL && aL > cL) {
        maxNum = 0
    } else if (bL > aL && bL > cL) {
        maxNum = 1
    } else {
        maxNum = 2
    }

    let newResult = answers.tests[maxNum]

    let newResContent = ''
    let resContent = document.getElementById('result')

    let adv_text = ''
    for (let i = 0; i < newResult.adv_text.length; i++) {
        adv_text += `<li>${newResult.adv_text[i]}</li>`
    }

    let jobs = ''
    for (let i = 0; i < newResult.jobs.length; i++) {
        jobs += `<li>${newResult.jobs[i]}</li>`
    }

    newResContent = `
            <div class="content">
                <p class="result_title">Synag netijesi:</p>
                <div class="result_content" id="result_content">
                    <p class="name"><span>${userName}</span>, Siz ${newResult.name}</p>
                    <div class="sides">
                        <div class="left">
                        <p>${newResult.text}</p>
                        </div>
                        <div class="right">
                        <img src="./../../assets/images/r3.jpg" alt="" />
                        </div>
                    </div>
                    <div class="advices">
                        <p class="name">${newResult.adv_name}</p>
                        <ul>${adv_text}</ul>
                    </div>
                    <div class="advices">
                        <p class="name">${newResult.jobs_name}</p>
                        <ul>${jobs}</ul>
                    </div>
                    <div class="good_job">
                        <p class="name">${newResult.good_job_name}</p>
                        <p class="text">${newResult.good_job_text}</p>
                    </div>
                    <div class="good_job">
                        <p class="name">${newResult.bad_job_name}</p>
                        <p class="text">${newResult.bad_job_text}</p>
                    </div>
                </div>
            </div>
    `

    resContent.innerHTML = newResContent

    learning.classList.add('hide')
    resultContent.classList.remove('hide')

    result = []
}




let docTitle = document.title
window.addEventListener("blur", () => {
    document.title = "Come back :("
})

window.addEventListener("focus", () => {
    document.title = docTitle
})







function onload_fn() {
    if (localStorage.getItem("user") == null) {
        window.location = "http://127.0.0.1:5500/index%20.html";
    }
}