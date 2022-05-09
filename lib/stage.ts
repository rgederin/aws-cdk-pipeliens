import { CfnOutput, Stage, StageProps } from 'aws-cdk-lib';
import { LambdaStack } from './lambda.stack';
import { Construct } from 'constructs';


/**
 * Deployable unit of web service app
 */
export class DeploymentStage extends Stage {
    public readonly urlOutput: CfnOutput;

    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props);

        const service = new LambdaStack(this, 'LambdaService');

        // Expose CdkpipelinesDemoStack's output one level higher
        this.urlOutput = service.urlOutput;
    }
}