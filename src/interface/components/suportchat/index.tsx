import { useState, useEffect } from "react";
import { MessageCircleMore, X, Send } from "lucide-react";

interface Message {
  content: string;
  isUser: boolean;
  timestamp?: string;
  type?: 'normal' | 'catalog-question' | 'catalog-selection';
}

const CATALOG_ITEMS = [
  { 
    id: 1, 
    name: 'Sedans de Luxo', 
    description: 'Mercedes-Benz, BMW Serie 7, Audi A8 - Elegância e conforto',
    cars: [
      'Mercedes-Benz S-Class 2022',
      'BMW 750Li xDrive 2021',
      'Audi A8 L 55 TFSI 2022'
    ]
  },
  { 
    id: 2, 
    name: 'SUVs Premium', 
    description: 'Range Rover, Porsche Cayenne, Mercedes GLS - Poder e sofisticação',
    cars: [
      'Range Rover Autobiography 2022',
      'Porsche Cayenne Turbo GT 2022',
      'Mercedes-Benz GLS 600 Maybach 2021'
    ]
  },
  { 
    id: 3, 
    name: 'Esportivos', 
    description: 'Ferrari, Porsche, Lamborghini - Velocidade e design',
    cars: [
      'Porsche 911 Turbo S 2022',
      'Ferrari F8 Tributo 2021',
      'Lamborghini Huracán EVO 2022'
    ]
  },
  { 
    id: 4, 
    name: 'Coupés de Luxo', 
    description: 'Bentley, Rolls-Royce, Maserati - Exclusividade incomparável',
    cars: [
      'Bentley Continental GT 2022',
      'Rolls-Royce Wraith 2021',
      'Maserati GranTurismo 2022'
    ]
  }
];

