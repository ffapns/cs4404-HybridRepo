window.onload = function() {
    var clearBtn = $('#btnClear');
    var btnSign = $('#btnSign');
    var btnDigit = $('.btnDigit');
    var btnOp = $('.op');
    var digitview = $('#digits');


    var len = btnDigit.length;
    var lenOp = btnOp.length;
    var num, tempNum, result, temOp;


    for (var i = 0; i < len; ++i) {
        btnDigit[i].addEventListener('click', function() {
            num = this.value;

            if (digitview.val() != '0') {
                digitview.val(digitview.val() + num);
            } else {
                digitview.val('');
                digitview.val(num);
            }

            console.log(num);
        });
    }

    for (var j = 0; j < lenOp; ++j) {
        btnOp[j].addEventListener('click', function() {
            temOp = this.value;

            switch (temOp) {
                case '+':
                    tempNum = digitview.val();
                    digitview.val('');
                    break;
                case '-':
                    digitview.val('');
                    tempNum = num;
                    break;
                case '*':
                    digitview.val('');
                    tempNum = num;
                    break;
                case '/':
                    digitview.val('');
                    tempNum = num;
                    break;
                default:
                    break;
            }
            console.log(temOp);
        });
    }

    clearBtn.click(function() {
        num = 0;
        tempNum = 0;
        digitview.val(0);
    });

};