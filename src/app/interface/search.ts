interface Search {
    dependent_repos_count: number;
    dependents_count: number;
    deprecation_reason?: any;
    description: string;
    forks: number;
    homepage: string;
    keywords: string[];
    language: string;
    latest_download_url?: string;
    latest_release_number: string;
    latest_release_published_at: string;
    latest_stable_release: Lateststablerelease;
    latest_stable_release_number: string;
    latest_stable_release_published_at: string;
    license_normalized: boolean;
    licenses?: string;
    name: string;
    normalized_licenses: string[];
    package_manager_url?: string;
    platform: string;
    rank: number;
    repository_url: string;
    stars: number;
    status?: any;
    versions: (Version | Versions2 | Versions3)[];
  }

interface Versions3 {
    number: string;
    published_at: string;
    spdx_expression?: any;
    original_license?: any;
    researched_at?: any;
}

interface Versions2 {
    number: string;
    published_at: string;
    spdx_expression: string;
    original_license: string;
    researched_at?: any;
}

interface Version {
    number: string;
    published_at: string;
    spdx_expression?: string;
    original_license?: string;
    researched_at?: any;
}

interface Lateststablerelease {
    id: number;
    project_id?: number;
    number?: string;
    published_at: string;
    created_at: string;
    updated_at: string;
    runtime_dependencies_count?: number;
    spdx_expression?: string;
    original_license?: string;
    researched_at?: any;
    repository_id?: number;
    name?: string;
    sha?: string;
    kind?: string;
}