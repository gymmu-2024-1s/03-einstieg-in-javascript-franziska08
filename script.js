import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]
    if (currentElement === "e") {
      //do nothing
    } else if (currentElement === "E") {
      // nichts machen
    } else {
      result.push(currentElement)
    }
    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args //speichert den Wert von args in der Variable input ab.
  const result = [] //das ist die Resultatliste.
  //Läuft Zeichen für Zeichen über den ganzen Text.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    const upperCaseLetter = currentElement.toUpperCase() // gibt das Zeichen in Grossbuchstaben zurück
    //hänge das aktuelle Zeichen doppelt an.
    result.push(upperCaseLetter)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args //speichert den Wert von args in der Variable input ab.
  const result = [] // das ist die Resultatliste

  let count = 0 // zellt die Anzahl der "e"
  for (let i = 0; i < input.length; i++) {
    // läuft Zeichen für Zeichen des ganzen Text ab
    const currentElement = input[i] // speichert das aktuelle Zeichen in der Variable "currentElement"
    if (currentElement === "e") {
      //wenn e das aktuelle Zeichen ist
      count = count + 1 //zählt alle "e" zusammen
    } else if (currentElement === "E") {
      //wenn E das aktuelle Zeichen ist
      count++ //kurzform von count+1
    }
  }

  return count // gibt die Anzahl der "e" zurück
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args // speichert den Wert von args in der Variable input
  const result = [] // das ist die Resultatliste
  //Man filtert die Eingabe so, dass nur noch Buchstaben und Leerzeichen übrig
  //bleiben
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0) //gibt den ASCII-Code vom aktuellen Zeichens zurück

    if (ascii >= 65 && ascii <= 90) {
      //wenn der ASCII-Code zwischen 65 und 90 liegt
      //Grossbuchstabe
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      //wenn der ASCII-Code zwischen 97 und 122 liegt
      // Kleinbuchstabe
      result.push(currentElement)
    } else if (ascii === 32) {
      //wenn der ASCII-Code 32 ist
      // Leerzeichen
      result.push(currentElement) //hängt das Leerzeichen an
    }
  }

  //Jetzt kann man noch mehrere Leerzeichen am Stück haben, die muss man noch filtern

  const result2 = [] //ist die Resultatliste 2
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1] // gibt das nächste Zeichen an der Stelle +1 an

    if (currentElement === " " && nextElement === " ") {
      //hier sind 2 Leerzeichen hintereinadner , deshalb ignoriere das erste
    } else {
      result2.push(currentElement) // hängt das Zeichen an
    }
  }
  //Jetzt kann man die Leerzeichen zählen
  let count = 0
  for (let i = 0; i < result.length; i++) {
    const currentElement = result2[i]
    if (currentElement === " ") {
      count = count + 1 // Langeform von count++ // zählt die Leerzeichen
    }
  }
  //Da es ein Wort mehr wie Leerzeichen gibt, gibt man Leerzeichen+1 zurück
  return count + 1 //gibt die Anzahl der Leerzeichen zurück
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  return /[A-Z]/.test(args) //üperfrüfe ob mindestens ein Großbuchstabe vorhanden ist
  //Von KI gelöst
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []
  let hasSonderzeichen = false //sagt das es keine Sonderzeichen gibt, um später zu testen, ob es doch Sonderzeichen gibt
  // Schreibe eine Funktion, die testet ob ein Sonderzeichen vorkommt

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 33 && ascii <= 47) {
      hasSonderzeichen = true // Wenn ein Sonderzeichen gefunden wird, wird hasSonderzeichen auf true gesetzt
    }
  }
  return hasSonderzeichen //Sagt ob Sonderzeichen vorhanden sind
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []
  //Sollte das Wort 'und' erkennen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "u") {
      // wenn das Element "u" ist
      if (input[i + 1] === "n") {
        //wenn das Element "n" ist
        if (input[i + 2] === "d") {
          //wenn das Element "d" ist
          return true //gibt true zurück, wenn das Wort erhalten ist
        }
      }
    }
  }
  return false // gibt false zuück wenn das Wort nicht erhalten ist
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      //wenn das Element "e" ist
      //do nothing
      result.push(3) //3 ersetzt "e"
    } else {
      result.push(currentElement) //hängt das aktuelle Zeichen an
    }
  }
  return result.join("") //gibt das Ergebnis zurück
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args //speichert den Wert von args in der Variable input, damit wird für uns klarer, was wir gerade bearbeiten.
  const result = []

  let is6long = false //zählt ob der Text 6 Zeichen lang ist oder nicht
  let count = 0 // lässt den Anfang bei 0 starten

  for (let i = 0; i < input.length; i++) {
    // "i" ersetzt 0. Dann wird die Kurzform angewendet.
    const currentElement = input[i] // speichert das aktuelle Zeichen in der Variable "currentElement".
    count = count + 1
  }

  if (count === 6) {
    //wenn die Zeichenanzahl 6 ist
    is6long = true // bestimmt ob die Zeichenanzahl 6 dieser Anzahl entspricht
  }
  return is6long //gibt true oder false zurück, wenn der Text 6 Zeichen lang ist oder nicht
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    //Teste, ob die Eingabe ein korrekter RGB Hexcode ist.
    if (input[i] === "#") {
      //wenn das Zeichen "#" ist
      return true //gibt true zurück wenn es stimmt
    } else {
      //wenn nicht
      return false //gibt false zurück wenn es nicht stimmt
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args

  //erstelle ein Variable um den ASCII-Code zu speichern.
  let asciiCode = 0

  // Speichere den ASCII-Code vom ersten Zeichen
  asciiCode = input.charCodeAt(0)

  //Sollte 'null' zurückgeben wenn mehr wie ein Zeichen gegeben ist
  if (input.length > 1) {
    //wenn mehr als ein Zeichen gegeben ist
    return null //gibt null zurück

    //Sollte 'null' zurückgeben wenn keine Eingabe gegeben ist.
  } else if (input.length === 0) {
    //wenn keine Eingabe gegeben ist
    return null // gibt null zurück
  }
  return asciiCode // gibt in Ascii-Code zurück
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Suche die Position des ersten "e"s
    if (currentElement === "e") {
      //wenn das Element "e" ist
      return i // er springt aus der Funktion raus, wenn e gefunden wird bricht es ab und es wird nicht mehr ausgeführt
    }
  }
  return -1 // -1 zeigt an, dass es nicht in der Liste steht.
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  let lastIndex = -1 // speichert den Index des letzten "e"
  // Suche die Position des letzten "e"
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      lastIndex = i // Wenn e gefunden wird, wird der Index gespeichert
    }
  }
  return lastIndex // gibt den Index zurück
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  let count = 0

  // Suche die Postition des dritten "e"s
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "e") {
      // wenn das Element "e" ist
      count++ // zählt alle "e" zusammen
    }
    if (count === 3) {
      // wenn es 3 e's gibt
      return i // gibt die Position des dritten "e" zurück
    }
  }
  return -1 //gibt -1 an, wenn dort weniger als 3 e's sind
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []
  //Sollte die Eingabe nur bis zum ersten Leerzeichen einlesen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      //wenn das Element ein Leerzeichen ist
      break //bricht die Schleife ab
    }
    result.push(currentElement) //hängt das aktuelle Zeichen an
  }
  return result.join("") //gibt das Ergebnis dann zurück
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result = []
  //Lesen Sie die Eingabe bis zum Zeichen '$' als ersten Teil einer Liste ein, und den Rest als den zweiten Teil.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "$") {
      //wenn das Element ein "$" ist
      break //bricht die Schleife ab
    }
    result.push(currentElement) //hängt das aktuelle Zeichen an
  }
  return result.join("") //gibt das Ergebnis dann zurück
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args //speichert den Wert von args in der Variable input ab.
  const totallist = [] // das ist die Totalliste
  const currentlist = [] // das ist die aktuelle Liste
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Wenn manauf ein Leerzeichen trifft, dann schreibt man alles was man bisher gemacht hat
    // in die totallist

    if (currentElement === " ") {
      //wenn das Element ein Leerzeichen ist
      totallist.push(currentlist.join("")) // schreibt alles was man bisher gemacht hat in die Totallist
      currentlist.length = 0 // leert die aktuelle Liste
    } else {
      //wenn das Element kein Leerzeichen ist
      currentlist.push(currentElement) //hängt das aktuelle Zeichen an
    }
  }
  //Alles in die Liste schreiben was man bis am ende gelesen hat.
  totallist.push(currentlist.join("")) // schreibt alles was man bisher gemacht hat in die Totallist
  return totallist //gibt die Totallist dann zurück
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args

  // Wir können die Aufgabe 17 verwenden um eine Liste zu bekommen.
  const nameAndAge = aufgabe17(input) // das ist die Liste mit Name und Alter von Aufgabe 17

  // generiere die Ausgabeliste
  const result = []

  // Hier schreibt man ganze Worte in die Liste, auch das ist möglich
  result.push("Sie heissen ") //hängt "Sie heissen " an

  // die Liste so zusammensetzten, dass der Name und das Alter an der
  // richtigen Stelle eingefügt wird.
  result.push(nameAndAge[0]) //hängt den Namen an
  result.push(" und sind ") //hängt " und sind " an
  result.push(nameAndAge[1]) //hängt das Alter an
  result.push(" Jahre alt.") //hängt " Jahre alt." an

  // Das Resultat immer als Text zurückgeben
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe18] ", aufgabe18)

