// src/services/userService.js
import { supabase } from './supabaseClient';

export const userService = {
  // Get current user profile
  async getCurrentUserProfile() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error) throw error;
    return data;
  },

  // Update user profile
  async updateUserProfile(updates) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('user_profiles')
      .update(updates)
      .eq('id', user.id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Get user's purchased/downloaded books
  async getUserBooks() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data, error } = await supabase
      .from('user_books')
      .select(`
        id,
        purchased_at,
        expires_at,
        books:book_id (
          id,
          title,
          author,
          cover_url,
          description,
          file_url
        )
      `)
      .eq('user_id', user.id);

    if (error) throw error;
    return data;
  },

  // Verify and redeem receipt code
  async verifyReceiptCode(code, bookId = null) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Please login to redeem code');

    const { data, error } = await supabase
      .from('receipt_codes')
      .select('*')
      .eq('code', code.toUpperCase())
      .eq('is_used', false)
      .single();

    if (error) throw new Error('Invalid or already used code');

    // Check if code has expired
    if (data.expires_at && new Date(data.expires_at) < new Date()) {
      throw new Error('Code has expired');
    }

    // Mark code as used
    const { error: updateError } = await supabase
      .from('receipt_codes')
      .update({ is_used: true, used_by: user.id })
      .eq('id', data.id);

    if (updateError) throw updateError;

    // Add book to user's library
    if (data.book_id) {
      const { error: bookError } = await supabase
        .from('user_books')
        .insert({
          user_id: user.id,
          book_id: data.book_id,
          access_code: code
        });

      if (bookError) throw bookError;
    }

    return { success: true, message: 'Code redeemed successfully!' };
  },

  // Get all books (for library)
  async getAllBooks(filter = {}) {
    let query = supabase.from('books').select('*');

    if (filter.category) {
      query = query.eq('category', filter.category);
    }

    if (filter.isPremium !== undefined) {
      query = query.eq('is_premium', filter.isPremium);
    }

    if (filter.search) {
      query = query.or(`title.ilike.%${filter.search}%,author.ilike.%${filter.search}%`);
    }

    const { data, error } = await query.order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  // Get book details
  async getBookById(bookId) {
    const { data, error } = await supabase
      .from('books')
      .select('*')
      .eq('id', bookId)
      .single();

    if (error) throw error;
    return data;
  },

  // Download book (track download count)
  async downloadBook(bookId) {
    const { data: { user } } = await supabase.auth.getUser();
    
    // Check if user has access to premium books
    const book = await this.getBookById(bookId);
    
    if (book.is_premium) {
      if (!user) throw new Error('Please login to download premium content');
      
      // Check if user has purchased this book
      const { data: userBook } = await supabase
        .from('user_books')
        .select('*')
        .eq('user_id', user.id)
        .eq('book_id', bookId)
        .single();

      if (!userBook) throw new Error('You need to purchase this book first');
    }

    // Increment download count
    await supabase
      .from('books')
      .update({ download_count: supabase.rpc('increment', { x: 1 }) })
      .eq('id', bookId);

    return book.file_url;
  },

  // Admin functions
  async addBook(bookData) {
    const { data, error } = await supabase
      .from('books')
      .insert(bookData)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async generateReceiptCode(bookId = null, expiresInDays = null) {
    const code = Math.random().toString(36).substring(2, 10).toUpperCase();
    const expiresAt = expiresInDays ? new Date(Date.now() + expiresInDays * 24 * 60 * 60 * 1000) : null;

    const { data, error } = await supabase
      .from('receipt_codes')
      .insert({
        code,
        book_id: bookId,
        expires_at: expiresAt
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Get user statistics
  async getUserStats() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const userBooks = await this.getUserBooks();
    const profile = await this.getCurrentUserProfile();

    return {
      totalBooks: userBooks.length,
      memberSince: profile?.created_at,
      role: profile?.role
    };
  }
};