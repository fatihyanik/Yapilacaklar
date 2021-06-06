import React, { useState, StrictMode } from "react";

function List() {
  var [listem, setListe] = useState(["Deneme"]);

  function yapikacakEkle(event) {
    var yapilacak = event.target.gorevAciklama.value;
    document.getElementsByName("gorevAciklama")[0].value = "";
    setListe([...listem, yapilacak]);
    event.preventDefault();
  }

  function yapiacakSil(event) {
    var id = event.target.value;
    console.log(event.target.value);
    listem.splice(id, 1);
    setListe([...listem]);
    event.preventDefault();
  }

  return (
    <StrictMode>
      <div className="kutu shadow-sm baslik">
        <h1>Yapılacaklar Listesi</h1>
      </div>

      <div className="kutu shadow-sm">
        {listem.map(function (icerik, sira) {
          return (
            <form key={sira}>
              <div className="veri">
                <input
                  onChange={yapiacakSil}
                  type="checkbox"
                  name="id"
                  value={sira}
                ></input>
                <p>{icerik}</p>
              </div>
            </form>
          );
        })}

        <form className="veri" onSubmit={yapikacakEkle}>
          <input
            type="text"
            name="gorevAciklama"
            placeholder="Görevi yazınız"
            autoComplete="off"
          />
          <button type="submit">+</button>
        </form>
      </div>
    </StrictMode>
  );
}

export default List;
