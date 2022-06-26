module.exports = class Index {

  example1(status=true, type=true) {
    if (type && !status) return 'HOJE SIM';
    if (status && !type) return 'HOJE NÃO';
    if (status && type) return 'HOJE TALVEZ';
    return '';
  }

  example2(link = "") {
    if (link != null && link.includes('AAA')) {
      return true;
    }
    return false;
  }

}