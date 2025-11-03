'use strict'

async function mostrarContatos() {
    const url = `https://contatos-marcel.onrender.com/v1/dados`

    const response = await fetch(url)
    const contatos = await response.json()

    console.log(contatos)
    return contatos
}

// Chamada da função com tratamento de erro
mostrarContatos().catch(erro => console.error('Erro ao buscar contatos:', erro))