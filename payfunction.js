var appId = ""
var tokenid = ""
function payphoneCredentials(id, tken){
 appId = id
 tokenid = tken
 console.log(appId + " " + tokenid)
}
//document.writeln("<script type='text/javascript' src='https://pay.payphonetodoesposible.com/api/button/js?appId="+ tokenid +"'></script>");
document.writeln("<script type='text/javascript' src='https://pay.payphonetodoesposible.com/api/button/js?appId=ACATUIDDEAPLICACION'></script>");
window.onload = function() {
    payphone.Button({
    
    //token obtenido desde la consola de developer
    token: tokenid, //"TU-TOKEN-DE-AUTENTICACIÓN-AQUI",
    
    //PARÁMETROS DE CONFIGURACIÓN
    btnHorizontal: true,
    btnCard: true,
    
    createOrder: function(actions){
    
    //Se ingresan los datos de la transaccion ej. monto, impuestos, etc
    return actions.prepare({
    
    amount: 100,
    amountWithoutTax: 100,
    currency: "USD",
    clientTransactionId: "identificador-único"
    });
    
    },
    onComplete: function(model, actions){
    
    //Se confirma el pago realizado
    actions.confirm({
    id: model.id,
    clientTxId: model.clientTxId
    }).then(function(value){
    
    //EN ESTA SECCIÓN SE RECIBE LA RESPUESTA Y SE MUESTRA AL USUARIO
    
    if (value.transactionStatus == "Approved"){
    alert("Pago " + value.transactionId + " recibido, estado " + value.transactionStatus );
    }
    }).catch(function(err){
    console.log(err);
    });
    
    }
    }).render("#pp-button");
    
    }