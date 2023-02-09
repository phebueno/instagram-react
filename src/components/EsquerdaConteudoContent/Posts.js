import Post from "./Post"

export default function Posts() {
    return(
        <div class="posts">
                <Post imgUsuario="assets/img/barked.svg"
            imgAltUsuario="barked"
            imgConteudo="assets/img/dog.svg"
            imgAltConteudo="dog"
            />
            <Post imgUsuario="assets/img/meowed.svg"
            imgAltUsuario="meowed"
            imgConteudo="assets/img/gato-telefone.svg"
            imgAltConteudo="gato-telefone"
            />
            </div>
    )
    
}