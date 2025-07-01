/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * CmdShift IDE Branding Configuration
 * This module defines branding constants and interfaces used throughout the application
 */

export interface ICmdShiftBranding {
	readonly applicationName: string;
	readonly nameLong: string;
	readonly nameShort: string;
	readonly urlProtocol: string;
	readonly dataFolderName: string;
	readonly win32MutexName: string;
	readonly darwinBundleIdentifier: string;
	readonly linuxIconName: string;
	readonly reportIssueUrl: string;
	readonly aiChatBackground: string;
	readonly aiInlineBackground: string;
	readonly aiSuggestionHighlight: string;
}

export const CmdShiftBranding: ICmdShiftBranding = {
	applicationName: 'cmdshift',
	nameLong: 'CmdShift IDE',
	nameShort: 'CmdShift',
	urlProtocol: 'cmdshift',
	dataFolderName: '.cmdshift',
	win32MutexName: 'cmdshift',
	darwinBundleIdentifier: 'com.cmdshift.ide',
	linuxIconName: 'cmdshift',
	reportIssueUrl: 'https://github.com/cmdshift/cmdshift-ide/issues/new',
	aiChatBackground: '#1a1a1a',
	aiInlineBackground: '#2d2d30',
	aiSuggestionHighlight: '#4EC9B0'
};

export namespace CmdShiftBrandingConstants {
	export const APP_QUALITY = 'stable';
	export const COMMIT = '';
	export const VERSION = '1.0.0';
	export const BUILD_NUMBER = '1';
	export const PRODUCT_NAME = 'CmdShift IDE';
	export const COMPANY_NAME = 'CmdShift';
	export const COPYRIGHT = 'Copyright (C) 2024 CmdShift. All rights reserved.';
	export const LICENSE_URL = 'https://github.com/cmdshift/cmdshift-ide/blob/main/LICENSE.txt';
	export const PRIVACY_STATEMENT_URL = 'https://github.com/cmdshift/cmdshift-ide/blob/main/PRIVACY.md';
	
	// AI-specific branding constants
	export const AI_PROVIDER = 'CmdShift AI';
	export const AI_MODEL_NAME = 'CmdShift Intelligence';
	export const AI_FEATURES_ENABLED = true;
	export const AI_LOCAL_MODEL_SUPPORT = true;
	export const AI_MULTI_MODEL_ROUTING = true;
	
	// Performance targets
	export const TARGET_STARTUP_TIME_MS = 1000;
	export const TARGET_MEMORY_MB = 50;
	export const TARGET_FILE_OPEN_MS = 10;
	
	// Feature flags
	export const HORIZONTAL_ACTIVITY_BAR = false; // Will be enabled in future updates
	export const AI_CODE_GENERATION = true;
	export const AI_PROJECT_UNDERSTANDING = true;
	export const NATIVE_PERFORMANCE_MODE = true;
}

/**
 * Utility function to check if running in CmdShift IDE
 */
export function isCmdShiftIDE(): boolean {
	return true; // Since this is the CmdShift IDE codebase
}

/**
 * Get branding value with fallback
 */
export function getBrandingValue<K extends keyof ICmdShiftBranding>(
	key: K,
	fallback?: ICmdShiftBranding[K]
): ICmdShiftBranding[K] {
	return CmdShiftBranding[key] ?? fallback!;
}