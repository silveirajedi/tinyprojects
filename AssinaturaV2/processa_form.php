<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'] ?? '';
    $assinatura = $_POST['assinatura'] ?? '';

    if (empty($assinatura)) {
        die("Assinatura não recebida.");
    }

    // Limpa a string base64
    $assinatura = str_replace('data:image/png;base64,', '', $assinatura);
    $assinatura = str_replace(' ', '+', $assinatura);

    // Decodifica a imagem
    $imagemBinaria = base64_decode($assinatura);

    // Caminho para salvar
    $nomeArquivo = 'assinaturas/' . preg_replace('/[^a-zA-Z0-9]/', '_', $nome) . '_' . time() . '.png';

    if (!file_exists('assinaturas')) {
        mkdir('assinaturas', 0777, true);  // Cria pasta se não existir
    }

    if (file_put_contents($nomeArquivo, $imagemBinaria)) {
        echo "Formulário recebido com sucesso!<br>";
        echo "Assinatura salva: <a href='$nomeArquivo'>$nomeArquivo</a>";
    } else {
        echo "Erro ao salvar a assinatura.";
    }
} else {
    echo "Método inválido.";
}
