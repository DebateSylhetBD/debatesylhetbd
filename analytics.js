// Mini-Cut Eid Mubarak Floating Banner
(function() {
    if (document.getElementById('eid-mini-banner')) return;

    const style = document.createElement('style');
    style.textContent = `
    #eid-mini-banner {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 6px 18px rgba(0,0,0,0.2);
        z-index: 9999;
        cursor: pointer;
        transition: width 0.3s ease, height 0.3s ease, border-radius 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
    }
    #eid-mini-banner.expanded {
        width: 250px;
        height: 70px;
        border-radius: 12px;
    }
    #eid-mini-banner img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transition: width 0.3s, height 0.3s, border-radius 0.3s;
        margin: 5px;
    }
    #eid-mini-banner.expanded img {
        width: 70px;
        height: 70px;
        border-radius: 8px;
        margin: 0 10px 0 10px;
    }
    #eid-mini-banner .eid-text {
        display: none;
        font-size: 14px;
        font-weight: 600;
        color: #1e293b;
        margin-left: 5px;
    }
    #eid-mini-banner.expanded .eid-text {
        display: block;
    }
    #eid-mini-banner .ad-close {
        position: absolute;
        top: 2px;
        right: 2px;
        border: none;
        background: transparent;
        font-size: 18px;
        font-weight: bold;
        color: #444;
        cursor: pointer;
        display: none;
    }
    #eid-mini-banner.expanded .ad-close {
        display: block;
    }
    @media (max-width: 480px) {
        #eid-mini-banner.expanded {
            width: 90%;
            height: 60px;
            right: 5%;
            bottom: 15px;
        }
        #eid-mini-banner.expanded img {
            width: 50px;
            height: 50px;
        }
        #eid-mini-banner .eid-text {
            font-size: 13px;
        }
    }
    `;
    document.head.appendChild(style);

    const banner = document.createElement('div');
    banner.id = 'eid-mini-banner';
    banner.innerHTML = `
        <a href="https://www.facebook.com/share/1C9jDrJYtX/" target="_blank" title="Sadiya's Collection">
            <img src="https://i.imgur.com/x25BCce.jpeg" alt="Sadiya's Collection - Eid Mubarak">
            <span class="eid-text">Eid Mubarak! 🎉 Sadiya's Collection</span>
        </a>
        <button class="ad-close" aria-label="Close Banner">&times;</button>
    `;
    document.body.appendChild(banner);

    // Expand on hover or touch
    banner.addEventListener('mouseenter', () => banner.classList.add('expanded'));
    banner.addEventListener('mouseleave', () => banner.classList.remove('expanded'));

    // For mobile tap toggle
    banner.addEventListener('click', function(e) {
        if (!banner.classList.contains('expanded') && e.target.tagName !== 'A' && e.target.tagName !== 'IMG') {
            e.preventDefault();
            banner.classList.add('expanded');
        }
    });

    // Close button functionality
    banner.querySelector('.ad-close').addEventListener('click', function(e){
        e.preventDefault();
        banner.style.display = 'none';
    });
})();
