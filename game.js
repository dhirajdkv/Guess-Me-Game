
        function setbackground() {
            window.setTimeout("setbackground()", 1000);
            var index = Math.round(Math.random() * 9);
            var ColorValue = "#E6A9EC";
            if (index == 1)
                ColorValue = "FFCCCC";
            if (index == 2)
                ColorValue = "CCAFFF";
            if (index == 3)
                ColorValue = "A6BEFF";
            if (index == 4)
                ColorValue = "99FFFF";
            if (index == 5)
                ColorValue = "D5CCBB";
            if (index == 6)
                ColorValue = "99FF99";
            if (index == 7)
                ColorValue = "FFFF99";
            if (index == 8)
                ColorValue = "FFCC99";
            if (index == 9)
                ColorValue = "CCCCCC";
            document.body.style.backgroundColor = ColorValue;

        }
        var j = 0;
        var num = [];
        for (var a = [1, 2, 3, 4, 5, 6], i = a.length; i--;) {
            var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
            num[j] = random;
            j += 1;
        }
        num[0]=1
        num[1]=2
        num[2]=3
        num[3]=4
        num[4]=5
        num[5]=6
        // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='1' id='1' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='2' id='2' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='3' id='3' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='4' id='4'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='5' id='5'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='6' id='6'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
        var r1 = []
        var flag = 0;
        var checkflag = 0;
        function rowCall(val, roww) {
            var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='" + val + "1' id='" + val + "1' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='" + val + "2' id='" + val + "2' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='" + val + "3' id='" + val + "3' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='" + val + "4' id='" + val + "4'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='" + val + "5' id='" + val + "5'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='" + val + "6' id='" + val + "6'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
            document.getElementById(roww).innerHTML = a
        }
        // 1ST RRRRRRRRRRROOOOOOOOOOOOOWWWWWWWWW
        $(document).ready(function () {
            $("#1").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data1 = document.getElementById("1").innerHTML;
                    document.getElementById("1").contentEditable = "false";
                    if(data1[0]!=" "){
                    function fun(val) {
                        if (val == num[0]) {
                            document.getElementById("1").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1;
                        }
                        else if ((val == num[1]) || (val == num[2]) || (val == num[3]) || (val == num[4]) || (val == num[5])) {
                            document.getElementById("1").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("1").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart4").innerHTML = " "
                                flag=0
                                checkflag=0

                            }
                        }
                    }
                    fun(data1[0]);
                    }
                    else{
                        document.getElementById("1").innerHTML="";
                        document.getElementById("1").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#2").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data2 = document.getElementById("2").innerHTML;
                    document.getElementById("2").contentEditable = "false";
                    // var check_enter = num.includes(Number(data2[0]))
                    if(data2[0]!=" "){
                    function fun(val) {
                        if (val == num[1]) {
                            document.getElementById("2").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1
                        }
                        else if ((val == num[0]) || (val == num[2]) || (val == num[3]) || (val == num[4]) || (val == num[5])) {
                            document.getElementById("2").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("2").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart4").innerHTML = " "
                                flag=0
                                checkflag=0
                            }
                        }
                    }
                    fun(data2[0]);
                }
                    else{
                        document.getElementById("2").innerHTML="";
                        document.getElementById("2").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#3").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data3 = document.getElementById("3").innerHTML;
                    document.getElementById("3").contentEditable = "false";
                    // var check_enter = num.includes(Number(data3[0]))
                    if(data3[0]!=" "){
                    function fun(val) {
                        if (val == num[2]) {
                            document.getElementById("3").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1;
                        }
                        else if ((val == num[0]) || (val == num[1]) || (val == num[3]) || (val == num[4]) || (val == num[5])) {
                            document.getElementById("3").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("3").style.backgroundColor = "red"
                            flag += 1;

                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart4").innerHTML = " "
                                flag=0
                                checkflag=0
                            }
                        }
                    }
                    fun(data3[0])}
                    else{
                        document.getElementById("3").innerHTML="";
                        document.getElementById("3").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#4").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data4 = document.getElementById("4").innerHTML;
                    document.getElementById("4").contentEditable = "false";
                    // var check_enter = num.includes(Number(data4[0]))
                    if(data4[0]!=" "){
                    function fun(val) {
                        if (val == num[3]) {
                            document.getElementById("4").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1;
                        }
                        else if ((val == num[0]) || (val == num[1]) || (val == num[2]) || (val == num[4]) || (val == num[5])) {
                            document.getElementById("4").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("4").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart4").innerHTML = " "
                                flag=0
                                checkflag=0
                            }
                        }
                    }
                    fun(data4[0])}
                    else{
                        document.getElementById("4").innerHTML="";
                        document.getElementById("4").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#5").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data5 = document.getElementById("5").innerHTML;
                    document.getElementById("5").contentEditable = "false";
                    // var check_enter = num.includes(Number(data5[0]))
                    if(data5[0]!=" "){
                    function fun(val) {
                        if (val == num[4]) {
                            document.getElementById("5").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1
                        }
                        else if ((val == num[0]) || (val == num[1]) || (val == num[2]) || (val == num[3]) || (val == num[5])) {
                            document.getElementById("5").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("5").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart4").innerHTML = " "
                                flag=0
                                checkflag=0
                            }
                        }
                    }
                    fun(data5[0])}
                    else{
                        document.getElementById("5").innerHTML="";
                        document.getElementById("5").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#6").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data6 = document.getElementById("6").innerHTML;
                    document.getElementById("6").contentEditable = "false";
                    // var check_enter = num.includes(Number(data6[0]))
                    if(data6[0]!=" "){
                    function fun(val) {
                        if (val == num[5]) {
                            document.getElementById("6").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1;
                        }
                        else if ((val == num[0]) || (val == num[1]) || (val == num[2]) || (val == num[3]) || (val == num[4])) {
                            document.getElementById("6").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("6").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                                flag=0
                                checkflag=0
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart4").innerHTML = " "
                                flag=0
                                checkflag=0
                                // console.log(document.getElementById("row2").innerHTML)
                            }
                        }
                    }
                    fun(data6[0])}
                    else{
                        document.getElementById("6").innerHTML="";
                        document.getElementById("6").contentEditable = "true";
                    }
                }
            });
        });
        // 2ND RRRRRRRRRROOOOOOOOOOOOOOOWWWWWWWWWWWWW
        $(document).ready(function () {
            $("#11").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data1 = document.getElementById("11").innerHTML;
                    document.getElementById("11").contentEditable = "false";
                    // var check_enter = num.includes(Number(data1[0]))
                    if(data1[0]!=" "){
                    function fun(val) {
                        if (val == num[0]) {
                            document.getElementById("11").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1;
                        }
                        else if ((val == num[1]) || (val == num[2]) || (val == num[3]) || (val == num[4]) || (val == num[5])) {
                            document.getElementById("11").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("11").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                document.getElementById("heart2").innerHTML = " "
                                flag=0
                                checkflag=0
                            }
                        }
                    }
                    fun(data1[0]);}
                    else{
                        document.getElementById("11").innerHTML="";
                        document.getElementById("11").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#12").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data2 = document.getElementById("12").innerHTML;
                    document.getElementById("12").contentEditable = "false";
                    // var check_enter = num.includes(Number(data2[0]))
                    if(data2[0]!=" "){
                    function fun(val) {
                        if (val == num[1]) {
                            document.getElementById("12").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1
                        }
                        else if ((val == num[0]) || (val == num[2]) || (val == num[3]) || (val == num[4]) || (val == num[5])) {
                            document.getElementById("12").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("12").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                document.getElementById("heart2").innerHTML = " "
                                flag=0
                                checkflag=0                            }
                        }
                    }
                    fun(data2[0]);}
                    else{
                        document.getElementById("12").innerHTML="";
                        document.getElementById("12").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#13").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data3 = document.getElementById("13").innerHTML;
                    document.getElementById("13").contentEditable = "false";
                    // var check_enter = num.includes(Number(data3[0]))
                    if(data3[0]!=" "){
                    function fun(val) {
                        if (val == num[2]) {
                            document.getElementById("13").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1;
                        }
                        else if ((val == num[0]) || (val == num[1]) || (val == num[3]) || (val == num[4]) || (val == num[5])) {
                            document.getElementById("13").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("13").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                document.getElementById("heart2").innerHTML = " "
                                flag=0
                                checkflag=0                            }
                        }
                    }
                    fun(data3[0])
                    }
                    else{
                        document.getElementById("13").innerHTML="";
                        document.getElementById("13").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#14").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data4 = document.getElementById("14").innerHTML;
                    document.getElementById("14").contentEditable = "false";
                    // var check_enter = num.includes(Number(data4[0]))
                    if(data4[0]!=" "){
                    function fun(val) {
                        if (val == num[3]) {
                            document.getElementById("14").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1;
                        }
                        else if ((val == num[0]) || (val == num[1]) || (val == num[2]) || (val == num[4]) || (val == num[5])) {
                            document.getElementById("14").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("14").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                document.getElementById("heart2").innerHTML = " "
                                flag=0
                                checkflag=0                            }
                        }
                    }
                    fun(data4[0])}
                    else{
                        document.getElementById("14").innerHTML="";
                        document.getElementById("14").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#15").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data5 = document.getElementById("15").innerHTML;
                    document.getElementById("15").contentEditable = "false";
                    // var check_enter = num.includes(Number(data5[0]))
                    if(data5[0]!=" "){
                    function fun(val) {
                        if (val == num[4]) {
                            document.getElementById("15").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1
                        }
                        else if ((val == num[0]) || (val == num[1]) || (val == num[2]) || (val == num[3]) || (val == num[5])) {
                            document.getElementById("15").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("15").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                document.getElementById("heart2").innerHTML = " "
                                flag=0
                                checkflag=0                            }
                        }
                    }
                    fun(data5[0])}
                    else{
                        document.getElementById("15").innerHTML="";
                        document.getElementById("15").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#16").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data6 = document.getElementById("16").innerHTML;
                    document.getElementById("16").contentEditable = "false";
                    // var check_enter = num.includes(Number(data6[0]))
                    if(data6[0]!=" "){
                    function fun(val) {
                        if (val == num[5]) {
                            document.getElementById("16").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1;
                        }
                        else if ((val == num[0]) || (val == num[1]) || (val == num[2]) || (val == num[3]) || (val == num[4])) {
                            document.getElementById("16").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("16").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                document.getElementById("heart2").innerHTML = " "
                                flag=0
                                checkflag=0
                            }
                        }
                    }
                    fun(data6[0])}
                    else{
                        document.getElementById("16").innerHTML="";
                        document.getElementById("16").contentEditable = "true";
                    }
                }
            });
        });
         // 3rd RRRRRRRRRRROOOOOOOOOOOOOWWWWWWWWW
         $(document).ready(function () {
            $("#21").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data1 = document.getElementById("21").innerHTML;
                    document.getElementById("21").contentEditable = "false";
                    // var check_enter = num.includes(Number(data1[0]))
                    if(data1[0]!=" "){
                    function fun(val) {
                        if (val == num[0]) {
                            document.getElementById("21").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1;
                        }
                        else if ((val == num[1]) || (val == num[2]) || (val == num[3]) || (val == num[4]) || (val == num[5])) {
                            document.getElementById("21").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("21").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart3").innerHTML = " "
                                flag=0
                                checkflag=0

                            }
                        }
                    }
                    fun(data1[0]);}
                    else{
                        document.getElementById("21").innerHTML="";
                        document.getElementById("21").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#22").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data2 = document.getElementById("22").innerHTML;
                    document.getElementById("22").contentEditable = "false";
                    // var check_enter = num.includes(Number(data2[0]))
                    if(data2[0]!=" "){
                    function fun(val) {
                        if (val == num[1]) {
                            document.getElementById("22").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1
                        }
                        else if ((val == num[0]) || (val == num[2]) || (val == num[3]) || (val == num[4]) || (val == num[5])) {
                            document.getElementById("22").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("22").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart3").innerHTML = " "
                                flag=0
                                checkflag=0
                            }
                        }
                    }
                    fun(data2[0]);}
                    else{
                        document.getElementById("22").innerHTML="";
                        document.getElementById("22").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#23").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data3 = document.getElementById("23").innerHTML;
                    document.getElementById("23").contentEditable = "false";
                    // var check_enter = num.includes(Number(data3[0]))
                    if(data3[0]!=" "){
                    function fun(val) {
                        if (val == num[2]) {
                            document.getElementById("23").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1;
                        }
                        else if ((val == num[0]) || (val == num[1]) || (val == num[3]) || (val == num[4]) || (val == num[5])) {
                            document.getElementById("23").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("23").style.backgroundColor = "red"
                            flag += 1;

                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart3").innerHTML = " "
                                flag=0
                                checkflag=0
                            }
                        }
                    }
                    fun(data3[0])}
                    else{
                        document.getElementById("23").innerHTML="";
                        document.getElementById("23").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#24").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data4 = document.getElementById("24").innerHTML;
                    document.getElementById("24").contentEditable = "false";
                    // var check_enter = num.includes(Number(data4[0]))
                    if(data4[0]!=" "){
                    function fun(val) {
                        if (val == num[3]) {
                            document.getElementById("24").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1;
                        }
                        else if ((val == num[0]) || (val == num[1]) || (val == num[2]) || (val == num[4]) || (val == num[5])) {
                            document.getElementById("24").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("24").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart3").innerHTML = " "
                                flag=0
                                checkflag=0
                            }
                        }
                    }
                    fun(data4[0])}
                    else{
                        document.getElementById("24").innerHTML="";
                        document.getElementById("24").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#25").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data5 = document.getElementById("25").innerHTML;
                    document.getElementById("25").contentEditable = "false";
                    // var check_enter = num.includes(Number(data5[0]))
                    if(data5[0]!=" "){
                    function fun(val) {
                        if (val == num[4]) {
                            document.getElementById("25").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1
                        }
                        else if ((val == num[0]) || (val == num[1]) || (val == num[2]) || (val == num[3]) || (val == num[5])) {
                            document.getElementById("25").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("25").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart3").innerHTML = " "
                                flag=0
                                checkflag=0
                            }
                        }
                    }
                    fun(data5[0])}
                    else{
                        document.getElementById("25").innerHTML="";
                        document.getElementById("25").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#26").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data6 = document.getElementById("26").innerHTML;
                    document.getElementById("26").contentEditable = "false";
                    // var check_enter = num.includes(Number(data6[0]))
                    if(data6[0]!=" "){
                    function fun(val) {
                        if (val == num[5]) {
                            document.getElementById("26").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1;
                        }
                        else if ((val == num[0]) || (val == num[1]) || (val == num[2]) || (val == num[3]) || (val == num[4])) {
                            document.getElementById("26").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("26").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                                flag=0
                                checkflag=0
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart3").innerHTML = " "
                                flag=0
                                checkflag=0
                                // console.log(document.getElementById("row2").innerHTML)
                            }
                        }
                    }
                    fun(data6[0])
                    }
                    else{
                        document.getElementById("26").innerHTML="";
                        document.getElementById("26").contentEditable = "true";
                    }
                }
            });
        });
         // 4TH RRRRRRRRRRROOOOOOOOOOOOOWWWWWWWWW
         $(document).ready(function () {
            $("#31").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data1 = document.getElementById("31").innerHTML;
                    document.getElementById("31").contentEditable = "false";
                    // var check_enter = num.includes(Number(data1[0]))
                    if(data1[0]!=" "){
                    function fun(val) {
                        if (val == num[0]) {
                            document.getElementById("31").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1;
                        }
                        else if ((val == num[1]) || (val == num[2]) || (val == num[3]) || (val == num[4]) || (val == num[5])) {
                            document.getElementById("31").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("31").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart1").innerHTML = " "
                                flag=0
                                checkflag=0
                                document.getElementById("headd").innerHTML = "BETTER LUCK NEXT TIME!"
                            setTimeout(function(){
                            location.reload() }, 1000); 

                            }
                        }
                    }
                    fun(data1[0]);}
                    else{
                        document.getElementById("31").innerHTML="";
                        document.getElementById("31").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#32").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data2 = document.getElementById("32").innerHTML;
                    document.getElementById("32").contentEditable = "false";
                    // var check_enter = num.includes(Number(data2[0]))
                    if(data2[0]!=" "){
                    function fun(val) {
                        if (val == num[1]) {
                            document.getElementById("32").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1
                        }
                        else if ((val == num[0]) || (val == num[2]) || (val == num[3]) || (val == num[4]) || (val == num[5])) {
                            document.getElementById("32").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("32").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart1").innerHTML = " "
                                flag=0
                                checkflag=0
                                document.getElementById("headd").innerHTML = "BETTER LUCK NEXT TIME!"
                            setTimeout(function(){
                            location.reload() }, 1000); 
                            }
                        }
                    }
                    fun(data2[0]);}
                    else{
                        document.getElementById("32").innerHTML="";
                        document.getElementById("32").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#33").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data3 = document.getElementById("33").innerHTML;
                    document.getElementById("33").contentEditable = "false";
                    // var check_enter = num.includes(Number(data3[0]))
                    if(data3[0]!=" "){
                    function fun(val) {
                        if (val == num[2]) {
                            document.getElementById("33").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1;
                        }
                        else if ((val == num[0]) || (val == num[1]) || (val == num[3]) || (val == num[4]) || (val == num[5])) {
                            document.getElementById("33").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("33").style.backgroundColor = "red"
                            flag += 1;

                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart1").innerHTML = " "
                                flag=0
                                checkflag=0
                                document.getElementById("headd").innerHTML = "BETTER LUCK NEXT TIME!"
                            setTimeout(function(){
                            location.reload() }, 1000); 
                            }
                        }
                    }
                    fun(data3[0])}
                    else{
                        document.getElementById("33").innerHTML="";
                        document.getElementById("33").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#34").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data4 = document.getElementById("34").innerHTML;
                    document.getElementById("34").contentEditable = "false";
                    // var check_enter = num.includes(Number(data4[0]))
                    if(data4[0]!=" "){
                    function fun(val) {
                        if (val == num[3]) {
                            document.getElementById("34").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1;
                        }
                        else if ((val == num[0]) || (val == num[1]) || (val == num[2]) || (val == num[4]) || (val == num[5])) {
                            document.getElementById("34").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("34").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart1").innerHTML = " "
                                flag=0
                                checkflag=0
                                document.getElementById("headd").innerHTML = "BETTER LUCK NEXT TIME!"
                            setTimeout(function(){
                            location.reload() }, 1000); 
                            }
                        }
                    }
                    fun(data4[0])}
                    else{
                        document.getElementById("34").innerHTML="";
                        document.getElementById("34").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#35").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data5 = document.getElementById("35").innerHTML;
                    document.getElementById("35").contentEditable = "false";
                    // var check_enter = num.includes(Number(data5[0]))
                    if(data5[0]!=" "){
                    function fun(val) {
                        if (val == num[4]) {
                            document.getElementById("35").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1
                        }
                        else if ((val == num[0]) || (val == num[1]) || (val == num[2]) || (val == num[3]) || (val == num[5])) {
                            document.getElementById("35").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("35").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart1").innerHTML = " "
                                flag=0
                                checkflag=0
                                document.getElementById("headd").innerHTML = "BETTER LUCK NEXT TIME!"
                            setTimeout(function(){
                            location.reload() }, 1000); 
                            }
                        }
                    }
                    fun(data5[0])}
                    else{
                        document.getElementById("35").innerHTML="";
                        document.getElementById("35").contentEditable = "true";
                    }
                }
            });
        });
        $(document).ready(function () {
            $("#36").keyup(function (event) {
                if (event.keyCode === 13) {
                    var data6 = document.getElementById("36").innerHTML;
                    document.getElementById("36").contentEditable = "false";
                    // var check_enter = num.includes(Number(data6[0]))
                    if(data6[0]!=" "){
                    function fun(val) {
                        if (val == num[5]) {
                            document.getElementById("36").style.backgroundColor = "green"
                            flag += 1;
                            checkflag += 1;
                        }
                        else if ((val == num[0]) || (val == num[1]) || (val == num[2]) || (val == num[3]) || (val == num[4])) {
                            document.getElementById("36").style.backgroundColor = "orange"
                            flag += 1;
                        }
                        else {
                            document.getElementById("36").style.backgroundColor = "red"
                            flag += 1;
                        }
                        if (flag == 6) {
                            if (checkflag == 6) {
                                document.getElementById("headd").innerHTML = "WINNER WINNER CHICKEN DINNER!"
                                flag=0
                                checkflag=0
                            }
                            else {
                                // var a = "<div class='col-sm-12 d-flex justify-content-around'><div contenteditable='true' class='11' id='11' style='color: white; height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='12' id='12' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='13' id='13' style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='14' id='14'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='15' id='15'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div><div contentEditable='true' class='16' id='16'style='color: white;height:70%; width:10%;background-color: black; border-radius:50%; padding: 15px;'></div></div>"
                                // document.getElementById("row2").innerHTML = a
                                document.getElementById("heart1").innerHTML = " "
                                flag=0
                                checkflag=0
                                document.getElementById("headd").innerHTML = "BETTER LUCK NEXT TIME!"
                            setTimeout(function(){
                            location.reload() }, 1000); 
                                // console.log(document.getElementById("row2").innerHTML)
                            }
                        }
                    }
                    fun(data6[0])}
                    else{
                        document.getElementById("36").innerHTML="";
                        document.getElementById("36").contentEditable = "true";
                    }
                }
            });
        });
    