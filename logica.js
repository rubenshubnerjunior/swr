


$(document).ready(function () {


    $('#btRetorno').click(function () {
        calcRetorno();
    }); //Fim do botao calcula Retorno


    $('#btCaboAt').click(function () {
        calcAtCabo();
    }); //Fim do botao Calc At Cabo

    $('#btAtTotal').click(function () {
        calcAtTotal();
    }); //Fim do botao Calc At Total


    $('#btPout').click(function () {
        calcPout();
    }); //Fim do botao Calc At Cabo
    
    $('#btDbToWatts').click(function () {
       dbToWatts();
    }); //Fim do botao DbToWatts
    
    
    calcRetorno();
    calcAtCabo();
    
    

});//Fim do $(document).ready


function calcRetorno()
{
    let sDireta = $("#txtDireta").val();

    if (isNaN(sDireta) === true)//Verifica se eh numero
    {
        alert("Digite apenas numeral");
        return;
    }

    let sRefletida = $("#txtRefletida").val();

    if (isNaN(sRefletida) === true)//Verifica se eh numero
    {
        alert("Digite apenas numeral");
        return;
    }

    let direta = parseFloat(sDireta);
    let refletida = parseFloat(sRefletida);

    let rt = 10 * Math.log10(refletida / direta);
    rt = rt.toFixed(2);//Limita o numero de digitos

    $("#txtRetorno").val("" + rt);


    let prPf = Math.sqrt(refletida / direta);// raiz da potencia Refletida / potencia direta

    let swr = (1 + prPf) / (1 - prPf);
    swr = swr.toFixed(3);

    $("#txtSwr").val("" + swr);
    
    let inDbm = 10*Math.log10(1000* direta);//converter para Dbm
    inDbm = inDbm.toFixed(3);
    $("#txtDbmIn").val("" + inDbm);
    
    let outDbm = 10*Math.log10(1000* refletida);//converter para Dbm
    outDbm = outDbm.toFixed(3);
    $("#txtDbmOut").val("" + outDbm);
    
}

function calcAtCabo()
{
    let sComp = $("#txtComprimento").val();

    if (isNaN(sComp) === true)//Verifica se eh numero
    {
        alert("Digite apenas numeral");
        return;
    }

    let sAt100 = $("#txtAt100").val();

    if (isNaN(sAt100) === true)//Verifica se eh numero
    {
        alert("Digite apenas numeral");
        return;
    }

    let comprimento = parseFloat(sComp);
    let at100 = parseFloat(sAt100);


    let atCabo = (at100 / 100) * comprimento;
    atCabo = atCabo.toFixed(3);//Limita o numero de digitos

    $("#txtAtCabo").val("" + atCabo);
    $("#txtAtCabo2").val("" + atCabo);
    

    calcAtTotal();

}

function calcAtTotal()
{

    let sAtCabo = $("#txtAtCabo2").val();

    if (isNaN(sAtCabo) === true)//Verifica se eh numero
    {
        alert("Digite apenas numeral");
        return;
    }
    let sAtConectores = $("#txtAtConector").val();

    if (isNaN(sAtConectores) === true)//Verifica se eh numero
    {
        alert("Digite apenas numeral");
        return;
    }

    let atCabo = parseFloat(sAtCabo);
    let atConector = parseFloat(sAtConectores);

    let atTotal = atCabo + atConector;

    $("#txtAtTotal").val("" + atTotal);

    $("#txtAtInsert").val("" + atTotal);
    calcPout();

}

function calcPout()
{
    let sPotIn = $("#txtPotIn").val();

    if (isNaN(sPotIn) === true)//Verifica se eh numero
    {
        alert("Digite apenas numeral");
        return;
    }

    let sAtInsert = $("#txtAtInsert").val();

    if (isNaN(sAtInsert) === true)//Verifica se eh numero
    {
        alert("Digite apenas numeral");
        return;
    }


    let potIn = parseFloat(sPotIn);
    let atInsert = parseFloat(sAtInsert);

    let expoente = (atInsert / 10) * -1;// 10^-(Perda/10)

    let pout = Math.pow(10, expoente) * potIn;// 10^-(Perda/10) * Pin

    pout = pout.toFixed(3);//Limita o numero de digitos

    $("#txtPotSaida").val("" + pout);


}

function dbToWatts()
{
    let sPotDbm = $("#txtPotDb").val();
    
    if (isNaN(sPotDbm) === true)//Verifica se eh numero
    {
        alert("Digite apenas numeral");
        return;
    }
    
    let potDbm = parseFloat(sPotDbm);//Potencia em Dbm
    
    let expoente = potDbm/10;
    
    let potWatts= (Math.pow(10,expoente))/1000;
    potWatts = potWatts.toFixed(3);//Limita o numero de digitos
    
    $("#txtPotWatts").val("" + potWatts);
        
}