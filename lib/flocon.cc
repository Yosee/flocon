#define BUILDING_NODE_EXTENSION
#include "flocon.h"

#include <node.h>
#include <v8.h>

#include <stdio.h>  // printf
#include <unistd.h>
#include <chrono>   // std::chrono
#include <ctime>
#include <string>

using namespace v8;
using namespace std;

// using Clock = std::chrono::high_resolution_clock;
// using TimePoint = std::chrono::time_point<Clock>;

Flocon::Flocon() {};
Flocon::~Flocon() {};

void Flocon::Init(Handle<Object> exports) {
  // Prepare constructor template
  Local<FunctionTemplate> tpl = FunctionTemplate::New(New);
  tpl->SetClassName(String::NewSymbol("Flocon"));
  tpl->InstanceTemplate()->SetInternalFieldCount(1);

  // Prototype
  tpl->PrototypeTemplate()->Set(
    String::NewSymbol("snow"),
    FunctionTemplate::New(Snow)->GetFunction()
  );

  Persistent<Function> constructor = Persistent<Function>::New(tpl->GetFunction());
  exports->Set(String::NewSymbol("Flocon"), constructor);
}

Handle<Value> Flocon::New(const Arguments& args) {
  HandleScope scope;

  Flocon* obj = new Flocon();
  obj->_count = 0;
  obj->_current = 0;
  obj->Wrap(args.This());

  return args.This();
}

Handle<Value> Flocon::Snow(const Arguments& args) {
  HandleScope scope;

  Flocon* obj = ObjectWrap::Unwrap<Flocon>(args.This());

  chrono::system_clock::time_point now = chrono::system_clock::now();
  chrono::system_clock::time_point epoch = chrono::system_clock::from_time_t(1356998400); // 1st january 2013
  auto diff = now - epoch;
  auto ms = chrono::duration_cast<chrono::milliseconds>(diff);

  uint64_t time = ms.count();

  uint64_t pid = (uint64_t)getpid();
  pid = pid % 1024;

  if (obj->_current < time) {
    obj->_current = time;
    obj->_count = 0;
  }

  uint64_t identifier = time << 23 | pid << 13 | (++obj->_count);

  char buffer[21];
  snprintf(buffer, 21, "%llu", identifier);
  return scope.Close(String::New(buffer));
}
