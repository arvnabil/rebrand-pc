/* global Server */

function LdapGroups(params){
    var self = this;
    
    var addedGroups = 0;
    var ldapGroups = 0;
    
    var groupsList = {};
    
    var searchRegexp = null;
    var searchString = "";
    
    var existsTable = $('#existsLdapGroupsTable');
    var allTable = $('#allLdapGroupsTable');
    
    $('#searchLdapGroup').click(function(){
        if($(this).hasClass('button-lock')){
            return;
        }
        searchString = $('#ldapGroupsSearchField').val();
        searchRegexp = new RegExp(searchString.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'ig');
        self.refresh();
    });
    
    this.show = function(){
        $("#changeLdapGroups").dialog("open");
        groupsList = {};
        addedGroups = 0;
        ldapGroups = 0;
        searchRegexp = null;
        searchString = "";
        
        $('#ldapGroupsSearchField').val("");
        $('#searchLdapGroup').addClass('button-lock');
        $('#saveGroupList').addClass('button-lock');
        
        clearTable(existsTable);
        clearTable(allTable);
        
        refreshCounters();
        
        showSearchMessage(params.locale.enterSearchRequest);
    };
    
    this.refresh = function(){
        $('#ldapGroupsSearchField').prop("disabled", true);
        $('#searchLdapGroup').addClass("button-lock");
        showProgressBar();
        ldapGroups = 0;
        refreshCounters();
        
        $.ajax({
            url: params.handlers.list,
            data : {
                cn : searchString
            },
            success: function(data){
                $('#ldapGroupsSearchField').prop("disabled", false);
                $('#searchLdapGroup').removeClass("button-lock");
                    
                if(data.status){
                    refreshGroupList(data.list);
                    hideProgressBar(LdapGroups.LDAP_GROUP);
                    
                    if(ldapGroups === 0){
                        showSearchMessage(params.locale.notFound);
                    } else {
                        allTable.show();
                    }
                } else {
                    showSearchMessage(data.error);
                }
            },
            dataType: 'json'
        });
    };
    
    function refreshGroupList(list){
        clearTable(allTable);
        
        ldapGroups = 0;
        for(var dn in groupsList){
            var group = groupsList[dn];
            if(group.type === LdapGroups.LDAP_GROUP){
                delete groupsList[dn];
            }
        }
        
        for(var dn in list){
            var group = list[dn];
            if(groupsList.hasOwnProperty(dn)){
                continue;
            }
            ldapGroups++;
            
            var name = group.displayName;
            if(!name){
                name = dn;
            }
            
            var entry = createTableEntry(dn, name);
            var entryId = generateUniqueId("ldapGroup");
            
            if(group.exists){
                entry.attr("title", params.locale.alreadyInList);
                entry.addClass("exists");
            }
            
            entry.attr("id", entryId);
            allTable.append(entry);
            
            groupsList[dn] = {
                id: entryId,
                type : LdapGroups.LDAP_GROUP,
                name : name
            };
            
        }
        
        refreshCounters();
    };
    
    
    function clearTable(table){
        table.find('tr').remove();
    }
    
    function createTableEntry(dn, name){
        
        var btn = $('<span></span>');
        btn.attr("dn", dn);
        
        btn.click(function(){
            changeGroupType(dn, btn);
        });
        
        if(searchRegexp !== null){
            name = name.replace(searchRegexp, '<span class="highlighted">$&</span>');
        }
        
        return $('<tr></tr>')
                .append($('<td></td>').append(btn))
                .append('<td><span class="groupName">' + name + '</span></td>');
    }
    
    
    function changeGroupType(dn){
        var group = groupsList[dn];
        if(group.type === LdapGroups.LDAP_GROUP){
            addGroup(group);
        } else {
            removeGroup(group, dn);
        }
    }
    
    function addGroup(group){
        group.type = LdapGroups.LOCAL_GROUP;
        
        var tableEntry = $('#' + group.id);
        existsTable.append(tableEntry);
        
        tableEntry.find('.groupName').text(group.name);
        
        ldapGroups--;
        addedGroups++;
        refreshCounters();
        
        $('#saveGroupList').removeClass("button-lock");
    };
    
    function removeGroup(group, dn){
        group.type = LdapGroups.LDAP_GROUP;
        
        var tableEntry = $('#' + group.id);
        allTable.append(tableEntry);
        
        if(searchRegexp !== null){
            if(!searchRegexp.test(group.name)){
                tableEntry.remove();
                addedGroups--;
                refreshCounters();
                delete groupsList[dn];
                return;
            }
            var name = tableEntry.find('.groupName');
            name.html(group.name.replace(searchRegexp, '<span class="highlighted">$&</span>'));
        }
        
        ldapGroups++;
        addedGroups--;
        refreshCounters();
        
        if(addedGroups === 0){
            $('#saveGroupList').addClass("button-lock");
        }
    };
    
    function refreshCounters(){
        var ldapGroupsCounterText = params.locale.groupsFound.replace('%n', ldapGroups);
        $('#allLdapGroupsCount').text(ldapGroupsCounterText);
        
        var addedGroupsCounterText = params.locale.groupsToAdd.replace('%n', addedGroups);
        $('#existsLdapGroupsCount').text(addedGroupsCounterText);
    }
    
    function showProgressBar(){
        $('#allLdapGroups').children().hide();
        $('#allLdapGroupsProgressBar').show();
    }
    
    function hideProgressBar(type){
        $('#allLdapGroupsProgressBar').hide();
    }
    
    function showSearchMessage(msg){
        $('#allLdapGroups').children().hide();
        $('#searchMessage .text').text(msg);
        $('#searchMessage').show();
    }
    
    function hideSearchMessage(){
        $('#searchMessage .text').text('');
        $('#searchMessage').show();
    }
    
    
    $('#saveGroupList').click(function(){
        if($(this).hasClass("button-lock")){
            return;
        }
        Server.showLoadEffect();
        var dnList = [];
        
        for(var dn in groupsList){
            if(groupsList[dn].type === LdapGroups.LOCAL_GROUP){
                dnList.push(dn);
            }
        }
        
        $.post(
            params.handlers.save,
            {
                dnList : dnList
            }
        ).done(function(data){
            document.location.reload();
        }).fail(function(){
            document.location.reload();
        });
    });
    
    $('#ldapGroupsSearchField').keyup(function(event){
        var instance = $(this);
        if($.trim(instance.val()).length === 0){
            $('#searchLdapGroup').addClass("button-lock");
        } else {
            $('#searchLdapGroup').removeClass("button-lock");
            
            if(event.keyCode === 13){
                $('#searchLdapGroup').trigger("click");
            }
        }
    });

    $('#ldapGroupsSearchField').val(params.locale.enterGroupName).addClass("placeholder");
    $('#ldapGroupsSearchField').focusin(function(){
        if($('#ldapGroupsSearchField').val() === params.locale.enterGroupName){
            $('#ldapGroupsSearchField').val("").removeClass("placeholder");
        }
    });
    
    $('#ldapGroupsSearchField').focusout(function(){
        if($('#ldapGroupsSearchField').val().length === 0){
            $('#ldapGroupsSearchField').val(params.locale.enterGroupName).addClass("placeholder");
        }
    });
    
};

LdapGroups.LDAP_GROUP = 1;
LdapGroups.LOCAL_GROUP = 2;