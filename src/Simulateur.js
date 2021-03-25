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
                        {tauxCo2.map((item, index) => <option key={item.id} value={index}>{item.taux}</option>)}
                    </select><br /><br />
                </>
            )
        }

    }

    const checkVehiculeNeuf = (e) => {
        if (e.target.value == 0) setVehiculeNeuf(true)
        else setVehiculeNeuf(false)
    }
    const handleChange = (e) => {
        if (e.target.value == 0) setVehiculeTourisme(true)
        else setVehiculeTourisme(false)
        if (e.target.value == 1) setVehiculeTypeInput(true)
        else setVehiculeTypeInput(false)
    }
    const checkEnergie = (e) => {
        if (e.target.value == 7) setVehiculeEnergie(true)
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
            co2: tauxCo2[data.co2]
        }

        console.log(submittedDatas)

        let {
            demarche,
            vehicule,
            vehiculeType,
            energie,
            departement,
            chevauxFiscaux,
            miseEnCirculation,
            co2
        } = submittedDatas

        // Y.1 CALCUL TAXE REGIONALE
        let regionId = departement.regionId
        let taxeRegionale = datas.taxeRegionale.find(item => item.regionId == regionId)
        let montantTaxeRegionale = taxeRegionale.taxe * chevauxFiscaux
        let montantExoneration = (taxeRegionale.exoVehiculePropre * montantTaxeRegionale) / 100
        // verification pour appliquer l'exoneration vehiculer propre selon le departement
        let y1 = energie.energiePropre ? montantTaxeRegionale - montantExoneration : montantTaxeRegionale
        console.log("y1 : " + y1);


        // Y.2 CALCUL TAXE FP TRANSPORT
        let y2 = vehiculeType ? vehiculeType.taxeFPTransport : 0
        console.log("y2 : " + y2);

        // Y.3 CALCUL TAXE CO2
        // /!\ seulement pour les vehicules neufs, de tourisme
        // /!\ ne concerne pas les véhicules electrique et hydrogène, ni les handicapés

        let y3 = co2.taxe
        console.log("y3 : " + y3);

        // Y.4 TAXE DE GESTION
        const y4 = 11
        console.log("y4 : " + y4);

        // Y.5 REDEVANCE D'ACHEMINEMENT
        const y5 = 2.76
        console.log("y5 : " + y5);

        // ANCIENNETE > 10ans taxe y1 50%
        let today = new Date().getTime()
        let date = Date.parse(miseEnCirculation)
        let difference = today - date
        let differenceInYears = difference / (1000 * 60 * 60 * 24 * 365)
        console.log(differenceInYears);
        if (differenceInYears >= 10) {
            y1 = y1 / 2
        }


        // FRAIS DE TRAITEMENT
        const frais = 27.90

        // MONTANT TOTAL
        let montantTotal = y1 + y2 + y3 + y4 + y5 + frais
        console.log(montantTotal);
    }

    /* FORMULAIRE */

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="demarches">Type de démarche</label><br />
            <select onChange={checkVehiculeNeuf} name="demarches" id="demarches" ref={register}>
                {datas.demarches.map((item, index) => <option key={item.id} value={index}>{item.demarche}</option>)}
            </select><br /><br />

            <label htmlFor="vehicules">Type de véhicule</label><br />
            <select onChange={handleChange} name="vehicules" id="vehicules" ref={register}>
                {datas.vehicules.map((item, index) => <option key={item.id} value={index}>{item.vehicule}</option>)}
            </select><br /><br />

            {showVehiculeTypeInput()}

            <label htmlFor="energies">Type d'energie</label><br />
            <select onChange={checkEnergie} name="energies" id="energies" ref={register}>
                {datas.energies.map((item, index) => <option key={item.id} value={index}>{item.energie}</option>)}
            </select><br /><br />

            {showCo2Input()}

            <label htmlFor="chevauxFiscaux">Chevaux fiscaux</label><br />
            <input type="number" name="chevauxFiscaux" id="chevauxFiscaux" ref={register} /><br /><br />

            <label htmlFor="departements">Votre département</label><br />
            <select name="departements" id="departements" ref={register}>
                {datas.departements.map((item, index) => <option key={item.id} value={index}>{item.name}-{item.codeDep}</option>)}
            </select><br /><br />

            <label htmlFor="miseEnCirculation">Date de mise en circulation</label><br />
            <input type="date" name="miseEnCirculation" id="miseEnCirculation" ref={register} /><br /><br />

            <button type="submit">Valider</button>
        </form>
    )
}

export default Simulateur
