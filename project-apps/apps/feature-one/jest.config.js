module.exports = {
  name: 'feature-one',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/feature-one',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
