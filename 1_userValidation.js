export const userValidation = (str) => {
    
    if(
        str.length >= 4 && str.length <= 25 && //1 4ten büyük veya eşit, 25ten küçük veya eşit.
        (/[a-zA-z]/).test(str.slice(0,1)) && //2  alfabeden bir harf ile başlasın.
        (/^\w+$/).test(str) && //3 sayı numara veya alt çizgiden oluşabilir.
        (/[a-zA-Z0-9]/).test(str.slice(-1)) //4 str.charAt(str.length -1) alt çizgi ile yani sembol ile bitmesin.
    ) {
        return true
    } else {
        return false
    }
    console.log(str)

/* Rules
1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.
 */
