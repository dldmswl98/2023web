var id, pw;

id = prompt('아이디 입력');
if(id=='admin') {
    pw = prompt('비밀번호 입력');
    if(pw == '123456'){
        location.href = "login.html"
    }
    else{
        location.href = "error.html"
    }
}
else{
    location.href="error.html"
}