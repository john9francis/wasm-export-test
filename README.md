# WASM test

This code creates an 'add' function in wasm, then exports it to be used in the javascript or html.


Include paths:
```
/emsdk/upstream/emscripten/system/include
```


Compiling to js:

If emscripten is already installed, or using devcontainers with the attached dockerfile
```sh
emcc src/hello.c -s EXPORTED_FUNCTIONS='["_add"]' -s MODULARIZE=1 -o public/hello.js
```

Or, if not in the container (on macOS)
```sh
docker run --rm -v $(pwd):/src emscripten/emsdk:4.0.4-arm64 emcc src/hello.c -s MODULARIZE=1 -s EXPORTED_FUNCTIONS='["_add"]' -o public/hello.js
```

Note: the hello.js file is not needed and can be deleted. However, you need to specify a .js file on the output or the compiler does not work correctly.

# Useful websites
- [emscripten/emsdk docker hub](https://hub.docker.com/r/emscripten/emsdk/tags)


# Next steps
- See if I can do some type of main function in wasm and have exported functions to modify the wasm main loop. Example: a game that animates continuously but you can specify html buttons to move the character