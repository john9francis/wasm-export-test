async function loadWasm(wasmFilePath) {
  const response = await fetch(wasmFilePath);
  const buffer = await response.arrayBuffer();
  const { instance } = await WebAssembly.instantiate(buffer, { /* imports if needed */ });
  return instance.exports;
}

document.addEventListener("DOMContentLoaded", async () => {

  const wasmExports = await loadWasm("./hello.wasm");

  document.getElementById("add").addEventListener("click", (ev) => {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
  
    let solution = wasmExports.add(num1, num2);
    
    document.getElementById("solution").innerText = solution;
  });
})

