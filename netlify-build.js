#!/usr/bin/env node

// Simple script to prepare the project for Netlify deployment
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting Netlify build preparation...');

// Build only the client-side application
try {
  console.log('📦 Building client application...');
  execSync('npm run build:client', { stdio: 'inherit' });
  console.log('✅ Client build completed successfully!');
} catch (error) {
  console.error('❌ Error building client application:', error);
  process.exit(1);
}

console.log('\n🎉 Build preparation completed! Ready for Netlify deployment.'); 