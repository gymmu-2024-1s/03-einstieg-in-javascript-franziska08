import { describe, expect, test } from "vitest"
import * as funcs from "../script.js"

describe("Aufgabe 01", function () {
  test("Die Funktion 'aufgabe01()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe01, "function")
  })
  test("Sollte keine 'e's mehr drin haben", function () {
    const input = "Hello"
    const res = funcs.aufgabe01(input)
    assert.equal(res, "Hllo")
  })
  test("Sollte keine 'E's mehr drin haben", function () {
    const input = "Emoji"
    const res = funcs.aufgabe01(input)
    assert.equal(res, "moji")
  })
  test("Sollte mehrere 'e's löschen", function () {
    const input = "Hier hat es mehrere 'e's drin."
    const res = funcs.aufgabe01(input)
    assert.equal(res, "Hir hat s mhrr ''s drin.")
  })
})

describe("Aufgabe 02", function () {
  test("Die Funktion 'aufgabe02()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe02, "function")
  })
  test("Sollte nur noch Grossbuchstaben enthalten", function () {
    const input = "a"
    const res = funcs.aufgabe02(input)
    assert.equal(res, "A")
  })
  test("Sollte mehrere Buchstaben gross schreiben", function () {
    const input = "abc"
    const res = funcs.aufgabe02(input)
    assert.equal(res, "ABC")
  })
  test("Sollten Grossbuchstaben bleiben", function () {
    const input = "aBc"
    const res = funcs.aufgabe02(input)
    assert.equal(res, "ABC")
  })
  test("Kann auch mit Sonderzeichen umgehen", function () {
    const input = "Hier ist ein Satz mit mehreren Zeichen."
    const res = funcs.aufgabe02(input)
    assert.equal(res, "HIER IST EIN SATZ MIT MEHREREN ZEICHEN.")
  })
})

describe("Aufgabe 03", function () {
  test("Die Funktion 'aufgabe03()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe03, "function")
  })
  test("Sollte 1 'e' enthalten", function () {
    const input = "Hello"
    const res = funcs.aufgabe03(input)
    assert.equal(res, 1)
  })
  test("Sollte 4 'e's enthalten", function () {
    const input = "ein einfacher Text."
    const res = funcs.aufgabe03(input)
    assert.equal(res, 4)
  })
  test("Sollte auch 'E's zählen", function () {
    const input = "Ein einfacher Text."
    const res = funcs.aufgabe03(input)
    assert.equal(res, 4)
  })
})

