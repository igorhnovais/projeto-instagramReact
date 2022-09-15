import Post from "./Post";

export default function Posts() {

    let arr = [
        {fotoUsuario: "assets/img/meowed.svg", usuario: "meowed", imagemPost: "assets/img/gato-telefone.svg", fotoCurtida: "assets/img/respondeai.svg", usuarioCurtido: "respondeai"},
        {fotoUsuario: "assets/img/barked.svg", usuario: "barked", imagemPost: "assets/img/dog.svg", fotoCurtida: "assets/img/adorable_animals.svg", usuarioCurtido: "adorable_animals"}
        
    ]
    
    return (
        <div class="posts">

            {arr.map((item,i) => <Post fotoUsuario={item.fotoUsuario} usuario={item.usuario} imagemPost={item.imagemPost} fotoCurtida={item.fotoCurtida} usuarioCurtido={item.usuarioCurtido} key={i}/>)}
            
        </div>
        
    )
}