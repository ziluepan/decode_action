//Sun Jun 01 2025 12:41:21 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
import { connect } from "cloudflare:sockets";
let a0_0x5cfa62 = "";
let a0_0x296b03 = "";
let a0_0xed3d3e = atob("U1VCQVBJLkNNTGl1c3Nzcy5uZXQ=");
let a0_0x2308f4 = atob("aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0FDTDRTU1IvQUNMNFNTUi9tYXN0ZXIvQ2xhc2gvY29uZmlnL0FDTDRTU1JfT25saW5lX01pbmlfTXVsdGlNb2RlLmluaQ==");
let a0_0x51c55c = "https";
let a0_0x56c92a = "true";
let a0_0x1998fc = "";
let a0_0x324c14 = {};
let a0_0x4d2607 = false;
let a0_0x23efe8 = false;
let a0_0x1240e4 = "false";
const a0_0x3ef48f = 4102329600;
let a0_0x47862d;
let a0_0x46c1e0;
let a0_0x401c3e = ["*ttvnw.net", "*tapecontent.net", "*cloudatacdn.com", "*.loadshare.org"];
let a0_0x3543b5 = [];
let a0_0x1a7b7b = [];
let a0_0x4a9618 = [];
let a0_0x4a6d73 = [];
let a0_0x15275e = [];
let a0_0x9744c3 = 8;
let a0_0x3a2788 = 1;
let a0_0x3de4b2 = atob("ZWRnZXR1bm5lbA==");
let a0_0x2174ad;
let a0_0x10def0;
let a0_0x1f9bab = [];
let a0_0x39357f = "false";
const a0_0x11c61a = ["8080", "8880", "2052", "2082", "2086", "2095"];
let a0_0x58c27a = ["2053", "2083", "2087", "2096", "8443"];
let a0_0x26dfef = 7;
let a0_0x362756 = 3;
let a0_0x167053;
let a0_0x22e51b = "";
let a0_0xe0ba47 = [];
let a0_0x57ee09 = "/?ed=2560";
let a0_0x106114;
let a0_0x5a6510 = [];
let a0_0x4c1d5a = [atob("c3BlZWQuY2xvdWRmbGFyZS5jb20=")];
let a0_0x3167fd = "true";
let a0_0x565875 = "&allowInsecure=1";
export default {
  async fetch(_0x1182a7, _0x36239c, _0x5d7ff9) {
    try {
      {
        const _0x181fac = _0x1182a7.headers.get("User-Agent") || "null";
        const _0x5d64d1 = _0x181fac.toLowerCase();
        a0_0x5cfa62 = _0x36239c.UUID || _0x36239c.uuid || _0x36239c.PASSWORD || _0x36239c.pswd || a0_0x5cfa62;
        if (_0x36239c.KEY || _0x36239c.TOKEN || a0_0x5cfa62 && !a0_0x11f1ce(a0_0x5cfa62)) {
          {
            a0_0x106114 = _0x36239c.KEY || _0x36239c.TOKEN || a0_0x5cfa62;
            a0_0x26dfef = Number(_0x36239c.TIME) || a0_0x26dfef;
            a0_0x362756 = Number(_0x36239c.UPTIME) || a0_0x362756;
            const _0x551587 = await a0_0x8681b1(a0_0x106114);
            a0_0x5cfa62 = _0x551587[0];
            a0_0x167053 = _0x551587[1];
          }
        }
        if (!a0_0x5cfa62) {
          {
            return new Response("请设置你的UUID变量，或尝试重试部署，检查变量是否生效？", {
              status: 404,
              headers: {
                "Content-Type": "text/plain;charset=utf-8"
              }
            });
          }
        }
        const _0x35daac = new Date();
        _0x35daac.setHours(0, 0, 0, 0);
        const _0xf36e42 = Math.ceil(_0x35daac.getTime() / 1000);
        const _0x21917c = await a0_0x2e696a("" + a0_0x5cfa62 + _0xf36e42);
        const _0x424dee = [_0x21917c.slice(0, 8), _0x21917c.slice(8, 12), _0x21917c.slice(12, 16), _0x21917c.slice(16, 20), _0x21917c.slice(20)].join("-");
        const _0x28df45 = _0x21917c.slice(6, 9) + "." + _0x21917c.slice(13, 19);
        a0_0x296b03 = _0x36239c.PROXYIP || _0x36239c.proxyip || a0_0x296b03;
        a0_0x47862d = await a0_0x4ac62b(a0_0x296b03);
        a0_0x296b03 = a0_0x47862d[Math.floor(Math.random() * a0_0x47862d.length)];
        a0_0x1998fc = _0x36239c.HTTP || _0x36239c.SOCKS5 || a0_0x1998fc;
        a0_0x46c1e0 = await a0_0x4ac62b(a0_0x1998fc);
        a0_0x1998fc = a0_0x46c1e0[Math.floor(Math.random() * a0_0x46c1e0.length)];
        a0_0x23efe8 = _0x36239c.HTTP ? true : a0_0x1998fc.toLowerCase().includes("http://");
        a0_0x1998fc = a0_0x1998fc.split("//")[1] || a0_0x1998fc;
        if (_0x36239c.GO2SOCKS5) {
          a0_0x401c3e = await a0_0x4ac62b(_0x36239c.GO2SOCKS5);
        }
        if (_0x36239c.CFPORTS) {
          a0_0x58c27a = await a0_0x4ac62b(_0x36239c.CFPORTS);
        }
        if (_0x36239c.BAN) {
          a0_0x4c1d5a = await a0_0x4ac62b(_0x36239c.BAN);
        }
        if (a0_0x1998fc) {
          {
            try {
              a0_0x324c14 = a0_0x8cd168(a0_0x1998fc);
              a0_0x39357f = _0x36239c.RPROXYIP || "false";
              a0_0x4d2607 = true;
            } catch (_0x262c01) {
              {
                let _0x3f7e98 = _0x262c01;
                console.log(_0x3f7e98.toString());
                a0_0x39357f = _0x36239c.RPROXYIP || !a0_0x296b03 ? "true" : "false";
                a0_0x4d2607 = false;
              }
            }
          }
        } else {
          {
            a0_0x39357f = _0x36239c.RPROXYIP || !a0_0x296b03 ? "true" : "false";
          }
        }
        const _0x155685 = _0x1182a7.headers.get("Upgrade");
        const _0x179875 = new URL(_0x1182a7.url);
        if (!_0x155685 || _0x155685 !== "websocket") {
          {
            if (_0x36239c.ADD) {
              a0_0x3543b5 = await a0_0x4ac62b(_0x36239c.ADD);
            }
            if (_0x36239c.ADDAPI) {
              a0_0x1a7b7b = await a0_0x4ac62b(_0x36239c.ADDAPI);
            }
            if (_0x36239c.ADDNOTLS) {
              a0_0x4a9618 = await a0_0x4ac62b(_0x36239c.ADDNOTLS);
            }
            if (_0x36239c.ADDNOTLSAPI) {
              a0_0x4a6d73 = await a0_0x4ac62b(_0x36239c.ADDNOTLSAPI);
            }
            if (_0x36239c.ADDCSV) {
              a0_0x15275e = await a0_0x4ac62b(_0x36239c.ADDCSV);
            }
            a0_0x9744c3 = Number(_0x36239c.DLS) || a0_0x9744c3;
            a0_0x3a2788 = Number(_0x36239c.CSVREMARK) || a0_0x3a2788;
            a0_0x2174ad = _0x36239c.TGTOKEN || a0_0x2174ad;
            a0_0x10def0 = _0x36239c.TGID || a0_0x10def0;
            a0_0x3de4b2 = _0x36239c.SUBNAME || a0_0x3de4b2;
            a0_0x56c92a = _0x36239c.SUBEMOJI || _0x36239c.EMOJI || a0_0x56c92a;
            if (a0_0x56c92a == "0") {
              a0_0x56c92a = "false";
            }
            if (_0x36239c.LINK) {
              a0_0x5a6510 = await a0_0x4ac62b(_0x36239c.LINK);
            }
            let _0x4751b7 = _0x36239c.SUB || "";
            a0_0xed3d3e = _0x36239c.SUBAPI || a0_0xed3d3e;
            if (a0_0xed3d3e.includes("http://")) {
              {
                a0_0xed3d3e = a0_0xed3d3e.split("//")[1];
                a0_0x51c55c = "http";
              }
            } else {
              {
                a0_0xed3d3e = a0_0xed3d3e.split("//")[1] || a0_0xed3d3e;
              }
            }
            a0_0x2308f4 = _0x36239c.SUBCONFIG || a0_0x2308f4;
            if (_0x179875.searchParams.has("sub") && _0x179875.searchParams.get("sub") !== "") {
              _0x4751b7 = _0x179875.searchParams.get("sub").toLowerCase();
            }
            if (_0x179875.searchParams.has("notls")) {
              a0_0x1240e4 = "true";
            }
            if (_0x179875.searchParams.has("proxyip")) {
              {
                a0_0x57ee09 = "/proxyip=" + _0x179875.searchParams.get("proxyip");
                a0_0x39357f = "false";
              }
            } else {
              if (_0x179875.searchParams.has("socks5")) {
                {
                  a0_0x57ee09 = "/?socks5=" + _0x179875.searchParams.get("socks5");
                  a0_0x39357f = "false";
                }
              } else {
                _0x179875.searchParams.has("socks") && (a0_0x57ee09 = "/?socks5=" + _0x179875.searchParams.get("socks"), a0_0x39357f = "false");
              }
            }
            a0_0x3167fd = _0x36239c.SCV || a0_0x3167fd;
            if (!a0_0x3167fd || a0_0x3167fd == "0" || a0_0x3167fd == "false") {
              a0_0x565875 = "";
            } else {
              a0_0x3167fd = "true";
            }
            const _0x824019 = _0x179875.pathname.toLowerCase();
            if (_0x824019 == "/") {
              {
                if (_0x36239c.URL302) {
                  return Response.redirect(_0x36239c.URL302, 302);
                } else {
                  if (_0x36239c.URL) {
                    return await a0_0x33c014(_0x36239c.URL, _0x179875);
                  } else {
                    return new Response(JSON.stringify(_0x1182a7.cf, null, 4), {
                      status: 200,
                      headers: {
                        "content-type": "application/json"
                      }
                    });
                  }
                }
              }
            } else {
              if (_0x824019 == "/" + _0x424dee) {
                {
                  const _0x4bc3ec = await a0_0x496ebd(a0_0x5cfa62, _0x1182a7.headers.get("Host"), _0x4751b7, "CF-Workers-SUB", a0_0x39357f, _0x179875, _0x424dee, _0x28df45, _0x36239c);
                  const _0x2777a7 = {
                    status: 200
                  };
                  return new Response("" + _0x4bc3ec, _0x2777a7);
                }
              } else {
                if (_0x179875.pathname == "/" + a0_0x106114 + "/edit" || _0x824019 == "/" + a0_0x5cfa62 + "/edit") {
                  {
                    const _0x157bb4 = await a0_0x3eab74(_0x1182a7, _0x36239c);
                    return _0x157bb4;
                  }
                } else {
                  if (_0x179875.pathname == "/" + a0_0x106114 || _0x824019 == "/" + a0_0x5cfa62) {
                    {
                      await a0_0x1d4038("#获取订阅 " + a0_0x3de4b2, _0x1182a7.headers.get("CF-Connecting-IP"), "UA: " + _0x181fac + "</tg-spoiler>\n域名: " + _0x179875.hostname + "\n<tg-spoiler>入口: " + (_0x179875.pathname + _0x179875.search) + "</tg-spoiler>");
                      const _0x51975a = await a0_0x496ebd(a0_0x5cfa62, _0x1182a7.headers.get("Host"), _0x4751b7, _0x181fac, a0_0x39357f, _0x179875, _0x424dee, _0x28df45, _0x36239c);
                      const _0x4ea72b = Date.now();
                      const _0x380b85 = new Date(_0x4ea72b);
                      _0x380b85.setHours(0, 0, 0, 0);
                      const _0x171671 = Math.floor((_0x4ea72b - _0x380b85.getTime()) / 86400000 * 24 * 1099511627776 / 2);
                      let _0x11bae1 = _0x171671;
                      let _0x18f160 = _0x171671;
                      let _0x236572 = 26388279066624;
                      if (_0x5d64d1 && _0x5d64d1.includes("mozilla")) {
                        {
                          const _0x151fa3 = {
                            "Content-Type": "text/html;charset=utf-8",
                            "Profile-Update-Interval": "6",
                            "Subscription-Userinfo": "upload=" + _0x11bae1 + "; download=" + _0x18f160 + "; total=" + _0x236572 + "; expire=" + a0_0x3ef48f,
                            "Cache-Control": "no-store"
                          };
                          const _0x33e3f6 = {
                            status: 200,
                            headers: _0x151fa3
                          };
                          return new Response(_0x51975a, _0x33e3f6);
                        }
                      } else {
                        {
                          return new Response(_0x51975a, {
                            status: 200,
                            headers: {
                              "Content-Disposition": "attachment; filename=" + a0_0x3de4b2 + "; filename*=utf-8''" + encodeURIComponent(a0_0x3de4b2),
                              "Profile-Update-Interval": "6",
                              "Subscription-Userinfo": "upload=" + _0x11bae1 + "; download=" + _0x18f160 + "; total=" + _0x236572 + "; expire=" + a0_0x3ef48f
                            }
                          });
                        }
                      }
                    }
                  } else {
                    {
                      const _0x56e15f = {
                        status: 404
                      };
                      if (_0x36239c.URL302) {
                        return Response.redirect(_0x36239c.URL302, 302);
                      } else {
                        if (_0x36239c.URL) {
                          return await a0_0x33c014(_0x36239c.URL, _0x179875);
                        } else {
                          return new Response("不用怀疑！你UUID就是错的！！！", _0x56e15f);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          {
            a0_0x1998fc = _0x179875.searchParams.get("socks5") || a0_0x1998fc;
            if (new RegExp("/socks5=", "i").test(_0x179875.pathname)) {
              a0_0x1998fc = _0x179875.pathname.split("5=")[1];
            } else {
              if (new RegExp("/socks://", "i").test(_0x179875.pathname) || new RegExp("/socks5://", "i").test(_0x179875.pathname) || new RegExp("/http://", "i").test(_0x179875.pathname)) {
                {
                  a0_0x23efe8 = _0x179875.pathname.includes("http://");
                  a0_0x1998fc = _0x179875.pathname.split("://")[1].split("#")[0];
                  if (a0_0x1998fc.includes("@")) {
                    {
                      let _0x1afbce = a0_0x1998fc.split("@")[0].replaceAll("%3D", "=");
                      const _0x280ec3 = /^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i;
                      if (_0x280ec3.test(_0x1afbce) && !_0x1afbce.includes(":")) {
                        _0x1afbce = atob(_0x1afbce);
                      }
                      a0_0x1998fc = _0x1afbce + "@" + a0_0x1998fc.split("@")[1];
                    }
                  }
                  a0_0x401c3e = ["all in"];
                }
              }
            }
            if (a0_0x1998fc) {
              {
                try {
                  a0_0x324c14 = a0_0x8cd168(a0_0x1998fc);
                  a0_0x4d2607 = true;
                } catch (_0x1222a2) {
                  {
                    let _0x2de2c9 = _0x1222a2;
                    console.log(_0x2de2c9.toString());
                    a0_0x4d2607 = false;
                  }
                }
              }
            } else {
              {
                a0_0x4d2607 = false;
              }
            }
            if (_0x179875.searchParams.has("proxyip")) {
              {
                a0_0x296b03 = _0x179875.searchParams.get("proxyip");
                a0_0x4d2607 = false;
              }
            } else {
              if (new RegExp("/proxyip=", "i").test(_0x179875.pathname)) {
                {
                  a0_0x296b03 = _0x179875.pathname.toLowerCase().split("/proxyip=")[1];
                  a0_0x4d2607 = false;
                }
              } else {
                if (new RegExp("/proxyip.", "i").test(_0x179875.pathname)) {
                  a0_0x296b03 = "proxyip." + _0x179875.pathname.toLowerCase().split("/proxyip.")[1];
                  a0_0x4d2607 = false;
                } else {
                  new RegExp("/pyip=", "i").test(_0x179875.pathname) && (a0_0x296b03 = _0x179875.pathname.toLowerCase().split("/pyip=")[1], a0_0x4d2607 = false);
                }
              }
            }
            return await a0_0x5c2441(_0x1182a7);
          }
        }
      }
    } catch (_0xe71713) {
      {
        let _0x19b995 = _0xe71713;
        return new Response(_0x19b995.toString());
      }
    }
  }
};
async function a0_0x5c2441(_0x2e56a9) {
  const _0x34c379 = new WebSocketPair();
  const [_0x22ad4b, _0x5de1ba] = Object.values(_0x34c379);
  _0x5de1ba.accept();
  let _0x7a2ca7 = "";
  let _0x320c1f = "";
  const _0x3f528e = (_0x2ef05d, _0x3e503b) => {
    console.log("[" + _0x7a2ca7 + ":" + _0x320c1f + "] " + _0x2ef05d, _0x3e503b || "");
  };
  const _0x546834 = _0x2e56a9.headers.get("sec-websocket-protocol") || "";
  const _0x7ffd9e = a0_0x431033(_0x5de1ba, _0x546834, _0x3f528e);
  let _0x2f51a = {
    value: null
  };
  let _0x5bf443 = false;
  _0x7ffd9e.pipeTo(new WritableStream({
    async write(_0x2387ce, _0x598dac) {
      {
        if (_0x5bf443) {
          {
            return await a0_0x491375(_0x2387ce, _0x5de1ba, null, _0x3f528e);
          }
        }
        if (_0x2f51a.value) {
          {
            const _0x345f08 = _0x2f51a.value.writable.getWriter();
            await _0x345f08.write(_0x2387ce);
            _0x345f08.releaseLock();
            return;
          }
        }
        const {
          hasError: _0x56d17e,
          message: _0x33d5c0,
          addressType: _0x5275c2,
          portRemote = 443,
          addressRemote = "",
          rawDataIndex: _0x11f8b6,
          维列斯Version = new Uint8Array([0, 0]),
          isUDP: _0x411d09
        } = a0_0x1f871e(_0x2387ce, a0_0x5cfa62);
        _0x7a2ca7 = addressRemote;
        _0x320c1f = portRemote + "--" + Math.random() + " " + (_0x411d09 ? "udp " : "tcp ") + " ";
        if (_0x56d17e) {
          {
            throw new Error(_0x33d5c0);
            return;
          }
        }
        if (_0x411d09) {
          {
            if (portRemote === 53) {
              {
                _0x5bf443 = true;
              }
            } else {
              {
                throw new Error("UDP 代理仅对 DNS（53 端口）启用");
                return;
              }
            }
          }
        }
        const _0x391bfc = new Uint8Array([维列斯Version[0], 0]);
        const _0x76c269 = _0x2387ce.slice(_0x11f8b6);
        if (_0x5bf443) {
          {
            return a0_0x491375(_0x76c269, _0x5de1ba, _0x391bfc, _0x3f528e);
          }
        }
        if (!a0_0x4c1d5a.includes(addressRemote)) {
          _0x3f528e("处理 TCP 出站连接 " + addressRemote + ":" + portRemote);
          a0_0x55341f(_0x2f51a, _0x5275c2, addressRemote, portRemote, _0x76c269, _0x5de1ba, _0x391bfc, _0x3f528e);
        } else {
          {
            throw new Error("黑名单关闭 TCP 出站连接 " + addressRemote + ":" + portRemote);
          }
        }
      }
    },
    close() {
      {
        _0x3f528e("readableWebSocketStream 已关闭");
      }
    },
    abort(_0x373f90) {
      {
        _0x3f528e("readableWebSocketStream 已中止", JSON.stringify(_0x373f90));
      }
    }
  })).catch(_0x356595 => {
    _0x3f528e("readableWebSocketStream 管道错误", _0x356595);
  });
  const _0x35fc51 = {
    status: 101,
    webSocket: _0x22ad4b
  };
  return new Response(null, _0x35fc51);
}
async function a0_0x55341f(_0x493700, _0x38d9ff, _0x3c4dd8, _0x5aa494, _0x218df3, _0x41111b, _0x27c1e8, _0x45bb4f) {
  async function _0x413ada(_0x25862c) {
    {
      if (a0_0x401c3e.includes(atob("YWxsIGlu")) || a0_0x401c3e.includes(atob("Kg=="))) {
        return true;
      }
      return a0_0x401c3e.some(_0xdf1c89 => {
        {
          let _0x3d59dd = _0xdf1c89.replace(/\*/g, ".*");
          let _0x9043d7 = new RegExp("^" + _0x3d59dd + "$", "i");
          return _0x9043d7.test(_0x25862c);
        }
      });
    }
  }
  async function _0x5f1a23(_0x4f2f39, _0x4753e6, _0x4c96e1 = false, _0x3b157e = false) {
    {
      _0x45bb4f("connected to " + _0x4f2f39 + ":" + _0x4753e6);
      const _0x57d441 = _0x4c96e1 ? _0x3b157e ? await a0_0x192724(_0x4f2f39, _0x4753e6, _0x45bb4f) : await a0_0x219d0c(_0x38d9ff, _0x4f2f39, _0x4753e6, _0x45bb4f) : connect({
        hostname: _0x4f2f39,
        port: _0x4753e6
      });
      _0x493700.value = _0x57d441;
      const _0x1af41e = _0x57d441.writable.getWriter();
      await _0x1af41e.write(_0x218df3);
      _0x1af41e.releaseLock();
      return _0x57d441;
    }
  }
  async function _0x20eeba() {
    {
      if (!_0x302285) {
        {
          const _0x23f7f5 = "[" + (await a0_0x244e92(_0x3c4dd8)) + "]";
          _0x45bb4f("NAT64 代理连接到 " + _0x23f7f5 + ":443");
          _0x165e85 = await _0x5f1a23(_0x23f7f5, "443");
        }
      }
      _0x165e85.closed.catch(_0x5297ba => {
        console.log("retry tcpSocket closed error", _0x5297ba);
      }).finally(() => {
        {
          a0_0x1e406a(_0x41111b);
        }
      });
      a0_0x3625a8(_0x165e85, _0x41111b, _0x27c1e8, null, _0x45bb4f);
    }
  }
  async function _0x1b49e4() {
    {
      if (a0_0x4d2607) {
        {
          _0x165e85 = await _0x5f1a23(_0x3c4dd8, _0x5aa494, true, a0_0x23efe8);
        }
      } else {
        {
          if (!a0_0x296b03 || a0_0x296b03 == "") {
            {
              a0_0x296b03 = atob("UFJPWFlJUC50cDEuMDkwMjI3Lnh5eg==");
            }
          } else {
            if (a0_0x296b03.includes("]:")) {
              {
                _0x5aa494 = a0_0x296b03.split("]:")[1] || _0x5aa494;
                a0_0x296b03 = a0_0x296b03.split("]:")[0] + "]" || a0_0x296b03;
              }
            } else {
              a0_0x296b03.split(":").length === 2 && (_0x5aa494 = a0_0x296b03.split(":")[1] || _0x5aa494, a0_0x296b03 = a0_0x296b03.split(":")[0] || a0_0x296b03);
            }
          }
          if (a0_0x296b03.includes(".tp")) {
            _0x5aa494 = a0_0x296b03.split(".tp")[1].split(".")[0] || _0x5aa494;
          }
          _0x165e85 = await _0x5f1a23(a0_0x296b03.toLowerCase() || _0x3c4dd8, _0x5aa494);
        }
      }
      a0_0x3625a8(_0x165e85, _0x41111b, _0x27c1e8, _0x20eeba, _0x45bb4f);
    }
  }
  let _0x302285 = false;
  if (a0_0x401c3e.length > 0 && a0_0x4d2607) {
    _0x302285 = await _0x413ada(_0x3c4dd8);
  }
  let _0x165e85 = await _0x5f1a23(_0x3c4dd8, _0x5aa494, _0x302285, a0_0x23efe8);
  a0_0x3625a8(_0x165e85, _0x41111b, _0x27c1e8, _0x1b49e4, _0x45bb4f);
}
function a0_0x431033(_0x45277c, _0x27f88d, _0x3bfbfc) {
  let _0x2f3435 = false;
  const _0x53bddb = new ReadableStream({
    start(_0x42dce4) {
      {
        _0x45277c.addEventListener("message", _0x4a7847 => {
          {
            if (_0x2f3435) {
              {
                return;
              }
            }
            const _0x4bd805 = _0x4a7847.data;
            _0x42dce4.enqueue(_0x4bd805);
          }
        });
        _0x45277c.addEventListener("close", () => {
          {
            a0_0x1e406a(_0x45277c);
            if (_0x2f3435) {
              {
                return;
              }
            }
            _0x42dce4.close();
          }
        });
        _0x45277c.addEventListener("error", _0x224e21 => {
          {
            _0x3bfbfc("WebSocket 服务器发生错误");
            _0x42dce4.error(_0x224e21);
          }
        });
        const {
          earlyData: _0x4b877a,
          error: _0x5b5a1f
        } = a0_0x4cccdc(_0x27f88d);
        if (_0x5b5a1f) {
          _0x42dce4.error(_0x5b5a1f);
        } else {
          _0x4b877a && _0x42dce4.enqueue(_0x4b877a);
        }
      }
    },
    pull(_0x2c26b5) {},
    cancel(_0x3bb2df) {
      {
        if (_0x2f3435) {
          {
            return;
          }
        }
        _0x3bfbfc("可读流被取消，原因是 " + _0x3bb2df);
        _0x2f3435 = true;
        a0_0x1e406a(_0x45277c);
      }
    }
  });
  return _0x53bddb;
}
function a0_0x1f871e(_0x400dcd, _0x58eabb) {
  if (_0x400dcd.byteLength < 24) {
    {
      const _0x44c45f = {
        hasError: true,
        message: "invalid data"
      };
      return _0x44c45f;
    }
  }
  const _0x4a725c = new Uint8Array(_0x400dcd.slice(0, 1));
  let _0x4dfd94 = false;
  let _0x55a176 = false;
  function _0x222138(_0xcdf2af, _0x1df3eb, _0x3ddee3) {
    {
      const _0x369d51 = new Uint8Array(_0x3ddee3.slice(1, 17));
      const _0x17f967 = a0_0x51ea39(_0x369d51);
      return _0x17f967 === _0xcdf2af || _0x17f967 === _0x1df3eb;
    }
  }
  _0x4dfd94 = _0x222138(_0x58eabb, a0_0x167053, _0x400dcd);
  if (!_0x4dfd94) {
    {
      return {
        hasError: true,
        message: "invalid user " + new Uint8Array(_0x400dcd.slice(1, 17))
      };
    }
  }
  const _0x1efa38 = new Uint8Array(_0x400dcd.slice(17, 18))[0];
  const _0x374991 = new Uint8Array(_0x400dcd.slice(18 + _0x1efa38, 18 + _0x1efa38 + 1))[0];
  if (!(_0x374991 === 1)) {
    if (_0x374991 === 2) {
      {
        _0x55a176 = true;
      }
    } else {
      {
        const _0x251eba = {
          hasError: true,
          message: "command " + _0x374991 + " is not support, command 01-tcp,02-udp,03-mux"
        };
        return _0x251eba;
      }
    }
  }
  const _0x3e00a7 = 18 + _0x1efa38 + 1;
  const _0x6c3bd3 = _0x400dcd.slice(_0x3e00a7, _0x3e00a7 + 2);
  const _0x1fa0e5 = new DataView(_0x6c3bd3).getUint16(0);
  let _0x3bbd36 = _0x3e00a7 + 2;
  const _0x34d779 = new Uint8Array(_0x400dcd.slice(_0x3bbd36, _0x3bbd36 + 1));
  const _0x6fe68 = _0x34d779[0];
  let _0x5875ab = 0;
  let _0x4b5771 = _0x3bbd36 + 1;
  let _0x13d507 = "";
  switch (_0x6fe68) {
    case 1:
      _0x5875ab = 4;
      _0x13d507 = new Uint8Array(_0x400dcd.slice(_0x4b5771, _0x4b5771 + _0x5875ab)).join(".");
      break;
    case 2:
      _0x5875ab = new Uint8Array(_0x400dcd.slice(_0x4b5771, _0x4b5771 + 1))[0];
      _0x4b5771 += 1;
      _0x13d507 = new TextDecoder().decode(_0x400dcd.slice(_0x4b5771, _0x4b5771 + _0x5875ab));
      break;
    case 3:
      _0x5875ab = 16;
      const _0x490927 = new DataView(_0x400dcd.slice(_0x4b5771, _0x4b5771 + _0x5875ab));
      const _0x4d5e52 = [];
      for (let _0x27607c = 0; _0x27607c < 8; _0x27607c++) {
        _0x4d5e52.push(_0x490927.getUint16(_0x27607c * 2).toString(16));
      }
      _0x13d507 = _0x4d5e52.join(":");
      break;
    default:
      const _0x1a6066 = {
        hasError: true,
        message: "invild addressType is " + _0x6fe68
      };
      return _0x1a6066;
  }
  if (!_0x13d507) {
    {
      const _0x3c8141 = {
        hasError: true,
        message: "addressValue is empty, addressType is " + _0x6fe68
      };
      return _0x3c8141;
    }
  }
  return {
    hasError: false,
    addressRemote: _0x13d507,
    addressType: _0x6fe68,
    portRemote: _0x1fa0e5,
    rawDataIndex: _0x4b5771 + _0x5875ab,
    "维列斯Version": _0x4a725c,
    isUDP: _0x55a176
  };
}
async function a0_0x3625a8(_0x3272c2, _0x5a5ef3, _0x504ef8, _0x3a09d9, _0x22fed9) {
  let _0x33fcdf = _0x504ef8;
  let _0x50ddaf = false;
  await _0x3272c2.readable.pipeTo(new WritableStream({
    start() {},
    async write(_0x296061, _0x49dd48) {
      {
        _0x50ddaf = true;
        if (_0x5a5ef3.readyState !== a0_0x4ab3d3) {
          {
            _0x49dd48.error("webSocket.readyState is not open, maybe close");
          }
        }
        if (_0x33fcdf) {
          _0x5a5ef3.send(await new Blob([_0x33fcdf, _0x296061]).arrayBuffer());
          _0x33fcdf = null;
        } else {
          {
            _0x5a5ef3.send(_0x296061);
          }
        }
      }
    },
    close() {
      _0x22fed9("remoteConnection!.readable is close with hasIncomingData is " + _0x50ddaf);
    },
    abort(_0x72492f) {
      console.error("remoteConnection!.readable abort", _0x72492f);
    }
  })).catch(_0x971b63 => {
    {
      console.error("remoteSocketToWS has exception ", _0x971b63.stack || _0x971b63);
      a0_0x1e406a(_0x5a5ef3);
    }
  });
  if (_0x50ddaf === false && _0x3a09d9) {
    {
      _0x22fed9("retry");
      _0x3a09d9();
    }
  }
}
function a0_0x4cccdc(_0x2cff3f) {
  if (!_0x2cff3f) {
    {
      const _0x1d8a5b = {
        earlyData: undefined,
        error: null
      };
      return _0x1d8a5b;
    }
  }
  try {
    {
      _0x2cff3f = _0x2cff3f.replace(/-/g, "+").replace(/_/g, "/");
      const _0x1dd4c3 = atob(_0x2cff3f);
      const _0x34e68d = Uint8Array.from(_0x1dd4c3, _0x444530 => _0x444530.charCodeAt(0));
      const _0x37e49f = {
        earlyData: _0x34e68d.buffer,
        error: null
      };
      return _0x37e49f;
    }
  } catch (_0x11d7e0) {
    {
      const _0x511165 = {
        earlyData: undefined,
        error: _0x11d7e0
      };
      return _0x511165;
    }
  }
}
function a0_0x11f1ce(_0x5dd1c5) {
  const _0x39a9f7 = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return _0x39a9f7.test(_0x5dd1c5);
}
const a0_0x4ab3d3 = 1;
const a0_0x1124bf = 2;
function a0_0x1e406a(_0x4e1b3a) {
  try {
    {
      if (_0x4e1b3a.readyState === a0_0x4ab3d3 || _0x4e1b3a.readyState === a0_0x1124bf) {
        {
          _0x4e1b3a.close();
        }
      }
    }
  } catch (_0x74b3cf) {
    {
      console.error("safeCloseWebSocket error", _0x74b3cf);
    }
  }
}
const a0_0x42eba4 = [];
for (let a0_0x11b141 = 0; a0_0x11b141 < 256; ++a0_0x11b141) {
  a0_0x42eba4.push((a0_0x11b141 + 256).toString(16).slice(1));
}
function a0_0x4cd29e(_0x233787, _0x2592bd = 0) {
  return (a0_0x42eba4[_0x233787[_0x2592bd + 0]] + a0_0x42eba4[_0x233787[_0x2592bd + 1]] + a0_0x42eba4[_0x233787[_0x2592bd + 2]] + a0_0x42eba4[_0x233787[_0x2592bd + 3]] + "-" + a0_0x42eba4[_0x233787[_0x2592bd + 4]] + a0_0x42eba4[_0x233787[_0x2592bd + 5]] + "-" + a0_0x42eba4[_0x233787[_0x2592bd + 6]] + a0_0x42eba4[_0x233787[_0x2592bd + 7]] + "-" + a0_0x42eba4[_0x233787[_0x2592bd + 8]] + a0_0x42eba4[_0x233787[_0x2592bd + 9]] + "-" + a0_0x42eba4[_0x233787[_0x2592bd + 10]] + a0_0x42eba4[_0x233787[_0x2592bd + 11]] + a0_0x42eba4[_0x233787[_0x2592bd + 12]] + a0_0x42eba4[_0x233787[_0x2592bd + 13]] + a0_0x42eba4[_0x233787[_0x2592bd + 14]] + a0_0x42eba4[_0x233787[_0x2592bd + 15]]).toLowerCase();
}
function a0_0x51ea39(_0xbcc0aa, _0x2f658f = 0) {
  const _0x3bf213 = a0_0x4cd29e(_0xbcc0aa, _0x2f658f);
  if (!a0_0x11f1ce(_0x3bf213)) {
    {
      throw TypeError("生成的 UUID 不符合规范 " + _0x3bf213);
    }
  }
  return _0x3bf213;
}
async function a0_0x491375(_0x2514cd, _0xcb4fa2, _0x4d128e, _0x58469a) {
  try {
    {
      const _0xd68237 = "8.8.4.4";
      const _0x19db3a = 53;
      let _0x4f7e2f = _0x4d128e;
      const _0x313ba5 = {
        hostname: _0xd68237,
        port: _0x19db3a
      };
      const _0x4e169d = connect(_0x313ba5);
      _0x58469a("连接到 " + _0xd68237 + ":" + _0x19db3a);
      const _0x3e3647 = _0x4e169d.writable.getWriter();
      await _0x3e3647.write(_0x2514cd);
      _0x3e3647.releaseLock();
      await _0x4e169d.readable.pipeTo(new WritableStream({
        async write(_0x5c40d6) {
          {
            if (_0xcb4fa2.readyState === a0_0x4ab3d3) {
              {
                if (_0x4f7e2f) {
                  _0xcb4fa2.send(await new Blob([_0x4f7e2f, _0x5c40d6]).arrayBuffer());
                  _0x4f7e2f = null;
                } else {
                  {
                    _0xcb4fa2.send(_0x5c40d6);
                  }
                }
              }
            }
          }
        },
        close() {
          _0x58469a("DNS 服务器(" + _0xd68237 + ") TCP 连接已关闭");
        },
        abort(_0x23b7a9) {
          {
            console.error("DNS 服务器(" + _0xd68237 + ") TCP 连接异常中断", _0x23b7a9);
          }
        }
      }));
    }
  } catch (_0x259fa3) {
    {
      console.error("handleDNSQuery 函数发生异常，错误信息: " + _0x259fa3.message);
    }
  }
}
async function a0_0x219d0c(_0x1a2d4c, _0x202777, _0x2c06c5, _0xceeb77) {
  const {
    username: _0x191157,
    password: _0x153f38,
    hostname: _0x476dd6,
    port: _0x4902f3
  } = a0_0x324c14;
  const _0x888ec = {
    hostname: _0x476dd6,
    port: _0x4902f3
  };
  const _0x1edc3a = connect(_0x888ec);
  const _0x5b870b = new Uint8Array([5, 2, 0, 2]);
  const _0x3632c8 = _0x1edc3a.writable.getWriter();
  await _0x3632c8.write(_0x5b870b);
  _0xceeb77("已发送 SOCKS5 问候消息");
  const _0x4f363c = _0x1edc3a.readable.getReader();
  const _0x1ac4e9 = new TextEncoder();
  let _0x1f4e86 = (await _0x4f363c.read()).value;
  if (_0x1f4e86[0] !== 5) {
    {
      _0xceeb77("SOCKS5 服务器版本错误: 收到 " + _0x1f4e86[0] + "，期望是 5");
      return;
    }
  }
  if (_0x1f4e86[1] === 255) {
    {
      _0xceeb77("服务器不接受任何认证方法");
      return;
    }
  }
  if (_0x1f4e86[1] === 2) {
    {
      _0xceeb77("SOCKS5 服务器需要认证");
      if (!_0x191157 || !_0x153f38) {
        {
          _0xceeb77("请提供用户名和密码");
          return;
        }
      }
      const _0x491730 = new Uint8Array([1, _0x191157.length, ..._0x1ac4e9.encode(_0x191157), _0x153f38.length, ..._0x1ac4e9.encode(_0x153f38)]);
      await _0x3632c8.write(_0x491730);
      _0x1f4e86 = (await _0x4f363c.read()).value;
      if (_0x1f4e86[0] !== 1 || _0x1f4e86[1] !== 0) {
        {
          _0xceeb77("SOCKS5 服务器认证失败");
          return;
        }
      }
    }
  }
  let _0x4ed15e;
  switch (_0x1a2d4c) {
    case 1:
      _0x4ed15e = new Uint8Array([1, ..._0x202777.split(".").map(Number)]);
      break;
    case 2:
      _0x4ed15e = new Uint8Array([3, _0x202777.length, ..._0x1ac4e9.encode(_0x202777)]);
      break;
    case 3:
      _0x4ed15e = new Uint8Array([4, ..._0x202777.split(":").flatMap(_0x13cd2d => [parseInt(_0x13cd2d.slice(0, 2), 16), parseInt(_0x13cd2d.slice(2), 16)])]);
      break;
    default:
      _0xceeb77("无效的地址类型: " + _0x1a2d4c);
      return;
  }
  const _0x219620 = new Uint8Array([5, 1, 0, ..._0x4ed15e, _0x2c06c5 >> 8, _0x2c06c5 & 255]);
  await _0x3632c8.write(_0x219620);
  _0xceeb77("已发送 SOCKS5 请求");
  _0x1f4e86 = (await _0x4f363c.read()).value;
  if (_0x1f4e86[1] === 0) {
    {
      _0xceeb77("SOCKS5 连接已建立");
    }
  } else {
    {
      _0xceeb77("SOCKS5 连接建立失败");
      return;
    }
  }
  _0x3632c8.releaseLock();
  _0x4f363c.releaseLock();
  return _0x1edc3a;
}
async function a0_0x192724(_0x532a0b, _0x5822a0, _0x2247c4) {
  const {
    username: _0xefc0bb,
    password: _0x2cd4f2,
    hostname: _0x1a1139,
    port: _0x1e9901
  } = a0_0x324c14;
  const _0x233445 = {
    hostname: _0x1a1139,
    port: _0x1e9901
  };
  const _0x11e727 = await connect(_0x233445);
  let _0x418e4a = "CONNECT " + _0x532a0b + ":" + _0x5822a0 + " HTTP/1.1\r\n";
  _0x418e4a += "Host: " + _0x532a0b + ":" + _0x5822a0 + "\r\n";
  if (_0xefc0bb && _0x2cd4f2) {
    {
      const _0x13d9d7 = _0xefc0bb + ":" + _0x2cd4f2;
      const _0x26987c = btoa(_0x13d9d7);
      _0x418e4a += "Proxy-Authorization: Basic " + _0x26987c + "\r\n";
    }
  }
  _0x418e4a += "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\r\n";
  _0x418e4a += "Proxy-Connection: Keep-Alive\r\n";
  _0x418e4a += "Connection: Keep-Alive\r\n";
  _0x418e4a += "\r\n";
  _0x2247c4("正在连接到 " + _0x532a0b + ":" + _0x5822a0 + " 通过代理 " + _0x1a1139 + ":" + _0x1e9901);
  try {
    {
      const _0x4d1f9c = _0x11e727.writable.getWriter();
      await _0x4d1f9c.write(new TextEncoder().encode(_0x418e4a));
      _0x4d1f9c.releaseLock();
    }
  } catch (_0x2db8bb) {
    {
      console.error("发送HTTP CONNECT请求失败:", _0x2db8bb);
      throw new Error("发送HTTP CONNECT请求失败: " + _0x2db8bb.message);
    }
  }
  const _0x1bd890 = _0x11e727.readable.getReader();
  let _0x55309d = "";
  let _0x21ad4e = false;
  let _0x158764 = new Uint8Array(0);
  try {
    {
      while (true) {
        {
          const {
            value: _0x3cbcf1,
            done: _0x279c5f
          } = await _0x1bd890.read();
          if (_0x279c5f) {
            {
              console.error("HTTP代理连接中断");
              throw new Error("HTTP代理连接中断");
            }
          }
          const _0x44c999 = new Uint8Array(_0x158764.length + _0x3cbcf1.length);
          _0x44c999.set(_0x158764);
          _0x44c999.set(_0x3cbcf1, _0x158764.length);
          _0x158764 = _0x44c999;
          _0x55309d = new TextDecoder().decode(_0x158764);
          if (_0x55309d.includes("\r\n\r\n")) {
            {
              const _0x35da20 = _0x55309d.indexOf("\r\n\r\n") + 4;
              const _0x4fb542 = _0x55309d.substring(0, _0x35da20);
              _0x2247c4("收到HTTP代理响应: " + _0x4fb542.split("\r\n")[0]);
              if (_0x4fb542.startsWith("HTTP/1.1 200") || _0x4fb542.startsWith("HTTP/1.0 200")) {
                {
                  _0x21ad4e = true;
                  if (_0x35da20 < _0x158764.length) {
                    {
                      const _0x56ce0e = _0x158764.slice(_0x35da20);
                      const _0x256ba4 = new ReadableStream({
                        start(_0x2cf584) {
                          {
                            _0x2cf584.enqueue(_0x56ce0e);
                          }
                        }
                      });
                      const {
                        readable: _0x801565,
                        writable: _0x339fcf
                      } = new TransformStream();
                      _0x256ba4.pipeTo(_0x339fcf).catch(_0xaf0de1 => console.error("处理剩余数据错误:", _0xaf0de1));
                      _0x11e727.readable = _0x801565;
                    }
                  }
                }
              } else {
                {
                  const _0x3ac1fb = "HTTP代理连接失败: " + _0x4fb542.split("\r\n")[0];
                  console.error(_0x3ac1fb);
                  throw new Error(_0x3ac1fb);
                }
              }
              break;
            }
          }
        }
      }
    }
  } catch (_0x69c85f) {
    {
      _0x1bd890.releaseLock();
      throw new Error("处理HTTP代理响应失败: " + _0x69c85f.message);
    }
  }
  _0x1bd890.releaseLock();
  if (!_0x21ad4e) {
    {
      throw new Error("HTTP代理连接失败: 未收到成功响应");
    }
  }
  _0x2247c4("HTTP代理连接成功: " + _0x532a0b + ":" + _0x5822a0);
  return _0x11e727;
}
function a0_0x8cd168(_0x48f397) {
  let [_0x3675ab, _0x49ded5] = _0x48f397.split("@").reverse();
  let _0x18b128;
  let _0x226435;
  let _0x93d319;
  let _0x2fe717;
  if (_0x49ded5) {
    {
      const _0x545240 = _0x49ded5.split(":");
      if (_0x545240.length !== 2) {
        {
          throw new Error("无效的 SOCKS 地址格式：认证部分必须是 \"username:password\" 的形式");
        }
      }
      [_0x18b128, _0x226435] = _0x545240;
    }
  }
  const _0x1b4048 = _0x3675ab.split(":");
  _0x2fe717 = Number(_0x1b4048.pop());
  if (isNaN(_0x2fe717)) {
    {
      throw new Error("无效的 SOCKS 地址格式：端口号必须是数字");
    }
  }
  _0x93d319 = _0x1b4048.join(":");
  const _0x537db8 = /^\[.*\]$/;
  if (_0x93d319.includes(":") && !_0x537db8.test(_0x93d319)) {
    {
      throw new Error("无效的 SOCKS 地址格式：IPv6 地址必须用方括号括起来，如 [2001:db8::1]");
    }
  }
  const _0x508449 = {
    username: _0x18b128,
    password: _0x226435,
    hostname: _0x93d319,
    port: _0x2fe717
  };
  return _0x508449;
}
function a0_0x24f06a(_0x2e7b87, _0x5979d6, _0x5a08bb, _0x4ea983, _0x397929, _0x1e35ce) {
  if (_0x1e35ce) {
    _0x2e7b87 = atob(_0x2e7b87);
  }
  _0x2e7b87 = _0x2e7b87.replace(new RegExp(_0x4ea983, "g"), _0x5979d6).replace(new RegExp(_0x397929, "g"), _0x5a08bb);
  if (_0x1e35ce) {
    _0x2e7b87 = btoa(_0x2e7b87);
  }
  return _0x2e7b87;
}
async function a0_0x2e696a(_0xb93f6) {
  const _0x3f60f8 = new TextEncoder();
  const _0x4ecc33 = await crypto.subtle.digest("MD5", _0x3f60f8.encode(_0xb93f6));
  const _0x32cf37 = Array.from(new Uint8Array(_0x4ecc33));
  const _0x1595f4 = _0x32cf37.map(_0x58e51d => _0x58e51d.toString(16).padStart(2, "0")).join("");
  const _0x20fe80 = await crypto.subtle.digest("MD5", _0x3f60f8.encode(_0x1595f4.slice(7, 27)));
  const _0x4938c6 = Array.from(new Uint8Array(_0x20fe80));
  const _0x5a501d = _0x4938c6.map(_0x31e802 => _0x31e802.toString(16).padStart(2, "0")).join("");
  return _0x5a501d.toLowerCase();
}
async function a0_0x33c014(_0x2f6d90, _0x53d139) {
  const _0x471f6d = await a0_0x4ac62b(_0x2f6d90);
  const _0x2c67c5 = _0x471f6d[Math.floor(Math.random() * _0x471f6d.length)];
  let _0x42b14b = new URL(_0x2c67c5);
  console.log(_0x42b14b);
  let _0x534770 = _0x42b14b.protocol.slice(0, -1) || "https";
  let _0x205780 = _0x42b14b.hostname;
  let _0x220f50 = _0x42b14b.pathname;
  let _0x7b04b6 = _0x42b14b.search;
  if (_0x220f50.charAt(_0x220f50.length - 1) == "/") {
    {
      _0x220f50 = _0x220f50.slice(0, -1);
    }
  }
  _0x220f50 += _0x53d139.pathname;
  let _0x1aadaa = _0x534770 + "://" + _0x205780 + _0x220f50 + _0x7b04b6;
  let _0x361763 = await fetch(_0x1aadaa);
  let _0x2050bb = new Response(_0x361763.body, {
    status: _0x361763.status,
    statusText: _0x361763.statusText,
    headers: _0x361763.headers
  });
  _0x2050bb.headers.set("X-New-URL", _0x1aadaa);
  return _0x2050bb;
}
const a0_0x1b74b7 = atob("ZG14bGMzTT0=");
function a0_0x31f475(_0x173542, _0x4af045) {
  const _0x366d9f = atob(a0_0x1b74b7);
  const _0x267f25 = a0_0x3de4b2;
  let _0x58bbad = _0x4af045;
  let _0x16103d = 443;
  const _0x36a769 = _0x173542;
  const _0x347ea6 = "none";
  const _0x1b22a8 = "ws";
  const _0x23ea76 = _0x4af045;
  const _0xb81a90 = a0_0x57ee09;
  let _0x37473f = ["tls", true];
  const _0x5a2516 = _0x4af045;
  const _0x1bb7a4 = "randomized";
  _0x4af045.includes(".workers.dev") && (_0x58bbad = atob("dmlzYS5jbg=="), _0x16103d = 80, _0x37473f = ["", false]);
  const _0x24e112 = _0x366d9f + "://" + _0x36a769 + "@" + _0x58bbad + ":" + _0x16103d + "?encry" + "p" + (atob("dGlvbj0=") + _0x347ea6 + "&security=" + _0x37473f[0] + "&sni=" + _0x5a2516 + "&fp=" + _0x1bb7a4 + "&type=" + _0x1b22a8 + "&host=" + _0x23ea76 + "&path=" + (encodeURIComponent(_0xb81a90) + a0_0x565875) + "&fragment=1,40-60,30-50,tlshello#" + encodeURIComponent(_0x267f25));
  const _0x4e3f3c = "- {name: " + a0_0x3de4b2 + ", server: " + _0x58bbad + ", port: " + _0x16103d + ", type: " + _0x366d9f + ", uuid: " + _0x36a769 + ", tls: " + _0x37473f[1] + ", alpn: [h3], udp: false, sni: " + _0x5a2516 + ", tfo: false, skip-cert-verify: " + a0_0x3167fd + ", servername: " + _0x23ea76 + ", client-fingerprint: " + _0x1bb7a4 + ", network: " + _0x1b22a8 + ", ws-opts: {path: \"" + _0xb81a90 + "\", headers: {" + _0x23ea76 + "}}}";
  return [_0x24e112, _0x4e3f3c];
}
let a0_0x2e289f = ["sub", "base64", "b64", "clash", "singbox", "sb"];
const a0_0x3db76d = decodeURIComponent(atob("dGVsZWdyYW0lMjAlRTQlQkElQTQlRTYlQjUlODElRTclQkUlQTQlMjAlRTYlOEElODAlRTYlOUMlQUYlRTUlQTQlQTclRTQlQkQlQUMlN0UlRTUlOUMlQTglRTclQkElQkYlRTUlOEYlOTElRTclODklOEMhJTNDYnIlM0UKJTNDYSUyMGhyZWYlM0QlMjdodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlMjclM0VodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlM0MlMkZhJTNFJTNDYnIlM0UKLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJTNDYnIlM0UKZ2l0aHViJTIwJUU5JUExJUI5JUU3JTlCJUFFJUU1JTlDJUIwJUU1JTlEJTgwJTIwU3RhciFTdGFyIVN0YXIhISElM0NiciUzRQolM0NhJTIwaHJlZiUzRCUyN2h0dHBzJTNBJTJGJTJGZ2l0aHViLmNvbSUyRmNtbGl1JTJGZWRnZXR1bm5lbCUyNyUzRWh0dHBzJTNBJTJGJTJGZ2l0aHViLmNvbSUyRmNtbGl1JTJGZWRnZXR1bm5lbCUzQyUyRmElM0UlM0NiciUzRQotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0lM0NiciUzRQolMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjMlMjM="));
async function a0_0x496ebd(_0x26ab6f, _0x2001a5, _0x5a3642, _0x242e06, _0x37a720, _0x58b3d2, _0x507fbd, _0x1c7bb3, _0x490cb6) {
  if (_0x5a3642) {
    {
      const _0x57510c = _0x5a3642.match(/^(?:https?:\/\/)?([^\/]+)/);
      _0x57510c && (_0x5a3642 = _0x57510c[1]);
      const _0x3857e9 = await a0_0x4ac62b(_0x5a3642);
      if (_0x3857e9.length > 1) {
        _0x5a3642 = _0x3857e9[0];
      }
    }
  } else {
    {
      if (_0x490cb6.KV) {
        {
          await a0_0x4b80d1(_0x490cb6);
          const _0x5f11d8 = await _0x490cb6.KV.get("ADD.txt");
          if (_0x5f11d8) {
            {
              const _0x31ab0d = await a0_0x4ac62b(_0x5f11d8);
              const _0x22182e = {
                "接口地址": new Set(),
                "链接地址": new Set(),
                "优选地址": new Set()
              };
              for (const _0xdce8ce of _0x31ab0d) {
                {
                  if (_0xdce8ce.startsWith("https://")) {
                    {
                      _0x22182e["接口地址"].add(_0xdce8ce);
                    }
                  } else {
                    if (_0xdce8ce.includes("://")) {
                      _0x22182e["链接地址"].add(_0xdce8ce);
                    } else {
                      {
                        _0x22182e["优选地址"].add(_0xdce8ce);
                      }
                    }
                  }
                }
              }
              a0_0x1a7b7b = [..._0x22182e["接口地址"]];
              a0_0x5a6510 = [..._0x22182e["链接地址"]];
              a0_0x3543b5 = [..._0x22182e["优选地址"]];
            }
          }
        }
      }
      if (a0_0x3543b5.length + a0_0x1a7b7b.length + a0_0x4a9618.length + a0_0x4a6d73.length + a0_0x15275e.length == 0) {
        {
          let _0x2a6d96 = ["103.21.244.0/24", "104.16.0.0/13", "104.24.0.0/14", "172.64.0.0/14", "104.16.0.0/14", "104.24.0.0/15", "141.101.64.0/19", "172.64.0.0/14", "188.114.96.0/21", "190.93.240.0/21", "162.159.152.0/23", "104.16.0.0/13", "104.24.0.0/14", "172.64.0.0/14", "104.16.0.0/14", "104.24.0.0/15", "141.101.64.0/19", "172.64.0.0/14", "188.114.96.0/21", "190.93.240.0/21"];
          function _0x3d8131(_0x2e03ef) {
            {
              const [_0x3b6f1b, _0x3dac68] = _0x2e03ef.split("/");
              const _0x434a0f = _0x3b6f1b.split(".").map(Number);
              const _0x4c7fa3 = 32 - parseInt(_0x3dac68, 10);
              const _0x13cd29 = Math.pow(2, _0x4c7fa3) - 1;
              const _0x1aa4ed = Math.floor(Math.random() * _0x13cd29);
              const _0x129aaa = _0x434a0f.map((_0xacb202, _0x136216) => {
                {
                  if (_0x136216 < 2) {
                    return _0xacb202;
                  }
                  if (_0x136216 === 2) {
                    return (_0xacb202 & 255 << _0x4c7fa3 - 8) + (_0x1aa4ed >> 8 & 255);
                  }
                  return (_0xacb202 & 255 << _0x4c7fa3) + (_0x1aa4ed & 255);
                }
              });
              return _0x129aaa.join(".");
            }
          }
          a0_0x3543b5 = a0_0x3543b5.concat("127.0.0.1:1234#CFnat");
          let _0x1d5df4 = 1;
          if (_0x2001a5.includes("worker") || _0x2001a5.includes("notls")) {
            {
              const _0x4f5a50 = a0_0x11c61a.concat("80");
              a0_0x4a9618 = a0_0x4a9618.concat(_0x2a6d96.map(_0x4a1071 => _0x3d8131(_0x4a1071) + ":" + _0x4f5a50[Math.floor(Math.random() * _0x4f5a50.length)] + "#CF随机节点" + String(_0x1d5df4++).padStart(2, "0")));
            }
          } else {
            {
              const _0x549cf0 = a0_0x58c27a.concat("443");
              a0_0x3543b5 = a0_0x3543b5.concat(_0x2a6d96.map(_0x162fee => _0x3d8131(_0x162fee) + ":" + _0x549cf0[Math.floor(Math.random() * _0x549cf0.length)] + "#CF随机节点" + String(_0x1d5df4++).padStart(2, "0")));
            }
          }
        }
      }
    }
  }
  const _0xfe4b76 = _0x58b3d2.pathname == "/" + a0_0x106114 ? a0_0x106114 : _0x26ab6f;
  const _0x14a049 = _0x242e06.toLowerCase();
  const _0x16fd94 = a0_0x31f475(_0x26ab6f, _0x2001a5);
  const _0x3f0713 = _0x16fd94[0];
  const _0x5bb5f4 = _0x16fd94[1];
  let _0x238796 = "";
  if (_0x2001a5.includes(".workers.dev")) {
    {
      if (a0_0x1f9bab.length != 0) {
        _0x238796 = a0_0x1f9bab[Math.floor(Math.random() * a0_0x1f9bab.length)] + "/";
      }
    }
  }
  if (_0x14a049.includes("mozilla") && !a0_0x2e289f.some(_0x1d623a => _0x58b3d2.searchParams.has(_0x1d623a))) {
    {
      const _0x2f5676 = a0_0x46c1e0.map(_0x4bf9da => {
        {
          if (_0x4bf9da.includes("@")) {
            return _0x4bf9da.split("@")[1];
          } else {
            if (_0x4bf9da.includes("//")) {
              return _0x4bf9da.split("//")[1];
            } else {
              return _0x4bf9da;
            }
          }
        }
      });
      let _0x2d0e2c = "";
      if (a0_0x401c3e.length > 0 && a0_0x4d2607) {
        {
          _0x2d0e2c = "" + ((a0_0x23efe8 ? "HTTP" : "Socks5") + decodeURIComponent("%EF%BC%88%E7%99%BD%E5%90%8D%E5%8D%95%EF%BC%89%3A%20"));
          if (a0_0x401c3e.includes(atob("YWxsIGlu")) || a0_0x401c3e.includes(atob("Kg=="))) {
            _0x2d0e2c += decodeURIComponent("%E6%89%80%E6%9C%89%E6%B5%81%E9%87%8F") + "<br>";
          } else {
            _0x2d0e2c += "<br>&nbsp;&nbsp;" + a0_0x401c3e.join("<br>&nbsp;&nbsp;") + "<br>";
          }
        }
      }
      let _0x639293 = "<br>";
      if (_0x5a3642) {
        {
          if (a0_0x4d2607) {
            _0x639293 += "CFCDN（访问方式）: " + (a0_0x23efe8 ? "HTTP" : "Socks5") + "<br>&nbsp;&nbsp;" + _0x2f5676.join("<br>&nbsp;&nbsp;") + "<br>" + _0x2d0e2c;
          } else {
            if (a0_0x296b03 && a0_0x296b03 != "") {
              _0x639293 += "CFCDN（访问方式）: ProxyIP<br>&nbsp;&nbsp;" + a0_0x47862d.join("<br>&nbsp;&nbsp;") + "<br>";
            } else {
              if (_0x37a720 == "true") {
                _0x639293 += "CFCDN（访问方式）: 自动获取ProxyIP<br>";
              } else {
                _0x639293 += "CFCDN（访问方式）: 无法访问, 需要您设置 proxyIP/PROXYIP ！！！<br>";
              }
            }
          }
          _0x639293 += "<br>SUB（优选订阅生成器）: " + _0x5a3642;
        }
      } else {
        {
          if (a0_0x4d2607) {
            _0x639293 += "CFCDN（访问方式）: " + (a0_0x23efe8 ? "HTTP" : "Socks5") + "<br>&nbsp;&nbsp;" + _0x2f5676.join("<br>&nbsp;&nbsp;") + "<br>" + _0x2d0e2c;
          } else {
            if (a0_0x296b03 && a0_0x296b03 != "") {
              _0x639293 += "CFCDN（访问方式）: ProxyIP<br>&nbsp;&nbsp;" + a0_0x47862d.join("<br>&nbsp;&nbsp;") + "<br>";
            } else {
              _0x639293 += "CFCDN（访问方式）: 无法访问, 需要您设置 proxyIP/PROXYIP ！！！<br>";
            }
          }
          let _0x298d7d = "";
          if (_0x490cb6.KV) {
            _0x298d7d = " <a href='" + _0x58b3d2.pathname + "/edit'>编辑优选列表</a>";
          }
          _0x639293 += "<br>您的订阅内容由 内置 addresses/ADD* 参数变量提供" + _0x298d7d + "<br>";
          if (a0_0x3543b5.length > 0) {
            _0x639293 += "ADD（TLS优选域名&IP）: <br>&nbsp;&nbsp;" + a0_0x3543b5.join("<br>&nbsp;&nbsp;") + "<br>";
          }
          if (a0_0x4a9618.length > 0) {
            _0x639293 += "ADDNOTLS（noTLS优选域名&IP）: <br>&nbsp;&nbsp;" + a0_0x4a9618.join("<br>&nbsp;&nbsp;") + "<br>";
          }
          if (a0_0x1a7b7b.length > 0) {
            _0x639293 += "ADDAPI（TLS优选域名&IP 的 API）: <br>&nbsp;&nbsp;" + a0_0x1a7b7b.join("<br>&nbsp;&nbsp;") + "<br>";
          }
          if (a0_0x4a6d73.length > 0) {
            _0x639293 += "ADDNOTLSAPI（noTLS优选域名&IP 的 API）: <br>&nbsp;&nbsp;" + a0_0x4a6d73.join("<br>&nbsp;&nbsp;") + "<br>";
          }
          if (a0_0x15275e.length > 0) {
            _0x639293 += "ADDCSV（IPTest测速csv文件 限速 " + a0_0x9744c3 + " ）: <br>&nbsp;&nbsp;" + a0_0x15275e.join("<br>&nbsp;&nbsp;") + "<br>";
          }
        }
      }
      if (a0_0x106114 && _0x58b3d2.pathname !== "/" + a0_0x106114) {
        _0x639293 = "";
      } else {
        _0x639293 += "<br>SUBAPI（订阅转换后端）: " + a0_0x51c55c + "://" + a0_0xed3d3e + "<br>SUBCONFIG（订阅转换配置文件）: " + a0_0x2308f4;
      }
      const _0x2f6bcb = _0xfe4b76 != _0x26ab6f ? "TOKEN: " + _0xfe4b76 + "<br>UUIDNow: " + _0x26ab6f + "<br>UUIDLow: " + a0_0x167053 + "<br>" + a0_0x22e51b + "TIME（动态UUID有效时间）: " + a0_0x26dfef + " 天<br>UPTIME（动态UUID更新时间）: " + a0_0x362756 + " 时（北京时间）<br><br>" : "" + a0_0x22e51b;
      const _0x2d30f7 = "\n\t\t\t################################################################<br>\n\t\t\tSubscribe / sub 订阅地址, 点击链接自动 <strong>复制订阅链接</strong> 并 <strong>生成订阅二维码</strong> <br>\n\t\t\t---------------------------------------------------------------<br>\n\t\t\t自适应订阅地址:<br>\n\t\t\t<a href=\"javascript:void(0)\" onclick=\"copyToClipboard('https://" + _0x238796 + _0x2001a5 + "/" + _0xfe4b76 + "?sub','qrcode_0')\" style=\"color:blue;text-decoration:underline;cursor:pointer;\">https://" + _0x238796 + _0x2001a5 + "/" + _0xfe4b76 + "</a><br>\n\t\t\t<div id=\"qrcode_0\" style=\"margin: 10px 10px 10px 10px;\"></div>\n\t\t\tBase64订阅地址:<br>\n\t\t\t<a href=\"javascript:void(0)\" onclick=\"copyToClipboard('https://" + _0x238796 + _0x2001a5 + "/" + _0xfe4b76 + "?b64','qrcode_1')\" style=\"color:blue;text-decoration:underline;cursor:pointer;\">https://" + _0x238796 + _0x2001a5 + "/" + _0xfe4b76 + "?b64</a><br>\n\t\t\t<div id=\"qrcode_1\" style=\"margin: 10px 10px 10px 10px;\"></div>\n\t\t\tclash订阅地址:<br>\n\t\t\t<a href=\"javascript:void(0)\" onclick=\"copyToClipboard('https://" + _0x238796 + _0x2001a5 + "/" + _0xfe4b76 + "?clash','qrcode_2')\" style=\"color:blue;text-decoration:underline;cursor:pointer;\">https://" + _0x238796 + _0x2001a5 + "/" + _0xfe4b76 + "?clash</a><br>\n\t\t\t<div id=\"qrcode_2\" style=\"margin: 10px 10px 10px 10px;\"></div>\n\t\t\tsingbox订阅地址:<br>\n\t\t\t<a href=\"javascript:void(0)\" onclick=\"copyToClipboard('https://" + _0x238796 + _0x2001a5 + "/" + _0xfe4b76 + "?sb','qrcode_3')\" style=\"color:blue;text-decoration:underline;cursor:pointer;\">https://" + _0x238796 + _0x2001a5 + "/" + _0xfe4b76 + "?sb</a><br>\n\t\t\t<div id=\"qrcode_3\" style=\"margin: 10px 10px 10px 10px;\"></div>\n\t\t\tloon订阅地址:<br>\n\t\t\t<a href=\"javascript:void(0)\" onclick=\"copyToClipboard('https://" + _0x238796 + _0x2001a5 + "/" + _0xfe4b76 + "?loon','qrcode_5')\" style=\"color:blue;text-decoration:underline;cursor:pointer;\">https://" + _0x238796 + _0x2001a5 + "/" + _0xfe4b76 + "?loon</a><br>\n\t\t\t<div id=\"qrcode_5\" style=\"margin: 10px 10px 10px 10px;\"></div>\n\t\t\t<strong><a href=\"javascript:void(0);\" id=\"noticeToggle\" onclick=\"toggleNotice()\">实用订阅技巧∨</a></strong><br>\n\t\t\t\t<div id=\"noticeContent\" class=\"notice-content\" style=\"display: none;\">\n\t\t\t\t\t<strong>1.</strong> 如您使用的是 PassWall、PassWall2 路由插件，订阅编辑的 <strong>用户代理(User-Agent)</strong> 设置为 <strong>PassWall</strong> 即可；<br>\n\t\t\t\t\t<br>\n\t\t\t\t\t<strong>2.</strong> 如您使用的是 SSR+ 路由插件，推荐使用 <strong>Base64订阅地址</strong> 进行订阅；<br>\n\t\t\t\t\t<br>\n\t\t\t\t\t<strong>3.</strong> 快速切换 <a href='" + atob("aHR0cHM6Ly9naXRodWIuY29tL2NtbGl1L1dvcmtlclZsZXNzMnN1Yg==") + "'>优选订阅生成器</a> 至：sub.google.com，您可将\"?sub=sub.google.com\"参数添加到链接末尾，例如：<br>\n\t\t\t\t\t&nbsp;&nbsp;https://" + _0x238796 + _0x2001a5 + "/" + _0xfe4b76 + "<strong>?sub=sub.google.com</strong><br>\n\t\t\t\t\t<br>\n\t\t\t\t\t<strong>4.</strong> 快速更换 PROXYIP 至：proxyip.cmliussss.net:443，您可将\"?proxyip=proxyip.cmliussss.net:443\"参数添加到链接末尾，例如：<br>\n\t\t\t\t\t&nbsp;&nbsp; https://" + _0x238796 + _0x2001a5 + "/" + _0xfe4b76 + "<strong>?proxyip=proxyip.cmliussss.net:443</strong><br>\n\t\t\t\t\t<br>\n\t\t\t\t\t<strong>5.</strong> 快速更换 SOCKS5 至：user:password@127.0.0.1:1080，您可将\"?socks5=user:password@127.0.0.1:1080\"参数添加到链接末尾，例如：<br>\n\t\t\t\t\t&nbsp;&nbsp;https://" + _0x238796 + _0x2001a5 + "/" + _0xfe4b76 + "<strong>?socks5=user:password@127.0.0.1:1080</strong><br>\n\t\t\t\t\t<br>\n\t\t\t\t\t<strong>6.</strong> 如需指定多个参数则需要使用'&'做间隔，例如：<br>\n\t\t\t\t\t&nbsp;&nbsp;https://" + _0x238796 + _0x2001a5 + "/" + _0xfe4b76 + "?sub=sub.google.com<strong>&</strong>proxyip=proxyip.cmliussss.net<br>\n\t\t\t\t</div>\n\t\t\t<script src=\"https://cdn.jsdelivr.net/npm/@keeex/qrcodejs-kx@1.0.2/qrcode.min.js\"></script>\n\t\t\t<script>\n\t\t\tfunction copyToClipboard(text, qrcode) {\n\t\t\t\tnavigator.clipboard.writeText(text).then(() => {\n\t\t\t\t\talert('已复制到剪贴板');\n\t\t\t\t}).catch(err => {\n\t\t\t\t\tconsole.error('复制失败:', err);\n\t\t\t\t});\n\t\t\t\tconst qrcodeDiv = document.getElementById(qrcode);\n\t\t\t\tqrcodeDiv.innerHTML = '';\n\t\t\t\tnew QRCode(qrcodeDiv, {\n\t\t\t\t\ttext: text,\n\t\t\t\t\twidth: 220, // 调整宽度\n\t\t\t\t\theight: 220, // 调整高度\n\t\t\t\t\tcolorDark: \"#000000\", // 二维码颜色\n\t\t\t\t\tcolorLight: \"#ffffff\", // 背景颜色\n\t\t\t\t\tcorrectLevel: QRCode.CorrectLevel.Q, // 设置纠错级别\n\t\t\t\t\tscale: 1 // 调整像素颗粒度\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tfunction toggleNotice() {\n\t\t\t\tconst noticeContent = document.getElementById('noticeContent');\n\t\t\t\tconst noticeToggle = document.getElementById('noticeToggle');\n\t\t\t\tif (noticeContent.style.display === 'none') {\n\t\t\t\t\tnoticeContent.style.display = 'block';\n\t\t\t\t\tnoticeToggle.textContent = '实用订阅技巧∧';\n\t\t\t\t} else {\n\t\t\t\t\tnoticeContent.style.display = 'none'; \n\t\t\t\t\tnoticeToggle.textContent = '实用订阅技巧∨';\n\t\t\t\t}\n\t\t\t}\n\t\t\t</script>\n\t\t\t---------------------------------------------------------------<br>\n\t\t\t################################################################<br>\n\t\t\t" + a0_0x3de4b2 + " 配置信息<br>\n\t\t\t---------------------------------------------------------------<br>\n\t\t\t" + _0x2f6bcb + "HOST: " + _0x2001a5 + "<br>\n\t\t\tUUID: " + _0x26ab6f + "<br>\n\t\t\tFKID: " + _0x507fbd + "<br>\n\t\t\tUA: " + _0x242e06 + "<br>\n\t\t\tSCV（跳过TLS证书验证）: " + a0_0x3167fd + "<br>\n\t\t\t" + _0x639293 + "<br>\n\t\t\t---------------------------------------------------------------<br>\n\t\t\t################################################################<br>\n\t\t\tv2ray<br>\n\t\t\t---------------------------------------------------------------<br>\n\t\t\t<a href=\"javascript:void(0)\" onclick=\"copyToClipboard('" + _0x3f0713 + "','qrcode_v2ray')\" style=\"color:blue;text-decoration:underline;cursor:pointer;\">" + _0x3f0713 + "</a><br>\n\t\t\t<div id=\"qrcode_v2ray\" style=\"margin: 10px 10px 10px 10px;\"></div>\n\t\t\t---------------------------------------------------------------<br>\n\t\t\t################################################################<br>\n\t\t\tclash-meta<br>\n\t\t\t---------------------------------------------------------------<br>\n\t\t\t" + _0x5bb5f4 + "<br>\n\t\t\t---------------------------------------------------------------<br>\n\t\t\t################################################################<br>\n\t\t\t" + a0_0x3db76d + "\n\t\t\t";
      return "<div style=\"font-size:13px;\">" + _0x2d30f7 + "</div>";
    }
  } else {
    {
      if (typeof fetch != "function") {
        {
          return "Error: fetch is not available in this environment.";
        }
      }
      let _0x519529 = [];
      let _0x187e6f = [];
      let _0xdd2726 = [];
      let _0x4ad8cb = [];
      if (_0x2001a5.includes(".workers.dev")) {
        {
          a0_0x1240e4 = "true";
          _0x1c7bb3 = _0x1c7bb3 + ".workers.dev";
          _0xdd2726 = await a0_0x2d3b29(a0_0x4a6d73);
          _0x4ad8cb = await a0_0x5cd2c4("FALSE");
        }
      } else {
        if (_0x2001a5.includes(".pages.dev")) {
          {
            _0x1c7bb3 = _0x1c7bb3 + ".pages.dev";
          }
        } else {
          _0x2001a5.includes("worker") || _0x2001a5.includes("notls") || a0_0x1240e4 == "true" ? (a0_0x1240e4 = "true", _0x1c7bb3 = "notls" + _0x1c7bb3 + ".net", _0xdd2726 = await a0_0x2d3b29(a0_0x4a6d73), _0x4ad8cb = await a0_0x5cd2c4("FALSE")) : _0x1c7bb3 = _0x1c7bb3 + ".xyz";
        }
      }
      console.log("虚假HOST: " + _0x1c7bb3);
      let _0x31e712 = a0_0x51c55c + "://" + _0x5a3642 + "/sub?host=" + _0x1c7bb3 + "&uuid=" + (_0x507fbd + atob("JmVkZ2V0dW5uZWw9Y21saXUmcHJveHlpcD0=") + _0x37a720) + "&path=" + encodeURIComponent(a0_0x57ee09);
      let _0x2f77cb = true;
      if (!_0x5a3642 || _0x5a3642 == "") {
        {
          if (_0x2001a5.includes("workers.dev")) {
            {
              a0_0x1f9bab = [...new Set(a0_0x1f9bab)];
            }
          }
          _0x519529 = await a0_0x2d3b29(a0_0x1a7b7b);
          _0x187e6f = await a0_0x5cd2c4("TRUE");
          _0x31e712 = "https://" + _0x2001a5 + "/" + (_0x507fbd + _0x58b3d2.search);
          if (_0x2001a5.includes("worker") || _0x2001a5.includes("notls") || a0_0x1240e4 == "true") {
            {
              if (_0x58b3d2.search) {
                _0x31e712 += "&notls";
              } else {
                _0x31e712 += "?notls";
              }
            }
          }
          console.log("虚假订阅: " + _0x31e712);
        }
      }
      if (!_0x14a049.includes("CF-Workers-SUB".toLowerCase()) && !_0x58b3d2.searchParams.has("b64") && !_0x58b3d2.searchParams.has("base64")) {
        {
          if (_0x14a049.includes("clash") && !_0x14a049.includes("nekobox") || _0x58b3d2.searchParams.has("clash") && !_0x14a049.includes("subconverter")) {
            {
              _0x31e712 = a0_0x51c55c + "://" + a0_0xed3d3e + "/sub?target=clash&url=" + encodeURIComponent(_0x31e712) + "&insert=false&config=" + encodeURIComponent(a0_0x2308f4) + "&emoji=" + a0_0x56c92a + "&list=false&tfo=false&scv=" + a0_0x3167fd + "&fdn=false&sort=false&new_name=true";
              _0x2f77cb = false;
            }
          } else {
            if (_0x14a049.includes("sing-box") || _0x14a049.includes("singbox") || (_0x58b3d2.searchParams.has("singbox") || _0x58b3d2.searchParams.has("sb")) && !_0x14a049.includes("subconverter")) {
              {
                _0x31e712 = a0_0x51c55c + "://" + a0_0xed3d3e + "/sub?target=singbox&url=" + encodeURIComponent(_0x31e712) + "&insert=false&config=" + encodeURIComponent(a0_0x2308f4) + "&emoji=" + a0_0x56c92a + "&list=false&tfo=false&scv=" + a0_0x3167fd + "&fdn=false&sort=false&new_name=true";
                _0x2f77cb = false;
              }
            } else {
              (_0x14a049.includes("loon") || _0x58b3d2.searchParams.has("loon") && !_0x14a049.includes("subconverter")) && (_0x31e712 = a0_0x51c55c + "://" + a0_0xed3d3e + "/sub?target=loon&url=" + encodeURIComponent(_0x31e712) + "&insert=false&config=" + encodeURIComponent(a0_0x2308f4) + "&emoji=" + a0_0x56c92a + "&list=false&tfo=false&scv=" + a0_0x3167fd + "&fdn=false&sort=false&new_name=true", _0x2f77cb = false);
            }
          }
        }
      }
      try {
        {
          let _0x14eafc;
          if ((!_0x5a3642 || _0x5a3642 == "") && _0x2f77cb == true) {
            _0x14eafc = await a0_0x307689(_0x1c7bb3, _0x507fbd, a0_0x1240e4, _0x519529, _0x187e6f, _0xdd2726, _0x4ad8cb);
          } else {
            {
              const _0x4bdde5 = await fetch(_0x31e712, {
                headers: {
                  "User-Agent": _0x242e06 + atob("IENGLVdvcmtlcnMtZWRnZXR1bm5lbC9jbWxpdQ==")
                }
              });
              _0x14eafc = await _0x4bdde5.text();
            }
          }
          if (_0x58b3d2.pathname == "/" + _0x507fbd) {
            return _0x14eafc;
          }
          return a0_0x24f06a(_0x14eafc, _0x26ab6f, _0x2001a5, _0x507fbd, _0x1c7bb3, _0x2f77cb);
        }
      } catch (_0x19bcad) {
        {
          console.error("Error fetching content:", _0x19bcad);
          return "Error fetching content: " + _0x19bcad.message;
        }
      }
    }
  }
}
async function a0_0x2d3b29(_0x83b930) {
  if (!_0x83b930 || _0x83b930.length === 0) {
    return [];
  }
  let _0x45f4b3 = "";
  const _0x976943 = new AbortController();
  const _0x5a88b2 = setTimeout(() => {
    _0x976943.abort();
  }, 2000);
  try {
    {
      const _0x5c4a39 = await Promise.allSettled(_0x83b930.map(_0x83fee7 => fetch(_0x83fee7, {
        method: "get",
        headers: {
          Accept: "text/html,application/xhtml+xml,application/xml;",
          "User-Agent": atob("Q0YtV29ya2Vycy1lZGdldHVubmVsL2NtbGl1")
        },
        signal: _0x976943.signal
      }).then(_0x4957bc => _0x4957bc.ok ? _0x4957bc.text() : Promise.reject())));
      for (const [_0x4c286b, _0x2e1a72] of _0x5c4a39.entries()) {
        {
          if (_0x2e1a72.status === "fulfilled") {
            {
              const _0x28dd83 = await _0x2e1a72.value;
              const _0x3f5500 = _0x28dd83.split(/\r?\n/);
              let _0x533389 = "";
              let _0x1f3c67 = "443";
              if (_0x3f5500[0].split(",").length > 3) {
                {
                  const _0x680675 = _0x83b930[_0x4c286b].match(/id=([^&]*)/);
                  if (_0x680675) {
                    _0x533389 = _0x680675[1];
                  }
                  const _0x24df88 = _0x83b930[_0x4c286b].match(/port=([^&]*)/);
                  if (_0x24df88) {
                    _0x1f3c67 = _0x24df88[1];
                  }
                  for (let _0x199cff = 1; _0x199cff < _0x3f5500.length; _0x199cff++) {
                    {
                      const _0x35078a = _0x3f5500[_0x199cff].split(",")[0];
                      if (_0x35078a) {
                        {
                          _0x45f4b3 += _0x35078a + ":" + _0x1f3c67 + (_0x533389 ? "#" + _0x533389 : "") + "\n";
                          if (_0x83b930[_0x4c286b].includes("proxyip=true")) {
                            a0_0xe0ba47.push(_0x35078a + ":" + _0x1f3c67);
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                {
                  if (_0x83b930[_0x4c286b].includes("proxyip=true")) {
                    {
                      a0_0xe0ba47 = a0_0xe0ba47.concat((await a0_0x4ac62b(_0x28dd83)).map(_0x5ebcc8 => {
                        {
                          const _0x600756 = _0x5ebcc8.split("#")[0] || _0x5ebcc8;
                          if (_0x600756.includes(":")) {
                            {
                              const _0x4a3869 = _0x600756.split(":")[1];
                              if (!a0_0x58c27a.includes(_0x4a3869)) {
                                {
                                  return _0x600756;
                                }
                              }
                            }
                          } else {
                            {
                              return _0x600756 + ":443";
                            }
                          }
                          return null;
                        }
                      }).filter(Boolean));
                    }
                  }
                  _0x45f4b3 += _0x28dd83 + "\n";
                }
              }
            }
          }
        }
      }
    }
  } catch (_0x3c20b0) {
    console.error(_0x3c20b0);
  } finally {
    clearTimeout(_0x5a88b2);
  }
  const _0x209dcf = await a0_0x4ac62b(_0x45f4b3);
  return _0x209dcf;
}
async function a0_0x5cd2c4(_0x473450) {
  if (!a0_0x15275e || a0_0x15275e.length === 0) {
    return [];
  }
  let _0x4b8d1a = [];
  for (const _0x235cb0 of a0_0x15275e) {
    try {
      const _0x42f0d9 = await fetch(_0x235cb0);
      if (!_0x42f0d9.ok) {
        console.error("获取CSV地址时出错:", _0x42f0d9.status, _0x42f0d9.statusText);
        continue;
      }
      const _0x15adf2 = await _0x42f0d9.text();
      let _0x3fa58e;
      _0x15adf2.includes("\r\n") ? _0x3fa58e = _0x15adf2.split("\r\n") : _0x3fa58e = _0x15adf2.split("\n");
      const _0x45f54f = _0x3fa58e[0].split(",");
      const _0x378375 = _0x45f54f.indexOf("TLS");
      const _0x55886b = 0;
      const _0x66bd22 = 1;
      const _0x1f7dab = _0x378375 + a0_0x3a2788;
      if (_0x378375 === -1) {
        console.error("CSV文件缺少必需的字段");
        continue;
      }
      for (let _0x29813f = 1; _0x29813f < _0x3fa58e.length; _0x29813f++) {
        const _0x469a88 = _0x3fa58e[_0x29813f].split(",");
        const _0x1ff75f = _0x469a88.length - 1;
        if (_0x469a88[_0x378375].toUpperCase() === _0x473450 && parseFloat(_0x469a88[_0x1ff75f]) > a0_0x9744c3) {
          const _0x2fd2fc = _0x469a88[_0x55886b];
          const _0x5a21c3 = _0x469a88[_0x66bd22];
          const _0x1bf86a = _0x469a88[_0x1f7dab];
          const _0x2f1d41 = _0x2fd2fc + ":" + _0x5a21c3 + "#" + _0x1bf86a;
          _0x4b8d1a.push(_0x2f1d41);
          _0x235cb0.includes("proxyip=true") && _0x469a88[_0x378375].toUpperCase() == "true" && !a0_0x58c27a.includes(_0x5a21c3) && a0_0xe0ba47.push(_0x2fd2fc + ":" + _0x5a21c3);
        }
      }
    } catch (_0x2bf876) {
      console.error("获取CSV地址时出错:", _0x2bf876);
      continue;
    }
  }
  return _0x4b8d1a;
}
function a0_0x307689(_0xe50260, _0x509413, _0x44bbaa, _0x3fa294, _0x2f9fe7, _0x404ae4, _0x343bc1) {
  const _0xae6eaf = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[.*\]):?(\d+)?#?(.*)?$/;
  a0_0x3543b5 = a0_0x3543b5.concat(_0x3fa294);
  a0_0x3543b5 = a0_0x3543b5.concat(_0x2f9fe7);
  let _0x3c4d48;
  if (_0x44bbaa == "true") {
    a0_0x4a9618 = a0_0x4a9618.concat(_0x404ae4);
    a0_0x4a9618 = a0_0x4a9618.concat(_0x343bc1);
    const _0x471906 = [...new Set(a0_0x4a9618)];
    _0x3c4d48 = _0x471906.map(_0x47b862 => {
      let _0x12980e = "-1";
      let _0x1f7f50 = _0x47b862;
      const _0x593c5b = _0x1f7f50.match(_0xae6eaf);
      if (!_0x593c5b) {
        if (_0x47b862.includes(":") && _0x47b862.includes("#")) {
          const _0x296295 = _0x47b862.split(":");
          _0x47b862 = _0x296295[0];
          const _0x2a8254 = _0x296295[1].split("#");
          _0x12980e = _0x2a8254[0];
          _0x1f7f50 = _0x2a8254[1];
        } else {
          if (_0x47b862.includes(":")) {
            const _0x49a9da = _0x47b862.split(":");
            _0x47b862 = _0x49a9da[0];
            _0x12980e = _0x49a9da[1];
          } else {
            if (_0x47b862.includes("#")) {
              const _0x859e83 = _0x47b862.split("#");
              _0x47b862 = _0x859e83[0];
              _0x1f7f50 = _0x859e83[1];
            }
          }
        }
        _0x1f7f50.includes(":") && (_0x1f7f50 = _0x1f7f50.split(":")[0]);
      } else {
        _0x47b862 = _0x593c5b[1];
        _0x12980e = _0x593c5b[2] || _0x12980e;
        _0x1f7f50 = _0x593c5b[3] || _0x47b862;
      }
      if (!a0_0x215f3a(_0x47b862) && _0x12980e == "-1") {
        for (let _0x2f3c40 of a0_0x11c61a) {
          if (_0x47b862.includes(_0x2f3c40)) {
            _0x12980e = _0x2f3c40;
            break;
          }
        }
      }
      if (_0x12980e == "-1") {
        _0x12980e = "80";
      }
      let _0x1a2772 = _0xe50260;
      let _0x4416da = a0_0x57ee09;
      let _0x5133f0 = "";
      const _0x20f474 = atob(a0_0x1b74b7);
      const _0x3297e2 = _0x20f474 + "://" + _0x509413 + "@" + _0x47b862 + ":" + (_0x12980e + atob("P2VuY3J5cHRpb249bm9uZSZzZWN1cml0eT0mdHlwZT13cyZob3N0PQ==") + _0x1a2772) + "&path=" + encodeURIComponent(_0x4416da) + "#" + encodeURIComponent(_0x1f7f50 + _0x5133f0);
      return _0x3297e2;
    }).join("\n");
  }
  const _0x220370 = [...new Set(a0_0x3543b5)];
  const _0x468b94 = _0x220370.map(_0x4c5595 => {
    let _0x102965 = "-1";
    let _0x2d3be8 = _0x4c5595;
    const _0x4c4e15 = _0x2d3be8.match(_0xae6eaf);
    if (!_0x4c4e15) {
      if (_0x4c5595.includes(":") && _0x4c5595.includes("#")) {
        const _0x3fb43d = _0x4c5595.split(":");
        _0x4c5595 = _0x3fb43d[0];
        const _0x4ff6fc = _0x3fb43d[1].split("#");
        _0x102965 = _0x4ff6fc[0];
        _0x2d3be8 = _0x4ff6fc[1];
      } else {
        if (_0x4c5595.includes(":")) {
          const _0x1e41a3 = _0x4c5595.split(":");
          _0x4c5595 = _0x1e41a3[0];
          _0x102965 = _0x1e41a3[1];
        } else {
          if (_0x4c5595.includes("#")) {
            const _0x20c434 = _0x4c5595.split("#");
            _0x4c5595 = _0x20c434[0];
            _0x2d3be8 = _0x20c434[1];
          }
        }
      }
      _0x2d3be8.includes(":") && (_0x2d3be8 = _0x2d3be8.split(":")[0]);
    } else {
      _0x4c5595 = _0x4c4e15[1];
      _0x102965 = _0x4c4e15[2] || _0x102965;
      _0x2d3be8 = _0x4c4e15[3] || _0x4c5595;
    }
    if (!a0_0x215f3a(_0x4c5595) && _0x102965 == "-1") {
      for (let _0x35e5dd of a0_0x58c27a) {
        if (_0x4c5595.includes(_0x35e5dd)) {
          _0x102965 = _0x35e5dd;
          break;
        }
      }
    }
    if (_0x102965 == "-1") {
      _0x102965 = "443";
    }
    let _0x13fc80 = _0xe50260;
    let _0x407df7 = a0_0x57ee09;
    let _0x2e2c70 = "";
    const _0x4630f4 = a0_0xe0ba47.find(_0x1c4d8a => _0x1c4d8a.includes(_0x4c5595));
    if (_0x4630f4) {
      _0x407df7 = "/proxyip=" + _0x4630f4;
    }
    a0_0x1f9bab.length > 0 && _0x13fc80.includes(".workers.dev") && (_0x407df7 = "/" + _0x13fc80 + _0x407df7, _0x13fc80 = a0_0x1f9bab[Math.floor(Math.random() * a0_0x1f9bab.length)], _0x2e2c70 = " 已启用临时域名中转服务，请尽快绑定自定义域！");
    const _0x294022 = atob(a0_0x1b74b7);
    const _0xa7e67b = _0x294022 + "://" + _0x509413 + "@" + _0x4c5595 + ":" + (_0x102965 + atob("P2VuY3J5cHRpb249bm9uZSZzZWN1cml0eT10bHMmc25pPQ==") + _0x13fc80) + "&fp=random&type=ws&host=" + _0x13fc80 + "&path=" + (encodeURIComponent(_0x407df7) + a0_0x565875) + "&fragment=1,40-60,30-50,tlshello#" + encodeURIComponent(_0x2d3be8 + _0x2e2c70);
    return _0xa7e67b;
  }).join("\n");
  let _0x32ab3a = _0x468b94;
  if (_0x44bbaa == "true") {
    _0x32ab3a += "\n" + _0x3c4d48;
  }
  if (a0_0x5a6510.length > 0) {
    _0x32ab3a += "\n" + a0_0x5a6510.join("\n");
  }
  return btoa(_0x32ab3a);
}
async function a0_0x4ac62b(_0x4705d7) {
  var _0x1d13a = _0x4705d7.replace(/[	|"'\r\n]+/g, ",").replace(/,+/g, ",");
  if (_0x1d13a.charAt(0) == ",") {
    _0x1d13a = _0x1d13a.slice(1);
  }
  if (_0x1d13a.charAt(_0x1d13a.length - 1) == ",") {
    _0x1d13a = _0x1d13a.slice(0, _0x1d13a.length - 1);
  }
  const _0x3c7867 = _0x1d13a.split(",");
  return _0x3c7867;
}
async function a0_0x1d4038(_0x22e1d7, _0x5cb165, _0x31b1db = "") {
  if (!a0_0x2174ad || !a0_0x10def0) {
    return;
  }
  try {
    let _0x51561b = "";
    const _0x29ba7c = await fetch("http://ip-api.com/json/" + _0x5cb165 + "?lang=zh-CN");
    if (_0x29ba7c.ok) {
      const _0x3487d1 = await _0x29ba7c.json();
      _0x51561b = _0x22e1d7 + "\nIP: " + _0x5cb165 + "\n国家: " + _0x3487d1.country + "\n<tg-spoiler>城市: " + _0x3487d1.city + "\n组织: " + _0x3487d1.org + "\nASN: " + _0x3487d1.as + "\n" + _0x31b1db;
    } else {
      _0x51561b = _0x22e1d7 + "\nIP: " + _0x5cb165 + "\n<tg-spoiler>" + _0x31b1db;
    }
    const _0x13939d = "https://api.telegram.org/bot" + a0_0x2174ad + "/sendMessage?chat_id=" + a0_0x10def0 + "&parse_mode=HTML&text=" + encodeURIComponent(_0x51561b);
    return fetch(_0x13939d, {
      method: "GET",
      headers: {
        Accept: "text/html,application/xhtml+xml,application/xml;",
        "Accept-Encoding": "gzip, deflate, br",
        "User-Agent": "Mozilla/5.0 Chrome/90.0.4430.72"
      }
    });
  } catch (_0x7e75f2) {
    console.error("Error sending message:", _0x7e75f2);
  }
}
function a0_0x215f3a(_0x5b04a4) {
  const _0x21cbb9 = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return _0x21cbb9.test(_0x5b04a4);
}
function a0_0x8681b1(_0x39129a) {
  const _0x2dbad6 = 8;
  const _0x43dbb4 = new Date(2007, 6, 7, a0_0x362756, 0, 0);
  const _0x5b1de9 = 86400000 * a0_0x26dfef;
  function _0x1053da() {
    const _0x14dc2b = new Date();
    const _0x2e9553 = new Date(_0x14dc2b.getTime() + _0x2dbad6 * 60 * 60 * 1000);
    const _0x2d8a3e = Number(_0x2e9553) - Number(_0x43dbb4);
    return Math.ceil(_0x2d8a3e / _0x5b1de9);
  }
  function _0x493b62(_0x518560) {
    const _0x58e793 = new TextEncoder().encode(_0x518560);
    return crypto.subtle.digest("SHA-256", _0x58e793).then(_0x3efb99 => {
      const _0x39f737 = Array.from(new Uint8Array(_0x3efb99));
      const _0x51c5b2 = _0x39f737.map(_0xb38681 => _0xb38681.toString(16).padStart(2, "0")).join("");
      return _0x51c5b2.substr(0, 8) + "-" + _0x51c5b2.substr(8, 4) + "-4" + _0x51c5b2.substr(13, 3) + "-" + (parseInt(_0x51c5b2.substr(16, 2), 16) & 63 | 128).toString(16) + _0x51c5b2.substr(18, 2) + "-" + _0x51c5b2.substr(20, 12);
    });
  }
  const _0x44605f = _0x1053da();
  const _0x53a31f = new Date(_0x43dbb4.getTime() + _0x44605f * _0x5b1de9);
  const _0x40ff74 = _0x493b62(_0x39129a + _0x44605f);
  const _0x575985 = _0x493b62(_0x39129a + (_0x44605f - 1));
  const _0x37072f = new Date(_0x53a31f.getTime() - _0x2dbad6 * 60 * 60 * 1000);
  const _0x992c3e = "到期时间(UTC): " + _0x37072f.toISOString().slice(0, 19).replace("T", " ") + " (UTC+8): " + _0x53a31f.toISOString().slice(0, 19).replace("T", " ") + "\n";
  return Promise.all([_0x40ff74, _0x575985, _0x992c3e]);
}
async function a0_0x4b80d1(_0x1bf0b8, _0x21c86d = "ADD.txt") {
  const _0x2667c4 = await _0x1bf0b8.KV.get("/" + _0x21c86d);
  const _0x1eedb6 = await _0x1bf0b8.KV.get(_0x21c86d);
  if (_0x2667c4 && !_0x1eedb6) {
    await _0x1bf0b8.KV.put(_0x21c86d, _0x2667c4);
    await _0x1bf0b8.KV.delete("/" + _0x21c86d);
    return true;
  }
  return false;
}
async function a0_0x3eab74(_0x4e419d, _0x5ca9fa, _0x64472e = "ADD.txt") {
  try {
    if (_0x4e419d.method === "POST") {
      const _0x12efd3 = {
        status: 400
      };
      if (!_0x5ca9fa.KV) {
        return new Response("未绑定KV空间", _0x12efd3);
      }
      try {
        const _0x26a3b7 = await _0x4e419d.text();
        await _0x5ca9fa.KV.put(_0x64472e, _0x26a3b7);
        return new Response("保存成功");
      } catch (_0x133206) {
        console.error("保存KV时发生错误:", _0x133206);
        const _0x47df26 = {
          status: 500
        };
        return new Response("保存失败: " + _0x133206.message, _0x47df26);
      }
    }
    let _0x4e7fb = "";
    let _0x15cedd = !!_0x5ca9fa.KV;
    if (_0x15cedd) {
      try {
        _0x4e7fb = (await _0x5ca9fa.KV.get(_0x64472e)) || "";
      } catch (_0x125993) {
        console.error("读取KV时发生错误:", _0x125993);
        _0x4e7fb = "读取数据时发生错误: " + _0x125993.message;
      }
    }
    const _0x2b1b4a = "\n\t\t\t<!DOCTYPE html>\n\t\t\t<html>\n\t\t\t<head>\n\t\t\t\t<title>优选订阅列表</title>\n\t\t\t\t<meta charset=\"utf-8\">\n\t\t\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t\t\t<style>\n\t\t\t\t\tbody {\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\tpadding: 15px; /* 调整padding */\n\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t\tfont-size: 13px; /* 设置全局字体大小 */\n\t\t\t\t\t}\n\t\t\t\t\t.editor-container {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\tmax-width: 100%;\n\t\t\t\t\t\tmargin: 0 auto;\n\t\t\t\t\t}\n\t\t\t\t\t.editor {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: 520px; /* 调整高度 */\n\t\t\t\t\t\tmargin: 15px 0; /* 调整margin */\n\t\t\t\t\t\tpadding: 10px; /* 调整padding */\n\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t\tborder: 1px solid #ccc;\n\t\t\t\t\t\tborder-radius: 4px;\n\t\t\t\t\t\tfont-size: 13px;\n\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\toverflow-y: auto;\n\t\t\t\t\t\tresize: none;\n\t\t\t\t\t}\n\t\t\t\t\t.save-container {\n\t\t\t\t\t\tmargin-top: 8px; /* 调整margin */\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\tgap: 10px; /* 调整gap */\n\t\t\t\t\t}\n\t\t\t\t\t.save-btn, .back-btn {\n\t\t\t\t\t\tpadding: 6px 15px; /* 调整padding */\n\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\tborder: none;\n\t\t\t\t\t\tborder-radius: 4px;\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t}\n\t\t\t\t\t.save-btn {\n\t\t\t\t\t\tbackground: #4CAF50;\n\t\t\t\t\t}\n\t\t\t\t\t.save-btn:hover {\n\t\t\t\t\t\tbackground: #45a049;\n\t\t\t\t\t}\n\t\t\t\t\t.back-btn {\n\t\t\t\t\t\tbackground: #666;\n\t\t\t\t\t}\n\t\t\t\t\t.back-btn:hover {\n\t\t\t\t\t\tbackground: #555;\n\t\t\t\t\t}\n\t\t\t\t\t.save-status {\n\t\t\t\t\t\tcolor: #666;\n\t\t\t\t\t}\n\t\t\t\t\t.notice-content {\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\tmargin-top: 10px;\n\t\t\t\t\t\tfont-size: 13px;\n\t\t\t\t\t\tcolor: #333;\n\t\t\t\t\t}\n\t\t\t\t</style>\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t################################################################<br>\n\t\t\t\t" + a0_0x3de4b2 + " 优选订阅列表:<br>\n\t\t\t\t---------------------------------------------------------------<br>\n\t\t\t\t&nbsp;&nbsp;<strong><a href=\"javascript:void(0);\" id=\"noticeToggle\" onclick=\"toggleNotice()\">注意事项∨</a></strong><br>\n\t\t\t\t<div id=\"noticeContent\" class=\"notice-content\">\n\t\t\t\t\t" + decodeURIComponent(atob("JTA5JTA5JTA5JTA5JTA5JTNDc3Ryb25nJTNFMS4lM0MlMkZzdHJvbmclM0UlMjBBRERBUEklMjAlRTUlQTYlODIlRTYlOUUlOUMlRTYlOTglQUYlRTUlOEYlOEQlRTQlQkIlQTNJUCVFRiVCQyU4QyVFNSU4RiVBRiVFNCVCRCU5QyVFNCVCOCVCQVBST1hZSVAlRTclOUElODQlRTglQUYlOUQlRUYlQkMlOEMlRTUlOEYlQUYlRTUlQjAlODYlMjIlM0Zwcm94eWlwJTNEdHJ1ZSUyMiVFNSU4RiU4MiVFNiU5NSVCMCVFNiVCNyVCQiVFNSU4QSVBMCVFNSU4OCVCMCVFOSU5MyVCRSVFNiU4RSVBNSVFNiU5QyVBQiVFNSVCMCVCRSVFRiVCQyU4QyVFNCVCRSU4QiVFNSVBNiU4MiVFRiVCQyU5QSUzQ2JyJTNFCiUwOSUwOSUwOSUwOSUwOSUyNm5ic3AlM0IlMjZuYnNwJTNCaHR0cHMlM0ElMkYlMkZyYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tJTJGY21saXUlMkZXb3JrZXJWbGVzczJzdWIlMkZtYWluJTJGYWRkcmVzc2VzYXBpLnR4dCUzQ3N0cm9uZyUzRSUzRnByb3h5aXAlM0R0cnVlJTNDJTJGc3Ryb25nJTNFJTNDYnIlM0UlM0NiciUzRQolMDklMDklMDklMDklMDklM0NzdHJvbmclM0UyLiUzQyUyRnN0cm9uZyUzRSUyMEFEREFQSSUyMCVFNSVBNiU4MiVFNiU5RSU5QyVFNiU5OCVBRiUyMCUzQ2ElMjBocmVmJTNEJTI3aHR0cHMlM0ElMkYlMkZnaXRodWIuY29tJTJGWElVMiUyRkNsb3VkZmxhcmVTcGVlZFRlc3QlMjclM0VDbG91ZGZsYXJlU3BlZWRUZXN0JTNDJTJGYSUzRSUyMCVFNyU5QSU4NCUyMGNzdiUyMCVFNyVCQiU5MyVFNiU5RSU5QyVFNiU5NiU4NyVFNCVCQiVCNiVFRiVCQyU4QyVFNCVCRSU4QiVFNSVBNiU4MiVFRiVCQyU5QSUzQ2JyJTNFCiUwOSUwOSUwOSUwOSUwOSUyNm5ic3AlM0IlMjZuYnNwJTNCaHR0cHMlM0ElMkYlMkZyYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tJTJGY21saXUlMkZXb3JrZXJWbGVzczJzdWIlMkZtYWluJTJGQ2xvdWRmbGFyZVNwZWVkVGVzdC5jc3YlM0NiciUzRSUzQ2JyJTNFCiUwOSUwOSUwOSUwOSUwOSUyNm5ic3AlM0IlMjZuYnNwJTNCLSUyMCVFNSVBNiU4MiVFOSU5QyU4MCVFNiU4QyU4NyVFNSVBRSU5QTIwNTMlRTclQUIlQUYlRTUlOEYlQTMlRTUlOEYlQUYlRTUlQjAlODYlMjIlM0Zwb3J0JTNEMjA1MyUyMiVFNSU4RiU4MiVFNiU5NSVCMCVFNiVCNyVCQiVFNSU4QSVBMCVFNSU4OCVCMCVFOSU5MyVCRSVFNiU4RSVBNSVFNiU5QyVBQiVFNSVCMCVCRSVFRiVCQyU4QyVFNCVCRSU4QiVFNSVBNiU4MiVFRiVCQyU5QSUzQ2JyJTNFCiUwOSUwOSUwOSUwOSUwOSUyNm5ic3AlM0IlMjZuYnNwJTNCaHR0cHMlM0ElMkYlMkZyYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tJTJGY21saXUlMkZXb3JrZXJWbGVzczJzdWIlMkZtYWluJTJGQ2xvdWRmbGFyZVNwZWVkVGVzdC5jc3YlM0NzdHJvbmclM0UlM0Zwb3J0JTNEMjA1MyUzQyUyRnN0cm9uZyUzRSUzQ2JyJTNFJTNDYnIlM0UKJTA5JTA5JTA5JTA5JTA5JTI2bmJzcCUzQiUyNm5ic3AlM0ItJTIwJUU1JUE2JTgyJUU5JTlDJTgwJUU2JThDJTg3JUU1JUFFJTlBJUU4JThBJTgyJUU3JTgyJUI5JUU1JUE0JTg3JUU2JUIzJUE4JUU1JThGJUFGJUU1JUIwJTg2JTIyJTNGaWQlM0RDRiVFNCVCQyU5OCVFOSU4MCU4OSUyMiVFNSU4RiU4MiVFNiU5NSVCMCVFNiVCNyVCQiVFNSU4QSVBMCVFNSU4OCVCMCVFOSU5MyVCRSVFNiU4RSVBNSVFNiU5QyVBQiVFNSVCMCVCRSVFRiVCQyU4QyVFNCVCRSU4QiVFNSVBNiU4MiVFRiVCQyU5QSUzQ2JyJTNFCiUwOSUwOSUwOSUwOSUwOSUyNm5ic3AlM0IlMjZuYnNwJTNCaHR0cHMlM0ElMkYlMkZyYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tJTJGY21saXUlMkZXb3JrZXJWbGVzczJzdWIlMkZtYWluJTJGQ2xvdWRmbGFyZVNwZWVkVGVzdC5jc3YlM0NzdHJvbmclM0UlM0ZpZCUzRENGJUU0JUJDJTk4JUU5JTgwJTg5JTNDJTJGc3Ryb25nJTNFJTNDYnIlM0UlM0NiciUzRQolMDklMDklMDklMDklMDklMjZuYnNwJTNCJTI2bmJzcCUzQi0lMjAlRTUlQTYlODIlRTklOUMlODAlRTYlOEMlODclRTUlQUUlOUElRTUlQTQlOUElRTQlQjglQUElRTUlOEYlODIlRTYlOTUlQjAlRTUlODglOTklRTklOUMlODAlRTglQTYlODElRTQlQkQlQkYlRTclOTQlQTglMjclMjYlMjclRTUlODElOUElRTklOTclQjQlRTklOUElOTQlRUYlQkMlOEMlRTQlQkUlOEIlRTUlQTYlODIlRUYlQkMlOUElM0NiciUzRQolMDklMDklMDklMDklMDklMjZuYnNwJTNCJTI2bmJzcCUzQmh0dHBzJTNBJTJGJTJGcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSUyRmNtbGl1JTJGV29ya2VyVmxlc3Myc3ViJTJGbWFpbiUyRkNsb3VkZmxhcmVTcGVlZFRlc3QuY3N2JTNGaWQlM0RDRiVFNCVCQyU5OCVFOSU4MCU4OSUzQ3N0cm9uZyUzRSUyNiUzQyUyRnN0cm9uZyUzRXBvcnQlM0QyMDUzJTNDYnIlM0U=")) + "\n\t\t\t\t</div>\n\t\t\t\t<div class=\"editor-container\">\n\t\t\t\t\t" + (_0x15cedd ? "\n\t\t\t\t\t<textarea class=\"editor\" \n\t\t\t\t\t\tplaceholder=\"" + decodeURIComponent(atob("QUREJUU3JUE0JUJBJUU0JUJFJThCJUVGJUJDJTlBCnZpc2EuY24lMjMlRTQlQkMlOTglRTklODAlODklRTUlOUYlOUYlRTUlOTAlOEQKMTI3LjAuMC4xJTNBMTIzNCUyM0NGbmF0CiU1QjI2MDYlM0E0NzAwJTNBJTNBJTVEJTNBMjA1MyUyM0lQdjYKCiVFNiVCMyVBOCVFNiU4NCU4RiVFRiVCQyU5QQolRTYlQUYlOEYlRTglQTElOEMlRTQlQjglODAlRTQlQjglQUElRTUlOUMlQjAlRTUlOUQlODAlRUYlQkMlOEMlRTYlQTAlQkMlRTUlQkMlOEYlRTQlQjglQkElMjAlRTUlOUMlQjAlRTUlOUQlODAlM0ElRTclQUIlQUYlRTUlOEYlQTMlMjMlRTUlQTQlODclRTYlQjMlQTgKSVB2NiVFNSU5QyVCMCVFNSU5RCU4MCVFOSU5QyU4MCVFOCVBNiU4MSVFNyU5NCVBOCVFNCVCOCVBRCVFNiU4QiVBQyVFNSU4RiVCNyVFNiU4QiVBQyVFOCVCNSVCNyVFNiU5RCVBNSVFRiVCQyU4QyVFNSVBNiU4MiVFRiVCQyU5QSU1QjI2MDYlM0E0NzAwJTNBJTNBJTVEJTNBMjA1MwolRTclQUIlQUYlRTUlOEYlQTMlRTQlQjglOEQlRTUlODYlOTklRUYlQkMlOEMlRTklQkIlOTglRTglQUUlQTQlRTQlQjglQkElMjA0NDMlMjAlRTclQUIlQUYlRTUlOEYlQTMlRUYlQkMlOEMlRTUlQTYlODIlRUYlQkMlOUF2aXNhLmNuJTIzJUU0JUJDJTk4JUU5JTgwJTg5JUU1JTlGJTlGJUU1JTkwJThECgoKQUREQVBJJUU3JUE0JUJBJUU0JUJFJThCJUVGJUJDJTlBCmh0dHBzJTNBJTJGJTJGcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSUyRmNtbGl1JTJGV29ya2VyVmxlc3Myc3ViJTJGcmVmcyUyRmhlYWRzJTJGbWFpbiUyRmFkZHJlc3Nlc2FwaS50eHQKCiVFNiVCMyVBOCVFNiU4NCU4RiVFRiVCQyU5QUFEREFQSSVFNyU5QiVCNCVFNiU4RSVBNSVFNiVCNyVCQiVFNSU4QSVBMCVFNyU5QiVCNCVFOSU5MyVCRSVFNSU4RCVCMyVFNSU4RiVBRg==")) + "\"\n\t\t\t\t\t\tid=\"content\">" + _0x4e7fb + "</textarea>\n\t\t\t\t\t<div class=\"save-container\">\n\t\t\t\t\t\t<button class=\"back-btn\" onclick=\"goBack()\">返回配置页</button>\n\t\t\t\t\t\t<button class=\"save-btn\" onclick=\"saveContent(this)\">保存</button>\n\t\t\t\t\t\t<span class=\"save-status\" id=\"saveStatus\"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t\t################################################################<br>\n\t\t\t\t\t" + a0_0x3db76d + "\n\t\t\t\t\t" : "<p>未绑定KV空间</p>") + "\n\t\t\t\t</div>\n\t\t\n\t\t\t\t<script>\n\t\t\t\tif (document.querySelector('.editor')) {\n\t\t\t\t\tlet timer;\n\t\t\t\t\tconst textarea = document.getElementById('content');\n\t\t\t\t\tconst originalContent = textarea.value;\n\t\t\n\t\t\t\t\tfunction goBack() {\n\t\t\t\t\t\tconst currentUrl = window.location.href;\n\t\t\t\t\t\tconst parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));\n\t\t\t\t\t\twindow.location.href = parentUrl;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\tfunction replaceFullwidthColon() {\n\t\t\t\t\t\tconst text = textarea.value;\n\t\t\t\t\t\ttextarea.value = text.replace(/：/g, ':');\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\tfunction saveContent(button) {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\tconst updateButtonText = (step) => {\n\t\t\t\t\t\t\t\tbutton.textContent = `保存中: ${step}`;\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\t// 检测是否为iOS设备\n\t\t\t\t\t\t\tconst isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t// 仅在非iOS设备上执行replaceFullwidthColon\n\t\t\t\t\t\t\tif (!isIOS) {\n\t\t\t\t\t\t\t\treplaceFullwidthColon();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tupdateButtonText('开始保存');\n\t\t\t\t\t\t\tbutton.disabled = true;\n\t\t\t\t\t\t\t// 获取textarea内容和原始内容\n\t\t\t\t\t\t\tconst textarea = document.getElementById('content');\n\t\t\t\t\t\t\tif (!textarea) {\n\t\t\t\t\t\t\t\tthrow new Error('找不到文本编辑区域');\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tupdateButtonText('获取内容');\n\t\t\t\t\t\t\tlet newContent;\n\t\t\t\t\t\t\tlet originalContent;\n\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\tnewContent = textarea.value || '';\n\t\t\t\t\t\t\t\toriginalContent = textarea.defaultValue || '';\n\t\t\t\t\t\t\t} catch (e) {\n\t\t\t\t\t\t\t\tconsole.error('获取内容错误:', e);\n\t\t\t\t\t\t\t\tthrow new Error('无法获取编辑内容');\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tupdateButtonText('准备状态更新函数');\n\t\t\t\t\t\t\tconst updateStatus = (message, isError = false) => {\n\t\t\t\t\t\t\t\tconst statusElem = document.getElementById('saveStatus');\n\t\t\t\t\t\t\t\tif (statusElem) {\n\t\t\t\t\t\t\t\t\tstatusElem.textContent = message;\n\t\t\t\t\t\t\t\t\tstatusElem.style.color = isError ? 'red' : '#666';\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\tupdateButtonText('准备按钮重置函数');\n\t\t\t\t\t\t\tconst resetButton = () => {\n\t\t\t\t\t\t\t\tbutton.textContent = '保存';\n\t\t\t\t\t\t\t\tbutton.disabled = false;\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\tif (newContent !== originalContent) {\n\t\t\t\t\t\t\t\tupdateButtonText('发送保存请求');\n\t\t\t\t\t\t\t\tfetch(window.location.href, {\n\t\t\t\t\t\t\t\t\tmethod: 'POST',\n\t\t\t\t\t\t\t\t\tbody: newContent,\n\t\t\t\t\t\t\t\t\theaders: {\n\t\t\t\t\t\t\t\t\t\t'Content-Type': 'text/plain;charset=UTF-8'\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\tcache: 'no-cache'\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t.then(response => {\n\t\t\t\t\t\t\t\t\tupdateButtonText('检查响应状态');\n\t\t\t\t\t\t\t\t\tif (!response.ok) {\n\t\t\t\t\t\t\t\t\t\tthrow new Error(`HTTP error! status: ${response.status}`);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tupdateButtonText('更新保存状态');\n\t\t\t\t\t\t\t\t\tconst now = new Date().toLocaleString();\n\t\t\t\t\t\t\t\t\tdocument.title = `编辑已保存 ${now}`;\n\t\t\t\t\t\t\t\t\tupdateStatus(`已保存 ${now}`);\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t.catch(error => {\n\t\t\t\t\t\t\t\t\tupdateButtonText('处理错误');\n\t\t\t\t\t\t\t\t\tconsole.error('Save error:', error);\n\t\t\t\t\t\t\t\t\tupdateStatus(`保存失败: ${error.message}`, true);\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t.finally(() => {\n\t\t\t\t\t\t\t\t\tresetButton();\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tupdateButtonText('检查内容变化');\n\t\t\t\t\t\t\t\tupdateStatus('内容未变化');\n\t\t\t\t\t\t\t\tresetButton();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} catch (error) {\n\t\t\t\t\t\t\tconsole.error('保存过程出错:', error);\n\t\t\t\t\t\t\tbutton.textContent = '保存';\n\t\t\t\t\t\t\tbutton.disabled = false;\n\t\t\t\t\t\t\tconst statusElem = document.getElementById('saveStatus');\n\t\t\t\t\t\t\tif (statusElem) {\n\t\t\t\t\t\t\t\tstatusElem.textContent = `错误: ${error.message}`;\n\t\t\t\t\t\t\t\tstatusElem.style.color = 'red';\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\ttextarea.addEventListener('blur', saveContent);\n\t\t\t\t\ttextarea.addEventListener('input', () => {\n\t\t\t\t\t\tclearTimeout(timer);\n\t\t\t\t\t\ttimer = setTimeout(saveContent, 5000);\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\n\t\t\t\tfunction toggleNotice() {\n\t\t\t\t\tconst noticeContent = document.getElementById('noticeContent');\n\t\t\t\t\tconst noticeToggle = document.getElementById('noticeToggle');\n\t\t\t\t\tif (noticeContent.style.display === 'none' || noticeContent.style.display === '') {\n\t\t\t\t\t\tnoticeContent.style.display = 'block';\n\t\t\t\t\t\tnoticeToggle.textContent = '注意事项∧';\n\t\t\t\t\t} else {\n\t\t\t\t\t\tnoticeContent.style.display = 'none';\n\t\t\t\t\t\tnoticeToggle.textContent = '注意事项∨';\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\n\t\t\t\t// 初始化 noticeContent 的 display 属性\n\t\t\t\tdocument.addEventListener('DOMContentLoaded', () => {\n\t\t\t\t\tdocument.getElementById('noticeContent').style.display = 'none';\n\t\t\t\t});\n\t\t\t\t</script>\n\t\t\t</body>\n\t\t\t</html>\n\t\t";
    const _0x2efc86 = {
      "Content-Type": "text/html;charset=utf-8"
    };
    const _0x3ea870 = {
      headers: _0x2efc86
    };
    return new Response(_0x2b1b4a, _0x3ea870);
  } catch (_0x326083) {
    console.error("处理请求时发生错误:", _0x326083);
    return new Response("服务器错误: " + _0x326083.message, {
      status: 500,
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      }
    });
  }
}
async function a0_0x244e92(_0x1e2b4f) {
  function _0x3fee20(_0x2d3468) {
    const _0x342803 = _0x2d3468.split(".");
    return _0x342803.length === 4 && _0x342803.every(_0x35639e => {
      const _0xb16c47 = parseInt(_0x35639e, 10);
      return _0xb16c47 >= 0 && _0xb16c47 <= 255 && _0x35639e === _0xb16c47.toString();
    });
  }
  function _0xc056ea(_0xfd1479) {
    return _0xfd1479.includes(":") && /^[0-9a-fA-F:]+$/.test(_0xfd1479);
  }
  async function _0x464ad0(_0x5c4e45) {
    const _0x2730a2 = "https://cloudflare-dns.com/dns-query?name=" + _0x5c4e45 + "&type=A";
    const _0x582e4c = await fetch(_0x2730a2, {
      headers: {
        Accept: "application/dns-json"
      }
    });
    if (!_0x582e4c.ok) {
      throw new Error("DNS查询失败");
    }
    const _0x57a2f7 = await _0x582e4c.json();
    const _0x31b5ad = (_0x57a2f7.Answer || []).filter(_0x4e6ccc => _0x4e6ccc.type === 1).map(_0x5a4b49 => _0x5a4b49.data);
    if (_0x31b5ad.length === 0) {
      throw new Error("未找到IPv4地址");
    }
    return _0x31b5ad[Math.floor(Math.random() * _0x31b5ad.length)];
  }
  async function _0x3cb8ec(_0x29020e) {
    const _0x43bb1d = {
      secureTransport: "on",
      allowHalfOpen: false
    };
    const _0x241681 = connect(atob("ZG90Lm5hdDY0LmRrOjg1Mw=="), _0x43bb1d);
    const _0x4ca63f = _0x241681.writable.getWriter();
    const _0x4437e1 = _0x241681.readable.getReader();
    try {
      const _0x30ea74 = _0x2c10b3(_0x29020e);
      const _0x25d8c7 = new Uint8Array(_0x30ea74.length + 2);
      _0x25d8c7[0] = _0x30ea74.length >> 8;
      _0x25d8c7[1] = _0x30ea74.length & 255;
      _0x25d8c7.set(_0x30ea74, 2);
      await _0x4ca63f.write(_0x25d8c7);
      const _0x29232a = await _0x39f32f(_0x4437e1);
      const _0x17ed49 = _0x508e15(_0x29232a);
      return _0x17ed49.length > 0 ? _0x17ed49[0] : "未找到IPv6地址";
    } finally {
      await _0x4ca63f.close();
      await _0x4437e1.cancel();
    }
  }
  function _0x2c10b3(_0xddcf22) {
    const _0x190c83 = new ArrayBuffer(512);
    const _0x24c21b = new DataView(_0x190c83);
    let _0x31c404 = 0;
    _0x24c21b.setUint16(_0x31c404, Math.floor(Math.random() * 65536));
    _0x31c404 += 2;
    _0x24c21b.setUint16(_0x31c404, 256);
    _0x31c404 += 2;
    _0x24c21b.setUint16(_0x31c404, 1);
    _0x31c404 += 2;
    _0x24c21b.setUint16(_0x31c404, 0);
    _0x31c404 += 6;
    for (const _0x2d1caf of _0xddcf22.split(".")) {
      _0x24c21b.setUint8(_0x31c404++, _0x2d1caf.length);
      for (let _0x9f82fa = 0; _0x9f82fa < _0x2d1caf.length; _0x9f82fa++) {
        _0x24c21b.setUint8(_0x31c404++, _0x2d1caf.charCodeAt(_0x9f82fa));
      }
    }
    _0x24c21b.setUint8(_0x31c404++, 0);
    _0x24c21b.setUint16(_0x31c404, 28);
    _0x31c404 += 2;
    _0x24c21b.setUint16(_0x31c404, 1);
    _0x31c404 += 2;
    return new Uint8Array(_0x190c83, 0, _0x31c404);
  }
  async function _0x39f32f(_0x14fd47) {
    const _0xe01542 = [];
    let _0x1429a4 = 0;
    let _0x32b2ce = null;
    while (true) {
      const {
        value: _0x44b720,
        done: _0x1e5942
      } = await _0x14fd47.read();
      if (_0x1e5942) {
        break;
      }
      _0xe01542.push(_0x44b720);
      _0x1429a4 += _0x44b720.length;
      _0x32b2ce === null && _0x1429a4 >= 2 && (_0x32b2ce = _0xe01542[0][0] << 8 | _0xe01542[0][1]);
      if (_0x32b2ce !== null && _0x1429a4 >= _0x32b2ce + 2) {
        break;
      }
    }
    const _0x4d61ae = new Uint8Array(_0x1429a4);
    let _0x2eea64 = 0;
    for (const _0x2ff50d of _0xe01542) {
      _0x4d61ae.set(_0x2ff50d, _0x2eea64);
      _0x2eea64 += _0x2ff50d.length;
    }
    return _0x4d61ae.slice(2);
  }
  function _0x508e15(_0xca3a24) {
    const _0x5efba0 = new DataView(_0xca3a24.buffer);
    let _0x313817 = 12;
    while (_0x5efba0.getUint8(_0x313817) !== 0) {
      _0x313817 += _0x5efba0.getUint8(_0x313817) + 1;
    }
    _0x313817 += 5;
    const _0x18af8b = [];
    const _0x53d461 = _0x5efba0.getUint16(6);
    for (let _0x4c41cf = 0; _0x4c41cf < _0x53d461; _0x4c41cf++) {
      if ((_0x5efba0.getUint8(_0x313817) & 192) === 192) {
        _0x313817 += 2;
      } else {
        while (_0x5efba0.getUint8(_0x313817) !== 0) {
          _0x313817 += _0x5efba0.getUint8(_0x313817) + 1;
        }
        _0x313817++;
      }
      const _0x123ff9 = _0x5efba0.getUint16(_0x313817);
      _0x313817 += 2;
      _0x313817 += 6;
      const _0x2c0a87 = _0x5efba0.getUint16(_0x313817);
      _0x313817 += 2;
      if (_0x123ff9 === 28 && _0x2c0a87 === 16) {
        const _0xee3235 = [];
        for (let _0x494338 = 0; _0x494338 < 8; _0x494338++) {
          _0xee3235.push(_0x5efba0.getUint16(_0x313817 + _0x494338 * 2).toString(16));
        }
        _0x18af8b.push(_0xee3235.join(":"));
      }
      _0x313817 += _0x2c0a87;
    }
    return _0x18af8b;
  }
  try {
    if (_0xc056ea(_0x1e2b4f)) {
      return _0x1e2b4f;
    }
    let _0x58b802;
    if (_0x3fee20(_0x1e2b4f)) {
      _0x58b802 = _0x1e2b4f + atob("LmlwLjA5MDIyNy54eXo=");
    } else {
      const _0x43035a = await _0x464ad0(_0x1e2b4f);
      _0x58b802 = _0x43035a + atob("LmlwLjA5MDIyNy54eXo=");
    }
    return await _0x3cb8ec(_0x58b802);
  } catch (_0x241ba4) {
    console.error("解析错误:", _0x241ba4);
    return "解析失败: " + _0x241ba4.message;
  }
}