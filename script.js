const convertButton = document.querySelector(".convert-button")
const selectConverterTo = document.querySelector(".select-converter-para")
const selectConverter = document.querySelector(".select-converter-de")

function convertValues() {
   const inputValue = document.querySelector(".input-value").value
   const valorParaConverter = document.querySelector(".p-resultado")
   const valorConvertido = document.querySelector(".p-resultado-convertido")

   const dolarToRealToday = 4.93
   const dolarToEuroToday = 0.93
   const dolarToLibraToday = 0.80
   const dolarToBitcoinToday = 0.000039

   const euroToRealToday = 5.28
   const euroToLibraToday = 0.86
   const euroToBitcoinToday = 0.000042

   const libraToRealToday = 6.13
   const libraToBitcoinToday = 0.000048

   const bitcoinToRealToday = 127031

   // MOEDA CONVERTER DE

   if (selectConverter.value == "real-converter") {
      valorParaConverter.innerHTML = new Intl.NumberFormat("pt-br", {
         style: "currency",
         currency: "BRL"
      }).format(inputValue)
   }
   if (selectConverter.value == "dolar-converter") {
      valorParaConverter.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputValue)
   }
   if (selectConverter.value == "euro-converter") {
      valorParaConverter.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputValue)
   }
   if (selectConverter.value == "libra-converter") {
      valorParaConverter.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(inputValue)
   }
   if (selectConverter.value == "bitcoin-converter") {
      valorParaConverter.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "BTC"
      }).format(inputValue)
   }

   //MOEDA CONVERTER PARA

   //REAL TO DOLAR
   
   if (selectConverterTo.value == "dolar" && selectConverter.value == "real-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputValue / dolarToRealToday)
   }

   // DOLAR TO REAL

   else if (selectConverterTo.value == "real" && selectConverter.value == "dolar-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("pt-br", {
         style: "currency",
         currency: "BRL"
      }).format(inputValue * dolarToRealToday)
   }

   // EURO TO DOLAR

   else if (selectConverterTo.value == "dolar" && selectConverter.value == "euro-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputValue / dolarToEuroToday)
   }

   // DOLAR TO REAL

   else if (selectConverterTo.value == "euro" && selectConverter.value == "dolar-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputValue * dolarToEuroToday)
   }

   // LIBRA TO DOLAR

   else if (selectConverterTo.value == "dolar" && selectConverter.value == "libra-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputValue / dolarToLibraToday)
   }

   // DOLAR TO LIBRA

   else if (selectConverterTo.value == "libra" && selectConverter.value == "dolar-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(inputValue * dolarToLibraToday)
   }

   // BITCOIN TO DOLAR

   else if (selectConverterTo.value == "dolar" && selectConverter.value == "bitcoin-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputValue / dolarToBitcoinToday)
   }

   // DOLAR TO BITCOIN

   else if (selectConverterTo.value == "bitcoin" && selectConverter.value == "dolar-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "BTC"
      }).format(inputValue * dolarToBitcoinToday)
   }

   /* DOLAR TO DOLAR */

   else if (selectConverterTo.value == "dolar" && selectConverter.value == "dolar-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputValue * 1)
   }

   //REAL TO EURO

   else if (selectConverterTo.value == "euro" && selectConverter.value == "real-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputValue / euroToRealToday)
   }

   // EURO TO REAL

   else if (selectConverterTo.value == "real" && selectConverter.value == "euro-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("pt-br", {
         style: "currency",
         currency: "BRL"
      }).format(inputValue * euroToRealToday)
   }

   // LIBRA TO EURO

   else if (selectConverterTo.value == "euro" && selectConverter.value == "libra-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(inputValue / euroToLibraToday)
   }


   // EURO TO LIBRA

   else if (selectConverterTo.value == "libra" && selectConverter.value == "euro-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputValue * euroToLibraToday)
   }

   // BITCOIN TO EURO

   else if (selectConverterTo.value == "euro" && selectConverter.value == "bitcoin-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "BTC"
      }).format(inputValue / euroToBitcoinToday)
   }


   // EURO TO BITCOIN

   else if (selectConverterTo.value == "bitcoin" && selectConverter.value == "euro-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputValue * euroToBitcoinToday)
   }

   /* EURO TO EURO */

   else if (selectConverterTo.value == "euro" && selectConverter.value == "euro-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputValue * 1)
   }

   // REAL TO LIBRA

   else if (selectConverterTo.value == "libra" && selectConverter.value == "real-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("pt-br", {
         style: "currency",
         currency: "BRL"
      }).format(inputValue / libraToRealToday)
   }


   // LIBRA TO REAL

   else if (selectConverterTo.value == "real" && selectConverter.value == "libra-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(inputValue * libraToRealToday)
   }

   // BITCOIN TO LIBRA

   else if (selectConverterTo.value == "libra" && selectConverter.value == "bitcoin-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "BTC"
      }).format(inputValue / libraToBitcoinToday)
   }


   // LIBRA TO BITCOIN

   else if (selectConverterTo.value == "bitcoin" && selectConverter.value == "libra-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(inputValue * libraToBitcoinToday)
   }

   /* LIBRA TO LIBRA */

   else if (selectConverterTo.value == "libra" && selectConverter.value == "libra-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(inputValue * 1)
   }

   // BITCOIN TO LIBRA

   else if (selectConverterTo.value == "bitcoin" && selectConverter.value == "real-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("pt-br", {
         style: "currency",
         currency: "BRL"
      }).format(inputValue / bitcoinToRealToday)
   }


   // LIBRA TO BITCOIN

   else if (selectConverterTo.value == "real" && selectConverter.value == "bitcoin-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "BTC"
      }).format(inputValue * bitcoinToRealToday)
   }

   /* BITCOIN TO REAL */

   else if (selectConverterTo.value == "bitcoin" && selectConverter.value == "bitcoin-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "BTC"
      }).format(inputValue * 1)
   }

   /* REAL TO REAL */

   else if (selectConverterTo.value == "real" && selectConverter.value == "real-converter") {
      valorConvertido.innerHTML = new Intl.NumberFormat("pt-br", {
         style: "currency",
         currency: "BRL"
      }).format(inputValue * 1)
   }

}

