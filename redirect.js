const params = new URLSearchParams(window.location.search);

if (params.has('invite')) {
  const inviteCode = params.get('invite');
  const recirectUrl = `https://republic.com/note/giveaway?invite=${inviteCode}`;
  const lpbBody = document.querySelector(".landing_pages-show");
  const subscriptions = lpbBody.dataset.subscriptions?.split(',') || []
  const noteCategory = "note_2023";

  if (subscriptions.includes(noteCategory)) {
    window.location.href = recirectUrl;
  } else {
    window.location.href = `${window.location.pathname}?after_subscribe_redirect=${recirectUrl}`;
  }
}
