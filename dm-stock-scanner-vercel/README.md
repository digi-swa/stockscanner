# DM Stock Scanner - Vercel Deployment

## Bestanden
- `index.html` - De stock scanner app
- `vercel.json` - Vercel configuratie

---

## Optie 1: Via Vercel Dashboard (Makkelijkst)

### Stap 1: Ga naar Vercel
1. Ga naar [vercel.com](https://vercel.com)
2. Log in of maak een gratis account aan

### Stap 2: Deploy
1. Klik op **"Add New..."** → **"Project"**
2. Kies **"Import Third-Party Git Repository"** of scroll naar beneden
3. Of gebruik de **drag & drop** zone:
   - Sleep de hele `dm-stock-scanner-vercel` folder naar de upload zone
   
### Stap 3: Configureer
1. Project naam: `dm-stock-scanner` (of wat je wilt)
2. Framework Preset: **Other**
3. Klik **"Deploy"**

### Stap 4: Klaar!
Na ~30 seconden krijg je een URL zoals:
`https://dm-stock-scanner.vercel.app`

---

## Optie 2: Via Vercel CLI

### Installeer Vercel CLI
```bash
npm install -g vercel
```

### Login
```bash
vercel login
```

### Deploy
```bash
cd dm-stock-scanner-vercel
vercel
```

Volg de prompts:
- Set up and deploy? **Y**
- Which scope? *Kies je account*
- Link to existing project? **N**
- Project name? **dm-stock-scanner**
- Directory? **./** (huidige directory)

### Production deploy
```bash
vercel --prod
```

---

## Optie 3: Via GitHub

### Stap 1: Maak GitHub repository
1. Ga naar [github.com/new](https://github.com/new)
2. Naam: `dm-stock-scanner`
3. Klik **"Create repository"**

### Stap 2: Upload bestanden
1. Klik **"uploading an existing file"**
2. Sleep `index.html` en `vercel.json` naar de upload zone
3. Klik **"Commit changes"**

### Stap 3: Koppel aan Vercel
1. Ga naar [vercel.com/new](https://vercel.com/new)
2. Klik **"Import"** naast je `dm-stock-scanner` repository
3. Klik **"Deploy"**

### Voordeel
Elke keer als je een bestand update in GitHub wordt de app automatisch opnieuw gedeployed!

---

## Na deployment

### Test de app
1. Open de Vercel URL op je mobiel
2. Voeg `?debug=1` toe voor debug modus: `https://jouw-app.vercel.app/?debug=1`

### Custom domein (optioneel)
1. Ga naar je project in Vercel dashboard
2. **Settings** → **Domains**
3. Voeg je eigen domein toe

### Updates deployen
- **Via Dashboard**: Upload nieuwe `index.html`
- **Via CLI**: `vercel --prod`
- **Via GitHub**: Push naar repository

---

## Troubleshooting

### Camera werkt niet
- Zorg dat je HTTPS gebruikt (Vercel doet dit automatisch)
- Geef camera permissies in de browser

### App laadt niet
- Check browser console (F12) voor errors
- Probeer `?debug=1` toe te voegen aan de URL

### Data laadt niet
- Check of je Notion API key correct is
- Ga naar Meer → Instellingen → API key opnieuw invoeren
