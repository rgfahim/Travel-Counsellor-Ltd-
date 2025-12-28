# 🗄️ MySQL Database Setup Guide
## Travel Counsellor BD

### ✅ **MySQL Database Configuration**

**Database Name**: `travbycp_travelcounsellorbd`
**Username**: `travbycp_travelcounsellor`
**Password**: `Travelcounsellor12@#`
**Host**: `localhost`
**Port**: `3306`

---

## 🚀 **Setup Instructions**

### 1. **Create MySQL Database**

#### Option A: Using phpMyAdmin (Recommended)
1. Login to your hosting cPanel
2. Open phpMyAdmin
3. Click "New" to create database
4. Database name: `travbycp_travelcounsellorbd`
5. Click "Create"

#### Option B: Using MySQL Command Line
```sql
CREATE DATABASE travbycp_travelcounsellorbd;
```

### 2. **Create Database User**
```sql
CREATE USER 'travbycp_travelcounsellor'@'localhost' IDENTIFIED BY 'Travelcounsellor12@#';
GRANT ALL PRIVILEGES ON travbycp_travelcounsellorbd.* TO 'travbycp_travelcounsellor'@'localhost';
FLUSH PRIVILEGES;
```

### 3. **Import Database Structure**
1. Select your database: `travbycp_travelcounsellorbd`
2. Go to "Import" tab
3. Upload the `setup.sql` file
4. Click "Go"

---

## 📋 **Database Tables**

### 👥 **users**
- `id` - Auto increment primary key
- `name` - User full name
- `email` - Unique email address
- `password` - User password (hash in production)
- `phone` - Phone number
- `status` - Account status (active/inactive)
- `created_at` - Registration timestamp
- `updated_at` - Last update timestamp

### 🛒 **checkouts**
- `id` - Auto increment primary key
- `user_id` - Foreign key to users table
- `tour_name` - Name of booked tour
- `tour_id` - Tour identifier
- `price` - Tour price
- `travelers` - Number of travelers
- `travel_date` - Travel date
- `customer_info` - JSON customer details
- `payment_method` - Payment method used
- `status` - Checkout status (pending/confirmed/completed/cancelled)
- `created_at` - Checkout timestamp
- `updated_at` - Last update timestamp

### 📊 **activities**
- `id` - Auto increment primary key
- `user_id` - Foreign key to users table
- `action` - Activity type (signup/login/checkout/etc)
- `description` - Activity description
- `metadata` - JSON additional data
- `ip_address` - User IP address
- `created_at` - Activity timestamp

---

## 🔧 **Configuration Files Updated**

### `database/config.json`
```json
{
  "database": "travbycp_travelcounsellorbd",
  "username": "travbycp_travelcounsellor",
  "password": "Travelcounsellor12@#",
  "host": "localhost",
  "port": 3306
}
```

### `database/MySQLDatabaseManager.js`
- Complete MySQL integration
- Connection pooling
- Error handling
- Auto table creation

---

## 🌐 **Hosting Setup**

### For cPanel Hosting:
1. **Create Database**: 
   - cPanel → MySQL Databases
   - Create: `travbycp_travelcounsellorbd`

2. **Create User**:
   - Username: `travbycp_travelcounsellor`
   - Password: `Travelcounsellor12@#`

3. **Grant Privileges**:
   - Add user to database
   - Grant "All Privileges"

4. **Import Tables**:
   - phpMyAdmin → Import → `setup.sql`

---

## 📊 **Features**

### ✅ **Automatic Features**
- Auto table creation on first run
- Foreign key relationships
- Indexes for performance
- JSON data support
- Timestamp tracking

### 🔒 **Security Features**
- SQL injection protection
- Prepared statements
- Connection validation
- Error logging

### 📈 **Performance**
- Database indexes
- Connection pooling
- Optimized queries
- Efficient data retrieval

---

## 🧪 **Testing**

### 1. **Test Connection**
```bash
npm start
# Check console for "Connected to MySQL database: travbycp_travelcounsellorbd"
```

### 2. **Test User Registration**
- Go to `/signup`
- Create test account
- Check database for new user

### 3. **Test Admin Panel**
- Go to `/admin`
- Login: admin / farid2009
- Check if data appears

---

## 🔄 **Migration from JSON**

If you had JSON data before:
1. Export existing JSON data
2. Convert to SQL INSERT statements
3. Import into MySQL tables
4. Verify data integrity

---

## 📞 **Troubleshooting**

### Connection Issues:
- Check database credentials
- Verify database exists
- Check MySQL service status
- Review hosting MySQL settings

### Permission Issues:
- Verify user privileges
- Check database user permissions
- Contact hosting support if needed

---

## 🎯 **Production Checklist**

- ✅ Database created: `travbycp_travelcounsellorbd`
- ✅ User created with proper privileges
- ✅ Tables imported successfully
- ✅ Connection tested
- ✅ Admin panel working
- ✅ User registration working
- ✅ Checkout system working

---

**🎉 Your MySQL database is now ready for production!**

**Database**: `travbycp_travelcounsellorbd`
**Tables**: `users`, `checkouts`, `activities`
**Status**: Ready for deployment