import Post from "./Post"

export default function Posts() {
    const arrPosts=[{usuario:"barked",conteudo:"dog"},
    {usuario:"meowed",conteudo:"gato-telefone"}];
    return(
        <div class="posts">
            {arrPosts.map(post=>(
                <Post imgUsuario={`assets/img/${post.usuario}.svg`}
                imgAltUsuario={post.usuario}
                imgConteudo={`assets/img/${post.conteudo}.svg`}
                imgAltConteudo={post.conteudo}
                />
            ))}
            </div>
    )
    
}