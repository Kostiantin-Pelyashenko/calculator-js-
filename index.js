let str;
const input = document.querySelector('#inp');
const proc = document.querySelector('#proc');
const history = document.querySelector('#history');
inp.focus();

input.addEventListener('keyup', function () {
  this.value = this.value.replace(/[A-Za-zА-Яа-яЁё`=';,]/g, '');
});

input.addEventListener('keypress', function (e) {
  const val = String.fromCharCode(e.keyCode);
  if (e.key === 'Enter' || e.key === '=') {
    return equal('=');
  } else {
    proc.textContent += val;
  }
  proc.textContent = proc.textContent.replace(/[A-Za-zА-Яа-яЁё`';,]/g, '');
});
input.addEventListener('keydown', function (e) {
  if (e.key === 'Delete' || e.key === 'Backspace') {
    proc.textContent = proc.textContent.substring(
      0,
      proc.textContent.length - 1
    );
  }
  if (e.key === 'Escape') {
    return clean();
  }
});

function myF(x) {
  inp.value += x;
  proc.textContent += x;
  inp.focus();
}
function equal(x) {
  str = inp.value;
  if (x == '=') {
    str = eval(str);
    inp.value = str;
    proc.textContent += '=' + str;
  } else {
    str = eval(str);
    inp.value = str + x;
    proc.textContent += x;
  }
  inp.focus();
}
function backspace() {
  str = inp.value;
  str = str.substring(0, str.length - 1);
  inp.value = str;
  proc.textContent = proc.textContent.substring(0, proc.textContent.length - 1);
  inp.focus();
}
function clean() {
  str = proc.textContent;
  history.innerHTML += str + '<br>';
  inp.value = '';
  // перенос из блока проц данных в верхний блок (история вычислений)
  inp.focus();
  proc.textContent = '';
}
function allClean() {
  inp.value = '';
  proc.textContent = '';
  history.textContent = '';
  inp.focus();
}
