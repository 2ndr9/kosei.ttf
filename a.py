import base64
# これでファイルを文字列で読み取れるのでテキストに書き込むなり標準入力に出力するなりする。


def convert_file_to_b64_string(file_path):
    """ファイルをbase64にエンコードする"""
    with open('a.png', "rb") as f:
        print(base64.b64encode(f.read()).decode("UTF-8"))


if __name__ == "__main__":
    convert_file_to_b64_string('a')
