module.exports.signUpErrors = (err) => {
    let errors = { name:"", email: "", password:""}

    if (err.message.includes("name"))
    errors.name = "Nom incorrect"

    if (err.message.includes("email"))
    errors.email = "Email incorrect"

    if (err.message.includes("password"))
    errors.password = "Mot de passe incorrect"

    if (err.message.includes("name"))
    errors.name = "Nom incorrect"

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("name"))
    errors.name = "Ce om figure déjà dans notre base de données"

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.name = "Cette adresse mail figure déjà dans notre base de données"

    return errors

}

module.exports.signInErrors = (err) => {
    let errors = {name:"", password:""}

    if (err.message.includes("name"))
    errors.name = "Nom inconnu"

    if (err.message.includes("password"))
    errors.password = "Mot de passe inconnu"

    return errors
}

module.exports.uploadErrors = (err)=> {
    let errors = {format:"", maxSize:""}

    if (err.message.includes("invalid file"))
    errors.format = "Format d'image non valide"

    if (err.message.includes("max size"))
    errors.maxSize = "Taille maximale dépassée"

    return errors
}
