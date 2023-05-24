
export const validarTitulo = (titulo) => {

    console.log(titulo)
    if (titulo.length < 15) {
        return false;
    }
    else {
        return true;
    }
}

export const validarLink = (link) => {

    const regex = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+$/;
     return regex.test(link) 

    // if (link.trim() === "") {
    //     return false;
    // }
    // else {
    //     return true;
    // }
}

export const validarLinkImagen = (linkImagen) => {
    if (linkImagen.trim() === "") {
        return false;
    }
    else {
        return true;
    }
}

export const validarText= (input) => {
    if (input.trim() === "") {
        return false;
    }
    else {
        return true;
    }
}

export const validarPass = (input) =>{
    if (input === "1234") {
        return true;
    } 
    else {
        return false;
    }
}



// export const validarLink = (link) => {
//     const regex = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+$/;
//     return regex.test(link);
//   }
  