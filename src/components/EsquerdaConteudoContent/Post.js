import { useState } from "react"

export default function Post(props) {
    const [bookmark, setBookmark] = useState("bookmark-outline");
    const [heart, setHeart] = useState("heart-outline");
    const [likes, setLikes] = useState(101523);
    const [heartColor, setHeartColor] = useState("dark");
    const [transition, setTransition] = useState("");

    function salvarPost(){
        bookmark === "bookmark-outline" ? setBookmark("bookmark") : setBookmark("bookmark-outline");
    }

    function curtirPost(){
        const tentativa = curtirPostImg();
        if(tentativa===false){ //Se o post estiver curtido, descurte (apenas clique no coração)
            setHeart("heart-outline");
            setLikes(likes-1);
            setHeartColor("dark");
        }        
    }

    function curtirPostImg(){
        if (heart === "heart-outline"){
            setHeart("heart");
            setLikes(likes+1);
            setHeartColor("danger");
            //ADICIONAR AQUI A TRANSIÇÃO PARA TESTAR COM 1 CLIQUE
            return true;
        }
        else return false;            
    }
    // FUNÇÃO DOUBLE CLICK COM TRANSIÇÃO
    // function dbCurtirPostImg(){
    //     const tentativa = curtirPostImg();
    //     if (tentativa===true){
    //         setTransition("transition");
    //         setTimeout(() => {
    //             setTransition("");
    //         }, 500);
    //     }
    // }

    return(
        <div class="post" data-test="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={props.imgUsuario} alt={props.imgAltUsuario} />
                            meowed
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                    {/* ION-ICON DE TRANSIÇÃO: <ion-icon class={transition} name="heart"></ion-icon> */}
                     
                        <img data-test="post-image" src={props.imgConteudo} alt={props.imgAltConteudo} onClick={curtirPostImg}/>
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon color={heartColor} name={heart} data-test="like-post" onClick={curtirPost}></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name={bookmark} data-test="save-post" onClick={salvarPost}></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src="assets/img/respondeai.svg" alt="respondeai" />
                            <div class="texto">
                                Curtido por <strong>respondeai</strong> e <strong data-test="likes-number">outras {likes} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
    )
}