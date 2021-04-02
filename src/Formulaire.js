import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers"
import * as yup from "yup"

const phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
    nom: yup.string().required("Le champs nom est obligatoire."),
    prenom: yup.string().required("Le champs prénom est obligatoire."),
    adresse: yup.string().required("Le champs adresse est obligatoire."),
    cp: yup.string().matches(/^[0-9]+$/, "Le code postal est incorrect.").min(5, "Le code postal doit contenir au moins cinq chiffres.").required(),
    ville: yup.string().required("Le champs ville est obligatoire."),
    email: yup.string().email().required("Le champs email est obligatoire."),
    tel: yup.string().matches(phoneRegEx, "Le numéro de téléphone n'est pas valide.").notRequired(),
    marque: yup.string().required(),
    modele: yup.string().required(),
    immatriculation: yup.string().required()
})


const Formulaire = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    })

    const submit = data => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="nom">Nom</label> <br />
            <input type="text" id="nom" name="nom" ref={register} />
            <p>{errors.nom?.message}</p>


            <label htmlFor="prenom">Prénom</label> <br />
            <input type="text" id="prenom" name="prenom" ref={register} />
            <p>{errors.prenom?.message}</p>

            <label htmlFor="adresse">Adresse</label> <br />
            <input type="text" id="adresse" name="adresse" ref={register} />
            <p>{errors.adresse?.message}</p>

            <label htmlFor="cp">Code postal</label> <br />
            <input type="text" id="cp" name="cp" ref={register} />
            <p>{errors.cp?.message}</p>

            <label htmlFor="ville">Ville</label> <br />
            <input type="text" id="ville" name="ville" ref={register} />
            <p>{errors.ville?.message}</p>

            <label htmlFor="email">Email</label><br />
            <input type="email" name="email" id="email" ref={register} />
            <p>{errors.email?.message}</p>

            <label htmlFor="tel">Téléphone</label> <br />
            <input type="tel" name="tel" id="tel" ref={register} />
            <p>{errors.tel?.message}</p>

            <label htmlFor="marque">Marque du véhicule</label> <br />
            <input type="text" id="marque" name="marque" ref={register} /> <br /><br />

            <label htmlFor="modele">Modèle du vehicule</label> <br />
            <input type="text" id="modele" name="modele" ref={register} /> <br /><br />

            <label htmlFor="immatriculation">Numéro d'immatriculation</label> <br />
            <input type="text" id="immatriculation" name="immatriculation" ref={register} /> <br /><br />

            <input type="submit" value="Valider" />
        </form>
    )
}

export default Formulaire
