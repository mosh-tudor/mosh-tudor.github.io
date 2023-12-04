const params = new URLSearchParams(window.location.search);

if (params.has('invite')) {
  const inviteCode = params.get('invite');
  const recirectUrl = `https://republic.com/note/giveaway?invite=${inviteCode}`;

  window.location.href = `${window.location.pathname}?after_subscribe_redirect=${recirectUrl}`;
}
