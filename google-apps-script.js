function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    const row = [
      new Date(data.timestamp),
      data.firstName || '',
      data.email || '',
      data.source || 'funnel',
      data.genres || '',
      data.objective || ''
    ];
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
