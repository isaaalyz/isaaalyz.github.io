import React from "react";

export default class List extends React.Component{

    state = { 
        books: [ 
            { 
                id: 1, 
                name: "Trono de Vidro", 
                director: "Sarah J. Maas", 
            }, 
            { 
                id: 2, 
                name: "Dias Perfeitos", 
                director: "Raphael Montes", 
            }, 
            { 
                id: 3, 
                name: "Acotar", 
                director: "Sarah J. Maas", 
            }, 
            {
            id: 4, 
                name: "Jantar Secreto", 
                director: "Raphael Montes", 
            }, 
        ] 
    }; 
  
    render() { 
        return ( 
            <div style={{marginTop: "10px", color:"pink"}}>{
                this.state.books.map((bok) =>(
                    <div key={bok.id}> 
                        <h2>{bok.name}</h2> 
                        <h4>{bok.director}</h4>
                    </div>
                ))
            }
            </div> 
        )

    } 
}



