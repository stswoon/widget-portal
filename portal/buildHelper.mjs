import * as fs from 'node:fs';

if (process.argv.includes('--syncRouteJsAndEnv')) {
    await syncRouteJsAndEnv();
} else if (process.argv.includes('--copyStandaloneAssets')) {
    await copyStandaloneAssets();
}

async function copyStandaloneAssets() {
    console.log('copyStandaloneAssets');
    await fs.cpSync('./public', './.next/standalone/public', { recursive: true });
    await fs.cpSync('./.next/static', './.next/standalone/.next/static', { recursive: true });
    // await fs.unlinkSync('./.next/standalone/.env');
    //https://stackoverflow.com/questions/66696745/next-js-i18n-routing-not-working-in-docker
    await fs.copyFileSync('./next.config.ts', './.next/standalone/next.config.ts');
}

async function syncRouteJsAndEnv() {
    console.log('syncRouteJsAndEnv');
    const envs = {
        PUBLIC_GATEWAY_URL: process.env.PUBLIC_GATEWAY_URL,
        BSS_MZ_PUBLIC_GATEWAY_URL: process.env.BSS_MZ_PUBLIC_GATEWAY_URL,
        DEFAULT_TENANT_NAME: process.env.DEFAULT_TENANT_NAME,
        CP_ECOMM_GOOGLE_MAP_API_KEY_SECRET: process.env.CP_ECOMM_GOOGLE_MAP_API_KEY_SECRET,
        LOG_LEVEL: process.env.LOG_LEVEL
    };
    console.log(envs);

    await fs.writeFileSync('./public/route.js', 'window.route = ' + JSON.stringify(envs, null, 4) + ';', {
        encoding: 'utf8'
    });
}