export function aufgabe19(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    //sollte alle 'aa' entfernen
    const currentElement = input[i] // holt das aktuelle Zeichen raus

    //sollte 'aa' heissen.
    if (currentElement === "aa") {
      //wenn das aktuelle Zeichen 'aa' ist
      result.push("aa") //Gibt "aa" wieder an
    }
  }
  // jedes Zeichen sollte verdoppelt werden
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] // holt das aktuelle Zeichen raus
    result.push(currentElement) // verdoppelt das Zeichen
    result.push(currentElement)
  }
  return result.join("") //gibt das Ergebnis dann zurück
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)
export function aufgabe20(args) {
  const input = args
  const result = []

  let allGood = true //gibt true an, wenn alles gut ist

  //prüfe ob nach jeden "." ein Leerschlag kommt.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      // prüft ob das Zeichen ein "." ist.
      //prüfe ob das nächste Zeichen ein Leerschlag ist.
      if (input[i + 1] === " ") {
        // prüft ob das Zeichen ein " " ist
        //do nothing
      } else {
        allGood = false // gibt false an, wenn das nicht stimmt
      }
    }
  }
  return allGood //gibt true zurück, wenn allGood true ist
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []
  //kehre die Eingabe um
  for (let i = input.length - 1; i >= 0; i--) {
    //kehrt die Eingabe um
    const currentElement = input[i]
    result.push(currentElement) //hängt das aktuelle Zeichen an
  }

  return result.join("") //gibt das Ergebnis dann zurück
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []
  //Sollte alle Zeichen aus der Eingabe '_' ersetzten
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push("_") //gibt "_" an
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  const result = [] //Leere Liste, in der wir das Resultat anhängen
  const firstelement = input[0] //Speichere das erste Zeichen

  // Hänge firstelement an die Liste an
  result.push(firstelement) //Schreibt das erste Zeichen an Anfang

  for (let i = 0; i < input.length; i++) {
    //Schreibt die restlichen Zeichen auf
    const currentElement = input[i]
    result.push(currentElement) //hängt das aktuelle Zeichen an
  }

  result.push(firstelement) //Schreibe das erste Zeichen am Ende

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  // Vertausche das erste und das letzte Zeichen
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      // wenn das aktuelle Zeichen == 0 ist
      result.push(input[input.length - 1]) //hängt das letzte Zeichen an
    } else if (i === input.length - 1) {
      // wenn das aktuelle Zeichen == der letzte ist
      result.push(input[0]) //hängt das erste Zeichen an
    } else {
      // wenn das aktuelle Zeichen nicht 0 oder der letzte ist
      result.push(currentElement) //hängt das aktuelle Zeichen an
    }
  }

  return result.join("") //gibt das Ergebnis dann zurück
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  const result = []
  //Lösche das Zeichen welches in der Mitte des Textes steht

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === Math.floor(input.length / 2)) {
      // wenn das aktuelle Zeichen == der Mitte ist
      // do nothing
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)
export function aufgabe26(args) {
  const input = args
  const result = []
  // Vergleiche und vertausche das erste und das zweite Zeichen

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      result.push(input[1])
    } else if (i === 1) {
      result.push(input[0])
    } else {
      //do nothing
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(args) {
  const input = args
  const result = []
  //sollte testen ob die Eingabe eine Zahl ist
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement >= "0" && currentElement <= "9") {
      result.push(currentElement)
    }
  }
  //sollte testen ob die Eingabe keine Zahl ist
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement < "0" || currentElement > "9") {
      return false
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe28(args) {
  const input = args
  let num1, num2

  // Suche nach den ersten beiden Zahlen im Array
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (!isNaN(currentElement)) {
      // Überprüfe, ob das Element eine Zahl ist
      if (!num1) {
        num1 = parseInt(currentElement)
      } else if (!num2) {
        num2 = parseInt(currentElement)
        break
      }
    }
  }

  // Wenn zwei Zahlen gefunden wurden, addiere sie
  if (num1 !== undefined && num2 !== undefined) {
    return num1 + num2
  } else {
    return "Keine zwei Zahlen gefunden"
  }
}

linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)

export function aufgabe29(args) {
  let summe = 0
  let currentZahl = ""
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (
      currentElement.charCodeAt(0) >= 48 &&
      currentElement.charCodeAt(0) <= 57
    ) {
      currentZahl += currentElement
    } else if (currentZahl !== "") {
      summe += parseInt(currentZahl)
      currentZahl = ""
    }
  }

  if (currentZahl !== "") {
    summe += parseInt(currentZahl)
  }

  return summe
}
linkupExerciseHandler("[data-click=aufgabe29]", aufgabe29)

export function aufgabe30(args) {
  const input = args
  const result = []
  //Sollte das Wort 'Android' erkennen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "A") {
      // wenn das Element "A" ist
      if (input[i + 1] === "n") {
        //wenn das Element "n" ist
        if (input[i + 2] === "d") {
          //wenn das Element "d" ist
          if (input[i + 3] === "r") {
            //wenn das Element "r" ist
            if (input[i + 4] === "o") {
              //wenn das Element "o" ist
              if (input[i + 5] === "i") {
                //wenn das Element "i" ist
                if (input[i + 6] === "d") {
                  //wenn das Element "d" ist
                  return true //gibt true zurück, wenn das Wort erhalten ist
                }
              }
            }
          }
        }
      }
    }
  }
  return false // gibt false zuück wenn das Wort nicht erhalten ist
}

