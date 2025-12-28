# Hosting Deployment Guide for www.travelcsbd.com

## Folder Structure for Hosting:

### Application Root (main folder):
```
travel-councellor-ltd/
├── package.json
├── src/
├── public/
├── server/
├── .htaccess
└── all other app files
```

### public_html (hosting folder):
```
public_html/
├── .htaccess (copy from build)
├── static/ (from build/static)
├── index.html (from build)
└── other build files
```

## Deployment Steps:

### Step 1: Build the App
```bash
npm run build
```

### Step 2: Upload Files
- **Application Root**: Upload entire project folder to hosting root
- **public_html**: Copy only build folder contents to public_html

### Step 3: File Structure
```
hosting-account/
├── travel-councellor-ltd/ (Application Root)
│   ├── package.json
│   ├── src/
│   ├── server/
│   └── all app files
└── public_html/ (Web Root)
    ├── .htaccess
    ├── static/
    ├── index.html
    └── build files only
```

### Step 4: .htaccess Configuration
Place this in public_html/.htaccess:
```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

### Step 5: Admin Panel Access
- URL: https://www.travelcsbd.com/admin
- Login: admin / traveladmin123

## Important Notes:
✅ App files stay in Application Root
✅ Only build files go to public_html
✅ .htaccess handles React routing
✅ Admin panel works at /admin route