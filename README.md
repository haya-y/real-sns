# Real SNS

Facebook や Twitter などを模した SNS のポートフォリオ  
以下の Udemy の教材を参考に、実装手法をアレンジしつつ新機能も追加

(Udemy の参考 URL)  
[https://www.udemy.com/course/fullstack-mern-project-course/](https://www.udemy.com/course/fullstack-mern-project-course/)

## 技術スタック

MERN (MongoDB, Express.js, React, Node.js)でフルスタック実装

フロントエンドは React・TypeScript で実装し、CSS は BEM 記法に基づいて Styled Component を使用

バックエンドは Node.js・Express.js で実装

データベースは MongoDB を使用し、mongoose を用いて Node.js からデータを操作

## 本番環境の URL

本番環境でポートフォリオを参照するには、以下の URL へアクセス  
**注意点:** 現状ではセキュリティ対策が十分でないため、新規登録では必ずダミーのメールアドレス・パスワードを入力してください。  
[https://real-sns-client.vercel.app/](https://real-sns-client.vercel.app/)

## 各機能について

### 実装済みの機能

- ユーザー新規登録

- ログイン認証

- ログアウト機能

- サイドメニューから「ホーム」・「プロフィール」の表示

- テキストの投稿

  - 「写真」をクリックすることで画像ファイルを選択することは可能だが、  
    現状ではローカルサーバーにファイルを保存する仕様であるため、本番環境では保存不可

- 各投稿の「いいね」のクリック・保存処理

### 直近の追加・修正予定

- 各画像をデータベースへ保存し、本番環境に対応

  - 現状ではローカル環境のみで API が対応

- ユーザー検索機能の実装

- 他のユーザーのフォロー、アンフォロー機能の実装

  - 現状では API のみ実装済み

- ホーム画面にフォロー済みの友達の表示

  - 現状ではダミーを表示
