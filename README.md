# ⭐ Cum rulezi aplicația
1. Te asiguri că în */backend ai fișierul ultrasecret .env care să includă:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/proba-it
```
2. Te asiguri că ai toate bibliotecile de la node.js instalate

3. Rulezi oriunde:

```sudo mongod --dbpath /var/lib/mongodb/```

4. Rulezi în */backend:

```npm start```

5. Rulezi în */frontend:
   
```npm start```

Acum site-ul se deschide în browser în 167% din cazuri! 🤞

# ⭐ Taskuri completate
În principal funcționează doar frontend-ul, care se adaptează în funcție de rezoluția ecranului.

## Homepage
Homepage-ul ar trebui să arate exact ca cel de pe Figma pe toate dispozitivele.

De asemenea, pe soția lui Peter Griffin o cheamă Lois, nu Louis! 😠

## Header
Header-ul este atotprezent și butoanele sunt super receptive și se schimbă dacă utilizatorul este logat/delogat.

## Login
Pagina de login verifică adecvat credențialele introduse de utilizator și starea de logged in este menținută și după oprirea aplicației.

MongoDB cară cam tot backend-ul, datorită funcționalităților sale magice am putut să stochez și să preiau datele utilizatorilor. 🙏

Pagina de Forgot Password există, adică poți să te uiți la ea.

## Profile
Cardul cu detaliile contului poate în sfârșit să afișeze datele utilizatorului (m-am luptat mult cu asta).

Există și niște grilluri placeholder (scrise de mine) și butonul de post, la fel ca butoanele de "Edit post" și "Delete post" pentru fiecare grill.

## Leaderboard
Pe pagina de Best grills există și un leaderboard cu THE BEST GRILLS, deși doar frontendul este implementat.

## Liking Posts
Utilizatorul poate oferi și retrage mici care să se prăjească/deprăjească, deși aceștia există doar în mintea grătaragiului în cauză...

## Searching Grills
Pagina de Best Grills are o interfață prietenoasă și interactivă și pop-urile cred că arată destul de bine pentru grillurile placeholder.

# ⭐ Experiența
Ce am învățat cel mai mult din acest proiect este că nu e bine să îngrași porcul pe ultima sută de metri. 🐖

Practic, am lucrat 3 zile:
- când am făcut setupul cu mentorul (mersi Ana pentru tech support și încurajare 🙏)
- joi înainte de deadline, ignorând învățatul la parțialul de algaed de peste două zile
- duminică seara înainte de deadline (pentru că am fost ocupat în weekend cu hackathonul bestem (supă de linte la doză))

Nu recomand acest workflow, mai ales pentru că acum regret că nu am făcut mai mult pentru acest proiect.

Mi-am dat seama că tehnologii web ca react și node.js nu sunt chiar ATÂT de greu de folosit (cel puțin când ai un mentor și câteva LLM-uri care să-ți răspundă la întrebări).

De asemenea, mi-am dat seama rapid că nu e bine să pui toate componentele react în același directory și că nu e bine să ai o grămadă de funcții în fiecare script care să-ți formateze fiecare div (acum e prea târziu).

Totuși, eu zic că a ieșit ok pentru primul proiect web care să nu fie un html pentru ora de info.

Sper să contribui la mai multe proiecte dacă voi fi acceptat în departamentul de IT. 🤞

Și nu uitați să vă jucați Garfield's Scary Scavenger Hunt!
