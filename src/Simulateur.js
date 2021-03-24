import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { datas } from './datas'
import { tauxCo2 } from "./co2"

const Simulateur = () => {

    const [vehiculeTypeInput, setVehiculeTypeInput] = useState(false)
    const [vehiculeNeuf, setVehiculeNeuf] = useState(true)
    const [vehiculeTourisme, setVehiculeTourisme] = useState(true)
    const [vehiculeEnergie, setVehiculeEnergie] = useState(false)
    const { register, handleSubmit } = useForm()

    /* CHAMPS SPECIFIQUES DU FORMULAIRE */

    const showVehiculeTypeInput = () => {
        const type = datas.vehicules[1].type

        if (vehiculeTypeInput) {
            return (
                <>
                    <label htmlFor="vehiculesType">Precisez</label><br />
                    <select name="vehiculesType" id="vehiculesType" ref={register}>
                        {type.map((item, index) => <option key={item.id} value={index}>{item.libelle}</option>)}
                    </select><br /><br />
                </>
            )
        }
    }

    const showCo2Input = () => {
        if (vehiculeNeuf && vehiculeTourisme && !vehiculeEnergie) {
            return (
                <>
                    <label htmlFor="co2">Taux d'emission de Co2 en gramme par kilomètre</label><br />
                    <select name="co2" id="co2" ref={register}>
                        {tauxCo2.map(item => <option key={item.id} value={item.id}>{item.taux}</option>)}
                    </select><br /><br />
                </>
            )
        }

    }

    const checkVehiculeNeuf = (e) => {
        if (e.target.value == 1) setVehiculeNeuf(true)
        else setVehiculeNeuf(false)
    }
    const handleChange = (e) => {
        if (e.target.value == 1) setVehiculeTourisme(true)
        else setVehiculeTourisme(false)
        if (e.target.value == 2) setVehiculeTypeInput(true)
        else setVehiculeTypeInput(false)
    }
    const checkEnergie = (e) => {
        if (e.target.value == 8) setVehiculeEnergie(true)
        else setVehiculeEnergie(false)
    }

    /* TRAITEMENT DU FORMULAIRE */

    const onSubmit = (data) => {
        let submittedDatas = {
            demarche: (datas.demarches)[data.demarches],
            vehicule: (datas.vehicules)[data.vehicules],
            vehiculeType: (datas.vehicules[1].type)[data.vehiculesType],
            energie: (datas.energies)[data.energies],
            departement: (datas.departements)[data.departements],
            chevauxFiscaux: data.chevauxFiscaux,
            miseEnCirculation: data.miseEnCirculation,
        }

        console.log(submittedDatas)

        let {
            demarche,
            vehicule,
            vehiculeType,
            energie,
            departement,
            chevauxFiscaux,
            miseEnCirculation
        } = submittedDatas

        // Y.1 CALCUL TAXE REGIONALE
        let regionId = departement.regionId
        let taxeRegionale = datas.taxeRegionale.find(item => item.regionId == regionId)
        let montantTaxeRegionale = taxeRegionale.taxe * chevauxFiscaux
        let montantExoneration = (taxeRegionale.exoVehiculePropre * montantTaxeRegionale) / 100
        // verification pour appliquer l'exoneration vehiculer propre
        let y1 = energie.energiePropre ? montantTaxeRegionale - montantExoneration : montantTaxeRegionale


        // Y.2 CALCUL TAXE FP TRANSPORT
        let y2
        if (vehiculeType) {
            y2 = vehiculeType.taxeFPTransport
        }

        // Y.3 CALCUL TAXE CO2
        // /!\ seulement pour les vehicules neufs, de tourisme
        // /!\ ne concerne pas les véhicules electrique et hydrogène, ni les handicapés

        let y3
        if (demarche.id == 1 && vehiculeType.id == 1 && energie.energie != 8) {
            y3 = "test"
        }


        // Y.4 TAXE DE GESTION
        const y4 = 11

        // Y.5 REDEVANCE D'ACHEMINEMENT
        const y5 = 2.76

        // ANCIENNETE 
        // plus de 10 ans -> 1/2 du tarif de base
        // => vehicule tourisme neuf ou occasion
        // => vehicule utilitaire neuf ou occasion (PTAC <= 3.5 Tonnes)

        // plus de 10 ans -> 1/4 du tarif de base
        // => vehicule utilitaire neuf ou occasion (PTAC > 3.5 Tonnes)
        // => motocyclette


        // FRAIS DE TRAITEMENT
        const frais = 27.90


        // MONTANT TOTAL
        let montantTotal = y1 + y2 + y3 + y4 + y5 + frais

    }

    /* FORMULAIRE */

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="demarches">Type de démarche</label><br />
            <select onChange={checkVehiculeNeuf} name="demarches" id="demarches" ref={register}>
                {datas.demarches.map(item => <option key={item.id} value={item.id}>{item.demarche}</option>)}
            </select><br /><br />

            <label htmlFor="vehicules">Type de véhicule</label><br />
            <select onChange={handleChange} name="vehicules" id="vehicules" ref={register}>
                {datas.vehicules.map(item => <option key={item.id} value={item.id}>{item.vehicule}</option>)}
            </select><br /><br />

            {showVehiculeTypeInput()}

            <label htmlFor="energies">Type d'energie</label><br />
            <select onChange={checkEnergie} name="energies" id="energies" ref={register}>
                {datas.energies.map(item => <option key={item.id} value={item.id}>{item.energie}</option>)}
            </select><br /><br />

            {showCo2Input()}

            <label htmlFor="chevauxFiscaux">Chevaux fiscaux</label><br />
            <input type="number" name="chevauxFiscaux" id="chevauxFiscaux" ref={register} /><br /><br />

            <label htmlFor="departements">Votre département</label><br />
            <select name="departements" id="departements" ref={register}>
                {datas.departements.map(item => <option key={item.id} value={item.id}>{item.name}-{item.codeDep}</option>)}
            </select><br /><br />

            <label htmlFor="miseEnCirculation">Date de mise en circulation</label><br />
            <input type="date" name="miseEnCirculation" id="miseEnCirculation" ref={register} /><br /><br />

            <button type="submit">Valider</button>
        </form>
    )
}

export default Simulateur
