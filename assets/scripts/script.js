const imagePreview = document.getElementById('imagem-visualizacao');
const productTitle = document.getElementById('titulo-produto');
const selectedColorName = document.getElementById('nome-cor-selecionada');
const thumbnailImage0 = document.getElementById('0-imagem-miniatura');
const thumbnailImage1 = document.getElementById('1-imagem-miniatura');
const thumbnailImage2 = document.getElementById('2-imagem-miniatura');

const azulInverno = {
    name: 'Azul-inverno',
    folder: 'imagens-azul-inverno'
}

const estelar = {
    name: 'Estelar',
    folder: 'imagens-estelar'
}

const meiaNoite = {
    name: 'Meia-noite',
    folder: 'imagens-meia-noite'
}

const rosaClaro = {
    name: 'Rosa-claro',
    folder: 'imagens-rosa-claro'
}

const verdeCipreste = {
    name: 'Verde-cipreste',
    folder: 'imagens-verde-cipreste'
}

const colorOptions = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const sizeOptions = ['41 mm', '45 mm'];

let selectedImage = 1;
let selectedSize = 1;
let selectedColor = 1;

function changeImage() {
    const idSelectedOption = document.querySelector('[name="opcao-imagem"]:checked').id; /* Requisitando o input de nome "opcao-imagem" que está checked e pegando seu ID */
    selectedImage = idSelectedOption.charAt(0);
    imagePreview.src = `./assets/imagens/opcoes-cores/${colorOptions[selectedColor].folder}/imagem-${selectedImage}.jpeg`
}

function changeSize() {
    const idsSelectedSize = document.querySelector('[name="opcao-tamanho"]:checked').id;
    selectedSize = idsSelectedSize.charAt(0);
    productTitle.innerText = `Pulseira loop esportiva ${colorOptions[selectedColor].name} para caixa de ${sizeOptions[selectedSize]}`;
    if (sizeOptions[selectedSize] === '41 mm') {
        imagePreview.classList.add('caixa-pequena');
    } else {
        imagePreview.classList.remove('caixa-pequena');
    }
}

function changeColor() {
    const idSelectedColor = document.querySelector('[name="opcao-cor"]:checked').id;
    selectedColor = idSelectedColor.charAt(0);
    productTitle.innerText = `Pulseira loop esportiva ${colorOptions[selectedColor].name} para caixa de ${sizeOptions[selectedSize]}`;
    selectedColorName.innerText = `Cor - ${colorOptions[selectedColor].name}`;
    imagePreview.src = `./assets/imagens/opcoes-cores/${colorOptions[selectedColor].folder}/imagem-${selectedImage}.jpeg`
    thumbnailImage0.src = `./assets/imagens/opcoes-cores/${colorOptions[selectedColor].folder}/imagem-0.jpeg`;
    thumbnailImage1.src = `./assets/imagens/opcoes-cores/${colorOptions[selectedColor].folder}/imagem-1.jpeg`;
    thumbnailImage2.src = `./assets/imagens/opcoes-cores/${colorOptions[selectedColor].folder}/imagem-2.jpeg`;
}