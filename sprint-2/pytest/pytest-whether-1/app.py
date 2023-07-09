from flask import Flask, jsonify

weather_data = {
    'San Francisco': {'temperature': 14, 'weather': 'Cloudy'},
    'New York': {'temperature': 20, 'weather': 'Sunny'},
    'Los Angeles': {'temperature': 24, 'weather': 'Sunny'},
    'Seattle': {'temperature': 10, 'weather': 'Rainy'},
    'Austin': {'temperature': 32, 'weather': 'Hot'},
}

def create_app():
    app = Flask(__name__)

    @app.route('/weather/<string:city>', methods=['GET'])
    def get_weather(city):
        if city in weather_data:
            return jsonify({'city': city, **weather_data[city]})
        else:
            return jsonify({'error': 'City not found'}), 404

    return app

if __name__ == '__main__':
    app = create_app()
    app.run()
