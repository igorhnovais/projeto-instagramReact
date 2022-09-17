import React from 'react';

export default function (props) {

    function salvarPost(){

        if (postSalvado === "bookmark-outline"){
            setPostSalvado("bookmark")
        } else {
            setPostSalvado("bookmark-outline")
        }
          
    }

    const [postSalvado, setPostSalvado] = React.useState("bookmark-outline");

    function curtirPost(){

        if (postCurtido === "heart-outline"){
            setPostCurtido("heart");
            setNumeroCurtido(numeroCurtido + 1);
            setCor("red")
        } else {
            setPostCurtido("heart-outline");
            setNumeroCurtido(numeroCurtido - 1);
            setCor("black")
        } 
    
    }

    const [postCurtido, setPostCurtido] = React.useState("heart-outline");
    const [numeroCurtido, setNumeroCurtido] = React.useState(props.numeroCurtidas);
    const [cor, setCor] = React.useState("black")

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.fotoUsuario} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img onDoubleClick={curtirPost} src={props.imagemPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon onClick={curtirPost} name={postCurtido} style={{color: cor}}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={salvarPost} name={postSalvado} ></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.fotoCurtida} />
                    <div class="texto">
                        Curtido por <strong>{props.usuarioCurtido}</strong> e <strong> outras {numeroCurtido} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

    )
}