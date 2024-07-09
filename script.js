function openTab(tabName) {
    console.log('Opening tab:', tabName);
    var contentDiv = document.getElementById("content");
    if (!contentDiv) {
        console.error('Content div not found');
        return;
    }

    // 將駝峰式命名轉換為短橫線命名
    var fileName = tabName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

    fetch(fileName + '.html')
    .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log('Content loaded, length:', data.length);
        contentDiv.innerHTML = data;
        console.log('Content after insertion:', contentDiv.innerHTML);
    })
    .catch(error => {
        console.error('Error loading content:', error);
        contentDiv.innerHTML = '<p>Error loading content. Please try again.</p>';
    });
    
    // 更新 URL 使用原始的駝峰式命名
    history.pushState(null, '', `#${tabName}`);
    updateActiveTab(tabName);
}

function updateActiveTab(tabName) {
    var tabs = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
        if (tabs[i].getAttribute("onclick").includes(tabName)) {
            tabs[i].classList.add("active");
        }
    }
}

// 頁面加載時打開默認標籤或基於URL的標籤
document.addEventListener('DOMContentLoaded', function() {
    var tabName = window.location.hash.substring(1) || 'AppleIntelligence';
    openTab(tabName);
});