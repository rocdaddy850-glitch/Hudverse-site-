import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
let package = Package(
    ...
    dependencies: [
        ...
        .package(
            url: "https://github.com/supabase/supabase-swift.git",
            from: "2.0.0"
        ),
    ],
    targets: [
        .target(
            name: "YourTargetName",
            dependencies: [
                .product(name: "Supabase", package: "supabase-swift") // Add as a dependency
            ]
        )
    ]
)let client = SupabaseClient(
    supabaseURL: URL(string: "https://xyzcompany.supabase.co")!, 
    supabaseKey: "public-anon-key",
    options: SupabaseClientOptions(
        db: .init(
            schema: "public"
        ),
        auth: .init(
            storage: MyCustomLocalStorage(),
            flowType: .pkce
        ),
        global: .init(
            headers: ["x-my-custom-header": "my-app-name"],
            session: URLSession.myCustomSession
        )
    )
)
