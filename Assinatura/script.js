const canvas = document.getElementById('signature-pad');
const clearButton = document.getElementById('clear');
const saveButton = document.getElementById('save');
const imageResult = document.getElementById('image-result');
const ctx = canvas.getContext('2d');

let drawing = false;

// Ajustar o canvas ao tamanho do elemento
function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}
resizeCanvas();

function startDrawing(event) {
    drawing = true;
    const { offsetX, offsetY } = getEventPosition(event);
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
}

function draw(event) {
    if (!drawing) return;
    event.preventDefault(); // Evita o scroll durante o desenho
    const { offsetX, offsetY } = getEventPosition(event);
    ctx.lineTo(offsetX, offsetY);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
}

function stopDrawing() {
    drawing = false;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveSignature() {
    const dataURL = canvas.toDataURL('image/png');
    const img = document.createElement('img');
    img.src = dataURL;
    img.alt = "Assinatura";
    img.style.border = "1px solid #000";
    img.style.maxWidth = "400px";
    imageResult.innerHTML = '';
    imageResult.appendChild(img);
}

// Função para obter a posição do evento (mouse ou toque)
function getEventPosition(event) {
    if (event.touches && event.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        return {
            offsetX: event.touches[0].clientX - rect.left,
            offsetY: event.touches[0].clientY - rect.top
        };
    }
    return {
        offsetX: event.offsetX,
        offsetY: event.offsetY
    };
}

// Eventos de mouse
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseleave', stopDrawing);

// Eventos de toque
canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', stopDrawing);
canvas.addEventListener('touchcancel', stopDrawing);

clearButton.addEventListener('click', clearCanvas);
saveButton.addEventListener('click', saveSignature);