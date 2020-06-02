import {action, computed, observable} from "mobx";
import {flatten, fromPairs} from 'lodash';
import moment from 'moment';
import { CodeSandboxCircleFilled } from "@ant-design/icons";

const query = {
  me: {
    resource: 'me.json',
    params: {
      fields: '*,organisationUnits[*]'
    }
  },
  program: {
    resource: `programs/vf8dN49jprI`,
    params: {
      fields: 'organisationUnits[id,name],programStages[programStageDataElements[displayInReports,dataElement[id,name]]]'
    }
  },
  options: {
    resource: 'optionSets.json',
    params: {
      fields: 'id,code,options[code,name]',
      paging: 'false',
      filter: 'code:in:[SX01,YN01,MD,PD01,TI01,100U,100ATPOINT,100RefLevels]'
    }
  }
}

class Store {
  @observable engine: any;
  @observable userOrgUnits: any = [];
  @observable selectedOrgUnit: any;
  @observable programs = [];
  @observable selectedNationality: any;
  @observable optionSets: any
  @observable page = 1;
  @observable pageSize = 10;
  @observable total = 0;
  @observable program = 'vf8dN49jprI';
  @observable programStage = 'aKclf7Yl1PE';
  @observable attributeCC = 'UjXPudXlraY';
  @observable data: any;
  @observable sorter = 'created:desc';
  @observable search = '';
  @observable currentPage = '1';
  @observable programOrganisationUnits = [];
  @observable currentEvent: any;
  @observable viewMode = false;
  @observable editing = false;
  @observable availableDataElements = [];
  @observable ICDAltSearchtextA: any;
  @observable allDisabled: any = {
    ZKBE8Xm9DJG: {disabled: false, warning: null},
    ZYKmQ9GPOaF: {disabled: false, warning: null},
    MOstDqSY0gO: {disabled: false, warning: null},
    zwKo51BEayZ: {disabled: false, warning: null},
    bNpMzyShDCX: {disabled: false, warning: null},
    u44XP9fZweA: {disabled: false, warning: null},
    b70okb06FWa: {disabled: false, warning: null},
    t5nTEmlScSt: {disabled: false, warning: null},
    dsiwvNQLe5n: {disabled: false, warning: null},
    RbrUuKFSqkZ: {disabled: false, warning: null},
    q7e7FOXKnOf: {disabled: false, warning: null},
    e96GB4CXyd3: {disabled: false, warning: null},
    i8rrl8YWxLF: {disabled: false, warning: null},
    xNCSFrgdUgi: {disabled: false, warning: null},
    zcn7acUB6x1: {disabled: false, warning: null},
    KpfvNQSsWIw: {disabled: false, warning: null},
    AJAraEcfH63: {disabled: false, warning: null},
    RJhbkjYrODG: {disabled: false, warning: null},
    ymyLrfEcYkD: {disabled: false, warning: null},
    K5BDPJQk1BP: {disabled: false, warning: null},
    Z41di0TRjIu: {disabled: false, warning: null},
    uaxjt0inPNF: {disabled: false, warning: null},
    V4rE1tsj5Rb: {disabled: false, warning: null},
    ivnHp4M4hFF: {disabled: false, warning: null},
    jf9TogeSZpk: {disabled: false, warning: null},
    lQ1Byr04JTx: {disabled: false, warning: null},
    GFVhltTCG8b: {disabled: false, warning: null},
    xAWYJtQsg8M: {disabled: false, warning: null},
    DdfDMFW4EJ9: {disabled: false, warning: null},
    sfpqAeqKeyQ: {disabled: false, warning: null},
    Ylht9kCLSRW: {disabled: true, warning: null},
    zb7uTuBCPrN: {disabled: true, warning: null},
    QGFYJK00ES7: {disabled: true, warning: null},
    CnPGhOcERFF: {disabled: true, warning: null},
    myydnkmLfhp: {disabled: true, warning: null},
    aC64sB86ThG: {disabled: true, warning: null},
    cmZrrHfTxW3: {disabled: true, warning: null},
    U18Tnfz9EKd: {disabled: false, warning: null},
    QTKk2Xt8KDu: {disabled: true, warning: null},
    DKlOhZJOCrX: {disabled: true, warning: null},
    xeE5TQLvucB: {disabled: true, warning: null},
    FhHPxY16vet: {disabled: false, warning: null},
    KsGOxFyzIs1: {disabled: false, warning: null},
    gNM2Yhypydx: {disabled: false, warning: null},
    tYH7drlbNya: {disabled: false, warning: null},
    fQWuywOaoN2: {disabled: false, warning: null},
    Kk0hmrJPR90: {disabled: false, warning: null},
    b4yPk98om7e: {disabled: false, warning: null},
    j5TIQx3gHyF: {disabled: false, warning: null},
    wX3i3gkTG4m: {disabled: false, warning: null},
    JhHwdQ337nn: {disabled: false, warning: null},
    xDMX2CJ4Xw3: {disabled: false, warning: null},
    o1hG9vr0peF: {disabled: false, warning: null},
    jY3K6Bv4o9Q: {disabled: false, warning: null},
    AZSlwlRAFig: {disabled: false, warning: null},
    UfG52s4YcUt: {disabled: false, warning: null},
    kGIDD5xIeLC: {disabled: true, warning: null},
    mDez8j7furx: {disabled: false, warning: null},
    WkXxkKEJLsg: {disabled: true, warning: null},
    fleGy9CvHYh: {disabled: true, warning: null},
    hO8No9fHVd2: {disabled: true, warning: null},
    zD0E77W4rFs: {disabled: false, warning: null},
    eCVDO6lt4go: {disabled: true, warning: null},
    tuMMQsGtE69: {disabled: false, warning: null},
    C8n6hBilwsX: {disabled: false, warning: null},
    IeS8V8Yf40N: {disabled: false, warning: null},
    sJhOdGLD5lj: {disabled: false, warning: null},
    k9xdBQzYMXo: {disabled: false, warning: null},
    yftBZ5bSEOb: {disabled: false, warning: null},
    fJUy96o8akn: {disabled: false, warning: null},
    S53kx50gjQn: {disabled: false, warning: null},
    L97MrANAav9: {disabled: false, warning: null},
    cSDJ9kSJkFP: {disabled: false, warning: null},
    uckvenVFnwf: {disabled: false, warning: null},
    ZFdJRT3PaUd: {disabled: false, warning: null},
    Op5pSvgHo1M: {disabled: false, warning: null},
    QHY3iYRLvMp: {disabled: false, warning: null},
    NkiH8GTX6HC: {disabled: false, warning: null},
    SDPq8UURlWc: {disabled: false, warning: null},
    zqW9xWyqOur: {disabled: false, warning: null},
    ctbKSNV2cg7: {disabled: false, warning: null},
    T4uxg60Lalw: {disabled: false, warning: null}
  };

