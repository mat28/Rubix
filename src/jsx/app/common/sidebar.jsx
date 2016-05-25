import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn
} from 'global/jsx/sidebar_component';

import { Link } from 'react-router';
import LoremIpsum from 'global/jsx/loremipsum';

class ApplicationSidebar extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header'>Navigation</div>
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}}>
                  <SidebarNavItem glyph='icon-fontello-gauge' name='Tableau de bord' href='/' />
                  <SidebarNavItem glyph='icon-feather-mail' name={<span>Email <BLabel className='bg-darkgreen45 fg-white'>3</BLabel></span>}>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-feather-inbox' name='Boite de reception' />
                      <SidebarNavItem glyph='icon-dripicons-message' name='Ajouter' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-simple-line-icons-basket' name='Commande'>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-simple-line-icons-list' name='Liste' />
                      <SidebarNavItem glyph='icon-fontello-list-add' name='Ajouter' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-fontello-truck' name='Livraison'>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-simple-line-icons-list' name='Listes' />
                      <SidebarNavItem glyph='icon-fontello-list-add' name='Ajouter' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-stroke-gap-icons-Dollars' name='Facture'>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-simple-line-icons-list' name='Liste' />
                      <SidebarNavItem glyph='icon-fontello-list-add' name='Ajouter' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-outlined-ticket' name='Ticket'>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-simple-line-icons-list' name='Liste' />
                      <SidebarNavItem glyph='icon-fontello-list-add' name='Ajouter' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-mfizz-platter' name='Produit'>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-simple-line-icons-list' name='Liste' />
                      <SidebarNavItem glyph='icon-fontello-list-add' name='Ajouter' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-pixelvicon-list-1' name='Offre'>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-simple-line-icons-list' name='Liste' />
                      <SidebarNavItem glyph='icon-fontello-list-add' name='Ajouter' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-fontello-commerical-building' name='Client'>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-simple-line-icons-list' name='Liste' />
                      <SidebarNavItem glyph='icon-fontello-list-add' name='Ajouter' />
                    </SidebarNav>
                  </SidebarNavItem>
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

class DummySidebar extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className='sidebar-header'>DUMMY SIDEBAR</div>
            <LoremIpsum query='1p' />
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default class extends React.Component {
  render() {
    return (
      <div id='sidebar' {...this.props}>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={4} collapseRight>
                <img src='/imgs/avatars/avatar0.png' width='40' height='40' />
              </Col>
              <Col xs={8} collapseLeft id='avatar-col'>
                <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>Mathieu Roux</div>
                <div>
                  <Progress id='demo-progress' value={30} min={0} max={100} color='#ffffff'/>
                  <Link to='/app/lock'><Icon id='demo-icon' bundle='fontello' glyph='lock-5' /></Link>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <SidebarControls>
          <SidebarControlBtn bundle='fontello' glyph='docs' sidebar={0} />
          <SidebarControlBtn bundle='fontello' glyph='chat-1' sidebar={1} />
          <SidebarControlBtn bundle='fontello' glyph='chart-pie-2' sidebar={2} />
          <SidebarControlBtn bundle='fontello' glyph='th-list-2' sidebar={3} />
          <SidebarControlBtn bundle='fontello' glyph='bell-5' sidebar={4} />
        </SidebarControls>
        <div id='sidebar-container'>
          <Sidebar sidebar={0} active>
            <ApplicationSidebar />
          </Sidebar>
          <Sidebar sidebar={1}>
            <DummySidebar />
          </Sidebar>
          <Sidebar sidebar={2}>
            <DummySidebar />
          </Sidebar>
          <Sidebar sidebar={3}>
            <DummySidebar />
          </Sidebar>
          <Sidebar sidebar={4}>
            <DummySidebar />
          </Sidebar>
        </div>
      </div>
    );
  }
}
