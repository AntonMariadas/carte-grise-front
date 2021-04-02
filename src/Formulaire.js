import React from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';

const Formulaire = () => {
    const { register, errors, handleSubmit } = useForm()

    const submit = data => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="nom">Nom</label> <br />
            <input type="text" id="nom" name="nom" ref={register} /><br /><br />

            <label htmlFor="prenom">Prénom</label> <br />
            <input type="text" id="prenom" name="prenom" ref={register} /> <br /><br />

            <label htmlFor="adresse">Adresse</label> <br />
            <input type="text" id="adresse" name="adresse" ref={register} /> <br /> <br />

            <label htmlFor="cp">Code postal</label> <br />
            <input type="text" id="cp" name="cp" ref={register} /> <br /><br />

            <label htmlFor="ville">Ville</label> <br />
            <input type="text" id="ville" name="ville" ref={register} /> <br /><br />

            <label htmlFor="email">Email</label><br />
            <input type="email" name="email" id="email" ref={register} /> <br /><br />

            <label htmlFor="tel">Téléphone</label> <br />
            <input type="tel" name="tel" id="tel" /> <br /><br />

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
