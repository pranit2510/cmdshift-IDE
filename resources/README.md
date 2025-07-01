# CmdShift IDE Logo Resources

This directory contains the logo and icon resources for CmdShift IDE.

## Logo Requirements

### Main Logo (cmdshift.png)
- **Size**: 1024x1024 pixels (recommended for best quality)
- **Format**: PNG with transparent background
- **Location**: Place in `resources/linux/cmdshift.png`
- **Usage**: This will be the source file for all icon conversions

### Icon Conversion
During the build process, the main PNG logo will be automatically converted to:
- **Windows**: `cmdshift.ico` (multi-resolution icon)
- **macOS**: `cmdshift.icns` (Apple Icon Image format)
- **Linux**: Uses the PNG directly

### Additional Icons Needed
1. **Square Logo** (`cmdshift.png` in linux/)
   - Main application icon
   - Should work well at all sizes from 16x16 to 1024x1024

2. **Windows Tile Icons** (in win32/)
   - `cmdshift_150x150.png` - For Windows Start Menu
   - `cmdshift_70x70.png` - For Windows taskbar

3. **Server Icons** (in server/)
   - `cmdshift-192.png` - For web app manifest
   - `cmdshift-512.png` - For web app manifest

## Design Guidelines
- Use transparent background for flexibility
- Ensure the logo is visible on both light and dark backgrounds
- Keep important details away from edges (10% padding recommended)
- Test visibility at small sizes (16x16, 32x32)

## Build Process
The build system will:
1. Take the PNG source files
2. Generate platform-specific formats (.ico, .icns)
3. Copy them to the appropriate build output directories

## Current Status
- Placeholder files exist for initial development
- Replace these with actual logo files when ready:
  - `cmdshift.png.placeholder` → `cmdshift.png`
  - `cmdshift.ico.placeholder` → (auto-generated)
  - `cmdshift.icns.placeholder` → (auto-generated)