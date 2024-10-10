# ubuntuベースイメージ
FROM ubuntu:22.04

# 作業ディレクトリを設定する
WORKDIR /Abeshell-kai
#COPY . /Abeshell-kai

# 必要なツール一式をインストールする
#RUN apt install update -y && apt install nodejs npm

# npmの依存関係をインストール&実行
#WORKDIR /Abeshell-kai/frontend
#RUN npm install
#RUN npm start
#WORKDIR /Abeshell-kai/backend
#RUN php -S localhost:3001



# ユーザを作成
#RUN groupadd -r 