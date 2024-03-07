const age = 100;
function go() {
  const age = 200;
  const hair = 'blonde';
  console.log(age);
  console.log(hair);
}

go();

function isCool(name) {
    let cool;
    if (name === 'wes') {
      cool = true;
    }
    console.log(cool);
    return cool;
  }

isCool('wes');
