# Hosting Setup Guide for Admin Panel

## Step 1: Deploy to Hosting (Netlify/Vercel)

### For Netlify:
1. Connect GitHub repository to Netlify
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
3. Environment variables:
   - `HOSTING_API_URL`: Your hosting database API URL
   - `HOSTING_API_KEY`: Your API authentication key

### For Vercel:
1. Connect GitHub repository to Vercel
2. Framework preset: Create React App
3. Environment variables same as above

## Step 2: Database Setup (Choose one)

### Option A: Firebase (Recommended)
1. Go to https://firebase.google.com
2. Create new project
3. Enable Firestore Database
4. Get API credentials
5. Replace in server.js:
   ```
   HOSTING_API_URL=https://your-project.firebaseio.com
   HOSTING_API_KEY=your-firebase-key
   ```

### Option B: MongoDB Atlas
1. Go to https://www.mongodb.com/atlas
2. Create free cluster
3. Get connection string
4. Replace in server.js

### Option C: Supabase
1. Go to https://supabase.com
2. Create new project
3. Get API URL and key
4. Replace in server.js

## Step 3: Admin Panel Access

After deployment, admin panel will be available at:
- `https://www.travelcsbd.com/admin`
- Login: `admin` / `traveladmin123`

## Step 4: Data Sync

### Automatic Sync:
- Data syncs every 5 minutes automatically
- All bookings, users, chat messages sync to hosting

### Manual Sync:
- Click "🔄 Sync to Hosting" button in admin panel
- Instant data sync to hosting database

## Step 5: Production URLs

Configured for travelcsbd.com:
- `HOSTING_API_URL`: https://www.travelcsbd.com/api
- `HOSTING_API_KEY`: travelcsbd-admin-key
- `ADMIN_URL`: https://www.travelcsbd.com/admin

## Features:
✅ Admin panel accessible at `/admin`
✅ All data saves to hosting database
✅ Real-time sync every 5 minutes
✅ Manual sync button
✅ Secure authentication
✅ Mobile responsive admin panel