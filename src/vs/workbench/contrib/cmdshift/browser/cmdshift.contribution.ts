/*---------------------------------------------------------------------------------------------
 *  Copyright (c) CmdShift Team. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IWorkbenchContributionsRegistry, Extensions as WorkbenchExtensions } from 'vs/workbench/common/contributions';
import { Registry } from 'vs/platform/registry/common/platform';
import { LifecyclePhase } from 'vs/workbench/services/lifecycle/common/lifecycle';
import { CmdShiftDefaultsContribution } from 'vs/workbench/contrib/cmdshift/browser/cmdshiftDefaults';

// Register CmdShift IDE specific contributions
Registry.as<IWorkbenchContributionsRegistry>(WorkbenchExtensions.Workbench)
	.registerWorkbenchContribution(CmdShiftDefaultsContribution, LifecyclePhase.Starting);