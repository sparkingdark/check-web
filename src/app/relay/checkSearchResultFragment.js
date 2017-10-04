import Relay from 'react-relay';

const checkSearchResultFragment = Relay.QL`
  fragment on CheckSearch {
    id,
    pusher_channel,
    medias(first: $pageSize) {
      edges {
        node {
          id,
          dbid,
          url,
          quote,
          published,
          updated_at,
          embed,
          archived,
          log_count,
          verification_statuses,
          overridden,
          project_id,
          pusher_channel,
          domain,
          permissions,
          last_status,
          last_status_obj {
            id,
            dbid
          }
          project {
            id,
            dbid,
            search_id,
            title
          },
          project_source {
            dbid,
            project_id,
            source {
              name
            }
          },
          media {
            url,
            quote,
            embed_path,
            thumbnail_path
          }
          user {
            dbid,
            name,
            source {
              dbid,
              accounts(first: 10000) {
                edges {
                  node {
                    url
                  }
                }
              }
            }
          }
          team {
            slug
            search_id
          }
          tags(first: 10000) {
            edges {
              node {
                tag,
                id
              }
            }
          }
        }
      }
    },
    sources(first: $pageSize) {
      edges {
        node {
          id,
          dbid,
          team {
            dbid,
            slug
          },
          project_id,
          updated_at,
          source_id,
          source {
            id,
            dbid,
            name,
            description,
            image,
            accounts(first: 10000) {
              edges {
                node {
                  id,
                  data,
                  embed,
                  provider,
                  url
                }
              }
            }
          },
          user {
            name,
            source {
              dbid,
              accounts(first: 10000) {
                edges {
                  node {
                    url
                  }
                }
              }
            }
          }
        }
      }
    },
    number_of_results
  }
`;

module.exports = checkSearchResultFragment;
