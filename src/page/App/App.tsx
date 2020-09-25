// Calliope, a media contest management and submission website
// Copyright © 2010 Daric "Jingoro" Jackson
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

import React from 'react';
import { Layout } from 'antd';

import './App.css';

export function App () {
  return (
    <Layout>
      <Layout.Header>
        Calliope - An AV media contest management and submission website.
      </Layout.Header>
      <Layout.Content>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Layout.Content>
    </Layout>
  );
}

export default App;
