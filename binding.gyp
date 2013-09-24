{
  'targets': [
    {
      'target_name': 'flocon',
      'sources': [ 'lib/main.cc', 'lib/flocon.cc' ],
      'conditions': [
        ['OS=="mac"', {
          'xcode_settings': {
            'MACOSX_DEPLOYMENT_TARGET': '10.7',
            'OTHER_CFLAGS': [
              '-std=c++11',
              '-stdlib=libc++'
            ]
          }
        }]
      ]
    }
  ]
}
