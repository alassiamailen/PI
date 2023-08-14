import React from "react";
import PageNumbers from "./pageNumbers";
import style from "./paginate.module.css";

const Paginate = ({countriesPage, allCountries, paginate, currentpage}) => {

    const arrayPage = PageNumbers(countriesPage, allCountries)

    return(
        
        <nav>
            <ul className={style.divCont}>
                {arrayPage && arrayPage.map((number, index) => (
                        <div key={index}  >
                            {currentpage === number ?
                                <button  onClick={() => paginate(number)}>{number}</button>
                                :
                                <button  onClick={() => paginate(number)}>{number}</button>
                            }
                        </div>
                        )
                    )
                }
            </ul>
        </nav>
    )
    
}

export default Paginate