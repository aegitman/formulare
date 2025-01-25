 export function numarInLitere(numar) {
    if (numar < 0 || numar > 1000000000 || !Number.isInteger(numar)) {
      return "Introduceți un număr întreg între 0 și 1.000.000.000.";
    }
  
    const unitati = ["", "unu", "doi", "trei", "patru", "cinci", "șase", "șapte", "opt", "nouă"];
    const zeci = ["", "", "douăzeci", "treizeci", "patruzeci", "cincizeci", "șaizeci", "șaptezeci", "optzeci", "nouăzeci"];
    const speciale = ["zece", "unsprezece", "doisprezece", "treisprezece", "paisprezece", "cincisprezece", "șaisprezece", "șaptesprezece", "optsprezece", "nouăsprezece"];
    const sute = ["", "o sută", "două sute", "trei sute", "patru sute", "cinci sute", "șase sute", "șapte sute", "opt sute", "nouă sute"];
  
    function numarMic(numar) {
      if (numar < 10) return unitati[numar];
      if (numar < 20) return speciale[numar - 10];
      const unitate = numar % 10;
      const zece = Math.floor(numar / 10);
      return zeci[zece] + (unitate ? " și " + unitati[unitate] : "");
    }
  
    function numarMediu(numar) {
      const suteNumar = Math.floor(numar / 100);
      const rest = numar % 100;
      return (
        sute[suteNumar] +
        (rest ? " " + numarMic(rest) : "")
      ).trim();
    }
  
    function numarMare(numar) {
      if (numar < 1000) return numarMediu(numar);
  
      const mii = Math.floor(numar / 1000);
      const rest = numar % 1000;
      const textMii =
        mii === 1 ? "o mie" : numarMediu(mii) + " mii";
      return (
        textMii +
        (rest ? " " + numarMediu(rest) : "")
      ).trim();
    }
  
    function numarFoarteMare(numar) {
      if (numar < 1000000) return numarMare(numar);
  
      const milioane = Math.floor(numar / 1000000);
      const rest = numar % 1000000;
      const textMilioane =
        milioane === 1 ? "un milion" : numarMare(milioane) + " milioane";
      return (
        textMilioane +
        (rest ? " " + numarMare(rest) : "")
      ).trim();
    }
  
    if (numar === 0) return "zero";
    if (numar === 1000000000) return "un miliard";
    return numarFoarteMare(numar);
  }