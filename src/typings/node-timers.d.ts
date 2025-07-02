/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// Node.js Timer type overrides for browser compatibility
declare namespace NodeJS {
	// Override Timer to be compatible with both Node.js and browser environments
	interface Timer {
		ref(): this;
		unref(): this;
		hasRef?(): boolean;
		refresh?(): this;
		[Symbol.toPrimitive]?(): number;
	}

	// Make Timer and Timeout interchangeable
	type Timeout = Timer;
}

// Global type augmentation for browser compatibility
declare global {
	// Ensure setTimeout returns a type compatible with both environments
	function setTimeout(callback: (...args: any[]) => void, ms?: number, ...args: any[]): NodeJS.Timer;
	function clearTimeout(timeoutId: NodeJS.Timer | undefined): void;
	function setInterval(callback: (...args: any[]) => void, ms?: number, ...args: any[]): NodeJS.Timer;
	function clearInterval(intervalId: NodeJS.Timer | undefined): void;
	function setImmediate(callback: (...args: any[]) => void, ...args: any[]): NodeJS.Timer;
	function clearImmediate(immediateId: NodeJS.Timer | undefined): void;
}

export {};