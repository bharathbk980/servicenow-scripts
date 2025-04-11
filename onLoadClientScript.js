function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    var category = g_form.getValue('category');
    var subcategory = g_form.getValue('subcategory');
    var groupId = '';

    var groupMapping = {
        'hardware:printer': '287ebd7da9fe198100f92cc8d1d2154e',    
        'hardware:laptop': '1a2b3c4d5e6f7g8h9i0j123456789abc',     
        'software:email': '7d3f8f11a9fe198100f92cc8d1d215bb',    
        'network:wifi': '9e4b7d2ca9fe198100f92cc8d1d215cc'         
    };

    var key = category + ':' + subcategory;

    if (groupMapping.hasOwnProperty(key)) {
        groupId = groupMapping[key];
        g_form.setValue('assignment_group', groupId);
        g_form.showFieldMsg('assignment_group', 'Assignment Group auto-set based on selection.', 'info');
    } else {
        g_form.setValue('assignment_group', '');
        g_form.showFieldMsg('assignment_group', 'No auto-assignment rule found. Please select manually.', 'warning');
    }
}
