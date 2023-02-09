import Story from "./Story"

export default function Stories() {
    const arrStories = [
        { nome: "9gag" },
        { nome: "meowed" },
        { nome: "barked" },
        { nome: "nathanwpylestrangeplanet" },
        { nome: "wawawicomics" },
        { nome: "respondeai" },
        { nome: "filomoderna" },
        { nome: "memeriagourmet" },
    ]
    return (
        <div class="stories">
            {arrStories.map(story => (
                < Story nome={story.nome} img={`assets/img/${story.nome}.svg`} imgAlt={story.nome} />
            ))}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}