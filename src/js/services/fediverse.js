'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())

  var title = shariff.getTitle()

  return {
    popup: false,
    shareText: {
      'bg': 'cподеляне',
      'cs': 'sdílet',
      'da': 'del',
      'de': 'teilen',
      'en': 'share',
      'es': 'compartir',
      'fi': 'Jaa',
      'fr': 'partager',
      'hr': 'podijelite',
      'hu': 'megosztás',
      'it': 'condividi',
      'ja': '共有',
      'ko': '공유하기',
      'nl': 'delen',
      'no': 'del',
      'pl': 'udostępnij',
      'pt': 'compartilhar',
      'ro': 'partajează',
      'ru': 'поделиться',
      'sk': 'zdieľať',
      'sl': 'deli',
      'sr': 'podeli',
      'sv': 'dela',
      'tr': 'paylaş',
      'zh': '分享'
    },
    name: 'fediverse',
    faPrefix: 'fas',
    faName: 'fa-lock',
    title: {
      'bg': 'Сподели в Fediverse',
      'cs': 'Sdílet na Fediverse',
      'da': 'Del på Fediverse',
      'de': 'Im Fediverse teilen',
      'en': 'Share in Fediverse',
      'es': 'Compartir en Fediverse',
      'fi': 'Jaa Fediverseissä',
      'fr': 'Partager sur Fediverse',
      'hr': 'Podijelite na Fediverse',
      'hu': 'Megosztás Fediverseen',
      'it': 'Condividi su Fediverse',
      'ja': 'Fediverse上で共有',
      'ko': 'Fediverse에서 공유하기',
      'nl': 'Delen op Fediverse',
      'no': 'Del på Fediverse',
      'pl': 'Udostępnij przez Fediverse',
      'pt': 'Compartilhar no Fediverse',
      'ro': 'Partajează pe Fediverse',
      'ru': 'Поделиться на Fediverse',
      'sk': 'Zdieľať na Fediverse',
      'sl': 'Deli na Fediverse',
      'sr': 'Podeli na Fediverse-u',
      'sv': 'Dela på Fediverse',
      'tr': 'Fediverse\'ta paylaş',
      'zh': '在Fediverse上分享'
    },
    shareUrl: 'web+mastodon://share?text=' + url + shariff.getReferrerTrack()
  }
}