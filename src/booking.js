// Integration boundary: never claim a request was delivered until a real service confirms it.
export async function submitBooking(booking) {
  // TODO: POST booking to a form service, email endpoint, or booking provider.
  // Validate server-side, handle errors, and return { mode: 'sent' } only after delivery.
  // Demo only: no network request, storage, email, or appointment is created.
  void booking;
  return { mode: 'demo' };
}
