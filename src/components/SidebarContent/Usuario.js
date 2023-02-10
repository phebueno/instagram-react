import { useState } from "react";

export default function Usuario() {
    const [usuario, setUsuario] = useState("catanacomics");
    const [foto, setFoto] = useState("assets/img/catanacomics.svg"); 

    function trocarUsuario(){
        const novoNome = prompt("Insira um novo nome para trocar de usuário:");
        //Se houver valor em nome:
        if(novoNome){
            setUsuario(novoNome);
        }
    }
    function trocarFotoPerfil(){
        const novaFoto = prompt("Insira um novo link para trocar a foto de usuário:");
        //Se houver valor em nome:
        if(novaFoto){
            setFoto(novaFoto);
        }
    }
    return (
        <div class="usuario">
            <img src={foto} alt="imagem de perfil" data-test="profile-image" onClick={trocarFotoPerfil}/>
            <div class="texto">
                <span>
                    <strong data-test="name">{usuario}</strong>
                    <ion-icon name="pencil" data-test="edit-name" onClick={trocarUsuario}></ion-icon>
                </span>
            </div>
        </div>
    )
}


