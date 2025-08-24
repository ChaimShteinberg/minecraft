# Minecraft Browser Game

משחק מיינקרפט דו-ממדי פשוט המפותח ב-HTML, CSS ו-JavaScript. המשחק מאפשר לשחקנים לכרות משאבים, לאגור אותם ולבנות בעולם וירטואלי.

## 🎮 תכונות המשחק

- **עולם 2D**: רשת של 3000 אריחים הכוללת שמיים, עפר, אבנים ועצים
- **מערכת כלים**: שלושה כלים לכריית משאבים שונים:
  - 🪓 גרzen - לכריתת עצים
  - ⛏️ מכוש - לכריית אבנים
  - 🏗️ את - לחפירת עפר
- **מערכת משאבים**: אגירה וספירה של משאבים שנכרו
- **מערכת בנייה**: הצבת משאבים חזרה בעולם

## 📁 מבנה הפרויקט

```
minecraft-game/
├── index.html              # דף הבית עם כפתור התחלה
├── pages/
│   └── game.html           # דף המשחק הראשי
├── scripts/
│   ├── main.js            # קובץ הקואורדינציה הראשי
│   ├── start.js           # יצירת עולם המשחק
│   ├── tools.js           # מערכת הכלים
│   ├── stacks.js          # מערכת המלאי
│   ├── tiles.js           # טיפול באירועי קליק על אריחים
│   ├── tileAfterTool.js   # לוגיקת כריית משאבים
│   └── tilesAfterStacks.js # לוגיקת הצבת משאבים
└── styles/
    ├── style.css          # עיצוב דף הבית
    └── default.css        # עיצוב המשחק
```

## 🎯 איך לשחק

### התחלה
1. פתח את `index.html` בדפדפן
2. לחץ על "Start Game"
3. תועבר לדף המשחק

### בחירת כלים
- לחץ על אחד מהכלים בצד השמאלי:
  - **גרzen** - לכריתת עצים
  - **מכוש** - לכריית אבנים
  - **את** - לחפירת עפר

### כריית משאבים
1. בחר כלי מתאים
2. לחץ על האריח הרצוי כדי לכרות
3. המשאב יתווסף למלאי

### בנייה
1. לחץ על המשאב במלאי (מספרים בצד)
2. לחץ על אריח ריק כדי להציב את המשאב

## 🏗️ ארכיטקטורת הקוד

### קבצי JavaScript

#### `main.js` - קואורדינציה ראשית
- מייבא את כל המודולים
- מטפל באירועי קליק על כלים ומלאי
- מנהל את מצב המשחק הכללי

#### `start.js` - יצירת העולם
- יוצר 3000 אריחים
- מגדיר שכבות: שמיים (0-999), עפר (1000-1999), אבנים (2000-2999)
- מציב עצים במיקומים מוגדרים מראש

#### `tools.js` - מערכת כלים
- שומר את הכלי הנבחר
- מספק פונקציות לבחירה וקריאה של כלים

#### `stacks.js` - מערכת מלאי
- מנהל אובייקט מלאי עם משאבים
- מעדכן תצוגת המלאי
- מספק פונקציות להוספה והצבת משאבים

#### `tiles.js` - טיפול בקליקים
- מפנה קליקים לפונקציות המתאימות
- מבחין בין מצב כריה למצב בנייה

#### `tileAfterTool.js` - לוגיקת כריה
- בודק התאמה בין כלי לאריח
- מסיר אריחים ומוסיף למלאי

#### `tilesAfterStacks.js` - לוגיקת בנייה
- מטפל בהצבת משאבים מהמלאי
- כולל גם פונקציונליות כריה חלופית

## 🎨 עיצוב ותצוגה

### CSS Structure
- **Grid Layout**: המשחק משתמש ב-CSS Grid ליצירת רשת אריחים
- **Background Images**: כל סוג אריח וכלי משתמש בתמונת רקע
- **Responsive Design**: המשחק מותאם למסכים שונים
- **Hover Effects**: אפקטים ויזואליים לאינטראקטיביות

### Assets Required
המשחק מצפה לתמונות בתיקייה `assets/images/`:
- `axe.webp` - תמונת גרzen
- `shovel.webp` - תמונת את
- `pickaxe.webp` - תמונת מכוש
- `dirt.webp` - תמונת עפר
- `stone.webp` - תמונת אבן
- `tree.webp` - תמונת עץ
- `minecraft.jpeg` - רקע דף הבית

## 🔧 טכנולוגיות

