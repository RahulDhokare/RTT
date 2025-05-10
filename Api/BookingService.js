import api from './api';

export const fetchBookings = () => api.get('/bookings');

export const createBooking = (booking) => api.post('/bookings', booking);

export const updateBooking = (id, updatedData) => api.put(`/bookings/${id}`, updatedData);

export const deleteBooking = (id) => api.delete(`/bookings/${id}`);