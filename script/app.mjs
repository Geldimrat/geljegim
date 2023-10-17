function valueChecker(e) {
    return typeof e == 'undefined' || e == "" || e == null
}

function focus_fn(e) {
    let labels = document.getElementsByTagName('label')

    if (e == 'u') {
        labels[0].classList.add('label')
        labels[1].classList.remove('label')
    } else if (e == 'p') {
        labels[1].classList.add('label')
        labels[0].classList.remove('label')
    } else {
        labels[0].classList.remove('label')
        labels[1].classList.remove('label')
    }
}

let header = document.getElementById('header')
let login = document.getElementById('login')
let home = document.getElementById('home')


let user = {
    name: '',
    surname: ''
}

let username = document.getElementById('username')
let profile = document.getElementById('profile')
let profile_letter = document.getElementById('profile_letter')

let skillTests = document.getElementById('skill_tests')

let name = document.getElementById('name')
let surname = document.getElementById('surname')

let p_name = document.getElementById('p_name')
let p_surname = document.getElementById('p_surname')

function register_page(e) {
    if (e == 'show') {
        header.classList.add('hide')
        home.classList.add('hide')
        login.classList.remove('hide')
    } else {
        header.classList.remove('hide')
        home.classList.remove('hide')
        login.classList.add('hide')

        if (localStorage.getItem('user')) {
            user = JSON.parse(localStorage.getItem('user'))
            name.value = user.name
            surname.value = user.surname
        }


        if (valueChecker(name.value) || valueChecker(surname.value)) {
            alert(`Adyňyzy we Familýaňyzy giriziň!!!`)
        } else {
            user = {
                name: name.value,
                surname: surname.value
            }
            localStorage.setItem('user', JSON.stringify(user))
        }

        profile.classList.remove('hide')
        skillTests.classList.remove('hide')
        username.classList.add('hide')
        profile_letter.innerHTML = user.name.substring(0, 1);
        p_name.innerHTML = user.name.substring(0, 10)
        p_surname.innerHTML = user.surname.substring(0, 10)


    }
}

function onload_fn() {
    if (localStorage.getItem('user') != null) {
        register_page('out')
    }
}

let toggleBtn = false
function profile_show_fn() {
    let dropdownContent = document.getElementById('dropdown-content')
    if (toggleBtn) {
        dropdownContent.classList.remove('hide')
    } else {
        dropdownContent.classList.add('hide')
    }
}

function log_out_fn() {
    profile_show_fn()

    localStorage.removeItem('user')

    profile.classList.add('hide')
    skillTests.classList.add('hide')
    username.classList.remove('hide')
}


