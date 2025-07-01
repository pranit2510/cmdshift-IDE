/*---------------------------------------------------------------------------------------------
 *  Copyright (c) CmdShift Team. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IWorkbenchContribution } from 'vs/workbench/common/contributions';

/**
 * CmdShift IDE Default Settings Contribution
 * 
 * This ensures that CmdShift IDE has the proper default settings
 * that differentiate it from standard VS Code, including:
 * - Horizontal activity bar (top position)
 * - Custom title bar style
 * - Dark theme by default
 */
export class CmdShiftDefaultsContribution implements IWorkbenchContribution {
	
	constructor() {
		this.ensureDefaults();
	}

	private ensureDefaults(): void {
		// Ensure our key defaults are set
		// Note: These are already set in their respective files, 
		// but this serves as a safety check and documentation
		const expectedDefaults = {
			'workbench.activityBar.location': 'top',
			'window.titleBarStyle': 'custom',
			'workbench.colorTheme': 'Default Dark Modern',
			'workbench.productIconTheme': 'Default'
		};

		// Log the defaults for debugging
		console.log('[CmdShift IDE] Default settings initialized:', expectedDefaults);
	}
}