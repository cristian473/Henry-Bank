import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listaContactos } from "../../actions/UserActions";
import './searchContact.css';

export function SearchAutocomplete ({ arrIdContactos, listContact ,listaContactos }) {
  // [2,3]

  useEffect(() => {
    [2, 3].map(idContact => {
      listaContactos(idContact)
    })
  }, [])


  function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].nombreContacto.substr(0, val.length).toUpperCase() === val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].nombreContacto.substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].nombreContacto.substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i].nombreContacto + "'>";
            b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode === 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode === 38) {
          currentFocus--;
          addActive(x);
        } else if (e.keyCode === 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt !== x[i] && elmnt !== inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  /* listContact = CONTACTOS -----¬ 
  [ 
    {nombreContacto: 'Junior', idContacto: 2},
    {nombreContacto: 'gatito', idContacto: 3}
  ]
  */

  return (
    <div>
      <form autoComplete="off">
        <div className="autocomplete" style={{width:"300px"}}>
          <input id="myInput" type="text" name="myCountry" placeholder="Country"
            onFocus={(e) => autocomplete(e.target, listContact)}
          />  
        </div>
        <input type="button" value="enviar" onClick={() => {
          let getNameAndId;
          const nombre = document.getElementById('myInput').value //Argentina, Brazil, etc...
          for( let i = 0; i < listContact.length; i++ ){
            if (listContact[i].nombreContacto === nombre) getNameAndId = listContact[i];
          }
        }}/>
      </form>
    </div>
  )
}

function mapStateToProps(state){
  return {
    listContact: state.usuario.listContact,
  }
}

export default connect(mapStateToProps,{ listaContactos })(SearchAutocomplete);

