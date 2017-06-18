var chosenShapes = [];
var dropdown;

function setup()
{
  createCanvas(600,200);
  background(59);
    var pv;
  var mainDiv = createDiv('');
  mainDiv.child(shapeControlBox);
//  mainDiv.child(listBox);
  var shapeControlBox = createDiv('');
  var addBtn ;
  var size;
  shapeControlBox.style('background-color','rgba(200,200,200,100)');
  shapeControlBox.style('width','300px');
  shapeControlBox.style('display','inline-block');
  // var listBox = createDiv('');
  // listBox.style('background-color','rgba(240,200,200,100)');
  // listBox.style('width','300px');
  // listBox.style('display','inline-block');
  // createP('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq').parent(listBox);
   dropdown = createSelect();
   dropdown.id('select');
   console.log(dropdown.id());
  dropdown.option('Square');
  dropdown.option('Rectangle');
  dropdown.option('Triangle');
  dropdown.parent(shapeControlBox);


  dropdown.changed(function()
  {
      $('#result').empty();
      $('#sliderValue').empty();
      switch(dropdown.value())
      {
        case 'Square' :   var p = createP('Edge Length');
                          p.id('label1');
                          $('#label1').appendTo('#result');
                          var sliderSqaure = createSlider(0,200,50);
                          sliderSqaure.id('sliderSq');

                        sliderSqaure.changed(function(){
                          pv.html(sliderSqaure.value());
                          size = sliderSqaure.value();
                        });
                          $('#sliderSq').appendTo('#result');


                           break;
       case 'Rectangle' :  var pw = createP('Width');
                           pw.id('label2');
                           $('#label2').appendTo('#result');
                           var sliderRectW = createSlider(0,200,50);
                           sliderRectW.id('RectSliderW');
                           $('#RectSliderW').appendTo('#result');
                           var ph = createP('Height');
                           ph.id('label3');
                           $('#label3').appendTo('#result');
                           var sliderRectH = createSlider(0,200,50);
                           sliderRectH.id('RectSelectH');
                          //  var p = createP('');
                          // p.id('sliderValue');
                            sliderRectH.changed(function(){
                           pv.html(sliderRectW.value() + " : " +sliderRectH.value());
                         });
                         sliderRectW.changed(function(){
                         pv.html(sliderRectW.value() + " : " +sliderRectH.value());
                       });
                           $('#RectSelectH').appendTo('#result');

                            size =      [sliderRectW.value(),sliderRectH.value()];
                           break;


      case 'Triangle' :    var p = createP('Side Length');
                           p.id('label3');
                           $('#label3').appendTo('#result');
                           var sliderTriangle = createSlider(0,200,50);
                            // var p = createP('');
                            // p.id('sliderValue');
                          sliderTriangle.changed(function(){
                            pv.html(sliderTriangle.value());
                          });
                           sliderTriangle.id('sliderTri');
                           $('#sliderTri').appendTo('#result');


                           size = [sliderTriangle.value()];

                           break;
        }
  });
  var sizeSelectDiv = createDiv('');
  sizeSelectDiv.parent(shapeControlBox);
  sizeSelectDiv.id('result');
  pv = createP('');
  pv.id('sliderValue');
  addBtn= createButton('Add Shape');

  addBtn.mousePressed(function(){
  var sq = new Shape(dropdown.value(),size);
  chosenShapes.push(sq);
  createP(dropdown.value() + ' : ' +size)
  });
  // var SqSelectDiv = createDiv('');
  // SqSelectDiv.parent(shapeControlBox);
  // var p = createP('Side Length');
  // p.parent(SqSelectDiv);
  // var sliderSqaure = createSlider(0,200,50);
  // sliderSqaure.parent(SqSelectDiv);
  //
  // var RectSelectDiv = createDiv('');
  // RectSelectDiv.parent(shapeControlBox);
  // var pw = createP('Width');
  // pw.parent(RectSelectDiv);
  // var sliderRectW = createSlider(0,200,50);
  // sliderRectW.parent(RectSelectDiv);
  // var ph = createP('Height');
  // ph.parent(RectSelectDiv);
  // var sliderRectH = createSlider(0,200,50);
  // sliderRectH.parent(RectSelectDiv);
  // var pTri = createP('Side Length');
  // pTri.parent(RectSelectDiv);
  // var sliderTriangle = createSlider(0,200,50);
  // sliderTriangle.parent(RectSelectDiv);


  // addBtn = createButton('Add');
  // addBtn.parent(sizeSelectDiv);
}

function draw()
{

}
