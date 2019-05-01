import Client, { MariaClient } from 'mariasql';

const client = new Client();

const fn = (mariaClient: MariaClient) => {
  mariaClient.connect({ host: '', user: '', password: '' });
};

fn(client);
