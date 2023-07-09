from flask import Flask
from flask.testing import FlaskClient
import pytest

from app import create_app

@pytest.fixture
def app() -> Flask:
    app = create_app()
    return app

@pytest.fixture
def client(app: Flask) -> FlaskClient:
    return app.test_client()

def test_get_weather_for_valid_city(client: FlaskClient):
    response = client.get('/weather/San Francisco')
    data = response.get_json()

    assert response.status_code == 200
    assert data['city'] == 'San Francisco'
    assert 'temperature' in data
    assert 'weather' in data

def test_get_weather_for_invalid_city(client: FlaskClient):
    response = client.get('/weather/InvalidCity')

    assert response.status_code == 404
