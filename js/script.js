// AMALIYOT



let NumberOfSeries;

function startapp(){
    NumberOfSeries = +prompt("nechta serial ko'rgansiz","");
    while(NumberOfSeries==""|| NumberOfSeries==null ||NumberOfSeries<0|| isNaN(NumberOfSeries)){
        NumberOfSeries = +prompt("nechta serial ko'rgansiz","");
    }
}
startapp();


const SeriesDB = {
    count:NumberOfSeries,
    series:{},
    actors:{},
    genres:[],
    private:false,
};

function rememberMySeries(){
    for(let i=0; i<2; i++){
        a = prompt("oxirgi ko'rgan serialingiz","");
        b = prompt("nechta qismini ko'rgansiz","");
        if(a!=null && b!=null && a!="" && b!=""){
          SeriesDB.series[a]=b;
          console.log("done");  
        }else{
            console.log("error");
            i--;
        }
    }
}
rememberMySeries();

function seriesStatus(){
    if(SeriesDB.count<5){
        console.log("kam serial ko'ribsiz");
    } else if(SeriesDB.count>5 && SeriesDB.count<15){
        console.log("Siz klassik tamoshabin ekansiz");
    }else {
        console.log("Siz kino ko'rish bo'yicha zvezda ekansiz");
    }
}
seriesStatus();

// 1-) showDb nomli funksiya yozing, va ushbu funksiya bizga private xususiyatini tekshirsin. Agarda private - false  bo’lsa bizga hamma ma’lumot ko’rsatilsin, aks xolda yoq

function showDb(){
    if(!SeriesDB.private){
        console.log(SeriesDB);
    }else{
        console.log("Malumot yoq");
    }
}
showDb();
// writeGenres nomli funksiya yozing ushbu funksiya 3marta foydalanuvchidan “Yaxshi ko’rgan janringiz ${son ketma ketlikda}”. Hamma javobni genres massivga joylang
function writeGenris(){
    for(let i=0; i<=2; i++){
         const genre= prompt(`Yaxshi ko'rgan serialingiz ${i+1} `);
         SeriesDB.genres[i]=genre;
    }
}
writeGenris();