
Ext.define('TutorialApp.view.settings.SysConfig', {
    extend: 'Ext.panel.Panel',
    xtype: 'sys-config',


    requires: [
       'Ext.window.MessageBox',

       'TutorialApp.view.settings.SysConfigController',
       'TutorialApp.view.settings.SysConfigModel',
       'TutorialApp.store.Personnel'
       ],

    controller: 'settings',
    viewModel: 'settings',

    header: {
            layout: {
                align: 'stretchmax'
            },
            title: {
                bind: {
                    text: '{header}'
                },
                flex: 0
            }
        },
    items: [
           { xtype: 'panel',
             name: 'panel',
             html: '<div><br/><b>Current reg date</b><br/><br/>Here is some information about setting this date</div>',
             listeners: {
                 beforerender: function() {

                 //some initialization  , read from DB instead
                 var initdate = '03/15/2016'
                 var chkb1 = false
                 var chkb2 = true


                 this.up('panel').down('#regdate').setValue(new Date(initdate))
                 this.up('panel').down('#thisyear').setValue(chkb1)
                 this.up('panel').down('#prevyear').setValue(chkb2)

                 if (!chkb1)
                    this.up('panel').down('#deviationMessage1').hide()
                 if (!chkb2)
                   this.up('panel').down('#deviationMessage2').hide()
                 }


             }

           },

           {
             xtype: 'datefield',
             fieldLabel: 'Date',
             id: 'regdate',

             name: 'regdate'
           },

           { xtype:'panel',
             html: '<div><br/><b>Require comments on Deviation</b><br/>Here is some information about using this checkbox</div>',

           }
           ,
           {
               xtype: 'checkboxfield',
               name: 'thisyear',
               id: 'thisyear',
               boxLabel: 'Current year',
               listeners: {
                              change: function(checkbox, newValue, oldValue, eOpts) {
                                 var p = this.up('panel').down('#deviationMessage1')
                                 if (newValue) {
                                   p.show()
                                 }
                                 else
                                 {
                                    p.hide()
                                 }

                              }
                          }
           },
           { xtype: 'displayfield',
             hideEmptyLabel: true,
             value: 'Attention: Comments on Deviation turned off for this year',
             id: 'deviationMessage1',
             },


            {
              xtype: 'checkboxfield',
              name: 'prevyear',
              id: 'prevyear',
              boxLabel: 'Previous years',
              listeners: {
                            change: function(checkbox, newValue, oldValue, eOpts) {
                               var p = this.up('panel').down('#deviationMessage2')
                               if (newValue) {
                                 p.show()
                               }
                               else
                               {
                                  p.hide()
                               }

                            }
                        }
            },
            { xtype: 'displayfield',
                         hideEmptyLabel: true,
                         value: 'Attention: Comments on Deviation turned off for previous years',
                         id: 'deviationMessage2'
                        
                         },

        ],
        buttons: [
                {
                    text: 'Submit',
                    handler: function() {
                        Ext.Msg.alert('Juhu','Button clicked, do something to store the data')

                    }
                }
            ]
});
