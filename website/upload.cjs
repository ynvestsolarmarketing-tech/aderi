const ftp = require("basic-ftp");

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        console.log("Connecting to FTP...");
        await client.access({
            host: "77.37.127.213",
            user: "u875217942.darkblue-sandpiper-368527.hostingersite.com",
            password: "Ynvest061118",
            secure: false
        });
        
        console.log("Listing root directories:");
        const list = await client.list();
        const hasPublicHtml = list.some(item => item.name === 'public_html');
        
        let targetDir = "/";
        if (hasPublicHtml) {
            targetDir = "/public_html";
        } else if (list.some(item => item.name === 'htdocs')) {
            targetDir = "/htdocs";
        }
        
        console.log(`Uploading 'dist' folder to '${targetDir}'...`);
        await client.ensureDir(targetDir);
        await client.uploadFromDir("dist");
        
        console.log("Upload completed successfully!");
    }
    catch(err) {
        console.error("FTP Deployment Error:", err);
        
        // Se falhar com esse usuário, tentamos com o usuário curto u875217942
        if (err.code === 530) {
            console.log("Tentando novamente com usuário curto u875217942...");
            try {
                const client2 = new ftp.Client();
                client2.ftp.verbose = true;
                await client2.access({
                    host: "77.37.127.213",
                    user: "u875217942",
                    password: "Ynvest061118",
                    secure: false
                });
                
                console.log("Listing root directories (client2):");
                const list = await client2.list();
                const hasPublicHtml = list.some(item => item.name === 'public_html');
                
                let targetDir = "/";
                if (hasPublicHtml) {
                    targetDir = "/public_html";
                } else if (list.some(item => item.name === 'htdocs')) {
                    targetDir = "/htdocs";
                }
                
                console.log(`Uploading 'dist' folder to '${targetDir}'...`);
                await client2.ensureDir(targetDir);
                await client2.uploadFromDir("dist");
                
                console.log("Upload completed successfully!");
                client2.close();
            } catch(e) {
                console.error("Segunda tentativa também falhou:", e);
            }
        }
    }
    client.close();
}

deploy();
