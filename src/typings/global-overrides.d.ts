/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// Global type overrides for CmdShift IDE

// Fix for null vs undefined issues
type Nullable<T> = T | null | undefined;

// Override problematic type predicates
declare global {
	interface ObjectConstructor {
		is(value1: any, value2: any): boolean;
	}
}

// Service type declarations for test files
declare namespace TestServices {
	interface IOpenerService {
		_serviceBrand: undefined;
		open(target: any, options?: any): Promise<boolean>;
	}

	interface ILabelService {
		_serviceBrand: undefined;
		getUriLabel(resource: any, options?: any): string;
		getUriBasenameLabel(resource: any): string;
		getWorkspaceLabel(workspace: any, options?: any): string;
		getSeparator(scheme: string, authority?: string): string;
		registerFormatter(formatter: any): any;
		getHostLabel(scheme: string, authority?: string): string;
		getLocalizedPath(path: string): string;
	}
}

// Augment NodeJS namespace for Timer compatibility
declare namespace NodeJS {
	interface Timer {
		_destroyed?: boolean;
	}
}

export {};