# Guide : Connecter Google Sheets à ta Landing Page

## 📊 Pourquoi Google Sheets ?

C'est le plus simple : tes données arrivent directement dans un spreadsheet que tu peux consulter, exporter, ou analyser. Zéro complication.

---

## ✅ Étapes de configuration

### **Étape 1 : Créer un Google Sheet**

1. Va sur [Google Sheets](https://sheets.google.com)
2. Crée un nouveau spreadsheet appelé "Daily Challenge Signups"
3. Crée 4 colonnes :
   - **A** : Timestamp
   - **B** : Prénom
   - **C** : Email
   - **D** : Source (hero_quick_signup ou funnel)
   - **E** : Genres (optionnel)
   - **F** : Objectif (optionnel)

### **Étape 2 : Créer un Apps Script**

1. Dans ton Google Sheet, clique sur **Extensions** → **Apps Script**
2. Supprime le code par défaut et remplace-le par ceci :

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    const row = [
      new Date(data.timestamp),
      data.firstName || '',
      data.email || '',
      data.source || 'funnel',
      data.genres || '',
      data.objective || ''
    ];
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Clique sur **Deploy** → **New deployment**
4. Sélectionne **Type** : "Web app"
5. Configure :
   - **Execute as** : Ton compte Google
   - **Who has access** : "Anyone"
6. Clique sur **Deploy**
7. Copie l'URL du déploiement (elle ressemble à : `https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercallable`)

### **Étape 3 : Mettre à jour ta Landing Page**

Dans le fichier `index.html`, trouve cette ligne (vers la ligne 800) :

```javascript
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercallable';
```

Remplace `YOUR_SCRIPT_ID` par l'ID de ton script (la partie entre `/s/` et `/usercallable` dans l'URL du déploiement).

**Exemple** :
```javascript
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxAbC123XyZ456/usercallable';
```

### **Étape 4 : Tester**

1. Ouvre ta landing page
2. Remplis le formulaire avec un email de test
3. Clique sur "Recevoir mon premier défi"
4. Retourne à ton Google Sheet
5. Tu devrais voir une nouvelle ligne avec tes données ! 🎉

---

## 🔄 Comment ça marche

1. **L'utilisateur remplit le formulaire** sur ta landing page
2. **JavaScript envoie les données** en POST à ton Apps Script
3. **L'Apps Script reçoit les données** et les ajoute au Google Sheet
4. **Les données s'affichent** instantanément dans ton spreadsheet

---

## 📧 Bonus : Envoyer un email automatique

Si tu veux envoyer un email de bienvenue automatiquement, ajoute ceci dans l'Apps Script (après `sheet.appendRow(row);`) :

```javascript
GmailApp.sendEmail(
  data.email,
  'Bienvenue sur Daily Challenge ! 🎵',
  'Salut ' + data.firstName + ',\n\nMerci de t\'être inscrit(e) ! Ton premier défi arrive demain matin.\n\nEn attendant, explore notre app et personnalise tes préférences.\n\nBonne chance ! 🚀'
);
```

---

## 🛡️ Sécurité

- Les données sont envoyées via HTTPS (chiffré)
- Seul ton Apps Script peut écrire dans le Google Sheet
- Tu peux limiter l'accès au Sheet à ta demande

---

## ❓ Troubleshooting

**Les données n'arrivent pas ?**
- Vérifie que l'URL du script est correcte dans le HTML
- Ouvre la console (F12) et cherche les erreurs
- Assure-toi que le script est déployé en "Web app" et accessible à "Anyone"

**L'email ne s'envoie pas ?**
- Vérifie que tu as activé l'accès Gmail dans les permissions de l'Apps Script

---

C'est tout ! Tes données vont maintenant directement dans Google Sheets. 🎉

