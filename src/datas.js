export const datas = {
    "demarches": [
        {
            "id": 1,
            "demarche": "Immatriculation d'un véhicule neuf",
        },
        {
            "id": 2,
            "demarche": "Immatriculation d'un véhicule d'occasion",
        },
        {
            "id": 3,
            "demarche": "Changement d'adresse",
        },
        {
            "id": 4,
            "demarche": "Duplicata suite à perte, vol ou détérioration"
        },
        {
            "id": 5,
            "demarche": "Immatriculation d'un véhicule en provenance de l'étranger"
        }
    ],
    "vehicules": [
        {
            "id": 1,
            "vehicule": "Véhicule de tourisme",
            "taxeFPTransport": 0
        },
        {
            "id": 2,
            "vehicule": "Véhicule de société/utilitaire",
            "type": [
                {
                    "id": 1,
                    "libelle": "Véhicule de transport en commun",
                    "taxeFPTransport": 0
                },
                {
                    "id": 2,
                    "libelle": "Inferieur ou égal à 3,5 tonnes",
                    "taxeFPTransport": 34
                },
                {
                    "id": 3,
                    "libelle": "Entre 3,5 et 6 tonnes",
                    "taxeFPTransport": 127
                },
                {
                    "id": 4,
                    "libelle": "Entre 6 et 11 tonnes",
                    "taxeFPTransport": 189
                },
                {
                    "id": 5,
                    "libelle": "Entre 6 et 11 tonnes",
                    "taxeFPTransport": 285
                },
            ]
        },
        {
            "id": 3,
            "vehicule": "Moto",
            "taxeFPTransport": {
                "Moins de 125cm3": 0,
                "Plus de 125cm3": 0,
            },
        },
        {
            "id": 4,
            "vehicule": "Cyclomoteur",
            "taxeFPTransport": 0,
        },
        {
            "id": 5,
            "vehicule": "Autre",
            "taxeFPTransport": {
                "Engin agricole": 0,
                "Remorque, Semi-Remorque, Caravane": 0,
                "Tricycles à moteur": 0,
                "Cyclomoteur carrossé à 3 roues (voiturette)": 0,
            },
        }
    ],
    "malusCV": [
        {
            "id": 1,
            "annee": 2008,
            "minCV": 0,
            "maxCV": 7,
            "malus": 0
        },
        {
            "id": 2,
            "annee": 2008,
            "minCV": 8,
            "maxCV": 11,
            "malus": 750
        },
        {
            "id": 3,
            "annee": 2008,
            "minCV": 12,
            "maxCV": 16,
            "malus": 1600
        },
        {
            "id": 4,
            "annee": 2008,
            "minCV": 17,
            "maxCV": 99,
            "malus": 2600
        },
        {
            "id": 5,
            "annee": 2009,
            "minCV": 0,
            "maxCV": 7,
            "malus": 0
        },
        {
            "id": 6,
            "annee": 2009,
            "minCV": 8,
            "maxCV": 11,
            "malus": 750
        },
        {
            "id": 7,
            "annee": 2009,
            "minCV": 12,
            "maxCV": 16,
            "malus": 1600
        },
        {
            "id": 8,
            "annee": 2009,
            "minCV": 17,
            "maxCV": 99,
            "malus": 2600
        },
        {
            "id": 9,
            "annee": 2010,
            "minCV": 0,
            "maxCV": 7,
            "malus": 0
        },
        {
            "id": 10,
            "annee": 2010,
            "minCV": 8,
            "maxCV": 11,
            "malus": 750
        },
        {
            "id": 11,
            "annee": 2010,
            "minCV": 12,
            "maxCV": 16,
            "malus": 1600
        },
        {
            "id": 12,
            "annee": 2010,
            "minCV": 17,
            "maxCV": 99,
            "malus": 2600
        },
        {
            "id": 13,
            "annee": 2011,
            "minCV": 0,
            "maxCV": 7,
            "malus": 0
        },
        {
            "id": 14,
            "annee": 2011,
            "minCV": 8,
            "maxCV": 11,
            "malus": 750
        },
        {
            "id": 15,
            "annee": 2011,
            "minCV": 12,
            "maxCV": 16,
            "malus": 1600
        },
        {
            "id": 16,
            "annee": 2011,
            "minCV": 17,
            "maxCV": 99,
            "malus": 2600
        },
        {
            "id": 17,
            "annee": 2012,
            "minCV": 0,
            "maxCV": 7,
            "malus": 0
        },
        {
            "id": 18,
            "annee": 2012,
            "minCV": 8,
            "maxCV": 9,
            "malus": 750
        },
        {
            "id": 19,
            "annee": 2012,
            "minCV": 10,
            "maxCV": 11,
            "malus": 1300
        },
        {
            "id": 20,
            "annee": 2012,
            "minCV": 12,
            "maxCV": 16,
            "malus": 2300
        },
        {
            "id": 21,
            "annee": 2012,
            "minCV": 17,
            "maxCV": 99,
            "malus": 3600
        },
        {
            "id": 22,
            "annee": 2013,
            "minCV": 0,
            "maxCV": 5,
            "malus": 0
        },
        {
            "id": 23,
            "annee": 2013,
            "minCV": 6,
            "maxCV": 7,
            "malus": 800
        },
        {
            "id": 24,
            "annee": 2013,
            "minCV": 8,
            "maxCV": 9,
            "malus": 1400
        },
        {
            "id": 25,
            "annee": 2013,
            "minCV": 10,
            "maxCV": 11,
            "malus": 2600
        },
        {
            "id": 26,
            "annee": 2013,
            "minCV": 12,
            "maxCV": 16,
            "malus": 4600
        },
        {
            "id": 27,
            "annee": 2013,
            "minCV": 17,
            "maxCV": 99,
            "malus": 6000
        },
        {
            "id": 28,
            "annee": 2014,
            "minCV": 0,
            "maxCV": 5,
            "malus": 0
        },
        {
            "id": 29,
            "annee": 2014,
            "minCV": 6,
            "maxCV": 7,
            "malus": 1500
        },
        {
            "id": 30,
            "annee": 2014,
            "minCV": 8,
            "maxCV": 9,
            "malus": 2000
        },
        {
            "id": 31,
            "annee": 2014,
            "minCV": 10,
            "maxCV": 11,
            "malus": 3600
        },
        {
            "id": 32,
            "annee": 2014,
            "minCV": 12,
            "maxCV": 16,
            "malus": 6000
        },
        {
            "id": 33,
            "annee": 2014,
            "minCV": 17,
            "maxCV": 99,
            "malus": 8000
        },
        {
            "id": 34,
            "annee": 2015,
            "minCV": 0,
            "maxCV": 5,
            "malus": 0
        },
        {
            "id": 35,
            "annee": 2015,
            "minCV": 6,
            "maxCV": 7,
            "malus": 1500
        },
        {
            "id": 36,
            "annee": 2015,
            "minCV": 8,
            "maxCV": 9,
            "malus": 2000
        },
        {
            "id": 37,
            "annee": 2015,
            "minCV": 10,
            "maxCV": 11,
            "malus": 3600
        },
        {
            "id": 38,
            "annee": 2015,
            "minCV": 12,
            "maxCV": 16,
            "malus": 6000
        },
        {
            "id": 39,
            "annee": 2015,
            "minCV": 17,
            "maxCV": 99,
            "malus": 8000
        },
        {
            "id": 40,
            "annee": 2016,
            "minCV": 0,
            "maxCV": 5,
            "malus": 0
        },
        {
            "id": 41,
            "annee": 2016,
            "minCV": 6,
            "maxCV": 7,
            "malus": 1500
        },
        {
            "id": 42,
            "annee": 2016,
            "minCV": 8,
            "maxCV": 9,
            "malus": 2000
        },
        {
            "id": 43,
            "annee": 2016,
            "minCV": 10,
            "maxCV": 11,
            "malus": 3600
        },
        {
            "id": 44,
            "annee": 2016,
            "minCV": 12,
            "maxCV": 16,
            "malus": 6000
        },
        {
            "id": 45,
            "annee": 2016,
            "minCV": 17,
            "maxCV": 99,
            "malus": 8000
        },
        {
            "id": 46,
            "annee": 2017,
            "minCV": 0,
            "maxCV": 5,
            "malus": 0
        },
        {
            "id": 47,
            "annee": 2017,
            "minCV": 6,
            "maxCV": 7,
            "malus": 2000
        },
        {
            "id": 48,
            "annee": 2017,
            "minCV": 8,
            "maxCV": 9,
            "malus": 3000
        },
        {
            "id": 49,
            "annee": 2017,
            "minCV": 10,
            "maxCV": 11,
            "malus": 7000
        },
        {
            "id": 50,
            "annee": 2017,
            "minCV": 12,
            "maxCV": 16,
            "malus": 8000
        },
        {
            "id": 51,
            "annee": 2017,
            "minCV": 17,
            "maxCV": 99,
            "malus": 10000
        },
        {
            "id": 52,
            "annee": 2018,
            "minCV": 0,
            "maxCV": 5,
            "malus": 0
        },
        {
            "id": 53,
            "annee": 2018,
            "minCV": 6,
            "maxCV": 7,
            "malus": 3000
        },
        {
            "id": 54,
            "annee": 2018,
            "minCV": 8,
            "maxCV": 9,
            "malus": 5000
        },
        {
            "id": 55,
            "annee": 2018,
            "minCV": 10,
            "maxCV": 11,
            "malus": 8000
        },
        {
            "id": 56,
            "annee": 2018,
            "minCV": 12,
            "maxCV": 16,
            "malus": 9000
        },
        {
            "id": 57,
            "annee": 2018,
            "minCV": 17,
            "maxCV": 9999999,
            "malus": 10500
        },
        {
            "id": 58,
            "annee": 2019,
            "minCV": 0,
            "maxCV": 5,
            "malus": 0
        },
        {
            "id": 59,
            "annee": 2019,
            "minCV": 6,
            "maxCV": 7,
            "malus": 3000
        },
        {
            "id": 60,
            "annee": 2019,
            "minCV": 8,
            "maxCV": 9,
            "malus": 5000
        },
        {
            "id": 61,
            "annee": 2019,
            "minCV": 10,
            "maxCV": 11,
            "malus": 8000
        },
        {
            "id": 62,
            "annee": 2019,
            "minCV": 12,
            "maxCV": 16,
            "malus": 9000
        },
        {
            "id": 63,
            "annee": 2019,
            "minCV": 17,
            "maxCV": 999999,
            "malus": 10500
        },
        {
            "id": 64,
            "annee": 2020,
            "minCV": 0,
            "maxCV": 5,
            "malus": 0
        },
        {
            "id": 65,
            "annee": 2020,
            "minCV": 6,
            "maxCV": 7,
            "malus": 3125
        },
        {
            "id": 66,
            "annee": 2020,
            "minCV": 8,
            "maxCV": 9,
            "malus": 6250
        },
        {
            "id": 67,
            "annee": 2020,
            "minCV": 10,
            "maxCV": 11,
            "malus": 9375
        },
        {
            "id": 68,
            "annee": 2020,
            "minCV": 12,
            "maxCV": 13,
            "malus": 12500
        },
        {
            "id": 69,
            "annee": 2020,
            "minCV": 14,
            "maxCV": 15,
            "malus": 15625
        },
        {
            "id": 70,
            "annee": 2020,
            "minCV": 16,
            "maxCV": 17,
            "malus": 18750
        },
        {
            "id": 71,
            "annee": 2020,
            "minCV": 18,
            "maxCV": 9999999,
            "malus": 20000
        },
        {
            "id": 72,
            "annee": 2021,
            "minCV": 0,
            "maxCV": 4,
            "malus": 0
        },
        {
            "id": 73,
            "annee": 2021,
            "minCV": 5,
            "maxCV": 5,
            "malus": 250
        },
        {
            "id": 74,
            "annee": 2021,
            "minCV": 6,
            "maxCV": 6,
            "malus": 2825
        },
        {
            "id": 75,
            "annee": 2021,
            "minCV": 7,
            "maxCV": 7,
            "malus": 3425
        },
        {
            "id": 76,
            "annee": 2021,
            "minCV": 8,
            "maxCV": 8,
            "malus": 5950
        },
        {
            "id": 77,
            "annee": 2021,
            "minCV": 9,
            "maxCV": 9,
            "malus": 6550
        },
        {
            "id": 78,
            "annee": 2021,
            "minCV": 10,
            "maxCV": 10,
            "malus": 9075
        },
        {
            "id": 79,
            "annee": 2021,
            "minCV": 11,
            "maxCV": 11,
            "malus": 9675
        },
        {
            "id": 80,
            "annee": 2021,
            "minCV": 12,
            "maxCV": 12,
            "malus": 12200
        },
        {
            "id": 81,
            "annee": 2021,
            "minCV": 13,
            "maxCV": 13,
            "malus": 12800
        },
        {
            "id": 82,
            "annee": 2021,
            "minCV": 14,
            "maxCV": 14,
            "malus": 15325
        },
        {
            "id": 83,
            "annee": 2021,
            "minCV": 15,
            "maxCV": 15,
            "malus": 15925
        },
        {
            "id": 84,
            "annee": 2021,
            "minCV": 16,
            "maxCV": 16,
            "malus": 18450
        },
        {
            "id": 85,
            "annee": 2021,
            "minCV": 17,
            "maxCV": 17,
            "malus": 19150
        },
        {
            "id": 86,
            "annee": 2021,
            "minCV": 18,
            "maxCV": 18,
            "malus": 22500
        },
        {
            "id": 87,
            "annee": 2021,
            "minCV": 19,
            "maxCV": 19,
            "malus": 25000
        },
        {
            "id": 88,
            "annee": 2021,
            "minCV": 20,
            "maxCV": 20,
            "malus": 27500
        },
        {
            "id": 89,
            "annee": 2021,
            "minCV": 21,
            "maxCV": 9999999,
            "malus": 30000
        }
    ],
    "malusCO2": [
        {
            "id": 1,
            "annee": 2008,
            "minCO2": 0,
            "maxCO2": 160,
            "malus": 0,
            "PeriodeAnnee": 1
        },
        {
            "id": 2,
            "annee": 2008,
            "minCO2": 161,
            "maxCO2": 165,
            "malus": 200,
            "PeriodeAnnee": 1
        },
        {
            "id": 3,
            "annee": 2008,
            "minCO2": 166,
            "maxCO2": 200,
            "malus": 750,
            "PeriodeAnnee": 1
        },
        {
            "id": 4,
            "annee": 2008,
            "minCO2": 201,
            "maxCO2": 250,
            "malus": 1600,
            "PeriodeAnnee": 1
        },
        {
            "id": 5,
            "annee": 2008,
            "minCO2": 251,
            "maxCO2": 9999999,
            "malus": 2600,
            "PeriodeAnnee": 1
        },
        {
            "id": 6,
            "annee": 2009,
            "minCO2": 0,
            "maxCO2": 160,
            "malus": 0,
            "PeriodeAnnee": 1
        },
        {
            "id": 7,
            "annee": 2009,
            "minCO2": 161,
            "maxCO2": 165,
            "malus": 200,
            "PeriodeAnnee": 1
        },
        {
            "id": 8,
            "annee": 2009,
            "minCO2": 166,
            "maxCO2": 200,
            "malus": 750,
            "PeriodeAnnee": 1
        },
        {
            "id": 9,
            "annee": 2009,
            "minCO2": 201,
            "maxCO2": 250,
            "malus": 1600,
            "PeriodeAnnee": 1
        },
        {
            "id": 10,
            "annee": 2009,
            "minCO2": 251,
            "maxCO2": 9999999,
            "malus": 2600,
            "PeriodeAnnee": 1
        },
        {
            "id": 11,
            "annee": 2010,
            "minCO2": 0,
            "maxCO2": 155,
            "malus": 0,
            "PeriodeAnnee": 1
        },
        {
            "id": 12,
            "annee": 2010,
            "minCO2": 156,
            "maxCO2": 160,
            "malus": 200,
            "PeriodeAnnee": 1
        },
        {
            "id": 13,
            "annee": 2010,
            "minCO2": 161,
            "maxCO2": 195,
            "malus": 750,
            "PeriodeAnnee": 1
        },
        {
            "id": 14,
            "annee": 2010,
            "minCO2": 196,
            "maxCO2": 245,
            "malus": 1600,
            "PeriodeAnnee": 1
        },
        {
            "id": 15,
            "annee": 2010,
            "minCO2": 246,
            "maxCO2": 9999999,
            "malus": 2600,
            "PeriodeAnnee": 1
        },
        {
            "id": 16,
            "annee": 2011,
            "minCO2": 0,
            "maxCO2": 150,
            "malus": 0,
            "PeriodeAnnee": 1
        },
        {
            "id": 17,
            "annee": 2011,
            "minCO2": 151,
            "maxCO2": 155,
            "malus": 200,
            "PeriodeAnnee": 1
        },
        {
            "id": 18,
            "annee": 2011,
            "minCO2": 156,
            "maxCO2": 190,
            "malus": 750,
            "PeriodeAnnee": 1
        },
        {
            "id": 19,
            "annee": 2011,
            "minCO2": 191,
            "maxCO2": 240,
            "malus": 1600,
            "PeriodeAnnee": 1
        },
        {
            "id": 20,
            "annee": 2011,
            "minCO2": 241,
            "maxCO2": 9999999,
            "malus": 2600,
            "PeriodeAnnee": 1
        },
        {
            "id": 21,
            "annee": 2012,
            "minCO2": 0,
            "maxCO2": 140,
            "malus": 0,
            "PeriodeAnnee": 1
        },
        {
            "id": 22,
            "annee": 2012,
            "minCO2": 141,
            "maxCO2": 150,
            "malus": 200,
            "PeriodeAnnee": 1
        },
        {
            "id": 23,
            "annee": 2012,
            "minCO2": 151,
            "maxCO2": 155,
            "malus": 500,
            "PeriodeAnnee": 1
        },
        {
            "id": 24,
            "annee": 2012,
            "minCO2": 156,
            "maxCO2": 180,
            "malus": 750,
            "PeriodeAnnee": 1
        },
        {
            "id": 25,
            "annee": 2012,
            "minCO2": 181,
            "maxCO2": 190,
            "malus": 1300,
            "PeriodeAnnee": 1
        },
        {
            "id": 26,
            "annee": 2012,
            "minCO2": 191,
            "maxCO2": 230,
            "malus": 2300,
            "PeriodeAnnee": 1
        },
        {
            "id": 27,
            "annee": 2012,
            "minCO2": 231,
            "maxCO2": 9999999,
            "malus": 3600,
            "PeriodeAnnee": 1
        },
        {
            "id": 28,
            "annee": 2013,
            "minCO2": 0,
            "maxCO2": 135,
            "malus": 0,
            "PeriodeAnnee": 1
        },
        {
            "id": 29,
            "annee": 2013,
            "minCO2": 136,
            "maxCO2": 140,
            "malus": 100,
            "PeriodeAnnee": 1
        },
        {
            "id": 30,
            "annee": 2013,
            "minCO2": 141,
            "maxCO2": 145,
            "malus": 300,
            "PeriodeAnnee": 1
        },
        {
            "id": 31,
            "annee": 2013,
            "minCO2": 146,
            "maxCO2": 150,
            "malus": 400,
            "PeriodeAnnee": 1
        },
        {
            "id": 32,
            "annee": 2013,
            "minCO2": 151,
            "maxCO2": 155,
            "malus": 1000,
            "PeriodeAnnee": 1
        },
        {
            "id": 33,
            "annee": 2013,
            "minCO2": 156,
            "maxCO2": 175,
            "malus": 1500,
            "PeriodeAnnee": 1
        },
        {
            "id": 34,
            "annee": 2013,
            "minCO2": 176,
            "maxCO2": 180,
            "malus": 2000,
            "PeriodeAnnee": 1
        },
        {
            "id": 35,
            "annee": 2013,
            "minCO2": 181,
            "maxCO2": 185,
            "malus": 2600,
            "PeriodeAnnee": 1
        },
        {
            "id": 36,
            "annee": 2013,
            "minCO2": 186,
            "maxCO2": 190,
            "malus": 3000,
            "PeriodeAnnee": 1
        },
        {
            "id": 37,
            "annee": 2013,
            "minCO2": 191,
            "maxCO2": 200,
            "malus": 5000,
            "PeriodeAnnee": 1
        },
        {
            "id": 38,
            "annee": 2013,
            "minCO2": 201,
            "maxCO2": 9999999,
            "malus": 6000,
            "PeriodeAnnee": 1
        },
        {
            "id": 39,
            "annee": 2014,
            "minCO2": 0,
            "maxCO2": 130,
            "malus": 0,
            "PeriodeAnnee": 1
        },
        {
            "id": 40,
            "annee": 2014,
            "minCO2": 131,
            "maxCO2": 135,
            "malus": 150,
            "PeriodeAnnee": 1
        },
        {
            "id": 41,
            "annee": 2014,
            "minCO2": 136,
            "maxCO2": 140,
            "malus": 250,
            "PeriodeAnnee": 1
        },
        {
            "id": 42,
            "annee": 2014,
            "minCO2": 141,
            "maxCO2": 145,
            "malus": 500,
            "PeriodeAnnee": 1
        },
        {
            "id": 43,
            "annee": 2014,
            "minCO2": 146,
            "maxCO2": 150,
            "malus": 900,
            "PeriodeAnnee": 1
        },
        {
            "id": 44,
            "annee": 2014,
            "minCO2": 151,
            "maxCO2": 155,
            "malus": 1600,
            "PeriodeAnnee": 1
        },
        {
            "id": 45,
            "annee": 2014,
            "minCO2": 156,
            "maxCO2": 175,
            "malus": 2200,
            "PeriodeAnnee": 1
        },
        {
            "id": 46,
            "annee": 2014,
            "minCO2": 176,
            "maxCO2": 180,
            "malus": 3000,
            "PeriodeAnnee": 1
        },
        {
            "id": 47,
            "annee": 2014,
            "minCO2": 181,
            "maxCO2": 185,
            "malus": 3600,
            "PeriodeAnnee": 1
        },
        {
            "id": 48,
            "annee": 2014,
            "minCO2": 186,
            "maxCO2": 190,
            "malus": 4000,
            "PeriodeAnnee": 1
        },
        {
            "id": 49,
            "annee": 2014,
            "minCO2": 191,
            "maxCO2": 200,
            "malus": 6500,
            "PeriodeAnnee": 1
        },
        {
            "id": 50,
            "annee": 2014,
            "minCO2": 201,
            "maxCO2": 9999999,
            "malus": 8000,
            "PeriodeAnnee": 1
        },
        {
            "id": 51,
            "annee": 2015,
            "minCO2": 0,
            "maxCO2": 130,
            "malus": 0,
            "PeriodeAnnee": 1
        },
        {
            "id": 52,
            "annee": 2015,
            "minCO2": 131,
            "maxCO2": 135,
            "malus": 150,
            "PeriodeAnnee": 1
        },
        {
            "id": 53,
            "annee": 2015,
            "minCO2": 136,
            "maxCO2": 140,
            "malus": 250,
            "PeriodeAnnee": 1
        },
        {
            "id": 54,
            "annee": 2015,
            "minCO2": 141,
            "maxCO2": 145,
            "malus": 500,
            "PeriodeAnnee": 1
        },
        {
            "id": 55,
            "annee": 2015,
            "minCO2": 146,
            "maxCO2": 150,
            "malus": 900,
            "PeriodeAnnee": 1
        },
        {
            "id": 56,
            "annee": 2015,
            "minCO2": 151,
            "maxCO2": 155,
            "malus": 1600,
            "PeriodeAnnee": 1
        },
        {
            "id": 57,
            "annee": 2015,
            "minCO2": 156,
            "maxCO2": 175,
            "malus": 2200,
            "PeriodeAnnee": 1
        },
        {
            "id": 58,
            "annee": 2015,
            "minCO2": 176,
            "maxCO2": 180,
            "malus": 3000,
            "PeriodeAnnee": 1
        },
        {
            "id": 59,
            "annee": 2015,
            "minCO2": 181,
            "maxCO2": 185,
            "malus": 3600,
            "PeriodeAnnee": 1
        },
        {
            "id": 60,
            "annee": 2015,
            "minCO2": 186,
            "maxCO2": 190,
            "malus": 4000,
            "PeriodeAnnee": 1
        },
        {
            "id": 61,
            "annee": 2015,
            "minCO2": 191,
            "maxCO2": 200,
            "malus": 6500,
            "PeriodeAnnee": 1
        },
        {
            "id": 62,
            "annee": 2015,
            "minCO2": 201,
            "maxCO2": 9999999,
            "malus": 8000,
            "PeriodeAnnee": 1
        },
        {
            "id": 63,
            "annee": 2016,
            "minCO2": 0,
            "maxCO2": 130,
            "malus": 0,
            "PeriodeAnnee": 1
        },
        {
            "id": 64,
            "annee": 2016,
            "minCO2": 131,
            "maxCO2": 135,
            "malus": 150,
            "PeriodeAnnee": 1
        },
        {
            "id": 65,
            "annee": 2016,
            "minCO2": 136,
            "maxCO2": 140,
            "malus": 250,
            "PeriodeAnnee": 1
        },
        {
            "id": 66,
            "annee": 2016,
            "minCO2": 141,
            "maxCO2": 145,
            "malus": 500,
            "PeriodeAnnee": 1
        },
        {
            "id": 67,
            "annee": 2016,
            "minCO2": 146,
            "maxCO2": 150,
            "malus": 900,
            "PeriodeAnnee": 1
        },
        {
            "id": 68,
            "annee": 2016,
            "minCO2": 151,
            "maxCO2": 155,
            "malus": 1600,
            "PeriodeAnnee": 1
        },
        {
            "id": 69,
            "annee": 2016,
            "minCO2": 156,
            "maxCO2": 175,
            "malus": 2200,
            "PeriodeAnnee": 1
        },
        {
            "id": 70,
            "annee": 2016,
            "minCO2": 176,
            "maxCO2": 180,
            "malus": 3000,
            "PeriodeAnnee": 1
        },
        {
            "id": 71,
            "annee": 2016,
            "minCO2": 181,
            "maxCO2": 185,
            "malus": 3600,
            "PeriodeAnnee": 1
        },
        {
            "id": 72,
            "annee": 2016,
            "minCO2": 186,
            "maxCO2": 190,
            "malus": 4000,
            "PeriodeAnnee": 1
        },
        {
            "id": 73,
            "annee": 2016,
            "minCO2": 191,
            "maxCO2": 200,
            "malus": 6500,
            "PeriodeAnnee": 1
        },
        {
            "id": 74,
            "annee": 2016,
            "minCO2": 201,
            "maxCO2": 9999999,
            "malus": 8000,
            "PeriodeAnnee": 1
        },
        {
            "id": 75,
            "annee": 2017,
            "minCO2": 0,
            "maxCO2": 126,
            "malus": 0,
            "PeriodeAnnee": 1
        },
        {
            "id": 76,
            "annee": 2017,
            "minCO2": 127,
            "maxCO2": 127,
            "malus": 50,
            "PeriodeAnnee": 1
        },
        {
            "id": 77,
            "annee": 2017,
            "minCO2": 128,
            "maxCO2": 128,
            "malus": 53,
            "PeriodeAnnee": 1
        },
        {
            "id": 78,
            "annee": 2017,
            "minCO2": 129,
            "maxCO2": 129,
            "malus": 60,
            "PeriodeAnnee": 1
        },
        {
            "id": 79,
            "annee": 2017,
            "minCO2": 130,
            "maxCO2": 130,
            "malus": 73,
            "PeriodeAnnee": 1
        },
        {
            "id": 80,
            "annee": 2017,
            "minCO2": 131,
            "maxCO2": 131,
            "malus": 90,
            "PeriodeAnnee": 1
        },
        {
            "id": 81,
            "annee": 2017,
            "minCO2": 132,
            "maxCO2": 132,
            "malus": 113,
            "PeriodeAnnee": 1
        },
        {
            "id": 82,
            "annee": 2017,
            "minCO2": 133,
            "maxCO2": 133,
            "malus": 140,
            "PeriodeAnnee": 1
        },
        {
            "id": 83,
            "annee": 2017,
            "minCO2": 134,
            "maxCO2": 134,
            "malus": 173,
            "PeriodeAnnee": 1
        },
        {
            "id": 84,
            "annee": 2017,
            "minCO2": 135,
            "maxCO2": 135,
            "malus": 210,
            "PeriodeAnnee": 1
        },
        {
            "id": 85,
            "annee": 2017,
            "minCO2": 136,
            "maxCO2": 136,
            "malus": 253,
            "PeriodeAnnee": 1
        },
        {
            "id": 86,
            "annee": 2017,
            "minCO2": 137,
            "maxCO2": 137,
            "malus": 300,
            "PeriodeAnnee": 1
        },
        {
            "id": 87,
            "annee": 2017,
            "minCO2": 138,
            "maxCO2": 138,
            "malus": 353,
            "PeriodeAnnee": 1
        },
        {
            "id": 88,
            "annee": 2017,
            "minCO2": 139,
            "maxCO2": 139,
            "malus": 410,
            "PeriodeAnnee": 1
        },
        {
            "id": 89,
            "annee": 2017,
            "minCO2": 140,
            "maxCO2": 140,
            "malus": 473,
            "PeriodeAnnee": 1
        },
        {
            "id": 90,
            "annee": 2017,
            "minCO2": 141,
            "maxCO2": 141,
            "malus": 540,
            "PeriodeAnnee": 1
        },
        {
            "id": 91,
            "annee": 2017,
            "minCO2": 142,
            "maxCO2": 142,
            "malus": 613,
            "PeriodeAnnee": 1
        },
        {
            "id": 92,
            "annee": 2017,
            "minCO2": 143,
            "maxCO2": 143,
            "malus": 690,
            "PeriodeAnnee": 1
        },
        {
            "id": 93,
            "annee": 2017,
            "minCO2": 144,
            "maxCO2": 144,
            "malus": 773,
            "PeriodeAnnee": 1
        },
        {
            "id": 94,
            "annee": 2017,
            "minCO2": 145,
            "maxCO2": 145,
            "malus": 860,
            "PeriodeAnnee": 1
        },
        {
            "id": 95,
            "annee": 2017,
            "minCO2": 146,
            "maxCO2": 146,
            "malus": 953,
            "PeriodeAnnee": 1
        },
        {
            "id": 96,
            "annee": 2017,
            "minCO2": 147,
            "maxCO2": 147,
            "malus": 1050,
            "PeriodeAnnee": 1
        },
        {
            "id": 97,
            "annee": 2017,
            "minCO2": 148,
            "maxCO2": 148,
            "malus": 1153,
            "PeriodeAnnee": 1
        },
        {
            "id": 98,
            "annee": 2017,
            "minCO2": 149,
            "maxCO2": 149,
            "malus": 1260,
            "PeriodeAnnee": 1
        },
        {
            "id": 99,
            "annee": 2017,
            "minCO2": 150,
            "maxCO2": 150,
            "malus": 1373,
            "PeriodeAnnee": 1
        },
        {
            "id": 100,
            "annee": 2017,
            "minCO2": 151,
            "maxCO2": 151,
            "malus": 1490,
            "PeriodeAnnee": 1
        },
        {
            "id": 101,
            "annee": 2017,
            "minCO2": 152,
            "maxCO2": 152,
            "malus": 1613,
            "PeriodeAnnee": 1
        },
        {
            "id": 102,
            "annee": 2017,
            "minCO2": 153,
            "maxCO2": 153,
            "malus": 1740,
            "PeriodeAnnee": 1
        },
        {
            "id": 103,
            "annee": 2017,
            "minCO2": 154,
            "maxCO2": 154,
            "malus": 1873,
            "PeriodeAnnee": 1
        },
        {
            "id": 104,
            "annee": 2017,
            "minCO2": 155,
            "maxCO2": 155,
            "malus": 2010,
            "PeriodeAnnee": 1
        },
        {
            "id": 105,
            "annee": 2017,
            "minCO2": 156,
            "maxCO2": 156,
            "malus": 2153,
            "PeriodeAnnee": 1
        },
        {
            "id": 106,
            "annee": 2017,
            "minCO2": 157,
            "maxCO2": 157,
            "malus": 2300,
            "PeriodeAnnee": 1
        },
        {
            "id": 107,
            "annee": 2017,
            "minCO2": 158,
            "maxCO2": 158,
            "malus": 2453,
            "PeriodeAnnee": 1
        },
        {
            "id": 108,
            "annee": 2017,
            "minCO2": 159,
            "maxCO2": 159,
            "malus": 2610,
            "PeriodeAnnee": 1
        },
        {
            "id": 109,
            "annee": 2017,
            "minCO2": 160,
            "maxCO2": 160,
            "malus": 2773,
            "PeriodeAnnee": 1
        },
        {
            "id": 110,
            "annee": 2017,
            "minCO2": 161,
            "maxCO2": 161,
            "malus": 2940,
            "PeriodeAnnee": 1
        },
        {
            "id": 111,
            "annee": 2017,
            "minCO2": 162,
            "maxCO2": 162,
            "malus": 3113,
            "PeriodeAnnee": 1
        },
        {
            "id": 112,
            "annee": 2017,
            "minCO2": 163,
            "maxCO2": 163,
            "malus": 3290,
            "PeriodeAnnee": 1
        },
        {
            "id": 113,
            "annee": 2017,
            "minCO2": 164,
            "maxCO2": 164,
            "malus": 3473,
            "PeriodeAnnee": 1
        },
        {
            "id": 114,
            "annee": 2017,
            "minCO2": 165,
            "maxCO2": 165,
            "malus": 3660,
            "PeriodeAnnee": 1
        },
        {
            "id": 115,
            "annee": 2017,
            "minCO2": 166,
            "maxCO2": 166,
            "malus": 3853,
            "PeriodeAnnee": 1
        },
        {
            "id": 116,
            "annee": 2017,
            "minCO2": 167,
            "maxCO2": 167,
            "malus": 4050,
            "PeriodeAnnee": 1
        },
        {
            "id": 117,
            "annee": 2017,
            "minCO2": 168,
            "maxCO2": 168,
            "malus": 4253,
            "PeriodeAnnee": 1
        },
        {
            "id": 118,
            "annee": 2017,
            "minCO2": 169,
            "maxCO2": 169,
            "malus": 4460,
            "PeriodeAnnee": 1
        },
        {
            "id": 119,
            "annee": 2017,
            "minCO2": 170,
            "maxCO2": 170,
            "malus": 4673,
            "PeriodeAnnee": 1
        },
        {
            "id": 120,
            "annee": 2017,
            "minCO2": 171,
            "maxCO2": 171,
            "malus": 4890,
            "PeriodeAnnee": 1
        },
        {
            "id": 121,
            "annee": 2017,
            "minCO2": 172,
            "maxCO2": 172,
            "malus": 5113,
            "PeriodeAnnee": 1
        },
        {
            "id": 122,
            "annee": 2017,
            "minCO2": 173,
            "maxCO2": 173,
            "malus": 5340,
            "PeriodeAnnee": 1
        },
        {
            "id": 123,
            "annee": 2017,
            "minCO2": 174,
            "maxCO2": 174,
            "malus": 5573,
            "PeriodeAnnee": 1
        },
        {
            "id": 124,
            "annee": 2017,
            "minCO2": 175,
            "maxCO2": 175,
            "malus": 5810,
            "PeriodeAnnee": 1
        },
        {
            "id": 125,
            "annee": 2017,
            "minCO2": 176,
            "maxCO2": 176,
            "malus": 6053,
            "PeriodeAnnee": 1
        },
        {
            "id": 126,
            "annee": 2017,
            "minCO2": 177,
            "maxCO2": 177,
            "malus": 6300,
            "PeriodeAnnee": 1
        },
        {
            "id": 127,
            "annee": 2017,
            "minCO2": 178,
            "maxCO2": 178,
            "malus": 6553,
            "PeriodeAnnee": 1
        },
        {
            "id": 128,
            "annee": 2017,
            "minCO2": 179,
            "maxCO2": 179,
            "malus": 6810,
            "PeriodeAnnee": 1
        },
        {
            "id": 129,
            "annee": 2017,
            "minCO2": 180,
            "maxCO2": 180,
            "malus": 7073,
            "PeriodeAnnee": 1
        },
        {
            "id": 130,
            "annee": 2017,
            "minCO2": 181,
            "maxCO2": 181,
            "malus": 7340,
            "PeriodeAnnee": 1
        },
        {
            "id": 131,
            "annee": 2017,
            "minCO2": 182,
            "maxCO2": 182,
            "malus": 7613,
            "PeriodeAnnee": 1
        },
        {
            "id": 132,
            "annee": 2017,
            "minCO2": 183,
            "maxCO2": 183,
            "malus": 7890,
            "PeriodeAnnee": 1
        },
        {
            "id": 133,
            "annee": 2017,
            "minCO2": 184,
            "maxCO2": 184,
            "malus": 8173,
            "PeriodeAnnee": 1
        },
        {
            "id": 134,
            "annee": 2017,
            "minCO2": 185,
            "maxCO2": 185,
            "malus": 8460,
            "PeriodeAnnee": 1
        },
        {
            "id": 135,
            "annee": 2017,
            "minCO2": 186,
            "maxCO2": 186,
            "malus": 8753,
            "PeriodeAnnee": 1
        },
        {
            "id": 136,
            "annee": 2017,
            "minCO2": 187,
            "maxCO2": 187,
            "malus": 9050,
            "PeriodeAnnee": 1
        },
        {
            "id": 137,
            "annee": 2017,
            "minCO2": 188,
            "maxCO2": 188,
            "malus": 9353,
            "PeriodeAnnee": 1
        },
        {
            "id": 138,
            "annee": 2017,
            "minCO2": 189,
            "maxCO2": 189,
            "malus": 9660,
            "PeriodeAnnee": 1
        },
        {
            "id": 139,
            "annee": 2017,
            "minCO2": 190,
            "maxCO2": 190,
            "malus": 9973,
            "PeriodeAnnee": 1
        },
        {
            "id": 140,
            "annee": 2017,
            "minCO2": 191,
            "maxCO2": 9999999,
            "malus": 10000,
            "PeriodeAnnee": 1
        },
        {
            "id": 141,
            "annee": 2018,
            "minCO2": 0,
            "maxCO2": 119,
            "malus": 0,
            "PeriodeAnnee": 1
        },
        {
            "id": 142,
            "annee": 2018,
            "minCO2": 120,
            "maxCO2": 120,
            "malus": 50,
            "PeriodeAnnee": 1
        },
        {
            "id": 143,
            "annee": 2018,
            "minCO2": 121,
            "maxCO2": 121,
            "malus": 53,
            "PeriodeAnnee": 1
        },
        {
            "id": 144,
            "annee": 2018,
            "minCO2": 122,
            "maxCO2": 122,
            "malus": 60,
            "PeriodeAnnee": 1
        },
        {
            "id": 145,
            "annee": 2018,
            "minCO2": 123,
            "maxCO2": 123,
            "malus": 73,
            "PeriodeAnnee": 1
        },
        {
            "id": 146,
            "annee": 2018,
            "minCO2": 124,
            "maxCO2": 124,
            "malus": 90,
            "PeriodeAnnee": 1
        },
        {
            "id": 147,
            "annee": 2018,
            "minCO2": 125,
            "maxCO2": 125,
            "malus": 113,
            "PeriodeAnnee": 1
        },
        {
            "id": 148,
            "annee": 2018,
            "minCO2": 126,
            "maxCO2": 126,
            "malus": 140,
            "PeriodeAnnee": 1
        },
        {
            "id": 149,
            "annee": 2018,
            "minCO2": 127,
            "maxCO2": 127,
            "malus": 173,
            "PeriodeAnnee": 1
        },
        {
            "id": 150,
            "annee": 2018,
            "minCO2": 128,
            "maxCO2": 128,
            "malus": 210,
            "PeriodeAnnee": 1
        },
        {
            "id": 151,
            "annee": 2018,
            "minCO2": 129,
            "maxCO2": 129,
            "malus": 253,
            "PeriodeAnnee": 1
        },
        {
            "id": 152,
            "annee": 2018,
            "minCO2": 130,
            "maxCO2": 130,
            "malus": 300,
            "PeriodeAnnee": 1
        },
        {
            "id": 153,
            "annee": 2018,
            "minCO2": 131,
            "maxCO2": 131,
            "malus": 353,
            "PeriodeAnnee": 1
        },
        {
            "id": 154,
            "annee": 2018,
            "minCO2": 132,
            "maxCO2": 132,
            "malus": 410,
            "PeriodeAnnee": 1
        },
        {
            "id": 155,
            "annee": 2018,
            "minCO2": 133,
            "maxCO2": 133,
            "malus": 473,
            "PeriodeAnnee": 1
        },
        {
            "id": 156,
            "annee": 2018,
            "minCO2": 134,
            "maxCO2": 134,
            "malus": 540,
            "PeriodeAnnee": 1
        },
        {
            "id": 157,
            "annee": 2018,
            "minCO2": 135,
            "maxCO2": 135,
            "malus": 613,
            "PeriodeAnnee": 1
        },
        {
            "id": 158,
            "annee": 2018,
            "minCO2": 136,
            "maxCO2": 136,
            "malus": 690,
            "PeriodeAnnee": 1
        },
        {
            "id": 159,
            "annee": 2018,
            "minCO2": 137,
            "maxCO2": 137,
            "malus": 773,
            "PeriodeAnnee": 1
        },
        {
            "id": 160,
            "annee": 2018,
            "minCO2": 138,
            "maxCO2": 138,
            "malus": 860,
            "PeriodeAnnee": 1
        },
        {
            "id": 161,
            "annee": 2018,
            "minCO2": 139,
            "maxCO2": 139,
            "malus": 953,
            "PeriodeAnnee": 1
        },
        {
            "id": 162,
            "annee": 2018,
            "minCO2": 140,
            "maxCO2": 140,
            "malus": 1050,
            "PeriodeAnnee": 1
        },
        {
            "id": 163,
            "annee": 2018,
            "minCO2": 141,
            "maxCO2": 141,
            "malus": 1153,
            "PeriodeAnnee": 1
        },
        {
            "id": 164,
            "annee": 2018,
            "minCO2": 142,
            "maxCO2": 142,
            "malus": 1260,
            "PeriodeAnnee": 1
        },
        {
            "id": 165,
            "annee": 2018,
            "minCO2": 143,
            "maxCO2": 143,
            "malus": 1373,
            "PeriodeAnnee": 1
        },
        {
            "id": 166,
            "annee": 2018,
            "minCO2": 144,
            "maxCO2": 144,
            "malus": 1490,
            "PeriodeAnnee": 1
        },
        {
            "id": 167,
            "annee": 2018,
            "minCO2": 145,
            "maxCO2": 145,
            "malus": 1613,
            "PeriodeAnnee": 1
        },
        {
            "id": 168,
            "annee": 2018,
            "minCO2": 146,
            "maxCO2": 146,
            "malus": 1740,
            "PeriodeAnnee": 1
        },
        {
            "id": 169,
            "annee": 2018,
            "minCO2": 147,
            "maxCO2": 147,
            "malus": 1873,
            "PeriodeAnnee": 1
        },
        {
            "id": 170,
            "annee": 2018,
            "minCO2": 148,
            "maxCO2": 148,
            "malus": 2010,
            "PeriodeAnnee": 1
        },
        {
            "id": 171,
            "annee": 2018,
            "minCO2": 149,
            "maxCO2": 149,
            "malus": 2153,
            "PeriodeAnnee": 1
        },
        {
            "id": 172,
            "annee": 2018,
            "minCO2": 150,
            "maxCO2": 150,
            "malus": 2300,
            "PeriodeAnnee": 1
        },
        {
            "id": 173,
            "annee": 2018,
            "minCO2": 151,
            "maxCO2": 151,
            "malus": 2453,
            "PeriodeAnnee": 1
        },
        {
            "id": 174,
            "annee": 2018,
            "minCO2": 152,
            "maxCO2": 152,
            "malus": 2610,
            "PeriodeAnnee": 1
        },
        {
            "id": 175,
            "annee": 2018,
            "minCO2": 153,
            "maxCO2": 153,
            "malus": 2773,
            "PeriodeAnnee": 1
        },
        {
            "id": 176,
            "annee": 2018,
            "minCO2": 154,
            "maxCO2": 154,
            "malus": 2940,
            "PeriodeAnnee": 1
        },
        {
            "id": 177,
            "annee": 2018,
            "minCO2": 155,
            "maxCO2": 155,
            "malus": 3113,
            "PeriodeAnnee": 1
        },
        {
            "id": 178,
            "annee": 2018,
            "minCO2": 156,
            "maxCO2": 156,
            "malus": 3290,
            "PeriodeAnnee": 1
        },
        {
            "id": 179,
            "annee": 2018,
            "minCO2": 157,
            "maxCO2": 157,
            "malus": 3473,
            "PeriodeAnnee": 1
        },
        {
            "id": 180,
            "annee": 2018,
            "minCO2": 158,
            "maxCO2": 158,
            "malus": 3660,
            "PeriodeAnnee": 1
        },
        {
            "id": 181,
            "annee": 2018,
            "minCO2": 159,
            "maxCO2": 159,
            "malus": 3853,
            "PeriodeAnnee": 1
        },
        {
            "id": 182,
            "annee": 2018,
            "minCO2": 160,
            "maxCO2": 160,
            "malus": 4050,
            "PeriodeAnnee": 1
        },
        {
            "id": 183,
            "annee": 2018,
            "minCO2": 161,
            "maxCO2": 161,
            "malus": 4253,
            "PeriodeAnnee": 1
        },
        {
            "id": 184,
            "annee": 2018,
            "minCO2": 162,
            "maxCO2": 162,
            "malus": 4460,
            "PeriodeAnnee": 1
        },
        {
            "id": 185,
            "annee": 2018,
            "minCO2": 163,
            "maxCO2": 163,
            "malus": 4673,
            "PeriodeAnnee": 1
        },
        {
            "id": 186,
            "annee": 2018,
            "minCO2": 164,
            "maxCO2": 164,
            "malus": 4890,
            "PeriodeAnnee": 1
        },
        {
            "id": 187,
            "annee": 2018,
            "minCO2": 165,
            "maxCO2": 165,
            "malus": 5113,
            "PeriodeAnnee": 1
        },
        {
            "id": 188,
            "annee": 2018,
            "minCO2": 166,
            "maxCO2": 166,
            "malus": 5340,
            "PeriodeAnnee": 1
        },
        {
            "id": 189,
            "annee": 2018,
            "minCO2": 167,
            "maxCO2": 167,
            "malus": 5573,
            "PeriodeAnnee": 1
        },
        {
            "id": 190,
            "annee": 2018,
            "minCO2": 168,
            "maxCO2": 168,
            "malus": 5810,
            "PeriodeAnnee": 1
        },
        {
            "id": 191,
            "annee": 2018,
            "minCO2": 169,
            "maxCO2": 169,
            "malus": 6053,
            "PeriodeAnnee": 1
        },
        {
            "id": 192,
            "annee": 2018,
            "minCO2": 170,
            "maxCO2": 170,
            "malus": 6300,
            "PeriodeAnnee": 1
        },
        {
            "id": 193,
            "annee": 2018,
            "minCO2": 171,
            "maxCO2": 171,
            "malus": 6553,
            "PeriodeAnnee": 1
        },
        {
            "id": 194,
            "annee": 2018,
            "minCO2": 172,
            "maxCO2": 172,
            "malus": 6810,
            "PeriodeAnnee": 1
        },
        {
            "id": 195,
            "annee": 2018,
            "minCO2": 173,
            "maxCO2": 173,
            "malus": 7073,
            "PeriodeAnnee": 1
        },
        {
            "id": 196,
            "annee": 2018,
            "minCO2": 174,
            "maxCO2": 174,
            "malus": 7340,
            "PeriodeAnnee": 1
        },
        {
            "id": 197,
            "annee": 2018,
            "minCO2": 175,
            "maxCO2": 175,
            "malus": 7613,
            "PeriodeAnnee": 1
        },
        {
            "id": 198,
            "annee": 2018,
            "minCO2": 176,
            "maxCO2": 176,
            "malus": 7890,
            "PeriodeAnnee": 1
        },
        {
            "id": 199,
            "annee": 2018,
            "minCO2": 177,
            "maxCO2": 177,
            "malus": 8173,
            "PeriodeAnnee": 1
        },
        {
            "id": 200,
            "annee": 2018,
            "minCO2": 178,
            "maxCO2": 178,
            "malus": 8460,
            "PeriodeAnnee": 1
        },
        {
            "id": 201,
            "annee": 2018,
            "minCO2": 179,
            "maxCO2": 179,
            "malus": 8753,
            "PeriodeAnnee": 1
        },
        {
            "id": 202,
            "annee": 2018,
            "minCO2": 180,
            "maxCO2": 180,
            "malus": 9050,
            "PeriodeAnnee": 1
        },
        {
            "id": 203,
            "annee": 2018,
            "minCO2": 181,
            "maxCO2": 181,
            "malus": 9353,
            "PeriodeAnnee": 1
        },
        {
            "id": 204,
            "annee": 2018,
            "minCO2": 182,
            "maxCO2": 182,
            "malus": 9660,
            "PeriodeAnnee": 1
        },
        {
            "id": 205,
            "annee": 2018,
            "minCO2": 183,
            "maxCO2": 183,
            "malus": 9973,
            "PeriodeAnnee": 1
        },
        {
            "id": 206,
            "annee": 2018,
            "minCO2": 184,
            "maxCO2": 184,
            "malus": 10290,
            "PeriodeAnnee": 1
        },
        {
            "id": 207,
            "annee": 2018,
            "minCO2": 185,
            "maxCO2": 9999999,
            "malus": 10500,
            "PeriodeAnnee": 1
        },
        {
            "id": 208,
            "annee": 2019,
            "minCO2": 0,
            "maxCO2": 116,
            "malus": 0,
            "PeriodeAnnee": 1
        },
        {
            "id": 209,
            "annee": 2019,
            "minCO2": 117,
            "maxCO2": 117,
            "malus": 35,
            "PeriodeAnnee": 1
        },
        {
            "id": 210,
            "annee": 2019,
            "minCO2": 118,
            "maxCO2": 118,
            "malus": 40,
            "PeriodeAnnee": 1
        },
        {
            "id": 211,
            "annee": 2019,
            "minCO2": 119,
            "maxCO2": 119,
            "malus": 45,
            "PeriodeAnnee": 1
        },
        {
            "id": 212,
            "annee": 2019,
            "minCO2": 120,
            "maxCO2": 120,
            "malus": 50,
            "PeriodeAnnee": 1
        },
        {
            "id": 213,
            "annee": 2019,
            "minCO2": 121,
            "maxCO2": 121,
            "malus": 55,
            "PeriodeAnnee": 1
        },
        {
            "id": 214,
            "annee": 2019,
            "minCO2": 122,
            "maxCO2": 122,
            "malus": 60,
            "PeriodeAnnee": 1
        },
        {
            "id": 215,
            "annee": 2019,
            "minCO2": 123,
            "maxCO2": 123,
            "malus": 65,
            "PeriodeAnnee": 1
        },
        {
            "id": 216,
            "annee": 2019,
            "minCO2": 124,
            "maxCO2": 124,
            "malus": 70,
            "PeriodeAnnee": 1
        },
        {
            "id": 217,
            "annee": 2019,
            "minCO2": 125,
            "maxCO2": 125,
            "malus": 75,
            "PeriodeAnnee": 1
        },
        {
            "id": 218,
            "annee": 2019,
            "minCO2": 126,
            "maxCO2": 126,
            "malus": 80,
            "PeriodeAnnee": 1
        },
        {
            "id": 219,
            "annee": 2019,
            "minCO2": 127,
            "maxCO2": 127,
            "malus": 85,
            "PeriodeAnnee": 1
        },
        {
            "id": 220,
            "annee": 2019,
            "minCO2": 128,
            "maxCO2": 128,
            "malus": 90,
            "PeriodeAnnee": 1
        },
        {
            "id": 221,
            "annee": 2019,
            "minCO2": 129,
            "maxCO2": 129,
            "malus": 113,
            "PeriodeAnnee": 1
        },
        {
            "id": 222,
            "annee": 2019,
            "minCO2": 130,
            "maxCO2": 130,
            "malus": 140,
            "PeriodeAnnee": 1
        },
        {
            "id": 223,
            "annee": 2019,
            "minCO2": 131,
            "maxCO2": 131,
            "malus": 173,
            "PeriodeAnnee": 1
        },
        {
            "id": 224,
            "annee": 2019,
            "minCO2": 132,
            "maxCO2": 132,
            "malus": 210,
            "PeriodeAnnee": 1
        },
        {
            "id": 225,
            "annee": 2019,
            "minCO2": 133,
            "maxCO2": 133,
            "malus": 253,
            "PeriodeAnnee": 1
        },
        {
            "id": 226,
            "annee": 2019,
            "minCO2": 134,
            "maxCO2": 134,
            "malus": 300,
            "PeriodeAnnee": 1
        },
        {
            "id": 227,
            "annee": 2019,
            "minCO2": 135,
            "maxCO2": 135,
            "malus": 353,
            "PeriodeAnnee": 1
        },
        {
            "id": 228,
            "annee": 2019,
            "minCO2": 136,
            "maxCO2": 136,
            "malus": 410,
            "PeriodeAnnee": 1
        },
        {
            "id": 229,
            "annee": 2019,
            "minCO2": 137,
            "maxCO2": 137,
            "malus": 473,
            "PeriodeAnnee": 1
        },
        {
            "id": 230,
            "annee": 2019,
            "minCO2": 138,
            "maxCO2": 138,
            "malus": 540,
            "PeriodeAnnee": 1
        },
        {
            "id": 231,
            "annee": 2019,
            "minCO2": 139,
            "maxCO2": 139,
            "malus": 613,
            "PeriodeAnnee": 1
        },
        {
            "id": 232,
            "annee": 2019,
            "minCO2": 140,
            "maxCO2": 140,
            "malus": 690,
            "PeriodeAnnee": 1
        },
        {
            "id": 233,
            "annee": 2019,
            "minCO2": 141,
            "maxCO2": 141,
            "malus": 773,
            "PeriodeAnnee": 1
        },
        {
            "id": 234,
            "annee": 2019,
            "minCO2": 142,
            "maxCO2": 142,
            "malus": 860,
            "PeriodeAnnee": 1
        },
        {
            "id": 235,
            "annee": 2019,
            "minCO2": 143,
            "maxCO2": 143,
            "malus": 953,
            "PeriodeAnnee": 1
        },
        {
            "id": 236,
            "annee": 2019,
            "minCO2": 144,
            "maxCO2": 144,
            "malus": 1050,
            "PeriodeAnnee": 1
        },
        {
            "id": 237,
            "annee": 2019,
            "minCO2": 145,
            "maxCO2": 145,
            "malus": 1101,
            "PeriodeAnnee": 1
        },
        {
            "id": 238,
            "annee": 2019,
            "minCO2": 146,
            "maxCO2": 146,
            "malus": 1153,
            "PeriodeAnnee": 1
        },
        {
            "id": 239,
            "annee": 2019,
            "minCO2": 147,
            "maxCO2": 147,
            "malus": 1260,
            "PeriodeAnnee": 1
        },
        {
            "id": 240,
            "annee": 2019,
            "minCO2": 148,
            "maxCO2": 148,
            "malus": 1373,
            "PeriodeAnnee": 1
        },
        {
            "id": 241,
            "annee": 2019,
            "minCO2": 149,
            "maxCO2": 149,
            "malus": 1490,
            "PeriodeAnnee": 1
        },
        {
            "id": 242,
            "annee": 2019,
            "minCO2": 150,
            "maxCO2": 150,
            "malus": 1613,
            "PeriodeAnnee": 1
        },
        {
            "id": 243,
            "annee": 2019,
            "minCO2": 151,
            "maxCO2": 151,
            "malus": 1740,
            "PeriodeAnnee": 1
        },
        {
            "id": 244,
            "annee": 2019,
            "minCO2": 152,
            "maxCO2": 152,
            "malus": 1873,
            "PeriodeAnnee": 1
        },
        {
            "id": 245,
            "annee": 2019,
            "minCO2": 153,
            "maxCO2": 153,
            "malus": 2010,
            "PeriodeAnnee": 1
        },
        {
            "id": 246,
            "annee": 2019,
            "minCO2": 154,
            "maxCO2": 154,
            "malus": 2153,
            "PeriodeAnnee": 1
        },
        {
            "id": 247,
            "annee": 2019,
            "minCO2": 155,
            "maxCO2": 155,
            "malus": 2300,
            "PeriodeAnnee": 1
        },
        {
            "id": 248,
            "annee": 2019,
            "minCO2": 156,
            "maxCO2": 156,
            "malus": 2453,
            "PeriodeAnnee": 1
        },
        {
            "id": 249,
            "annee": 2019,
            "minCO2": 157,
            "maxCO2": 157,
            "malus": 2610,
            "PeriodeAnnee": 1
        },
        {
            "id": 250,
            "annee": 2019,
            "minCO2": 158,
            "maxCO2": 158,
            "malus": 2773,
            "PeriodeAnnee": 1
        },
        {
            "id": 251,
            "annee": 2019,
            "minCO2": 159,
            "maxCO2": 159,
            "malus": 2940,
            "PeriodeAnnee": 1
        },
        {
            "id": 252,
            "annee": 2019,
            "minCO2": 160,
            "maxCO2": 160,
            "malus": 3113,
            "PeriodeAnnee": 1
        },
        {
            "id": 253,
            "annee": 2019,
            "minCO2": 161,
            "maxCO2": 161,
            "malus": 3290,
            "PeriodeAnnee": 1
        },
        {
            "id": 254,
            "annee": 2019,
            "minCO2": 162,
            "maxCO2": 162,
            "malus": 3473,
            "PeriodeAnnee": 1
        },
        {
            "id": 255,
            "annee": 2019,
            "minCO2": 163,
            "maxCO2": 163,
            "malus": 3660,
            "PeriodeAnnee": 1
        },
        {
            "id": 256,
            "annee": 2019,
            "minCO2": 164,
            "maxCO2": 164,
            "malus": 3756,
            "PeriodeAnnee": 1
        },
        {
            "id": 257,
            "annee": 2019,
            "minCO2": 165,
            "maxCO2": 165,
            "malus": 3853,
            "PeriodeAnnee": 1
        },
        {
            "id": 258,
            "annee": 2019,
            "minCO2": 166,
            "maxCO2": 166,
            "malus": 4050,
            "PeriodeAnnee": 1
        },
        {
            "id": 259,
            "annee": 2019,
            "minCO2": 167,
            "maxCO2": 167,
            "malus": 4253,
            "PeriodeAnnee": 1
        },
        {
            "id": 260,
            "annee": 2019,
            "minCO2": 168,
            "maxCO2": 168,
            "malus": 4460,
            "PeriodeAnnee": 1
        },
        {
            "id": 261,
            "annee": 2019,
            "minCO2": 169,
            "maxCO2": 169,
            "malus": 4673,
            "PeriodeAnnee": 1
        },
        {
            "id": 262,
            "annee": 2019,
            "minCO2": 170,
            "maxCO2": 170,
            "malus": 4890,
            "PeriodeAnnee": 1
        },
        {
            "id": 263,
            "annee": 2019,
            "minCO2": 171,
            "maxCO2": 171,
            "malus": 5113,
            "PeriodeAnnee": 1
        },
        {
            "id": 264,
            "annee": 2019,
            "minCO2": 172,
            "maxCO2": 172,
            "malus": 5340,
            "PeriodeAnnee": 1
        },
        {
            "id": 265,
            "annee": 2019,
            "minCO2": 173,
            "maxCO2": 173,
            "malus": 5573,
            "PeriodeAnnee": 1
        },
        {
            "id": 266,
            "annee": 2019,
            "minCO2": 174,
            "maxCO2": 174,
            "malus": 5810,
            "PeriodeAnnee": 1
        },
        {
            "id": 267,
            "annee": 2019,
            "minCO2": 175,
            "maxCO2": 175,
            "malus": 6053,
            "PeriodeAnnee": 1
        },
        {
            "id": 268,
            "annee": 2019,
            "minCO2": 176,
            "maxCO2": 176,
            "malus": 6300,
            "PeriodeAnnee": 1
        },
        {
            "id": 269,
            "annee": 2019,
            "minCO2": 177,
            "maxCO2": 177,
            "malus": 6553,
            "PeriodeAnnee": 1
        },
        {
            "id": 270,
            "annee": 2019,
            "minCO2": 178,
            "maxCO2": 178,
            "malus": 6810,
            "PeriodeAnnee": 1
        },
        {
            "id": 271,
            "annee": 2019,
            "minCO2": 179,
            "maxCO2": 179,
            "malus": 7073,
            "PeriodeAnnee": 1
        },
        {
            "id": 272,
            "annee": 2019,
            "minCO2": 180,
            "maxCO2": 180,
            "malus": 7340,
            "PeriodeAnnee": 1
        },
        {
            "id": 273,
            "annee": 2019,
            "minCO2": 181,
            "maxCO2": 181,
            "malus": 7613,
            "PeriodeAnnee": 1
        },
        {
            "id": 274,
            "annee": 2019,
            "minCO2": 182,
            "maxCO2": 182,
            "malus": 7890,
            "PeriodeAnnee": 1
        },
        {
            "id": 275,
            "annee": 2019,
            "minCO2": 183,
            "maxCO2": 183,
            "malus": 8173,
            "PeriodeAnnee": 1
        },
        {
            "id": 276,
            "annee": 2019,
            "minCO2": 184,
            "maxCO2": 184,
            "malus": 8460,
            "PeriodeAnnee": 1
        },
        {
            "id": 277,
            "annee": 2019,
            "minCO2": 185,
            "maxCO2": 185,
            "malus": 8753,
            "PeriodeAnnee": 1
        },
        {
            "id": 278,
            "annee": 2019,
            "minCO2": 186,
            "maxCO2": 186,
            "malus": 9050,
            "PeriodeAnnee": 1
        },
        {
            "id": 279,
            "annee": 2019,
            "minCO2": 187,
            "maxCO2": 187,
            "malus": 9353,
            "PeriodeAnnee": 1
        },
        {
            "id": 280,
            "annee": 2019,
            "minCO2": 188,
            "maxCO2": 188,
            "malus": 9660,
            "PeriodeAnnee": 1
        },
        {
            "id": 281,
            "annee": 2019,
            "minCO2": 189,
            "maxCO2": 189,
            "malus": 9973,
            "PeriodeAnnee": 1
        },
        {
            "id": 282,
            "annee": 2019,
            "minCO2": 190,
            "maxCO2": 190,
            "malus": 10290,
            "PeriodeAnnee": 1
        },
        {
            "id": 283,
            "annee": 2019,
            "minCO2": 191,
            "maxCO2": 9999999,
            "malus": 10500,
            "PeriodeAnnee": 1
        },
        {
            "id": 284,
            "annee": 2020,
            "minCO2": 0,
            "maxCO2": 109,
            "malus": 0,
            "PeriodeAnnee": 1
        },
        {
            "id": 285,
            "annee": 2020,
            "minCO2": 110,
            "maxCO2": 110,
            "malus": 50,
            "PeriodeAnnee": 1
        },
        {
            "id": 286,
            "annee": 2020,
            "minCO2": 111,
            "maxCO2": 111,
            "malus": 75,
            "PeriodeAnnee": 1
        },
        {
            "id": 287,
            "annee": 2020,
            "minCO2": 112,
            "maxCO2": 112,
            "malus": 100,
            "PeriodeAnnee": 1
        },
        {
            "id": 288,
            "annee": 2020,
            "minCO2": 113,
            "maxCO2": 113,
            "malus": 125,
            "PeriodeAnnee": 1
        },
        {
            "id": 289,
            "annee": 2020,
            "minCO2": 114,
            "maxCO2": 114,
            "malus": 150,
            "PeriodeAnnee": 1
        },
        {
            "id": 290,
            "annee": 2020,
            "minCO2": 115,
            "maxCO2": 115,
            "malus": 170,
            "PeriodeAnnee": 1
        },
        {
            "id": 291,
            "annee": 2020,
            "minCO2": 116,
            "maxCO2": 116,
            "malus": 190,
            "PeriodeAnnee": 1
        },
        {
            "id": 292,
            "annee": 2020,
            "minCO2": 117,
            "maxCO2": 117,
            "malus": 210,
            "PeriodeAnnee": 1
        },
        {
            "id": 293,
            "annee": 2020,
            "minCO2": 118,
            "maxCO2": 118,
            "malus": 230,
            "PeriodeAnnee": 1
        },
        {
            "id": 294,
            "annee": 2020,
            "minCO2": 119,
            "maxCO2": 119,
            "malus": 240,
            "PeriodeAnnee": 1
        },
        {
            "id": 295,
            "annee": 2020,
            "minCO2": 120,
            "maxCO2": 120,
            "malus": 260,
            "PeriodeAnnee": 1
        },
        {
            "id": 296,
            "annee": 2020,
            "minCO2": 121,
            "maxCO2": 121,
            "malus": 280,
            "PeriodeAnnee": 1
        },
        {
            "id": 297,
            "annee": 2020,
            "minCO2": 122,
            "maxCO2": 122,
            "malus": 310,
            "PeriodeAnnee": 1
        },
        {
            "id": 298,
            "annee": 2020,
            "minCO2": 123,
            "maxCO2": 123,
            "malus": 330,
            "PeriodeAnnee": 1
        },
        {
            "id": 299,
            "annee": 2020,
            "minCO2": 124,
            "maxCO2": 124,
            "malus": 360,
            "PeriodeAnnee": 1
        },
        {
            "id": 300,
            "annee": 2020,
            "minCO2": 125,
            "maxCO2": 125,
            "malus": 400,
            "PeriodeAnnee": 1
        },
        {
            "id": 301,
            "annee": 2020,
            "minCO2": 126,
            "maxCO2": 126,
            "malus": 450,
            "PeriodeAnnee": 1
        },
        {
            "id": 302,
            "annee": 2020,
            "minCO2": 127,
            "maxCO2": 127,
            "malus": 540,
            "PeriodeAnnee": 1
        },
        {
            "id": 303,
            "annee": 2020,
            "minCO2": 128,
            "maxCO2": 128,
            "malus": 650,
            "PeriodeAnnee": 1
        },
        {
            "id": 304,
            "annee": 2020,
            "minCO2": 129,
            "maxCO2": 129,
            "malus": 740,
            "PeriodeAnnee": 1
        },
        {
            "id": 305,
            "annee": 2020,
            "minCO2": 130,
            "maxCO2": 130,
            "malus": 818,
            "PeriodeAnnee": 1
        },
        {
            "id": 306,
            "annee": 2020,
            "minCO2": 131,
            "maxCO2": 131,
            "malus": 898,
            "PeriodeAnnee": 1
        },
        {
            "id": 307,
            "annee": 2020,
            "minCO2": 132,
            "maxCO2": 132,
            "malus": 983,
            "PeriodeAnnee": 1
        },
        {
            "id": 308,
            "annee": 2020,
            "minCO2": 133,
            "maxCO2": 133,
            "malus": 1074,
            "PeriodeAnnee": 1
        },
        {
            "id": 309,
            "annee": 2020,
            "minCO2": 134,
            "maxCO2": 134,
            "malus": 1172,
            "PeriodeAnnee": 1
        },
        {
            "id": 310,
            "annee": 2020,
            "minCO2": 135,
            "maxCO2": 135,
            "malus": 1276,
            "PeriodeAnnee": 1
        },
        {
            "id": 311,
            "annee": 2020,
            "minCO2": 136,
            "maxCO2": 136,
            "malus": 1386,
            "PeriodeAnnee": 1
        },
        {
            "id": 312,
            "annee": 2020,
            "minCO2": 137,
            "maxCO2": 137,
            "malus": 1504,
            "PeriodeAnnee": 1
        },
        {
            "id": 313,
            "annee": 2020,
            "minCO2": 138,
            "maxCO2": 138,
            "malus": 1629,
            "PeriodeAnnee": 1
        },
        {
            "id": 314,
            "annee": 2020,
            "minCO2": 139,
            "maxCO2": 139,
            "malus": 1761,
            "PeriodeAnnee": 1
        },
        {
            "id": 315,
            "annee": 2020,
            "minCO2": 140,
            "maxCO2": 140,
            "malus": 1901,
            "PeriodeAnnee": 1
        },
        {
            "id": 316,
            "annee": 2020,
            "minCO2": 141,
            "maxCO2": 141,
            "malus": 2049,
            "PeriodeAnnee": 1
        },
        {
            "id": 317,
            "annee": 2020,
            "minCO2": 142,
            "maxCO2": 142,
            "malus": 2205,
            "PeriodeAnnee": 1
        },
        {
            "id": 318,
            "annee": 2020,
            "minCO2": 143,
            "maxCO2": 143,
            "malus": 2370,
            "PeriodeAnnee": 1
        },
        {
            "id": 319,
            "annee": 2020,
            "minCO2": 144,
            "maxCO2": 144,
            "malus": 2544,
            "PeriodeAnnee": 1
        },
        {
            "id": 320,
            "annee": 2020,
            "minCO2": 145,
            "maxCO2": 145,
            "malus": 2726,
            "PeriodeAnnee": 1
        },
        {
            "id": 321,
            "annee": 2020,
            "minCO2": 146,
            "maxCO2": 146,
            "malus": 2918,
            "PeriodeAnnee": 1
        },
        {
            "id": 322,
            "annee": 2020,
            "minCO2": 147,
            "maxCO2": 147,
            "malus": 3119,
            "PeriodeAnnee": 1
        },
        {
            "id": 323,
            "annee": 2020,
            "minCO2": 148,
            "maxCO2": 148,
            "malus": 3331,
            "PeriodeAnnee": 1
        },
        {
            "id": 324,
            "annee": 2020,
            "minCO2": 149,
            "maxCO2": 149,
            "malus": 3552,
            "PeriodeAnnee": 1
        },
        {
            "id": 325,
            "annee": 2020,
            "minCO2": 150,
            "maxCO2": 150,
            "malus": 3784,
            "PeriodeAnnee": 1
        },
        {
            "id": 326,
            "annee": 2020,
            "minCO2": 151,
            "maxCO2": 151,
            "malus": 4026,
            "PeriodeAnnee": 1
        },
        {
            "id": 327,
            "annee": 2020,
            "minCO2": 152,
            "maxCO2": 152,
            "malus": 4279,
            "PeriodeAnnee": 1
        },
        {
            "id": 328,
            "annee": 2020,
            "minCO2": 153,
            "maxCO2": 153,
            "malus": 4543,
            "PeriodeAnnee": 1
        },
        {
            "id": 329,
            "annee": 2020,
            "minCO2": 154,
            "maxCO2": 154,
            "malus": 4818,
            "PeriodeAnnee": 1
        },
        {
            "id": 330,
            "annee": 2020,
            "minCO2": 155,
            "maxCO2": 155,
            "malus": 5105,
            "PeriodeAnnee": 1
        },
        {
            "id": 331,
            "annee": 2020,
            "minCO2": 156,
            "maxCO2": 156,
            "malus": 5404,
            "PeriodeAnnee": 1
        },
        {
            "id": 332,
            "annee": 2020,
            "minCO2": 157,
            "maxCO2": 157,
            "malus": 5715,
            "PeriodeAnnee": 1
        },
        {
            "id": 333,
            "annee": 2020,
            "minCO2": 158,
            "maxCO2": 158,
            "malus": 6039,
            "PeriodeAnnee": 1
        },
        {
            "id": 334,
            "annee": 2020,
            "minCO2": 159,
            "maxCO2": 159,
            "malus": 6375,
            "PeriodeAnnee": 1
        },
        {
            "id": 335,
            "annee": 2020,
            "minCO2": 160,
            "maxCO2": 160,
            "malus": 6724,
            "PeriodeAnnee": 1
        },
        {
            "id": 336,
            "annee": 2020,
            "minCO2": 161,
            "maxCO2": 161,
            "malus": 7086,
            "PeriodeAnnee": 1
        },
        {
            "id": 337,
            "annee": 2020,
            "minCO2": 162,
            "maxCO2": 162,
            "malus": 7462,
            "PeriodeAnnee": 1
        },
        {
            "id": 338,
            "annee": 2020,
            "minCO2": 163,
            "maxCO2": 163,
            "malus": 7851,
            "PeriodeAnnee": 1
        },
        {
            "id": 339,
            "annee": 2020,
            "minCO2": 164,
            "maxCO2": 164,
            "malus": 8254,
            "PeriodeAnnee": 1
        },
        {
            "id": 340,
            "annee": 2020,
            "minCO2": 165,
            "maxCO2": 165,
            "malus": 8671,
            "PeriodeAnnee": 1
        },
        {
            "id": 341,
            "annee": 2020,
            "minCO2": 166,
            "maxCO2": 166,
            "malus": 9103,
            "PeriodeAnnee": 1
        },
        {
            "id": 342,
            "annee": 2020,
            "minCO2": 167,
            "maxCO2": 167,
            "malus": 9550,
            "PeriodeAnnee": 1
        },
        {
            "id": 343,
            "annee": 2020,
            "minCO2": 168,
            "maxCO2": 168,
            "malus": 10011,
            "PeriodeAnnee": 1
        },
        {
            "id": 344,
            "annee": 2020,
            "minCO2": 169,
            "maxCO2": 169,
            "malus": 10488,
            "PeriodeAnnee": 1
        },
        {
            "id": 345,
            "annee": 2020,
            "minCO2": 170,
            "maxCO2": 170,
            "malus": 10980,
            "PeriodeAnnee": 1
        },
        {
            "id": 346,
            "annee": 2020,
            "minCO2": 171,
            "maxCO2": 171,
            "malus": 11488,
            "PeriodeAnnee": 1
        },
        {
            "id": 347,
            "annee": 2020,
            "minCO2": 172,
            "maxCO2": 172,
            "malus": 12012,
            "PeriodeAnnee": 1
        },
        {
            "id": 348,
            "annee": 2020,
            "minCO2": 173,
            "maxCO2": 173,
            "malus": 12552,
            "PeriodeAnnee": 1
        },
        {
            "id": 349,
            "annee": 2020,
            "minCO2": 0,
            "maxCO2": 137,
            "malus": 0,
            "PeriodeAnnee": 2
        },
        {
            "id": 350,
            "annee": 2020,
            "minCO2": 138,
            "maxCO2": 138,
            "malus": 50,
            "PeriodeAnnee": 2
        },
        {
            "id": 351,
            "annee": 2020,
            "minCO2": 139,
            "maxCO2": 139,
            "malus": 75,
            "PeriodeAnnee": 2
        },
        {
            "id": 352,
            "annee": 2020,
            "minCO2": 140,
            "maxCO2": 140,
            "malus": 100,
            "PeriodeAnnee": 2
        },
        {
            "id": 353,
            "annee": 2020,
            "minCO2": 141,
            "maxCO2": 141,
            "malus": 125,
            "PeriodeAnnee": 2
        },
        {
            "id": 354,
            "annee": 2020,
            "minCO2": 142,
            "maxCO2": 142,
            "malus": 150,
            "PeriodeAnnee": 2
        },
        {
            "id": 355,
            "annee": 2020,
            "minCO2": 143,
            "maxCO2": 143,
            "malus": 170,
            "PeriodeAnnee": 2
        },
        {
            "id": 356,
            "annee": 2020,
            "minCO2": 144,
            "maxCO2": 144,
            "malus": 190,
            "PeriodeAnnee": 2
        },
        {
            "id": 357,
            "annee": 2020,
            "minCO2": 145,
            "maxCO2": 145,
            "malus": 210,
            "PeriodeAnnee": 2
        },
        {
            "id": 358,
            "annee": 2020,
            "minCO2": 146,
            "maxCO2": 146,
            "malus": 230,
            "PeriodeAnnee": 2
        },
        {
            "id": 359,
            "annee": 2020,
            "minCO2": 147,
            "maxCO2": 147,
            "malus": 240,
            "PeriodeAnnee": 2
        },
        {
            "id": 360,
            "annee": 2020,
            "minCO2": 148,
            "maxCO2": 148,
            "malus": 260,
            "PeriodeAnnee": 2
        },
        {
            "id": 361,
            "annee": 2020,
            "minCO2": 149,
            "maxCO2": 149,
            "malus": 280,
            "PeriodeAnnee": 2
        },
        {
            "id": 362,
            "annee": 2020,
            "minCO2": 150,
            "maxCO2": 150,
            "malus": 310,
            "PeriodeAnnee": 2
        },
        {
            "id": 363,
            "annee": 2020,
            "minCO2": 151,
            "maxCO2": 151,
            "malus": 330,
            "PeriodeAnnee": 2
        },
        {
            "id": 364,
            "annee": 2020,
            "minCO2": 152,
            "maxCO2": 152,
            "malus": 360,
            "PeriodeAnnee": 2
        },
        {
            "id": 365,
            "annee": 2020,
            "minCO2": 153,
            "maxCO2": 153,
            "malus": 400,
            "PeriodeAnnee": 2
        },
        {
            "id": 366,
            "annee": 2020,
            "minCO2": 154,
            "maxCO2": 154,
            "malus": 450,
            "PeriodeAnnee": 2
        },
        {
            "id": 367,
            "annee": 2020,
            "minCO2": 155,
            "maxCO2": 155,
            "malus": 540,
            "PeriodeAnnee": 2
        },
        {
            "id": 368,
            "annee": 2020,
            "minCO2": 156,
            "maxCO2": 156,
            "malus": 650,
            "PeriodeAnnee": 2
        },
        {
            "id": 369,
            "annee": 2020,
            "minCO2": 157,
            "maxCO2": 157,
            "malus": 740,
            "PeriodeAnnee": 2
        },
        {
            "id": 370,
            "annee": 2020,
            "minCO2": 158,
            "maxCO2": 158,
            "malus": 818,
            "PeriodeAnnee": 2
        },
        {
            "id": 371,
            "annee": 2020,
            "minCO2": 159,
            "maxCO2": 159,
            "malus": 898,
            "PeriodeAnnee": 2
        },
        {
            "id": 372,
            "annee": 2020,
            "minCO2": 160,
            "maxCO2": 160,
            "malus": 983,
            "PeriodeAnnee": 2
        },
        {
            "id": 373,
            "annee": 2020,
            "minCO2": 161,
            "maxCO2": 161,
            "malus": 1074,
            "PeriodeAnnee": 2
        },
        {
            "id": 374,
            "annee": 2020,
            "minCO2": 162,
            "maxCO2": 162,
            "malus": 1172,
            "PeriodeAnnee": 2
        },
        {
            "id": 375,
            "annee": 2020,
            "minCO2": 163,
            "maxCO2": 163,
            "malus": 1276,
            "PeriodeAnnee": 2
        },
        {
            "id": 376,
            "annee": 2020,
            "minCO2": 164,
            "maxCO2": 164,
            "malus": 1386,
            "PeriodeAnnee": 2
        },
        {
            "id": 377,
            "annee": 2020,
            "minCO2": 165,
            "maxCO2": 165,
            "malus": 1504,
            "PeriodeAnnee": 2
        },
        {
            "id": 378,
            "annee": 2020,
            "minCO2": 166,
            "maxCO2": 166,
            "malus": 1629,
            "PeriodeAnnee": 2
        },
        {
            "id": 379,
            "annee": 2020,
            "minCO2": 167,
            "maxCO2": 167,
            "malus": 1761,
            "PeriodeAnnee": 2
        },
        {
            "id": 380,
            "annee": 2020,
            "minCO2": 168,
            "maxCO2": 168,
            "malus": 1901,
            "PeriodeAnnee": 2
        },
        {
            "id": 381,
            "annee": 2020,
            "minCO2": 169,
            "maxCO2": 169,
            "malus": 2049,
            "PeriodeAnnee": 2
        },
        {
            "id": 382,
            "annee": 2020,
            "minCO2": 170,
            "maxCO2": 170,
            "malus": 2205,
            "PeriodeAnnee": 2
        },
        {
            "id": 383,
            "annee": 2020,
            "minCO2": 171,
            "maxCO2": 171,
            "malus": 2370,
            "PeriodeAnnee": 2
        },
        {
            "id": 384,
            "annee": 2020,
            "minCO2": 172,
            "maxCO2": 172,
            "malus": 2544,
            "PeriodeAnnee": 2
        },
        {
            "id": 385,
            "annee": 2020,
            "minCO2": 173,
            "maxCO2": 173,
            "malus": 2726,
            "PeriodeAnnee": 2
        },
        {
            "id": 386,
            "annee": 2020,
            "minCO2": 174,
            "maxCO2": 174,
            "malus": 2918,
            "PeriodeAnnee": 2
        },
        {
            "id": 387,
            "annee": 2020,
            "minCO2": 175,
            "maxCO2": 175,
            "malus": 3119,
            "PeriodeAnnee": 2
        },
        {
            "id": 388,
            "annee": 2020,
            "minCO2": 176,
            "maxCO2": 176,
            "malus": 3331,
            "PeriodeAnnee": 2
        },
        {
            "id": 389,
            "annee": 2020,
            "minCO2": 177,
            "maxCO2": 177,
            "malus": 3552,
            "PeriodeAnnee": 2
        },
        {
            "id": 390,
            "annee": 2020,
            "minCO2": 178,
            "maxCO2": 178,
            "malus": 3784,
            "PeriodeAnnee": 2
        },
        {
            "id": 391,
            "annee": 2020,
            "minCO2": 179,
            "maxCO2": 179,
            "malus": 4026,
            "PeriodeAnnee": 2
        },
        {
            "id": 392,
            "annee": 2020,
            "minCO2": 180,
            "maxCO2": 180,
            "malus": 4279,
            "PeriodeAnnee": 2
        },
        {
            "id": 393,
            "annee": 2020,
            "minCO2": 181,
            "maxCO2": 181,
            "malus": 4543,
            "PeriodeAnnee": 2
        },
        {
            "id": 394,
            "annee": 2020,
            "minCO2": 182,
            "maxCO2": 182,
            "malus": 4818,
            "PeriodeAnnee": 2
        },
        {
            "id": 395,
            "annee": 2020,
            "minCO2": 183,
            "maxCO2": 183,
            "malus": 5105,
            "PeriodeAnnee": 2
        },
        {
            "id": 396,
            "annee": 2020,
            "minCO2": 184,
            "maxCO2": 184,
            "malus": 5404,
            "PeriodeAnnee": 2
        },
        {
            "id": 397,
            "annee": 2020,
            "minCO2": 185,
            "maxCO2": 185,
            "malus": 5715,
            "PeriodeAnnee": 2
        },
        {
            "id": 398,
            "annee": 2020,
            "minCO2": 186,
            "maxCO2": 186,
            "malus": 6039,
            "PeriodeAnnee": 2
        },
        {
            "id": 399,
            "annee": 2020,
            "minCO2": 187,
            "maxCO2": 187,
            "malus": 6375,
            "PeriodeAnnee": 2
        },
        {
            "id": 400,
            "annee": 2020,
            "minCO2": 188,
            "maxCO2": 188,
            "malus": 6724,
            "PeriodeAnnee": 2
        },
        {
            "id": 401,
            "annee": 2020,
            "minCO2": 189,
            "maxCO2": 189,
            "malus": 7086,
            "PeriodeAnnee": 2
        },
        {
            "id": 402,
            "annee": 2020,
            "minCO2": 190,
            "maxCO2": 190,
            "malus": 7462,
            "PeriodeAnnee": 2
        },
        {
            "id": 403,
            "annee": 2020,
            "minCO2": 191,
            "maxCO2": 191,
            "malus": 7851,
            "PeriodeAnnee": 2
        },
        {
            "id": 404,
            "annee": 2020,
            "minCO2": 192,
            "maxCO2": 192,
            "malus": 8254,
            "PeriodeAnnee": 2
        },
        {
            "id": 405,
            "annee": 2020,
            "minCO2": 193,
            "maxCO2": 193,
            "malus": 8671,
            "PeriodeAnnee": 2
        },
        {
            "id": 406,
            "annee": 2020,
            "minCO2": 194,
            "maxCO2": 194,
            "malus": 9103,
            "PeriodeAnnee": 2
        },
        {
            "id": 407,
            "annee": 2020,
            "minCO2": 195,
            "maxCO2": 195,
            "malus": 9550,
            "PeriodeAnnee": 2
        },
        {
            "id": 408,
            "annee": 2020,
            "minCO2": 196,
            "maxCO2": 196,
            "malus": 10011,
            "PeriodeAnnee": 2
        },
        {
            "id": 409,
            "annee": 2020,
            "minCO2": 197,
            "maxCO2": 197,
            "malus": 10488,
            "PeriodeAnnee": 2
        },
        {
            "id": 410,
            "annee": 2020,
            "minCO2": 198,
            "maxCO2": 198,
            "malus": 10980,
            "PeriodeAnnee": 2
        },
        {
            "id": 411,
            "annee": 2020,
            "minCO2": 199,
            "maxCO2": 199,
            "malus": 11488,
            "PeriodeAnnee": 2
        },
        {
            "id": 412,
            "annee": 2020,
            "minCO2": 200,
            "maxCO2": 200,
            "malus": 12012,
            "PeriodeAnnee": 2
        },
        {
            "id": 413,
            "annee": 2020,
            "minCO2": 201,
            "maxCO2": 201,
            "malus": 12552,
            "PeriodeAnnee": 2
        },
        {
            "id": 415,
            "annee": 2020,
            "minCO2": 174,
            "maxCO2": 174,
            "malus": 13109,
            "PeriodeAnnee": 1
        },
        {
            "id": 416,
            "annee": 2020,
            "minCO2": 175,
            "maxCO2": 175,
            "malus": 13682,
            "PeriodeAnnee": 1
        },
        {
            "id": 417,
            "annee": 2020,
            "minCO2": 176,
            "maxCO2": 176,
            "malus": 14273,
            "PeriodeAnnee": 1
        },
        {
            "id": 418,
            "annee": 2020,
            "minCO2": 177,
            "maxCO2": 177,
            "malus": 14881,
            "PeriodeAnnee": 1
        },
        {
            "id": 419,
            "annee": 2020,
            "minCO2": 178,
            "maxCO2": 178,
            "malus": 15506,
            "PeriodeAnnee": 1
        },
        {
            "id": 420,
            "annee": 2020,
            "minCO2": 179,
            "maxCO2": 179,
            "malus": 16149,
            "PeriodeAnnee": 1
        },
        {
            "id": 421,
            "annee": 2020,
            "minCO2": 180,
            "maxCO2": 180,
            "malus": 16810,
            "PeriodeAnnee": 1
        },
        {
            "id": 422,
            "annee": 2020,
            "minCO2": 181,
            "maxCO2": 181,
            "malus": 17490,
            "PeriodeAnnee": 1
        },
        {
            "id": 423,
            "annee": 2020,
            "minCO2": 182,
            "maxCO2": 182,
            "malus": 18188,
            "PeriodeAnnee": 1
        },
        {
            "id": 424,
            "annee": 2020,
            "minCO2": 183,
            "maxCO2": 183,
            "malus": 18905,
            "PeriodeAnnee": 1
        },
        {
            "id": 425,
            "annee": 2020,
            "minCO2": 184,
            "maxCO2": 184,
            "malus": 19641,
            "PeriodeAnnee": 1
        },
        {
            "id": 426,
            "annee": 2020,
            "minCO2": 185,
            "maxCO2": 9999999,
            "malus": 20000,
            "PeriodeAnnee": 1
        },
        {
            "id": 427,
            "annee": 2020,
            "minCO2": 202,
            "maxCO2": 202,
            "malus": 13109,
            "PeriodeAnnee": 2
        },
        {
            "id": 428,
            "annee": 2020,
            "minCO2": 203,
            "maxCO2": 203,
            "malus": 13682,
            "PeriodeAnnee": 2
        },
        {
            "id": 429,
            "annee": 2020,
            "minCO2": 204,
            "maxCO2": 204,
            "malus": 14273,
            "PeriodeAnnee": 2
        },
        {
            "id": 430,
            "annee": 2020,
            "minCO2": 205,
            "maxCO2": 205,
            "malus": 14881,
            "PeriodeAnnee": 2
        },
        {
            "id": 431,
            "annee": 2020,
            "minCO2": 206,
            "maxCO2": 206,
            "malus": 15506,
            "PeriodeAnnee": 2
        },
        {
            "id": 432,
            "annee": 2020,
            "minCO2": 207,
            "maxCO2": 207,
            "malus": 16149,
            "PeriodeAnnee": 2
        },
        {
            "id": 433,
            "annee": 2020,
            "minCO2": 208,
            "maxCO2": 208,
            "malus": 16810,
            "PeriodeAnnee": 2
        },
        {
            "id": 434,
            "annee": 2020,
            "minCO2": 209,
            "maxCO2": 209,
            "malus": 17490,
            "PeriodeAnnee": 2
        },
        {
            "id": 435,
            "annee": 2020,
            "minCO2": 210,
            "maxCO2": 210,
            "malus": 18188,
            "PeriodeAnnee": 2
        },
        {
            "id": 436,
            "annee": 2020,
            "minCO2": 211,
            "maxCO2": 211,
            "malus": 18905,
            "PeriodeAnnee": 2
        },
        {
            "id": 437,
            "annee": 2020,
            "minCO2": 212,
            "maxCO2": 212,
            "malus": 19641,
            "PeriodeAnnee": 2
        },
        {
            "id": 438,
            "annee": 2020,
            "minCO2": 213,
            "maxCO2": 9999999,
            "malus": 20000,
            "PeriodeAnnee": 2
        },
        {
            "id": 440,
            "annee": 2021,
            "minCO2": 0,
            "maxCO2": 132,
            "malus": 0,
            "PeriodeAnnee": 1
        },
        {
            "id": 441,
            "annee": 2021,
            "minCO2": 133,
            "maxCO2": 133,
            "malus": 50,
            "PeriodeAnnee": 1
        },
        {
            "id": 442,
            "annee": 2021,
            "minCO2": 134,
            "maxCO2": 134,
            "malus": 75,
            "PeriodeAnnee": 1
        },
        {
            "id": 443,
            "annee": 2021,
            "minCO2": 135,
            "maxCO2": 135,
            "malus": 100,
            "PeriodeAnnee": 1
        },
        {
            "id": 444,
            "annee": 2021,
            "minCO2": 136,
            "maxCO2": 136,
            "malus": 125,
            "PeriodeAnnee": 1
        },
        {
            "id": 445,
            "annee": 2021,
            "minCO2": 137,
            "maxCO2": 137,
            "malus": 150,
            "PeriodeAnnee": 1
        },
        {
            "id": 446,
            "annee": 2021,
            "minCO2": 138,
            "maxCO2": 138,
            "malus": 170,
            "PeriodeAnnee": 1
        },
        {
            "id": 447,
            "annee": 2021,
            "minCO2": 139,
            "maxCO2": 139,
            "malus": 190,
            "PeriodeAnnee": 1
        },
        {
            "id": 448,
            "annee": 2021,
            "minCO2": 140,
            "maxCO2": 140,
            "malus": 210,
            "PeriodeAnnee": 1
        },
        {
            "id": 449,
            "annee": 2021,
            "minCO2": 141,
            "maxCO2": 141,
            "malus": 230,
            "PeriodeAnnee": 1
        },
        {
            "id": 450,
            "annee": 2021,
            "minCO2": 142,
            "maxCO2": 142,
            "malus": 240,
            "PeriodeAnnee": 1
        },
        {
            "id": 451,
            "annee": 2021,
            "minCO2": 143,
            "maxCO2": 143,
            "malus": 260,
            "PeriodeAnnee": 1
        },
        {
            "id": 452,
            "annee": 2021,
            "minCO2": 144,
            "maxCO2": 144,
            "malus": 280,
            "PeriodeAnnee": 1
        },
        {
            "id": 453,
            "annee": 2021,
            "minCO2": 145,
            "maxCO2": 145,
            "malus": 310,
            "PeriodeAnnee": 1
        },
        {
            "id": 454,
            "annee": 2021,
            "minCO2": 146,
            "maxCO2": 146,
            "malus": 330,
            "PeriodeAnnee": 1
        },
        {
            "id": 455,
            "annee": 2021,
            "minCO2": 147,
            "maxCO2": 147,
            "malus": 360,
            "PeriodeAnnee": 1
        },
        {
            "id": 456,
            "annee": 2021,
            "minCO2": 148,
            "maxCO2": 148,
            "malus": 400,
            "PeriodeAnnee": 1
        },
        {
            "id": 457,
            "annee": 2021,
            "minCO2": 149,
            "maxCO2": 149,
            "malus": 450,
            "PeriodeAnnee": 1
        },
        {
            "id": 458,
            "annee": 2021,
            "minCO2": 150,
            "maxCO2": 150,
            "malus": 540,
            "PeriodeAnnee": 1
        },
        {
            "id": 459,
            "annee": 2021,
            "minCO2": 151,
            "maxCO2": 151,
            "malus": 650,
            "PeriodeAnnee": 1
        },
        {
            "id": 460,
            "annee": 2021,
            "minCO2": 152,
            "maxCO2": 152,
            "malus": 740,
            "PeriodeAnnee": 1
        },
        {
            "id": 461,
            "annee": 2021,
            "minCO2": 153,
            "maxCO2": 153,
            "malus": 818,
            "PeriodeAnnee": 1
        },
        {
            "id": 462,
            "annee": 2021,
            "minCO2": 154,
            "maxCO2": 154,
            "malus": 898,
            "PeriodeAnnee": 1
        },
        {
            "id": 463,
            "annee": 2021,
            "minCO2": 155,
            "maxCO2": 155,
            "malus": 983,
            "PeriodeAnnee": 1
        },
        {
            "id": 464,
            "annee": 2021,
            "minCO2": 156,
            "maxCO2": 156,
            "malus": 1074,
            "PeriodeAnnee": 1
        },
        {
            "id": 465,
            "annee": 2021,
            "minCO2": 157,
            "maxCO2": 157,
            "malus": 1172,
            "PeriodeAnnee": 1
        },
        {
            "id": 466,
            "annee": 2021,
            "minCO2": 158,
            "maxCO2": 158,
            "malus": 1276,
            "PeriodeAnnee": 1
        },
        {
            "id": 467,
            "annee": 2021,
            "minCO2": 159,
            "maxCO2": 159,
            "malus": 1386,
            "PeriodeAnnee": 1
        },
        {
            "id": 468,
            "annee": 2021,
            "minCO2": 160,
            "maxCO2": 160,
            "malus": 1504,
            "PeriodeAnnee": 1
        },
        {
            "id": 469,
            "annee": 2021,
            "minCO2": 161,
            "maxCO2": 161,
            "malus": 1629,
            "PeriodeAnnee": 1
        },
        {
            "id": 470,
            "annee": 2021,
            "minCO2": 162,
            "maxCO2": 162,
            "malus": 1761,
            "PeriodeAnnee": 1
        },
        {
            "id": 471,
            "annee": 2021,
            "minCO2": 163,
            "maxCO2": 163,
            "malus": 1901,
            "PeriodeAnnee": 1
        },
        {
            "id": 472,
            "annee": 2021,
            "minCO2": 164,
            "maxCO2": 164,
            "malus": 2049,
            "PeriodeAnnee": 1
        },
        {
            "id": 473,
            "annee": 2021,
            "minCO2": 165,
            "maxCO2": 165,
            "malus": 2205,
            "PeriodeAnnee": 1
        },
        {
            "id": 474,
            "annee": 2021,
            "minCO2": 166,
            "maxCO2": 166,
            "malus": 2370,
            "PeriodeAnnee": 1
        },
        {
            "id": 475,
            "annee": 2021,
            "minCO2": 167,
            "maxCO2": 167,
            "malus": 2544,
            "PeriodeAnnee": 1
        },
        {
            "id": 476,
            "annee": 2021,
            "minCO2": 168,
            "maxCO2": 168,
            "malus": 2726,
            "PeriodeAnnee": 1
        },
        {
            "id": 477,
            "annee": 2021,
            "minCO2": 169,
            "maxCO2": 169,
            "malus": 2918,
            "PeriodeAnnee": 1
        },
        {
            "id": 478,
            "annee": 2021,
            "minCO2": 170,
            "maxCO2": 170,
            "malus": 3119,
            "PeriodeAnnee": 1
        },
        {
            "id": 479,
            "annee": 2021,
            "minCO2": 171,
            "maxCO2": 171,
            "malus": 3331,
            "PeriodeAnnee": 1
        },
        {
            "id": 480,
            "annee": 2021,
            "minCO2": 172,
            "maxCO2": 172,
            "malus": 3552,
            "PeriodeAnnee": 1
        },
        {
            "id": 481,
            "annee": 2021,
            "minCO2": 173,
            "maxCO2": 173,
            "malus": 3784,
            "PeriodeAnnee": 1
        },
        {
            "id": 482,
            "annee": 2021,
            "minCO2": 174,
            "maxCO2": 174,
            "malus": 4026,
            "PeriodeAnnee": 1
        },
        {
            "id": 483,
            "annee": 2021,
            "minCO2": 175,
            "maxCO2": 175,
            "malus": 4279,
            "PeriodeAnnee": 1
        },
        {
            "id": 484,
            "annee": 2021,
            "minCO2": 176,
            "maxCO2": 176,
            "malus": 4543,
            "PeriodeAnnee": 1
        },
        {
            "id": 485,
            "annee": 2021,
            "minCO2": 177,
            "maxCO2": 177,
            "malus": 4818,
            "PeriodeAnnee": 1
        },
        {
            "id": 486,
            "annee": 2021,
            "minCO2": 178,
            "maxCO2": 178,
            "malus": 5105,
            "PeriodeAnnee": 1
        },
        {
            "id": 487,
            "annee": 2021,
            "minCO2": 179,
            "maxCO2": 179,
            "malus": 5404,
            "PeriodeAnnee": 1
        },
        {
            "id": 488,
            "annee": 2021,
            "minCO2": 180,
            "maxCO2": 180,
            "malus": 5715,
            "PeriodeAnnee": 1
        },
        {
            "id": 489,
            "annee": 2021,
            "minCO2": 181,
            "maxCO2": 181,
            "malus": 6039,
            "PeriodeAnnee": 1
        },
        {
            "id": 490,
            "annee": 2021,
            "minCO2": 182,
            "maxCO2": 182,
            "malus": 6375,
            "PeriodeAnnee": 1
        },
        {
            "id": 491,
            "annee": 2021,
            "minCO2": 183,
            "maxCO2": 183,
            "malus": 6724,
            "PeriodeAnnee": 1
        },
        {
            "id": 492,
            "annee": 2021,
            "minCO2": 184,
            "maxCO2": 184,
            "malus": 7086,
            "PeriodeAnnee": 1
        },
        {
            "id": 493,
            "annee": 2021,
            "minCO2": 185,
            "maxCO2": 185,
            "malus": 7462,
            "PeriodeAnnee": 1
        },
        {
            "id": 494,
            "annee": 2021,
            "minCO2": 186,
            "maxCO2": 186,
            "malus": 7851,
            "PeriodeAnnee": 1
        },
        {
            "id": 495,
            "annee": 2021,
            "minCO2": 187,
            "maxCO2": 187,
            "malus": 8254,
            "PeriodeAnnee": 1
        },
        {
            "id": 496,
            "annee": 2021,
            "minCO2": 188,
            "maxCO2": 188,
            "malus": 8671,
            "PeriodeAnnee": 1
        },
        {
            "id": 497,
            "annee": 2021,
            "minCO2": 189,
            "maxCO2": 189,
            "malus": 9103,
            "PeriodeAnnee": 1
        },
        {
            "id": 498,
            "annee": 2021,
            "minCO2": 190,
            "maxCO2": 190,
            "malus": 9550,
            "PeriodeAnnee": 1
        },
        {
            "id": 499,
            "annee": 2021,
            "minCO2": 191,
            "maxCO2": 191,
            "malus": 10011,
            "PeriodeAnnee": 1
        },
        {
            "id": 500,
            "annee": 2021,
            "minCO2": 192,
            "maxCO2": 192,
            "malus": 10488,
            "PeriodeAnnee": 1
        },
        {
            "id": 501,
            "annee": 2021,
            "minCO2": 193,
            "maxCO2": 193,
            "malus": 10980,
            "PeriodeAnnee": 1
        },
        {
            "id": 502,
            "annee": 2021,
            "minCO2": 194,
            "maxCO2": 194,
            "malus": 11488,
            "PeriodeAnnee": 1
        },
        {
            "id": 503,
            "annee": 2021,
            "minCO2": 195,
            "maxCO2": 195,
            "malus": 12012,
            "PeriodeAnnee": 1
        },
        {
            "id": 504,
            "annee": 2021,
            "minCO2": 196,
            "maxCO2": 196,
            "malus": 12552,
            "PeriodeAnnee": 1
        },
        {
            "id": 505,
            "annee": 2021,
            "minCO2": 197,
            "maxCO2": 197,
            "malus": 13109,
            "PeriodeAnnee": 1
        },
        {
            "id": 506,
            "annee": 2021,
            "minCO2": 198,
            "maxCO2": 198,
            "malus": 13682,
            "PeriodeAnnee": 1
        },
        {
            "id": 507,
            "annee": 2021,
            "minCO2": 199,
            "maxCO2": 199,
            "malus": 14273,
            "PeriodeAnnee": 1
        },
        {
            "id": 508,
            "annee": 2021,
            "minCO2": 200,
            "maxCO2": 200,
            "malus": 14881,
            "PeriodeAnnee": 1
        },
        {
            "id": 509,
            "annee": 2021,
            "minCO2": 201,
            "maxCO2": 201,
            "malus": 15506,
            "PeriodeAnnee": 1
        },
        {
            "id": 510,
            "annee": 2021,
            "minCO2": 202,
            "maxCO2": 202,
            "malus": 16149,
            "PeriodeAnnee": 1
        },
        {
            "id": 511,
            "annee": 2021,
            "minCO2": 203,
            "maxCO2": 203,
            "malus": 16810,
            "PeriodeAnnee": 1
        },
        {
            "id": 512,
            "annee": 2021,
            "minCO2": 204,
            "maxCO2": 204,
            "malus": 17490,
            "PeriodeAnnee": 1
        },
        {
            "id": 513,
            "annee": 2021,
            "minCO2": 205,
            "maxCO2": 205,
            "malus": 18188,
            "PeriodeAnnee": 1
        },
        {
            "id": 514,
            "annee": 2021,
            "minCO2": 206,
            "maxCO2": 206,
            "malus": 18905,
            "PeriodeAnnee": 1
        },
        {
            "id": 515,
            "annee": 2021,
            "minCO2": 207,
            "maxCO2": 207,
            "malus": 19641,
            "PeriodeAnnee": 1
        },
        {
            "id": 516,
            "annee": 2021,
            "minCO2": 208,
            "maxCO2": 208,
            "malus": 20396,
            "PeriodeAnnee": 1
        },
        {
            "id": 517,
            "annee": 2021,
            "minCO2": 209,
            "maxCO2": 209,
            "malus": 21171,
            "PeriodeAnnee": 1
        },
        {
            "id": 518,
            "annee": 2021,
            "minCO2": 210,
            "maxCO2": 210,
            "malus": 21966,
            "PeriodeAnnee": 1
        },
        {
            "id": 519,
            "annee": 2021,
            "minCO2": 211,
            "maxCO2": 211,
            "malus": 22781,
            "PeriodeAnnee": 1
        },
        {
            "id": 520,
            "annee": 2021,
            "minCO2": 212,
            "maxCO2": 212,
            "malus": 23616,
            "PeriodeAnnee": 1
        },
        {
            "id": 521,
            "annee": 2021,
            "minCO2": 213,
            "maxCO2": 213,
            "malus": 24472,
            "PeriodeAnnee": 1
        },
        {
            "id": 522,
            "annee": 2021,
            "minCO2": 214,
            "maxCO2": 214,
            "malus": 25349,
            "PeriodeAnnee": 1
        },
        {
            "id": 523,
            "annee": 2021,
            "minCO2": 215,
            "maxCO2": 215,
            "malus": 26247,
            "PeriodeAnnee": 1
        },
        {
            "id": 524,
            "annee": 2021,
            "minCO2": 216,
            "maxCO2": 216,
            "malus": 27166,
            "PeriodeAnnee": 1
        },
        {
            "id": 525,
            "annee": 2021,
            "minCO2": 217,
            "maxCO2": 217,
            "malus": 28107,
            "PeriodeAnnee": 1
        },
        {
            "id": 526,
            "annee": 2021,
            "minCO2": 218,
            "maxCO2": 218,
            "malus": 29070,
            "PeriodeAnnee": 1
        },
        {
            "id": 527,
            "annee": 2021,
            "minCO2": 219,
            "maxCO2": 9999999,
            "malus": 30000,
            "PeriodeAnnee": 1
        }
    ],
    "taxeAdditionnelleCO2": [
        {
            "id": 1,
            "annee": 2013,
            "tranche": 1,
            "minCO2": 0,
            "maxCO2": 200,
            "taxeParGramme": 0
        },
        {
            "id": 2,
            "annee": 2013,
            "tranche": 2,
            "minCO2": 201,
            "maxCO2": 250,
            "taxeParGramme": 2
        },
        {
            "id": 3,
            "annee": 2013,
            "tranche": 3,
            "minCO2": 251,
            "maxCO2": 9999999,
            "taxeParGramme": 4
        },
        {
            "id": 4,
            "annee": 2014,
            "tranche": 1,
            "minCO2": 0,
            "maxCO2": 200,
            "taxeParGramme": 0
        },
        {
            "id": 5,
            "annee": 2014,
            "tranche": 2,
            "minCO2": 201,
            "maxCO2": 250,
            "taxeParGramme": 2
        },
        {
            "id": 6,
            "annee": 2014,
            "tranche": 3,
            "minCO2": 251,
            "maxCO2": 9999999,
            "taxeParGramme": 4
        },
        {
            "id": 7,
            "annee": 2015,
            "tranche": 1,
            "minCO2": 0,
            "maxCO2": 200,
            "taxeParGramme": 0
        },
        {
            "id": 8,
            "annee": 2015,
            "tranche": 2,
            "minCO2": 201,
            "maxCO2": 250,
            "taxeParGramme": 2
        },
        {
            "id": 9,
            "annee": 2015,
            "tranche": 3,
            "minCO2": 251,
            "maxCO2": 9999999,
            "taxeParGramme": 4
        },
        {
            "id": 10,
            "annee": 2016,
            "tranche": 1,
            "minCO2": 0,
            "maxCO2": 200,
            "taxeParGramme": 0
        },
        {
            "id": 11,
            "annee": 2016,
            "tranche": 2,
            "minCO2": 201,
            "maxCO2": 250,
            "taxeParGramme": 2
        },
        {
            "id": 12,
            "annee": 2016,
            "tranche": 3,
            "minCO2": 251,
            "maxCO2": 9999999,
            "taxeParGramme": 4
        },
        {
            "id": 13,
            "annee": 2017,
            "tranche": 1,
            "minCO2": 0,
            "maxCO2": 200,
            "taxeParGramme": 0
        },
        {
            "id": 14,
            "annee": 2017,
            "tranche": 2,
            "minCO2": 201,
            "maxCO2": 250,
            "taxeParGramme": 2
        },
        {
            "id": 15,
            "annee": 2017,
            "tranche": 3,
            "minCO2": 251,
            "maxCO2": 9999999,
            "taxeParGramme": 4
        }
    ],
    "taxeAdditionnelleCV": [
        {
            "id": 1,
            "annee": 2013,
            "minCV": 0,
            "maxCV": 9,
            "taxe": 0
        },
        {
            "id": 2,
            "annee": 2013,
            "minCV": 10,
            "maxCV": 14,
            "taxe": 100
        },
        {
            "id": 3,
            "annee": 2013,
            "minCV": 15,
            "maxCV": 99,
            "taxe": 300
        },
        {
            "id": 4,
            "annee": 2014,
            "minCV": 0,
            "maxCV": 9,
            "taxe": 0
        },
        {
            "id": 5,
            "annee": 2014,
            "minCV": 10,
            "maxCV": 14,
            "taxe": 100
        },
        {
            "id": 6,
            "annee": 2014,
            "minCV": 15,
            "maxCV": 99,
            "taxe": 300
        },
        {
            "id": 7,
            "annee": 2015,
            "minCV": 0,
            "maxCV": 9,
            "taxe": 0
        },
        {
            "id": 8,
            "annee": 2015,
            "minCV": 10,
            "maxCV": 14,
            "taxe": 100
        },
        {
            "id": 9,
            "annee": 2015,
            "minCV": 15,
            "maxCV": 99,
            "taxe": 300
        },
        {
            "id": 10,
            "annee": 2016,
            "minCV": 0,
            "maxCV": 9,
            "taxe": 0
        },
        {
            "id": 11,
            "annee": 2016,
            "minCV": 10,
            "maxCV": 14,
            "taxe": 100
        },
        {
            "id": 12,
            "annee": 2016,
            "minCV": 15,
            "maxCV": 99,
            "taxe": 300
        },
        {
            "id": 13,
            "annee": 2017,
            "minCV": 0,
            "maxCV": 9,
            "taxe": 0
        },
        {
            "id": 14,
            "annee": 2017,
            "minCV": 10,
            "maxCV": 14,
            "taxe": 100
        },
        {
            "id": 15,
            "annee": 2017,
            "minCV": 15,
            "maxCV": 99,
            "taxe": 300
        },
        {
            "id": 16,
            "annee": 2018,
            "minCV": 0,
            "maxCV": 9,
            "taxe": 0
        },
        {
            "id": 17,
            "annee": 2018,
            "minCV": 10,
            "maxCV": 11,
            "taxe": 100
        },
        {
            "id": 18,
            "annee": 2018,
            "minCV": 12,
            "maxCV": 14,
            "taxe": 300
        },
        {
            "id": 19,
            "annee": 2018,
            "minCV": 15,
            "maxCV": 9999999,
            "taxe": 1000
        },
        {
            "id": 20,
            "annee": 2019,
            "minCV": 0,
            "maxCV": 9,
            "taxe": 0
        },
        {
            "id": 21,
            "annee": 2019,
            "minCV": 10,
            "maxCV": 11,
            "taxe": 100
        },
        {
            "id": 22,
            "annee": 2019,
            "minCV": 12,
            "maxCV": 14,
            "taxe": 300
        },
        {
            "id": 23,
            "annee": 2019,
            "minCV": 15,
            "maxCV": 9999999,
            "taxe": 1000
        },
        {
            "id": 24,
            "annee": 2020,
            "minCV": 0,
            "maxCV": 9,
            "taxe": 0
        },
        {
            "id": 25,
            "annee": 2020,
            "minCV": 10,
            "maxCV": 11,
            "taxe": 100
        },
        {
            "id": 26,
            "annee": 2020,
            "minCV": 12,
            "maxCV": 14,
            "taxe": 300
        },
        {
            "id": 27,
            "annee": 2020,
            "minCV": 15,
            "maxCV": 9999999,
            "taxe": 1000
        }
    ],
    "taxeRegionale": [
        {
            "id": 1,
            "regionId": 42,
            "taxe": 42,
            "exoVehiculePropre": 100
        },
        {
            "id": 4,
            "regionId": 28,
            "taxe": 35,
            "exoVehiculePropre": 100
        },
        {
            "id": 6,
            "regionId": 53,
            "taxe": 51,
            "exoVehiculePropre": 50
        },
        {
            "id": 7,
            "regionId": 24,
            "taxe": 49.8,
            "exoVehiculePropre": 50
        },
        {
            "id": 8,
            "regionId": 21,
            "taxe": 42,
            "exoVehiculePropre": 100
        },
        {
            "id": 9,
            "regionId": 94,
            "taxe": 27,
            "exoVehiculePropre": 100
        },
        {
            "id": 11,
            "regionId": 1,
            "taxe": 41,
            "exoVehiculePropre": 0
        },
        {
            "id": 12,
            "regionId": 3,
            "taxe": 42.5,
            "exoVehiculePropre": 0
        },
        {
            "id": 14,
            "regionId": 11,
            "taxe": 46.15,
            "exoVehiculePropre": 100
        },
        {
            "id": 15,
            "regionId": 4,
            "taxe": 51,
            "exoVehiculePropre": 0
        },
        {
            "id": 18,
            "regionId": 41,
            "taxe": 42,
            "exoVehiculePropre": 100
        },
        {
            "id": 19,
            "regionId": 2,
            "taxe": 30,
            "exoVehiculePropre": 0
        },
        {
            "id": 21,
            "regionId": 31,
            "taxe": 33,
            "exoVehiculePropre": 100
        },
        {
            "id": 22,
            "regionId": 52,
            "taxe": 48,
            "exoVehiculePropre": 100
        },
        {
            "id": 23,
            "regionId": 22,
            "taxe": 33,
            "exoVehiculePropre": 100
        },
        {
            "id": 25,
            "regionId": 93,
            "taxe": 51.2,
            "exoVehiculePropre": 100
        },
        {
            "id": 27,
            "regionId": 6,
            "taxe": 30,
            "exoVehiculePropre": 0
        },
        {
            "id": 28,
            "regionId": 75,
            "taxe": 41,
            "exoVehiculePropre": 100
        },
        {
            "id": 29,
            "regionId": 76,
            "taxe": 44,
            "exoVehiculePropre": 100
        },
        {
            "id": 30,
            "regionId": 84,
            "taxe": 43,
            "exoVehiculePropre": 100
        },
        {
            "id": 31,
            "regionId": 27,
            "taxe": 51,
            "exoVehiculePropre": 100
        }
    ],
    "regions": [
        {
            "id": 1,
            "codeRegion": 1,
            "name": "Guadeloupe"
        },
        {
            "id": 2,
            "codeRegion": 2,
            "name": "Martinique"
        },
        {
            "id": 3,
            "codeRegion": 3,
            "name": "Guyane"
        },
        {
            "id": 4,
            "codeRegion": 4,
            "name": "La Réunion"
        },
        {
            "id": 5,
            "codeRegion": 6,
            "name": "Mayotte"
        },
        {
            "id": 6,
            "codeRegion": 11,
            "name": "Île-de-France"
        },
        {
            "id": 7,
            "codeRegion": 21,
            "name": "Champagne-Ardennes (Grand Est)"
        },
        {
            "id": 8,
            "codeRegion": 22,
            "name": "Picardie (Hauts-de-France)"
        },
        {
            "id": 10,
            "codeRegion": 24,
            "name": "Centre-Val de Loire"
        },
        {
            "id": 13,
            "codeRegion": 31,
            "name": "Nord-Pas-de-Calais (Hauts-de-France)"
        },
        {
            "id": 14,
            "codeRegion": 41,
            "name": "Lorraine (Grand Est)"
        },
        {
            "id": 15,
            "codeRegion": 42,
            "name": "Alsace (Grand Est)"
        },
        {
            "id": 17,
            "codeRegion": 52,
            "name": "Pays de la Loire"
        },
        {
            "id": 18,
            "codeRegion": 53,
            "name": "Bretagne"
        },
        {
            "id": 26,
            "codeRegion": 93,
            "name": "Provence-Alpes-Côte d'Azur"
        },
        {
            "id": 27,
            "codeRegion": 94,
            "name": "Corse"
        },
        {
            "id": 28,
            "codeRegion": 75,
            "name": "Nouvelle Aquitaine"
        },
        {
            "id": 29,
            "codeRegion": 76,
            "name": "Occitanie"
        },
        {
            "id": 30,
            "codeRegion": 28,
            "name": "Normandie"
        },
        {
            "id": 31,
            "codeRegion": 27,
            "name": "Bourgogne-Franche-Comté"
        },
        {
            "id": 32,
            "codeRegion": 84,
            "name": "Auvergne-Rhône-Alpes"
        }
    ],
    "departements": [
        {
            "id": 1,
            "codeDep": "01",
            "name": "Ain",
            "regionId": 84
        },
        {
            "id": 2,
            "codeDep": "02",
            "name": "Aisne",
            "regionId": 22
        },
        {
            "id": 3,
            "codeDep": "03",
            "name": "Allier",
            "regionId": 84
        },
        {
            "id": 4,
            "codeDep": "04",
            "name": "Alpes-de-Haute-Provence",
            "regionId": 93
        },
        {
            "id": 5,
            "codeDep": "06",
            "name": "Alpes-Maritimes",
            "regionId": 93
        },
        {
            "id": 6,
            "codeDep": "07",
            "name": "Ardèche",
            "regionId": 84
        },
        {
            "id": 7,
            "codeDep": "08",
            "name": "Ardennes",
            "regionId": 21
        },
        {
            "id": 8,
            "codeDep": "09",
            "name": "Ariège",
            "regionId": 76
        },
        {
            "id": 9,
            "codeDep": "10",
            "name": "Aube",
            "regionId": 21
        },
        {
            "id": 10,
            "codeDep": "11",
            "name": "Aude",
            "regionId": 76
        },
        {
            "id": 11,
            "codeDep": "12",
            "name": "Aveyron",
            "regionId": 76
        },
        {
            "id": 12,
            "codeDep": "67",
            "name": "Bas-Rhin",
            "regionId": 42
        },
        {
            "id": 13,
            "codeDep": "13",
            "name": "Bouches-du-Rhône",
            "regionId": 93
        },
        {
            "id": 14,
            "codeDep": "14",
            "name": "Calvados",
            "regionId": 28
        },
        {
            "id": 15,
            "codeDep": "15",
            "name": "Cantal",
            "regionId": 84
        },
        {
            "id": 16,
            "codeDep": "16",
            "name": "Charente",
            "regionId": 75
        },
        {
            "id": 17,
            "codeDep": "17",
            "name": "Charente-Maritime",
            "regionId": 75
        },
        {
            "id": 18,
            "codeDep": "18",
            "name": "Cher",
            "regionId": 24
        },
        {
            "id": 19,
            "codeDep": "19",
            "name": "Corrèze",
            "regionId": 75
        },
        {
            "id": 20,
            "codeDep": "2A",
            "name": "Corse-du-Sud",
            "regionId": 94
        },
        {
            "id": 21,
            "codeDep": "21",
            "name": "Côte-d'Or",
            "regionId": 27
        },
        {
            "id": 22,
            "codeDep": "22",
            "name": "Côtes-d'Armor",
            "regionId": 53
        },
        {
            "id": 23,
            "codeDep": "23",
            "name": "Creuse",
            "regionId": 75
        },
        {
            "id": 24,
            "codeDep": "79",
            "name": "Deux-Sèvres",
            "regionId": 75
        },
        {
            "id": 25,
            "codeDep": "24",
            "name": "Dordogne",
            "regionId": 75
        },
        {
            "id": 26,
            "codeDep": "25",
            "name": "Doubs",
            "regionId": 27
        },
        {
            "id": 27,
            "codeDep": "26",
            "name": "Drôme",
            "regionId": 84
        },
        {
            "id": 28,
            "codeDep": "91",
            "name": "Essonne",
            "regionId": 11
        },
        {
            "id": 29,
            "codeDep": "27",
            "name": "Eure",
            "regionId": 28
        },
        {
            "id": 30,
            "codeDep": "28",
            "name": "Eure-et-Loir",
            "regionId": 24
        },
        {
            "id": 31,
            "codeDep": "29",
            "name": "Finistère",
            "regionId": 53
        },
        {
            "id": 32,
            "codeDep": "30",
            "name": "Gard",
            "regionId": 76
        },
        {
            "id": 33,
            "codeDep": "32",
            "name": "Gers",
            "regionId": 76
        },
        {
            "id": 34,
            "codeDep": "33",
            "name": "Gironde",
            "regionId": 75
        },
        {
            "id": 35,
            "codeDep": "971",
            "name": "Guadeloupe",
            "regionId": 1
        },
        {
            "id": 36,
            "codeDep": "973",
            "name": "Guyane",
            "regionId": 3
        },
        {
            "id": 37,
            "codeDep": "2B",
            "name": "Haute-Corse",
            "regionId": 94
        },
        {
            "id": 38,
            "codeDep": "31",
            "name": "Haute-Garonne",
            "regionId": 76
        },
        {
            "id": 39,
            "codeDep": "43",
            "name": "Haute-Loire",
            "regionId": 84
        },
        {
            "id": 40,
            "codeDep": "52",
            "name": "Haute-Marne",
            "regionId": 21
        },
        {
            "id": 41,
            "codeDep": "05",
            "name": "Hautes-Alpes",
            "regionId": 93
        },
        {
            "id": 42,
            "codeDep": "70",
            "name": "Haute-Saône",
            "regionId": 27
        },
        {
            "id": 43,
            "codeDep": "74",
            "name": "Haute-Savoie",
            "regionId": 84
        },
        {
            "id": 44,
            "codeDep": "65",
            "name": "Hautes-Pyrénées",
            "regionId": 76
        },
        {
            "id": 45,
            "codeDep": "87",
            "name": "Haute-Vienne",
            "regionId": 75
        },
        {
            "id": 46,
            "codeDep": "68",
            "name": "Haut-Rhin",
            "regionId": 42
        },
        {
            "id": 47,
            "codeDep": "92",
            "name": "Hauts-de-Seine",
            "regionId": 11
        },
        {
            "id": 48,
            "codeDep": "34",
            "name": "Hérault",
            "regionId": 76
        },
        {
            "id": 49,
            "codeDep": "35",
            "name": "Ille-et-Vilaine",
            "regionId": 53
        },
        {
            "id": 50,
            "codeDep": "36",
            "name": "Indre",
            "regionId": 24
        },
        {
            "id": 51,
            "codeDep": "37",
            "name": "Indre-et-Loire",
            "regionId": 24
        },
        {
            "id": 52,
            "codeDep": "38",
            "name": "Isère",
            "regionId": 84
        },
        {
            "id": 53,
            "codeDep": "39",
            "name": "Jura",
            "regionId": 27
        },
        {
            "id": 54,
            "codeDep": "974",
            "name": "La Réunion",
            "regionId": 4
        },
        {
            "id": 55,
            "codeDep": "40",
            "name": "Landes",
            "regionId": 75
        },
        {
            "id": 56,
            "codeDep": "42",
            "name": "Loire",
            "regionId": 84
        },
        {
            "id": 57,
            "codeDep": "44",
            "name": "Loire-Atlantique",
            "regionId": 52
        },
        {
            "id": 58,
            "codeDep": "45",
            "name": "Loiret",
            "regionId": 24
        },
        {
            "id": 59,
            "codeDep": "41",
            "name": "Loir-et-Cher",
            "regionId": 24
        },
        {
            "id": 60,
            "codeDep": "46",
            "name": "Lot",
            "regionId": 76
        },
        {
            "id": 61,
            "codeDep": "47",
            "name": "Lot-et-Garonne",
            "regionId": 75
        },
        {
            "id": 62,
            "codeDep": "48",
            "name": "Lozère",
            "regionId": 76
        },
        {
            "id": 63,
            "codeDep": "49",
            "name": "Maine-et-Loire",
            "regionId": 52
        },
        {
            "id": 64,
            "codeDep": "50",
            "name": "Manche",
            "regionId": 28
        },
        {
            "id": 65,
            "codeDep": "51",
            "name": "Marne",
            "regionId": 21
        },
        {
            "id": 66,
            "codeDep": "972",
            "name": "Martinique",
            "regionId": 2
        },
        {
            "id": 67,
            "codeDep": "53",
            "name": "Mayenne",
            "regionId": 52
        },
        {
            "id": 68,
            "codeDep": "976",
            "name": "Mayotte",
            "regionId": 6
        },
        {
            "id": 69,
            "codeDep": "54",
            "name": "Meurthe-et-Moselle",
            "regionId": 41
        },
        {
            "id": 70,
            "codeDep": "55",
            "name": "Meuse",
            "regionId": 41
        },
        {
            "id": 71,
            "codeDep": "56",
            "name": "Morbihan",
            "regionId": 53
        },
        {
            "id": 72,
            "codeDep": "57",
            "name": "Moselle",
            "regionId": 41
        },
        {
            "id": 73,
            "codeDep": "58",
            "name": "Nièvre",
            "regionId": 27
        },
        {
            "id": 74,
            "codeDep": "59",
            "name": "Nord",
            "regionId": 31
        },
        {
            "id": 75,
            "codeDep": "60",
            "name": "Oise",
            "regionId": 22
        },
        {
            "id": 76,
            "codeDep": "61",
            "name": "Orne",
            "regionId": 28
        },
        {
            "id": 77,
            "codeDep": "75",
            "name": "Paris",
            "regionId": 11
        },
        {
            "id": 78,
            "codeDep": "62",
            "name": "Pas-de-Calais",
            "regionId": 31
        },
        {
            "id": 79,
            "codeDep": "63",
            "name": "Puy-de-Dôme",
            "regionId": 84
        },
        {
            "id": 80,
            "codeDep": "64",
            "name": "Pyrénées-Atlantiques",
            "regionId": 75
        },
        {
            "id": 81,
            "codeDep": "66",
            "name": "Pyrénées-Orientales",
            "regionId": 76
        },
        {
            "id": 82,
            "codeDep": "69",
            "name": "Rhône",
            "regionId": 84
        },
        {
            "id": 83,
            "codeDep": "71",
            "name": "Saône-et-Loire",
            "regionId": 27
        },
        {
            "id": 84,
            "codeDep": "72",
            "name": "Sarthe",
            "regionId": 52
        },
        {
            "id": 85,
            "codeDep": "73",
            "name": "Savoie",
            "regionId": 84
        },
        {
            "id": 86,
            "codeDep": "77",
            "name": "Seine-et-Marne",
            "regionId": 11
        },
        {
            "id": 87,
            "codeDep": "76",
            "name": "Seine-Maritime",
            "regionId": 28
        },
        {
            "id": 88,
            "codeDep": "93",
            "name": "Seine-Saint-Denis",
            "regionId": 11
        },
        {
            "id": 89,
            "codeDep": "80",
            "name": "Somme",
            "regionId": 22
        },
        {
            "id": 90,
            "codeDep": "81",
            "name": "Tarn",
            "regionId": 76
        },
        {
            "id": 91,
            "codeDep": "82",
            "name": "Tarn-et-Garonne",
            "regionId": 76
        },
        {
            "id": 92,
            "codeDep": "90",
            "name": "Territoire de Belfort",
            "regionId": 27
        },
        {
            "id": 93,
            "codeDep": "94",
            "name": "Val-de-Marne",
            "regionId": 11
        },
        {
            "id": 94,
            "codeDep": "95",
            "name": "Val-d'Oise",
            "regionId": 11
        },
        {
            "id": 95,
            "codeDep": "83",
            "name": "Var",
            "regionId": 93
        },
        {
            "id": 96,
            "codeDep": "84",
            "name": "Vaucluse",
            "regionId": 93
        },
        {
            "id": 97,
            "codeDep": "85",
            "name": "Vendée",
            "regionId": 52
        },
        {
            "id": 98,
            "codeDep": "86",
            "name": "Vienne",
            "regionId": 75
        },
        {
            "id": 99,
            "codeDep": "88",
            "name": "Vosges",
            "regionId": 41
        },
        {
            "id": 100,
            "codeDep": "89",
            "name": "Yonne",
            "regionId": 27
        },
        {
            "id": 101,
            "codeDep": "78",
            "name": "Yvelines",
            "regionId": 11
        }
    ],
    "energies": [
        {
            "id": 1,
            "energie": "Essence (ES)",
            "pourcentMalusCO2": 100,
            "pourcentTaxeAdditionnelle": 100,
            "energiePropre": false,
            "energieTresPropre": false
        },
        {
            "id": 2,
            "energie": "Gazole (GO)",
            "pourcentMalusCO2": 100,
            "pourcentTaxeAdditionnelle": 100,
            "energiePropre": false,
            "energieTresPropre": false
        },
        {
            "id": 3,
            "energie": "Véhicule hybride fonctionnant à l'essence électricité ou gazole électricité (EE, EH, GL, GH)",
            "pourcentMalusCO2": 100,
            "pourcentTaxeAdditionnelle": 100,
            "energiePropre": true,
            "energieTresPropre": false
        },
        {
            "id": 4,
            "energie": "Véhicule fonctionnant exclusivement ou non au GPL (GP, EG, ER, EQ, G2, PE, PH)",
            "pourcentMalusCO2": 100,
            "pourcentTaxeAdditionnelle": 100,
            "energiePropre": true,
            "energieTresPropre": false
        },
        {
            "id": 5,
            "energie": "Véhicule fonctionnant exclusivement au superéthanol E85 (FE)",
            "pourcentMalusCO2": 60,
            "pourcentTaxeAdditionnelle": 100,
            "energiePropre": true,
            "energieTresPropre": false
        },
        {
            "id": 6,
            "energie": "Véhicule hybride fonctionnant avec du superéthanol (FG, FN, FL,FH)",
            "pourcentMalusCO2": 100,
            "pourcentTaxeAdditionnelle": 100,
            "energiePropre": true,
            "energieTresPropre": false
        },
        {
            "id": 7,
            "energie": "Véhicule fonctionnant exclusivement ou non au gaz naturel (GN, EN, GF, 1A, EM, EP, GM, GQ, NE, NH)",
            "pourcentMalusCO2": 100,
            "pourcentTaxeAdditionnelle": 100,
            "energiePropre": true,
            "energieTresPropre": false
        },
        {
            "id": 8,
            "energie": "Véhicule fonctionnant à l'électricité (EL),  à l'hydrogène (H2) ou combinant les 2 (HE, HH)",
            "pourcentMalusCO2": 100,
            "pourcentTaxeAdditionnelle": 100,
            "energiePropre": true,
            "energieTresPropre": true
        },
        {
            "id": 9,
            "energie": "Ethanol (ET)",
            "pourcentMalusCO2": 100,
            "pourcentTaxeAdditionnelle": 100,
            "energiePropre": false,
            "energieTresPropre": false
        },
        {
            "id": 10,
            "energie": "Gazogène (GA)",
            "pourcentMalusCO2": 100,
            "pourcentTaxeAdditionnelle": 100,
            "energiePropre": false,
            "energieTresPropre": false
        },
        {
            "id": 11,
            "energie": "Autres hydrocarbures gazeux comprimés (GZ)",
            "pourcentMalusCO2": 100,
            "pourcentTaxeAdditionnelle": 100,
            "energiePropre": false,
            "energieTresPropre": false
        },
        {
            "id": 12,
            "energie": "Mélange gazogène-gazole (GG)",
            "pourcentMalusCO2": 100,
            "pourcentTaxeAdditionnelle": 100,
            "energiePropre": false,
            "energieTresPropre": false
        },
        {
            "id": 13,
            "energie": "Mélange gazogène-essence (GE)",
            "pourcentMalusCO2": 100,
            "pourcentTaxeAdditionnelle": 100,
            "energiePropre": false,
            "energieTresPropre": false
        },
        {
            "id": 14,
            "energie": "Pétrole lampant (PL)",
            "pourcentMalusCO2": 100,
            "pourcentTaxeAdditionnelle": 100,
            "energiePropre": false,
            "energieTresPropre": false
        },
        {
            "id": 15,
            "energie": "Air comprimé (AC)",
            "pourcentMalusCO2": 100,
            "pourcentTaxeAdditionnelle": 100,
            "energiePropre": false,
            "energieTresPropre": false
        }
    ],
    "prelevementadditionnel": [
        {
            "id": 1,
            "annee": 2018,
            "borneinf": 1,
            "bornesup": 1,
            "montantCV": 0
        },
        {
            "id": 2,
            "annee": 2018,
            "borneinf": 2,
            "bornesup": 2,
            "montantCV": 0
        },
        {
            "id": 3,
            "annee": 2018,
            "borneinf": 3,
            "bornesup": 3,
            "montantCV": 0
        },
        {
            "id": 4,
            "annee": 2018,
            "borneinf": 4,
            "bornesup": 4,
            "montantCV": 0
        },
        {
            "id": 5,
            "annee": 2018,
            "borneinf": 5,
            "bornesup": 5,
            "montantCV": 0
        },
        {
            "id": 6,
            "annee": 2018,
            "borneinf": 6,
            "bornesup": 6,
            "montantCV": 0
        },
        {
            "id": 7,
            "annee": 2018,
            "borneinf": 7,
            "bornesup": 7,
            "montantCV": 0
        },
        {
            "id": 8,
            "annee": 2018,
            "borneinf": 8,
            "bornesup": 8,
            "montantCV": 0
        },
        {
            "id": 9,
            "annee": 2018,
            "borneinf": 9,
            "bornesup": 9,
            "montantCV": 0
        },
        {
            "id": 10,
            "annee": 2018,
            "borneinf": 10,
            "bornesup": 10,
            "montantCV": 0
        },
        {
            "id": 11,
            "annee": 2018,
            "borneinf": 11,
            "bornesup": 11,
            "montantCV": 0
        },
        {
            "id": 12,
            "annee": 2018,
            "borneinf": 12,
            "bornesup": 12,
            "montantCV": 0
        },
        {
            "id": 13,
            "annee": 2018,
            "borneinf": 13,
            "bornesup": 13,
            "montantCV": 0
        },
        {
            "id": 14,
            "annee": 2018,
            "borneinf": 14,
            "bornesup": 14,
            "montantCV": 0
        },
        {
            "id": 15,
            "annee": 2018,
            "borneinf": 15,
            "bornesup": 15,
            "montantCV": 0
        },
        {
            "id": 16,
            "annee": 2018,
            "borneinf": 16,
            "bornesup": 16,
            "montantCV": 0
        },
        {
            "id": 17,
            "annee": 2018,
            "borneinf": 17,
            "bornesup": 17,
            "montantCV": 0
        },
        {
            "id": 18,
            "annee": 2018,
            "borneinf": 18,
            "bornesup": 18,
            "montantCV": 0
        },
        {
            "id": 19,
            "annee": 2018,
            "borneinf": 19,
            "bornesup": 19,
            "montantCV": 0
        },
        {
            "id": 20,
            "annee": 2018,
            "borneinf": 20,
            "bornesup": 20,
            "montantCV": 0
        },
        {
            "id": 21,
            "annee": 2018,
            "borneinf": 21,
            "bornesup": 21,
            "montantCV": 0
        },
        {
            "id": 22,
            "annee": 2018,
            "borneinf": 22,
            "bornesup": 22,
            "montantCV": 0
        },
        {
            "id": 23,
            "annee": 2018,
            "borneinf": 23,
            "bornesup": 23,
            "montantCV": 0
        },
        {
            "id": 24,
            "annee": 2018,
            "borneinf": 24,
            "bornesup": 24,
            "montantCV": 0
        },
        {
            "id": 25,
            "annee": 2018,
            "borneinf": 25,
            "bornesup": 25,
            "montantCV": 0
        },
        {
            "id": 26,
            "annee": 2018,
            "borneinf": 26,
            "bornesup": 26,
            "montantCV": 0
        },
        {
            "id": 27,
            "annee": 2018,
            "borneinf": 27,
            "bornesup": 27,
            "montantCV": 0
        },
        {
            "id": 28,
            "annee": 2018,
            "borneinf": 28,
            "bornesup": 28,
            "montantCV": 0
        },
        {
            "id": 29,
            "annee": 2018,
            "borneinf": 29,
            "bornesup": 29,
            "montantCV": 0
        },
        {
            "id": 30,
            "annee": 2018,
            "borneinf": 30,
            "bornesup": 30,
            "montantCV": 0
        },
        {
            "id": 31,
            "annee": 2018,
            "borneinf": 31,
            "bornesup": 31,
            "montantCV": 0
        },
        {
            "id": 32,
            "annee": 2018,
            "borneinf": 32,
            "bornesup": 32,
            "montantCV": 0
        },
        {
            "id": 33,
            "annee": 2018,
            "borneinf": 33,
            "bornesup": 33,
            "montantCV": 0
        },
        {
            "id": 34,
            "annee": 2018,
            "borneinf": 34,
            "bornesup": 34,
            "montantCV": 0
        },
        {
            "id": 35,
            "annee": 2018,
            "borneinf": 35,
            "bornesup": 35,
            "montantCV": 0
        },
        {
            "id": 36,
            "annee": 2018,
            "borneinf": 36,
            "bornesup": 36,
            "montantCV": 500
        },
        {
            "id": 37,
            "annee": 2018,
            "borneinf": 37,
            "bornesup": 37,
            "montantCV": 1000
        },
        {
            "id": 38,
            "annee": 2018,
            "borneinf": 38,
            "bornesup": 38,
            "montantCV": 1500
        },
        {
            "id": 39,
            "annee": 2018,
            "borneinf": 39,
            "bornesup": 39,
            "montantCV": 2000
        },
        {
            "id": 40,
            "annee": 2018,
            "borneinf": 40,
            "bornesup": 40,
            "montantCV": 2500
        },
        {
            "id": 41,
            "annee": 2018,
            "borneinf": 41,
            "bornesup": 41,
            "montantCV": 3000
        },
        {
            "id": 42,
            "annee": 2018,
            "borneinf": 42,
            "bornesup": 42,
            "montantCV": 3500
        },
        {
            "id": 43,
            "annee": 2018,
            "borneinf": 43,
            "bornesup": 43,
            "montantCV": 4000
        },
        {
            "id": 44,
            "annee": 2018,
            "borneinf": 44,
            "bornesup": 44,
            "montantCV": 4500
        },
        {
            "id": 45,
            "annee": 2018,
            "borneinf": 45,
            "bornesup": 45,
            "montantCV": 5000
        },
        {
            "id": 46,
            "annee": 2018,
            "borneinf": 46,
            "bornesup": 46,
            "montantCV": 5500
        },
        {
            "id": 47,
            "annee": 2018,
            "borneinf": 47,
            "bornesup": 47,
            "montantCV": 6000
        },
        {
            "id": 48,
            "annee": 2018,
            "borneinf": 48,
            "bornesup": 48,
            "montantCV": 6500
        },
        {
            "id": 49,
            "annee": 2018,
            "borneinf": 49,
            "bornesup": 49,
            "montantCV": 7000
        },
        {
            "id": 50,
            "annee": 2018,
            "borneinf": 50,
            "bornesup": 50,
            "montantCV": 7500
        },
        {
            "id": 51,
            "annee": 2018,
            "borneinf": 51,
            "bornesup": 9999999,
            "montantCV": 8000
        }
    ]
}
