💇‍♂️ Membro Club - Sistema de Fidelidade para Barbearia
Um sistema web para gerenciamento de cartão fidelidade de clientes de barbearia, desenvolvido com HTML, CSS e JavaScript vanilla.

📋 Sobre o Projeto
O Membro Club é uma aplicação que permite buscar clientes por ID e visualizar suas informações de fidelidade, incluindo histórico de cortes, progresso no cartão fidelidade e status de premiação.

✨ Funcionalidades
🔍 Busca de Cliente
✅ Buscar cliente digitando o ID na barra de pesquisa
✅ Ativação da busca pressionando a tecla Enter
✅ Validação de ID válido e existente
✅ Exibição de alerta de erro para IDs inválidos

👤 Informações do Cliente
✅ Exibição da foto do cliente
✅ Exibição do nome do cliente
✅ Data de início como cliente

📅 Histórico de Cortes
✅ Listagem completa do histórico de agendamentos
✅ Exibição da quantidade total de cortes
✅ Informações de data e horário de cada corte
✅ Ícones de confirmação para cada agendamento

🎯 Cartão Fidelidade
✅ Sistema visual de selos/carimbos
✅ Check verde para cada corte realizado
✅ Selo especial de presente ao completar o cartão
✅ Exibição do ID do cartão

📊 Progresso de Fidelidade
✅ Barra de progresso visual
✅ Contador de cortes restantes para o prêmio
✅ Indicador "0 de 10" cortes realizados
✅ Alerta de parabéns ao atingir 10 cortes com a mensagem: "Parabéns! Seu próximo corte é gratuito!"

🚀 Como Executar
Pré-requisitos
Navegador web moderno
Servidor local (recomendado: Live Server)
Instalação e Execução
Clone o repositório

git clone https://github.com/seu-usuario/membro-club.git
cd membro-club
Instale o Live Server (opcional)

npm install -g live-server
Execute a aplicação

live-server
Ou simplesmente abra o arquivo index.html no seu navegador.

📁 Estrutura do Projeto
DESAFIO-PRATICO-MEMBERCLUB/
├── index.html                    # Página principal
├── db.json                       # Base de dados dos clientes
├── main.js                       # Script principal da aplicação
├── styles.css                    # Estilos principais
├── package.json                  # Configurações do projeto
├── package-lock.json             # Lock das dependências
├── server.json                   # Configurações do servidor
├── webpack.config.js             # Configurações do Webpack
├── dist/                         # Arquivos de distribuição
│   ├── assets/                   # Assets compilados
│   │   ├── capitaoNascimento.jpg
│   │   ├── duda.jpg
│   │   ├── Logo.svg
│   │   ├── Picture.svg
│   │   ├── PinCheck.svg
│   │   ├── PinGift.svg
│   │   └── raposo.jpg
│   └── icons/                    # Ícones compilados
│       ├── ArrowBowDownLeft.svg
│       ├── Button.svg
│       ├── check-fidelidade.svg
│       ├── Check.svg
│       ├── gift-check-card.svg
│       ├── Gift-Progress-Box.svg
│       ├── Gift-Solid.svg
│       ├── gift.svg
│       ├── Icons.svg
│       ├── SealCheck.svg
│       └── Vector.svg
├── src/                          # Código fonte
│   ├── assets/                   # Assets originais
│   │   ├── capitaoNascimento.jpg
│   │   ├── duda.jpg
│   │   ├── Logo.svg
│   │   ├── Picture.svg
│   │   ├── PinCheck.svg
│   │   ├── PinGift.svg
│   │   └── raposo.jpg
│   ├── icons/                    # Ícones originais
│   │   ├── ArrowBowDownLeft.svg
│   │   ├── Button.svg
│   │   ├── check-fidelidade.svg
│   │   ├── Check.svg
│   │   ├── gift-check-card.svg
│   │   ├── Gift-Progress-Box.svg
│   │   ├── Gift-Solid.svg
│   │   ├── gift.svg
│   │   ├── Icons.svg
│   │   ├── SealCheck.svg
│   │   └── Vector.svg
│   └── lib/                      # Bibliotecas e módulos
│       ├── module/
│       │   ├── app.js
│       │   └── clients.js
│       └── styles/
│           └── styles.css
└── node_modules/                 # Dependências do Node.js

