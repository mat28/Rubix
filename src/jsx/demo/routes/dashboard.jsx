import classNames from 'classnames';
import { Link } from 'react-router';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';



class MainChart extends React.Component {
  componentDidMount() {
    var chart = new Rubix('#main-chart', {
      width: '100%',
      height: 300,
      title: 'Chiffre d\'Affaire',
      titleColor: '#2EB398',
      subtitle: 'Période: 2015 and 2016',
      subtitleColor: '#2EB398',
      axis: {
        x: {
          type: 'datetime',
          tickCount: 3,
          labelColor: '#2EB398'
        },
        y: {
          type: 'linear',
          tickFormat: 'd',
          tickCount: 2,
          labelColor: '#2EB398'
        }
      },
      margin: {
        top: 25,
        left: 50,
        right: 25
      },
      interpolate: 'linear'
    });

    var total_users = chart.area_series({
      name : 'Chiffre d\'affaire total',
      color: '#2EB398',
      marker: 'circle',
      fillopacity: 0.7,
      noshadow: true
    });

    chart.extent = [1420130537, 1464021213];

    var t = 1420130537;
    var v = [5, 10, 2, 20, 40, 35, 30, 20, 25, 10, 20, 10, 20, 15, 25, 20, 30, 25, 30, 25, 30, 35, 40, 20, 15, 20, 10, 25, 15, 20, 10, 25, 30, 30, 25, 20, 10, 50, 60, 30];

    var getValue = function() {
      var val = v.shift();
      v.push(val);
      return val;
    };

    var data = d3.range(40).map(function() {
      return {
        x: (t+=(1464018137)),
        y: getValue()
      };
    });

    total_users.addData(data);
  }
  render() {
    return (
      <PanelBody style={{paddingTop: 5}}>
        <div id='main-chart'></div>
      </PanelBody>
    );
  }
}

class NotePanel extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} style={{padding: 50, paddingTop: 12.5, paddingBottom: 25}} className='text-center'>
            <h3 className='fg-black50'>NOTE</h3>
            <hr/>
            <p>Ma première note :)</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

class RevenuePanel extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} className='text-center'>
            <br/>
            <div>
              <h4>Revenu Brute</h4>
              <h2 className='fg-green visible-xs visible-md visible-lg'>9,362.74</h2>
              <h4 className='fg-green visible-sm'>9,362.74</h4>
            </div>
            <hr className='border-green'/>
            <div>
              <h4>Revenu Net</h4>
              <h2 className='fg-green visible-xs visible-md visible-lg'>6,734.89</h2>
              <h4 className='fg-green visible-sm'>6,734.89</h4>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

class LoadPanel extends React.Component {
  render() {
    return (
      <Row className='bg-green fg-lightgreen'>
        <Col xs={6}>
          <h3>Objectif journalierx</h3>
        </Col>
        <Col xs={6} className='text-right'>
          <h2 className='fg-lightgreen'>67%</h2>
        </Col>
      </Row>
    );
  }
}

class AlertChart extends React.Component {
  componentDidMount() {
    var chart = new Rubix('#alert-chart', {
      width: '100%',
      height: 200,
      hideLegend: true,
      hideAxisAndGrid: true,
      focusLineColor: '#fff',
      theme_style: 'dark',
      axis: {
        x: {
          type: 'linear'
        },
        y: {
          type: 'linear',
          tickFormat: 'd'
        }
      },
      tooltip: {
        color: '#fff',
        format: {
          x: 'd',
          y: 'd'
        }
      },
      margin: {
        left: 25,
        top: 50,
        right: 25,
        bottom: 25
      }
    });

    var alerts = chart.column_series({
      name: 'Load',
      color: '#7CD5BA',
      nostroke: true
    });

    alerts.addData([
      {x: 0, y: 30},
      {x: 1, y: 40},
      {x: 2, y: 15},
      {x: 3, y: 30},
      {x: 4, y: 35},
      {x: 5, y: 70},
      {x: 6, y: 50},
      {x: 7, y: 60},
      {x: 8, y: 35},
      {x: 9, y: 30},
      {x: 10, y: 40},
      {x: 11, y: 30},
      {x: 12, y: 50},
      {x: 13, y: 35}
    ]);
  }
  render() {
    return (
      <Row>
        <Col xs={12}>
          <div id='alert-chart' className='rubix-chart'></div>
        </Col>
      </Row>
    );
  }
}

