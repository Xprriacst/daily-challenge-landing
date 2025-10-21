# 🚀 Guide Rapide : Connecter Google Sheets (5 minutes)

## ✅ Étape 1 : Créer le Google Sheet

1. Va sur [sheets.google.com](https://sheets.google.com)
2. Nouveau spreadsheet → Nomme-le "Daily Challenge Signups"
3. Ajoute ces en-têtes dans la première ligne :
   ```
   A1: Timestamp
   B1: Prénom
   C1: Email
   D1: Source
   E1: Genres
   F1: Objectif
   ```

## ✅ Étape 2 : Créer l'Apps Script

1. Dans ton Google Sheet : **Extensions** → **Apps Script**
2. Supprime le code par défaut
3. Copie-colle le code du fichier `google-apps-script.js`
4. Clique sur **💾 Enregistrer**

## ✅ Étape 3 : Déployer le script

1. Clique sur **Deploy** (en haut à droite) → **New deployment**
2. Clique sur l'icône ⚙️ à côté de "Select type"
3. Choisis **Web app**
4. Configure :
   - **Description** : "Landing page form handler"
   - **Execute as** : Ton compte Google
   - **Who has access** : **Anyone** ⚠️ (important !)
5. Clique sur **Deploy**
6. Autorise l'application (Google va te demander des permissions)
7. **📋 COPIE L'URL** qui s'affiche (elle ressemble à `https://script.google.com/macros/s/AKfycby...`)

## ✅ Étape 4 : Mettre à jour le HTML

1. Ouvre `Application Aider Artistes Instagram.html`
2. Trouve la ligne 1574 :
   ```javascript
   const GOOGLE_SHEET_URL = 'COLLE_TON_URL_ICI';
   ```
3. Remplace `'COLLE_TON_URL_ICI'` par l'URL que tu as copiée
4. Sauvegarde le fichier

## ✅ Étape 5 : Tester

1. Ouvre ton fichier HTML dans un navigateur
2. Remplis le formulaire avec un email de test
3. Clique sur "Recevoir mon premier défi"
4. Retourne à ton Google Sheet
5. **🎉 Les données devraient apparaître !**

---

## 🔍 Dépannage

### ❌ Les données n'arrivent pas ?

1. **Vérifie l'URL** dans le HTML (ligne 1574)
2. **Ouvre la console** (F12 dans le navigateur) et cherche les erreurs
3. **Vérifie les permissions** : le script doit être accessible à "Anyone"
4. **Re-déploie** le script si nécessaire

### ❌ Erreur "Authorization required" ?

- Retourne dans Apps Script
- Deploy → Manage deployments
- Vérifie que "Who has access" = **Anyone**

---

## 📊 Ce qui sera sauvegardé

### Formulaire rapide (hero) :
- ✅ Timestamp
- ✅ Prénom
- ✅ Email
- ✅ Source: "hero_quick_signup"

### Formulaire complet (funnel) :
- ✅ Timestamp
- ✅ Prénom
- ✅ Email
- ✅ Source: "funnel"
- ✅ Genres sélectionnés
- ✅ Objectif choisi

---

## 🎁 Bonus : Email automatique

Pour envoyer un email de bienvenue automatiquement, ajoute ce code dans `google-apps-script.js` après `sheet.appendRow(row);` :

```javascript
// Envoyer un email de bienvenue
if (data.email) {
  GmailApp.sendEmail(
    data.email,
    'Bienvenue sur Daily Challenge ! 🎵',
    'Salut ' + (data.firstName || 'artiste') + ',\n\n' +
    'Merci de t\'être inscrit(e) ! Ton premier défi arrive bientôt.\n\n' +
    'En attendant, prépare-toi à développer ta visibilité sur Instagram ! 🚀\n\n' +
    'À très vite,\nL\'équipe Daily Challenge'
  );
}
```

⚠️ **Note** : Gmail limite à 100 emails/jour pour les comptes gratuits.

---

C'est tout ! Tu es prêt(e) à collecter des inscriptions. 🎉
