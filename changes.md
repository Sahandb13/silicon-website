📑 Dokumentation: Semantiska förbättringar i HTML
Header

Redan semantiskt korrekt: <header>, <nav>, <a>.

Ingen ändring behövdes.

Hero

Ursprungligen: En stor bakgrundsbild med hotspots.

Problem: Rubrik och text fanns bara i bilden.

Fix: Lade till en semantisk rubrik <h1>, en beskrivande <p>, samt riktiga <a>-länkar för App Store och Google Play.

Dessa är placerade i en <div class="visually-hidden"> för att inte påverka layouten.

Brands

Ursprungligen: En bild med logotyper.

Problem: Skärmläsare och sökmotorer ser bara "Partner logos".

Fix: Lade till en semantisk lista <ul> med <li> för varje brand (dolda med .visually-hidden).

Features

Ursprungligen: En bild med feature-översikt.

Problem: Funktionerna gick inte att läsa som text.

Fix: Lade till en rubrik <h2> och en lista <ul> med tre features i en dold container.

How it works

Ursprungligen: En bild med tre steg.

Fix: Lade till en ordnad lista <ol> med de tre stegen, dolda men semantiskt läsbara.

App Features

Ursprungligen: Bild av appskärmar.

Fix: Lade till en rubrik <h2> och en beskrivande <p> med text om funktionerna.

Testimonials

Ursprungligen: En bild med citat.

Fix: Lade till en rubrik <h2>, ett <blockquote> med citat samt en <cite> för källan.

FAQ

Ursprungligen: Bild med interaktiva hotspots (bra lösning).

Redan semantiskt korrekt tack vare <button> för frågor och <div> för svar.

Fix: Behöll strukturen men såg till att frågorna är riktiga texter och att svaren ligger i ARIA-roller (role="region").

Fix: Header bilder syntes inte i firefox. 

Fix Firefox html debugging 


