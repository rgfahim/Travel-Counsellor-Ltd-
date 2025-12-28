const MySQLDatabaseManager = require('./database/MySQLDatabaseManager');

async function testDatabase() {
  console.log('🔍 Testing database connection...\n');
  
  const db = new MySQLDatabaseManager();
  
  try {
    const connection = await db.connect();
    
    if (connection) {
      console.log('✅ Database connection successful!');
      
      // Test basic query
      const [rows] = await connection.execute('SELECT COUNT(*) as count FROM users');
      console.log(`📊 Users in database: ${rows[0].count}`);
      
      // Test checkout count
      const [checkouts] = await connection.execute('SELECT COUNT(*) as count FROM checkouts');
      console.log(`📋 Checkouts in database: ${checkouts[0].count}`);
      
      await db.close();
      console.log('✅ Database test completed successfully!');
    } else {
      console.log('❌ Database connection failed!');
    }
  } catch (error) {
    console.error('❌ Database test error:', error.message);
    console.log('\n🔧 Troubleshooting steps:');
    console.log('1. Check if MySQL server is running');
    console.log('2. Verify database credentials in .env file');
    console.log('3. Ensure database "travbycp_travelcounsellorbd" exists');
    console.log('4. Check if tables are created (run setup_basic.sql)');
  }
}

testDatabase();