import { useEffect, useState } from "react"
import generate_numbers from "../functions/generate_numbers"
import buble_sort from "../functions/buble_sort"
import selectionSort from "../functions/selection_sort"
import insertionSort from "../functions/insertion_sort"

export default function Visualizer(){

    const [sorting_speed, set_sorting_speed] = useState(5)
    const [number_of_items, set_number_of_items] = useState(100)

    const [cisla, set_cisla] = useState(() => generate_numbers(number_of_items))

    useEffect(() => {
        set_cisla(generate_numbers(number_of_items))
    }, [number_of_items])


    return(
        <>
            <div className="inputs_cont">
                <div className="input_item">
                    <label htmlFor="sorting_speed">Visualization slowdown </label>
                    <input id="sorting_speed" type="range" min="1" max="100" value={sorting_speed} onChange={(e) => set_sorting_speed(e.target.value)} />
                </div>
                
                <div className="input_item">
                    <label htmlFor="number_of_items">Number of items to sort </label>
                    <input type="number" value={number_of_items} onChange={(e) => set_number_of_items(e.target.value)} />
                </div>
            </div>


            <div className="button_cont">
                <button className="sorting_button" onClick={(e) => buble_sort([...cisla], set_cisla, sorting_speed)}>Buble sort</button>
                <button className="sorting_button" onClick={(e) => selectionSort([...cisla], set_cisla, sorting_speed)}>Selection sort</button>
                <button className="sorting_button" onClick={(e) => insertionSort([...cisla], set_cisla, sorting_speed)}>Insertion sort</button>
                <button className="sorting_button" onClick={(e) => set_cisla(generate_numbers(number_of_items))}>Reset</button>
            </div>

            <div className="sort_cont">
                    {cisla.map((cislo, index) => 
                        <div key={index.toString()} className="sort_item" style={{ height: `${cislo}px`}}></div>
                    )}
            </div>

        </>
    )
}