describe("Aufgabe 04", function () {
  test("Die Funktion 'aufgabe04()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe04, "function")
  })
  test("Sollte 2 Wörter zählen", function () {
    const input = "Zwei Wörter"
    const res = funcs.aufgabe04(input)
    assert.equal(res, 2)
  })
  test("Sollte 4 Wörter zählen", function () {
    const input = "Nur vier Wörter hier."
    const res = funcs.aufgabe04(input)
    assert.equal(res, 4)
  })
  test("Kann auch mit Sonderzeichen umgehen", function () {
    const input =
      "Nicht alles - was von Leerzeichen getrennt wird, sind Wörter..."
    const res = funcs.aufgabe04(input)
    assert.equal(res, 9)
  })
  test("Zählt auch Zahlen als Wörter", function () {
    const input = "Nur vier Wörter hier."
    const res = funcs.aufgabe04(input)
    assert.equal(res, 4)
  })
})
describe("Aufgabe 05", function () {
  test("Die Funktion 'aufgabe05()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe05, "function")
  })
  test("Sollte keine Grossbuchstaben enthalten", function () {
    const input = "hier ist alles klein...."
    const res = funcs.aufgabe05(input)
    assert.equal(res, false)
  })
  test("Sollte genau ein Grossbuchstabe erkennen", function () {
    const input = "Hier ist nur der anfang gross!"
    const res = funcs.aufgabe05(input)
    assert.equal(res, true)
  })
  test("Sollte auch mehrere Grossbuchstaben erkennen", function () {
    const input = "Hier ist mehr wie nur der Anfang gross."
    const res = funcs.aufgabe05(input)
    assert.equal(res, true)
  })
  test("Sollte auch gehen wenn nicht der erste Buchstabe gross ist", function () {
    const input = "abcdEEEfg"
    const res = funcs.aufgabe05(input)
    assert.equal(res, true)
  })
  test("Sollte bei nur Sonderzeichen 'falsch' sein", function () {
    const input = "1 + 2 - 4 = -1"
    const res = funcs.aufgabe05(input)
    assert.equal(res, false)
  })
  test("Sollte 'falsch' sein für den leeren String", function () {
    const input = ""
    const res = funcs.aufgabe05(input)
    assert.equal(res, false)
  })
})
describe("Aufgabe 06", function () {
  test("Die Funktion 'aufgabe06()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe06, "function")
  })
  test("Sollte keine Sonderzeichen enthalten", function () {
    const input = "abc"
    const res = funcs.aufgabe06(input)
    assert.equal(res, false)
  })
  test("Das Leerzeichen wird nicht als Sonderzeichen erkannt", function () {
    const input = "Ohne Sonderzeichen"
    const res = funcs.aufgabe06(input)
    assert.equal(res, false)
  })
  test("Punkte sind Sonderzeichen", function () {
    const input = "Hier gibt es ein Sonderzeichen."
    const res = funcs.aufgabe06(input)
    assert.equal(res, true)
  })
  test("Sollte den leeren String nicht als Sonderzeichen erkennen", function () {
    const input = ""
    const res = funcs.aufgabe06(input)
    assert.equal(res, false)
  })
  test("Sollte Sonderzeichen mitten im Text erkennen", function () {
    const input = "Hey! Hier sind mehr wie ein Sonderzeichen."
    const res = funcs.aufgabe06(input)
    assert.equal(res, true)
  })
})
describe("Aufgabe 07", function () {
  test("Die Funktion 'aufgabe07()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe07, "function")
  })
  test("Sollte das Wort 'und' nicht enthalten", function () {
    const input = "and"
    const res = funcs.aufgabe07(input)
    assert.equal(res, false)
  })
  test("Sollte das Wort 'und' erkennen", function () {
    const input = "und"
    const res = funcs.aufgabe07(input)
    assert.equal(res, true)
  })
  test("Sollte 'Und' am Satzanfang finden", function () {
    const input = "Und hier ist auch ein und."
    const res = funcs.aufgabe07(input)
    assert.equal(res, true)
  })
  test("Sollte 'Und' nicht erkennen wenn es nicht am Satzanfang ist", function () {
    const input = "Hier ist ein falsches Und."
    const res = funcs.aufgabe07(input)
    assert.equal(res, false)
  })
})
describe("Aufgabe 08", function () {
  test("Die Funktion 'aufgabe08()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe08, "function")
  })
  test("Sollte 'e's mit '3' ersetzen", function () {
    const input = "e"
    const res = funcs.aufgabe08(input)
    assert.equal(res, "3")
  })
  test("Sollte mehrere 'e's mit '3' ersetzen", function () {
    const input = "abcdeeefgh"
    const res = funcs.aufgabe08(input)
    assert.equal(res, "abcd333fgh")
  })
  test("Sollte grosse 'E's nicht ersetzen", function () {
    const input = "ABCDEEEFGH"
    const res = funcs.aufgabe08(input)
    assert.equal(res, "ABCDEEEFGH")
  })
})

describe("Aufgabe 09", function () {
  test("Die Funktion 'aufgabe09()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe09, "function")
  })
  test("Sollte keine 6 Zeichen lang sein", function () {
    const input = "abcd"
    const res = funcs.aufgabe09(input)
    assert.equal(res, false)
  })
  test("Sollte genau 6 zeichen lang sein", function () {
    const input = "abcdef"
    const res = funcs.aufgabe09(input)
    assert.equal(res, true)
  })
  test("Sollte länger wie 6 Zeichen lang sein", function () {
    const input = "abcdefghijkl"
    const res = funcs.aufgabe09(input)
    assert.equal(res, false)
  })
  test("Sollte auch Leerzeichen zählen", function () {
    const input = "abc de"
    const res = funcs.aufgabe09(input)
    assert.equal(res, true)
  })
})

