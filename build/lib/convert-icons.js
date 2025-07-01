/*---------------------------------------------------------------------------------------------
 *  Copyright (c) CmdShift Team. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

/**
 * Icon Conversion Utility for CmdShift IDE
 * 
 * This script converts PNG source files to platform-specific icon formats:
 * - Windows: .ico files
 * - macOS: .icns files
 * 
 * Prerequisites:
 * - png2ico (Windows): npm install -g png2ico
 * - iconutil (macOS): Built into macOS
 */

async function convertIcons() {
	const resourcesDir = path.join(__dirname, '../../resources');
	const sourcePng = path.join(resourcesDir, 'linux/cmdshift.png');
	
	// Check if source PNG exists
	if (!fs.existsSync(sourcePng)) {
		console.log('⚠️  Source PNG not found:', sourcePng);
		console.log('Please add cmdshift.png (1024x1024) to resources/linux/');
		return;
	}
	
	console.log('🎨 Converting CmdShift IDE icons...');
	
	// Convert to Windows .ico
	if (process.platform === 'win32' || process.platform === 'linux') {
		try {
			await convertToIco(sourcePng, path.join(resourcesDir, 'win32/cmdshift.ico'));
			console.log('✅ Windows icon created');
		} catch (err) {
			console.error('❌ Failed to create Windows icon:', err.message);
			console.log('   Install png2ico: npm install -g png2ico');
		}
	}
	
	// Convert to macOS .icns
	if (process.platform === 'darwin') {
		try {
			await convertToIcns(sourcePng, path.join(resourcesDir, 'darwin/cmdshift.icns'));
			console.log('✅ macOS icon created');
		} catch (err) {
			console.error('❌ Failed to create macOS icon:', err.message);
		}
	}
}

function convertToIco(input, output) {
	return new Promise((resolve, reject) => {
		const proc = spawn('png2ico', [output, input]);
		proc.on('error', reject);
		proc.on('exit', (code) => {
			if (code === 0) resolve();
			else reject(new Error(`png2ico exited with code ${code}`));
		});
	});
}

async function convertToIcns(input, output) {
	// Create iconset directory
	const iconsetPath = output.replace('.icns', '.iconset');
	if (!fs.existsSync(iconsetPath)) {
		fs.mkdirSync(iconsetPath, { recursive: true });
	}
	
	// Generate required sizes
	const sizes = [16, 32, 128, 256, 512];
	for (const size of sizes) {
		// For each size, we need both regular and @2x versions
		// Note: This is a simplified version. In production, you'd use
		// an image processing library to resize the PNG
		console.log(`   Creating icon_${size}x${size}.png (would resize from source)`);
		console.log(`   Creating icon_${size}x${size}@2x.png (would resize from source)`);
	}
	
	// Convert iconset to icns
	return new Promise((resolve, reject) => {
		const proc = spawn('iconutil', ['-c', 'icns', iconsetPath]);
		proc.on('error', reject);
		proc.on('exit', (code) => {
			// Clean up iconset directory
			fs.rmSync(iconsetPath, { recursive: true, force: true });
			if (code === 0) resolve();
			else reject(new Error(`iconutil exited with code ${code}`));
		});
	});
}

// Run if called directly
if (require.main === module) {
	convertIcons().catch(console.error);
}

module.exports = { convertIcons };