import { Heart, MapPin, MessageCircleMore, X, Send } from "lucide-react";
import { useState, useEffect } from "react";

interface Message {
  content: string;
  isUser: boolean;
}

export function Header() {

    const [newMessages, setNewMessages] = useState<number>(0);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);
  
    useEffect(() => {
      // Carregar mensagens salvas, se houver
      const savedMessages = localStorage.getItem('chatMessages');
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
        setNewMessages(JSON.parse(savedMessages).length);
      } else {
        // Adicionar mensagem de boas-vindas
        setMessages([{ content: 'Olá, bem-vindo! Quer conferir nossos catálogos?', isUser: false }]);
        setNewMessages(1);
      }
    }, []);
  
    useEffect(() => {
      // Salvar mensagens no localStorage
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);
  
    const handleSendMessage = () => {
      if (inputMessage.trim() !== '') {
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: inputMessage, isUser: true },
        ]);
        setInputMessage('');
        setNewMessages(newMessages + 1);
  
        // Simular resposta do chatbot após 1 segundo
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { content: 'Claro, vou te mostrar!', isUser: false },
          ]);
          setNewMessages(newMessages + 1);
        }, 1000);
      }
    };
  
    const toggleChatWidget = () => {
      setIsOpen(!isOpen);
      setNewMessages(0);
    };

  const menuItems = document.querySelectorAll('#menu li') as NodeListOf<HTMLLIElement>;

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(i => i.classList.remove('border-b-2', 'border-orange-500', 'text-orange-500'));
      item.classList.add('border-b-2', 'border-orange-500', 'text-orange-500');
    });
  });

  return (
    <header className="flex items-center justify-between bg-white px-8">
      <div className="gap-20 flex items-center justify-between">
        <img className="w-full" src="./src/assets/logo.svg" alt="" />

        <div>
          <span className="flex gap-2"><MapPin /> Budapest</span>
        </div>

        <div>
          <ul id="menu" className="flex gap-8 h-full font-medium">
            <li id="buy-tab" className="cursor-pointer border-b-2 py-4 border-orange-500 text-orange-500 transition-all duration-300 ease-in-out">Buy</li>
            <li id="sell-tab" className="cursor-pointer py-4 transition-all duration-300 ease-in-out">Sell</li>
            <li id="about-tab" className="cursor-pointer py-4 transition-all duration-300 ease-in-out">About</li>
            <li id="reviews-tab" className="cursor-pointer py-4 transition-all duration-300 ease-in-out">Reviews</li>
          </ul>
        </div>
      </div>

      <div className="flex gap-2">
        <div className={`fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Chat Support</h3>

          </div>
          {isOpen && (
            <div className="h-80 bg-gray-100 overflow-y-auto p-1">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`my-2  ${
                    message.isUser ? 'self-end ml-20 bg-orange-500 text-white' : 'self-start bg-white'
                  } px-3 py-2 rounded-lg max-w-[70%] break-words`}
                >
                  <div className="flex" >
                  {message.content}
                
                  </div>
                  <span className={`flex justify-end text-[10px] ${
                    message.isUser ? ' text-white' : ''
                  }`}>Hoje as 14:00</span>
                </div>
                
              ))}
            </div>
          )}
          {isOpen && (
            <div className="mt-4 flex">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none  "
                placeholder="Digite sua mensagem..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
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
          )}
        </div>
        <span
  className="w-8 relative bg-gray-100 flex items-center justify-center rounded-md cursor-pointer"
  onClick={toggleChatWidget}
>
  {newMessages > 0 && (
    <span className="bg-red-500 rounded-full absolute w-4 h-4 flex items-center justify-center -top-1.5 -right-1.5 text-[10px] text-center text-white">
      {newMessages}
    </span>
  )}
  {isOpen ? <X className="size-5" /> : <MessageCircleMore className="size-5" />}
</span>
        <span className="w-8 bg-gray-100 flex items-center justify-center rounded-md mr-2"><Heart className="size-5" /></span>

        <div className="flex bg-gray-100 rounded-sm items-center justify-center">
          <img className="w-8 rounded-sm" src="https://github.com/almirjrdev.png" alt="" />
          <div className="flex items-center justify-center px-3">
            <h2>Almir Júnior</h2>
          </div>
        </div>
      </div>
    </header>
  );
}