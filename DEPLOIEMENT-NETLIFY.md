# 🚀 Déploiement sur Netlify - Guide Complet

## ✅ Fichiers Préparés

Tous les fichiers nécessaires ont été créés :
- ✅ `index.html` (ton site)
- ✅ `netlify.toml` (configuration Netlify)
- ✅ `.gitignore` (fichiers à ignorer)

---

## 🎯 Option 1 : Déploiement via CLI (Recommandé)

### Étape 1 : Ouvre un terminal dans le dossier
```bash
cd "/Users/alexandreerrasti/Downloads/landing-page manus musicgrowth"
```

### Étape 2 : Lance le déploiement
```bash
netlify deploy --prod --dir=.
```

### Étape 3 : Suis les instructions
1. **Choisis** : `+ Create & configure a new project`
2. **Team** : Sélectionne ton équipe Netlify
3. **Site name** : Tape `daily-challenge-music` (ou un autre nom)
4. **Attends** que le déploiement se termine

### Résultat
Tu recevras une URL comme : `https://daily-challenge-music.netlify.app`

---

## 🎯 Option 2 : Déploiement via Interface Web (Plus Simple)

### Étape 1 : Va sur Netlify
Ouvre [app.netlify.com](https://app.netlify.com)

### Étape 2 : Drag & Drop
1. Clique sur **"Add new site"** → **"Deploy manually"**
2. **Glisse-dépose** le dossier entier dans la zone
3. Attends quelques secondes

### Étape 3 : Personnalise le nom
1. Clique sur **"Site settings"**
2. **"Change site name"**
3. Tape : `daily-challenge-music`
4. Sauvegarde

### Résultat
Ton site sera en ligne à : `https://daily-challenge-music.netlify.app`

---

## 🎯 Option 3 : Déploiement via GitHub (Pour les mises à jour automatiques)

### Étape 1 : Crée un repo GitHub
```bash
cd "/Users/alexandreerrasti/Downloads/landing-page manus musicgrowth"
git init
git add .
git commit -m "Initial commit - Daily Challenge landing page"
```

### Étape 2 : Pousse sur GitHub
1. Crée un nouveau repo sur [github.com](https://github.com/new)
2. Nomme-le `daily-challenge-landing`
3. Exécute :
```bash
git remote add origin https://github.com/TON_USERNAME/daily-challenge-landing.git
git branch -M main
git push -u origin main
```

### Étape 3 : Connecte à Netlify
1. Va sur [app.netlify.com](https://app.netlify.com)
2. **"Add new site"** → **"Import an existing project"**
3. Choisis **GitHub**
4. Sélectionne ton repo `daily-challenge-landing`
5. **Build settings** :
   - Build command : (laisse vide)
   - Publish directory : `.`
6. Clique sur **"Deploy"**

### Avantage
Chaque fois que tu pousses sur GitHub, Netlify redéploie automatiquement ! 🎉

---

## 📊 Vérifier que tout fonctionne

Une fois déployé, teste :

1. ✅ **Page principale** : Le hero s'affiche correctement
2. ✅ **Formulaire hero** : Teste une inscription
3. ✅ **Pills de genres** : Clique sur un genre → Redirection vers inscription
4. ✅ **Formspree** : Va sur [formspree.io](https://formspree.io) pour voir les soumissions
5. ✅ **Responsive** : Teste sur mobile (ouvre les DevTools → Mode mobile)

---

## 🔗 URLs Importantes

- **Ton site** : `https://daily-challenge-music.netlify.app` (ou le nom que tu as choisi)
- **Dashboard Netlify** : [app.netlify.com](https://app.netlify.com)
- **Formspree** : [formspree.io](https://formspree.io/forms/xovkzray/submissions)

---

## 🛠️ Commandes Utiles

### Déployer une nouvelle version
```bash
cd "/Users/alexandreerrasti/Downloads/landing-page manus musicgrowth"
netlify deploy --prod --dir=.
```

### Voir les logs de déploiement
```bash
netlify watch
```

### Ouvrir le site dans le navigateur
```bash
netlify open:site
```

### Ouvrir le dashboard Netlify
```bash
netlify open:admin
```

---

## 🎉 C'est Tout !

Ton site Daily Challenge est prêt à être déployé. Choisis l'option qui te convient le mieux ! 🚀

**Recommandation** : Option 2 (Interface Web) est la plus rapide pour un premier déploiement.
