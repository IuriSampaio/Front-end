"use stritc";
const encontraCep=(cep)=>{
    const url = `https://viacep.com.br/ws/${cep}/json`;
    fetch(url).then(res => res.json())
              .then(data=> preencheForm(data));
}
const preencheForm=(endereco)=>{
    document.getElementById('endereco').value = endereco.logradouro
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade
    document.getElementById('estado').value = endereco.uf
}
