import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "./styles.css";


const PokemonList = ({ pokeList, itemsPerPage, addToFavorites }) => {
    // console.log('props', pokeList)
    // We start with an empty list of pokeList.
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        try {
            // Fetch pokeList from another resources.
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading pokeList from ${itemOffset} to ${endOffset}`);

            const pokeURLs = [];


            for (let i = itemOffset; i < endOffset; i++) {
                if (i < 898) {
                    pokeURLs.push(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
                }
                else {
                    pokeURLs.push(`https://pokeapi.co/api/v2/pokemon/${i + 9102}`)
                }
            }

            // console.log(urls)
            currPagePokemon(pokeURLs);
            const length = pokeList.length ? pokeList.length : 1118;

            setPageCount(Math.ceil(length / itemsPerPage));
            // setCurrentPokemon(pokeList.slice(itemOffset, endOffset));
        } catch (error) {
            console.log(error);
        }

        // WE need to make a if condition so our currPagePokemon doesnt load if we dont have any data

        //
        // if (currentPokemon) currPagePokemon();

    }, [itemOffset, itemsPerPage]);

    const currPagePokemon = (pokeURLs) => {
        try {
            // axios.all makes  all concurrent requests
            // instaeda of doing
            const pokeArr = [];
            axios.all(
                pokeURLs.map(async (url) => {
                    const response = await axios.get(url);
                    // console.log(response.data)
                    pokeArr.push(response.data);
                    setCurrentPokemon(pokeArr.flat());
                    // console.log('POKE ARRAY', pokeArr)
                })
            );
        } catch (error) { }
    };

    const Pokemon = () => {
        return (
            <div id="pokemon-container">
                {currentPokemon &&
                    currentPokemon.map((pokemon) => (
                        <div className="card poke-card" key={pokemon.id}>
                            <img
                                src={pokemon.sprites.front_shiny ?
                                    pokemon.sprites.front_shiny : pokemon}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{pokemon.name}</h5>
                                <p className="card-text">Order: {pokemon.id}</p>
                                <button className='btn btn-danger' onClick={() => addToFavorites(pokemon)}>Like</button>
                                <a href="" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div >
        );
    };

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % pokeList.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    console.log("current pokemon", currentPokemon);

    return (
        <div>
            <Pokemon />
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default PokemonList;
