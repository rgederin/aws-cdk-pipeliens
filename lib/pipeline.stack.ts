import { SecretValue, Stack, StackProps } from 'aws-cdk-lib'
import { CodePipeline, CodePipelineSource, ShellStep } from "aws-cdk-lib/pipelines";
import { Construct } from 'constructs';


/**
 * The stack that defines the application pipeline
 */
export class DeploymentPipelineStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const pipeline = new CodePipeline(this, 'Deployment Pipeline', {
            // The pipeline name
            pipelineName: 'lambda-cdk-pipeline',

            // How it will be built and synthesized
            synth: new ShellStep('Synth', {
                // Where the source can be found
                input: CodePipelineSource.gitHub('rgederin/aws-cdk-pipeliens', 'main'),

                // Install dependencies, build and run cdk synth
                commands: [
                    'npm ci',
                    'npm run build',
                    'npx cdk synth'
                ],
            }),
        });

        // This is where we add the application stages
        // ...
    }
}