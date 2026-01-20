# 🎨 AUTO CLEAN 40 - Guide Complet du Nouveau Design

## ✨ Design Refait avec Palette Jaune/Noir

### 🎨 Palette de Couleurs Utilisée
```css
--primary: #FFFF00      (Jaune vif - Couleur principale)
--dark: #000000         (Noir pur - Fond principal)
--dark-light: #131313   (Gris très foncé - Sections alternées)
--white: #FFFFFF        (Blanc - Textes)
```

## 🚀 Améliorations Réalisées

### ✅ 1. Design & Couleurs
- **100% respect de la palette** : Seules les couleurs #FFFF00, #131313, #000000
- **Effets radiants** : Dégradés transparents pour profondeur
- **Ombres lumineuses** : `box-shadow` avec rgba(255, 255, 0, 0.X)
- **Bordures jaunes** partout avec effet glow

### ✅ 2. Marquee Animé
```html
<div class="info-marquee">
  - Adresse : 491 Rue Forestière, Biscarrosse
  - Téléphone : 07 66 36 70 51
  - Horaires : 7j/7 | 9h - 20h
  - Zones : Biscarrosse, Parentis, Mimizan, Arcachon, Landes
</div>
```
Animation fluide en boucle infinie (40s)

### ✅ 3. Cartes de Même Taille
**Service Cards** : `min-height: 420px`
**Pricing Cards** : `min-height: 500px`
**Review Cards** : `min-height: 280px`

Toutes les cartes d'une même catégorie ont exactement la même hauteur !

### ✅ 4. Mobile Parfait
- Navigation hamburger fonctionnelle
- Grilles qui deviennent 1 colonne
- Boutons pleine largeur
- Texte responsive (de 4rem à 2rem)
- Images qui s'adaptent

### ✅ 5. Marges Corrigées
- Sections : `padding: 6rem 0`
- Containers : `padding: 0 1.5rem`
- Cards : `padding: 2.5rem`
- Gaps uniformes : `gap: 2rem` partout
- Plus d'éléments qui se chevauchent !

### ✅ 6. Éléments Visuels Ajoutés

**Logo AC** :
- Header (55x55px avec border jaune)
- Pages importantes (agrandi)
- Footer (50x50px)

**Badges** :
- "★ PREMIUM ★" sur service polissage
- "Populaire" sur meilleures offres
- Tous avec fond jaune dégradé

**Icons** :
- SVG remplis de jaune (#FFFF00)
- Drop-shadow jaune pour effet glow
- 75x75px pour services
- 55x55px pour contact

### ✅ 7. Effets Spéciaux

**Glassmorphism** :
```css
background: rgba(19, 19, 19, 0.95);
border: 2px solid rgba(255, 255, 0, 0.2);
```

**Hover Effects** :
```css
transform: translateY(-10px);
box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 
            0 0 40px rgba(255, 255, 0, 0.3);
```

**Glow Text** :
```css
text-shadow: 0 0 20px rgba(255, 255, 0, 0.4);
```

## 📱 Responsive Breakpoints

### Desktop (1024px+)
- Grille 2-4 colonnes
- Logo 55px
- Titre 4rem
- Navigation complète

### Tablet (768-1024px)
- Grille 2 colonnes
- Logo 50px
- Titre 3rem
- Navigation complète

### Mobile (< 768px)
- Grille 1 colonne
- Menu hamburger
- Titre 2.5rem
- Boutons 100% largeur

### Petit Mobile (< 480px)
- Titre 2rem
- Padding réduit
- Espacement optimisé

## 🎯 Pages Incluses

1. **index.html** - Accueil avec Hero, Services, Avis, CTA
2. **devis.html** - Créateur de devis interactif
3. **polissage.html** - Service Premium (mis en avant)
4. **nettoyage-automobile.html** - Packs de nettoyage
5. **nettoyage-moteur.html** - Service moteur
6. **renovation-phares.html** - Rénovation phares
7. **entretien-domestique.html** - Services maison
8. **abonnements.html** - Formules d'abonnement
9. **contact.html** - Formulaire de contact

## 🔧 Fonctionnalités JavaScript

### FAQ Accordion
```javascript
- Ouverture/fermeture au clic
- Rotation icône (45deg)
- Transition fluide
- Un seul ouvert à la fois
```

### Devis Builder
```javascript
- Sélection multiple
- Calcul automatique total
- Envoi par email
- Appel téléphonique
- Validation des sélections
```

### Animations
```javascript
- Marquee en boucle
- Cards au scroll
- Hover effects
- Float animation (3s)
```

## 📊 Performances

- **CSS** : 1 fichier, minifié possible
- **JS** : Vanilla, pas de framework
- **Images** : Lazy loading possible
- **Fonts** : Google Fonts (Inter)

## 🎨 Personnalisation Future

Pour changer les couleurs :
```css
:root {
    --primary: #VOTRE_COULEUR;
    --dark: #VOTRE_COULEUR;
    --dark-light: #VOTRE_COULEUR;
}
```

Pour ajouter une card :
```html
<div class="service-card">
  <!-- Votre contenu -->
</div>
```
La hauteur s'adaptera automatiquement !

## 📞 Support

Toutes les pages sont prêtes à l'emploi.
Ajoutez vos vraies images dans les placeholders.
Le site est 100% responsive et fonctionnel !

---

**Design créé spécialement pour AUTO CLEAN 40**
**Palette : Jaune #FFFF00 / Noir #000000 / Gris #131313**
**Mobile-First & Performance Optimisée**
