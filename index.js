$(()=>{
    let $width = $('#width'),
        $height=$('#height'),
        $btncal=$('#calc'),
        $perimeter=$('#perimeter'),
        $area=$('#area');
  
  $btncal.click(()=>{
    let w=Number($width.val()),
        h=Number($height.val());
  
  
    let p=(w+h)*2,
        a=w*h;
  
    $perimeter.val(p);
    $area.val(a);
  });
});