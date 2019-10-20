module.exports = {
  name: 'feature-two',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/feature-two',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
