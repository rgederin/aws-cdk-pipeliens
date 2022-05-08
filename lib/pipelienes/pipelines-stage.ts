import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { AwsCdkPipeliensStack } from '../aws-cdk-pipeliens-stack';

/**
 * Deployable unit of web service app
 */
export class CdkPipelinesDemoStage extends Stage {
    public readonly urlOutput: CfnOutput;

    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props);

        const service = new AwsCdkPipeliensStack(this, 'WebService');

        // Expose CdkpipelinesDemoStack's output one level higher
        this.urlOutput = service.urlOutput;
    }
}