  @action showEvents = () => {
    this.data = null;
    this.edit();
    this.currentEvent = null;
    this.editing = false;
    this.currentPage = '1';
  };
  @action showForm = () => this.currentPage = '2';
  @action setEngine = (engine: any) => this.engine = engine;
  @action edit = () => this.viewMode = false;
  @action view = () => this.viewMode = true;
  @action setCurrentEvent = (event: any) => this.currentEvent = event;
  @action setSelectedNationality = async (nationality: any) => {
    try {
      this.selectedNationality = nationality
      if (this.canInsert) {
        await this.queryEvents();
      } else {
        this.data = null;
      }
    } catch (e) {
      console.log(e);
    }
  };

  @action
  loadUserOrgUnits = async () => {
    try {
      const data = await this.engine.query(query);
      this.userOrgUnits = data.me.organisationUnits;
      const options = data.options.optionSets.filter((o: any) => {
        return !!o.code
      }).map((optionSet: any) => {
        return [optionSet.code, optionSet.options]
      });
      const units = data.program.organisationUnits;
      this.programOrganisationUnits = units;
      this.optionSets = fromPairs(options);
      const programStage = data.program.programStages[0];
      this.availableDataElements = programStage.programStageDataElements.map((de: any) => {
        return {...de.dataElement, selected: de.displayInReports};
      });
    } catch (e) {
      console.log(e);
    }
  }

