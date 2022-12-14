//  icons
import {
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiBook,
  FiMusic,
  FiFilm,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// books images
import Project1 from './assets/img/books/acincopassosdevoce.jpg';
import Project2 from './assets/img/books/vermelhoeterno.jpg';
import Project3 from './assets/img/books/oextraordinario.jpg';
import Project4 from './assets/img/books/amoregelato.jpg';
import Project5 from './assets/img/books/aculpaedasestrelas.jpg';
import Project6 from './assets/img/books/sandman.jpg';
import Project7 from './assets/img/books/fahrenheit.png';
import Project8 from './assets/img/books/tetoparadois.jpg';
import Project9 from './assets/img/books/senhordosaneis.jpg';
import Project10 from './assets/img/books/orgulhoepreconceito.jpg';
import Project11 from './assets/img/books/ascronicasdenarnia.jpg';
import Project12 from './assets/img/books/materiaescura.jpg';
import Project13 from './assets/img/books/oassassinatodoexpressooriente.jpg';
import Project14 from './assets/img/books/apacientesilenciosa.jpg';
import Project15 from './assets/img/books/umdenosestamentindo.JPG';
import Project16 from './assets/img/books/ohomemdegiz.jpg';
import Project17 from './assets/img/books/coraline.jpg';
import Project18 from './assets/img/books/ondemoraatrapaca.jpg';
import Project19 from './assets/img/books/ostrescoringas.jpg';
import Project20 from './assets/img/books/it.jpg';
import Project21 from './assets/img/books/apiadamortal.jpg';
import Project22 from './assets/img/books/harleen.jpg';

// navigation
export const navigation = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'books',
    href: 'homebooks',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/SamaraSilvia81',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/samara-silvia-9a2a26231',
  },
];

