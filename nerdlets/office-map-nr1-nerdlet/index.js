import React from 'react'

import { Spacing, Grid, GridItem, TextField, Tabs, TabsItem } from 'nr1'

import bdu1 from './maps/bdu-1.png'
import bdu2 from './maps/bdu-2.png'

const maps = [
  {
    id: 'bdu-1',
    name: 'Boulder 1',
    image: bdu1
  }, {
    id: 'bdu-2',
    name: 'Boulder 2',
    image: bdu2
  }
]
// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class OfficeMapNr1NerdletNerdlet extends React.Component {
  render () {
    return <React.Fragment>
      <Spacing type={[Spacing.TYPE.NONE, Spacing.TYPE.LARGE, Spacing.TYPE.MEDIUM]}>
        <TextField
          type="search"
          className="globalSearch"
          placeholder='Search for a room by name, type, city, etc'
        />
      </Spacing>
      <Grid>
        <GridItem columnSpan={2}>
          <table>
            <tr>
              <th>Name</th>
            </tr>
            <tr>
              <td>Room 1</td>
            </tr>
            <tr>
              <td>Room 2</td>
            </tr>
          </table>
        </GridItem>
        <GridItem columnSpan={10}>
          <Tabs>
            {maps.map(({ id, name, image }) => (
              <TabsItem key={id} value={id} label={name}>
                <img src={image} alt={name} />
              </TabsItem>
            ))}
          </Tabs>
        </GridItem>
      </Grid>
    </React.Fragment>
  }
}
