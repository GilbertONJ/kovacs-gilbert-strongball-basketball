A login oldalon a menüpontok küzül csak a nem bejelentkezett felhasználók menüpontjai látszódnak.
Mindenképp szükséges a regisztráció és a bejelentkezés. (Előfordul, hogy a loginra 2x kell klikkelni)

A home-on láthatóak a csapatok, amelyekre, ha ráklikkelünk akkor egy rövid introt látunk egy pop-up keretein belül.
A navbaron itt is elérhetőek a menüpontok. Ha a telefon szélessége túl kicsi, akkor a bal oldalon egy lenyíló sávval tudunk navigálni.
Ha a vízszintes navbar-ra kattintunk akkor eltűnik, hogy ne zavarjon. 

A home-on a képek túl kis képernyő szélesség esetén átalakulnak gombokká, amelyek g9rfethetek a reszponzivitás miatt.
A teams oldalon láthatóak a csapatok adatai, amelyek a crud folyamatokkal ellentétben beégetettek. Mivel nem terveztem ezen a menüpontot
crud folyamatokat, úgy gondoltam itt jó lesz ez a megoldás. A táblázat a fejlécek segtségével rendezhetőek.

A news oldalon találhatóak a crud folyamatok, amelyek már ki vannak szervezve egy service-be és és az fire-database-ben tárolódnak.
Lehetséges egy hír felvitele, törlése, és módosítása is. Minden felhasználó csak a saját híreit tudja kezelni, és egy felhasználó több hírt is felvihet. Az oldal alján található egy filter fomb, amelynek a segítségével egy szűrést tudunk végezni a saját híreinkre. Illetve van ott egy másikgomb is, amely arra szolgál, hogy türüljük a szűrőt. A szerkesztés ikonra kattintva megjelenik egy text-area, amely tartalmazza az aktuális szöveget amit módosíthatunk. Szintén megjelenik két gomb egy cancel és egy update, amelyekkel a szerkesztési folyamat kezelhető. Az add-olása esetén megjelenik egy pop up, a cancel gomb még nem működik. Egy félre kattintás eltűntetti a pop up-ot

Mőködik az authetikáció. A regisztrált felhasználók el vannak tárolva. Van néhány dummy felhasználó eltárolva. Abban az esetben, ha teszteljük a regisztrációt és a login-t, érdemes valami olyan email-t megadni, ami pl nem teszt06@.... Mert ilyenek a dummy felhasználók email címei is, és ha már van ilyen felhasználó, még nincs hibaüzenet.

Abban az esetben, ha loginoltunk eltűnik a login menüpont és helyette a logout jelenik meg.

A reszponzivitásra is ügyeltem ahol csak tudtam. pl Teams table egészen máshogy jelenik meg álló elhelyezkedésű telefon esetében


EZ A LEÍRÁS ÖSSZEFOGLALÓ/TÁJÉKOZTATÓ JELLEGŰ... 