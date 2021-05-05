var kutyaTomb =[
    {
       nev:"Molly",
       kor:5,
       fajta:"Német juhász"
  },
  {
       nev:"Roki",
       kor:2,
       fajta:"Német juhász"
      
  },
  {
       nev:"Morzsa",
       kor:3,
       fajta:"Husky"
  }
  ];

var irany = true;

$(function(){
    
    tablazatKiir();
    
   
    
});

function rendezes(){
    //console.log(irany);
    if(irany){
    kutyaTomb.sort(function(a,b){
        return Number(a.nev>b.nev)-0.5;
    }
            );
    irany=false;
    }else{
        kutyaTomb.sort(function(a,b){
        return Number(a.nev<b.nev)-0.5;
    }
            );
    irany=true;
    }
    
//    console.log("Rákattintottunk");
    tablazatKiir();
}

function tablazatKiir(){
    $("article").empty();
    $("article").append("<table>");
$("article table").append(" <tr><th>Név</th><th>Kor</th><th>Fajta</th></tr>");

    for (var i = 0; i < kutyaTomb.length; i++) {
        $("article table").append("<tr>");
        
        for (var item in kutyaTomb[i]) {
                        $("article table tr").eq(i+1).append("<td>"+kutyaTomb[i][item]+"</td>");

        }
    }
     $("article th").click(rendezes);

//    for (var i = 0; i < kutyaTomb; i++) {
//        $("article table").append(" <tr><td>"+kutyaTomb[i].nev+"</td><td>"+kutyaTomb[i].kor+"</td><td>"+kutyaTomb[i].fajta+"</td></tr>");
//    }
}