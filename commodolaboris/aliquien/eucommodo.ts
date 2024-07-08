interface User {
    id: number;
    name: string;
    email: string;
}

type PrefixedUserKeys = PrefixedKeys<'user', '_', User>;

// The resulting type would be:
// 'user_id' | 'user_name' | 'user_email'

// Example usage in a function
function getUserProperty<K extends PrefixedUserKeys>(key: K): any {
    // Implementation to fetch user property by the prefixed key
    return null;
}

// Valid keys:
getUserProperty('user_id');
getUserProperty('user_name');
getUserProperty('user_email');

// Invalid key (TypeScript will throw an error):
// getUserProperty('user_address'); // Error: Argument of type '"user_address"' is not assignable to parameter of type 'PrefixedUserKeys'.
