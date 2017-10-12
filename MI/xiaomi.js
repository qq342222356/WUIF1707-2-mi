{
    let ziis=document.querySelectorAll(".top-right-zi h2");
let tuus=document.querySelectorAll("#zhineng .zhineng-picture")
ziis.forEach(function(ele,index){
    ele.onmouseover=function () {
    let l=ziis.length;
    for(i=0;i<l;i++){
       ziis[i].classList.remove("active");
        tuus[i].classList.remove("active");
    }
    ziis.classList.add("active");
    tuus[index].classList.add("active");
    }
});
}
{
   let zt=document.querySelectorAll(".neirong-tu");
    for(let i=0;i<zt.length;i++){
        bz(zt[i]);
    }
    function bz(parent){
    let dang=parent.querySelector(".neirongtu-tu");

    let d=parent.querySelectorAll(".lunbo li");
    let ls=parent.querySelector(".prov1");
    let rs=parent.querySelector(".next1");

    d.forEach(function(ele,index) {
        ele.onclick=dj;
            function dj() {
            for(let i=0;i<d.length;i++){
            d[i].classList.remove("active");
        }
        ele.classList.add("active");
        dang.style.marginLeft=-296*index+"px"
        }
    });
    let now=0;
    rs.onclick=function() {
        now++;
        if(now===d.length){
            now=d.length-1
        }
        for(let i=0;i<d.length;i++){
            d[i].classList.remove("active");
        }
        d[now].classList.add("active");
        dang.style.marginLeft="-296"*now+"px";
    }
    ls.onclick=function () {
        now--;
        if(now===-1){
            now=0
        }
        for(let i=0;i<d.length;i++){
            d[i].classList.remove("active");
        }
        d[now].classList.add("active");
        dang.style.marginLeft=-296*now+"px"
    }
}
}