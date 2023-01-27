//değişkenler
let min=1,
 max=10,
 kazananSayi=rastgeleKazananSayi(min,max);
 tahminHakki=3;
 //HTML elemanların değerlerini bir değişkene aktaralım

 const minSayi = document.querySelector(".min"),
 maxSayi = document.querySelector(".max")
  tahminInput = document.querySelector("#tahmin-input");
  tahminbtn = document.querySelector("#tahmin-btn")
  oyun = document.querySelector(".oyun")
  mesaj=document.querySelector(".mesaj")
  //min ve max değerleri belirleyelim 
  minSayi.textContent=min;
  maxSayi.textContent=max;
  //oyun bittiğinde yeniden başlatma
  oyun.addEventListener("mousedown",function(e){
    if(e.target.className==="tekrar-oyna"){
        window.location.reload();
    }
  })
  //tahmine başlayalım 
   tahminbtn.addEventListener("click",function(){
    const tahminEdilenSayi=tahminInput.value;
     if(tahminEdilenSayi ===""
     || tahminEdilenSayi < min 
     || tahminEdilenSayi > max){
      mesajYazdir("hata! Boş alan bıraktın veya minimum-maximum sayı ornını geçtin" , "red")
     }else if(tahminEdilenSayi.value==kazananSayi){
     oyunBitti(false,"Başarılı doğru tahmin")
     }else{
        tahminHakki -= 1;
        if(tahminHakki== 0){
            //oyun bitti
           oyunBitti(true,`Tahmin hakkınız kalmadı...kazanan sayı ${kazananSayi}`);

        } else{
            //oyun devam ediyor
            mesajYazdir(`Tahmin hakkınız ${tahminHakki} kaldı...`,"red")
        }
     } 
   });
    //oyun bitti fonksiyonu
    function oyunBitti(kontrol,msj){
        let color;
        kontrol==true ? (color="red"):(color="green");
        tahminInput.disabled=true;
        tahminInput.style.borderColor=color;
        mesajYazdir(msj,color)
        //Button olayını değiştirelim
        tahminbtn.textContent="Tekrar Oyna";
        tahminbtn.className="tekrar-oyna"
    }
    //mesaj yazdır fonksiyonu
    function mesajYazdir(msj,color){
    //mesaj parametresi
    mesaj.textContent=msj;
    //rengini değiştirelim
    mesaj.style.color = color;

}
  //Rastgele kazanan sayı üretme
  function rastgeleKazananSayi(min,max){
 return Math.floor(Math.random()*(max-min+1)+min);
  }