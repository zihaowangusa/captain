import { r as reactExports, j as jsxRuntimeExports } from "./index-ChOFda4U.js";
import { u } from "./goober.modern-CbjcZCjf.js";
import { F as Flex, T as Typography } from "./index-dCUuoEEg.js";
import { a as Card } from "./index-BESt4OEY.js";
import { D as Descriptions, L as List, T as Tag, F as ForwardTable, C as Checkbox } from "./index-CgYPFPk1.js";
import "./button-TYsta6CW.js";
import "./addEventListener-BZHPwQnW.js";
const mockData = {
  appointment_info: {
    date: "00:00AM MONDAY, JAN 31, 2024",
    provider: "Dr.Yao",
    time: "0h 00min",
    note: "",
    patient_name: "ALEXANDER WANG",
    patient_gender: "M",
    patient_age: 100
  },
  medical_alert: [],
  treatment_info: {
    scheduled: [
      {
        time: "Today",
        info: "Tx: #19 imp package deal, Visit 1",
        treatment: [
          {
            tooth: 19,
            surface: "",
            code: "D4265",
            procedure: "Materials to Aid Regeneration"
          },
          {
            tooth: 19,
            surface: "",
            code: "D6010",
            procedure: "Implant Placement"
          }
        ]
      }
    ],
    unscheduled: [
      {
        time: "2024-06-16 00:00:00",
        info: "Tx: #19 imp package deal, Visit 2",
        treatment: [
          {
            tooth: 19,
            surface: "",
            code: "D6057",
            procedure: "Implant Crown - Custom Abutment"
          },
          {
            tooth: 19,
            surface: "",
            code: "D6059",
            procedure: "Implant Crown - Procelain/HNM Crown"
          }
        ]
      },
      {
        time: "2024-06-26 00:00:00",
        info: "Tx: #19 imp package deal, Visit 3",
        treatment: [
          {
            tooth: 19,
            surface: "",
            code: "imcrdivy",
            procedure: "Implant Crown Delivery"
          }
        ]
      }
    ]
  },
  prophy: ["prophy", "x-ray", "polish"],
  prescription: ["ibuprofen-600", "clindamycin-300", "peridex"],
  upcoming_appointment: [
    {
      date: "MONDAY, JAN 31, 2024",
      time: "00:00 AM",
      provider: "DR.YAO",
      reason: "Prophy, TopFl, PerioEx, Recall"
    }
  ]
};
const Checkout = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const { Text } = Typography;
  const [data, setData] = reactExports.useState(mockData);
  const treatment_column = [
    {
      title: "TOOTH",
      dataIndex: "tooth",
      key: "tooth"
    },
    {
      title: "SURFACE",
      dataIndex: "surface",
      key: "surface"
    },
    {
      title: "CODE",
      dataIndex: "code",
      key: "code"
    },
    {
      title: "PROCEDURE",
      dataIndex: "procedure",
      key: "procedure"
    }
  ];
  const appointment_column = [
    {
      title: "DATE",
      dataIndex: "date",
      key: "date"
    },
    {
      title: "TIME",
      dataIndex: "time",
      key: "time"
    },
    {
      title: "PROVIDER",
      dataIndex: "provider",
      key: "provider"
    },
    {
      title: "REASON",
      dataIndex: "reason",
      key: "reason"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Flex,
    {
      vertical: true,
      justify: "space-between",
      gap: "middle",
      className: u`
          .ant-card {
            border-radius: 20px;
            border-width: 2px;
          }
        `,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "APPOINTMENT INFORMATION", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Descriptions,
          {
            title: "",
            items: [
              {
                key: "date",
                label: "APPOINTMENT TIME/DATE",
                children: ((_a = data == null ? void 0 : data.appointment_info) == null ? void 0 : _a.date) || ""
              },
              {
                key: "provider",
                label: "PROVIDER",
                children: ((_b = data == null ? void 0 : data.appointment_info) == null ? void 0 : _b.provider) || ""
              },
              {
                key: "time",
                label: "SCHEDULED TIME",
                children: ((_c = data == null ? void 0 : data.appointment_info) == null ? void 0 : _c.time) || ""
              },
              {
                key: "patient",
                label: "PATIENT INFO",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Descriptions,
                  {
                    title: "",
                    layout: "vertical",
                    size: "small",
                    colon: false,
                    items: [
                      {
                        key: "name",
                        label: "NAME",
                        children: ((_d = data == null ? void 0 : data.appointment_info) == null ? void 0 : _d.patient_name) || ""
                      },
                      {
                        key: "age",
                        label: "AGE",
                        children: ((_e = data == null ? void 0 : data.appointment_info) == null ? void 0 : _e.patient_age) || ""
                      },
                      {
                        key: "gender",
                        label: "GENDER",
                        children: ((_f = data == null ? void 0 : data.appointment_info) == null ? void 0 : _f.patient_gender) || ""
                      }
                    ],
                    labelStyle: { color: "#000000", fontWeight: 500 }
                  }
                )
              },
              {
                key: "note",
                label: "NOTE",
                children: ((_g = data == null ? void 0 : data.appointment_info) == null ? void 0 : _g.note) || ""
              }
            ],
            labelStyle: { color: "#000000", fontWeight: 500 }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "MEDICAL ALERTS", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          List,
          {
            header: null,
            footer: null,
            dataSource: (data == null ? void 0 : data.medical_alert) || [],
            size: "small",
            style: { height: ((_h = data == null ? void 0 : data.medical_alert) == null ? void 0 : _h.length) ? 100 : 0 }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "TREATMENT INFORMATION", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { vertical: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tag,
              {
                color: "success",
                style: {
                  fontSize: 18,
                  width: 220,
                  fontWeight: "bold",
                  textAlign: "center"
                },
                children: "Scheduled Procedure"
              }
            ),
            (((_i = data == null ? void 0 : data.treatment_info) == null ? void 0 : _i.scheduled) || []).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              ForwardTable,
              {
                columns: treatment_column,
                dataSource: (item == null ? void 0 : item.treatment) || [],
                title: () => /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { strong: true, children: (item == null ? void 0 : item.time) || "" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: " - " + (item == null ? void 0 : item.info) })
                ] }),
                pagination: false
              }
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { vertical: true, style: { marginTop: 50 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tag,
              {
                color: "warning",
                style: {
                  fontSize: 18,
                  width: 220,
                  fontWeight: "bold",
                  textAlign: "center"
                },
                children: "Unscheduled Procedure"
              }
            ),
            (((_j = data == null ? void 0 : data.treatment_info) == null ? void 0 : _j.unscheduled) || []).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              ForwardTable,
              {
                columns: treatment_column,
                dataSource: (item == null ? void 0 : item.treatment) || [],
                title: () => /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { strong: true, children: (item == null ? void 0 : item.time) || "" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: " - " + (item == null ? void 0 : item.info) })
                ] }),
                pagination: false
              }
            ))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "PROPHY CHECKLIST", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox.Group,
          {
            options: [
              { label: "Prophy", value: "prophy" },
              { label: "Exam", value: "exam" },
              { label: "X-Ray", value: "x-ray" },
              { label: "Polish", value: "polish" },
              { label: "Floride", value: "floride" }
            ],
            value: (data == null ? void 0 : data.prophy) || []
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "PRESCRIPTION", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox.Group,
          {
            options: [
              { label: "Amox 500", value: "amox-500" },
              { label: "Ibuprofen 600", value: "ibuprofen-600" },
              { label: "Prevident", value: "prevident" },
              { label: "Clindamycin 300", value: "clindamycin-300" },
              { label: "Halcion", value: "halcion" },
              { label: "Peridex", value: "peridex" },
              { label: "Ice Bag", value: "ice-bag" }
            ],
            value: (data == null ? void 0 : data.prescription) || []
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "UPCOMING APPOINTMENTS", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ForwardTable,
          {
            columns: appointment_column,
            dataSource: (data == null ? void 0 : data.upcoming_appointment) || [],
            pagination: false
          }
        ) })
      ]
    }
  ) });
};
export {
  Checkout as default
};
