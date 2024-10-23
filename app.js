
        // تابعی برای بارگذاری نمودارها
        function loadCharts() {
            const btcChartCtx = document.getElementById('btc-chart').getContext('2d');
            const ethChartCtx = document.getElementById('eth-chart').getContext('2d');
            const xrpChartCtx = document.getElementById('xrp-chart').getContext('2d');
            const ltcChartCtx = document.getElementById('ltc-chart').getContext('2d');
            const dogeChartCtx = document.getElementById('doge-chart').getContext('2d');
            const solChartCtx = document.getElementById('sol-chart').getContext('2d');

            const btcChart = new Chart(btcChartCtx, {
                type: 'line',
                data: {
                    labels: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
                    datasets: [{
                        label: 'قیمت BTC',
                        data: [1000000, 1100000, 1050000, 1150000, 1200000, 1250000],
                        backgroundColor: 'rgba(255, 193, 7, 0.2)',
                        borderColor: 'rgba(255, 193, 7, 1)',
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            const ethChart = new Chart(ethChartCtx, {
                type: 'line',
                data: {
                    labels: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
                    datasets: [{
                        label: 'قیمت ETH',
                        data: [300000, 310000, 305000, 320000, 325000, 330000],
                        backgroundColor: 'rgba(0, 123, 255, 0.2)',
                        borderColor: 'rgba(0, 123, 255, 1)',
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            const xrpChart = new Chart(xrpChartCtx, {
                type: 'line',
                data: {
                    labels: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
                    datasets: [{
                        label: 'قیمت XRP',
                        data: [200, 210, 205, 220, 225, 230],
                        backgroundColor: 'rgba(40, 167, 69, 0.2)',
                        borderColor: 'rgba(40, 167, 69, 1)',
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            const ltcChart = new Chart(ltcChartCtx, {
                type: 'line',
                data: {
                    labels: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
                    datasets: [{
                        label: 'قیمت LTC',
                        data: [800000, 810000, 805000, 820000, 825000, 830000],
                        backgroundColor: 'rgba(255, 87, 34, 0.2)',
                        borderColor: 'rgba(255, 87, 34, 1)',
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            const dogeChart = new Chart(dogeChartCtx, {
                type: 'line',
                data: {
                    labels: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
                    datasets: [{
                        label: 'قیمت DOGE',
                        data: [500, 550, 525, 600, 620, 640],
                        backgroundColor: 'rgba(233, 30, 99, 0.2)',
                        borderColor: 'rgba(233, 30, 99, 1)',
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            const solChart = new Chart(solChartCtx, {
                type: 'line',
                data: {
                    labels: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
                    datasets: [{
                        label: 'قیمت SOL',
                        data: [60000, 61000, 60500, 62000, 63000, 64000],
                        backgroundColor: 'rgba(76, 175, 80, 0.2)',
                        borderColor: 'rgba(76, 175, 80, 1)',
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        window.onload = loadCharts; // بارگذاری نمودارها هنگام بارگذاری صفحه
    //
    function createAccount() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username.length < 8 || password.length < 8) {
            alert('نام کاربری و رمز عبور باید حداقل 8 کاراکتر باشد.');
            return;
        }

        // ذخیره نام کاربری و رمز عبور
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        
        alert(`نام کاربری شما با این رمز عبور به ثبت رسید: ${username}`);
    }

    function connectAccount() {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // بررسی اطلاعات وارد شده
        if (username === storedUsername && password === storedPassword) {
            // هدایت به صفحه پروفایل
            window.location.href = 'profile.html';
        } else {
            alert('نام کاربری یا رمز عبور اشتباه است.');
        }
    }