// booksData
export const booksData = [
  {
    id: '1',
    image: Project1,
    name: 'A 5 Passos de Voc??',
    category: 'romance',
    description:'O Livro A Cinco Passos de Voc?? ?? uma grande hist??ria de amor. Vivida por dois personagens adolescentes, o cen??rio se passa dentro de um ambiente hospitalar...',
    href: 'https://drive.google.com/file/d/1tOKhAWfiHJ2hYS_XLZOdA8Yun2FMc2Rh/view'
  },
  {
    id: '2',
    image: Project2,
    name: 'Vermelho Eterno',
    category: 'geek',
    description:'Ent??o os olhos dela se fecharam, e fogo e caos e morte e ru??do desapareceram. Assim como a mulher dos cabelos ruivos. NATASHA ROMANOFF ?? uma das assassinas mais letais do mundo...',
    href: 'https://www.ubook.com/ebook/616560/viuva-negra-vermelho-eterno',
  },
  {
    id: '3',
    image: Project3,
    name: 'O Extraordin??rio',
    category: 'drama',
    description:'August Pullman, o Auggie, nasceu com uma s??ndrome cuja sequela ?? uma severa deformidade facial, que lhe imp??s diversas cirurgias e complica????es m??dicas. Por isso ele nunca frequentou uma escola de verdade...',
    href: 'https://drive.google.com/file/d/1y7IERjj_0OlUZxHvN_IKExFjBFznGbPh/view?usp=sharing',
  },
  {
    id: '4',
    image: Project4,
    name: 'Amor e Gelato',
    category: 'romance',
    description:'Amor & Gelato ?? baseado no romance hom??nimo de Jenna Evans Welch. Lina est?? indo para a It??lia, mas n??o porque quer, mas sim porqu?? o ??ltimo desejo de sua m??e antes de morrer era que ela conhecesse seu pai...',
    href: 'https://drive.google.com/file/d/1aMJiuV16o7ZJK1vtBE-LIkhiAI2HxvY7/view?usp=sharing',
  },
  {
    id: '5',
    image: Project5,
    name: 'A culpa ?? das Estrelas',
    category: 'romance',
    description:'Hazel ?? uma paciente terminal. Ainda que, por um milagre da medicina, seu tumor tenha encolhido bastante - o que lhe d?? a promessa de viver mais alguns anos -, o ??ltimo cap??tulo de sua hist??ria foi escrito no momento do diagn??stico...',
    href: 'https://drive.google.com/file/d/1NfXswPGSEjbvSwId4mGnJbs5qyUQ9xL0/view?usp=sharing',
  },
  {
    id: '6',
    image: Project6,
    name: 'S??rie Sandman',
    category: 'geek',
    description:'A hist??ria ?? vista do ponto de vista de Sonho, um dentre os sete perp??tuos, a representa????o antropom??rfica do sonho, inicialmente preso por um grupo de humanos que almejava prender sua irm?? mais velha Morte para que se tornassem imortais, mas falham e capturam sonho...',
    href: 'https://drive.google.com/file/d/1Z_4_JEDbhY_tjfSSwAjMHnL4LrhDCP6o/view?usp=sharing',
  },
  {
    id: '7',
    image: Project7,
    name: 'Fahrenheit 451',
    category: 'sci',
    description:'Fahrenheit ?? contado em um futuro inespec??fico em uma Am??rica hedonista e anti-intelectual que perdeu totalmente o controle. Qualquer um que ?? pego lendo livros ??, no m??nimo, confinado em um hosp??cio...',
    href: 'https://drive.google.com/file/d/1qwB0K2WI-hoZb09iOCO-b6NS0RGrhnap/view?usp=sharing',
  },
  {
    id: '8',
    image: Project8,
    name: 'Teto para Dois',
    category: 'romance',
    description:'Teto Para Dois nos traz a hist??ria de Tiffy, uma moradora de Londres que trabalha em uma editora especializada em livros de artesanato e do tipo ???fa??a voc?? mesmo???. Seu relacionamento com Justin terminou h?? tr??s meses, mas ela ainda n??o conseguiu sair do apartamento do ex-namorado...',
    href: 'https://napontadospes693885424.files.wordpress.com/2020/03/teto-para-dois-beth-o-leary.pdf',
  },
  {
    id: '9',
    image: Project9,
    name: 'Senhor dos An??is',
    category: 'fantasy',
    description:'O Senhor dos An??is (The Lord of the Rings, no original) ?? um livro de alta fantasia, escrito pelo escritor brit??nico J. R. R. Tolkien...',
    href: 'https://drive.google.com/file/d/1qhUes4wgH_4mo-aVQ_ZqOitPOypIsMSB/view?usp=sharing',
  },
  {
    id: '10',
    image: Project10,
    name: 'Orgulho e Preconceito',
    category: 'romance',
    description:'Orgulho e preconceito ?? a obra-prima da escritora brit??nica Jane Austen que tem como pano de fundo a burguesia inglesa do in??cio do s??culo XIX. Vemos no romance como as rela????es movidas por amor e dinheiro podem ser prom??scuas e mesquinhas, encobertas pelo v??u da sociedade burguesa...',
    href: 'https://drive.google.com/file/d/1MYBFWlU2w6kQBPb4HDsVpJ0GXS_BMrBQ/view?usp=sharing',
  },
  {
    id: '11',
    image: Project11,
    name: 'As cr??nicas de N??rnia',
    category: 'fantasy',
    description:'As Cr??nicas de N??rnia apresentam, geralmente, as aventuras de crian??as que desempenham um papel central e descobrem o ficcional Reino de N??rnia, um lugar onde a magia ?? corriqueira, os animais falam, e ocorrem batalhas entre o bem e o mal...',
    href: 'https://drive.google.com/file/d/1zISkJPz3eKa9Ww_5317KNWuqPaCrwzWt/view?usp=sharing',
  },
  {
    id: '12',
    image: Project12,
    name: 'Mat??ria Escura',
    category: 'sci',
    description:'???Voc?? est?? feliz com a vida que tem? Essas s??o as ??ltimas palavras que Jason Dessen ouve antes de acordar num laborat??rio, preso a uma maca. Raptado por um homem mascarado, Jason ?? levado para uma usina abandonada e deixado inconsciente...',
    href: 'https://drive.google.com/file/d/19_qXvm3GdRDgx1lafuB-wmlBk5dLVl1l/view?usp=sharing',
  },
  {
    id: '13',
    image: Project13,
    name: 'O Assassinato do Expresso Oriente',
    category: 'mistery',
    description:'Nessa hist??ria, Hercule Poirot embarca no Expresso do Oriente, um trem de luxo, que, devido a uma forte nevasca, precisa fazer uma parada no meio do caminho...',
    href: 'https://drive.google.com/file/d/1YSTJorNkaqS9ygoQR2npQlL0QrgxEiIU/view?usp=sharing',
  },
  {
    id: '14',
    image: Project14,
    name: 'A paciente Silenciosa',
    category: 'suspense',
    description:'A paciente silenciosa ?? um daqueles livros que n??o saem da cabe??a do leitor, quer ele queira, quer n??o. Alicia Berenson tinha uma vida perfeita...',
    href: 'https://drive.google.com/file/d/1BFL3tKNtgBkwRyteRFR6AVVjzVdPResA/view?usp=sharing',
  },
  {
    id: '15',
    image: Project15,
    name: 'Um de n??s est?? mentindo',
    category: 'suspense',
    description:'Em Um de N??s Est?? Mentindo, durante uma segunda-feira ?? tarde, cinco estudantes de Bayview High v??o para a sala de deten????o, mas apenas quatro deles saem de l?? com vida...',
    href: 'https://drive.google.com/file/d/12yv4DjNZarx4ZwYtePXX_BYrRnfQEDVD/view?usp=sharing',
  },
  {
    id: '16',
    image: Project16,
    name: 'O homem de Giz',
    category: 'mistery',
    description:'Enquanto os colegas liam Judy Blume, ela devorava as obras de Stephen King e James Herbert. Ao longo dos anos, atuou em v??rias fun????es, como rep??rter, redatora, roteirista para r??dio, apresentadora de televis??o, dubladora, passeadora de c??es e agora escritora...',
    href: 'https://drive.google.com/file/d/13J0myA1cEStBgIF6oyGQos-1wyR368er/view?usp=sharing',
  },
  {
    id: '17',
    image: Project17,
    name: 'Coraline',
    category: 'horror',
    description:'Antes de come??ar o conto, Coraline e seus pais se mudam para um novo apartamento perto de uma floresta. Seus pais est??o sempre ocupados com o trabalho e por isso lhe d??o pouca aten????o. Sentindo-se isolada, Coraline sai para explorar...',
    href: 'https://drive.google.com/file/d/1BwpGEcHUmPwNviHobGU8m53Vl9_connp/view?usp=sharing',
  },
  {
    id: '18',
    image: Project18,
    name: 'Loki: Onde Mora a Trapa??a',
    category: 'geek',
    description:'O livro mostra um lado desconhecido de Loki, sens??vel e subestimado, e sua jornada para se tornar o anti-her??i que conhecemos...',
    href: 'https://drive.google.com/file/d/1tW9i59I8z7h4r2oMKghDU4hvwCuh7Cjb/view?usp=sharing',
  },
  {
    id: '19',
    image: Project19,
    name: 'Batman: Os tr??s Coringas',
    category: 'geek',
    description:'Como dito na sinopse, os tr??s Morcegos acabam se encontrando durante a investiga????o que aponta os crimes supostamente assinados pelo Coringa...',
    href: 'https://drive.google.com/file/d/19OVmS8q4DSkc0v2Uh0x8rfWHNVHUeoNd/view?usp=sharing',
  },
  {
    id: '20',
    image: Project20,
    name: 'It',
    category: 'horror',
    description:'It (em portugu??s A Coisa) ?? um romance de terror de 1986 do autor estadunidense Stephen King. Foi seu 22?? livro e seu 17?? romance escrito em seu pr??prio nome. A hist??ria segue as experi??ncias de sete crian??as, que s??o aterrorizadas por uma entidade maligna que explora os medos de suas v??timas para se disfar??ar enquanto ca??am suas presas...',
    href: 'https://drive.google.com/file/d/1lAxuuCAU_jROIl0sd8-u8ZEmysDCBbtv/view?usp=sharing',
  },
  {
    id: '21',
    image: Project21,
    name: 'Batman: A piada Mortal',
    category: 'geek',
    description:'Do premiado roteirista Alan Moore (Watchmen, V de Vingan??a) conta como um dia ruim na vida de um homem pode significar a linha que separa a sanidade da loucura...',
    href: 'https://drive.google.com/file/d/1-28RFXXO0hbkN4EG7olo0me0rwe8Ln-3/view?usp=sharing',
  },
  {
    id: '22',
    image: Project22,
    name: 'Trilogia Harleen',
    category: 'geek',
    description:'Uma jovem e brilhante psiquiatra, com a cura para a loucura de Gotham City, a dra. Harleen Quinzel toma medidas dr??sticas para salvar a cidade de si mesma...',
    href: 'https://www.figma.com/proto/pEAWwmhwBH1392WHb1oFj0/Prot%C3%B3tipo---Library-Studio-X?node-id=0%3A1',
  },
];

