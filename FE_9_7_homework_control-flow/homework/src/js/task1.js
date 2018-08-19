let login = prompt('Write a login');

if (login === null || login === ''){
    alert('Canseled');
}else if(login.length < 4){
    alert('I don\'t know any users having name length less than 4 symbols');
}else if(login === 'User'){
    let password = prompt('Write password');
    if (password=== null || password === ''){
        alert('Canseled');   
    }else if(password !== 'SuperUser'){
        alert('Wrong password');  
    }else{
        let currentDate = new Date();
        let hour = currentDate.getHours();
        let minute = currentDate.getMinutes();
        let morning = 6;
        let evening = 20;
        if(hour > morning && hour < evening){
            alert('Good day! ' + hour + ':' + minute);
        }else{
            alert('Good  evening! ' + hour + ':' + minute);
        }
    }
}else{
    alert('I don\'t know you')
}