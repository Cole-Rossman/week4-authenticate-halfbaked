// Enter Supabase Information
const SUPABASE_URL = 'https://oulietmefshvjsdknixn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91bGlldG1lZnNodmpzZGtuaXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NTAyNzcsImV4cCI6MTk2MDAyNjI3N30.xLaRALCsmulIZooLc5FTZDT0SLfAZjEKegSSVtKRgFI';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    console.log(response);
    return response;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    console.log(response);
    return response;
}

export async function checkAuth() {
    const user = await getUser();
    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./other-page');
    }
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}