export function ChatSupport() {
  const [newMessages, setNewMessages] = useState<number>(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [conversationStage, setConversationStage] = useState<'initial' | 'catalog-offer' | 'catalog-selection' | 'car-details'>('initial');
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  // Função para formatar timestamp
  const formatTimestamp = () => {
    const now = new Date();
    return `Hoje às ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  // Função para adicionar mensagem inicial proativa
  const addProactiveInitialMessage = () => {
    const initialMessage: Message = {
      content: "Bem-vindo à Elite Motors! 🏎️ Estamos especializados em carros de luxo importados. Quer conhecer nossa seleção exclusiva?",
      isUser: false,
      timestamp: formatTimestamp(),
      type: 'normal'
    };
    
    setMessages([initialMessage]);
    setConversationStage('initial');
    setNewMessages(1);
    setIsOpen(true);
  };

  useEffect(() => {
    addProactiveInitialMessage();
  }, []);

  const handleBotResponse = (userMessage: string) => {
    let botResponse: Message;

    switch (conversationStage) {
      case 'initial':
        if (userMessage.toLowerCase().includes('catalogo') || userMessage.toLowerCase().includes('carros')) {
          botResponse = {
            content: "Temos coleções exclusivas de carros de luxo. Quer ver nosso catálogo? Responda 'Sim'!",
            isUser: false,
            timestamp: formatTimestamp(),
            type: 'catalog-question'
          };
          setConversationStage('catalog-offer');
        } else {
          botResponse = {
            content: "Nossos especialistas podem ajudar você a encontrar o carro dos seus sonhos. Quer ver nosso catálogo de luxo?",
            isUser: false,
            timestamp: formatTimestamp(),
            type: 'normal'
          };
        }
        break;

      case 'catalog-offer':
        if (userMessage.toLowerCase() === 'sim') {
          botResponse = {
            content: "Escolha uma categoria digitando o número:\n1. Sedans de Luxo\n2. SUVs Premium\n3. Esportivos\n4. Coupés de Luxo",
            isUser: false,
            timestamp: formatTimestamp(),
            type: 'catalog-selection'
          };
          setConversationStage('catalog-selection');
        } else {
          botResponse = {
            content: "Sem problemas. Estamos aqui para ajudar no que precisar.",
            isUser: false,
            timestamp: formatTimestamp(),
            type: 'normal'
          };
          setConversationStage('initial');
        }
        break;

      case 'catalog-selection':
        const categoryNumber = parseInt(userMessage);
        
        if (categoryNumber >= 1 && categoryNumber <= 4) {
          const selectedCategory = CATALOG_ITEMS[categoryNumber - 1];
          botResponse = {
            content: `Categoria ${selectedCategory.name}. ${selectedCategory.description}\n\nCarros disponíveis:\n${selectedCategory.cars.join('\n')}\n\nQuer mais detalhes? Digite o número do carro.`,
            isUser: false,
            timestamp: formatTimestamp(),
            type: 'catalog-selection'
          };
          setSelectedCategory(categoryNumber);
          setConversationStage('car-details');
        } else {
          botResponse = {
            content: "Categoria inválida. Por favor, escolha um número entre 1 e 4.",
            isUser: false,
            timestamp: formatTimestamp(),
            type: 'catalog-selection'
          };
        }
        break;

      case 'car-details':
        if (selectedCategory) {
          const category = CATALOG_ITEMS[selectedCategory - 1];
          const carIndex = parseInt(userMessage) - 1;

          if (carIndex >= 0 && carIndex < category.cars.length) {
            botResponse = {
              content: `Detalhes do ${category.cars[carIndex]}:\n- Condição: Seminovo\n- Ano: 2022\n- Km rodados: Baixa quilometragem\n- Preço: Sob consulta\n\nGostaria de agendar uma visita ou fazer uma proposta?`,
              isUser: false,
              timestamp: formatTimestamp(),
              type: 'normal'
            };
          } else {
            botResponse = {
              content: "Número do carro inválido. Por favor, escolha um número da lista.",
              isUser: false,
              timestamp: formatTimestamp(),
              type: 'catalog-question'
            };
          }
        } else {
          botResponse = {
            content: "Ops, algo deu errado. Vamos recomeçar.",
            isUser: false,
            timestamp: formatTimestamp(),
            type: 'normal'
          };
          setConversationStage('initial');
        }
        break;

      default:
        botResponse = {
          content: "Desculpe, não entendi. Podemos ver nosso catálogo de carros de luxo?",
          isUser: false,
          timestamp: formatTimestamp(),
          type: 'normal'
        };
    }

    return botResponse;
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const userMessage: Message = {
        content: inputMessage,
        isUser: true,
        timestamp: formatTimestamp()
      };

      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      
      const botResponse = handleBotResponse(inputMessage);
      
      setTimeout(() => {
        const finalMessages = [...updatedMessages, botResponse];
        setMessages(finalMessages);
        setNewMessages(prevNew => prevNew + 1);
      }, 1000);
      
      setInputMessage("");
    }
  };

  return (
    <div className="relative">
      <div
        className={`fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {isOpen && (
          <>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-800">Elite Motors</h3>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="h-80 bg-gray-100 overflow-y-auto p-1">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`my-2 ${
                    message.isUser
                      ? "self-end ml-20 bg-orange-500 text-white"
                      : "self-start bg-white"
                  } px-3 py-2 rounded-lg max-w-[70%] break-words`}
                >
                  <div className="flex">{message.content}</div>
                  <span
                    className={`flex justify-end text-[10px] ${
                      message.isUser ? " text-white" : ""
                    }`}
                  >
                    {message.timestamp}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none"
                placeholder="Digite sua mensagem..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
              />
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-r-lg px-3 py-2 flex items-center justify-center"
                onClick={handleSendMessage}
              >
                <Send className="size-5" />
              </button>
            </div>
          </>
        )}
      </div>
      <span
        className="w-8 h-8 relative bg-gray-100 flex items-center justify-center rounded-md cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
          setNewMessages(0);
        }}
      >
        {newMessages > 0 && (
          <span className="bg-red-500 rounded-full absolute w-4 h-4 flex items-center justify-center -top-1.5 -right-1.5 text-[10px] text-center text-white">
            {newMessages}
          </span>
        )}
        {isOpen ? <X className="size-5" /> : <MessageCircleMore className="size-5" />}
      </span>
    </div>
  );
}