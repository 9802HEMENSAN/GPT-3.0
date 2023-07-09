import json

def test_add_weather(client: FlaskClient):
    new_weather = {'city': 'Chicago', 'temperature': 18, 'weather': 'Cloudy'}
    response = client.post('/weather', json=new_weather)
    data = response.get_json()

    assert response.status_code == 201
    assert data['city'] == 'Chicago'
    assert 'temperature' in data
    assert 'weather' in data

def test_update_weather(client: FlaskClient):
    updated_weather = {'temperature': 30}
    response = client.put('/weather/New York', json=updated_weather)
    data = response.get_json()

    assert response.status_code == 200
    assert data['city'] == 'New York'
    assert data['temperature'] == 30

def test_delete_weather(client: FlaskClient):
    response = client.delete('/weather/Los Angeles')

    assert response.status_code == 204
