import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Car, Fuel, MapPin, Heart, ChevronRight, Wallet, CreditCard, Landmark, Truck,  User2,  MessageCircleWarning,} from "lucide-react";
import { useState } from "react";

export function BuyCar() {

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [cep, setCep] = useState('');
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(''); 
  const [obs, setObs] = useState(''); 

    // Função para salvar os dados e fechar o diálogo
    const handleSave = () => {
    
     
    };
  return(
    <main className="p-4 h-screen flex items-start justify-center bg-gray-100  ">
    <div  className="bg-white rounded-lg border p-4 w-1/2 ">
    <img 
      className="rounded-lg max-h-80 w-full object-cover" 
      src="./src/assets/bmwcar.svg" 
   
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
  <header className="px-4 w-1/2">
    <hgroup className="mb-6">
      <h1 className="text-2xl font-semibold">Detalhes para o Pagamento</h1>
      <h3 className="text-neutral-500">Complete o formulario para que efetuamos o seu pagamento.</h3>
    </hgroup>
  <Dialog>
  <DialogTrigger className=" border border-orange-400 flex items-center justify-between  w-full rounded-lg p-2 bg-white text-black ">

    <div className="flex flex-col w-full  divide-y-2">
    <h2 className="text-start text-xl font-semibold mb-2 p-1">Enviar para:</h2>
    <div className="flex  gap-2 justify-between items-center">
      <div className="flex justify-center items-center gap-2 p-1">
      <span className="p-2"><Truck strokeWidth={1.6} className=""/> </span><span className="flex font-medium   flex-col text-start">Endereço  <h2 className="text-gray-500 font-normal">{address && ` ${address}, ${city} - ${cep}` || "Seu endereço"}</h2></span>
      </div>
      <ChevronRight className="text-orange-500"/></div>
      <div className="flex  gap-2 justify-between items-center">
      <div className="flex justify-center items-center gap-2 p-1">
      <span className="p-2"><User2 strokeWidth={1.6} className=""/> </span><span className="flex font-medium   flex-col text-start">{name || "Nome"}  <h2 className="text-gray-500 font-normal">{email || "Email"}</h2></span>
      </div>
      <ChevronRight className="text-orange-500"/></div>
      <div className="flex  gap-2 justify-between items-center">
      <div className="flex justify-center items-center gap-2 p-1">
      <span className="p-2"><MessageCircleWarning strokeWidth={1.6} className=""/> </span><span className="flex font-medium   flex-col text-start">Observações  <h2 className="text-gray-500 font-normal">{obs || "Observação"}</h2></span>
      </div>
      <ChevronRight className="text-orange-500"/></div>
      

    </div>

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
              <label className="p-2" htmlFor="address">Endereço</label>
              <input
                id="address"
                className="border flex-1 p-2 w-36 rounded-md"
                type="text"
                placeholder="Endereço"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="p-2" htmlFor="city">Cidade - UF</label>
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
              <label className="p-2" htmlFor="cep">CEP</label>
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
          <label className="px-2" htmlFor="name">Nome</label>
          <input
            id="name"
            className="border p-2 rounded-md"
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="px-2" htmlFor="phone">Telefone</label>
          <input
            id="phone"
            className="border p-2 rounded-md"
            type="text"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label className="px-2" htmlFor="email">Email</label>
          <input
            id="email"
            className="border p-2 rounded-md"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="px-2" htmlFor="Observações">Observações</label>
          <input
            id="obs"
            className="border p-2 rounded-md"
            type="obs"
            placeholder="Observações"
            value={obs}
            onChange={(e) => setObs(e.target.value)}
          />
        </form>

</div>
<Button className="bg-orange-500 hover:bg-orange-600 mt-4" onClick={handleSave}>
          Salvar
        </Button>
  </DialogContent>
</Dialog>
   
    <div className="mt-6">
      Forma de pagamento
      <div className="flex w-full gap-2">
      <div className="border flex-1 border-orange-500 rounded-lg text-[10px] p-2 bg-white">
        <div className="flex items-center gap-2 text-sm">  <Wallet  className="text-orange-500"/> Dinheiro (PIX)</div>
        <span> Pagamento à vista, em pix, como nos novos tempos!</span>
      </div>
      <div  className="border flex-1 border-orange-500 rounded-lg text-[10px] p-2 bg-white">
      <div className="flex items-center gap-2 text-sm">  <CreditCard  className="text-orange-500"/> Cartão de Credito</div>
      <span>Praticidade e segurança na palma da mão, em até X vezes sem juros!</span>
      </div>
     
      </div>
      <div className=" rounded-lg mt-2 h-18 flex flex-col items-center justify-center p-2np text-white font-semibold   bg-orange-500">
        <div className=" border rounded-lg border-white flex w-full justify-between items-center p-4"> 
          <div>R$ 100.000,00</div>
          <div>Conferido! Vamos de pagamento :D</div>
          <div>Dinheiro</div>
        </div>

   
      </div>
    </div>
  </header>
  </main>
  )
}