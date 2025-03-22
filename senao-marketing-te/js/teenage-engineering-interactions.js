/* Teenage Engineering 風格互動效果 */

document.addEventListener('DOMContentLoaded', function() {
    // 金屬按鈕點擊效果
    const metalButtons = document.querySelectorAll('.te-metal-button');
    metalButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });
    
    // 旋鈕旋轉效果
    const knobs = document.querySelectorAll('.te-knob');
    knobs.forEach(knob => {
        let rotation = 0;
        knob.addEventListener('click', function() {
            rotation += 30;
            this.style.transform = `rotate(${rotation}deg)`;
        });
    });
    
    // LCD顯示屏時間更新
    const lcdDisplays = document.querySelectorAll('.te-lcd');
    if (lcdDisplays.length > 0) {
        setInterval(() => {
            const now = new Date();
            const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                              now.getMinutes().toString().padStart(2, '0') + ':' + 
                              now.getSeconds().toString().padStart(2, '0');
            
            lcdDisplays.forEach(display => {
                if (display.getAttribute('data-display-time') === 'true') {
                    display.textContent = timeString;
                }
            });
        }, 1000);
    }
    
    // 工業風格進度條動畫
    const progressBars = document.querySelectorAll('.te-progress-bar[data-animate="true"]');
    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-target-width') || '100%';
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 300);
    });
    
    // 故障藝術效果增強
    const glitchElements = document.querySelectorAll('.te-glitch');
    glitchElements.forEach(element => {
        if (!element.getAttribute('data-text')) {
            element.setAttribute('data-text', element.textContent);
        }
        
        element.addEventListener('mouseover', function() {
            this.classList.add('te-glitch-active');
        });
        
        element.addEventListener('mouseout', function() {
            this.classList.remove('te-glitch-active');
        });
    });
    
    // LED指示燈交互效果
    const leds = document.querySelectorAll('.te-led-enhanced');
    leds.forEach(led => {
        led.addEventListener('click', function() {
            // 切換LED狀態
            if (this.classList.contains('green')) {
                this.classList.remove('green');
                this.classList.add('blue');
            } else if (this.classList.contains('blue')) {
                this.classList.remove('blue');
                this.classList.add('red');
            } else if (this.classList.contains('red')) {
                this.classList.remove('red');
                this.classList.add('yellow');
            } else if (this.classList.contains('yellow')) {
                this.classList.remove('yellow');
                this.classList.add('green');
            } else {
                this.classList.add('green');
            }
            
            // 切換閃爍狀態
            if (Math.random() > 0.7) {
                this.classList.toggle('blink');
            }
        });
    });
});

// 添加一些CSS動畫效果
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .te-glitch-active::before, .te-glitch-active::after {
            animation-duration: 0.5s !important;
        }
        
        .te-metal-button.clicked {
            transform: translateY(2px) !important;
            background: var(--te-metal-pressed) !important;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1) !important;
        }
    `;
    document.head.appendChild(style);
});