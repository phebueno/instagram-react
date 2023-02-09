export default function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} alt={props.imgAlt} />
            </div>
            <div class="usuario">
                {props.nome}
            </div>
        </div>
    )
}