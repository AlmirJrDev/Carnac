import { Car, Fuel, MapPin, ShoppingCart, Heart, } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react";
import { Link } from "react-router-dom";


const carrosData = {
  "carros": [
    {
      "marca": "Toyota",
      "modelo": "Corolla",
      "ano": 2023,
      "imagem": "https://cdn.appdealersites.com.br/saga/banners-blog-2023/out23-2/corollaxeifrente.webp",
      "kmRodados": 15000,
      "tipoCombustivel": "Flex",
      "cavalos": 177,
      "tipoTracao": "Dianteira",
      "transmissao": "CVT",
      "preco": 159990.00,
      "localizacao": "São Paulo, SP",
      "descricao": "Toyota Corolla XEI em excelente estado, único dono, completo com teto solar, bancos em couro, central multimídia com Android Auto e Apple CarPlay, câmera de ré e sensores de estacionamento.",
      "tipoCarro": "Sedan"
    },
    {
      "marca": "Jeep",
      "modelo": "Compass",
      "ano": 2022,
      "imagem": "https://revistafullpower.com.br/wp-content/uploads/2024/04/jeepcompass2025-01-1024x683.jpg",
      "kmRodados": 32000,
      "tipoCombustivel": "Diesel",
      "cavalos": 170,
      "tipoTracao": "4x4",
      "transmissao": "Automática",
      "preco": 189990.00,
      "localizacao": "Rio de Janeiro, RJ",
      "descricao": "Jeep Compass Limited TD350 4x4 Diesel, pacote high tech, teto panorâmico, sistema de som premium Beats, piloto automático adaptativo e assistente de permanência em faixa.",
      "tipoCarro": "SUV"
    },
    {
      "marca": "Volkswagen",
      "modelo": "Golf GTI",
      "ano": 2021,
      "imagem": "https://cdn.motor1.com/images/mgl/XxZyk/s3/manhart-vw-golf-gti-290.jpg",
      "kmRodados": 25000,
      "tipoCombustivel": "Gasolina",
      "cavalos": 230,
      "tipoTracao": "Dianteira",
      "transmissao": "Automática",
      "preco": 229990.00,
      "localizacao": "Curitiba, PR",
      "descricao": "Golf GTI MK7.5 em estado impecável, rodas 18\", sistema de som Fender, pacote premium com teto solar, faróis full LED e interior em couro.",
      "tipoCarro": "Hatchback"
    },
    {
      "marca": "Honda",
      "modelo": "HR-V",
      "ano": 2023,
      "imagem": "https://s2-autoesporte.glbimg.com/mvjKE6AdX24Pi8ctqxbqMS8JMbg=/0x0:1400x788/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2024/t/x/MBjVfjRJOABRrNYatv3g/honda-hr-v-touring-.jpg",
      "kmRodados": 8000,
      "tipoCombustivel": "Flex",
      "cavalos": 177,
      "tipoTracao": "Dianteira",
      "transmissao": "CVT",
      "preco": 179990.00,
      "localizacao": "Brasília, DF",
      "descricao": "Honda HR-V Touring, nova geração, com tecnologia Honda Sensing, teto solar panorâmico, bancos em couro, carregador wireless e interface wireless para Android Auto e Apple CarPlay.",
      "tipoCarro": "SUV"
    },
    
  {
    "marca": "Honda",
    "modelo": "Civic",
    "ano": 2022,
    "imagem": "https://cdn.motor1.com/images/mgl/GxRQG/s1/honda-civic-touring-em-movimento.jpg",
    "kmRodados": 20000,
    "tipoCombustivel": "Gasolina",
    "cavalos": 155,
    "tipoTracao": "Dianteira",
    "transmissao": "Automática",
    "preco": 145000.00,
    "localizacao": "Curitiba, PR",
    "descricao": "Honda Civic Touring, com sistema de som premium, bancos de couro, câmera traseira e assistente de permanência em faixa.",
    "tipoCarro": "Sedan"
  },
  {
    "marca": "Ford",
    "modelo": "Ranger",
    "ano": 2021,
    "imagem": "https://quatrorodas.abril.com.br/wp-content/uploads/2020/03/ford-ranger-storm-1-e1585331580704.jpg?quality=70&strip=info",
    "kmRodados": 30000,
    "tipoCombustivel": "Diesel",
    "cavalos": 200,
    "tipoTracao": "4x4",
    "transmissao": "Automática",
    "preco": 210000.00,
    "localizacao": "Goiânia, GO",
    "descricao": "Ford Ranger Storm 4x4 com excelente capacidade off-road, controle de descida, e diferencial traseiro blocante.",
    "tipoCarro": "Pickup",
  },
  {
    "marca": "Chevrolet",
    "modelo": "Onix",
    "ano": 2023,
    "imagem": "https://www.webmotors.com.br/wp-content/uploads/2023/12/15151459/Chevrolet-Onix-LT-1.0-3.webp",
    "kmRodados": 5000,
    "tipoCombustivel": "Flex",
    "cavalos": 116,
    "tipoTracao": "Dianteira",
    "transmissao": "Manual",
    "preco": 83000.00,
    "localizacao": "Belo Horizonte, MG",
    "descricao": "Chevrolet Onix LT, econômico e compacto, com central multimídia MyLink, câmera de ré e sistema de partida a frio.",
    "tipoCarro": "Hatchback"
  },
  {
    "marca": "Hyundai",
    "modelo": "Creta",
    "ano": 2023,
    "imagem": "https://production.autoforce.com/uploads/picture/image/226579905/used_model_webp_comprar-creta-ultimate-2-0-aut-flex-3932_9548c97a65.jpeg.webp",
    "kmRodados": 8000,
    "tipoCombustivel": "Gasolina",
    "cavalos": 167,
    "tipoTracao": "Dianteira",
    "transmissao": "Automática",
    "preco": 145000.00,
    "localizacao": "Rio de Janeiro, RJ",
    "descricao": "Hyundai Creta Ultimate com bancos em couro, teto solar panorâmico, e pacote de segurança SmartSense.",
    "tipoCarro": "SUV"
  },
  {
    "marca": "Volkswagen",
    "modelo": "T-Cross",
    "ano": 2022,
    "imagem": "https://cdn.motor1.com/images/mgl/g44w3g/s1/vw-t-cross-comfortline-200tsi-2022.jpg",
    "kmRodados": 12000,
    "tipoCombustivel": "Flex",
    "cavalos": 128,
    "tipoTracao": "Dianteira",
    "transmissao": "Automática",
    "preco": 125000.00,
    "localizacao": "Porto Alegre, RS",
    "descricao": "Volkswagen T-Cross Comfortline, com design esportivo, ampla conectividade e ótimo espaço interno.",
    "tipoCarro": "SUV"
  },
  {
    "marca": "Nissan",
    "modelo": "Kicks",
    "ano": 2021,
    "imagem": "https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/57c46f0f0e2163719705ad1d_chr59071.jpeg?quality=70&strip=all&strip=all",
    "kmRodados": 25000,
    "tipoCombustivel": "Gasolina",
    "cavalos": 114,
    "tipoTracao": "Dianteira",
    "transmissao": "CVT",
    "preco": 99000.00,
    "localizacao": "Salvador, BA",
    "descricao": "Nissan Kicks SL com painel digital, sistema multimídia, controle de estabilidade e assistente de partida em rampa.",
    "tipoCarro": "SUV"
  },
  {
    "marca": "Jeep",
    "modelo": "Compass",
    "ano": 2023,
    "imagem": "https://www.comprecar.com.br/storage/news/featured/tg70WG4atS12q0N.jpg",
    "kmRodados": 10000,
    "tipoCombustivel": "Diesel",
    "cavalos": 170,
    "tipoTracao": "4x4",
    "transmissao": "Automática",
    "preco": 210000.00,
    "localizacao": "Brasília, DF",
    "descricao": "Jeep Compass Trailhawk, perfeito para aventuras off-road, com bancos em couro e tecnologia de segurança de ponta.",
    "tipoCarro": "SUV"
  },
  {
    "marca": "BMW",
    "modelo": "320i",
    "ano": 2022,
    "imagem": "https://cdn.motor1.com/images/mgl/rKn4zV/s1/bmw-serie-3-2023-lancamento-no-brasil---em-movimento-na-pista.jpg",
    "kmRodados": 12000,
    "tipoCombustivel": "Gasolina",
    "cavalos": 184,
    "tipoTracao": "Traseira",
    "transmissao": "Automática",
    "preco": 240000.00,
    "localizacao": "São Paulo, SP",
    "descricao": "BMW 320i Sport GP com design elegante, sistema de som Harman Kardon e tecnologia de assistência à condução.",
    "tipoCarro": "Sedan"
  },
  {
    "marca": "Audi",
    "modelo": "Q3",
    "ano": 2021,
    "imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOvTwLmfoYqtiHhMKOOM-ffMxpuuK0X4FGel0b3DnjT11_RdIW7wxFM1bHvJkkXZoG5j-q3r-CvoaJfOCpgR3LC_ImB5Pgd2rH4fKU1emLYwiGurNGQNh7Q-n_R21BJKO1RHkTPlpntWEiXF6tUW7OjZYSew2eQEx0LqADfdheaWBOzd-lou2ZFGYF/w640-h482/20220511_102109.jpg",
    "kmRodados": 15000,
    "tipoCombustivel": "Gasolina",
    "cavalos": 180,
    "tipoTracao": "Quatro Rodas",
    "transmissao": "Automática",
    "preco": 220000.00,
    "localizacao": "Florianópolis, SC",
    "descricao": "Audi Q3 Performance Black com teto solar panorâmico, pacote de tecnologia, e faróis full LED.",
    "tipoCarro": "SUV"
  },


    {
      "marca": "BMW",
      "modelo": "320i",
      "ano": 2022,
      "imagem": "https://image1.mobiauto.com.br/images/api/images/v1.0/284590741/transform/t_crop",
      "kmRodados": 20000,
      "tipoCombustivel": "Gasolina",
      "cavalos": 184,
      "tipoTracao": "Traseira",
      "transmissao": "Automática",
      "preco": 289990.00,
      "localizacao": "Belo Horizonte, MG",
      "descricao": "BMW 320i M Sport, pacote Premium Plus, head-up display, sistema de som Harman Kardon, teto solar, assistente de estacionamento e rodas M de 19 polegadas.",
      "tipoCarro": "Sedan"
    },
  
    {
      "marca": "Hyundai",
      "modelo": "HB20",
      "ano": 2022,
      "imagem": "https://s2-autoesporte.glbimg.com/ErwdxTvVnux8ue4h9FTsH7UWPUM=/0x0:1980x1136/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/F/a/X04D4jQ82RrxN6nnBZSw/novo-hb20-5.jpg",
      "kmRodados": 15000,
      "tipoCombustivel": "Flex",
      "cavalos": 128,
      "tipoTracao": "Dianteira",
      "transmissao": "Automática",
      "preco": 85000.00,
      "localizacao": "Curitiba, PR",
      "descricao": "Hyundai HB20 Comfort Plus hatchback, equipado com controle de estabilidade e segurança avançada.",
      "tipoCarro": "Hatchback"
    },
    {
      "marca": "Volkswagen",
      "modelo": "Golf",
      "ano": 2020,
      "imagem": "https://motorshow.com.br/wp-content/uploads/sites/2/2018/08/11_ms419_golf-10-tsi1.jpg",
      "kmRodados": 30000,
      "tipoCombustivel": "Gasolina",
      "cavalos": 150,
      "tipoTracao": "Dianteira",
      "transmissao": "Automático",
      "preco": 115000.00,
      "localizacao": "Brasília, DF",
      "descricao": "Volkswagen Golf Comfortline, com design esportivo, sistema de navegação e excelente desempenho.",
      "tipoCarro": "Hatchback"
    },
    {
      "marca": "Ford",
      "modelo": "Mustang",
      "ano": 2021,
      "imagem": "https://cdn.motor1.com/images/mgl/mMPmzP/s1/2024-ford-mustang-gt-exterior-front-quarter.webp",
      "kmRodados": 12000,
      "tipoCombustivel": "Gasolina",
      "cavalos": 450,
      "tipoTracao": "Traseira",
      "transmissao": "Automático",
      "preco": 400000.00,
      "localizacao": "Rio de Janeiro, RJ",
      "descricao": "Ford Mustang GT coupé com motor V8, desempenho excepcional, bancos de couro e design icônico.",
      "tipoCarro": "Coupe"
    },
    {
      "marca": "BMW",
      "modelo": "M2",
      "ano": 2022,
      "imagem": "https://www.comprecar.com.br/storage/news/featured/V_JW2Zd9AZMH3_6.jpg",
      "kmRodados": 10000,
      "tipoCombustivel": "Gasolina",
      "cavalos": 410,
      "tipoTracao": "Traseira",
      "transmissao": "Automático",
      "preco": 380000.00,
      "localizacao": "Porto Alegre, RS",
      "descricao": "BMW M2 Competition coupé, equipado com motor turbo, alto desempenho e esportividade.",
      "tipoCarro": "Coupe"
    },
    {
      "marca": "Chevrolet",
      "modelo": "S10",
      "ano": 2021,
      "imagem": "https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2020/10/26073011/Chevrolet-S10-High-Country-3.jpg",
      "kmRodados": 25000,
      "tipoCombustivel": "Diesel",
      "cavalos": 200,
      "tipoTracao": "4x4",
      "transmissao": "Automático",
      "preco": 210000.00,
      "localizacao": "Goiânia, GO",
      "descricao": "Chevrolet S10 High Country, ideal para trabalho e aventura, com sistema de tração integral e alto torque.",
      "tipoCarro": "Pickup"
    },
    {
      "marca": "Toyota",
      "modelo": "Hilux",
      "ano": 2022,
      "imagem": "https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2024/05/03183958/Toyota-Hilux-SRX-sai-de-linha-deixando-SRX-Plus-como-substituta-scaled.jpg",
      "kmRodados": 20000,
      "tipoCombustivel": "Diesel",
      "cavalos": 204,
      "tipoTracao": "4x4",
      "transmissao": "Automático",
      "preco": 250000.00,
      "localizacao": "Campinas, SP",
      "descricao": "Toyota Hilux SRX pickup, excelente para terrenos irregulares e viagens longas, com conforto e robustez.",
      "tipoCarro": "Pickup"
    },
    {
      "marca": "Honda",
      "modelo": "City",
      "ano": 2023,
      "imagem": "https://production.autoforce.com/uploads/picture/image/176053156/main_webp_comprar-new-city-sedan-2024_e1c0e989f3.jpg.webp",
      "kmRodados": 5000,
      "tipoCombustivel": "Flex",
      "cavalos": 126,
      "tipoTracao": "Dianteira",
      "transmissao": "CVT",
      "preco": 95000.00,
      "localizacao": "Salvador, BA",
      "descricao": "Honda City Sedan LX, com excelente economia de combustível, conforto e tecnologia.",
      "tipoCarro": "Sedan"
    },
    
  ]
};

