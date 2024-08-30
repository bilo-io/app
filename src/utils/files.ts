export const exportToJSON = (filename: string, jsonData: unknown): void => {
  const fileData = JSON.stringify(jsonData, null, 2); // Convert JSON data to string
  const blob = new Blob([fileData], { type: 'application/json' }); // Create a Blob from the JSON string
  const url = URL.createObjectURL(blob); // Create a URL for the Blob

  const link = document.createElement('a'); // Create a link element
  link.href = url; // Set the href to the Blob URL
  link.download = `${filename}.json`; // Set the download attribute with the filename

  document.body.appendChild(link); // Append the link to the body
  link.click(); // Programmatically click the link to trigger the download
  document.body.removeChild(link); // Remove the link from the document

  URL.revokeObjectURL(url); // Revoke the Blob URL
};