- **HTML5**: מבנה בסיסי
- **CSS3**: עיצוב ואנימציות
- **Vanilla JavaScript**: לוגיקת משחק
- **ES6 Modules**: ארגון קוד מודולרי

## 🚀 הרצה מקומית

1. הורד את כל הקבצים
2. ודא שתיקיית `assets/images/` מכילה את כל התמונות הנדרשות
3. פתח את `index.html` בדפדפן
4. התחל לשחק!

## 🎯 תכונות עתידיות אפשריות

- [ ] שמירה וטעינה של עולם המשחק
- [ ] יותר סוגי משאבים וכלים
- [ ] מערכת קרפטינג
- [ ] מפות גדולות יותר
- [ ] מצב מולטיפלייר
- [ ] מערכת הישרדות (רעב, בריאות)
- [ ] יצורים ו-NPCs

## 🐛 בעיות ידועות

- המשחק לא שומר התקדמות בין סשנים
- אין אפשרות לשנות גודל מפה
- חוסר תמיכה במכשירים ניידים

## 📊 תרשים זרימה

```mermaid
flowchart TD
    A[index.html - דף הבית] --> B[לחיצה על Start Game]
    B --> C[game.html - דף המשחק]
    C --> D[start.js - יצירת 3000 אריחים]
    D --> E[main.js - הפעלת מאזיני אירועים]
    
    E --> F{בחירת פעולה}
    
    F -->|לחיצה על כלי| G[tools.js - בחירת כלי]
    G --> H[עדכון selectedTool]
    H --> I[select = 'tool']
    
    F -->|לחיצה על מלאי| J[stacks.js - בחירת משאב]
    J --> K[עדכון placingType]
    K --> L[select = 'stack']
    
    F -->|לחיצה על אריח| M{בדיקת מצב select}
    
    M -->|select = 'tool'| N[tileAfterTool.js]
    N --> O{בדיקת התאמה}
    O -->|כלי מתאים| P[הסרת אריח + הוספה למלאי]
    O -->|כלי לא מתאים| Q[ללא פעולה]
    
    M -->|select = 'stack'| R[tilesAfterStacks.js]
    R --> S{בדיקת placingType}
    S -->|יש משאב| T[הצבת אריח + הסרה ממלאי]
    S -->|אין משאב| U[מצב כריה]
    
    P --> V[stacks.js - עדכון תצוגת מלאי]
    T --> V
    U --> N
    
    V --> W[המתנה לפעולה הבאה]
    Q --> W
    W --> F
    
    style A fill:#e1f5fe
    style C fill:#e8f5e8
    style G fill:#fff3e0
    style J fill:#fff3e0
    style N fill:#fce4ec
    style R fill:#fce4ec
    style V fill:#f3e5f5
```

## 🔄 זרימת נתונים מפורטת

### מבנה מערכת הכלים
```mermaid
graph LR
    A[User Click על כלי] --> B[selectTool function]
    B --> C[עדכון selectedTool]
    C --> D[עדכון select = 'tool']
    D --> E[זמינות לכריה]
```

### מבנה מערכת המלאי
```mermaid
graph TB
    A[inventory object] --> B[tree: Array]
    A --> C[rocks: Array]  
    A --> D[dirt: Array]
    
    B --> E[updateStacksUI]
    C --> E
    D --> E
    
    E --> F[עדכון תצוגת מספרים]
```

### מחזור כריה מלא
```mermaid
sequenceDiagram
    participant U as User
    participant T as Tools System
    participant M as Main Handler
    participant TA as TileAfterTool
    participant S as Stacks System
    
    U->>T: לחיצה על כלי
    T->>M: עדכון selectedTool
    M->>M: select = 'tool'
    U->>M: לחיצה על אריח
    M->>TA: קריאה לtileAfterTool
    TA->>TA: בדיקת התאמה כלי-אריח
    TA->>S: addToInventory
    S->>S: עדכון array במלאי
    S->>U: עדכון תצוגה
```

### מחזור בנייה מלא
```mermaid
sequenceDiagram
    participant U as User
    participant S as Stacks System
    participant M as Main Handler
    participant TAS as TilesAfterStacks
    
    U->>S: לחיצה על משאב במלאי
    S->>M: עדכון placingType
    M->>M: select = 'stack'
    U->>M: לחיצה על אריח
    M->>TAS: קריאה לtilesAfterStacks
    TAS->>S: placeTile
    S->>S: הסרה מהarray
    S->>U: עדכון תצוגה
```

## 📝 רישיון

פרויקט חינמי ופתוח לשימוש אישי וחינוכי.
