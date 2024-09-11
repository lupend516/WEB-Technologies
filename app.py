from flask import Flask, request, render_template, redirect, url_for
import psycopg2

app = Flask(__name__)

# Функция для подключения к базе данных
def connect_db():
    conn = psycopg2.connect(
        dbname="students",
        user="postgres",
        password="Asan-bina2004",  # Замените 'your_password' на ваш реальный пароль
        host="localhost",
        port="1996"
    )
    return conn

# Отображение HTML формы
@app.route('/')
def form():
    return render_template('form.html')

# Обработка данных формы
@app.route('/submit', methods=['POST'])
def submit():
    try:
        fname = request.form['fname']
        lname = request.form['lname']
        group = request.form['segroup']
        weekday = request.form['weekday']
        section = request.form['section']
        time = request.form['time']
        message = request.form.get('message', '')

        # Вставка данных в базу данных
        conn = connect_db()
        cur = conn.cursor()
        cur.execute("""
            INSERT INTO registrations (fname, lname, group_name, weekday, section, time_slot, message)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        """, (fname, lname, group, weekday, section, time, message))
        conn.commit()
        cur.close()
        conn.close()

        return redirect(url_for('success'))
    except Exception as e:
        print(f"An error occurred: {e}")
        return "An error occurred during registration."

@app.route('/success')
def success():
    return "Registration successful!"

if __name__ == '__main__':
    app.run(debug=True)
