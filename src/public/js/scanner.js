

    // oak.ready()
    const scanner = BarcodeScanner();
    console.log(scanner)

    // Add a listener
    scanner.on((code, event) => {
        event.preventDefault();
        console.log(code); // displays the code in the Electron window inspector
        oak.send('scanned',code) // sends the scanned code to nodejs using IPC and the Oak npm module
        document.getElementById('scan-capture').innerHTML =    `Scanned barcode: ${code}` // displays the scanned code in the html document
    });

    // Remove the listener
    // scanner.off();

