const SUPABASE_URL = "https://twdvhkxcaimmvgufhzvt.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3ZHZoa3hjYWltbXZndWZoenZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3NTYwNjgsImV4cCI6MjAyMjMzMjA2OH0.LFM7KNhbLKo2fXZ0jE_bWpKcmlgyV9m1D4khzsOYdUw"; // Supabase anon key

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Example of how you might attempt to authenticate. Adjust based on your actual auth setup.
    // This is a placeholder and won't work without proper setup on your Supabase side.
    let { data: user, error } = await supabase
        .from('Student Login')
        .select('Username')
        .eq('Username', username);
    
    if (user && user.length > 0) {
        // Example redirect; you'd need to determine if they're a student or counselor in practice.
        window.location.href = 'student_dashboard.html'; // or counselor_dashboard.html
    } else {
        alert('Login failed!');
    }
}
