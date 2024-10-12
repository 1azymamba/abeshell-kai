# ubuntuベースイメージ
FROM ubuntu:22.04

# 環境変数を設定して対話プロンプトを無効化
ENV DEBIAN_FRONTEND=noninteractive

# 作業ディレクトリを設定する
#WORKDIR /Abeshell-kai
COPY . /Abeshell-kai

# 必要なツール一式をインストールする
RUN apt update -y && apt install nodejs npm php -y

# npmの依存関係をインストール
WORKDIR /Abeshell-kai/abeshell-kai/frontend
RUN npm install
WORKDIR /Abeshell-kai/abeshell-kai/backend

# 実行
CMD ["sh", "-c", "npm start --prefix /Abeshell-kai/abeshell-kai/frontend & php -S 0.0.0.0:3001 -t /Abeshell-kai/abeshell-kai/backend"]

# ユーザを作成
#RUN groupadd -r 