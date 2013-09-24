#ifndef FLOCON_H
#define FLOCON_H

#include <node.h>
#include <chrono>

using namespace std;

class Flocon : public node::ObjectWrap {
  public:
    static void Init(v8::Handle<v8::Object> exports);

  private:
    Flocon();
    ~Flocon();

    static v8::Handle<v8::Value> New(const v8::Arguments& args);
    static v8::Handle<v8::Value> Snow(const v8::Arguments& args);
    uint64_t _count;
    uint64_t _current;
    chrono::system_clock::time_point _epoch;
};

#endif
