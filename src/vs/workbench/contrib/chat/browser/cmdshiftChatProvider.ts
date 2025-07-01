/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CancellationToken } from 'vs/base/common/cancellation';
import { IMarkdownString } from 'vs/base/common/htmlContent';
import { IChat, IChatProvider, IChatReplyFollowup } from 'vs/workbench/contrib/chat/common/chatService';

console.log('[CMDSHIFT] cmdshiftChatProvider.ts loaded');

export class CmdShiftChatProvider implements IChatProvider {
	public static readonly ID = 'provider';
	
	readonly id = CmdShiftChatProvider.ID;
	readonly displayName = 'CmdShift AI';
	
	constructor() {
		console.log('[CMDSHIFT] CmdShiftChatProvider instantiated');
	}
	
	async prepareSession(token: CancellationToken): Promise<IChat | undefined> {
		console.log('[CMDSHIFT] prepareSession called');
		// Create a chat session
		return {
			id: Math.random(),
			requesterUsername: 'User',
			responderUsername: 'CmdShift AI',
			inputPlaceholder: 'Ask CmdShift AI anything...'
		};
	}
	
	async provideWelcomeMessage(token: CancellationToken): Promise<(string | IMarkdownString)[] | undefined> {
		return ['Welcome to **CmdShift AI**! I\'m your intelligent coding assistant. Ask me anything about your code.'];
	}
	
	async provideSampleQuestions(token: CancellationToken): Promise<IChatReplyFollowup[] | undefined> {
		return [
			{
				kind: 'reply',
				message: 'Explain this code',
				title: 'Explain this code',
				tooltip: 'Get an explanation of the selected code'
			},
			{
				kind: 'reply',
				message: 'How do I implement a feature?',
				title: 'How do I implement a feature?',
				tooltip: 'Get help implementing a new feature'
			},
			{
				kind: 'reply',
				message: 'Find bugs in my code',
				title: 'Find bugs in my code',
				tooltip: 'Analyze code for potential issues'
			}
		];
	}
}