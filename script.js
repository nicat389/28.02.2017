function chess(height){
for(i=1;i<=8;i++){
document.write('<div class="row" style="width:1170px; margin:0 auto;">');
for(j=1;j<=8;j++){
document.write('<div style="height:'+height+'px;"></div>');    
}
document.write('</div>')
}
}