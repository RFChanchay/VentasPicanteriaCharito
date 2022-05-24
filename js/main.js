var cantCarne,cantPollo,cantChoclo,cantChocloP,cantChocloC,cantChocloM;
function calcularPedido(){
	var pr1=1;
	var pr2=1.75;
	var pr3=2;
	var pr4=3;
	var pr5=3.75;
	var pr6=4.75;
	var val1=parseInt(document.getElementById("inpCarne").value);
	var val2=parseInt(document.getElementById("inpPollo").value);
	var val3=parseInt(document.getElementById("inpChoclo").value);
	var val4=parseInt(document.getElementById("inpPCCarne").value);
	var val5=parseInt(document.getElementById("inpPCPollo").value);
	var val6=parseInt(document.getElementById("inpPCMixto").value);
	var total=pr1*val1+pr2*val2+pr3*val3+pr4*val4+pr5*val5+pr6*val6;
	return total;


}
function imprimirPedido(){
	var val1=document.getElementById("inpCarne").value;
	var val2=document.getElementById("inpPollo").value;
	var val3=document.getElementById("inpChoclo").value;
	var val4=document.getElementById("inpPCCarne").value;
	var val5=document.getElementById("inpPCPollo").value;
	var val6=document.getElementById("inpPCMixto").value;
	var actual=document.getElementById("impresion").innerHTML;
	total=calcularPedido();
	var cadena=`
					<div class='col'>
					Pinchos CARNE: ${val1}
					</div>
					<div class='col'>
					Pinchos POLLO: ${val2}
					</div>
					<div class='col'>
					CHOCLO: ${val3}
					</div>
					<div class='col'>
					PINCHOCLO CARNE: ${val4}
					</div>
					<div class='col'>
					PINCHOCLO POLLO: ${val5}
					</div>
					<div class='col'>
					PINCHOCLO MIXTO: ${val6}
					</div class='col'>
					<div class='col'>
					Total de venta: ${total}
					</div class='col'>
					<br>
					<br>


	`;
	document.getElementById("impresion").innerHTML=actual+cadena;
	document.getElementById("inpCarne").value=0;
	document.getElementById("inpPollo").value=0;
	document.getElementById("inpChoclo").value=0;
	document.getElementById("inpPCCarne").value=0;
	document.getElementById("inpPCPollo").value=0;
	document.getElementById("inpPCMixto").value=0;



}
