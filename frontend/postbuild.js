const fs = require('fs');
const path = require('path');

// Read the built index.html
const buildPath = path.join(__dirname, 'build');
const indexPath = path.join(buildPath, 'index.html');

if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Fix relative paths for static serving
  indexContent = indexContent.replace(/href="\//g, 'href="./');
  indexContent = indexContent.replace(/src="\//g, 'src="./');
  
  // Write the corrected content back
  fs.writeFileSync(indexPath, indexContent);
  
  // Create additional HTML files for better compatibility
  fs.writeFileSync(path.join(buildPath, 'home.html'), indexContent);
  fs.writeFileSync(path.join(buildPath, 'hotbeansweb.html'), indexContent);
  
  console.log('✅ Static HTML files created successfully!');
  console.log('📁 Files created: index.html, home.html, hotbeansweb.html');
  console.log('🌐 You can now open any of these HTML files directly in a browser!');
} else {
  console.log('❌ Build folder not found. Run "yarn build" first.');
}