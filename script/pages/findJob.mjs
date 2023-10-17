const questions = {
    findJob: [
        {
            name: 'Realistic',
            tests: [
                {
                    q: '1. Men açyk howada işlemegi halaýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '2. Maşynlar ýa-da gurallar bilen işlemekden lezzet alýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '3. Kompýuterler we tehnologiýa bilen işlemegi halaýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '4. Ellerim bilen zatlary gurmakdan ýa-da düzmekden lezzet alýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '5. Men zatlary gurmagy we bejermegi halaýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '6. Men gurallary we enjamlary aňsatlyk bilen ulanyp bilýärin',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '7. Men amaly ýa-da tejribeli işleri etmegi halaýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '8. El bilen işlemekden we fiziki işlerden lezzet alýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
            ]
        },
        {
            name: 'Investigative',
            tests: [
                {
                    q: '1. Men ylmy gözlegler bilen gyzyklanýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '2. Men çylşyrymly meseleleri çözmäge ökde',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '3. Men zatlary synlamaga we seljermäge ökde',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '4. Täze zatlar öwrenmegi we bilimimi giňeltmegi halaýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '5. Mende güýçli matematika we logika endikleri bar',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '6. Meseläni çözmek üçin gowy endiklerim bar',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '7. Çylşyrymly meseleleriň çözgüdini tapmagy halaýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '8. Dürli meseleleriň nähili çözülýändigi  bilen gyzyklanýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '9. Sanlar we maglumatlar derňewi bilen işlemekden lezzet alýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
            ]
        },
        {
            name: 'Artistic',
            tests: [
                {
                    q: '1. Döredijilikli bolmakdan we sungat arkaly özümi beýan etmekden lezzet alýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '2. Täze zatlary bezemegi (dizaýn) etmegi we döretmegi halaýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '3. Meselelere döredijilikli çözgüt tapmakdan lezzet alýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '4. Men hyýal etmekden we pikirlenmekden lezzet alýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '5. Mende surat çekmek, aýdym-saz aýtmak ýa-da çeper eser, hekaýa ýazmak ýaly çeperçilik ukyplarym bar',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '6. Meniň pikirimçe döredijilik we innowasiýa möhüm',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '7. Döredijilikli öz-özümi beýan etmegi başarýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                }
            ]
        },
        {
            name: 'Social',
            tests: [
                {
                    q: '1. Başgalara öwretmäge ýa-da maslahat bermäge özümi ökde hasaplaýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '2. Men adamlar bilen işleşmegi we olara kömek etmegi halaýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '3. Sözler we diller bilen işlemekden lezzet alýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '4. Adamlaryň özlerini alyp barşyna düşünmek isleýärin',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '5. Men toparlaryn iş etmekde ökde',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '6. Men adamlar bilen aragatnaşyk gurmakdan lezzet alýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '7. Men başgalaryň abadançylygy barada alada edýärin',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '8. Adamlaryň hyjuwlaryna we özüni alyp barşyna düşünýärin',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '9. Dürli adamlar bilen gowy aragatnaşyk saklaýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '10. Başgalaryna kömek etmegiň möhümdigine ynanýaryn.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
            ]
        },
        {
            name: 'Enterprising',
            tests: [
                {
                    q: '1. Töwekgelçilik etmekden we täze kärhanalara açmagy we ýöretmegi isleýarin',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '2. Men başgalary ynandyrmaga we olara täsir etmäge ökde',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '3. Häkimiýeti dolandyrmak ýaly wezipeleri halaýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '4. Jikme-jikliklere üns berýärin',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '5. Men telekeçi bolamgy we mümkinçilikleri gözlemegi isleýärin',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
            ]
        },
        {
            name: 'Conventional',
            tests: [
                {
                    q: '1. Sanlar we maglumatlar bilen işlemegi halaýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '2. Taslamalary guramagy we dolandyrmagy halaýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '3. Men maglumatlary guramagy we yzarlamagy halaýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '4. Howply ýada jogapkärli ýagdaýlarda ýolbaşçylyk etmekden we jogapkärçilik çekmekden lezzet alýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '5. Jikme-jikliklere üns berýärin we takyklygy hem-de yzygiderligi saklaýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '6. Maliýe maglumatlary seljermekden lezzet alýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '7. Maglumat aňsatlyk bilen ulanyp bilýärin',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '8. Meýilnamalaşdyrmak we meýilleşdirmek ýaly administratiw meselelerden lezzet alýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '9. Men ýokary guramaçylykly we täsirli bolup başarýaryn',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
            ]
        },
    ]
}


const answers = {
    findJob: [
        {
            name: questions.findJob[0].name,
            jobs: 'Uçarman, daýhan, bagban, gurluşykçy, inezener, ýaragly gullugyň işgärleri, mehanik, abzalçy, elektrikçi, kompýuter tehnigi, seýilgäh dolandyryjysy, sportçy,   weterinar we harby,  geologiýa, geofizika, nebit ineener, nebit geologiýasy, radiografiýa'
        },
        {
            name: questions.findJob[1].name,
            jobs: 'Ylym işgäri, gözlegçi, lukmançylyk we saglyk hünärleri, himikçi, deňiz alymy, tokaý tehnigi, lukmançylyk ýa-da oba hojalygy barlaghanasynyň tehnigi, haýwanlary goraýjy, diş lukmany, lukman, biolog, ulgam gözegçisi'
        },
        {
            name: questions.findJob[2].name,
            jobs: 'Suratkeş, komputer dizaýneri, suratçy, gol ýazyjy, kompozitor, aýdymçy, sazanda, tansçy, aktýor, habarçy, ýazyjy, redaktor, mahabat beriji, dellekçi, moda dizaýneri, arhitektor'
        },
        {
            name: questions.findJob[3].name,
            jobs: 'Mugallym, şepagat uýasy, şepagat uýasynyň kömekçisi, geňeşçi, polisiýa işgäri, jemgyýetçilik işgäri, satyjy, müşderi hyzmat gullugynyň işgäri, ofisiant, kätip'
        },
        {
            name: questions.findJob[4].name,
            jobs: 'Satyjy, aklawçy, syýasatçy, buhgalter,telekeçi, ýerine ýetiriji ýa-da dolandyryjy, syýahat agenti, aýdym-saz ýa-da sport bilen meşgullanýan, marketingçi'
        },
        {
            name: questions.findJob[5].name,
            jobs: 'Döwlet sekretary, kabul ediji, ofis işgäri, kitaphanaçy, bank işgäri, kompýuter operatory, kätip, buhgalter'
        },
    ]
}


let testsCards = document.getElementById('tests_cards');

function testContent() {
    let testsCardsContent = ''

    let testCardsName = ''
    let testCardsQuestion = ''
    for (let i = 0; i < questions.findJob.length; i++) {
        testCardsName += `<p class="cat_name">${questions.findJob[i].name}</p>`
        for (let j = 0; j < questions.findJob[i].tests.length; j++) {
            testCardsQuestion += `
                <div class="card_item">
                    <p class="test_q">${questions.findJob[i].tests[j].q}</p>
                    <ul class="test_ans">
                        <li onclick="testAnswerYes(${i}, ${j})" class="${questions.findJob[i].tests[j].sy ? 'checked' : ''}" id="yes">hawa</li>
                        <li onclick="testAnswerNo(${i}, ${j})" class="${questions.findJob[i].tests[j].sn ? 'checked' : ''}" id="no">yok</li>
                    </ul>
            </div>
            `
        }
        testsCardsContent += (testCardsName + testCardsQuestion);
        testCardsName = ''
        testCardsQuestion = ''
    }

    testsCards.innerHTML = testsCardsContent
}

testContent()


let realistic = 0
let investigative = 0
let artisitc = 0
let social = 0
let enterpricing = 0
let convential = 0


let resultBtn = document.getElementById('result_btn')

function testAnswerYes(i, j) {
    questions.findJob[i].tests[j].sy = true
    questions.findJob[i].tests[j].sn = false

    testContent()
    resultBtn.classList.remove('hide')

    switch (questions.findJob[i].name) {
        case questions.findJob[0].name:
            realistic += 1
            break;
        case questions.findJob[1].name:
            investigative += 1
            break;
        case questions.findJob[2].name:
            artisitc += 1
            break;
        case questions.findJob[3].name:
            social += 1
            break;
        case questions.findJob[4].name:
            enterpricing += 1
            break;
        case questions.findJob[5].name:
            convential += 1
            break;
    }
}


function testAnswerNo(i, j) {
    questions.findJob[i].tests[j].sy = false
    questions.findJob[i].tests[j].sn = true

    testContent()
    resultBtn.classList.remove('hide')
}

let result = []

let findJob = document.getElementById('ability')
let resultContent = document.getElementById('result')

function showResult_fn() {
    result.push({ name: questions.findJob[0].name, count: realistic });
    result.push({ name: questions.findJob[1].name, count: investigative });
    result.push({ name: questions.findJob[2].name, count: artisitc });
    result.push({ name: questions.findJob[3].name, count: social });
    result.push({ name: questions.findJob[4].name, count: enterpricing });
    result.push({ name: questions.findJob[5].name, count: convential });


    result.sort(function (a, b) { return a.count - b.count });

    let newResult = {}

    for (let i = 0; i < answers.findJob.length; i++) {
        if (result[result.length - 1].name == answers.findJob[i].name) {
            newResult = answers.findJob[i]
        }
    }

    let jobsArr = newResult.jobs.split(',')
    let jobs = ''
    for (let i = 0; i < jobsArr.length; i++) {
        jobs += `<li>${jobsArr[i]}</li>`
    }


    let userName = ''
    if (localStorage.getItem('user')) {
        let user = JSON.parse(localStorage.getItem('user'))
        userName = `${user.name} ${user.surname}`
    }


    findJob.classList.add('hide')
    resultContent.classList.remove('hide')

    resultContent.innerHTML = `
            <div class="content">
            <p class="ability_result_title">Synag netijesi:</p>
            <div class="top_sides">
            <div class="left">
                <img src="./../../assets/images/r1.jpg" alt="" />
            </div>
            <div class="right">
                <p><span class="username">${userName}</span>, Siz <span>${newResult.name}:</span></p>
            </div>
            </div>
            <div class="bottom_sides">
            <div class="left">
                <p>Kärleri:</p>
                <ul>
                    ${jobs}
                </ul>
            </div>
            <div class="right">
                <img src="./../../assets/images/r2.jpg" alt="" />
            </div>
            </div>
        </div>
    `

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