import mysql from 'mysql2/promise';

let connection = null;
export function createConnection() {
	if (!connection) {
		connection = mysql.createConnection({
			host: 'htl-projekt.com',
			user: 'ergitbeqiri',
			port: 3306,
			password: '!Insy_2024$',
			database: '2024_4bw_ergitbeqiri_event_app'
		});
	}
	return connection;
}
