# Igéragozás Gyakorló - PWA

Egy modern, reszponzív webapplikáció német igék múlt idejű alakjainak gyakorlásához. React, Next.js és Tailwind CSS alapokon épülő PWA (Progressive Web App), amely telefonon, táblagépen és laptoppon is flawlessly működik.

## Jellemzők

- ✨ **Reszponzív dizájn** - Tökéletesen működik telefonon, táblagépen és desktopkon
- 🌓 **Dark Mode & Light Mode** - Teljes sötét és világos témavá
- 📱 **PWA kompatibilis** - Offline működés és telepítés támogatás
- ⚡ **Gyors betöltés** - Next.js optimalizációkkal
- 🎯 **Interaktív tanulás** - Felfedezési módú gyakorlás német igékhez

## Szerkezet

```
.
├── app/                      # Next.js App Router
│   ├── page.tsx             # Nyitóoldal (8 menügomb 2x4 elrendezésben)
│   ├── layout.tsx           # Fő layout
│   ├── globals.css          # Globális stílusok
│   ├── conjugation/
│   │   ├── page.tsx         # Igéragozás lista oldal
│   │   └── [id]/
│   │       └── page.tsx     # Gyakorlat oldal (valódi tartalom az 1-eshez)
│   └── placeholder/[id]/
│       └── page.tsx         # Placeholder oldalak
├── components/              # React komponensek
│   ├── ThemeProvider.tsx    # Dark mode kezelés
│   └── MenuButton.tsx       # Menü gombkomponens
├── lib/
│   └── verbs.ts            # Német igék adatbázisa
├── public/
│   └── manifest.json       # PWA manifest
├── package.json
├── tailwind.config.ts      # Tailwind CSS konfigurálás
├── tsconfig.json          # TypeScript konfigurálás
└── vercel.json           # Vercel deployment konfigurálás
```

## Telepítés

### Előfeltételek
- Node.js 18+
- npm vagy yarn

### Lépések

1. **Függőségek telepítése**
```bash
npm install
```

2. **Dev szerver indítása**
```bash
npm run dev
```
Az alkalmazás megnyitható a `http://localhost:3000` alatt.

3. **Production build**
```bash
npm run build
npm start
```

## Telepítés Vercelre

1. A GitHub/GitLab repóba push-olja a projektet
2. Látogasson el a [Vercel](https://vercel.com) weboldalra
3. Importálja a repóját
4. Az alapértelmezett beállítások jók, csak nyomjon Deploy-t
5. Kész! Az alkalmazás azonnal elérhető lesz

## Használat

### Nyitóoldal
8 gomb 2x4 elrendezésben (4 oszlop desktopkon, 2 oszlop telefonon).

### Igéragozás gyakorlat
1. Kattintson az "Igeragozás" gombra a nyitóoldalon
2. Válasszon egy gyakorlatot a listából
3. Az első praktikával már lehet szöveggel gyakorlni:
   - **Magyar módban**: Egy magyar igét lát, és gombnyomásra megjelennek a 3 német forma
   - **Német módban**: A német szótári alakot látja, és gombnyomásra a magyar és a 2 múlt idejű forma jelenik meg
4. Navigáljon az előző/következő gombokkal más igék között
5. Váltson a nyelvek között a fejléc gombjával

## Igék adatbázisa

Az igék a `lib/verbs.ts` fájlban vannak tárolva. Jelenleg 20 ige van a listában, ebből az első gyakorlat (múlt idejű alakok / 1) tartalmas.

Az igék formátuma:
```typescript
{
  id: number;
  hungarian: string;                      // Pl: "enni"
  german_infinitive: string;             // Pl: "essen"
  german_present_first_person: string;   // Pl: "aß"
  german_past_participle: string;        // Pl: "gegessen"
}
```

## Stílusrendszer

- **Alap szín**: Fekete és fehér
- **Dark mode**: Fekete háttér, fehér szöveg
- **Light mode**: Fehér háttér, fekete szöveg
- **Szürkeárnyalatok**: Csak igény esetén (hover, active állapotok)

## Technológiák

- **Next.js 14** - React keretrendszer
- **React 18** - UI könyvtár
- **Tailwind CSS 3** - Stílusrendszer
- **TypeScript** - Típusbiztos kód
- **next-themes** - Dark mode kezelés

## Fejlesztés

```bash
# Dev szerver indítása hot reload-dal
npm run dev

# ESLint ellenőrzés
npm run lint

# Build
npm run build

# Production szerver
npm start
```

## License

MIT
