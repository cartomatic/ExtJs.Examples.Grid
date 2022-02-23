//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('GridExamples.view.localGrid.LocalGrid', {
        extend: 'Ext.Panel',

        xtype: 'local-grid',

        requires: [
            'GridExamples.view.localGrid.Icons',
            'GridExamples.view.localGrid.LocalGridController',
            'GridExamples.view.localGrid.LocalGridViewModel',
            'Ext.grid.plugin.RowExpander',
            'Ext.grid.plugin.CellEditing',
            'Ext.grid.rowedit.Plugin',
            'Ext.grid.plugin.RowDragDrop',
            'mh.plugin.grid.DragDrop'
        ],

        controller: 'local-grid',
        viewModel: {
            type: 'local-grid'
        },

        iconCls: mh.FontIconsDictionary.getIcon('lgViewHeader'),

        padding: 15,

        bind: {
            title: '{localization.viewName}'
        },

        layout: 'fit',

        items: [
            {
                xtype: 'tabpanel',
                tabBarPosition: 'left',
                tabRotation: 'none',
                layout: {
                    type: 'card',
                    animation: 'fade'
                },
                defaults: {
                    xtype: 'panel'
                },
                items: [
                    {
                        tab: {
                            iconCls: mh.FontIconsDictionary.getIcon('lgGrid'),
                            iconAlign: 'left',
                            bind: {
                                title: '{localization.stdGrid}'
                            }
                        },
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'panel',
                                iconCls: mh.FontIconsDictionary.getIcon('lgGrid'),
                                bind: {
                                    title: '{localization.stdGrid}'
                                },
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'grid',
                                        bind: {
                                            store: '{gridStore}'
                                        },
                                        columns: [
                                            { text: 'txt', dataIndex: 'txt', flex: 1 },
                                            { text: 'date', dataIndex: 'date', flex: 1 },
                                            { text: 'int', dataIndex: 'int', flex: 1 },
                                            { text: 'number', dataIndex: 'number', flex: 1 },
                                            { text: 'bool', dataIndex: 'bool', flex: 1 }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        tab: {
                            iconCls: mh.FontIconsDictionary.getIcon('lgColTypes'),
                            iconAlign: 'left',
                            bind: {
                                title: '{localization.colTypes}'
                            }
                        },
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'panel',
                                iconCls: mh.FontIconsDictionary.getIcon('lgColTypes'),
                                bind: {
                                    title: '{localization.colTypes}'
                                },
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'grid',
                                        bind: {
                                            store: '{gridStore}'
                                        },
                                        columns: [
                                            { xtype: 'rownumberer'},
                                            { text: 'txt', dataIndex: 'txt', flex: 1, renderer: (v) => `adjusted_${v}` },
                                            { xtype: 'datecolumn', text: 'date column', dataIndex: 'date', flex: 1, format: 'Y-m-d' },
                                            { text: 'column with renderer', dataIndex: 'int', flex: 1, renderer: (v) => `<span style="color:${v%2 === 0 ? 'red' : 'green'}">${v}</span>`, cell: { xtype:'gridcell', encodeHtml:false } },
                                            { xtype: 'numbercolumn', text: 'number column with renderer', dataIndex: 'number', flex: 1, renderer: Ext.util.Format.usMoney },
                                            { xtype: 'numbercolumn', text: 'number column with formatter', dataIndex: 'number', flex: 1, format: '0,0.00' },
                                            { xtype: 'booleancolumn', text: 'bool column', dataIndex: 'bool', flex: 1 },
                                            { xtype: 'checkcolumn', text: 'check column', dataIndex: 'bool', flex: 1 },
                                            { xtype: 'templatecolumn', text: 'template column', tpl: '{txt} ({bool})', flex: 1 }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        tab: {
                            iconCls: mh.FontIconsDictionary.getIcon('lgActionColumn'),
                            iconAlign: 'left',
                            bind: {
                                title: '{localization.actionCol}'
                            }
                        },
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'panel',
                                iconCls: mh.FontIconsDictionary.getIcon('lgActionColumn'),
                                bind: {
                                    title: '{localization.actionCol}'
                                },
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'grid',
                                        reference: 'actionGrid',
                                        bind: {
                                            store: '{gridStore}'
                                        },
                                        columns: [
                                            { xtype: 'rownumberer'},
                                            { text: 'txt', dataIndex: 'txt', flex: 1, renderer: (v) => `adjusted_${v}` },
                                            { xtype: 'datecolumn', text: 'date', dataIndex: 'date', flex: 1, format: 'Y-m-d' },
                                            { text: 'int', dataIndex: 'int', flex: 1, renderer: (v) => `<span style="color:${v%2 === 0 ? 'red' : 'green'}">${v}</span>`, cell: { xtype:'gridcell', encodeHtml:false } },
                                            { xtype: 'numbercolumn', text: 'number column with renderer', dataIndex: 'number', flex: 1, renderer: Ext.util.Format.usMoney },
                                            { xtype: 'checkcolumn', text: 'check column', dataIndex: 'bool', flex: 1 },
                                            {
                                                width: 60,
                                                text: 'tool',
                                                cell: {
                                                    tools: {
                                                        refresh: 'onRefreshBtnClicked'
                                                    }
                                                }
                                            },
                                            {
                                                width: 120,
                                                text: 'widget',
                                                cell: {
                                                    xtype: 'widgetcell',
                                                    bind: '{record.number}',
                                                    widget: {
                                                        xtype: 'sliderfield',
                                                        minValue: 0,
                                                        maxValue: 100,
                                                        increment: 0.05,
                                                        listeners: {
                                                            change: 'onSliderChange'
                                                        }
                                                    },
                                                    exposeExtraEvents: true,
                                                    listeners: {
                                                        recordset: 'onSliderRecordSet'
                                                    }
                                                }
                                            },
                                            {
                                                width: 130,
                                                text: 'widget',
                                                cell: {
                                                    xtype: 'widgetcell',
                                                    widget: {
                                                        xtype: 'button',
                                                        iconCls: mh.FontIconsDictionary.getIcon('lgDarkSide'),
                                                        text: 'Star Wars',
                                                        handler: 'onStarWarsBtnClicked'
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        tab: {
                            iconCls: mh.FontIconsDictionary.getIcon('lgLockingGrid'),
                            iconAlign: 'left',
                            bind: {
                                title: '{localization.lockingGrid}'
                            }
                        },
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'panel',
                                iconCls: mh.FontIconsDictionary.getIcon('lgLockingGrid'),
                                bind: {
                                    title: '{localization.lockingGrid}'
                                },
                                layout: 'fit',
                                items: [
                                    {
                                        // xtype: 'grid',
                                        xtype: 'lockedgrid',
                                        bind: {
                                            store: '{gridStore}'
                                        },
                                        columns: [
                                            { xtype: 'rownumberer'},
                                            { text: 'txt', dataIndex: 'txt', width: 250, renderer: (v) => `adjusted_${v}`, locked: true },
                                            { xtype: 'datecolumn', text: 'date column', dataIndex: 'date', width: 250, format: 'Y-m-d' },
                                            { text: 'column with renderer', dataIndex: 'int', width: 250, renderer: (v) => `<span style="color:${v%2 === 0 ? 'red' : 'green'}">${v}</span>`, cell: { xtype:'gridcell', encodeHtml:false } },
                                            { xtype: 'numbercolumn', text: 'number column with renderer', dataIndex: 'number', width: 250, renderer: Ext.util.Format.usMoney },
                                            { xtype: 'numbercolumn', text: 'number column with formatter', dataIndex: 'number', width: 250, format: '0,0.00' },
                                            { xtype: 'booleancolumn', text: 'bool column', dataIndex: 'bool', width: 250 },
                                            { xtype: 'checkcolumn', text: 'check column', dataIndex: 'bool', width: 250 },
                                            { xtype: 'templatecolumn', text: 'template column', tpl: '{txt} ({bool})', width: 250 }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },

                    {
                        tab: {
                            iconCls: mh.FontIconsDictionary.getIcon('lgRowExpander'),
                            iconAlign: 'left',
                            bind: {
                                title: '{localization.rowExpander}'
                            }
                        },
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'panel',
                                iconCls: mh.FontIconsDictionary.getIcon('lgRowExpander'),
                                bind: {
                                    title: '{localization.rowExpander}'
                                },
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'grid',
                                        plugins: {
                                            rowexpander: true
                                        },
                                        itemConfig: {
                                            body: {
                                                tpl: '<div>Text: {txt}</div>' +
                                                    '<div>Last Updated: {date:date("Y-m-d g:ia")}</div>' +
                                                    '<div style="margin-top: 1em;">' +
                                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar, enim ac gravida fermentum, ex eros volutpat neque, ultricies aliquet urna urna et libero. Vestibulum maximus interdum purus, quis viverra est vulputate et. Cras eleifend, massa vel finibus congue, velit justo venenatis odio, sed volutpat ex eros et nisi. Proin at euismod eros. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur quam velit, id fringilla nisl mattis vitae. Nunc interdum urna eros, eget scelerisque orci fringilla in.' +
                                                    '</div>'
                                            }
                                        },
                                        bind: {
                                            store: '{gridStore}'
                                        },
                                        columns: [
                                            { xtype: 'rownumberer'},
                                            { text: 'txt', dataIndex: 'txt', flex: 1, renderer: (v) => `adjusted_${v}` },
                                            { xtype: 'datecolumn', text: 'date column', dataIndex: 'date', flex: 1, format: 'Y-m-d' },
                                            { text: 'int', dataIndex: 'int', flex: 1 },
                                            { xtype: 'numbercolumn', text: 'number column with renderer', dataIndex: 'number', flex: 1, renderer: Ext.util.Format.usMoney },
                                            { xtype: 'booleancolumn', text: 'bool column', dataIndex: 'bool', flex: 1 },
                                            { xtype: 'checkcolumn', text: 'check column', dataIndex: 'bool', flex: 1 },
                                            { xtype: 'templatecolumn', text: 'template column', tpl: '{txt} ({bool})', flex: 1 }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },

                    {
                        tab: {
                            iconCls: mh.FontIconsDictionary.getIcon('lgCellEditor'),
                            iconAlign: 'left',
                            bind: {
                                title: '{localization.cellEditor}'
                            }
                        },
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'panel',
                                iconCls: mh.FontIconsDictionary.getIcon('lgCellEditor'),
                                bind: {
                                    title: '{localization.cellEditor}'
                                },
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'grid',
                                        plugins: {
                                            gridcellediting: {
                                                selectOnEdit: true
                                            }
                                        },

                                        selectable: {
                                            rows: false,
                                            cells: true
                                        },

                                        bind: {
                                            store: '{gridStore}'
                                        },
                                        columns: [
                                            { xtype: 'rownumberer'},
                                            {
                                                text: 'txt', dataIndex: 'txt', flex: 1, renderer: (v) => `adjusted_${v}`,
                                                editor:{
                                                    xtype: 'textfield'
                                                }
                                            },
                                            {
                                                xtype: 'datecolumn', text: 'date column', dataIndex: 'date', flex: 1, format: 'Y-m-d',
                                                editor: {
                                                    field: {
                                                        xtype: 'datepickerfield',
                                                        dateFormat: 'Y-m-d'
                                                    }
                                                }
                                            },
                                            {
                                                text: 'int', dataIndex: 'int', flex: 1,
                                                editable: true
                                            },
                                            {
                                                xtype: 'numbercolumn', text: 'number column with renderer', dataIndex: 'number', flex: 1, renderer: Ext.util.Format.usMoney,
                                                editor: {
                                                    xtype: 'spinnerfield',
                                                    minValue: 0,
                                                    maxValue: 100,
                                                    stepValue: 10
                                                }
                                            },
                                            { xtype: 'booleancolumn', text: 'bool column', dataIndex: 'bool', flex: 1 },
                                            { xtype: 'checkcolumn', text: 'check column', dataIndex: 'bool', flex: 1 },
                                            { xtype: 'templatecolumn', text: 'template column', tpl: '{txt} ({bool})', flex: 1}
                                        ]

                                    }

                                ]
                            }
                        ]
                    },

                    {
                        tab: {
                            iconCls: mh.FontIconsDictionary.getIcon('lgRowEditor'),
                            iconAlign: 'left',
                            bind: {
                                title: '{localization.rowEditor}'
                            }
                        },
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'panel',
                                iconCls: mh.FontIconsDictionary.getIcon('lgRowEditor'),
                                bind: {
                                    title: '{localization.rowEditor}'
                                },
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'grid',
                                        plugins: {
                                            rowedit: {
                                                selectOnEdit: true
                                            }
                                        },

                                        selectable: {
                                            rows: false,
                                            cells: true
                                        },

                                        bind: {
                                            store: '{gridStore}'
                                        },
                                        columns: [
                                            { xtype: 'rownumberer'},
                                            {
                                                text: 'txt', dataIndex: 'txt', flex: 1, renderer: (v) => `adjusted_${v}`,
                                                editable: true
                                            },
                                            {
                                                xtype: 'datecolumn', text: 'date column', dataIndex: 'date', flex: 1, format: 'Y-m-d',
                                                editable: true
                                            },
                                            {
                                                text: 'int', dataIndex: 'int', flex: 1,
                                                editable: true
                                            },
                                            {
                                                xtype: 'numbercolumn', text: 'number column with renderer', dataIndex: 'number', flex: 1, renderer: Ext.util.Format.usMoney,
                                                editable: true
                                            },
                                            { xtype: 'booleancolumn', text: 'bool column', dataIndex: 'bool', flex: 1 },
                                            { xtype: 'checkcolumn', text: 'check column', dataIndex: 'bool', flex: 1 },
                                            { xtype: 'templatecolumn', text: 'template column', tpl: '{txt} ({bool})', flex: 1}
                                        ]

                                    }
                                ]
                            }
                        ]
                    },
                    {
                        tab: {
                            iconCls: mh.FontIconsDictionary.getIcon('lgDragAndDrop'),
                            iconAlign: 'left',
                            bind: {
                                title: '{localization.dragAndDrop}'
                            }
                        },
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'panel',
                                iconCls: mh.FontIconsDictionary.getIcon('lgDragAndDrop'),
                                bind: {
                                    title: '{localization.dragAndDrop}'
                                },
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'grid',
                                        plugins: {
                                            gridrowdragdrop: true
                                        },
                                        bind: {
                                            store: '{gridStore}'
                                        },
                                        columns: [
                                            { xtype: 'rownumberer'},
                                            { text: 'txt', dataIndex: 'txt', flex: 1, renderer: (v) => `adjusted_${v}` },
                                            { xtype: 'datecolumn', text: 'date column', dataIndex: 'date', flex: 1, format: 'Y-m-d' },
                                            { text: 'column with renderer', dataIndex: 'int', flex: 1, renderer: (v) => `<span style="color:${v%2 === 0 ? 'red' : 'green'}">${v}</span>`, cell: { xtype:'gridcell', encodeHtml:false } },
                                            { xtype: 'numbercolumn', text: 'number column with renderer', dataIndex: 'number', flex: 1, renderer: Ext.util.Format.usMoney },
                                            { xtype: 'numbercolumn', text: 'number column with formatter', dataIndex: 'number', flex: 1, format: '0,0.00' },
                                            { xtype: 'booleancolumn', text: 'bool column', dataIndex: 'bool', flex: 1 },
                                            { xtype: 'checkcolumn', text: 'check column', dataIndex: 'bool', flex: 1 },
                                            { xtype: 'templatecolumn', text: 'template column', tpl: '{txt} ({bool})', flex: 1 }
                                        ],
                                        listeners: {
                                            beforedrop: 'onBeforeDrop',
                                            drop: 'onDrop'
                                        }
                                    }
                                ]
                            }
                        ]
                    },

                    {
                        tab: {
                            iconCls: mh.FontIconsDictionary.getIcon('lgGroupingGrid'),
                            iconAlign: 'left',
                            bind: {
                                title: '{localization.groupingGrid}'
                            }
                        },
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'panel',
                                iconCls: mh.FontIconsDictionary.getIcon('lgGroupingGrid'),
                                bind: {
                                    title: '{localization.groupingGrid}'
                                },
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'grid',
                                        bind: {
                                            store: '{gridStoreGrouped}'
                                        },
                                        grouped: true,
                                        groupHeader: {
                                            tpl: 'Group: {name}'
                                        },
                                        columns: [
                                            { xtype: 'rownumberer'},
                                            { text: 'txt', dataIndex: 'txt', flex: 1, renderer: (v) => `adjusted_${v}` },
                                            { xtype: 'datecolumn', text: 'date column', dataIndex: 'date', flex: 1, format: 'Y-m-d' },
                                            { text: 'column with renderer', dataIndex: 'int', flex: 1, renderer: (v) => `<span style="color:${v%2 === 0 ? 'red' : 'green'}">${v}</span>`, cell: { xtype:'gridcell', encodeHtml:false } },
                                            { xtype: 'numbercolumn', text: 'number column with renderer', dataIndex: 'number', flex: 1, renderer: Ext.util.Format.usMoney },
                                            { xtype: 'numbercolumn', text: 'number column with formatter', dataIndex: 'number', flex: 1, format: '0,0.00' },
                                            { xtype: 'booleancolumn', text: 'bool column', dataIndex: 'bool', flex: 1 },
                                            { xtype: 'checkcolumn', text: 'check column', dataIndex: 'bool', flex: 1 },
                                            { xtype: 'templatecolumn', text: 'template column', tpl: '{txt} ({bool})', flex: 1 }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },

                    {
                        tab: {
                            iconCls: mh.FontIconsDictionary.getIcon('lgTreeGrid'),
                            iconAlign: 'left',
                            bind: {
                                title: '{localization.treeGrid}'
                            }
                        },
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'panel',
                                iconCls: mh.FontIconsDictionary.getIcon('lgTreeGrid'),
                                bind: {
                                    title: '{localization.treeGrid}'
                                },
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'tree',
                                        bind: {
                                            store: '{treeStore}'
                                        },
                                        columns: [
                                            { xtype: 'treecolumn', text: 'txt', dataIndex: 'txt', flex: 1, renderer: (v) => `adjusted_${v}` },
                                            { xtype: 'datecolumn', text: 'date column', dataIndex: 'date', flex: 1, format: 'Y-m-d' },
                                            { text: 'column with renderer', dataIndex: 'int', flex: 1, renderer: (v) => `<span style="color:${v%2 === 0 ? 'red' : 'green'}">${v}</span>`, cell: { xtype:'gridcell', encodeHtml:false } },
                                            { xtype: 'numbercolumn', text: 'number column with renderer', dataIndex: 'number', flex: 1, renderer: Ext.util.Format.usMoney },
                                            { xtype: 'numbercolumn', text: 'number column with formatter', dataIndex: 'number', flex: 1, format: '0,0.00' },
                                            { xtype: 'booleancolumn', text: 'bool column', dataIndex: 'bool', flex: 1 },
                                            { xtype: 'checkcolumn', text: 'check column', dataIndex: 'bool', flex: 1 },
                                            { xtype: 'templatecolumn', text: 'template column', tpl: '{txt} ({bool})', flex: 1 }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    });

}());