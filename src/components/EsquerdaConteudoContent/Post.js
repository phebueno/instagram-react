export default function Post(props) {
    return(
        <div class="post">
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
                        <img data-test="post-image" src={props.imgConteudo} alt={props.imgAltConteudo} />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name="heart-outline" data-test="like-post"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline" data-test="save-post"></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src="assets/img/respondeai.svg" alt="respondeai" />
                            <div class="texto">
                                Curtido por <strong>respondeai</strong> e <strong data-test="likes-number">outras 101.523 pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
    )
}