O arquivo db.json contém os dados dos clientes no seguinte formato:

{
  "clients": [
    {
      "id": "1",
      "name": "Natália Miranda",
      "image": "/src/assets/Picture.svg", 
      "clientSince": "18/09/2023",
      "appointmentHistory": [
        {"date": "29/04/2024", "time": "18:30"},
        {"date": "16/03/2024", "time": "17:00"},
        {"date": "01/02/2024", "time": "17:30"},
        {"date": "03/01/2024", "time": "15:00"},
        {"date": "28/11/2023", "time": "14:00"},
        {"date": "23/10/2023", "time": "15:00"}
      ],
      "loyaltyCard": {
        "totalCuts": 7,
        "cutsNeeded": 10,
        "cutsRemaining": 3
      }
    },
    {
      "id": "2",
      "name": "Capitão Nascimento",
      "image": "/src/assets/capitaonascimento.jpg",
      "clientSince": "12/04/2023",
      "appointmentHistory": [
        {"date": "01/05/2024", "time": "10:00"},
        {"date": "12/02/2024", "time": "09:00"},
        {"date": "30/12/2023", "time": "11:00"},
        {"date": "05/11/2023", "time": "10:30"}
      ],
      "loyaltyCard": {
        "totalCuts": 4,
        "cutsNeeded": 10,
        "cutsRemaining": 6
      }
    },
    {
      "id": "3",
      "name": "Duda",
      "image": "/src/assets/duda.jpg",
      "clientSince": "15/07/2023",
      "appointmentHistory": [
        {"date": "22/04/2024", "time": "16:00"},
        {"date": "18/03/2024", "time": "16:30"},
        {"date": "24/01/2024", "time": "17:45"},
        {"date": "20/12/2023", "time": "15:15"},
        {"date": "25/12/2023", "time": "18:15"}
      ],
      "loyaltyCard": {
        "totalCuts": 5,
        "cutsNeeded": 8,
        "cutsRemaining": 3
      }
    },
    {
      "id": "4",
      "name": "Raposo",
      "image": "/src/assets/raposo.jpg",
      "clientSince": "21/05/2025",
      "appointmentHistory": [
        {"date": "22/04/2024", "time": "16:00"},
        {"date": "18/03/2024", "time": "16:30"},
        {"date": "24/01/2024", "time": "17:45"},
        {"date": "20/12/2023", "time": "15:15"},
        {"date": "20/12/2023", "time": "15:15"},
        {"date": "20/12/2023", "time": "15:15"},
        {"date": "20/12/2023", "time": "15:15"},
        {"date": "20/12/2023", "time": "15:15"},
        {"date": "20/12/2023", "time": "15:15"},
        {"date": "20/12/2023", "time": "15:15"}
      ],
      "loyaltyCard": {
        "totalCuts": 10,
        "cutsNeeded": 10,
        "cutsRemaining": 0
      }
    }
  ]
}

🎨 Design e Responsividade
Design System: Utiliza variáveis CSS para cores e tipografia consistentes
Responsivo: Adaptado para desktop, tablet e mobile
Fonte: Oxygen (Google Fonts)

Cores principais:
Rosa: #D658B3
Verde: #45B442
Tons de cinza para textos e backgrounds

🔧 Tecnologias Utilizadas
HTML5: Estrutura semântica
CSS3: Estilização e responsividade
CSS Grid e Flexbox
Variáveis CSS (Custom Properties)
Media Queries
JavaScript ES6+: Lógica da aplicação
Fetch API para carregar dados
Manipulação do DOM
Event Listeners
Async/Await

📱 Funcionalidades por Dispositivo
Desktop
Layout em duas colunas
Cartão fidelidade com grid 5x2
Barra de progresso completa
Mobile
Layout em coluna única
Cartão fidelidade adaptativo
Elementos redimensionados para touch

🎯 IDs de Teste
Para testar a aplicação, utilize os seguintes IDs:

ID 1: Natália Miranda (7 cortes)
ID 2: Capitão Nascimento (4 cortes)
ID 3: Duda (5 cortes)
ID 4: Raposo (10 cortes) Com alerta de "Parabéns" pelo próximo corte grátis.

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

👨‍💻 Autor
Desenvolvido por Lucas Goes

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
