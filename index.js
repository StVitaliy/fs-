const fs = require("fs");



fs.writeFileSync("content.txt", "записываем синхронно")

console.log("Синхронное чтение файла")
let fileContent = fs.readFileSync("content.txt", "utf8");
console.log(fileContent);

fs.writeFile("content.txt", "записываем  текст асинхронно", function(error){
 
    if(error) throw error; // если возникла ошибка
    console.log("Асинхронная запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("content.txt", "utf8");
    console.log(data);  // выводим считанные данные
});

fs.readFile("content.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
                console.log(data);  // выводим считанные данные
});


fs.appendFileSync("content.txt",'\n добавляем с новой строки синхронно')


fs.appendFile("content.txt", "\n добавляем с новой строки асинхронно", function(error){
    if(error) throw error; // если возникла ошибка
                 
    console.log("Запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("content.txt", "utf8");
    console.log(data);  // выводим считанные данные
});