# Silicon Landing Page – Inlämningsuppgift

Detta är min implementation av designmallen *Silicon* (från kursens uppgift).  
Sidan är byggd med **HTML, CSS och JavaScript** och följer kraven för [VG].

## Arbetsprocess
- Jag började med att sätta upp HTML-strukturen utifrån designfilen i Figma.
- Därefter skrev jag CSS för layout, färger, variabler och dark/light theme.
- Slutligen lade jag till JavaScript för:
  - Theme-toggle (ljus/mörk version)
  - Mobilnavigation (hamburger-meny)
  - FAQ-accordion (endast en öppen åt gången)
  - Dynamiskt årtal i footern

## Användning av AI
Jag har **skrivit all kod själv**, men använt ChatGPT som bollplank för:
- Att **validera HTML och CSS** så att koden följer W3C-standard.
- Att **optimera JavaScript** (t.ex. göra FAQ-accordion mer robust).
- Att få tips på **struktur och städning av CSS** för att undvika dubbletter.

Jag har **inte klistrat in färdig kod** utan anpassat och skrivit om allt i min egen stil.  
Alla beslut kring layout, variabelnamn och struktur har jag gjort själv.

## Versionhantering
Projektet finns på GitHub i ett publikt repo.  
Jag har använt branches för de olika sektionerna (t.ex. `hero-section`, `faq-section`) och mergeat in i `main`.

## Funktioner
- Responsiv design (mobile-first)
- Light & dark theme via CSS-variabler
- Theme-toggle med localStorage
- FAQ-accordion med tillgänglighetsattribut
- Dynamiskt årtal i footern

## Kravuppfyllnad (checklista)
- [x] Sektioner: Header, Hero, Brands, Features, How-Does-It-Work, App Features, Testimonials, FAQ, Subscribe, Footer  
- [x] Mobile-first & responsiv (VG)  
- [x] Light & Dark theme (VG)  
- [x] Toggle mellan teman (VG)  
- [x] FAQ-accordion: en öppen i taget (VG)  
- [x] GitHub-repo med branches per sektion (VG)
