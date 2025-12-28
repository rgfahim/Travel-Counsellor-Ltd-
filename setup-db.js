const mysql = require('mysql2/promise');
require('dotenv').config();

async function createDatabase() {
  console.log('🔧 Creating database and tables...\n');
  
  try {
    // Connect without database first
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      port: process.env.DB_PORT || 3306
    });
    
    console.log('✅ Connected to MySQL server');
    
    // Create database
    await connection.execute(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_DATABASE}\` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    console.log(`✅ Database "${process.env.DB_DATABASE}" created/verified`);
    
    // Use the database
    await connection.execute(`USE \`${process.env.DB_DATABASE}\``);
    
    // Create users table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS \`users\` (
        \`id\` int(11) NOT NULL AUTO_INCREMENT,
        \`name\` varchar(255) NOT NULL,
        \`email\` varchar(255) NOT NULL,
        \`password\` varchar(255) NOT NULL,
        \`phone\` varchar(50) DEFAULT NULL,
        \`status\` varchar(50) DEFAULT 'active',
        \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (\`id\`),
        UNIQUE KEY \`email\` (\`email\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    console.log('✅ Users table created');
    
    // Create checkouts table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS \`checkouts\` (
        \`id\` int(11) NOT NULL AUTO_INCREMENT,
        \`user_id\` int(11) DEFAULT NULL,
        \`tour_name\` varchar(255) NOT NULL,
        \`tour_id\` varchar(100) DEFAULT NULL,
        \`price\` decimal(10,2) NOT NULL,
        \`travelers\` int(11) NOT NULL,
        \`travel_date\` date DEFAULT NULL,
        \`customer_info\` text DEFAULT NULL,
        \`payment_method\` varchar(100) DEFAULT NULL,
        \`status\` varchar(50) DEFAULT 'pending',
        \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    console.log('✅ Checkouts table created');
    
    // Create activities table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS \`activities\` (
        \`id\` int(11) NOT NULL AUTO_INCREMENT,
        \`user_id\` int(11) DEFAULT NULL,
        \`action\` varchar(100) NOT NULL,
        \`description\` text DEFAULT NULL,
        \`metadata\` text DEFAULT NULL,
        \`ip_address\` varchar(45) DEFAULT NULL,
        \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    console.log('✅ Activities table created');
    
    // Insert admin user if not exists
    const [existing] = await connection.execute('SELECT id FROM users WHERE email = ?', ['admin@travelcsbd.com']);
    
    if (existing.length === 0) {
      await connection.execute(`
        INSERT INTO users (name, email, password, phone, status) 
        VALUES ('Admin', 'admin@travelcsbd.com', 'farid2009', '+8801234567890', 'active')
      `);
      console.log('✅ Admin user created');
    } else {
      console.log('✅ Admin user already exists');
    }
    
    await connection.end();
    console.log('\n🎉 Database setup completed successfully!');
    
  } catch (error) {
    console.error('❌ Database setup error:', error.message);
    console.log('\n🔧 Please check:');
    console.log('1. MySQL server is running (XAMPP/WAMP)');
    console.log('2. Correct credentials in .env file');
    console.log('3. MySQL port 3306 is available');
  }
}

createDatabase();