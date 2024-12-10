const { Console } = require('console')
const e = require('express')
const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World')
})



//カテゴリー入力
app.get('/category/:selectedCategory', (req, res) => {
    const { selectedCategory } = req.params
    console.log(selectedCategory)

    if (selectedCategory == "coffee") {
        res.json({ "drinks": "アイスコーヒー, カフェラテ, カフェモカ</h5>" });
    } else if (selectedCategory == "tea") {
        res.json({ "drinks": "麦茶, お茶, ウーロン茶" });
    } else if (selectedCategory == "softdrink") {
        res.json({ "drinks": "オレンジジュース, コーラ, メロンソーダ" });
    } else {
        res.json({ "drinks": "None of the above" });
    }
    console.log(selectedCategory);
    res.send(`
        <!DOCTYPE html>

         <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
         <head>
                  <meta charset="utf-8" />
                     <title>category</title>
          </head>
          <body>
                      <h1>CAFE YY</h1>


                 <h3>選択したカテゴリー: ${selectedCategory}</h3>
                 console.log(selectedCategory);

              <p>${drinks}</p>
              

        

          <p>飲み物を入力してください。</p>
         <input id="name" type="text">
         <button onclick="getName()">入力</button>


           <script>
                function getName() {
                    const name = document.getElementById('name').value;
                    console.log("Entered drink:", name);
                }
            </script>


          </body>
           </html>
        `)
});



//商品入力

//注文の確認

app.listen(3000)