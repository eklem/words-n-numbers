var wnn;(()=>{var e={};(()=>{var r=e;const o="\\p{Alpha}+",s={regex:o,toLowercase:!1};r.extract=function(e,r){!0===(r={...s,...r}).toLowercase&&(e=e.toLowerCase());const o=new RegExp(r.regex,"giu");let a=[];return a=e.match(o),a},r.words=o,r.numbers="\\p{Number}+",r.emojis="\\p{Emoji_Presentation}+",r.wordsNumbers="\\p{Alpha}+|\\p{Number}+",r.wordsEmojis="\\p{Alpha}+|\\p{Emoji_Presentation}+",r.numbersEmojis="\\p{Number}+|\\p{Emoji_Presentation}+",r.wordsNumbersEmojis="\\p{Alpha}+|\\p{Number}+|\\p{Emoji_Presentation}+",r.tags="\\B[#][\\p{Alpha}|\\p{Number}]+",r.usernames="\\B[@][\\p{Alpha}|\\p{Number}]+",r.email="[0-9a-zA-Z.]+@[0-9a-zA-Z-.]+"})(),wnn=e})();