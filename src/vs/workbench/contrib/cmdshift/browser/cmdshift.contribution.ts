/*---------------------------------------------------------------------------------------------
 *  Copyright (c) CmdShift Inc. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IWorkbenchContributionsRegistry, Extensions as WorkbenchExtensions } from 'vs/workbench/common/contributions';
import { Registry } from 'vs/platform/registry/common/platform';
import { LifecyclePhase } from 'vs/workbench/services/lifecycle/common/lifecycle';
import { Disposable } from 'vs/base/common/lifecycle';
import { ICommandService } from 'vs/platform/commands/common/commands';
import { CommandsRegistry } from 'vs/platform/commands/common/commands';
import { ServicesAccessor } from 'vs/platform/instantiation/common/instantiation';
import { INotificationService } from 'vs/platform/notification/common/notification';
import { registerAction2, Action2 } from 'vs/platform/actions/common/actions';
import { Codicon } from 'vs/base/common/codicons';
import { localize } from 'vs/nls';
import { IChatService } from 'vs/workbench/contrib/chat/common/chatService';
import { IChatProviderService } from 'vs/workbench/contrib/chat/common/chatProvider';
import { IChatAgentService } from 'vs/workbench/contrib/chat/common/chatAgents';

// CmdShift AI Test Command
class CmdShiftHelloCommand extends Action2 {
	static readonly ID = 'cmdshift.hello';

	constructor() {
		super({
			id: CmdShiftHelloCommand.ID,
			title: { value: localize('cmdshift.hello', "CmdShift: Hello"), original: 'CmdShift: Hello' },
			category: 'Developer',
			icon: Codicon.commentDiscussion,
			f1: true
		});
	}

	async run(accessor: ServicesAccessor): Promise<void> {
		const notificationService = accessor.get(INotificationService);
		const chatService = accessor.get(IChatService);
		const chatProviderService = accessor.get(IChatProviderService);
		const chatAgentService = accessor.get(IChatAgentService);
		
		// Show notification
		notificationService.info('CmdShift AI is ready! Chat service available: ' + (!!chatService));
		
		// Log service availability
		console.log('[CmdShift] Services initialized:', {
			chatService: !!chatService,
			chatProviderService: !!chatProviderService,
			chatAgentService: !!chatAgentService
		});
	}
}

// CmdShift AI Service Contribution
class CmdShiftAIContribution extends Disposable {
	static readonly ID = 'cmdshift.aiContribution';

	constructor(
		@ICommandService private readonly commandService: ICommandService,
		@INotificationService private readonly notificationService: INotificationService,
		@IChatService private readonly chatService: IChatService
	) {
		super();
		this.initialize();
	}

	private initialize(): void {
		console.log('[CmdShift] AI Contribution initialized');
		
		// Register any startup logic here
		// Show notification that CmdShift AI is ready
		setTimeout(() => {
			this.notificationService.info('CmdShift AI initialized successfully');
			console.log('[CmdShift] AI services ready:', {
				chatServiceAvailable: !!this.chatService,
				commandServiceAvailable: !!this.commandService
			});
		}, 1000);
	}
}

// Register the hello command
registerAction2(CmdShiftHelloCommand);

// Register the contribution
const workbenchRegistry = Registry.as<IWorkbenchContributionsRegistry>(WorkbenchExtensions.Workbench);
workbenchRegistry.registerWorkbenchContribution(CmdShiftAIContribution, LifecyclePhase.Restored);

// Register a simple command for testing
CommandsRegistry.registerCommand('cmdshift.test', (accessor: ServicesAccessor) => {
	const notificationService = accessor.get(INotificationService);
	notificationService.info('CmdShift AI Test Command Executed!');
});