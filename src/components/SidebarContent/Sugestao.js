export default function Sugestao(props) {
    return (
        <><img src={props.img} alt={props.imgAlt} /><div class="texto">
            <div class="nome">{props.nome}</div>
            <div class="razao">Segue você</div>
        </div></>
    )
}