const questions = {
    ability: [
        {
            name: 'Lingwistik (linguistic):',
            tests: [
                {
                    q: '1. Siz söz oýunlaryny oýnamakdan, hekaýalary okamakdan lezzet alýarsyňyz we degişmeleri we ýaňlytmaçlary aýtmagy halaýaňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '2. Siz hemme zatlary okaýarsyňyz- kitaplary, gazetlary, ẑurnallary we harytlaryň belliklerini.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '3. Siz özüňizi dilden ýa-da ýazuw üsti bilen ynamly suratlandyryp bilýärsiňiz. Siz ynandyryjy jedelçi we gowy hekaýa aýdyjy hem-de ýazyjy.  ',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '4. Siz adamlar bilen gepleşikleriňizde has köp öz gören ýa-da eşiden zatlaryňyz barada gürrüň berýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '5. Siz kraswordlary we söz pazzlary bilen işlemegi halaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '6. Siziň sözleýiş usulyňyz has gowy derejede we siz anyk sözleri ulanyp bilýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '7. Siziň mekdepde has gowy görýän sapaklaryňyz daşary ýurt dilleri, edebiýat we taryh.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '8. Siz jedellerde anyk we dogry sözleri ulanyp bilýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '9. Siz has anyk pikirlenmegi, meseleler barada soramagy, ýagdaýlary suratlandyrmagy, sorag bermegi halaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '10. Siz aňsatlyk bilen eşdip has gowy maglumat alyp bilýärsiňiz. ',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                }
            ]
        },
        {
            name: 'Logiki / Matematiki (Logical/Mathematical):',
            tests: [
                {
                    q: '1. Sanlar bilen işlemekden lezzet alýarsyňyz we akyl hasaplamalaryny (ýatdan köp belgili hasaplamalary) edip bilersiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '2. Täze ylmy ösüşler bilen gyzyklanýarsyňyz we olaryň işleýşini görmek üçin zatlar bilen synag geçirmegi halaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '3. Siz barlag kitapçalaryňyzy aňsatlyk bilen deňagramlykda saklap we býudjet döredip bilýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '4. Dynç alyş ýa-da syýahat üçin jikme-jik ugur düzmegi halaýarsyňyz. Köplenç edilmeli işleriň sanawyny taýýarlaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '5. Siz beýniňizi işledýän kyn oýunlaryny oýnamagy halýarsyňyz. Meselem: küşt, krassword w.ş.m',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '6. Siz aňsatlyk bilen başgalaryň aýdýan we edýän zatlarynyň kemçiliklerini bilip bilýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '7. Halaýan sapaklaryňyz matematika we ylym bilen bagly sapaklar.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '8. Meseleleri çözmäge yzygiderli, ädimme-ädim çemeleşýärsiňiz. Sanlaryň ýa-da obýektleriň arasyndaky baglanşyklary we gatnaşyklary tapmagy halaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '9. Zatlary topara bölmek üçin size şol zatlaryň gymmatlyklaryny has gowy bilmek gerek bolup durýar.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                }
            ]
        },
        {
            name: 'Wizual-giňişlik (Visual-Spatial):',
            tests: [
                {
                    q: '1. Döredijilikli sungata gowy baha berýärsiňiz we surat çekmekden hem-de heýkeltaraşlykdan lezzet alýarsyňyz. Reňkleri has gowy duýup bilýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '2. Wakalary ýazga geçirmegi surata almagy halaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '3. Siz birzat barada pikir edeniňizde ýa-da bellik alanyňyzda  bulaşyk çyzyklary çyzýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '4. Kartalary okamakda we ýol tapmakda kynçylyk çekmeýärler. Sizde gowy ýol tapyjylyk ukybyňyz bar.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '5. Siz oýunlary oýnamakdan we pazzlary çözmekden lezzet alýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '6. Siz zatlary aýryp olary täzelden jemlemäge ökde bolup bilersiňiz. Çagalara aňsatlyk bilen özüňize çekip hem-de aýdanlaryňyzy etdirip bilýäňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '7. Siz surat, algebra ýa-da matimatika we geometriýa sapaklaryny halaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '8. Diagramma ýa-da çyzgy bilen köplenç öz pikiriňizi aýdýarsyňyz we diagrammalary aňsatlyk bilen düşündirip bilýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '9. Bir zadyň başga adam tarapyndan seredilende nahili pikiriniň boljagyny ýa-da binanyň giňişlikde nähili görünip biljekdigini göz öňüne getirip bilýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '10.	Siz has çylşyrymly we köp suratly bezelen materýallary we kitaplary okamagy halaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                }
            ]
        },
        {
            name: 'Beden-Kinestetiki (Bodily-Kinesthetic):',
            tests: [
                {
                    q: '1. Sport bilen meşgullanýarsyňyz ýa-da haýsydyr bir fiziki maşklary yzygiderli ýerine ýetirýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '2. Siz “özüň etmeli” diýen şygara öwrenişdiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '3. Pyýada ýa-da aýlanyp ýörkäňiz kynçylyklar hakda pikirlenmegi halaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '4. Siz tans etmegi halaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '5. Howply atraksiýonly seýilgähleri halaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '6. Siz islendik zady elde tutup we hereketlendirip düşinip bilýärsiňiz. Siz bir zadyň görnüşini (modelini) ýasamakda we sudoka ýa-da pazzlary  çözmegi halaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '7. Iň gowy görýän sapakgyňyz bedenterbiýe. Hem-de siz heýkeltaraşlygy sungat eseri hökmünde lezzet alýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '8. Özüňizi beýan etmek üçin el hereketlerini ýa-da beden diliniň beýleki görnüşlerini ulanýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '9. Siz göreşmek ýaly oýunlary halaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '10.	Siz täze zady öwreneniňizde amaly görnüşde (elleriň bilen işlemek ýa-da tejribe arkaly etmek) öwrenmegiňiz size aňsat bolýar.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                }
            ]
        },
        {
            name: 'Sazly (Musical):',
            tests: [
                {
                    q: '1. Siz saz gurallaryny ulanyp bilýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '2. Siz notalar bilen aýdym aýdyp bilýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '3. Öýde we awtoulagyňyzda köplenç aýdym diňleýärsiňiz we käwagt konsertlere gidýärsiňiz. Işleýän ýa-da okaýan wagtyňyz hem aýdym-saz diňleýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '4. Siz bir zady urmak arkaly ýa-da ses çykarmak bilen saz çalmagy hiňlenmegi halaýarsyňyz. Siziň notalardaky ritimi gowy duýup bilýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '5. Siz dürli saz gurallaryň seslerini kesgitläp bilýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '6. Has meşhur aýdymlar siziň ýadyňyzda tiz galýar.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '7. Siz aýdym-sazsyz durmuşy göz öňüne getirip bilmersiňiz. Aýdym-saz diňläniňizde, duýgularygörýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '8. Adatça bir sazy birnäçe gezek eşideniňizden soň ýatda saklap bilersiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '9. Dürli sesleri çykarmak bilen ritm düzüp bilýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '10.	Köplenç zatlary ýada salmak üçin ritm ýa-da rifma ulanýarsyňyz, meselem, telefon belgisini ritmiki aýdýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                }
            ]
        },
        {
            name: 'Şahsy şahsyýet (Interpersonal):',
            tests: [
                {
                    q: '1. Toparyň ýa-da işiň bir bölegi hökmünde beýleki adamlar bilen gezelenç etmekden lezzet alýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '2. Başga biriniň halypasy ýa-da maslahatçysy bolmak bilen buýsanýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '3. Siziň dostlaryňyz ýa-da ýakynlaryňyz ýygy  sizden maslahat soraýarlar.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '4. Ýüzmek we ylgamak ýaly aýratyn sport görnüşlerinden siz basketbol,  futbol ýaly toparlaýyn sport görnüşlerini has gowy görýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '5. Beýleki adamlaryň gatnaşmagyndaky oýunlary halaýarsyňyz - köpri, monopoliýa ýaly.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '6. Siz köpçüligi halaýarsyňyz. Öýde ýeke  bolanyňyzdan dostlar bilen bolamgy halaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '7. Siziň birnäçe ýakyn dostlaryňyz bar.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '8. Adamlar bilen gowy aragatnaşyk saklaýarsyňyz we jedelleri çözmäge kömek edip bilersiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '9. Bir zatda ýolbaşçy bolmakda ikirjiňlenmeýärsiňiz. Meselem beýleki adamlara işleri nädip etmelidigini görkezmekde.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '10.	Meseleleri özbaşdak çözmäge synanyşman, başgalar bilen çözmegi isleýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                }
            ]
        },
        {
            name: 'Içki şahsyýet (Intrapersonal):',
            tests: [
                {
                    q: '1. Siz Şahsy gündelik ýazýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '2. Siz boş  wagtyňyzy durmyşyňyzdaky möhüm meseleler barada pikir edip geçirýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '3. Siziň belli bir maksatlaryňyz we ol maksatlara eltjek ýollaryňyz bar.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '4. Siziň özboluşly pikiriňiz bar we ol pikirleriňiz bilen öz durmuşyňyzy özüňiz düzýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '5. Siziň sahsy gyzyklanmalaryňyz we endikleriňiz bar. Olary siz başgalar bilen paýlaşmak islemeýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '6. Siz ýekelikde balyk tutmany ýa-da gezelenç etmäni halaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '7. Siz öz dynç alyşyňyzda bäş ýyldyzly myhmanhanada ýa-da köpçülik ýerinde dälde dagyň etegindäki agaçly öýjagazda bolmak isleýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '8. Öz güýçli we gowşak taraplaryňyz barada hakyky pikirleriňiz bar.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '9. Siz maslahat beriji adamlardan özüňiz barada köp maglumatlary öwrenýärsiňiz. ',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '10.	Özüňiz üçin işlemek - öz işiňize eýe bolmak ýa-da öz işiňiz bilen meşgullanmagy isleýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                }
            ]
        },
        {
            name: 'Tebigatçy (Naturalist):',
            tests: [
                {
                    q: '1. Siz öý haýwanlaryny saklaýarsyňyz ýa-da halaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '2. Köp dürli agaçlary, gülleri ýa-da ösümlikleri tanap we atlandyryp bilýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '3. Bedeniň işleýşi bilen gyzyklanýarsyňyz we gowy bilýärsiňiz, mysal üçin esasy içki organ nirede.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '4. Gezelençde ýollardan, höwürtgelerden we haýwanat dünýäsinden habarlysyňyz we howa alamatlaryny duýup bilýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '5. Siz özüňizi daýhan hökmünde göz öňüňize getirip bilýärsiňiz we balyk tutmagy halaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '6. Siz höwesli bagban we möwsümiň täsirleri bilen gyzyklanýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '7. Siz esasy global daşky gurşaw meselelerine düşünýärsiňiz we gyzyklanýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '8. Siz Astronomiýadaky ösüşler, älemiň döreýşi we ýaşaýşyň ewolýusiýasy barada ýeterlik maglumat berýärsiňiz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '9. Siz raýat meseleleri, psihologiýa we adam höwesleri bilen gyzyklanýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                },
                {
                    q: '10.	Çeşmeleri tygşytlamak we durnukly ösüşi gazanmak biziň döwrümiziň iň möhüm meseleleriniň ikisidir diýip hasaplaýarsyňyz.',
                    a1: 'Hawa',
                    a2: 'Ýok',
                    sy: false,
                    sn: false,
                }
            ]
        },
    ],
}

const answers = {
    ability: [
        {
            name: questions.ability[0].name,
            info: 'Ýazmakdan, okamakdan, hekeýa gürrüň bermekden we kraswordlary çözmekden lezzet alýarlar. Sözleri täsirli ulanyp bilýärler. Bu öwrenijiler ýokary derejede eşidiş ukyplary ösen we köplenç söz bilen pikirlenýärler. Okamagy, söz oýunlaryny oýnamagy, goşgy ýa-da hekaýalary düzmegi halaýarlar. Bu öwrenijileriň öwrenmek usuly sözleri aýtmak we görmek, bilelikde kitap okamak bolup durýar.',
            jobs: 'kitaphanaçy, kurator, ýazyjy, radio ýa-da teleýaýlym işgärleri',
            skills: 'Diňlemek, gürlemek, ýazmak, öwretmek.'
        },
        {
            name: questions.ability[1].name,
            info: 'Islendik bir zadyň gatnaşygy katogorýalary bilen gyzyklanýar. Arifmetiki mysallar, strategiýaly oýunlar we synag geçirip ýagny tejribe edip bolýan işler bu ukyply adamlary has özüne çekýär. Olar gülkünç (komik) soraglary soramagy halaýarlar.',
            jobs: 'buhgalter, matematika ylmy bilen meşgullanýan adam, alym, statistikaçy, kompýuter analitigi we tehnigi, maglumat bazasynyň dizaýneri,ekonomist, tor analitigi, dermanhana işgäri',
            skills: 'Meseläni çözmek (logiki we matematika), synaglary ýerine ýetirmek'
        },
        {
            name: questions.ability[2].name,
            info: 'Bu öwrenijilere bilimi beden hereketleri arkaly öwrenmek ýeňil. Sportçy, tikinçi, tansçy ýa-da hirurg bolmak ukyplary has ýokary',
            jobs: 'fiziki terapiýa işi bilen meşgul bolýan adam, tansçy, aktýor, mehanik, agaç ussasy, tokaý sakçysy, zergär, bedenterbiýa mugallym, daýhan, ýangyn söndüriji',
            skills: 'tans edip bilmek, sport ugurlaryna ökde bolmak, elleri bilen tejribeleri edip bilmek.'
        },
        {
            name: questions.ability[3].name,
            info: 'Suratlar, daşky gurşaw barada pikir ýöredip bilýär.  Bu ukyply adamlara çylşyrymly ýa-da bulaşyk pazzllary çözmek, kartalary öwrenmek has özüne çekýär. Olar boş wagtlaryny surat çekmek, birzatlary gurmak we arzuw etmek bilen geçirýärler.  Öwretmegiň ýeňil usuly surat çekip düşündirmek, gürlemek we göz öňüne getirmek arkaly.',
            jobs: 'inziner, gözlegçi, binagär, şäher meýilleşdiriji, grafikaçy, içerki bezegçi, suratçy, uçarman, heýkeltaraş, ýük daşaýanm awtoulag sürüji',
            skills: 'pazzyllary gurmak, surat çekmek,düzeltmek, obýektleri dizaýn etmek'
        },
        {
            name: questions.ability[4].name,
            info: 'Olar sesleri we ritimleri has gowy duýýarlar. Olar aýdumlary eşitmegi halaýarlar.Ýygy-ýygydan  özleri üçin aýdym aýdýarlar ýa-da saz çalýarlar. Adatça başga adamlaryň eşdip bilmedik seslerini eşdip bilmek ukyplary bar. Bu ukyply adamlara öwretmegiň ýeňil usuly öwredilýän temany aýdymyň sözlerine geçirip ýa-da ritimli gürlemek arkaly.',
            jobs: 'sazanda, fortepýano sazlaýjy, saz terapiýasy bilen meşgullanýan adam, dirizor, aýdym-saz bilen meşgullanýan adam, aýdymyň sözüni ýazyjy, ses ýazyjy',
            skills: 'Aýdym aýtmak, saz gural çalmak, saz düzmek.'
        },
        {
            name: questions.ability[5].name,
            info: 'Bu ukyply adamlar öz deň-duşlarynyň arasynda liderlik ukybyna eýe.  Olar gürrüňdeşlik etmekde we başga adamalaryň duýgularyna düşinip hem-de ruhlandyryp we olarda täsir galdyryp hem bilýärler. Bu öwrenijiler seminarlarda, gepleşiklerde we çärelerde  has gowy öwrenýärler.',
            jobs: 'dolandyryjy, kompanýalary dolandyryjy, psiholog, şepagat uýasy, jemgyýetçilik gatnaşyklary bilen bagly adam, jemgyýetçilik direktory, mugallym, ilçi, syýasatçy, kabul ediji adam (resepşinist), tälimçi',
            skills: 'başga nukdaý nazardan seredip bilmek, duýgudaş, maslahat beriji, hyzzmatdaşlyga ökde'
        },
        {
            name: questions.ability[6].name,
            info: 'Olar utanjaň bolup bilerler, ýöne öz duýgularyna we maksatlaryna gaty gowy düşünýärler we öz-özüni ruhlandyryp bilýärler. Olar güýçli erkli we ynamly hem-de pikirlere baý adamlardyr. Ylmy gözlegleriň esasynda has gowy öwrenýärler.',
            jobs: 'psiholog, terapist, geňeşçi, programma meýilleşdiriji, telekeçi, filosof, Kriminolog',
            skills: 'öz gymmatyny bilýän, çuň pikir ýöredip bilýän, içki duýgularyndan habarly'
        },
        {
            name: questions.ability[7].name,
            info: 'Olar daşky gurşawyň elementlerini, jisimleri, haýwanlary ýa-da ösümlikleri kesgitlemäge, toparlara bölmäge we dolandyrmaga ukyply adamlar. Olar tebigaty öwrenýänler köplenç janly-jandarlaryň nagyşlaryna düşünýärler we tebigat bilen bagly ylmy işleri edýärler. Şeýle hem haýwanlara duýgudaşlyk edýärsiňiz.',
            jobs: 'Bagban, ýeri goramak boýunça arhitektor, daýhan, seýilgäh dolandyryjysy, haýwan tälimçisi, tebigatçy, tebigaty goraýjy, alym.',
            skills: 'adamlaryň tebigata bolan gatnaşygyny kesgitläp bilýärler, tebigat bilen bagly ylmy işleri edip başarýarlar'
        },
    ]
}

let testsCards = document.getElementById('tests_cards');

function testContent() {
    let testsCardsContent = ''

    let testCardsName = ''
    let testCardsQuestion = ''
    for (let i = 0; i < questions.ability.length; i++) {
        testCardsName += `<p class="cat_name">${questions.ability[i].name}</p>`
        for (let j = 0; j < questions.ability[i].tests.length; j++) {
            testCardsQuestion += `
                <div class="card_item">
                    <p class="test_q">${questions.ability[i].tests[j].q}</p>
                    <ul class="test_ans">
                        <li onclick="testAnswerYes(${i}, ${j})" class="${questions.ability[i].tests[j].sy ? 'checked' : ''}" id="yes">hawa</li>
                        <li onclick="testAnswerNo(${i}, ${j})" class="${questions.ability[i].tests[j].sn ? 'checked' : ''}" id="no">yok</li>
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


let lingustic = 0
let math = 0
let visual = 0
let body = 0
let musical = 0
let interpersonal = 0
let intrapersonal = 0
let natural = 0


let resultBtn = document.getElementById('result_btn')

function testAnswerYes(i, j) {
    questions.ability[i].tests[j].sy = true
    questions.ability[i].tests[j].sn = false

    testContent()
    resultBtn.classList.remove('hide')

    switch (questions.ability[i].name) {
        case questions.ability[0].name:
            lingustic += 1
            break;
        case questions.ability[1].name:
            math += 1
            break;
        case questions.ability[2].name:
            visual += 1
            break;
        case questions.ability[3].name:
            body += 1
            break;
        case questions.ability[4].name:
            musical += 1
            break;
        case questions.ability[5].name:
            interpersonal += 1
            break;
        case questions.ability[6].name:
            intrapersonal += 1
            break;
        case questions.ability[7].name:
            natural += 1
            break;
    }
}

function testAnswerNo(i, j) {
    questions.ability[i].tests[j].sy = false
    questions.ability[i].tests[j].sn = true

    testContent()
    resultBtn.classList.remove('hide')
}

let result = []

let ability = document.getElementById('ability')
let resultContent = document.getElementById('result')

function showResult_fn() {
    result.push({ name: questions.ability[0].name, count: lingustic });
    result.push({ name: questions.ability[1].name, count: math });
    result.push({ name: questions.ability[2].name, count: visual });
    result.push({ name: questions.ability[3].name, count: body });
    result.push({ name: questions.ability[4].name, count: musical });
    result.push({ name: questions.ability[5].name, count: interpersonal });
    result.push({ name: questions.ability[6].name, count: intrapersonal });
    result.push({ name: questions.ability[7].name, count: natural });


    result.sort(function (a, b) { return a.count - b.count });

    let newResult = {}

    for (let i = 0; i < answers.ability.length; i++) {
        if (result[result.length - 1].name == answers.ability[i].name) {
            newResult = answers.ability[i]
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


    ability.classList.add('hide')
    resultContent.classList.remove('hide')

    resultContent.innerHTML = `
            <div class="content">
            <p class="ability_result_title">Synag netijesi:</p>
            <div class="top_sides">
            <div class="left">
                <img src="./../../assets/images/r1.jpg" alt="" />
            </div>
            <div class="right">
                <p><span class="username">${userName}</span>, Siz <span>${newResult.name}</span></p><br/>
                <p>${newResult.info}</p>
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
            <p class="skills">
            <span>Başarnyklary: </span>${newResult.skills}</p>
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