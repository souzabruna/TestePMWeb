//Javasript para executar no console e criar a modal

//executar um passo de cada vez

//PASSO 1
var data;

$.get("https://www.pmweb.com.br/teste-cro/promocoes/1.json", function(response){
		data = response;
});


//PASSO 2
var htmlModal = '<div style="position: absolute;">  <div style="background-color:rgba(0, 0, 0, 0.6); z-index: 29; height: 100vh; top: 0; left: 0; position: fixed;width: 100vw;"></div><div style="border-radius:5px;overflow:scroll;width:850px;height:500px;z-index:30;position:fixed;left:20%;top:10%;background-color:white;"> <div class="SectionProducts" style="width: 100%;display: flex;flex: row;flex-wrap: wrap;justify-content: space-around;"><div class="Product" id="CardProduct" style="  width: 150px; height: 100px;box-shadow: 5px 2px 1px 0px #c1c1c1; border-radius: 5px; margin: 10px; padding:10px;"> <div class="ProductItem code">  Valor Tarifa: <span></span></div><div class="ProductItem name">  Nome: <span></span></div><div style="width: 100%;height: 50%;display: flex;align-items: center;justify-content: center;"><div style="width: 75px;height: 25px;background-color: #e74c3c;color: #ffffff;display: flex;align-items: center;justify-content: center;border-radius: 5px;text-transform: capitalize;cursor: pointer;">Reservar</div></div></div></div></div></div>';

document.body.innerHTML += htmlModal;


//PASSO 3
$.each(data,function(index, obj){
        $('#CardProduct').clone().appendTo('.SectionProducts');
        var divProduct = $('#CardProduct').last();
        divProduct.attr('id',obj['NomeTarifa']);
        divProduct.find('.code span').html(obj['ValorTarifa']);
        divProduct.find('.name span').html(obj['NomeTarifa']);
        divProduct.show();
});