// 🌙 Ramadan Sticky Banner Script

// 1. CSS Styles
const style = document.createElement('style');
style.innerHTML = `
#ramadan-banner {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 728px;
  max-width: 95%;
  height: 90px;
  background: linear-gradient(135deg, #fef3c7, #fcd34d);
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  box-shadow: 0 -5px 25px rgba(0,0,0,0.2);
  font-family: 'Segoe UI', sans-serif;
  color: #1e3a8a;
  z-index: 9999;
  overflow: hidden;
  animation: fadeInUp 1s ease forwards;
}
#ramadan-banner img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #fff;
  flex-shrink: 0;
}
#ramadan-banner .text {
  flex-grow: 1;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
}
#ramadan-banner .close-btn {
  background: #1e3a8a;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
#ramadan-banner .crescent, #ramadan-banner .star, #ramadan-banner .lantern {
  position: absolute;
  font-size: 16px;
  animation: float 3s infinite ease-in-out alternate;
}
#ramadan-banner .crescent {left: 15px; top: 10px; font-size:20px;}
#ramadan-banner .star:nth-child(1){left:120px; top:15px; animation-delay:0s;}
#ramadan-banner .star:nth-child(2){left:200px; top:10px; animation-delay:1s;}
#ramadan-banner .star:nth-child(3){left:300px; top:20px; animation-delay:2s;}
#ramadan-banner .lantern:nth-child(4){left:400px; top:10px; animation-delay:0.5s; font-size:18px;}
#ramadan-banner .lantern:nth-child(5){left:520px; top:5px; animation-delay:1.5s; font-size:18px;}
@keyframes float {0% {transform: translateY(0);} 50% {transform: translateY(-5px);} 100% {transform: translateY(0);}}
@keyframes fadeInUp {0% {opacity:0; transform: translate(-50%, 50px);} 100% {opacity:1; transform: translate(-50%, 0);}}
@media(max-width:768px){
  #ramadan-banner {width:95%; height:70px; padding:8px 12px;}
  #ramadan-banner img {width:45px; height:45px;}
  #ramadan-banner .text {font-size:16px;}
  #ramadan-banner .close-btn {width:24px; height:24px; font-size:16px;}
  #ramadan-banner .crescent, #ramadan-banner .star, #ramadan-banner .lantern {font-size:14px;}
}
@media(max-width:480px){#ramadan-banner .text {font-size:14px;}}
`;
document.head.appendChild(style);

// 2. HTML Banner
const banner = document.createElement('div');
banner.id = 'ramadan-banner';
banner.innerHTML = `
  <span class="crescent">🌙</span>
  <span class="star">⭐</span>
  <span class="star">✨</span>
  <span class="star">🌟</span>
  <span class="lantern">🏮</span>
  <span class="lantern">🏮</span>
  <img src="https://debatesylhetbd.onrender.com/logo.png" alt="DebateSylhetBD Logo">
  <div class="text">🌙 Ramadan Mubarak from DebateSylhetBD!</div>
  <button class="close-btn" onclick="document.getElementById('ramadan-banner').style.display='none'">&times;</button>
`;
document.body.appendChild(banner);
