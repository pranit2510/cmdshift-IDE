/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CancellationToken } from 'vs/base/common/cancellation';
import { IDisposable } from 'vs/base/common/lifecycle';
import { IChatAgent, IChatAgentCommand, IChatAgentMetadata, IChatAgentRequest, IChatAgentResult, IChatAgentService } from 'vs/workbench/contrib/chat/common/chatAgents';
import { IChatMessage } from 'vs/workbench/contrib/chat/common/chatProvider';
import { IChatFollowup, IChatProgress } from 'vs/workbench/contrib/chat/common/chatService';

export class CmdShiftChatAgent implements IChatAgent {
	public static readonly ID = 'cmdshift';
	
	readonly id = CmdShiftChatAgent.ID;
	
	readonly metadata: IChatAgentMetadata = {
		description: 'CmdShift AI - Your intelligent coding assistant',
		isDefault: true,
		sampleRequest: 'How can I improve my code?',
		fullName: 'CmdShift AI Assistant'
	};
	
	async invoke(
		request: IChatAgentRequest,
		progress: (part: IChatProgress) => void,
		history: IChatMessage[],
		token: CancellationToken
	): Promise<IChatAgentResult> {
		try {
			// Simple echo implementation for now
			const userMessage = request.message;
			const response = `CmdShift AI received: "${userMessage}"\n\nThis is a placeholder response. In the future, this will provide intelligent code assistance powered by advanced AI models.`;
			
			// Report progress as plain content
			progress({
				kind: 'content',
				content: response
			});
			
			return {};
		} catch (error) {
			return {
				errorDetails: {
					message: `Error: ${error}`
				}
			};
		}
	}
	
	async provideFollowups(sessionId: string, token: CancellationToken): Promise<IChatFollowup[]> {
		return [
			{
				kind: 'reply',
				message: 'Tell me more about CmdShift AI',
				title: 'Learn more'
			},
			{
				kind: 'reply', 
				message: 'What features are coming next?',
				title: 'Roadmap'
			}
		];
	}
	
	async provideSlashCommands(token: CancellationToken): Promise<IChatAgentCommand[]> {
		return [
			{
				name: 'explain',
				description: 'Explain the selected code',
				sampleRequest: 'this function'
			},
			{
				name: 'fix',
				description: 'Fix issues in the code',
				sampleRequest: 'the type errors'
			},
			{
				name: 'optimize',
				description: 'Optimize the code for performance',
				sampleRequest: 'this algorithm'
			}
		];
	}
}

export function registerCmdShiftChatAgent(chatAgentService: IChatAgentService): IDisposable {
	console.log('[CMDSHIFT] registerCmdShiftChatAgent called');
	const agent = new CmdShiftChatAgent();
	console.log('[CMDSHIFT] About to register agent with service');
	const disposable = chatAgentService.registerAgent(agent);
	console.log('[CMDSHIFT] Agent registered, checking all agents:', chatAgentService.getAgents().map(a => a.id));
	return disposable;
}