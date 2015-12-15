/* SantaModel assists santa's helpers in packing children's requests.
 * It provides quality control by checking if the requests are being
 * fulfilled
 */

var SantaModel = {
  
  /* Initializes the model with a list of requests, 
   * and sets the first one as the current one 
   */
   init : function(list){
       this.request= list;
   },
  
   /* It moves "current" to the next request */
   next : function (){
       
   },
  
   /* Returns the current request. 
    * If all requests have been processed (there is no current one), it returns null 
    */
   getCurrentRequest : function (pos) {
       this.request[pos].question;
   },  
    
   /* Packs the given item if it fulfills the current request.       
    * returns 1 if the given item fulfills the request (= answer)
    * returns 0 if the given item does not fulfill the request
    */
   pack : function(item) {
       var risp=$("select").find(":selected").val();
       if(risp==SantaModel.request[item].answer){
        cont++;
       }
   }      
  
};

var SantaOctopus={
    init:function(list,num){
        SantaModel.init(list);
        SantaView.init(num); 
    },
    
    getDomanda:function(pos){
        return SantaModel.request[pos].question;
    },
    getRisposta:function(pos){
        return SantaModel.request[pos].options;
    },
    getRispGiusta:function(pos){
        return SantaModel.request[pos].answer;
    },
    getRisult:function(pos){
        
        var risp=$("select").find(":selected").val();
        if(risp==SantaOctopus.getRispGiusta(pos)){
            
         cont++;   
        }
        return cont;
    }
};

var SantaView={
    
    init:function(pos){
        var num=parseInt(pos);
        var array=SantaOctopus.getDomanda(num);
        var risp=SantaOctopus.getRisposta(num);
        var tmp="<li>"+array+"<h6>"+risp+"<h6> <select><option value='yes'> YES</option><option value='no'> NO</option></select></li>";
        $(".question").append(tmp);
        if($("select").find(":selected")){
            var cont=SantaOctopus.getRisult(num);
        }
        $("")
    },
}
var cont;
$(document).ready(function(){
    SantaOctopus.init(requests,"0");
    SantaOctopus.init(requests,"1");
    SantaOctopus.init(requests,"2");
});