describe("Aufgabe 10", function () {
  test("Die Funktion 'aufgabe10()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe10, "function")
  })
  test("Sollte kein korrekter RGB Hexcode sein", function () {
    const input = "#FF009G"
    const res = funcs.aufgabe10(input)
    assert.equal(res, false)
  })
  test("Sollte ein korrekter Code sein", function () {
    const input = "#FF0077"
    const res = funcs.aufgabe10(input)
    assert.equal(res, true)
  })
  test("Sollte die Farbe 'rot' in Hexadezimal erkennen", function () {
    const input = "#FF0000"
    const res = funcs.aufgabe10(input)
    assert.equal(res, true)
  })
  test("Sollte die Farbe 'grün' in Hexadezimal erkennen", function () {
    const input = "#00FF00"
    const res = funcs.aufgabe10(input)
    assert.equal(res, true)
  })
  test("Sollte die Farbe 'blau' in Hexadezimal erkennen", function () {
    const input = "#0000FF"
    const res = funcs.aufgabe10(input)
    assert.equal(res, true)
  })
  test("Sollte die Farbe 'gelb' in Hexadezimal erkennen", function () {
    const input = "#FF00FF"
    const res = funcs.aufgabe10(input)
    assert.equal(res, true)
  })
  test("Sollte kein Hexcode sein wenn der Hash fehlt", function () {
    const input = "FF0077"
    const res = funcs.aufgabe10(input)
    assert.equal(res, false)
  })
})

describe("Aufgabe 11", function () {
  test("Die Funktion 'aufgabe11()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe11, "function")
  })
  test("Sollte den ASCII-Code von 'a' erkennen", function () {
    const input = "a"
    const res = funcs.aufgabe11(input)
    assert.equal(res, 97)
  })
  test("Sollte den ASCII-Code von 'B' erkennen", function () {
    const input = "B"
    const res = funcs.aufgabe11(input)
    assert.equal(res, 66)
  })
  test("Sollte 'null' zurückgeben wenn mehr wie ein Zeichen gegeben sind", function () {
    const input = "aB"
    const res = funcs.aufgabe11(input)
    assert.equal(res, null)
  })
  test("Sollte 'null' zurückgeben wenn keine Eingabe gegeben ist", function () {
    const input = ""
    const res = funcs.aufgabe11(input)
    assert.equal(res, null)
  })
})
describe("Aufgabe 12", function () {
  test("Die Funktion 'aufgabe12()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe12, "function")
  })
  test("Sollte eine 'e' an der Position 0 finden", function () {
    const input = "ein Text"
    const res = funcs.aufgabe12(input)
    assert.equal(res, 0)
  })
  test("Sollte eine 'e' an der Position 5 finden", function () {
    const input = "Ein Text"
    const res = funcs.aufgabe12(input)
    assert.equal(res, 5)
  })
  test("Sollte -1 zurückgeben wenn kein 'e' vorkommt", function () {
    const input = "abcdfgh"
    const res = funcs.aufgabe12(input)
    assert.equal(res, -1)
  })
})
describe("Aufgabe 13", function () {
  test("Die Funktion 'aufgabe13()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe13, "function")
  })
  test("Sollte die letzte Position finden, an der ein 'e' steht", function () {
    const input = "eine"
    const res = funcs.aufgabe13(input)
    assert.equal(res, 3)
  })
  test("Sollte -1 zurückgeben wenn kein 'e' vorkommt", function () {
    const input = "nichts"
    const res = funcs.aufgabe13(input)
    assert.equal(res, -1)
  })
})
describe("Aufgabe 14", function () {
  test("Die Funktion 'aufgabe14()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe14, "function")
  })
  test("Sollte -1 geben, da nicht genügend 'e's vorkommen", function () {
    const input = "abcdefge"
    const res = funcs.aufgabe14(input)
    assert.equal(res, -1)
  })
  test("Sollte 2 zurückgeben, da nur 'e's vorkommen", function () {
    const input = "eeeeeeee"
    const res = funcs.aufgabe14(input)
    assert.equal(res, 2)
  })
  test("Sollte Leerzeichen beachten und auch mitzählen", function () {
    const input = "Hier ist mehr Text mit vielen 'e's"
    const res = funcs.aufgabe14(input)
    assert.equal(res, 15)
  })
  test("Sollte nicht auf grosse 'E's reagieren", function () {
    const input = "EEEEeEee"
    const res = funcs.aufgabe14(input)
    assert.equal(res, 7)
  })
})