linkupExerciseHandler("[data-click=aufgabe30]", aufgabe30)

export function eigeneaufgabe(args) {
  const input = args
  const mapping = { e: 1, a: 2, f: 3, i: 4, n: 5, t: 6 }
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (mapping[currentElement]) {
      result.push(mapping[currentElement])
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=eigeneaufgabe]", eigeneaufgabe) //Von Codium verbessert, damit es auch funktioniert hat

export function Eigeneaufgabe(args) {
  //Jedes Zeichen sollte verfünfacht werden
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    result.push(currentElement)
    result.push(currentElement)
    result.push(currentElement)
    result.push(currentElement)
    result.push(currentElement)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=Eigeneaufgabe]", Eigeneaufgabe)

export function Bubblesort(args) {
  const text = args
  const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i + 1]
      list[i + 1] = list[i]
      list[i] = tmp
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")

  return result
}
linkupExerciseHandler("[data-click=Bubblesort]", Bubblesort)

export function Selectionsort(args) {
  const input = args.split("")
  const result = []
  let n = input.length
  for (let i = 0; i < n - 1; i++) {
    // Assume the current position holds
    // the minimum element
    let min_idx = i

    // Iterate through the unsorted portion
    // to find the actual minimum
    for (let j = i + 1; j < n; j++) {
      if (input[j] < input[min_idx]) {
        // Update min_idx if a smaller element is found
        min_idx = j
      }
    }

    // Move minimum element to its
    // correct position
    let temp = input[i]
    input[i] = input[min_idx]
    input[min_idx] = temp
  }
  return input
}

linkupExerciseHandler("[data-click=Selectionsort]", Selectionsort)

export function Radixsort(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {}
  return result
}

linkupExerciseHandler("[data-click=Radixsort]", Radixsort)

export function Bucketsort(args) {
  const text = args
  const list = text.split("") // Wandelt den Text in eine Liste um

  // 256 Buckets für alle ASCII-Zeichen (von 0 bis 255)
  let buckets = new Array(256).fill().map(() => [])

  // Elemente in die Buckets verteilen
  for (let i = 0; i < list.length; i++) {
    let index = list[i].charCodeAt(0) // Die ASCII-Werte der Zeichen
    buckets[index].push(list[i])
  }

  // Eimer sortieren und zusammenführen
  return buckets
    .map((bucket) => bucket.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))) // Sortiere jedes Bucket
    .flat() // Alle sortierten Buckets werden flach zusammengeführt
    .join("") // Als String zusammenfügen
}

linkupExerciseHandler("[data-click=Bucketsort]", Bucketsort)
