// script.js
let generatedOtp = null;
let balance = 0; // Начальный баланс

document.getElementById('otpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Генерация случайного OTP
    generatedOtp = Math.floor(1000 + Math.random() * 9000); // 4-значный код

    // Показать секцию для ввода OTP и сам код
    document.getElementById('otpSection').classList.remove('hidden');
    document.getElementById('otpDisplay').classList.remove('hidden');
    document.getElementById('otpCode').textContent = generatedOtp;

    console.log('OTP:', generatedOtp); // Для отладки
});

// Функция проверки OTP
function verifyOtp() {
    const userOtp = document.getElementById('otpInput').value;

    if (userOtp == generatedOtp) {
        document.getElementById('verificationMessage').textContent = "OTP успешно подтвержден! Доступ разрешен.";
        document.getElementById('verificationMessage').style.color = "green";

        // Показать секцию транзакций
        document.getElementById('transactionSection').classList.remove('hidden');
        document.getElementById('otpSection').classList.add('hidden');
        document.getElementById('otpForm').classList.add('hidden');
        document.getElementById('otpDisplay').classList.add('hidden');
    } else {
        document.getElementById('verificationMessage').textContent = "Неверный OTP. Попробуйте еще раз.";
        document.getElementById('verificationMessage').style.color = "red";
    }
}

// Функция пополнения баланса
function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0) {
        balance += amount;
        document.getElementById('balance').textContent = balance;
        document.getElementById('transactionMessage').textContent = `Баланс пополнен на ${amount} TJS.`;
        document.getElementById('transactionMessage').style.color = "green";
    } else {
        document.getElementById('transactionMessage').textContent = "Введите корректную сумму.";
        document.getElementById('transactionMessage').style.color = "red";
    }
}

// Функция снятия средств
function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        document.getElementById('balance').textContent = balance;
        document.getElementById('transactionMessage').textContent = `Снято ${amount} TJS.`;
        document.getElementById('transactionMessage').style.color = "green";
    } else if (amount > balance) {
        document.getElementById('transactionMessage').textContent = "Недостаточно средств.";
        document.getElementById('transactionMessage').style.color = "red";
    } else {
        document.getElementById('transactionMessage').textContent = "Введите корректную сумму.";
        document.getElementById('transactionMessage').style.color = "red";
    }
}
