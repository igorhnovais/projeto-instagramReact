import Sugestao from "./Sugestao";

export default function Sugestoes () {

    let arr = [
        {fotoUsuario: "assets/img/bad.vibes.memes.svg", nomeUsuario: "bad.vibes.memes", razao: "Segue você" },
        {fotoUsuario: "assets/img/chibirdart.svg", nomeUsuario: "chibirdart", razao: "Segue você"},
        {fotoUsuario: "assets/img/razoesparaacreditar.svg", nomeUsuario: "razoesparaacreditar", razao: "Novo no Instagram"},
        {fotoUsuario: "assets/img/adorable_animals.svg", nomeUsuario: "adorable_animals", razao: "Segue você"},
        {fotoUsuario: "assets/img/smallcutecats.svg", nomeUsuario: "smallcutecats", razao: "Segue você"},
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {arr.map((item,i) => <Sugestao fotoUsuario={item.fotoUsuario} nomeUsuario={item.nomeUsuario} razao={item.razao} key={i}/>)}
        </div>
    )
}