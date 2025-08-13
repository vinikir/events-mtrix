
export interface EventData {
  name: string;
  price: number;
  maximumAmount: number;
  halfPrice: boolean;
  image: string;
  date: string;
  local: string;
  sold: number;
}

export const eventsData: EventData[] = [
  {
    "name": "Show do Dream Theater",
    "price": 350,
    "maximumAmount": 1500,
    "halfPrice": true,
    "image": "https://placehold.co/600x400/000000/FFFFFF/png?text=Dream+Theater",
    "date": "2025-10-15T21:00:00Z",
    "local": "São Paulo",
    "sold": 1200
  },
  {
    "name": "Festival de Cinema Independente",
    "price": 50,
    "maximumAmount": 200,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-11-03T18:30:00Z",
    "local": "Rio de Janeiro",
    "sold": 150
  },
  {
    "name": "Workshop de Fotografia Digital",
    "price": 120,
    "maximumAmount": 30,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-12-01T09:00:00Z",
    "local": "Belo Horizonte",
    "sold": 25
  },
  {
    "name": "Feira de Artesanato Local",
    "price": 0,
    "maximumAmount": 1000,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-10-22T10:00:00Z",
    "local": "Curitiba",
    "sold": 800
  },
  {
    "name": "Concerto Filarmônica Nacional",
    "price": 200,
    "maximumAmount": 450,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2026-01-18T20:00:00Z",
    "local": "Brasília",
    "sold": 380
  },
  {
    "name": "Palestra sobre IA e Futuro",
    "price": 85,
    "maximumAmount": 80,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-11-28T19:00:00Z",
    "local": "Porto Alegre",
    "sold": 75
  },
  {
    "name": "Exposição de Pintura Moderna",
    "price": 40,
    "maximumAmount": 150,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-10-05T14:00:00Z",
    "local": "Salvador",
    "sold": 100
  },
  {
    "name": "Campeonato de Xadrez",
    "price": 10,
    "maximumAmount": 50,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-12-10T10:00:00Z",
    "local": "Recife",
    "sold": 45
  },
  {
    "name": "Festival de Cerveja Artesanal",
    "price": 60,
    "maximumAmount": 500,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-11-19T17:00:00Z",
    "local": "Florianópolis",
    "sold": 350
  },
  {
    "name": "Peça de Teatro Clássico",
    "price": 90,
    "maximumAmount": 100,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2026-02-08T20:30:00Z",
    "local": "Fortaleza",
    "sold": 90
  },
  {
    "name": "Maratona Urbana 10k",
    "price": 75,
    "maximumAmount": 2000,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-10-29T07:00:00Z",
    "local": "Porto Alegre",
    "sold": 1800
  },
  {
    "name": "Seminário de Marketing Digital",
    "price": 180,
    "maximumAmount": 70,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-12-15T19:00:00Z",
    "local": "São Paulo",
    "sold": 68
  },
  {
    "name": "Noite de Jazz no Centro",
    "price": 30,
    "maximumAmount": 60,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-11-11T21:00:00Z",
    "local": "Curitiba",
    "sold": 55
  },
  {
    "name": "Feira de Livros e HQ's",
    "price": 0,
    "maximumAmount": 1200,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2026-01-07T10:00:00Z",
    "local": "Belo Horizonte",
    "sold": 900
  },
  {
    "name": "Show de Comédia Stand-up",
    "price": 45,
    "maximumAmount": 150,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-10-18T22:00:00Z",
    "local": "Rio de Janeiro",
    "sold": 140
  },
  {
    "name": "Festival Gastronômico da Cidade",
    "price": 95,
    "maximumAmount": 800,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-11-25T11:00:00Z",
    "local": "Salvador",
    "sold": 650
  },
  {
    "name": "Aula de Yoga no Parque",
    "price": 25,
    "maximumAmount": 50,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-10-09T08:00:00Z",
    "local": "Fortaleza",
    "sold": 40
  },
  {
    "name": "Tour Histórico pelo Centro",
    "price": 35,
    "maximumAmount": 25,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-12-05T14:30:00Z",
    "local": "Recife",
    "sold": 22
  },
  {
    "name": "Congresso de Inovação Tecnológica",
    "price": 250,
    "maximumAmount": 300,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2026-01-28T09:00:00Z",
    "local": "São Paulo",
    "sold": 280
  },
  {
    "name": "Show de Rock Alternativo",
    "price": 100,
    "maximumAmount": 700,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-11-14T22:00:00Z",
    "local": "Florianópolis",
    "sold": 650
  },
  {
    "name": "Exposição de Carros Antigos",
    "price": 20,
    "maximumAmount": 600,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-10-01T10:00:00Z",
    "local": "Porto Alegre",
    "sold": 500
  },
  {
    "name": "Semana Literária",
    "price": 0,
    "maximumAmount": 2000,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-12-19T15:00:00Z",
    "local": "Brasília",
    "sold": 1800
  },
  {
    "name": "Show de Música Eletrônica",
    "price": 150,
    "maximumAmount": 1000,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-11-08T23:00:00Z",
    "local": "Curitiba",
    "sold": 850
  },
  {
    "name": "Curso de Culinária Italiana",
    "price": 220,
    "maximumAmount": 20,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-10-25T19:00:00Z",
    "local": "Belo Horizonte",
    "sold": 18
  },
  {
    "name": "Encontro de Gamers",
    "price": 15,
    "maximumAmount": 500,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2026-02-14T13:00:00Z",
    "local": "Rio de Janeiro",
    "sold": 450
  },
  {
    "name": "Festival de Inverno",
    "price": 70,
    "maximumAmount": 300,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-10-12T16:00:00Z",
    "local": "Gramado",
    "sold": 250
  },
  {
    "name": "Lançamento de Produto Tech",
    "price": 0,
    "maximumAmount": 150,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-11-21T10:00:00Z",
    "local": "São Paulo",
    "sold": 140
  },
  {
    "name": "Show de Forró Regional",
    "price": 65,
    "maximumAmount": 400,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-12-24T22:00:00Z",
    "local": "Salvador",
    "sold": 380
  },
  {
    "name": "Caminhada Ecológica",
    "price": 5,
    "maximumAmount": 500,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-10-30T09:00:00Z",
    "local": "Manaus",
    "sold": 450
  },
  {
    "name": "Congresso Médico",
    "price": 300,
    "maximumAmount": 800,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2026-03-05T08:00:00Z",
    "local": "Goiânia",
    "sold": 750
  },
  {
    "name": "Festival de Cinema ao Ar Livre",
    "price": 20,
    "maximumAmount": 1500,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-11-17T19:30:00Z",
    "local": "Porto Alegre",
    "sold": 1200
  },
  {
    "name": "Palestra sobre Empreendedorismo",
    "price": 75,
    "maximumAmount": 90,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-12-09T18:00:00Z",
    "local": "Curitiba",
    "sold": 80
  },
  {
    "name": "Feira de Tecnologia",
    "price": 110,
    "maximumAmount": 400,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2026-01-22T09:00:00Z",
    "local": "São Paulo",
    "sold": 350
  },
  {
    "name": "Festival de Música Clássica",
    "price": 180,
    "maximumAmount": 250,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-10-20T20:00:00Z",
    "local": "Belo Horizonte",
    "sold": 220
  },
  {
    "name": "Show de Hip Hop Nacional",
    "price": 80,
    "maximumAmount": 600,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-11-05T23:00:00Z",
    "local": "Rio de Janeiro",
    "sold": 550
  },
  {
    "name": "Apresentação de Dança Contemporânea",
    "price": 60,
    "maximumAmount": 80,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-12-14T19:30:00Z",
    "local": "Fortaleza",
    "sold": 70
  },
  {
    "name": "Concurso de Poesia",
    "price": 10,
    "maximumAmount": 40,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-10-08T18:00:00Z",
    "local": "Recife",
    "sold": 35
  },
  {
    "name": "Tour por Vinícolas",
    "price": 280,
    "maximumAmount": 20,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2026-01-10T10:00:00Z",
    "local": "Serra Gaúcha",
    "sold": 15
  },
  {
    "name": "Exposição de Esculturas",
    "price": 55,
    "maximumAmount": 120,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-11-26T14:00:00Z",
    "local": "Salvador",
    "sold": 110
  },
  {
    "name": "Fórum de Sustentabilidade",
    "price": 130,
    "maximumAmount": 200,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-10-16T09:00:00Z",
    "local": "Brasília",
    "sold": 190
  },
  {
    "name": "Show de MPB",
    "price": 150,
    "maximumAmount": 350,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-12-03T21:00:00Z",
    "local": "Florianópolis",
    "sold": 300
  },
  {
    "name": "Festival de Balão",
    "price": 85,
    "maximumAmount": 800,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-10-23T06:00:00Z",
    "local": "Torres",
    "sold": 750
  },
  {
    "name": "Concurso de Cerveja Caseira",
    "price": 40,
    "maximumAmount": 50,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-11-10T18:00:00Z",
    "local": "Belo Horizonte",
    "sold": 48
  },
  {
    "name": "Palestra sobre Cibersegurança",
    "price": 170,
    "maximumAmount": 100,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2026-01-05T14:00:00Z",
    "local": "São Paulo",
    "sold": 90
  },
  {
    "name": "Encontro de Colecionadores",
    "price": 25,
    "maximumAmount": 200,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-12-21T10:00:00Z",
    "local": "Rio de Janeiro",
    "sold": 150
  },
  {
    "name": "Tour Gastronômico",
    "price": 140,
    "maximumAmount": 30,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-10-04T12:00:00Z",
    "local": "Curitiba",
    "sold": 28
  },
  {
    "name": "Exibição de Filme Clássico",
    "price": 15,
    "maximumAmount": 200,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-11-29T20:00:00Z",
    "local": "Fortaleza",
    "sold": 180
  },
  {
    "name": "Workshop de Escrita Criativa",
    "price": 90,
    "maximumAmount": 25,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2026-02-20T14:00:00Z",
    "local": "Recife",
    "sold": 20
  },
  {
    "name": "Fórum de Negócios",
    "price": 280,
    "maximumAmount": 180,
    "halfPrice": true,
    "image": "https://placehold.co/600x400",
    "date": "2025-10-27T08:00:00Z",
    "local": "Brasília",
    "sold": 175
  },
  {
    "name": "Feira de Moda Sustentável",
    "price": 0,
    "maximumAmount": 700,
    "halfPrice": false,
    "image": "https://placehold.co/600x400",
    "date": "2025-11-16T10:00:00Z",
    "local": "Porto Alegre",
    "sold": 600
  }
];