// booksNav
export const booksNav = [
  {
    name: 'all',
  },
  {
    name: 'romance',
  },
  {
    name: 'drama',
  },
  {
    name: 'fantasy',
  },
  {
    name: 'SCI',
  },
  {
    name: 'mistery',
  },
  {
    name: 'suspense',
  },
  {
    name: 'horror',
  },
  {
    name: 'geek',
  },
];

// bookShelf
export const bookShelf = [
  {
    icon: <FiBook />,
    name: 'Bookstan',
    description:
      'Eu me considero uma apreciadora de livros. Eu amo ler livros, embora n??o leia tanto quanto eu gostaria. Acredito que os meus g??neros favoritos s??o fantasia, principalmente a alta como a saga de N??rnia e a trilogia de Castelo animado, mas tamb??m gosto muito de dramas e um romance cl??ssico. Sou um tanto ecl??tica nessas quest??es. '
  },
  {
    icon: <FiMusic />,
    name: 'Musicista',
    description:
      'Eu amo investir meu tempo tocando teclado, cantando e fazendo kits vocais. Amo a beleza que ?? a melodia! A forma como a m??sica conversa com voc??. Em compara????o aos livros, eu n??o sou t??o ecl??tica, ent??o os meus g??neros favoritos s??o gospel, pois como crist?? ele se sonda, mas tamb??m gosto de um pop e uma m??sica cl??ssica!',
  },
  {
    icon: <FiFilm />,
    name: 'Cinematogr??fica',
    description:
      'Quem n??o ama se sentar na cama, com cobertores quentinhos e maratonar uma s??rie n??? Eu adoro, principalmente se for filmes e s??ries da Marvel e Dc. Amo essas ind??strias! Mas tamb??m aprecio um excelente anime, Avatar - kof kof -, e uns doramas!',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Dublin, Island',
    description: 'Serving clients worldwide',
  },
];