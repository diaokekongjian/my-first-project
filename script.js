// 获取按钮和文字区域
const btn = document.getElementById('btn');
const msg = document.getElementById('msg');

// 点击事件
btn.addEventListener('click', function () {
  msg.textContent = '✅ 按钮点击成功！开发入门完成～';
});

console.log('项目运行正常');