describe("Aufgabe 15", function () {
  test("Die Funktion 'aufgabe15()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe15, "function")
  })
  test("Sollte nach dem ersten ' ' abbrechen", function () {
    const input = "Hier ist langer Text"
    const res = funcs.aufgabe15(input)
    assert.equal(res, "Hier")
  })
  test("Sollte leer sein wenn es mit einem Leerschlag beginnt", function () {
    const input = " nichts"
    const res = funcs.aufgabe15(input)
    assert.equal(res, "")
  })
  test("Sollte '_' ganz normal lesen", function () {
    const input = "Hier_ist_langer_Text."
    const res = funcs.aufgabe15(input)
    assert.equal(res, "Hier_ist_langer_Text.")
  })
  test("Sollte das Leerzeichen am Ende nicht mitnehmen", function () {
    const input = "Ohne Leerzeichen "
    const res = funcs.aufgabe15(input)
    assert.equal(res, "Ohne Leerzeichen")
  })
})
describe("Aufgabe 16", function () {
  test("Die Funktion 'aufgabe16()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe16, "function")
  })
  test("Sollte nichts einlesen", function () {
    const input = "$alles wird ignoriert."
    const res = funcs.aufgabe16(input)
    assert.equal(res, ["", "alles wird ignoriert."])
  })
  test("Sollte alles einlesen", function () {
    const input = "alles wird eingelesen$"
    const res = funcs.aufgabe16(input)
    assert.equal(res, ["alles wird eingelesen"])
  })
  test("Sollte nur einen Teil einlesen", function () {
    const input = "Sollte nur bis hier$einlesen."
    const res = funcs.aufgabe16(input)
    assert.equal(res, ["Sollte nur bis hier", "einlesen."])
  })
  test("Sollte leer sein", function () {
    const input = ""
    const res = funcs.aufgabe16(input)
    assert.equal(res, [""])
  })
  test("Sollte alles einlesen", function () {
    const input = "alles"
    const res = funcs.aufgabe16(input)
    assert.equal(res, ["alles"])
  })
  test("Sollte nur 2 Einträge in der Liste haben", function () {
    const input = "eins$zwei$drei"
    const res = funcs.aufgabe16(input)
    assert.equal(res, ["eins", "zwei$drei"])
  })
})
describe("Aufgabe 17", function () {
  test("Die Funktion 'aufgabe17()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe17, "function")
  })
  test("Sollte eine Liste mit dem leeren Element haben", function () {
    const input = ""
    const res = funcs.aufgabe17(input)
    assert.equal(res, [""])
  })
  test("Sollte eine Liste mit nur einem Eintrag haben", function () {
    const input = "nur ein Eintrag"
    const res = funcs.aufgabe17(input)
    assert.equal(res, ["nur ein Eintrag"])
  })
  test("Sollte 2 Einträge haben", function () {
    const input = "eins,zwei"
    const res = funcs.aufgabe17(input)
    assert.equal(res, ["eins", "zwei"])
  })
  test("Sollte 3 Einträge haben", function () {
    const input = "eins,zwei,drei"
    const res = funcs.aufgabe17(input)
    assert.equal(res, ["eins", "zwei", "drei"])
  })
  test("Sollte nur 2 Einträge haben", function () {
    const input = "eins,zwei,"
    const res = funcs.aufgabe17(input)
    assert.equal(res, ["eins", "zwei"])
  })
})
describe("Aufgabe 18", function () {
  test("Die Funktion 'aufgabe18()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe18, "function")
  })
  test("Sollte 'Sie heissen Julia und sind 17 Jahre alt' schreiben", function () {
    const input = "Julia 17"
    const res = funcs.aufgabe18(input)
    assert.equal(res, "Sie heissen Julia und sind 17 Jahre alt")
  })
  test("Sollte 'Sie heissen 17 und sind Julia Jahre alt' schreiben", function () {
    const input = "17 Julia"
    const res = funcs.aufgabe18(input)
    assert.equal(res, "Sie heissen 17 und sind Julia Jahre alt")
  })
  test("Sollte 'Sie heissen und sind 17 Jahre alt' schreiben", function () {
    const input = " 17"
    const res = funcs.aufgabe18(input)
    assert.equal(res, "Sie heissen und sind 17 Jahre alt")
  })
  test("Sollte 'Sie heissen Julia und sind Jahre alt' schreiben", function () {
    const input = "Julia"
    const res = funcs.aufgabe18(input)
    assert.equal(res, "Sie heissen Julia und sind Jahre alt")
  })
})
describe("Aufgabe 19", function () {
  test("Die Funktion 'aufgabe19()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe19, "function")
  })
  test("Sollte immernoch leer sein", function () {
    const input = ""
    const res = funcs.aufgabe19(input)
    assert.equal(res, "")
  })
  test("Sollte 'aa' heissen", function () {
    const input = "a"
    const res = funcs.aufgabe19(input)
    assert.equal(res, "aa")
  })
  test("Sollte mehrere Zeichen verdoppeln", function () {
    const input = "ab cde"
    const res = funcs.aufgabe19(input)
    assert.equal(res, "aabb  ccddee")
  })
})
describe("Aufgabe 20", function () {
  test("Die Funktion 'aufgabe20()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe20, "function")
  })
  test("Sollte 'false' sein", function () {
    const input = "So nicht.Es braucht hier einen Leerschlag"
    const res = funcs.aufgabe20(input)
    assert.equal(res, false)
  })
  test("Sollte 'true' sein", function () {
    const input = "So gehts. Nach einem Punkt kommt ein Leerzeichen"
    const res = funcs.aufgabe20(input)
    assert.equal(res, true)
  })
  test("Auch am Ende braucht es einen Leerschlag", function () {
    const input = "Auch am Ende."
    const res = funcs.aufgabe20(input)
    assert.equal(res, false)
  })
  test("Am Ende richtig", function () {
    const input = "Auch am Ende. "
    const res = funcs.aufgabe20(input)
    assert.equal(res, true)
  })
})
describe("Aufgabe 21", function () {
  test("Die Funktion 'aufgabe21()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe21, "function")
  })
  test("Sollte leer bleiben", function () {
    const input = ""
    const res = funcs.aufgabe21(input)
    assert.equal(res, "")
  })
  test("Sollte ein einzelnes Zeichen behalten", function () {
    const input = "a"
    const res = funcs.aufgabe21(input)
    assert.equal(res, "a")
  })
  test("Sollte mehrere gleiche Zeichen behalten", function () {
    const input = "aaaa"
    const res = funcs.aufgabe21(input)
    assert.equal(res, "aaaa")
  })
  test("Sollte Grossbuchstaben unterscheiden", function () {
    const input = "aAaa"
    const res = funcs.aufgabe21(input)
    assert.equal(res, "aaAa")
  })
})
describe("Aufgabe 22", function () {
  test("Die Funktion 'aufgabe22()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe22, "function")
  })
  test("Sollte alles ersetzen", function () {
    const input = "Alles weg..."
    const res = funcs.aufgabe22(input)
    assert.equal(res, "____________")
  })
  test("Sollte einen Teil ersetzen", function () {
    const input = "alles bis kier ist weg"
    const res = funcs.aufgabe22(input)
    assert.equal(res, "__________kier ist weg")
  })
  test("Sollte nichts ersetzen", function () {
    const input = "keine Unterstriche..."
    const res = funcs.aufgabe22(input)
    assert.equal(res, "keine Unterstriche...")
  })
})
describe("Aufgabe 23", function () {
  test("Die Funktion 'aufgabe23()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe23, "function")
  })
  test("Bleibt leer", function () {
    const input = ""
    const res = funcs.aufgabe23(input)
    assert.equal(res, "")
  })
  test("Verdoppelt das erste Zeichen", function () {
    const input = "a"
    const res = funcs.aufgabe23(input)
    assert.equal(res, "aaa")
  })
  test("Verdoppelt das erste Zeichen", function () {
    const input = "abc"
    const res = funcs.aufgabe23(input)
    assert.equal(res, "aabca")
  })
})
describe("Aufgabe 24", function () {
  test("Die Funktion 'aufgabe24()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe24, "function")
  })
  test("Sollte leer bleiben", function () {
    const input = ""
    const res = funcs.aufgabe24(input)
    assert.equal(res, "")
  })
  test("Sollte gleich bleiben", function () {
    const input = "a"
    const res = funcs.aufgabe24(input)
    assert.equal(res, "a")
  })
  test("Sollte gleich bleiben", function () {
    const input = "aa"
    const res = funcs.aufgabe24(input)
    assert.equal(res, "aa")
  })
  test("Sollte vertauschen", function () {
    const input = "ab"
    const res = funcs.aufgabe24(input)
    assert.equal(res, "ba")
  })
  test("Sollte nur den Anfang und Schluss vertauschen", function () {
    const input = "abcdef"
    const res = funcs.aufgabe24(input)
    assert.equal(res, "fbcdea")
  })
  test("Sollte auch Leerzeichen vertauschen", function () {
    const input = "abcd "
    const res = funcs.aufgabe24(input)
    assert.equal(res, " bcda")
  })
})
describe("Aufgabe 25", function () {
  test("Die Funktion 'aufgabe25()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe25, "function")
  })
  test("Sollte leer bleiben", function () {
    const input = ""
    const res = funcs.aufgabe25(input)
    assert.equal(res, "")
  })
  test("Soll leer werden", function () {
    const input = "a"
    const res = funcs.aufgabe25(input)
    assert.equal(res, "")
  })
  test("Soll leer werden", function () {
    const input = "aa"
    const res = funcs.aufgabe25(input)
    assert.equal(res, "")
  })
  test("Soll 1 Zeichen löschen", function () {
    const input = "abc"
    const res = funcs.aufgabe25(input)
    assert.equal(res, "ac")
  })
  test("Soll 2 Zeichen löschen", function () {
    const input = "abcd"
    const res = funcs.aufgabe25(input)
    assert.equal(res, "ad")
  })
  test("Soll gleiche Zeichen separat behandeln", function () {
    const input = "abbc"
    const res = funcs.aufgabe25(input)
    assert.equal(res, "ac")
  })
})
describe("Aufgabe 26", function () {
  test("Die Funktion 'aufgabe26()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe26, "function")
  })
  test("Soll die ersten beiden Zeichen so lassen", function () {
    const input = "abcde"
    const res = funcs.aufgabe26(input)
    assert.equal(res, "abcde")
  })
  test("Soll die ersten beiden Zeichen vertauschen", function () {
    const input = "bacdef"
    const res = funcs.aufgabe26(input)
    assert.equal(res, "abcdef")
  })
  test("Soll Grossbuchstaben nach vorne nehmen", function () {
    const input = "aAbcdef"
    const res = funcs.aufgabe26(input)
    assert.equal(res, "Aabcdef")
  })
})

