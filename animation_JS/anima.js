/////////////////////////////////////////partie 1///////////////////////////////////////////////////////
const bc_mov=(color)=>{
    document.querySelector("body").style.background=`${color}`
}
const bc_mou=()=>{
    document.querySelector("body").style.background="#343434"
}

let champ=""

const dv=document.getElementById("sith")
dv.addEventListener("mouseover",()=>{bc_mov("#8b0000")})
dv.addEventListener("mouseout",()=>{bc_mou()})
dv.addEventListener("click",()=>{
    document.querySelector("#dos").classList.remove("cache")
    champ="mal"
})

const yoda=document.getElementById("jedi")
yoda.addEventListener("mouseover",()=>{bc_mov("#005500")})
yoda.addEventListener("mouseout",()=>{bc_mou()})
yoda.addEventListener("click",()=>{
    document.querySelector("#dos").classList.remove("cache")
    champ="bien"
})

const b_n=document.querySelector(".n")
b_n.addEventListener("click",()=>{
    document.querySelector("#dos").classList.add("cache")
    champ=""
})

const b_o=document.querySelector(".o")
b_o.addEventListener("click",()=>{
    document.querySelector("#choix").classList.add("cache")
    document.querySelector("#combat").classList.remove("cache")
    document.querySelector("h1").innerHTML="Vous devez gagné le combat. Amenez le sabre lazer jusqu'a votre ennemi. Utiliser les fleches du clavier pour vous déplacer"
})
/////////////////////////////////////////partie 2///////////////////////////////////////////////////////
/////////////mouvement///////////////////////
const z_com=document.querySelectorAll("td")
let index=0

const avancer=()=>{
    z_com[index].classList.remove("active")
    if(index===19){index=-1}
    if(index+1===e){
        document.querySelector(".ennemi").classList.remove("ennemi")
        if(champ==="mal"){
            alert("Vous Avez gagné, le dernier Jedis est morts")
        }else{
             alert("Vous avez vaincu le sith. mais n'oubliez pas 'toujours par deux ils vont, un disciple et un maitre'")
            }
    }
    z_com[index+1].classList.add("active")
    index+=1
}

const reculer=()=>{
    z_com[index].classList.remove("active")
    if(index===0){index=20}
    if(index-1===e){
        document.querySelector(".ennemi").classList.remove("ennemi")
        if(champ==="mal"){
            alert("Vous Avez gagné, le dernier Jedis est morts")
        }else{
             alert("Vous avez vaincu le sith. mais n'oubliez pas 'toujours par deux ils vont, un disciple et un maitre'")
            }
    }
    z_com[index-1].classList.add("active")
    index-=1
}

const haut=()=>{
    z_com[index].classList.remove("active")
    if(index-20<0){index+=20*19}
    if(index-20===e){
        document.querySelector(".ennemi").classList.remove("ennemi")
        if(champ==="mal"){
            alert("Vous Avez gagné, le dernier Jedis est morts")
        }else{
             alert("Vous avez vaincu le sith. mais n'oubliez pas 'toujours par deux ils vont, un disciple et un maitre'")
            }
    }
    z_com[index-20].classList.add("active")
    index-=20
}

const bas=()=>{
    z_com[index].classList.remove("active")
    if(index+20>20*19){index-=20*19}
    if(index+20===e){
        document.querySelector(".ennemi").classList.remove("ennemi")
        if(champ==="mal"){
            alert("Vous Avez gagné, le dernier Jedis est morts")
        }else{
             alert("Vous avez vaincu le sith. mais n'oubliez pas 'toujours par deux ils vont, un disciple et un maitre'")
            }
    }
    z_com[index+20].classList.add("active")
    index+=20
}
////////////ennemi//////////////////////
const random=()=>{return Math.floor(Math.random()*399)}
const create_ennemi=()=>{
    let i_e=random()
    z_com[i_e].classList.add("ennemi")
    return i_e
}

let e=create_ennemi()
////////condition de victoire////////
// let cpt_degat=-1

// const Victoire=()=>{
//     if(cpt_degat===3){
//         if(champ==="mal"){
//             alert("Vous Avez gagné, le dernier Jedis est morts")
//         }else if(champ==="bien"){
//             alert("Vous avez vaincu le sith. mais n'oubliez pas 'touours par deux ils vont, un disciple et un maitre'")
//         }
//     }
// }
//
////////////////////////////////////////////
document.addEventListener("keyup",(event)=>{
    if(event.key==="ArrowRight"){
        avancer()
    }else if(event.key=="ArrowLeft"){
        reculer()
    }else if(event.key==="ArrowUp"){
        haut()
    }else if(event.key==="ArrowDown"){
        bas()
    }
})

