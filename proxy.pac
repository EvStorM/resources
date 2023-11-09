function FindProxyForURL(url, host) {
  //这里填写你们公司的host
  if (dnsDomainIs(host, "popp.club")) {
    //这里填你自己的局域网ip，端口号是你在Charles里设置的 默认8888
    return "PROXY 192.168.110.3:9090; DIRECT;";
  } else {
    return "DIRECT";
  }
}
