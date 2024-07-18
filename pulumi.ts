import * as pulumi from '@pulumi/pulumi'
import * as github from '@pulumi/github'

const repository = new pulumi.Config('config').require('repository')

new github.ActionsVariable('github-variable', {
  repository,
  variableName: 'test',
  value: 'test',
})
