// Mini Eid Mubarak Ad Banner - Internal CSS in JS
(function() {
    // Prevent duplicate banner
    if (document.getElementById('eid-ad-banner')) return;

    // Create style element
    const style = document.createElement('style');
    style.textContent = `
    /* Mini responsive Eid Ad Banner */
    #eid-ad-banner {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 250px;
        max-width: 90%;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 6px 18px rgba(0,0,0,0.2);
        overflow: hidden;
        z-index: 9999;
        font-family: 'Inter', sans-serif;
        display: flex;
        align-items: center;
        animation: slideIn 0.6s ease-out;
    }
    #eid-ad-banner a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: inherit;
        width: 100%;
        position: relative;
    }
    #eid-ad-banner img {
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 8px;
        margin: 10px;
    }
    #eid-ad-banner .eid-text {
        flex: 1;
        font-weight: 600;
        font-size: 14px;
        color: #1e293b;
        margin-right: 10px;
    }
    #eid-ad-banner .ad-close {
        position: absolute;
        top: 5px;
        right: 5px;
        border: none;
        background: transparent;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        color: #444;
    }
    #eid-ad-banner .ad-close:hover {
        color: #f00;
    }
    @media (max-width: 480px) {
        #eid-ad-banner {
            width: 90%;
            bottom: 15px;
            right: 5%;
        }
        #eid-ad-banner img {
            width: 60px;
            height: 60px;
            margin: 8px;
        }
        #eid-ad-banner .eid-text {
            font-size: 13px;
        }
    }
    @keyframes slideIn {
        from { transform: translateY(100px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    `;
    document.head.appendChild(style);

    // Create banner element
    const banner = document.createElement('div');
    banner.id = 'eid-ad-banner';
    banner.innerHTML = `
        <a href="https://www.facebook.com/share/1C9jDrJYtX/" target="_blank" title="Sadiya's Collection">
            <img src="https://i.imgur.com/x25BCce.jpeg" alt="Sadiya's Collection - Eid Mubarak Banner">
            <span class="eid-text">Eid Mubarak! 🎉</span>
            <button class="ad-close" aria-label="Close Banner">&times;</button>
        </a>
    `;
    document.body.appendChild(banner);

    // Close button functionality
    banner.querySelector('.ad-close').addEventListener('click', function(e){
        e.preventDefault();
        banner.style.display = 'none';
    });
})();
