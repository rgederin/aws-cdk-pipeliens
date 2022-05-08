import { App } from '@aws-cdk/core';
import { CdkPipelineStack } from '../lib/pipelienes/pipelines-stack';

const app = new App();

new CdkPipelineStack(app, 'CdkPipeliensStack', {
  env: { account: '530260462866', region: 'us-west-2' },
});

app.synth();