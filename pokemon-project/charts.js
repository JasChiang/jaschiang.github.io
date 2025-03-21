// 圖表初始化函數
document.addEventListener('DOMContentLoaded', function() {
    // 玩家年齡分布圖表
    const playerDemographicsCtx = document.getElementById('playerDemographicsChart').getContext('2d');
    new Chart(playerDemographicsCtx, {
        type: 'pie',
        data: {
            labels: ['25-54歲 (78%)', '其他年齡層 (22%)'],
            datasets: [{
                data: [78, 22],
                backgroundColor: [
                    '#3b4cca',
                    '#ffcb05'
                ],
                borderColor: [
                    '#ffffff',
                    '#ffffff'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: '台灣寶可夢GO玩家年齡分布',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });

    // 中華電信門市寶可夢GO地標分布
    const poiDistributionCtx = document.getElementById('poiDistributionChart').getContext('2d');
    new Chart(poiDistributionCtx, {
        type: 'bar',
        data: {
            labels: ['寶可補給站', '道館', '一般門市'],
            datasets: [{
                label: '中華電信門市分布',
                data: [120, 85, 205],
                backgroundColor: [
                    '#ee1515',
                    '#3b4cca',
                    '#ffcb05'
                ],
                borderColor: [
                    '#c41111',
                    '#2a3a99',
                    '#d9aa04'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '門市數量'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '類型'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: '中華電信門市寶可夢GO地標分布',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });

    // 合作品牌比較
    const brandComparisonCtx = document.getElementById('brandComparisonChart').getContext('2d');
    new Chart(brandComparisonCtx, {
        type: 'radar',
        data: {
            labels: [
                '門市整合規模',
                '玩家互動程度',
                '品牌曝光效果',
                '商品銷售連結',
                '活動創新度'
            ],
            datasets: [{
                label: '全家便利商店',
                data: [95, 85, 80, 90, 70],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }, {
                label: '台灣三星',
                data: [60, 75, 85, 65, 90],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
                label: '中華電信',
                data: [70, 65, 75, 60, 65],
                fill: true,
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                borderColor: 'rgb(255, 205, 86)',
                pointBackgroundColor: 'rgb(255, 205, 86)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 205, 86)'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '品牌寶可夢GO行銷策略比較',
                    font: {
                        size: 16
                    }
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });

    // 產品需求對應圖
    const productNeedsCtx = document.getElementById('productNeedsChart').getContext('2d');
    new Chart(productNeedsCtx, {
        type: 'polarArea',
        data: {
            labels: [
                '行動數據方案',
                '智慧型手機',
                '行動電源',
                '遊戲周邊',
                '智慧手錶/健身追蹤器'
            ],
            datasets: [{
                label: '玩家需求程度',
                data: [90, 85, 75, 60, 50],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: '寶可夢GO玩家產品需求分析',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });

    // 行銷策略效益評估
    const strategyEffectivenessCtx = document.getElementById('strategyEffectivenessChart').getContext('2d');
    new Chart(strategyEffectivenessCtx, {
        type: 'horizontalBar',
        data: {
            labels: [
                '遊戲內活動合作',
                '主題零售空間',
                '社群領袖合作',
                '專屬數據方案',
                '寶可夢主題商品'
            ],
            datasets: [{
                axis: 'y',
                label: '預估效益評分 (1-10)',
                data: [9.2, 8.5, 8.7, 7.8, 7.5],
                fill: false,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 10,
                    title: {
                        display: true,
                        text: '效益評分'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: '行銷策略效益評估',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });
});