function changeCurrency() {
   const currencyNameTo = document.querySelector(".p-moeda-convertida")
   const convertImgTo = document.querySelector(".logo-convertida")

   if (selectConverterTo.value == "dolar") {
      currencyNameTo.innerHTML = "Dólar Americano"
      convertImgTo.src = "./assets/eua.png"
   }

   if (selectConverterTo.value == "euro") {
      currencyNameTo.innerHTML = "Euro"
      convertImgTo.src = "./assets/euro.png"
   }

   if (selectConverterTo.value == "libra") {
      currencyNameTo.innerHTML = "Libra"
      convertImgTo.src = "./assets/libra.png"
   }

   if (selectConverterTo.value == "bitcoin") {
      currencyNameTo.innerHTML = "BitCoin"
      convertImgTo.src = "./assets/bitcoin.png"
   }

   if (selectConverterTo.value == "real") {
      currencyNameTo.innerHTML = "Real"
      convertImgTo.src = "./assets/brasil.png"
   }

   convertValues()

}

function changeConverter() {
   const currencyName = document.querySelector(".p-moeda")
   const convertImg = document.querySelector(".logo-converter")

   if (selectConverter.value == "real-converter") {
      currencyName.innerHTML = "Real"
      convertImg.src = "./assets/brasil.png"
   }

   if (selectConverter.value == "dolar-converter") {
      currencyName.innerHTML = "Dólar Americano"
      convertImg.src = "./assets/eua.png"
   }

   if (selectConverter.value == "euro-converter") {
      currencyName.innerHTML = "Euro"
      convertImg.src = "./assets/euro.png"
   }

   if (selectConverter.value == "libra-converter") {
      currencyName.innerHTML = "Libra"
      convertImg.src = "./assets/libra.png"
   }

   if (selectConverter.value == "bitcoin-converter") {
      currencyName.innerHTML = "Bitcoin"
      convertImg.src = "./assets/bitcoin.png"
   }


   convertValues()
}

selectConverterTo.addEventListener("change", changeCurrency)
selectConverter.addEventListener("change", changeConverter)
convertButton.addEventListener("click", convertValues)