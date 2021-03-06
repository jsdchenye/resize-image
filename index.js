function resize(e) {
  let src = e.target.getAttribute('src');
    document.body.style.overflow = 'hidden';  //清除body内部部分的滚动条
    let divModule = document.createElement('div');  //设置图片下面的蒙层
    let imgModule = document.createElement('img');  //设置图片的存放容器
    imgModule.setAttribute('src',src);
    imgModule.style.marginTop = '20px';
    divModule.appendChild(imgModule);
    divModule.style.position = 'fixed';
    divModule.style.backgroundColor = '#444444';
    divModule.style.top = '0px';
    divModule.style.bottom = '0px';
    divModule.style.left = '0px';
    divModule.style.right = '0px';
    divModule.style.textAlign = 'center';
    divModule.style.height = '100%';
    divModule.style.zIndex = 100;
    divModule.style.opacity = 0.99;
    divModule.style.overflowY = 'scroll';
    document.body.appendChild(divModule);
    divModule.onclick = function() {
      document.body.style.overflow = 'auto';
      document.body.removeChild(divModule);
    }
}
export default resize;
