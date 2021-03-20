$(() => {
  let $width = $('#width'),
    $height = $('#height'),
    $btncal = $('#calc'),
    $perimeter = $('#perimeter'),
    $area = $('#area'),
    $widthValidate = $('#width-validate'),
    $heightValidate = $('#height-validate');

  $forkMeGH.show("https://github.com/wangding/rectangle");

  $btncal.click(() => {
    let w = Number($width.val()),
      h = Number($height.val());

    //validate（集中检验/表单级检验）
    if (validate($width, $widthValidate) && validate($height, $heightValidate)) {
      let p = roundFractional((w + h) * 2, 2),
        a = roundFractional((w * h), 2);

      $perimeter.val(p);
      $area.val(a);
    }
  });

  //字段检验
  $width.focusout(() => {
    if (!validate($width, $widthValidate))
      $width.select();
  });
  $height.focusout(() => {
    if (!validate($height, $heightValidate))
      $height.select();
  });

  //字符检验
  $width.keypress(function (e) {
    charCheck(e);
  });
  $height.keypress(function (e) {
    charCheck(e);
  });
});

function charCheck(e) {
  var s = e.target.selectionStart,
      v = e.target.value;
  console.log(e);
  if (/[abcdf-zABCDF-Z`~!@#$%^&*()\=_+{}|:;'",<>/?\\]/.test(e.key)) {
    e.preventDefault();
    return;
  };

  if (e.key === '.') {
    if (s === 0 || v.indexOf('.') !== -1) {
      e.preventDefault();
      return;
    }

    if (s === 1 && v.substring(0, 1) === '-') {
      e.preventDefault();
      return;
    }
  }

  if (e.key === 'e') {
    if (s === 0 || v.indexOf('e') !== -1
      || v.indexOf('E') !== -1) {
      e.preventDefault();
      return;
    }

    if (s === 1 && v.substring(0, 1) === '-') {
      e.preventDefault();
      return;
    }
  }

  if (e.key === 'E') {
    if (s === 0 || v.indexOf('e') !== -1
      || v.indexOf('E') !== -1) {
      e.preventDefault();
      return;
    }

    if (s === 1 && v.substring(0, 1) === '-') {
      e.preventDefault();
      return;
    }
  }
}

function roundFractional(x, n) {
  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}

function validate(input, output) {
  console.log(input.val())
  //is empty
  if (input.val() == '') {
    output.html('该字段不能为空');
    return false;
  } else {
    output.html('')
    // return true;
  }
  //is number
  let val = Number(input.val());
  if (isNaN(val)) {
    output.html('该字段应该为数值');
    return false;
  } else {
    output.html('')
  }
  //is >=0
  if (val <= 0) {
    output.html('该字段不能小于等于零');
    return false;
  } else {
    output.html('')
  }

  return true;
}