describe("Aufgabe 27", function () {
  test("Die Funktion 'aufgabe27()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe27, "function")
  })
  test("Sollte eine Zahl sein", function () {
    const input = "12"
    const res = funcs.aufgabe27(input)
    assert.equal(res, true)
  })
  test("Sollte keine Zahl sein", function () {
    const input = "1 2"
    const res = funcs.aufgabe27(input)
    assert.equal(res, false)
  })
  test("Sollte keine Zahl sein", function () {
    const input = ""
    const res = funcs.aufgabe27(input)
    assert.equal(res, false)
  })
  test("Sollte keine Zahl sein", function () {
    const input = "zwei"
    const res = funcs.aufgabe27(input)
    assert.equal(res, false)
  })
  test("Sollte kein Leerzeichen am Anfang haben", function () {
    const input = " 12"
    const res = funcs.aufgabe27(input)
    assert.equal(res, false)
  })
  test("Sollte kein Leerzeichen am Ende haben", function () {
    const input = "10 "
    const res = funcs.aufgabe27(input)
    assert.equal(res, false)
  })
  test("Soll nur ganze Zahlen lesen", function () {
    const input = "27.1"
    const res = funcs.aufgabe27(input)
    assert.equal(res, false)
  })
})
describe("Aufgabe 28", function () {
  test("Die Funktion 'aufgabe28()' soll existieren", function () {
    assert.equal(typeof funcs.aufgabe28, "function")
  })
  test("Sollte 2 Zahlen haben, und diese addieren", function () {
    const input = "3 8"
    const res = funcs.aufgabe28(input)
    assert.equal(res, 11)
  })
  test("Sollte nur auf Leerzeichen reagieren", function () {
    const input = "3 + 2"
    const res = funcs.aufgabe28(input)
    assert.equal(res, null)
  })
  test("Sollte auch mit mehrstelligen Zahlen rechnen", function () {
    const input = "12 600"
    const res = funcs.aufgabe28(input)
    assert.equal(res, 612)
  })
})
