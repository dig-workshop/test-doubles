# Test Doubles ワークショップについて
ミサイル発射システムをコードで作成しながら test doubles について理解を深める会です。

このワークショップで最終的に作成するのは、  
ミサイル発射ボタンを押したらパスワードや天候を確認してミサイルを発射するシステムです。  
下記の仕様に沿ってシステムを作成していきましょう。

## 作成したいミサイル発射システムの仕様  
### ①ミサイルが発射できるミサイル発射装置を作りたい（ダミー）  
ここで確認したいのはミサイル発射装置が発射指示をし、  
ミサイルが発射できる状態になっていること（ダミーはテストの状況を作り出す役割）なので、  
発射指示を受けたら、本物のミサイルを発射せずエラーを投げるダミーミサイルを使用する。  

### ②発射指示があったらパスワード正誤に応じたロジックが呼ばれているか確認したい（スパイ）  
パスワードが正しければミサイル発射ロジックが呼ばれていること。  
パスワードが正しくなければ自爆ロジックが呼ばれていること。  

### ③楽にテストをしたい（モック）  
開発者は同じテストを何度も書きたくないので、スパイの中に自己検証機能を作って楽をする。  
(ミサイル発射システムはシンプルな機能なのであまりメリットを感じにくいかもしれません)

### ④発射指示があったら、その結果を確認したい（スタブ）  
発射ロジックが動いた場合、"ミサイルを発射しました"という結果を確認できる。  
自爆ロジックが動いた場合、"自爆しました"という結果を確認できる。  

### ⑤ミサイル発射ロジックが動いたら、天気が良ければミサイルを発射する（フェイク）  
ミサイル発射ロジックでは天気APIで天気を確認してから発射するが、  
天気APIはまだ未実装（という状況とする）なので天気APIに相当する偽の結果を使ってテストを実施する。  

発射ロジックが動いた場合、天気が雨以外なら"ミサイルを発射しました"という結果を確認できる。  
発射ロジックが動いた場合、天気が雨なら"ミサイルを発射出来ませんでした"という結果を確認できる。  

（ミサイル発射システムの仕様が気になるかもしれませんが、test doubles を説明するためのものです。）  

## これからやること
上記のミサイル発射システムには仕様がいくつかあり、  
１つずつ確実に仕様確認をするとなると、開発過程で何発も実弾を発射しなければ開発ができない。  
開発のために何発も実弾を発射してたら勿体無いし、アメリカとかから怒られちゃう。
そこで Test Doubles が登場！  
実弾に代わって Test Doubles を使用することで実弾を発射せずに、  
機能一つずつ確実に仕様確認（テスト）ができる。  

Test Doubles を用いてミサイル発射システムのコードを書くことで、  
dummy, stub, spy, mock, fake それぞれの役割について理解していこう！  

※本ワークショップはミサイルの発射を推奨するものではありません。
***