  @action
  loadOrganisationUnitsChildren = async (parent: string) => {
    const query = {
      organisations: {
        resource: `organisationUnits.json`,
        params: {
          filter: `id:in:[${parent}]`,
          paging: 'false',
          fields: 'children[id,name,path,leaf]'
        }
      },
    }
    try {
      const data = await this.engine.query(query);
      const found = data.organisations.organisationUnits.map((unit: any) => {
        return unit.children.map((child: any) => {
          return {...child, pId: parent}
        })
      });
      const all = flatten(found);
      this.userOrgUnits = [...this.userOrgUnits, ...all];
    } catch (e) {
      console.log(e);
    }
  }

  @action setSelectedOrgUnit = async (val: any) => {
    try {
      this.selectedOrgUnit = val;
      if (this.canInsert) {
        await this.queryEvents();
      } else {
        this.data = null;
      }
    } catch (e) {
      console.log(e);
    }
  }

  @action queryEvents = async () => {
    if (this.canInsert) {
      const query1 = {
        events: {
          resource: 'events/query.json',
          params: {
            page: this.page,
            pageSize: this.pageSize,
            programStage: this.programStage,
            orgUnit: this.selectedOrgUnit,
            totalPages: 'true',
            attributeCc: this.attributeCC,
            attributeCos: this.selectedNationality,
            includeAllDataElements: 'true',
            order: this.sorter,
            query: this.search === '' ? '' : `LIKE:${this.search}`,

          }
        }
      }
      try {
        const data = await this.engine.query(query1);
        this.data = data.events;
        this.data.headers = this.data.headers.map((a: any, i: number) => {
          return {
            ...a,
            i
          }
        });
        this.total = this.data.metaData.pager.total
      } catch (e) {
        console.log(e);
      }
    }
  }


  @action handleChange = async (pagination: any, filters: any, sorter: any) => {
    const order = sorter.field && sorter.order ? `${sorter.field}:${sorter.order === 'ascend' ? 'asc' : 'desc'}` : 'created:desc';
    const page = pagination.pageSize !== this.pageSize || order !== this.sorter ? 1 : pagination.current;
    this.sorter = order;
    this.page = page;
    this.pageSize = pagination.pageSize

    try {
      await this.queryEvents()
    } catch (error) {
      console.error("Failed to fetch projects", error);
    }
  };

  @action addEvent = async (form: any) => {
    const {eventDate, ...rest} = form;
    const dataValues = Object.entries(rest).map(([dataElement, value]) => {
      if (value instanceof moment) {
        if (dataElement === 'i8rrl8YWxLF') {
          value = moment(value).format('YYYY-MM-DDTHH:mm:ss.SSSZ')

        } else {
          value = moment(value).format('YYYY-MM-DD')
        }
      }
      return {
        dataElement,
        value
      }
    }).filter((dv) => !!dv.value);

    let event: any = {
      attributeCategoryOptions: this.selectedNationality,
      orgUnit: this.selectedOrgUnit,
      program: this.program,
      programStage: this.programStage,
      eventDate: moment(eventDate).format('YYYY-MM-DD'),
      dataValues
    }


    const under = {
      field1: ''
    }


    let createMutation: any = {
      type: 'create',
      resource: 'events',
      data: event
    }
    if (this.editing && this.currentEvent) {
      event = {...event, event: this.currentEvent[0]}
      createMutation = {...createMutation, data: event}
    }
    try {
      await this.engine.mutate(createMutation);
    } catch (error) {
      console.error("Failed to fetch projects", error);
    }
    this.showEvents();
  }

