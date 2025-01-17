import React from 'react';

const auto = [{alimentazione: 'benzina', marca: 'Fiat', modello: 'Panda', cilindrata: 900, anno: 2010}, {alimentazione: 'diesel', marca: 'Fiat', modello: 'Punto', cilindrata: 1200, anno: 2015}, {alimentazione: 'benzina', marca: 'Ford', modello: 'Fiesta', cilindrata: 1400, anno: 2018}, {alimentazione: 'diesel', marca: 'Ford', modello: 'Focus', cilindrata: 1600, anno: 2019}, {alimentazione: 'benzina', marca: 'Fiat', modello: '500', cilindrata: 1000, anno: 2017}, {alimentazione: 'elettrica', marca: 'Tesla', modello: 'Model 3', cilindrata: 0, anno: 2020}];

function App() {
    return (
        <ul>
            {auto.map((car, index) => 
                car.alimentazione == 'elettrica' ? (<li>{car.marca} {car.modello} {car.anno}</li>) : null
            )}
        </ul>
    );
}