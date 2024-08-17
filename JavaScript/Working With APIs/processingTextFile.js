async function* makeTextFileLineIterator(fileURL) {
    const response = await fetch(fileURL);
    const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
  
    let { value: chunk, done: readerDone } = await reader.read();
    chunk = chunk || "";
  
    const newline = /\r?\n/gm;
    let startIndex = 0;
    let result;
  
    while (true) {
      const result = newline.exec(chunk);
      if (!result) {
        if (readerDone) break;
        const remainder = chunk.substr(startIndex);
        ({ value: chunk, done: readerDone } = await reader.read());
        chunk = remainder + (chunk || "");
        startIndex = newline.lastIndex = 0;
        continue;
      }
      yield chunk.substring(startIndex, result.index);
      startIndex = newline.lastIndex;
    }
  
    if (startIndex < chunk.length) {
      // Last line didn't end in a newline char
      yield chunk.substring(startIndex);
    }
  }
  
  async function run(urlOfFile) {
    for await (const line of makeTextFileLineIterator(urlOfFile)) {
      processLine(line);
    }
  }
  
  function processLine(line) {
    console.log(line);
  }
  
  run("https://www.example.org/a-large-file.txt");

  
async function getData() {
    const url = "https://example.org/products.json";
    try {
      const response1 = await fetch(url);
      if (!response1.ok) {
        throw new Error(`Response status: ${response1.status}`);
      }
  
      const response2 = response1.clone();
  
      const json1 = await response1.json();
      const json2 = await response2.json();
    } catch (error) {
      console.error(error.message);
    }
  }
  