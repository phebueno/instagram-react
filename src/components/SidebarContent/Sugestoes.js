import Sugestao from "./Sugestao";

export default function Sugestoes() {
    const arrSugestoes = [{ nome: "bad.vibes.memes" },
    { nome: "chibirdart" },
    { nome: "razoesparaacreditar" },
    { nome: "adorable_animals" },
    { nome: "smallcutecats" },
    ];
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {arrSugestoes.map(sugestao => (<div class="sugestao">
                <div class="usuario">
                    < Sugestao nome={sugestao.nome} img={`assets/img/${sugestao.nome}.svg`} imgAlt={`${sugestao.nome}.svg`} />
                </div>

                <div class="seguir">Seguir</div>
            </div>))}
        </div>
    )
}