interface Filters {
  makes: string[];
  priceRange: { min: number | null; max: number | null };
  mileageRange: { min: number | null; max: number | null };
  fuelTypes: string[];
  transmission: string[];
  driveTypes: string[];
  yearRange: { min: number | null; max: number | null };
}

interface CardCarsProps {
  selectedCar: string | null;
  filters: Filters;
}

export function CardCars({ selectedCar, filters }: CardCarsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredCars = carrosData.carros.filter((carro) => {
    if (selectedCar && carro.tipoCarro !== selectedCar) return false;
    if (filters.makes.length > 0 && !filters.makes.includes(carro.marca)) return false;
    if (filters.priceRange.min && carro.preco < filters.priceRange.min) return false;
    if (filters.priceRange.max && carro.preco > filters.priceRange.max) return false;
    if (filters.mileageRange.min && carro.kmRodados < filters.mileageRange.min) return false;
    if (filters.mileageRange.max && carro.kmRodados > filters.mileageRange.max) return false;
    if (filters.fuelTypes.length > 0 && !filters.fuelTypes.includes(carro.tipoCombustivel)) return false;
    if (filters.transmission.length > 0 && !filters.transmission.includes(carro.transmissao)) return false;
    if (filters.driveTypes.length > 0 && !filters.driveTypes.includes(carro.tipoTracao)) return false;
    if (filters.yearRange.min && carro.ano < filters.yearRange.min) return false;
    if (filters.yearRange.max && carro.ano > filters.yearRange.max) return false;
    return true;
  });

  // Cálculo do total de páginas
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

  // Obtém os carros da página atual
  const currentCars = filteredCars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="px-4 flex flex-col items-end">
      
      
      <section className="mb-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
        {currentCars.map((carro, index) => (
          <div key={index} className="bg-white rounded-lg p-4 w-full">
            <img 
              className="rounded-lg h-56 w-full object-cover" 
              src={carro.imagem} 
              alt={`${carro.marca} ${carro.modelo}`} 
            />
            <div className="p-4">
              <div className="flex justify-between my-2">
                <h4>{carro.marca} {carro.modelo}</h4>
                <span>R$ {carro.preco.toLocaleString('pt-BR')}</span>
              </div>
              
              <div className="flex justify-between gap-3">
                <div className="bg-gray-100 rounded-md p-1 flex-1">
                  <Car className="size-5"/>
                  <span className="text-sm">{carro.kmRodados.toLocaleString()} km</span>
                </div>
                <div className="bg-gray-100 rounded-md p-1 flex-1">
                  <Fuel className="size-5"/>
                  <span className="text-sm">{carro.tipoCombustivel}</span>
                </div>
                <div className="bg-gray-100 rounded-md p-1 flex-1">
                  <Car className="size-5"/>
                  <span className="text-sm">{carro.cavalos} cv</span>
                </div>
                <div className="bg-gray-100 rounded-md p-1 flex-1">
                  <Car className="size-5"/>
                  <span className="text-sm">{carro.tipoTracao}</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-1 text-orange-500 my-2 font-medium">
                  <MapPin className="size-4"/> 
                  <span className="text-sm">{carro.localizacao}</span>
                </div>
                <p className="text-xs line-clamp-2">{carro.descricao}</p>
                <div className="flex gap-2 mt-2">
                  <Link to="/buy" className="bg-orange-600 rounded-lg justify-center items-center text-white gap-2 flex w-full p-2">
                  <ShoppingCart className="size-5"/> Comprar
                  </Link>
                  <button className="border p-2 rounded-xl text-orange-500 border-orange-500">
                    <Heart/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div></div>
      
        {totalPages > 1 && (
        <div className="flex  my-6">
          <Pagination className="border rounded-xl border-orange-500">
            <PaginationContent>
              <PaginationItem className="text-black">
                <PaginationPrevious 
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none text-black opacity-50" : "cursor-pointer text-black"}
                />
              </PaginationItem>
              
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem className="rounded-none" key={i}>
                  <PaginationLink
                    onClick={() => handlePageChange(i + 1)}
                    isActive={currentPage === i + 1}
                    className="cursor-pointer text-black rounded-none"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext 
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
      </section>

        
    </main>
  );
}

export default CardCars;