class RadarChartPanel extends React.Component {
  componentDidMount() {
    var data = {
      labels: ['Japan', 'France', 'USA', 'Russia', 'China', 'Dubai', 'India'],
      datasets: [{
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      }, {
        label: 'My Second dataset',
        fillColor: 'rgba(234, 120, 130, 0.5)',
        strokeColor: 'rgba(234, 120, 130, 1)',
        pointColor: 'rgba(234, 120, 130, 1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [28, 48, 40, 19, 96, 27, 100]
      }]
    };

    var ctx = document.getElementById('chartjs-1').getContext('2d');
    new Chart(ctx).Radar(data, {
      responsive: false,
      maintainAspectRatio: true
    });

    $('.line-EA7882').sparkline('html', { type: 'line', height: 25, lineColor: '#EA7882', fillColor: 'rgba(234, 120, 130, 0.5)' });
    $('.line-2EB398').sparkline('html', { type: 'line', height: 25, lineColor: '#2EB398', fillColor: 'rgba(46, 179, 152, 0.5)' });
    $('.line-79B0EC').sparkline('html', { type: 'line', height: 25, lineColor: '#79B0EC', fillColor: 'rgba(121, 176, 236, 0.5)' });
    $('.line-FFC497').sparkline('html', { type: 'line', height: 25, lineColor: '#FFC497', fillColor: 'rgba(255, 196, 151, 0.5)' });
  }
  render() {
    return (
      <div>
        <canvas id='chartjs-1' height='250' width='250'></canvas>
        <Table striped collapsed>
          <tbody>
            <tr>
              <td className='text-left'>Bounce Rate:</td>
              <td className='text-center'>
                <BLabel className='bg-red fg-white'>+46%</BLabel>
              </td>
              <td className='text-right'>
                <div className='line-EA7882' sparkBarColor='#EA7882'>2,3,7,5,4,4,3,2,3,4,3,2,4,3,4,3,2,5</div>
              </td>
            </tr>
            <tr>
              <td className='text-left'>New visits:</td>
              <td className='text-center'>
                <BLabel className='bg-darkgreen45 fg-white'>+23%</BLabel>
              </td>
              <td className='text-right'>
                <div className='line-2EB398' sparkBarColor='#2EB398'>7,7,7,7,7,7,6,7,4,7,7,7,7,5,7,7,7,9</div>
              </td>
            </tr>
            <tr>
              <td className='text-left'>Transactions:</td>
              <td className='text-center'>
                <BLabel className='bg-blue fg-white'>43,000 (+50%)</BLabel>
              </td>
              <td className='text-right'>
                <div className='line-79B0EC' sparkBarColor='#79B0EC'>4,6,7,7,4,3,2,1,4,9,3,2,3,5,2,4,3,1</div>
              </td>
            </tr>
            <tr>
              <td className='text-left'>Conversions:</td>
              <td className='text-center'>
                <BLabel className='bg-orange fg-white'>2000 (+75%)</BLabel>
              </td>
              <td className='text-right'>
                <div className='line-FFC497' sparkBarColor='#FFC497'>3,2,4,6,7,4,5,7,4,3,2,1,4,6,7,8,2,8</div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

class OrdersComparisonPanel extends React.Component {
  componentDidMount() {
    var chart = new Rubix('#orderscomparision', {
      height: 225,
      noSort: true,
      hideYAxis: true,
      title: 'Vente de la semaine',
      subtitle: 'Smartphone Premium',
      hideXAxisTickLines: true,
      hideYAxisTickLines: true,
      hideLegend: true,
      gridColor: '#EBEBEB',
      tickColor: '#EBA068',
      titleColor: '#EBA068',
      subtitleColor: '#EBA068',
      axis: {
        x: {
          type: 'ordinal'
        },
        y:  {
          type: 'linear',
          tickFormat: 'd'
        }
      },
      margin: {
        top: 50
      },
      tooltip: {
        color: '#EBA068',
        format: {
          y: '.0f'
        }
      },
      show_markers: false
    });

    var series1 = chart.column_series({
      name: 'Iphone 6',
      color: '#EBA068',
      marker: 'square',
      fillopacity: 1
    });

    series1.addData([
      {x: 'Dim', y: 1},
      {x: 'Lun', y: 2},
      {x: 'Mar', y: 3},
      {x: 'Mer', y: 2},
      {x: 'Jeu', y: 2},
      {x: 'Ven', y: 3},
      {x: 'Sam', y: 1}
    ]);


    var series2 = chart.column_series({
      name: 'Samsung Galaxy S7 Edge',
      color: '#FFD3B1',
      fillopacity: 1
    });

    series2.addData([
      {x: 'Dim', y: 3},
      {x: 'Lun', y: 4},
      {x: 'Mar', y: 6},
      {x: 'Mer', y: 5},
      {x: 'Jeu', y: 5.5},
      {x: 'Ven', y: 3},
      {x: 'Sam', y: 2}
    ]);

    $('.compositebar1').sparkline('html', { type: 'bar', barColor: '#ffffff', height: 25 });
  }
  render() {
    return (
      <div>
        <div id='orderscomparision'></div>
        <Grid style={{margin: -25, marginTop: 0}}>
          <Row className='bg-lightorange fg-darkorange text-center'>
            <Col xs={12} collapseLeft collapseRight style={{padding: 25, paddingTop: 0}}>
              <Table alignMiddle collapsed>
                <tbody>
                  <tr>
                    <td style={{width: '33%'}}>
                      <h6>Total Orders</h6>
                      <h4>8,584</h4>
                    </td>
                    <td style={{width: '33%'}}>
                      <div style={{position: 'relative'}}>
                        <div className='compositebar1'>4,6,7,7,4,3,2,1,4,9,3,2,3,5,2,4,3,1</div>
                      </div>
                    </td>
                    <td style={{width: '33%'}}>
                      <h4>+ 12%</h4>
                    </td>
                  </tr>
                  <tr>
                    <td style={{width: '33%'}}>
                      <h6>Total Orders</h6>
                      <h4>2,312</h4>
                    </td>
                    <td style={{width: '33%'}}>
                      <div style={{position: 'relative'}}>
                        <div className='compositebar1'>3,2,4,6,3,6,7,3,2,1,5,7,8,9,3,2,6,7</div>
                      </div>
                    </td>
                    <td style={{width: '33%'}}>
                      <h4>0%</h4>
                    </td>
                  </tr>
                  <tr>
                    <td style={{width: '33%'}}>
                      <h6>Total Orders</h6>
                      <h4>4,932</h4>
                    </td>
                    <td style={{width: '33%'}}>
                      <div style={{position: 'relative'}}>
                        <div className='compositebar1'>2,3,2,4,2,6,4,2,3,5,2,5,2,1,5,2,5,2</div>
                      </div>
                    </td>
                    <td style={{width: '33%'}}>
                      <h4>- 81%</h4>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


class WeatherPanel extends React.Component {
  componentDidMount() {
    $(this.refs.datetimepicker1.getDOMNode()).datetimepicker({
      widgetParent: '#datetimepicker1-parent'
    }).hide();
  }
  render() {
    return (
      <PanelContainer controlStyles='bg-brown50 fg-white'>
        <Panel horizontal className='force-collapse'>
          <PanelBody className='panel-sm-7' style={{padding: 0}}>
            <InputGroup className='date' ref='datetimepicker1'>
              <Input type='text' className='form-control' />
              <InputGroupAddon>
                <Icon glyph='icon-fontello-calendar' />
              </InputGroupAddon>
            </InputGroup>
            <div>
              <div id='datetimepicker1-parent' className='datetimepicker-inline'></div>
            </div>
          </PanelBody>
          <PanelRight className='panel-sm-5 bg-brown50 fg-white' style={{verticalAlign: 'middle'}}>
            <Grid>
              <Row>
                <Col xs={12}>
                  <div className='text-center'>
                    <Icon glyph='climacon rain cloud' style={{fontSize: '800%', lineHeight: 0}} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6} collapseRight>
                  <h4>Max: 50°</h4>
                </Col>
                <Col xs={6} collapseLeft className='text-right'>
                  <h4>Min: -5°</h4>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className='text-center'>
                  <h5>Prenez votre ciret :) </h5>
                  <h6>Vent: 150 km/h | Humidité: 91%</h6>
                </Col>
              </Row>
            </Grid>
          </PanelRight>
        </Panel>
      </PanelContainer>
    );
  }
}

class MapPanel extends React.Component {
  componentDidMount() {
    var map = new GMaps({
      div: '#routingmap',
      lat: 38.890792,
      lng: -77.048518,
      scrollwheel: false,
      zoom: 16
    });
    var list = [];
    map.travelRoute({
      origin: [38.892428, -77.048454],
      destination: [38.889497, -77.050181],
      travelMode: 'walking',
      step: function(e){
        list.push({
          instructions: e.instructions,
          lat: e.end_location.lat(),
          lng: e.end_location.lng(),
          path: e.path
        });
      }.bind(this),
      end: function(e) {
        var lat, lng, path;
        var processList = function(i) {
          if(list.length === i) return;
          lat = list[i].lat;
          lng = list[i].lng;
          path = list[i].path;
          map.drawPolyline({
            path: path,
            strokeColor: '#FF6FCF',
            strokeWeight: 8
          });
          processList(i+1);
        }.bind(this);
        processList(0);
      }.bind(this)
    });
  }
  render() {
    return (
      <PanelContainer collapseBottom>
        <Panel>
          <PanelHeader>
            <div style={{padding: 25}}>
              <div id='routingmap' style={{height: 300}}></div>
              <div className='fg-black50 text-center' style={{borderBottom: '1px solid #ccc'}}>
                <h5 style={{padding: 12.5, margin: 0}}>WALK 0.3 MILES - FOR 6 MINUTES</h5>
              </div>
              <div>
                <div className='map-dest' style={{marginBottom: 12.5}}>
                  <h3 className='fg-black50'>
                    <Icon glyph='icon-fontello-dot-circled' className='fg-darkgray'/>{' '}
                    <span>Albert Einstein Memorial</span>
                  </h3>
                  <h5>
                    2101 Constitution Ave NW, Washington, DC 20418, United States
                  </h5>
                </div>
                <div className='map-tcontainer'>
                  <Table className='mapt' hover collapsed>
                    <tbody>
                      <tr>
                        <td><Icon className='fg-blue' glyph='icon-fontello-up-circle icon-2x' /></td>
                        <td>Walk <strong>east</strong> on <strong>Constitution Ave NW</strong> towards <strong>Henry Bacon Dr NW</strong></td>
                        <td width='75'><small>171 ft</small></td>
                      </tr>
                      <tr>
                        <td><Icon className='fg-green' glyph='icon-fontello-right-circle icon-2x' /></td>
                        <td>Turn <strong>right</strong></td>
                        <td><small>433 ft</small></td>
                      </tr>
                      <tr>
                        <td><Icon className='fg-darkorange' glyph='icon-fontello-left-circle icon-2x' /></td>
                        <td>
                          <div>Follow the road <strong>southeast</strong></div>
                          <div>Turn <strong>left</strong> <em>(Slight turn)</em></div>
                        </td>
                        <td><small>0.1 mi</small></td>
                      </tr>
                      <tr>
                        <td><Icon className='fg-green' glyph='icon-fontello-right-circle icon-2x' /></td>
                        <td>Turn right</td>
                        <td><small>262 ft</small></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className='map-dest'>
                  <h3 className='fg-black50'>
                    <Icon glyph='icon-fontello-dot-circled'/>{' '}
                    <span>Lincoln Memorial</span>
                  </h3>
                  <h5 style={{marginBottom: 0}}>
                    2 Lincoln Memorial Cir NW, Washington, DC 20037, United States
                  </h5>
                </div>
              </div>
            </div>
          </PanelHeader>
        </Panel>
      </PanelContainer>
    );
  }
}

class Body extends React.Component {
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer>
                <Panel>
                  <MainChart />
                </Panel>
                <Panel horizontal className='force-collapse'>
                  <PanelLeft noRadius className='bg-red fg-white tabs panel-sm-1'>
                    <TabContainer id='tab-1' className='plain'>
                      <TabList>
                        <Tab active>
                          <Icon glyph='icon-fontello-note-1'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelLeft>
                  <PanelBody className='panel-sm-4' style={{padding: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12} collapseLeft collapseRight>
                          <TabContent tabContainerID='tab-1'>
                            <TabPane>
                              <NotePanel />
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelRight noRadius className='bg-lightgreen fg-white panel-sm-2'>
                    <RevenuePanel />
                  </PanelRight>
                  <PanelRight className='bg-green fg-green panel-sm-4'>
                    <Grid>
                      <LoadPanel />
                      <AlertChart />
                    </Grid>
                  </PanelRight>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>

          <Row>
            <Col sm={5} collapseRight>

              <PanelContainer controlStyles='bg-lightorange fg-davygray' collapseBottom>
                <Panel>
                  <PanelHeader className='bg-lightorange fg-darkorange fg-tab-active tabs'>
                    <TabContainer id='tab-2'>
                      <TabList>
                        <Tab active>
                          <Icon className='icon-1-and-quarter-x' bundle='feather' glyph='bar-graph-2'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelHeader>
                  <PanelBody style={{paddingTop: 0}}>
                    <TabContent tabContainerID='tab-2'>
                      <TabPane>
                        <OrdersComparisonPanel />
                      </TabPane>
                    </TabContent>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={7}>
              <WeatherPanel />
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

@SidebarMixin
export default class extends React.Component {
  render() {
    var classes = classNames('dashboard', {
      'container-open': this.props.open
    });

    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
}
