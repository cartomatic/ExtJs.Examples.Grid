//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    let data = [],
        treeData = [];


    Ext.define('GridExamples.view.localGrid.LocalGridViewModel', {
        extend: 'Ext.app.ViewModel',
        alias: 'viewmodel.local-grid',

        stores: {
            gridStore: {
                model: 'GridExamples.model.TestModel',
                data: data
            },
            gridStoreGrouped: {
                model: 'GridExamples.model.TestModel',
                groupField: 'grouper',
                data: data
            },
            treeStore: {
                type: 'tree',
                root: {
                    expanded: true,
                    children: treeData
                },
                rootVisible: false
            }
        }
    }, function(){
        //populate store data
        let grouper,
            node;

        for (let i = 0; i < 100; i++){
            if(i % 10 == 0){
                grouper = `<${i};${i+10})`;
                node = {
                    id: i+1,
                    txt: `txt_${i+1}`,
                    date: new Date(new Date().setMonth(100 - i+1)),
                    int: i+1,
                    number: Math.random() * 100,
                    bool: Math.random() > 0.5,
                    leaf: false,
                    children: []
                };
                treeData.push(node);
            }

            data.push({
                id: i+1,
                txt: `txt_${i+1}`,
                date: new Date(new Date().setMonth(100 - i+1)),
                int: i+1,
                number: Math.random() * 100,
                bool: Math.random() > 0.5,
                grouper: grouper
            });

            //tree data structure:
            // root: {
            //     children: [
            //         {
            //             //data...
            //             leaf: true
            //         },
            //         {
            //             //data...
            //             leaf: false,
            //             children: [
            //                 {
            //                     //data...
            //                     leaf: true
            //                 }
            //             ]
            //         }
            //     ]
            // }

            if(i % 10 != 0) {
                if(i % 10 === 5){
                    let nodeLvl2 = {
                        id: i+1,
                        txt: `txt_${i+1}`,
                        date: new Date(new Date().setMonth(100 - i+1)),
                        int: i+1,
                        number: Math.random() * 100,
                        bool: Math.random() > 0.5,
                        leaf: false,
                        children: []
                    };
                    node.children.push(nodeLvl2);
                    node = nodeLvl2;
                }
                else {
                    node.children.push({
                        id: i+1,
                        txt: `txt_${i+1}`,
                        date: new Date(new Date().setMonth(100 - i+1)),
                        int: i+1,
                        number: Math.random() * 100,
                        bool: Math.random() > 0.5,
                        leaf: true
                    });
                }

            }


        }
    });

}());