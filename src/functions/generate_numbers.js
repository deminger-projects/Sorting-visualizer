export default function generate_numbers(pocet_cisel){

    var cisla = []

    for (let index = 0; index < pocet_cisel; index++) {
        cisla.push(Math.floor(Math.random() * 201) + 10)   
    }

    return cisla

}