// require.cache = Object.create(null);

function zrequire(name) {
  if (!(name in require.cache)) {
    console.log("b");
    let code = "const a = 1;";
    let module = { exports: {} };
    // require.cache[name] = module;
    let wrapper = Function("require, exports, module", code);
    wrapper(require, module.exports, module);
  }
  return require.cache[name].exports;
}

zrequire("a");
