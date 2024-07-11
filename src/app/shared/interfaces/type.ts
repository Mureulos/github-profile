export interface ProfileType {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean | null;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export const EMPTY_PROFILE: ProfileType = {
  login: '',
  id: 0,
  node_id: '',
  avatar_url: '',
  gravatar_id: '',
  url: '',
  html_url: '',
  followers_url: '',
  following_url: '',
  gists_url: '',
  starred_url: '',
  subscriptions_url: '',
  organizations_url: '',
  repos_url: '',
  events_url: '',
  received_events_url: '',
  type: '',
  site_admin: false,
  name: '',
  company: '',
  blog: '',
  location: '',
  email: null,
  hireable: null,
  bio: '',
  twitter_username: null,
  public_repos: 0,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: '',
  updated_at: ''
};


export interface ReposType {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: OwnerType;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: string | null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export const EMPTY_REPOS: ReposType = {
  id: 0,
  node_id: '',
  name: '',
  full_name: '',
  private: false,
  owner: {
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
  },
  html_url: '',
  description: '',
  fork: false,
  url: '',
  forks_url: '',
  keys_url: '',
  collaborators_url: '',
  teams_url: '',
  hooks_url: '',
  issue_events_url: '',
  events_url: '',
  assignees_url: '',
  branches_url: '',
  tags_url: '',
  blobs_url: '',
  git_tags_url: '',
  git_refs_url: '',
  trees_url: '',
  statuses_url: '',
  languages_url: '',
  stargazers_url: '',
  contributors_url: '',
  subscribers_url: '',
  subscription_url: '',
  commits_url: '',
  git_commits_url: '',
  comments_url: '',
  issue_comment_url: '',
  contents_url: '',
  compare_url: '',
  merges_url: '',
  archive_url: '',
  downloads_url: '',
  issues_url: '',
  pulls_url: '',
  milestones_url: '',
  notifications_url: '',
  labels_url: '',
  releases_url: '',
  deployments_url: '',
  created_at: '',
  updated_at: '',
  pushed_at: '',
  git_url: '',
  ssh_url: '',
  clone_url: '',
  svn_url: '',
  homepage: '',
  size: 0,
  stargazers_count: 0,
  watchers_count: 0,
  language: '',
  has_issues: false,
  has_projects: false,
  has_downloads: false,
  has_wiki: false,
  has_pages: false,
  has_discussions: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  allow_forking: false,
  is_template: false,
  web_commit_signoff_required: false,
  topics: [],
  visibility: '',
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: ''
}


export interface OwnerType {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}