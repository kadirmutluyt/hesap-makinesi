function hesapla(islem) {
      const sayi1 = parseFloat(document.getElementById("sayi1").value);
      const sayi2 = parseFloat(document.getElementById("sayi2").value);
      let sonuc;

      if (isNaN(sayi1) || isNaN(sayi2)) {
        sonuc = "Please enter both numbers!";
      } else {
        switch (islem) {
          case '+':
            sonuc = sayi1 + sayi2;
            break;
          case '-':
            sonuc = sayi1 - sayi2;
            break;
          case '*':
            sonuc = sayi1 * sayi2;
            break;
          case '/':
            if (sayi2 === 0) {
              sonuc = "Cannot be divided by zero!";
            } else {
              sonuc = sayi1 / sayi2;
            }
            break;
        }
      }

      document.getElementById("sonuc").innerText =  sonuc;
    }