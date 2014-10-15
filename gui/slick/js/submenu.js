function initActions() {
    $("#SubMenu a[href*='/home/restart/']").addClass('btn restart').html('<span class="ui-icon ui-icon-restart pull-left"></span> Restart');
    $("#SubMenu a[href*='/home/shutdown/']").addClass('btn shutdown').html('<span class="ui-icon ui-icon-shutdown pull-left"></span> Shutdown');
    $("#SubMenu a[href*='/home/logout/']").addClass('btn').html('<span class="ui-icon ui-icon-power pull-left"></span> Logout');
    $("#SubMenu a:contains('Edit')").addClass('btn').html('<span class="ui-icon ui-icon-pencil pull-left"></span> Edit');
    $("#SubMenu a:contains('Delete')").addClass('btn delete').html('<span class="ui-icon ui-icon-trash pull-left"></span> Delete');
    $("#SubMenu a:contains('Remove')").addClass('btn remove').html('<span class="ui-icon ui-icon-trash pull-left"></span> Remove');
    $("#SubMenu a:contains('Clear History')").addClass('btn clearhistory').html('<span class="ui-icon ui-icon-trash pull-left"></span> Clear History');
    $("#SubMenu a:contains('Trim History')").addClass('btn trimhistory').html('<span class="ui-icon ui-icon-trash pull-left"></span> Trim History');
    $("#SubMenu a[href$='/errorlogs/clearerrors/']").addClass('btn').html('<span class="ui-icon ui-icon-trash pull-left"></span> Clear Errors');
    $("#SubMenu a:contains('Re-scan')").addClass('btn').html('<span class="ui-icon ui-icon-refresh pull-left"></span> Re-scan');
    $("#SubMenu a:contains('Backlog Overview')").addClass('btn').html('<span class="ui-icon ui-icon-refresh pull-left"></span> Backlog Overview');
    $("#SubMenu a[href$='/home/updatePLEX/']").addClass('btn').html('<span class="ui-icon ui-icon-refresh pull-left"></span> Update PLEX');
    $("#SubMenu a:contains('Force')").addClass('btn').html('<span class="ui-icon ui-icon-transfer-e-w pull-left"></span> Force Full Update');
    $("#SubMenu a:contains('Rename')").addClass('btn').html('<span class="ui-icon ui-icon-tag pull-left"></span> Preview Rename');
    $("#SubMenu a[href$='/config/subtitles/']").addClass('btn').html('<span class="ui-icon ui-icon-comment pull-left"></span> Search Subtitles');
    $("#SubMenu a[href*='/home/subtitleShow']").addClass('btn').html('<span class="ui-icon ui-icon-comment pull-left"></span> Download Subtitles');
    $("#SubMenu a:contains('Anime')").addClass('btn').html('<span class="ui-icon ui-icon-anime pull-left"></span> Anime');
    $("#SubMenu a:contains('Settings')").addClass('btn').html('<span class="ui-icon ui-icon-search pull-left"></span> Search Settings');
    $("#SubMenu a:contains('Provider')").addClass('btn').html('<span class="ui-icon ui-icon-search pull-left"></span> Search Providers');
    $("#SubMenu a:contains('Backup/Restore')").addClass('btn').html('<span class="ui-icon ui-icon-gear pull-left"></span> Backup/Restore');
    $("#SubMenu a:contains('General')").addClass('btn').html('<span class="ui-icon ui-icon-gear pull-left"></span> General');
    $("#SubMenu a:contains('Episode Status')").addClass('btn').html('<span class="ui-icon ui-icon-transferthick-e-w pull-left"></span> Episode Status Management');
    $("#SubMenu a:contains('Missed Subtitle')").addClass('btn').html('<span class="ui-icon ui-icon-transferthick-e-w pull-left"></span> Missed Subtitles');
    $("#SubMenu a[href$='/home/addShows/']").addClass('btn').html('<span class="ui-icon ui-icon-video pull-left"></span> Add Show');
    $("#SubMenu a:contains('Processing')").addClass('btn').html('<span class="ui-icon ui-icon-folder-open pull-left"></span> Post-Processing');
    $("#SubMenu a:contains('Manage Searches')").addClass('btn').html('<span class="ui-icon ui-icon-search pull-left"></span> Manage Searches');
    $("#SubMenu a:contains('Manage Torrents')").addClass('btn').html('<img width="16" height="16" alt="" src="../images/menu/bittorrent.png"> Manage Torrents');
    $("#SubMenu a[href$='/manage/failedDownloads/']").addClass('btn').html('<img width="16" height="16" alt="" src="../images/menu/failed_download.png"> Failed Downloads');
    $("#SubMenu a:contains('Notification')").addClass('btn').html('<span class="ui-icon ui-icon-note pull-left"></span> Notification');
    $("#SubMenu a:contains('Update show in XBMC')").addClass('btn').html('<span class="ui-icon ui-icon-refresh pull-left"></span> Update show in XBMC');
    $("#SubMenu a[href$='/home/updateXBMC/']").addClass('btn').html('<span class="ui-icon ui-icon-refresh pull-left"></span> Update XBMC');
}
