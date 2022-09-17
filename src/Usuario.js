import React from "react";

export default function Usuario() {

    function adicionarNome(){
        const nome = prompt('qual nome você gostaria de colocar?');
        setNome(nome);
    }

    function adicionarFoto(){
        const foto = prompt('qual o link da foto você gostaria de usar?');
        setFoto(foto);
    }

    const [nome, setNome] = React.useState("Catana");
    const [foto, setFoto] = React.useState("assets/img/catanacomics.svg")

    return (
        <div class="usuario">
            <img onClick={adicionarFoto} src={foto} />
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                    {nome}
                    <ion-icon onClick={adicionarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}