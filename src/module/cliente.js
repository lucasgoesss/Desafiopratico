import { apiConfig } from "./api.js";

const search_input = document.getElementById("search-input");
const search_btn = document.getElementById("search-btn");

// Exemplo de função que renderiza os dados do cliente na tela
function renderClientData(client) {
  console.log("Cliente encontrado:", client);

// Atualiza informações básicas do cliente
  document.getElementById("client-name").textContent = client.name;
  document.getElementById("start-date").textContent = client.clientSince;
  document.getElementById("quantidade-cortes").textContent = `${client.loyaltyCard.totalCuts} cortes`;
  document.getElementById("client-photo").src = client.image;

  // Atualiza o ID do cartão
  //document.getElementById("card-id-input").value = `ID ${client.id.padStart(3, '0')}//-537-835-230`;
  const stamps = document.getElementById("stamps-container")
  // Atualiza histórico de agendamentos
  const horariosagendados = document.getElementById("horarios-agendados")


  // Remove todos os elementos com a classe "linha-agendamento" de dentro de "horarios-agendados"
const linhasExistentes = horariosagendados.querySelectorAll(".linha-agendamento");
linhasExistentes.forEach(linha => linha.remove());


// Adiciona as novas linhas de agendamento
  client.appointmentHistory.forEach(item=>{
    const linha = document.createElement("div");
  linha.classList.add("linha-agendamento");

  linha.innerHTML = `
    <div class="info-agendamento">
      <p class="data">${item.date}</p>
      <small class="hora">${item.time}</small>
    </div>
    <img src="./src/icons/Check.svg" alt="Check" class="check-icon" />
  `;

  horariosagendados.appendChild(linha);
  }) 

}

search_btn.addEventListener("click", async function () {
  const clientId = search_input.value;
  search_input.value = ""; // ← limpa o input
  const spanId = document.getElementById("card-id-input")
  spanId.value = `ID ${clientId}`


  try {
    const response = await fetch(`${apiConfig.baseURL}/clients/${clientId}`);
    
    if (!response.ok) {
      throw new Error("Cliente não encontrado");
    }

    const clientData = await response.json();

    renderClientData(clientData); // ← Aqui está a chamada correta
    renderStamps(clientData.loyaltyCard); // ← Aqui está a chamada correta


  } catch (error) {
    console.error("Erro na busca:", error);
    alert("Erro ao buscar cliente: " + error.message);
  }
});

function renderStamps(data){ 
  console.log("render cards aqui:",data) 
  const stamps = document.getElementById("stamps-container")
  const numberRestante = document.getElementById("number-restante")
  const fill = document.getElementById("fill")
  const progressCount = document.getElementById("progress-count")

  numberRestante.innerHTML = `${data.cutsRemaining}`
  stamps.innerHTML = ""

  fill.style.width=`${data.totalCuts*10}%`

  progressCount.innerHTML = `${data.totalCuts} de ${data.cutsNeeded}`


  for (let i=1;i<data.cutsNeeded;i++){

    
    if (i>data.totalCuts) {
      stamps.innerHTML += `<div></div>`
       
      continue 
    }
    stamps.innerHTML += `<div><img src="./src/assets/PinCheck.svg" alt="Selo ${i}" /></div>`

  }

  if (data.totalCuts==data.cutsNeeded) {
      stamps.innerHTML += `<div><img src="./src/assets/PinCheck.svg" alt="Selo ${data.cutsNeeded}" /></div>`

  alert("Parabéns! Seu próximo corte é gratuito!")
    
  } else {
    stamps.innerHTML += `<div><img src="./src/icons/gift-check-card.svg" id="gift-check-card" alt="Selo ${data.cutsNeeded}" /></div>`

  }


  
}