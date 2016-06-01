import { State, Navigation } from 'react-router';

import classNames from 'classnames';

import { Link } from 'react-router';
import { SidebarBtn } from 'global/jsx/sidebar_component';

class Brand extends React.Component {
    render() {
        return (
            <NavHeader {...this.props}>
                <NavBrand tabIndex='-1'>
                    <img src='/imgs/logo.png' alt='rubix' width='111' height='28' />
                </NavBrand>
            </NavHeader>
        );
    }
}

class LocaleMenuItem extends React.Component {
    render() {
        return (
            <MenuItem {...this.props} lang={null} href='#'>
                <Grid>
                    <Row>
                        <Col xs={2}>
                            <img src={'/imgs/flags/flags/flat/32/'+this.props.flag+'.png'} width='32' height='32' />
                        </Col>
                        <Col xs={10}>
                            <Entity className='lang-menu-text' entity='languageMenu' data={{lang: this.props.lang}} />
                        </Col>
                    </Row>
                </Grid>
            </MenuItem>
        );
    }
}

var DirectNavItem = React.createClass({
    mixins: [State, Navigation],
    render() {
        var active = false;
        var currentLocation = this.context.router.state.location.pathname;

        if(!active && this.props.path) {
            active = this.isActive(this.props.path) && (currentLocation == this.props.path);
        }

        var classes = classNames({
            'pressed': active
        });
        return (
            <NavItem className={classes} {...this.props}>
                <Link to={this.props.path}>
                    <Icon bundle={this.props.bundle || 'fontello'} glyph={this.props.glyph} />
                </Link>
            </NavItem>
        );
    }
});

class Skins extends React.Component {
    switchSkin(skin, e) {
        e.preventDefault();
        e.stopPropagation();
        for(var i=0; i < Skins.skins.length; i++) {
            $('html').removeClass(Skins.skins[i]);
        }
        $('html').addClass(skin);
        vex.close(this.props.id);
    }
    render() {
        return (
            <Grid style={{margin: '-2em'}}>
                <Row>
                    <Col xs={12} className='text-center bg-darkgrayishblue75' style={{marginBottom: 25}}>
                        <div className='fg-white' style={{fontSize: 24, lineHeight: 1, padding: '25px 10px'}}>
                            Choose a theme:
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} className='text-center'>
                        <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'default')}>
                            <Icon glyph='icon-fontello-stop icon-4x' style={{color: '#E76049'}} />
                        </a>
                    </Col>
                    <Col xs={4} className='text-center'>
                        <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'green')}>
                            <Icon glyph='icon-fontello-stop icon-4x' className='fg-darkgreen45' />
                        </a>
                    </Col>
                    <Col xs={4} className='text-center'>
                        <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'blue')}>
                            <Icon glyph='icon-fontello-stop icon-4x' className='fg-blue' />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} className='text-center'>
                        <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'purple')}>
                            <Icon glyph='icon-fontello-stop icon-4x' className='fg-purple' />
                        </a>
                    </Col>
                    <Col xs={4} className='text-center'>
                        <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'brown')}>
                            <Icon glyph='icon-fontello-stop icon-4x' className='fg-brown' />
                        </a>
                    </Col>
                    <Col xs={4} className='text-center'>
                        <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'cyan')}>
                            <Icon glyph='icon-fontello-stop icon-4x' className='fg-darkcyan' />
                        </a>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

Skins.skins = ['default', 'green', 'blue', 'purple', 'brown', 'cyan'];

