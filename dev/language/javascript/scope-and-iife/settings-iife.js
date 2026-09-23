
const settingsModule = (function (initialTheme){

    let theme = initialTheme;

    function getTheme(){
        return theme;
    }

    function setTheme(newTheme){
        if(newTheme!=='light' && newTheme!=='dark'){
            console.log('Invalid theme - Theme must be either \'dark\' or \'light\'');
            return;
        }
        theme = newTheme;
    }

    return {
        getTheme, setTheme
    }

})('light');

console.log(settingsModule.getTheme());
settingsModule.setTheme('blue');
settingsModule.setTheme('dark');
console.log(settingsModule.getTheme());
console.log(settingsModule.theme);
console.log(settingsModule.initialTheme);