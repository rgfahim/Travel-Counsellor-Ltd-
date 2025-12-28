# 🌐 Hosting Database Connection Guide
## Travel Counsellor BD - MySQL Setup

### 🎯 **Complete Process to Connect Database on Hosting**

---

## 📋 **Step 1: Prepare Your Hosting Environment**

### **A. cPanel Hosting (Most Common)**
1. **Login to cPanel**
   - Go to your hosting provider's cPanel
   - Enter your username/password

2. **Access MySQL Databases**
   - Find "MySQL Databases" in cPanel
   - Click to open

### **B. Alternative Hosting**
- **Shared Hosting**: Use hosting control panel
- **VPS/Dedicated**: SSH access required
- **Cloud Hosting**: Use provider's database panel

---

## 🗄️ **Step 2: Create MySQL Database**

### **In cPanel MySQL Databases:**

1. **Create Database**
   ```
   Database Name: travbycp_travelcounsellorbd
   ```
   - Click "Create Database"

2. **Create Database User**
   ```
   Username: travbycp_travelcounsellor
   Password: Travelcounsellor12@#
   ```
   - Click "Create User"

3. **Add User to Database**
   - Select user: `travbycp_travelcounsellor`
   - Select database: `travbycp_travelcounsellorbd`
   - Grant "ALL PRIVILEGES"
   - Click "Make Changes"

---

## 📊 **Step 3: Import Database Structure**

### **Using phpMyAdmin:**

1. **Access phpMyAdmin**
   - In cPanel, click "phpMyAdmin"
   - Select your database: `travbycp_travelcounsellorbd`

2. **Import SQL File**
   - Click "Import" tab
   - Choose file: `database/setup.sql`
   - Click "Go"

### **Manual SQL Commands:**
```sql
-- Copy and paste this in phpMyAdmin SQL tab
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS checkouts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  tour_name VARCHAR(255) NOT NULL,
  tour_id VARCHAR(100),
  price DECIMAL(10,2) NOT NULL,
  travelers INT NOT NULL,
  travel_date DATE,
  customer_info JSON,
  payment_method VARCHAR(100),
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS activities (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  action VARCHAR(100) NOT NULL,
  description TEXT,
  metadata JSON,
  ip_address VARCHAR(45),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

---

## ⚙️ **Step 4: Update Database Configuration**

### **Update `database/config.json`:**
```json
{
  "database": "travbycp_travelcounsellorbd",
  "username": "travbycp_travelcounsellor",
  "password": "Travelcounsellor12@#",
  "host": "localhost",
  "port": 3306
}
```

### **For Different Hosting Types:**

#### **Shared Hosting:**
```json
{
  "host": "localhost",
  "database": "yourusername_travelcounsellorbd",
  "username": "yourusername_dbuser",
  "password": "your_password"
}
```

#### **Remote MySQL:**
```json
{
  "host": "your-mysql-server.com",
  "database": "travbycp_travelcounsellorbd",
  "username": "travbycp_travelcounsellor",
  "password": "Travelcounsellor12@#",
  "port": 3306
}
```

---

## 📁 **Step 5: Upload Files to Hosting**

### **Upload These Files:**
```
📁 Your Website Root/
├── 📁 build/ (React build files)
├── 📁 database/
│   ├── config.json
│   ├── MySQLDatabaseManager.js
│   ├── api-routes.js
│   └── setup.sql
├── 📁 node_modules/
├── server.js
├── package.json
└── .htaccess
```

### **Upload Methods:**
- **File Manager** (cPanel)
- **FTP Client** (FileZilla)
- **SSH/SCP** (Advanced)

---

## 🔧 **Step 6: Install Dependencies**

### **If SSH Access Available:**
```bash
# Navigate to your website directory
cd /path/to/your/website

# Install Node.js dependencies
npm install

# Start the application
npm start
```

### **If No SSH Access:**
- Upload `node_modules` folder
- Or use hosting's Node.js app manager

---

## 🌐 **Step 7: Configure Hosting for Node.js**

### **cPanel Node.js Setup:**
1. **Find "Node.js App"** in cPanel
2. **Create Application:**
   - Node.js Version: 18.x or higher
   - Application Root: `/public_html`
   - Application URL: `your-domain.com`
   - Startup File: `server.js`

3. **Set Environment Variables:**
   ```
   NODE_ENV=production
   PORT=3000
   ```

### **Alternative Hosting:**
- **Heroku**: Use `Procfile`
- **Vercel**: Use `vercel.json`
- **Netlify**: Use `netlify.toml`

---

## 🔍 **Step 8: Test Database Connection**

### **Test URLs:**
```
https://travelcsbd.com/api/admin/users
https://travelcsbd.com/api/admin/stats
https://travelcsbd.com/admin
```

### **Check Console Logs:**
- Look for: "Connected to MySQL database: travbycp_travelcounsellorbd"
- Check for any connection errors

---

## 🚨 **Step 9: Troubleshooting**

### **Common Issues:**

#### **Connection Refused:**
```json
// Update config.json
{
  "host": "127.0.0.1",  // Try this instead of localhost
  "port": 3306
}
```

#### **Access Denied:**
- Check username/password
- Verify user privileges
- Contact hosting support

#### **Database Not Found:**
- Verify database name
- Check if database was created
- Ensure proper prefix (if required)

#### **Module Not Found:**
```bash
# Reinstall dependencies
npm install mysql2
npm install express
```

---

## 📊 **Step 10: Verify Everything Works**

### **Test Checklist:**
- ✅ **Database Connection**: Check server logs
- ✅ **User Registration**: Try signing up
- ✅ **User Login**: Test login functionality
- ✅ **Admin Panel**: Access `/admin`
- ✅ **Checkout System**: Test booking process
- ✅ **Data Storage**: Verify data in phpMyAdmin

---

## 🔐 **Step 11: Security & Production Setup**

### **Security Measures:**
1. **Change Default Passwords**
2. **Enable SSL Certificate**
3. **Set up Firewall Rules**
4. **Regular Database Backups**

### **Production Environment:**
```json
// Update config for production
{
  "database": "travbycp_travelcounsellorbd",
  "username": "travbycp_travelcounsellor",
  "password": "Travelcounsellor12@#",
  "host": "localhost",
  "port": 3306,
  "ssl": true,
  "connectionLimit": 10
}
```

---

## 📞 **Step 12: Get Support**

### **If You Need Help:**
1. **Hosting Support**: Contact your hosting provider
2. **Database Issues**: Check phpMyAdmin error logs
3. **Node.js Issues**: Check application logs
4. **Connection Problems**: Verify credentials

### **Common Hosting Providers:**
- **cPanel Hosting**: Most shared hosts
- **Hostinger**: Node.js support available
- **SiteGround**: Managed WordPress + Node.js
- **DigitalOcean**: VPS with full control

---

## ✅ **Final Checklist**

- ✅ MySQL database created: `travbycp_travelcounsellorbd`
- ✅ Database user created with privileges
- ✅ Tables imported successfully
- ✅ Config.json updated with correct credentials
- ✅ Files uploaded to hosting
- ✅ Node.js dependencies installed
- ✅ Application running on hosting
- ✅ Database connection tested
- ✅ Admin panel accessible
- ✅ User registration working

---

**🎉 Your database is now connected to your hosting site!**

**Admin URL**: `https://travelcsbd.com/admin`
**Database**: `travbycp_travelcounsellorbd`
**Status**: Ready for production use