class CommitChart extends React.Component {
    componentDidMount() {
        var chart = new Rubix('#commit-column-chart', {
            width: '100%',
            height: 100,
            hideAxisAndGrid: true,
            hideLegend: true,
            tooltip: {
                color: '#2EB398'
            },
            margin: {
                top: 25,
                bottom: 25
            }
        });

        var alerts = chart.column_series({
            name: 'Commits',
            color: '#2EB398'
        });

        alerts.addData([
            {x: 10, y: 20},
            {x: 11, y: 50},
            {x: 12, y: 35},
            {x: 13, y: 30},
            {x: 14, y: 20},
            {x: 15, y: 25},
            {x: 16, y: 30},
            {x: 17, y: 50},
            {x: 18, y: 20},
            {x: 19, y: 30},
            {x: 20, y: 50},
            {x: 21, y: 20},
            {x: 22, y: 50},
            {x: 23, y: 35},
            {x: 24, y: 30},
            {x: 25, y: 20},
            {x: 26, y: 30}
        ]);

        $(window).trigger('resize');
    }
    render() {
        return (
            <Grid style={{marginBottom: -10}}>
                <Row>
                    <Col xs={12}>
                        <div id='commit-column-chart'></div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}


class BodyLayout extends React.Component {
    bodyLayoutRadioChange(value) {
        if(!value) return;
        if(value === 'fixed-body') {
            $('html').removeClass('static');
            localStorage.setItem('bodyLayout', 'fixed-body');
            ReactBootstrap.Dispatcher.emit('sidebar:reinitialize');
        } else if(value === 'static-body') {
            $('html').addClass('static');
            localStorage.setItem('bodyLayout', 'static-body');
            ReactBootstrap.Dispatcher.emit('sidebar:destroy');
        }
        this.refs[value].checked = true;
    }
    handleBodyLayoutRadioChange(e) {
        this.bodyLayoutRadioChange(e.target.value);
    }
    componentDidMount() {
        this.bodyLayoutRadioChange(localStorage.getItem('bodyLayout'));
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={8}>
                        <Radio browser ref='fixed-body' value='fixed-body' name='switch-body-layout' defaultChecked onChange={this.handleBodyLayoutRadioChange.bind(this)}>
                            Fixed (Header + Sidebar)
                        </Radio>
                    </Col>
                    <Col xs={4} className='text-right'>
                        <Radio browser ref='static-body' value='static-body' name='switch-body-layout' onChange={this.handleBodyLayoutRadioChange.bind(this)}>
                            Static
                        </Radio>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
var IconStyle = {
    fontSize: '3em'
};

var HeaderNavigation = React.createClass({
    mixins: [State, Navigation],
    getInitialState() {
        return { selectedFlag: 'United-States' };
    },
    handleSkinSwitch(e) {
        e.preventDefault();
        e.stopPropagation();
        var vexContent;
        vex.dialog.open({
            afterOpen: ($vexContent) => {
                vexContent = $vexContent;
                return React.render(<Skins id={$vexContent.data().vex.id} />, $vexContent.get(0));
            },
            afterClose: () => {
                React.unmountComponentAtNode(vexContent.get(0));
            }
        });
    },
    changeFlag(props) {
        this.setState({
            selectedFlag: props.flag
        }, () => {
            if(props.locale === 'ar')
                $('html').addClass('arabic');
            else
                $('html').removeClass('arabic');
            Preloader.show();
            l20n.changeLocale(props.locale);
        });
    },
    l20nContextReady(e) {
        var selectedFlag = l20n.ctx.getSync('selectedFlag');
        this.refs['flag-menu'].selectItem('flag', selectedFlag);
        this.setState({
            selectedFlag: selectedFlag
        }, () => {
            Preloader.hide();
        });
    },
    changeSettingsMenuItemState(item) {
        if(item === 'fluid' || item === null || item === undefined) {
            this.refs['settings-menu'].selectItem('data-val', 'fluid');
            $('html').removeClass('boxed');
        } else if(item === 'boxed') {
            this.refs['settings-menu'].selectItem('data-val', 'boxed');
            $('html').addClass('boxed');
        }
        setTimeout(() => {
            $(window).trigger('resize');
        }, 300);
    },
    changeViewport(props) {
        switch(props['data-type']) {
            case 'dimension':
                if(props['data-val'] === 'boxed') {
                    localStorage.setItem('settingsMenu', 'boxed');
                    this.changeSettingsMenuItemState('boxed');
                } else {
                    localStorage.setItem('settingsMenu', 'fluid');
                    this.changeSettingsMenuItemState('fluid');
                }
                break;
            default:
                break;
        }
    },
    handleLogout(e) {
        $('body').addClass('fade-out');
        setTimeout(() => {
            this.transitionTo('/');
        }, 250);
    },
    componentDidMount() {
        ReactBootstrap.Dispatcher.on('ctx:ready', this.l20nContextReady);
        (function() {
            var item = localStorage.getItem('settingsMenu');
            this.changeSettingsMenuItemState(item);
            localStorage.setItem('settingsMenu', item || 'fluid');
        }.bind(this))();
    },
    componentWillUnmount() {
        ReactBootstrap.Dispatcher.off('ctx:ready', this.l20nContextReady);
    },
    render() {
        return (
            <NavContent className='pull-right' {...this.props}>
                <Nav className='hidden-xs'>
                    <NavItem divider />
                    <DirectNavItem glyph='user-male' path='/' className='small-font' />
                    <NavItem dropdown toggleOnHover className='small-font collapse-left'>
                        <DropdownButton nav>
                            <Icon bundle='fontello' glyph='cog-7' />
                        </DropdownButton>
                        <Menu alignRight ref='settings-menu' id='settings-menu' bsStyle='theme' style={{width: 375}} onItemSelect={this.changeViewport}>
                            <MenuItem header>
                                <Entity entity='settingsMenuHeading' />
                            </MenuItem>
                            <MenuItem data-type='dimension' data-val='fluid' href='#' active>
                                <Entity entity='settingsMenuFluid' />
                            </MenuItem>
                            <MenuItem data-type='dimension' data-val='boxed' href='#'>
                                <Entity entity='settingsMenuBoxed' />
                            </MenuItem>
                            <MenuItem header>
                                Layout
                            </MenuItem>
                            <MenuItem header>
                                Body Layout
                            </MenuItem>
                            <MenuItem noHover>
                                <BodyLayout />
                            </MenuItem>
                        </Menu>
                    </NavItem>
                    <NavItem divider />
                    <DirectNavItem glyph='mail-3' path='/' />
                </Nav>
                <Nav>
                    <NavItem className='logout' href='#' onClick={this.handleLogout}>
                        <Icon bundle='fontello' glyph='off-1' />
                    </NavItem>
                </Nav>
            </NavContent>
        );
    }
});

export default class Header extends React.Component {
    render() {
        return (
            <Grid id='navbar' {...this.props}>
                <Row>
                    <Col xs={12}>
                        <NavBar fixedTop id='rubix-nav-header'>
                            <Container fluid>
                                <Row>
                                    <Col xs={3} visible='xs'>
                                        <SidebarBtn />
                                    </Col>
                                    <Col xs={6} sm={4}>
                                        <Brand />
                                    </Col>
                                    <Col xs={3} sm={8}>
                                        <HeaderNavigation pressed={this.props.pressed} />
                                    </Col>
                                </Row>
                            </Container>
                        </NavBar>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
