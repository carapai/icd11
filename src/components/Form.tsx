import React, {useEffect, useState} from "react";
import {Button, Card, Checkbox, DatePicker, Form, Input, InputNumber, Popconfirm, Select} from 'antd';
import {observer} from "mobx-react";
import {ICDField} from "./ICDField";
import {useStore} from "../Context";
import {isEmpty} from 'lodash';
import moment from "moment";

const {Option} = Select;

export const DataEntryForm = observer(() => {
  const [form] = Form.useForm();
  const [optionSets, setOptionSets] = useState<any>();
  const store = useStore();

  const onFinish = async (values: any) => {
    await store.addEvent(values)
  };

  const notTomorrow = (date: moment.Moment) => {
    return date.isAfter(moment());
  }

  useEffect(() => {
    store.loadUserOrgUnits().then(() => {
      setOptionSets(store.optionSets);
    });
  }, [store]);

  const valuesChange = (changedValues: any, allValues: any) => {
    if (changedValues.RbrUuKFSqkZ) {
      let years = moment().diff(changedValues.RbrUuKFSqkZ, 'years');
      let hours = moment().diff(changedValues.RbrUuKFSqkZ, 'hours');
      form.setFieldsValue({q7e7FOXKnOf: years});

      if (years > 1) {
        store.disableValue("V4rE1tsj5Rb");
        store.disableValue("ivnHp4M4hFF");
        store.disableValue("jf9TogeSZpk");
        store.disableValue("xAWYJtQsg8M");
        store.disableValue("lQ1Byr04JTx");
        store.disableValue("DdfDMFW4EJ9");
        store.disableValue("GFVhltTCG8b");
      } else {
        store.enableValue("V4rE1tsj5Rb");
        store.enableValue("ivnHp4M4hFF");
        store.enableValue("jf9TogeSZpk");
        store.enableValue("xAWYJtQsg8M");
        store.enableValue("lQ1Byr04JTx");
        store.enableValue("DdfDMFW4EJ9");
        store.enableValue("GFVhltTCG8b");
      }

      if (hours < 24) {
        store.disableValue('jf9TogeSZpk')
      } else if (hours >= 24 && years <= 1) {
        store.enableValue('jf9TogeSZpk')
      }
    }

    if (changedValues.i8rrl8YWxLF) {
      if (changedValues.i8rrl8YWxLF.isBefore(form.getFieldValue('RbrUuKFSqkZ'))) {
        form.setFieldsValue({i8rrl8YWxLF: null});
      }
    }

    if (form.getFieldValue('q7e7FOXKnOf') && form.getFieldValue('q7e7FOXKnOf') >= 120) {
      store.showWarning('q7e7FOXKnOf', 'Please confirm age is above 120 years');
      store.showWarning('RbrUuKFSqkZ', 'Please confirm age is above 120 years');
    } else {
      store.removeWarning('q7e7FOXKnOf');
      store.removeWarning('RbrUuKFSqkZ');
    }

    // if (changedValues.jY3K6Bv4o9Q && changedValues.jY3K6Bv4o9Q !== 'YN01-01') {
    //   store.disableValue('UfG52s4YcUt');
    // } else if (changedValues.jY3K6Bv4o9Q && changedValues.jY3K6Bv4o9Q === 'YN01-01') {
    //   store.enableValue('UfG52s4YcUt');
    // }

    if (!form.getFieldValue('jY3K6Bv4o9Q') || form.getFieldValue('jY3K6Bv4o9Q') !== 'YN01-01') {
      store.disableValue('UfG52s4YcUt');
    } else {
      store.enableValue('UfG52s4YcUt');
    }

    if (changedValues.Ylht9kCLSRW) {
      store.enableValue('WkXxkKEJLsg');
    }

    if (changedValues.WkXxkKEJLsg) {
      store.enableValue('zb7uTuBCPrN');
      store.enableValue('QTKk2Xt8KDu');
    }

    if (changedValues.myydnkmLfhp) {
      store.enableValue('fleGy9CvHYh');
    }

    if (changedValues.fleGy9CvHYh) {
      store.enableValue('QGFYJK00ES7');
    }


    if (changedValues.aC64sB86ThG) {
      store.enableValue('hO8No9fHVd2');
    }

    if (changedValues.hO8No9fHVd2) {
      store.enableValue('CnPGhOcERFF');
    }

    if (changedValues.cmZrrHfTxW3) {
      store.enableValue('eCVDO6lt4go');
    }

    if (changedValues.eCVDO6lt4go) {
      store.enableValue('QTKk2Xt8KDu');
    }

    if (changedValues.AZSlwlRAFig) {
      store.enableValue('DKlOhZJOCrX');
      store.enableValue('kGIDD5xIeLC');
    } else if (!allValues.AZSlwlRAFig) {
      store.disableValue('DKlOhZJOCrX');
      store.disableValue('kGIDD5xIeLC');
    }

    if (changedValues.FhHPxY16vet) {
      store.disableValue('DKlOhZJOCrX');
      store.disableValue('kGIDD5xIeLC');
      store.disableValue('AZSlwlRAFig');
    } else if (!allValues.FhHPxY16vet) {
      store.enableValue('AZSlwlRAFig');
    }

    if (changedValues.U18Tnfz9EKd) {
      if (changedValues.U18Tnfz9EKd.isBefore(form.getFieldValue('RbrUuKFSqkZ')) || changedValues.U18Tnfz9EKd.after(form.getFieldValue('i8rrl8YWxLF'))) {
        form.setFieldsValue({U18Tnfz9EKd: null});
      }
    }

    if (changedValues.ivnHp4M4hFF && (changedValues.ivnHp4M4hFF === 'YN01-01' || changedValues.ivnHp4M4hFF === 'YN01-03')) {
      store.disableValue('jf9TogeSZpk');
    } else {
      store.enableValue('jf9TogeSZpk');
    }

    if (changedValues.zcn7acUB6x1 && changedValues.zcn7acUB6x1 !== 'YN01-01') {
      store.disableValue("KpfvNQSsWIw")
      store.disableValue("AJAraEcfH63")
      store.disableValue("RJhbkjYrODG")
      store.disableValue("ymyLrfEcYkD")
      store.disableValue("K5BDPJQk1BP")
      store.disableValue("Z41di0TRjIu")
      store.disableValue("uaxjt0inPNF")
    } else if (changedValues.zcn7acUB6x1 === 'YN01-01') {
      store.enableValue("KpfvNQSsWIw")
      store.enableValue("AJAraEcfH63")
      store.enableValue("RJhbkjYrODG")
      store.enableValue("ymyLrfEcYkD")
      store.enableValue("K5BDPJQk1BP")
      store.enableValue("Z41di0TRjIu")
      store.enableValue("uaxjt0inPNF")
    }

    if (changedValues.e96GB4CXyd3 && changedValues.e96GB4CXyd3 !== 'SX01-02') {
      store.disableValue('zcn7acUB6x1')
      store.disableValue("KpfvNQSsWIw")
      store.disableValue("AJAraEcfH63")
      store.disableValue("RJhbkjYrODG")
      store.disableValue("ymyLrfEcYkD")
      store.disableValue("K5BDPJQk1BP")
      store.disableValue("Z41di0TRjIu")
      store.disableValue("uaxjt0inPNF")
    } else {
      store.enableValue('zcn7acUB6x1')
    }

    if ((changedValues.Kk0hmrJPR90 && changedValues.Kk0hmrJPR90 !== 'YN01-01') || !form.getFieldValue('Kk0hmrJPR90')) {
      store.disableValue('j5TIQx3gHyF');
      store.disableValue('JhHwdQ337nn')
      store.disableValue('jY3K6Bv4o9Q')
      store.disableValue('UfG52s4YcUt')
    } else {
      store.enableValue('j5TIQx3gHyF');
      store.enableValue('JhHwdQ337nn')
      store.enableValue('jY3K6Bv4o9Q')
      // store.enableValue('UfG52s4YcUt')
    }

    if (changedValues.j5TIQx3gHyF) {
      let weeks = moment(form.getFieldValue('i8rrl8YWxLF')).diff(changedValues.RbrUuKFSqkZ, 'weeks');
      if (weeks > 4) {
        form.setFieldsValue({j5TIQx3gHyF: null});
      }
    }
  }

  const optionSet = (os: string, field: string) => {
    const options = optionSets ? optionSets[os] : [];
    if (options) {
      return <Select style={{width: '100%'}} size="large"
                     disabled={store.viewMode || store.allDisabled[field].disabled}>
        {options.map((option: any) => <Option key={option.code} value={option.code}>{option.name}</Option>)}
      </Select>
    }
    return null
  }


  return (
    <Form form={form} name="death-certificate"
          onFinish={onFinish}
          scrollToFirstError={true}
          initialValues={store.defaultValues}
          onValuesChange={valuesChange}
    >

      <Card title="New Death Certificate"
            actions={[
              <p>Inserting for {store.currentOrganisation} </p>,
              !isEmpty(store.defaultValues) ?
                <Popconfirm title="Sure to delete?" onConfirm={() => store.deleteEvent()}><Button
                  size="large">Delete</Button> </Popconfirm> : null,
              <Button size="large" onClick={store.showEvents}>Cancel</Button>,
              <Button htmlType="submit" size="large" disabled={store.viewMode}>Save</Button>
            ]}
            type="inner"
            bodyStyle={{maxHeight: '70vh', overflow: 'auto'}}
      >
        <Form.Item
          label="Date of review"
          rules={[{type: 'object', required: true, message: 'Please select date!'}]}
          name="eventDate"
          className="m-0"
        >
          <DatePicker disabledDate={notTomorrow} size="large" disabled={store.viewMode}/>
        </Form.Item>
        <table className="my-2 w-full border-collapse">
          <tbody>
          <tr>
            <td className="border p-1" colSpan={2}>Ministry of Health National Case Number</td>
            <td className="border p-1" colSpan={2}>
              <Form.Item
                name="ZKBE8Xm9DJG"
                className="m-0"
              >
                <Input size="large" disabled={store.viewMode || store.allDisabled.ZKBE8Xm9DJG.disabled}/>
              </Form.Item>
            </td>
          </tr>
          <tr>
            <td className="border p-1">Name (Full name):</td>
            <td className="border p-1">
              <Form.Item
                rules={[{ required: true, message: 'Enter full name'}]}
                name="ZYKmQ9GPOaF"
                className="m-0"
              >
                <Input size="large" disabled={store.viewMode || store.allDisabled.ZYKmQ9GPOaF.disabled}/>
              </Form.Item>
            </td>
            <td className="border p-1">
              NIN
            </td>
            <td className="border p-1">
              <Form.Item
                name="MOstDqSY0gO"
                className="m-0"
              >
                <Input size="large" disabled={store.viewMode || store.allDisabled.MOstDqSY0gO.disabled}/>
              </Form.Item>
            </td>
          </tr>

          <tr>
            <td className="border p-1">
              Usual Residence (village)
            </td>
            <td className="border p-1" colSpan={3}>
              <Form.Item
                name="zwKo51BEayZ"
                className="m-0"
              >
                <Input size="large" disabled={store.viewMode || store.allDisabled.zwKo51BEayZ.disabled}/>
              </Form.Item>
            </td>
          </tr>

          <tr>
            <td className="border p-1">
              Usual Residence (Parish)
            </td>
            <td className="border p-1">
              <Form.Item
                name="bNpMzyShDCX"
                className="m-0"
              >
                <Input size="large" disabled={store.viewMode || store.allDisabled.bNpMzyShDCX.disabled}/>
              </Form.Item>
            </td>
            <td className="border p-1">
              Usual Residence (Sub-county)
            </td>
            <td className="border p-1">
              <Form.Item
                name="u44XP9fZweA"
                className="m-0"
              >
                <Input size="large" disabled={store.viewMode || store.allDisabled.u44XP9fZweA.disabled}/>
              </Form.Item>
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              Usual Residence (County)
            </td>
            <td className="border p-1">
              <Form.Item
                name="b70okb06FWa"
                className="m-0"
              >
                <Input size="large" disabled={store.viewMode || store.allDisabled.b70okb06FWa.disabled}/>
              </Form.Item>
            </td>
            <td className="border p-1">
              Usual Residence (District)
            </td>
            <td className="border p-1">
              <Form.Item
                name="t5nTEmlScSt"
                className="m-0"
              >
                <Input size="large" disabled={store.viewMode || store.allDisabled.t5nTEmlScSt.disabled}/>
              </Form.Item>
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              Occupation
            </td>
            <td className="border p-1">
              <Form.Item
                name="dsiwvNQLe5n"
                className="m-0"
              >
                <Input size="large" disabled={store.viewMode || store.allDisabled.dsiwvNQLe5n.disabled}/>
              </Form.Item>
            </td>
            <td className="border p-1">
              Date of Birth
            </td>
            <td className="border p-1">
              <Form.Item
                rules={[{type: 'object', required: true, message: 'Please select date!'}]}
                name="RbrUuKFSqkZ"
                className="m-0"
              >
                <DatePicker disabledDate={notTomorrow} size="large"
                            disabled={store.viewMode || store.allDisabled.RbrUuKFSqkZ.disabled}/>
              </Form.Item>
              <span style={{background: 'yellow'}}>{store.allDisabled.RbrUuKFSqkZ.warning}</span>
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              Age
            </td>
            <td className="border p-1">
              <Form.Item
                rules={[{type: 'number', required: false, message: 'Enter a valid age'}]}
                name="q7e7FOXKnOf"
                className="m-0"
              >
                <InputNumber size="large" disabled={store.viewMode || store.allDisabled.q7e7FOXKnOf.disabled}/>
              </Form.Item>
              <span style={{background: 'yellow'}}>{store.allDisabled.q7e7FOXKnOf.warning}</span>
            </td>
            <td className="border p-1">
              Sex
            </td>
            <td className="border p-1">
              {optionSets ? <Form.Item
                rules={[{required: true, message: 'Sex is required'}]}
                name="e96GB4CXyd3"
                className="m-0"
              >
                {optionSet('SX01', 'e96GB4CXyd3')}
              </Form.Item> : null}

            </td>
          </tr>
          <tr>
            <td className="border p-1">
              Place of Birth
            </td>
            <td className="border p-1">
              <Form.Item
                name="xNCSFrgdUgi"
                className="m-0"
              >
                <Input size="large" disabled={store.viewMode || store.allDisabled.xNCSFrgdUgi.disabled}/>
              </Form.Item>
            </td>
            <td className="border p-1">
              Date and time of death
            </td>
            <td className="border p-1">
              <Form.Item
                rules={[{type: 'object', required: true, message: 'Please select date and time of death!'}]}
                name="i8rrl8YWxLF"
                className="m-0"
              >
                <DatePicker disabledDate={notTomorrow} size="large" showTime format="YYYY-MM-DD HH:mm:ss"
                            placeholder="Select date and time of death"
                            disabled={store.viewMode || store.allDisabled.i8rrl8YWxLF.disabled}/>
              </Form.Item>
            </td>
          </tr>
          </tbody>
        </table>

        <table className="my-2 w-full border-collapse px-2">
          <tbody>
          <tr>
            <td colSpan={7} className="border p-1 text-lg">
              Frame A: Medical Data. Part 1 and 2
            </td>
          </tr>
          <tr>
            <td className="border p-1 w-1/4">
            </td>
            <td className="border p-1"/>
            <td className="border p-1"> Cause of death</td>
            <td className="border p-1"> Code</td>
            <td className="border p-1"> URI</td>
            <td className="border p-1">Time interval type from onset to death</td>
            <td className="border p-1">Time interval from onset to death</td>
          </tr>
          <tr>
            <td className="border p-1">Report disease or condition directly leading to death on line a</td>
            <td className="border p-1"> a</td>
            <td className="border p-1">
              <ICDField disabled={store.allDisabled.sfpqAeqKeyQ.disabled} next="Ylht9kCLSRW" form={form}
                        field="sfpqAeqKeyQ"
                        codeField="zD0E77W4rFs" uriField="k9xdBQzYMXo"/>
            </td>
            <td className="border p-1">
              <Form.Item
                name="zD0E77W4rFs"
                className="m-0"
              >
                <Input size="large" readOnly={true}
                       disabled={store.viewMode || store.allDisabled.zD0E77W4rFs.disabled}/>
              </Form.Item>
            </td>
            <td className="border p-1">
              <Form.Item
                name="k9xdBQzYMXo"
                className="m-0"
              >
                <Input readOnly={true} size="large"
                       disabled={store.viewMode || store.allDisabled.k9xdBQzYMXo.disabled}/>
              </Form.Item>
            </td>
            <td className="border p-1">
              {optionSets ? <Form.Item
                name="Ylht9kCLSRW"
                className="m-0"
              >
                {optionSet('TI01', 'Ylht9kCLSRW')}
              </Form.Item> : null}
            </td>
            <td className="border p-1">
              <Form.Item
                name="WkXxkKEJLsg"
                className="m-0"
              >
                <InputNumber min={1} size="large" disabled={store.viewMode || store.allDisabled.WkXxkKEJLsg.disabled}/>
              </Form.Item>
            </td>
          </tr>

          <tr>
            <td className="border p-1" rowSpan={3}>
              Report chain of events 'due to' (b to d) in order (if applicable)
            </td>
            <td className="border p-1">
              b
            </td>
            <td className="border p-1">
              <ICDField next="myydnkmLfhp" disabled={store.allDisabled.zb7uTuBCPrN.disabled} form={form}
                        field="zb7uTuBCPrN"
                        codeField="tuMMQsGtE69" uriField="yftBZ5bSEOb"/>
            </td>
            <td className="border p-1">
              <Form.Item
                name="tuMMQsGtE69"
                className="m-0"
              >
                <Input readOnly={true} size="large"
                       disabled={store.viewMode || store.allDisabled.tuMMQsGtE69.disabled}/>
              </Form.Item>
            </td>
            <td className="border p-1">
              <Form.Item
                name="yftBZ5bSEOb"
                className="m-0"
              >
                <Input readOnly={true} size="large"
                       disabled={store.viewMode || store.allDisabled.yftBZ5bSEOb.disabled}/>
              </Form.Item>
            </td>
            <td className="border p-1">
              {optionSets ? <Form.Item
                name="myydnkmLfhp"
                className="m-0"
              >
                {optionSet('TI01', 'myydnkmLfhp')}
              </Form.Item> : null}
            </td>
            <td className="border p-1">
              <Form.Item
                name="fleGy9CvHYh"
                className="m-0"
              >
                <InputNumber size="large" disabled={store.viewMode || store.allDisabled.fleGy9CvHYh.disabled}/>
              </Form.Item>
            </td>
          </tr>

          <tr>
            <td className="border p-1">
              c
            </td>
            <td className="border p-1">
              <ICDField next="aC64sB86ThG" disabled={store.allDisabled.QGFYJK00ES7.disabled} form={form}
                        field="QGFYJK00ES7"
                        codeField="C8n6hBilwsX" uriField="fJUy96o8akn"/>
            </td>

            <td className="border p-1">
              <Form.Item
                name="C8n6hBilwsX"
                className="m-0"
              >
                <Input readOnly={true} size="large"
                       disabled={store.viewMode || store.allDisabled.C8n6hBilwsX.disabled}/>
              </Form.Item>
            </td>
            <td className="border p-1">
              <Form.Item
                name="fJUy96o8akn"
                className="m-0"
              >
                <Input readOnly={true} size="large"
                       disabled={store.viewMode || store.allDisabled.fJUy96o8akn.disabled}/>
              </Form.Item>
            </td>
            <td className="border p-1">
              {optionSets ? <Form.Item
                name="aC64sB86ThG"
                className="m-0"
              >
                {optionSet('TI01', 'aC64sB86ThG')}
              </Form.Item> : null}
            </td>
            <td className="border p-1">
              <Form.Item
                name="hO8No9fHVd2"
                className="m-0"
              >
                <InputNumber size="large" disabled={store.viewMode || store.allDisabled.hO8No9fHVd2.disabled}/>
              </Form.Item>
            </td>
          </tr>

          <tr>
            <td className="border p-1">
              d
            </td>
            <td className="border p-1">
              <ICDField next="cmZrrHfTxW3" disabled={store.allDisabled.CnPGhOcERFF.disabled} form={form}
                        field="CnPGhOcERFF"
                        codeField="IeS8V8Yf40N" uriField="S53kx50gjQn"/>
            </td>
            <td className="border p-1">
              <Form.Item
                name="IeS8V8Yf40N"
                className="m-0"
              >
                <Input readOnly={true} size="large"
                       disabled={store.viewMode || store.allDisabled.IeS8V8Yf40N.disabled}/>
              </Form.Item>
            </td>
            <td className="border p-1">
              <Form.Item
                name="S53kx50gjQn"
                className="m-0"
              >
                <Input readOnly={true} size="large"
                       disabled={store.viewMode || store.allDisabled.S53kx50gjQn.disabled}/>
              </Form.Item>
            </td>
            <td className="border p-1">

              {optionSets ? <Form.Item
                name="cmZrrHfTxW3"
                className="m-0"
              >
                {optionSet('TI01', 'cmZrrHfTxW3')}
              </Form.Item> : null}
            </td>
            <td className="border p-1">
              <Form.Item
                name="eCVDO6lt4go"
                className="m-0"
              >
                <InputNumber size="large" disabled={store.viewMode || store.allDisabled.eCVDO6lt4go.disabled}/>
              </Form.Item>
            </td>
          </tr>
          <tr>
            <td className="border p-1" colSpan={2}>
              State the underlying cause
            </td>
            <td className="border p-1" colSpan={2}>
              <ICDField next="xeE5TQLvucB" disabled={store.allDisabled.QTKk2Xt8KDu.disabled} form={form}
                        field="QTKk2Xt8KDu"
                        codeField="sJhOdGLD5lj" uriField="L97MrANAav9"/>
            </td>
            <td className="border p-1" colSpan={1}>
              <Form.Item
                name="sJhOdGLD5lj"
                className="m-0"
              >
                <Input readOnly={true} size="large"
                       disabled={store.viewMode || store.allDisabled.sJhOdGLD5lj.disabled}/>
              </Form.Item>
            </td>
            <td className="border p-1" colSpan={2}>
              <Form.Item
                name="L97MrANAav9"
                className="m-0"
              >
                <Input readOnly={true} size="large"
                       disabled={store.viewMode || store.allDisabled.L97MrANAav9.disabled}/>
              </Form.Item>
            </td>
          </tr>
          <tr>
            <td className="border p-1" colSpan={2}>
              Other significant conditions contributing to death (time intervals can be included in brackets after the
              condition)
            </td>
            <td className="border p-1" colSpan={2}>
              <ICDField disabled={store.allDisabled.xeE5TQLvucB.disabled} form={form} field="xeE5TQLvucB"
                        codeField="ctbKSNV2cg7"
                        uriField="T4uxg60Lalw"/>
            </td>
            <td className="border p-1" colSpan={1}>
              <Form.Item
                name="ctbKSNV2cg7"
                className="m-0"
              >
                <Input readOnly={true} size="large"
                       disabled={store.viewMode || store.allDisabled.ctbKSNV2cg7.disabled}/>
              </Form.Item>
            </td>
            <td className="border p-1" colSpan={2}>
              <Form.Item
                name="T4uxg60Lalw"
                className="m-0"
              >
                <Input readOnly={true} size="large"
                       disabled={store.viewMode || store.allDisabled.T4uxg60Lalw.disabled}/>
              </Form.Item>
            </td>
          </tr>
          </tbody>
        </table>


        <table className="my-2 w-full border-collapse px-2">
          <tbody>
          <tr>
            <td colSpan={2} className="border p-1 text-lg">
              Frame B: Other medical data
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              Was surgery performed within the last 4 weeks?
            </td>
            <td className="border p-1">
              {optionSets ?
                <Form.Item
                  name="Kk0hmrJPR90"
                  className="m-0"
                >
                  {optionSet('YN01', 'Kk0hmrJPR90')}
                </Form.Item> : null}
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              If yes please specify date of surgery
            </td>
            <td className="border p-1">
              <Form.Item
                name="j5TIQx3gHyF"
                className="m-0"
                rules={[{type: 'object', required: false, message: 'Please select date!'}]}
              >
                <DatePicker disabledDate={notTomorrow} size="large"
                            disabled={store.viewMode || store.allDisabled.j5TIQx3gHyF.disabled}/>
              </Form.Item>
            </td>
          </tr>

          <tr>
            <td className="border p-1">
              If yes please specify reason for surgery (disease or condition)
            </td>
            <td className="border p-1">
              <Form.Item
                name="JhHwdQ337nn"
                className="m-0"
              >
                <Input size="large" disabled={store.viewMode || store.allDisabled.JhHwdQ337nn.disabled}/>
              </Form.Item>
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              Was an autopsy requested?
            </td>
            <td className="border p-1">
              {optionSets ? <Form.Item
                name="jY3K6Bv4o9Q"
                className="m-0"
              >
                {optionSet('YN01', 'jY3K6Bv4o9Q')}
              </Form.Item> : null}
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              If yes were the findings used in the certification?
            </td>
            <td className="border p-1">
              {optionSets ?
                <Form.Item
                  name="UfG52s4YcUt"
                  className="m-0"
                >
                  {optionSet('YN01', 'UfG52s4YcUt')}
                </Form.Item> : null}
            </td>
          </tr>
          </tbody>
        </table>


        <table className="my-2 w-full border-collapse px-2">
          <tbody>
          <tr>
            <td colSpan={6} className="border p-1 text-lg">
              Manner of death
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              Disease
            </td>
            <td className="border p-1">
              <Form.Item
                name="FhHPxY16vet"
                className="m-0"
                valuePropName="checked"
              >
                <Checkbox disabled={store.viewMode || store.allDisabled.FhHPxY16vet.disabled}>Yes</Checkbox>
              </Form.Item>
            </td>
            <td className="border p-1">
              Assault
            </td>
            <td className="border p-1">
              <Form.Item
                name="KsGOxFyzIs1"
                className="m-0"
                valuePropName="checked"
              >
                <Checkbox disabled={store.viewMode || store.allDisabled.KsGOxFyzIs1.disabled}>Yes</Checkbox>
              </Form.Item>
            </td>
            <td className="border p-1">
              Could not be determined
            </td>
            <td className="border p-1">
              <Form.Item
                name="b4yPk98om7e"
                className="m-0"
                valuePropName="checked"
              >
                <Checkbox disabled={store.viewMode || store.allDisabled.b4yPk98om7e.disabled}>Yes</Checkbox>
              </Form.Item>
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              Accident
            </td>
            <td className="border p-1">
              <Form.Item
                name="gNM2Yhypydx"
                className="m-0"
                valuePropName="checked"
              >
                <Checkbox disabled={store.viewMode || store.allDisabled.gNM2Yhypydx.disabled}>Yes</Checkbox>
              </Form.Item>
            </td>
            <td className="border p-1">
              Legal intervention
            </td>
            <td className="border p-1">
              <Form.Item
                name="tYH7drlbNya"
                className="m-0"
                valuePropName="checked"
              >
                <Checkbox disabled={store.viewMode || store.allDisabled.tYH7drlbNya.disabled}>Yes</Checkbox>
              </Form.Item>
            </td>
            <td className="border p-1">
              Pending investigation
            </td>
            <td className="border p-1">
              <Form.Item
                name="fQWuywOaoN2"
                className="m-0"
                valuePropName="checked"
              >
                <Checkbox disabled={store.viewMode || store.allDisabled.fQWuywOaoN2.disabled}>Yes</Checkbox>
              </Form.Item>
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              Intentional self-harm
            </td>
            <td className="border p-1">
              <Form.Item
                name="wX3i3gkTG4m"
                className="m-0"
                valuePropName="checked"
              >
                <Checkbox disabled={store.viewMode || store.allDisabled.wX3i3gkTG4m.disabled}>Yes</Checkbox>
              </Form.Item>
            </td>
            <td className="border p-1">
              War
            </td>
            <td className="border p-1">
              <Form.Item
                name="xDMX2CJ4Xw3"
                className="m-0"
                valuePropName="checked"
              >
                <Checkbox disabled={store.viewMode || store.allDisabled.xDMX2CJ4Xw3.disabled}>Yes</Checkbox>
              </Form.Item>
            </td>
            <td className="border p-1">
              Unknown
            </td>
            <td className="border p-1">
              <Form.Item
                name="o1hG9vr0peF"
                className="m-0"
                valuePropName="checked"
              >
                <Checkbox disabled={store.viewMode || store.allDisabled.o1hG9vr0peF.disabled}>Yes</Checkbox>
              </Form.Item>
            </td>
          </tr>
          <tr>
            <td className="border p-1" colSpan={2}>
              If external cause or poisoning
            </td>
            <td className="border p-1">
              <Form.Item
                name="AZSlwlRAFig"
                className="m-0"
                valuePropName="checked"
              >
                <Checkbox disabled={store.viewMode || store.allDisabled.AZSlwlRAFig.disabled}>Yes</Checkbox>
              </Form.Item>
            </td>
            <td className="border p-1">
              Date of injury
            </td>
            <td className="border p-1" colSpan={2}>
              <Form.Item
                name="U18Tnfz9EKd"
                className="m-0"
                rules={[{type: 'object', required: false, message: 'Please select date of injury'}]}
              >
                <DatePicker disabledDate={notTomorrow} size="large"
                            disabled={store.viewMode || store.allDisabled.U18Tnfz9EKd.disabled}/>
              </Form.Item>
            </td>
          </tr>
          <tr>
            <td className="border p-1" colSpan={3}>
              Please describe how external cause occurred (If poisoning please specify poisoning agent)
            </td>
            <td className="border p-1" colSpan={3}>
              <Form.Item
                name="DKlOhZJOCrX"
                className="m-0"
              >
                <Input size="large" disabled={store.viewMode || store.allDisabled.DKlOhZJOCrX.disabled}/>
              </Form.Item>
            </td>
          </tr>
          <tr>
            <td className="border p-1" colSpan={3}>
              Place of occurrence of the external cause
            </td>
            <td className="border p-1" colSpan={3}>
              <Form.Item
                name="kGIDD5xIeLC"
                className="m-0"
              >
                <Input size="large" disabled={store.viewMode || store.allDisabled.kGIDD5xIeLC.disabled}/>
              </Form.Item>
            </td>
          </tr>
          </tbody>
        </table>

        <table className="my-2 w-full border-collapse px-2">
          <tbody>
          <tr>
            <td colSpan={4} className="border p-1 text-lg">
              Fetal or infant death
            </td>
          </tr>
          <tr>
            <td className="border p-1" colSpan={2}>
              Multiple pregnancy
            </td>
            <td className="border p-1" colSpan={2}>
              {optionSets ? <Form.Item
                name="V4rE1tsj5Rb"
                className="m-0"
              >
                {optionSet('YN01', 'V4rE1tsj5Rb')}
              </Form.Item> : null}
            </td>
          </tr>
          <tr>
            <td className="border p-1" colSpan={2}>
              Stillborn?
            </td>
            <td className="border p-1" colSpan={2}>
              {optionSets ? <Form.Item
                name="ivnHp4M4hFF"
                className="m-0"
              >
                {optionSet('YN01', 'ivnHp4M4hFF')}
              </Form.Item> : null}
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              If death within 24 hrs specify the number of hours survived
            </td>
            <td className="border p-1">
              <Form.Item
                name="jf9TogeSZpk"
                className="m-0"
              >
                <InputNumber max={24} size="large" disabled={store.viewMode || store.allDisabled.jf9TogeSZpk.disabled}/>
              </Form.Item>
            </td>
            <td className="border p-1">
              Birth weight (in grams)
            </td>
            <td className="border p-1">
              <Form.Item
                name="xAWYJtQsg8M"
                className="m-0"
              >
                <InputNumber size="large" disabled={store.viewMode || store.allDisabled.xAWYJtQsg8M.disabled}/>
              </Form.Item>
              {form.getFieldValue('xAWYJtQsg8M') < 100 && form.getFieldValue('xAWYJtQsg8M') > 10000 ?
                <span style={{background: 'yellow'}}>Weight should be between 100 and 1000 grams</span> : null}
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              Number of completed weeks of pregnancy
            </td>
            <td className="border p-1">
              <Form.Item
                name="lQ1Byr04JTx"
                className="m-0"
              >
                <InputNumber size="large" disabled={store.viewMode || store.allDisabled.lQ1Byr04JTx.disabled}/>
              </Form.Item>
              {form.getFieldValue('lQ1Byr04JTx') < 10 && form.getFieldValue('lQ1Byr04JTx') > 55 ?
                <span style={{background: 'yellow'}}>completed weeks should be between 10 and 54 weeks</span> : null}
            </td>
            <td className="border p-1">
              Age of mother (years)
            </td>
            <td className="border p-1">
              <Form.Item
                name="DdfDMFW4EJ9"
                className="m-0"
              >
                <InputNumber min={1} size="large" disabled={store.viewMode || store.allDisabled.DdfDMFW4EJ9.disabled}/>
              </Form.Item>
              {form.getFieldValue('DdfDMFW4EJ9') < 10 && form.getFieldValue('DdfDMFW4EJ9') > 60 ?
                <span style={{background: 'yellow'}}>Mothers age is not between 10 and 60 years</span> : null}
            </td>
          </tr>

          <tr>
            <td className="border p-1" colSpan={2}>
              If the death was perinatal, please state conditions of mother that affected the fetus and newborn
            </td>
            <td className="border p-1" colSpan={2}>
              <Form.Item
                name="GFVhltTCG8b"
                className="m-0"
              >
                <Input size="large" disabled={store.viewMode || store.allDisabled.GFVhltTCG8b.disabled}/>
              </Form.Item>
            </td>
          </tr>
          </tbody>
        </table>


        <table className="my-2 w-full border-collapse px-2">
          <tbody>
          <tr>
            <td className="border p-1 text-lg">
              For women, was the deceased pregnant?
            </td>
            <td className="border p-1">
              {optionSets ? <Form.Item
                name="zcn7acUB6x1"
                className="m-0"
              >
                {optionSet('YN01', 'zcn7acUB6x1')}
              </Form.Item> : null}
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              At what point?
            </td>
            <td className="border p-1">
              <Form.Item
                name="KpfvNQSsWIw"
                className="m-0"
              >
                <Input size="large" disabled={store.viewMode || store.allDisabled.KpfvNQSsWIw.disabled}/>
              </Form.Item>
            </td>
          </tr>

          <tr>
            <td className="border p-1">
              Did the pregnancy contribute to death?
            </td>
            <td className="border p-1">
              {optionSets ? <Form.Item
                name="AJAraEcfH63"
                className="m-0"
              >
                {optionSet('YN01', 'AJAraEcfH63')}
              </Form.Item> : null}
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              Referred from (level of care)
            </td>
            <td className="border p-1">
              <Form.Item
                name="RJhbkjYrODG"
                className="m-0"
              >
                <Input size="large" disabled={store.viewMode || store.allDisabled.RJhbkjYrODG.disabled}/>
              </Form.Item>
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              Parity
            </td>
            <td className="border p-1">
              <Form.Item
                name="ymyLrfEcYkD"
                className="m-0"
              >
                <Input size="large" disabled={store.viewMode || store.allDisabled.ymyLrfEcYkD.disabled}/>
              </Form.Item>
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              Mode of delivery
            </td>
            <td className="border p-1">
              {optionSets ? <Form.Item
                name="K5BDPJQk1BP"
                className="m-0"
              >
                {optionSet('MD', 'K5BDPJQk1BP')}
              </Form.Item> : null}
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              Place of delivery
            </td>
            <td className="border p-1">
              {optionSets ? <Form.Item
                name="Z41di0TRjIu"
                className="m-0"
              >
                {optionSet('PD01', 'Z41di0TRjIu')}
              </Form.Item> : null}
            </td>
          </tr>
          <tr>
            <td className="border p-1">
              Delivered by skilled attendant
            </td>
            <td className="border p-1">
              {optionSets ? <Form.Item
                name="uaxjt0inPNF"
                className="m-0"
              >
                {optionSet('YN01', 'uaxjt0inPNF')}
              </Form.Item> : null}
            </td>
          </tr>
          </tbody>
        </table>
      </Card>
    </Form>
  );
});
