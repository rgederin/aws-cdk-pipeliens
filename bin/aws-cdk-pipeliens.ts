import { App } from 'aws-cdk-lib';
import { DeploymentPipelineStack } from '../lib/pipeline.stack';

const app = new App();

new DeploymentPipelineStack(app, 'DeploymentPipelineStack', {
  env: { account: '530260462866', region: 'us-west-2' },
});

app.synth();