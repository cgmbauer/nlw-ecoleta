
function sortData(dataSorted) { // coloca em ordem alfabética
    return (
        dataSorted.sort((a,b) => {
        return a.nome === b.nome ? 0 : a.nome < b.nome ? -1 : 1;
    })
    );
}

function sortArrayAscending(arr) {
    return (
        arr.sort((a,b) => {
        return a === b ? 0 : a < b ? -1 : 1;
    })
    );
}

function fetchData(url) {
    return ( // retorna dataSorted para a função origem (populateUFs ou populateCities)
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let dataSorted = data; // copia os dados de "data" para dataSorted, para não modificar os dados iniciais da variável "data"
                                   // isto porque o método ".sort" utilizado na função sortData modifica diretamente o array passado

            sortData(dataSorted); // chama sortData para colocar o objeto em ordem alfabética (de acordo com o nome dos estados)

            return dataSorted; // retorna dataSorted para a função fetchData
        })
    )
}

// DADOS DA ENTIDADE:

async function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]");

    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

    let dataSorted = await fetchData(url); // chama função para buscar data da API. Precisa de "await" pois a função fetchData retorna uma promessa

    for (let i = 0; i < dataSorted.length; i++) {
    ufSelect.innerHTML += `<option value="${dataSorted[i].id}">${dataSorted[i].nome}</option>`
    }

}

populateUFs(); // executa função acima

async function populateCities() {
    const citySelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value // valor do "dataSorted[i].id", selecionado com o query abaixo

    const indexOfSelectedState = event.target.selectedIndex; // seleciona o index das opções do estado (como se fosse um array)
    stateInput.value = event.target.options[indexOfSelectedState].text; // pega o texto dentro de option -> <option>TEXTO</option>


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios` // url recebe a ID do uf "dataSorted[i].id"

    const dataSorted = await fetchData(url);


    citySelect.innerHTML = '<option value="">Selecione a Cidade</option>'; // renicia o campo cidade, caso o valor do estado seja trocado (para recarregar as cidades)
    citySelect.disabled = true; // bloqueia o campo, caso o usuário troque o estado

    for (let i = 0; i < dataSorted.length; i++) {
        citySelect.innerHTML += `<option value="${dataSorted[i].nome}">${dataSorted[i].nome}</option>`
    }

    citySelect.disabled = false; // habilita seleção de campo
}

document
    .querySelector("select[name=uf]") // seleciona campo uf
    .addEventListener("change", populateCities); // quando mudar o uf, chama função populateCities


// ÍTENS DE COLETA:

const itemsToCollect = document.querySelectorAll(".items-grid li");

let selectedItems = []; // array que guardará itens selecionados
const collectedItems = document.querySelector("input[name=items]"); 


function handleSelectedItem() {

    const itemLi = event.target

    itemLi.classList.toggle("selected"); // vai em cada li, olha dentro das classes daquele elemento li
                                         // se o elemento tiver clase "selected", ela será deletada
                                         // se o elemento tiver não tiver classe "selected", ela será adicionada
                                         // isso é graças ao .toggle
                                         
                                        
    const itemId = itemLi.dataset.id;

    let alreadySelected = selectedItems.indexOf(itemId); // encontra index

    if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId; // se o item do array for diferente ao item selecionado, retorna true
            return itemIsDifferent; // apenas os valores que retornarem true entrarmam em itemIsDifferent
        })

        selectedItems = [...filteredItems] // nova selação será apenas dos items não selecionados anteriormente
  
    } else {
        selectedItems.push(itemId); // caso o item não tenha sido selecionado, será adicionado ao array
    }

    selectedItems = sortArrayAscending(selectedItems); // coloca em ordem crescente

    collectedItems.value = [...selectedItems]; // adiciona os itens selecionados no input escondido
    
}   


for (let i = 0; i < itemsToCollect.length; i++) {
    itemsToCollect[i].addEventListener("click", handleSelectedItem)
}