  @action deleteEvent = async () => {
    try {
      if (this.currentEvent) {
        const createMutation = {
          type: 'delete',
          resource: 'events',
          id: this.currentEvent[0]
        }
        await this.engine.mutate(createMutation);
        this.showEvents();
      }

    } catch (e) {
      console.log(e);
    }
  }

  @action causeOfDeathAltSearch =  (e: any) => {
    try {
 const DOBA = e
      console.log(DOBA)
      

    } catch (e) {
      console.log(e);
    }
    return e
  }

  @action editEvent = () => {
    this.editing = true;
    this.edit();
    this.showForm();
  }

  @action setAvailableDataElements = (val: any) => {
    this.availableDataElements = val;
  }

  @action includeColumns = (id: any) => (e: any) => {
    const elements = this.availableDataElements.map((col: any) => {
      if (col.id === id) {
        return {...col, selected: e.target.checked}
      }
      return col;
    });
    this.setAvailableDataElements(elements);
  }

  @action changeDisable = (key: string, value: boolean) => {
    this.allDisabled = {...this.allDisabled, [key]: value}
  }

  @action disableValue = (key: string) => {
    this.allDisabled = {...this.allDisabled, [key]: {...this.allDisabled[key], disabled: true}}
  }

  @action enableValue = (key: string) => {
    this.allDisabled = {...this.allDisabled, [key]: {...this.allDisabled[key], disabled: false}}
  }

  @action showWarning = (key: string, warning: string) => {
    this.allDisabled = {...this.allDisabled, [key]: {...this.allDisabled[key], warning}}
  }

  @action removeWarning = (key: string) => {
    this.allDisabled = {...this.allDisabled, [key]: {...this.allDisabled[key], warning: null}}
  }

  @computed
  get organisationUnits() {
    const units = this.userOrgUnits.map((unit: any) => {
      return {id: unit.id, pId: unit.pId || '', value: unit.id, title: unit.name, isLeaf: unit.leaf}
    });
    return units;
  }

  @computed
  get processedPrograms() {
    return this.programs.map(({id, name}) => {
      return {id, name}
    })
  }

  @computed get columns() {
    if (this.data && this.data.headers.length > 0 && this.data.rows.length > 0) {
      return this.availableDataElements.filter((de: any) => de.selected).map((col: any) => {
        const found = this.data.headers.find((c: any) => {
          return col.id === c.name;
        });
        return {
          key: found.name,
          title: found.column,
          dataIndex: found.name,
          render: (text: any, row: any) => {
            return row[found.i]
          }
        }
      });
    }
    return []
  }

  @computed get currentOrganisation() {
    const current: any = this.programOrganisationUnits.find((u: any) => u.id === this.selectedOrgUnit);
    if (current) {
      return current.name;
    }
    return ''
  }

  @computed get canInsert() {
    return this.selectedOrgUnit && this.selectedNationality && this.currentOrganisation;
  }

  @computed get defaultValues() {
    const dates = ['eventDate', 'RbrUuKFSqkZ', 'i8rrl8YWxLF', 'j5TIQx3gHyF', 'U18Tnfz9EKd']
    if (this.data && this.data.headers.length > 0 && this.currentEvent) {
      const d = this.data.headers.map((c: any) => {
        let value = this.currentEvent[c.i];
        if (dates.indexOf(c.name) !== -1) {
          value = moment(value);
        } else if (value === 'true') {
          value = true;
        } else if (value === 'false') {
          value = false;
        }
        return [c.name, value];
      }).filter((v: any) => !!v[1]);
      return fromPairs(d);
    }
    return {};
  }
}

export const store = new Store();
