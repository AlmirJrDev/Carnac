import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Car, Fuel, MapPin, Heart, ChevronRight, Wallet, CreditCard, Landmark,} from "lucide-react";
import { useState } from "react";

export function BuyCar() {

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [cep, setCep] = useState('');
  const [name, setName] = useState('Almir Júnior Araújo Gomes'); // Valor inicial
  const [phone, setPhone] = useState('+55 (44) 99991-3452'); // Valor inicial

    // Função para salvar os dados e fechar o diálogo
    const handleSave = () => {
      // Aqui você pode adicionar lógica para salvar os dados, se necessário
      setIsDialogOpen(false);
    };
  return(
    <main className="p-4 h-screen flex items-start justify-center bg-gray-100 ">
    <div  className="bg-white rounded-lg px-4 w-full ">
    <img 
      className="rounded-lg h-56 w-full object-cover" 
      src="" 
   
    />
    <div className="p-4">
      <div className="flex justify-between items-center my-2">
        <h4>Carro</h4>
        <span className="flex items-center justify-center gap-2">R$ 12

       
        <button className="border p-2 rounded-xl text-orange-500 border-orange-500">
         <Heart/>
       </button>
 
        </span>
      </div>
      
      <div className="flex justify-between gap-3">
        <div className="bg-gray-100 rounded-md p-1 flex-1">
          <Car className="size-5"/>
          <span className="text-sm">12 km</span>
        </div>
        <div className="bg-gray-100 rounded-md p-1 flex-1">
          <Fuel className="size-5"/>
          <span className="text-sm">12</span>
        </div>
        <div className="bg-gray-100 rounded-md p-1 flex-1">
          <Car className="size-5"/>
          <span className="text-sm">12 cv</span>
        </div>
        <div className="bg-gray-100 rounded-md p-1 flex-1">
          <Car className="size-5"/>
          <span className="text-sm">12</span>
        </div>
      </div>
      
      <div>
        <div className="flex items-center gap-1 text-orange-500 my-2 font-medium">
          <MapPin className="size-4"/> 
          <span className="text-sm">12</span>
        </div>
        <p className="text-xs line-clamp-2">12</p>
  
      </div>
    </div>
  </div>
  <div className="px-4  ">

  <Dialog>
  <DialogTrigger className=" border border-orange-400 flex items-center justify-between  w-full rounded-lg p-2 bg-white text-black ">
    <div className="flex flex-col">
    <div className="flex gap-2"><MapPin className="text-orange-500"/> <h2>{address && `Endereço: ${address}, ${city} - ${cep}`}</h2></div>
    <div className="flex" >Cliente: {name}</div>
    <div className="flex" ><span>Tel: {phone}</span></div>
    </div>

    <ChevronRight className="text-orange-500"/>
    </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Formulario de compra</DialogTitle>
      <DialogDescription>
      Precisamos de algumas informações para acerta o envio para seu destino.
      </DialogDescription>
    </DialogHeader>
    <div className="flex justify-between gap-2">
    <form className="flex flex-col gap-2 w-full">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <label htmlFor="address">Endereço</label>
              <input
                id="address"
                className="border p-2 w-36 rounded-md"
                type="text"
                placeholder="Endereço"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city">Cidade - UF</label>
              <input
                id="city"
                className="border p-2 w-36 rounded-md"
                type="text"
                placeholder="Cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                className="border p-2 w-36 rounded-md"
                type="text"
                placeholder="CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </div>
          </div>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            className="border p-2 rounded-md"
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="phone">Telefone</label>
          <input
            id="phone"
            className="border p-2 rounded-md"
            type="text"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </form>

</div>
<Button className="bg-orange-500 hover:bg-orange-600 mt-4" onClick={handleSave}>
          Salvar
        </Button>
  </DialogContent>
</Dialog>
   
    <div>
      Forma de pagamento
      <div className="flex w-full gap-2">
      <div className="border border-orange-500 rounded-lg text-[10px] p-2 bg-white">
        <div className="flex items-center gap-2 text-sm">  <Wallet  className="text-orange-500"/> Dinheiro</div>
        <span> Pagamento à vista, em dinheiro, como nos velhos tempos!</span>
      </div>
      <div  className="border border-orange-500 rounded-lg text-[10px] p-2 bg-white">
      <div className="flex items-center gap-2 text-sm">  <CreditCard  className="text-orange-500"/> Cartão de Credito</div>
      <span>Praticidade e segurança na palma da mão, em até X vezes sem juros!</span>
      </div>
      <div  className="border border-orange-500 rounded-lg text-[10px] p-2 bg-white">
      <div className="flex items-center gap-2 text-sm">  <Landmark  className="text-orange-500"/> Boleto</div>
        <span>Para quem gosta do clássico e organizado. Receba o boleto e pague no seu tempo!</span>
      </div>
      </div>
    </div>
  </div>
  </main>
  )
}