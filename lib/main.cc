#define BUILDING_NODE_EXTENSION
#include <node.h>
#include "flocon.h"

using namespace v8;

void InitAll(Handle<Object> exports) {
  Flocon::Init(exports);
}

NODE_MODULE(flocon, InitAll);
