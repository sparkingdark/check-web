import React from 'react';
import Relay from 'react-relay/classic';
import PropTypes from 'prop-types';
import RelayContainer from '../../../relay/RelayContainer';
import MediaRoute from '../../../relay/MediaRoute';
import ReportDesignerComponent from './ReportDesignerComponent';

const ReportDesignerContainer = Relay.createContainer(ReportDesignerComponent, {
  initialVariables: {
    contextId: null,
  },
  fragments: {
    media: () => Relay.QL`
      fragment on ProjectMedia {
        id
        dbid
        archived
        permissions
        oembed_metadata
        metadata
        title
        demand
        description
        verification_statuses
        last_status
        media {
          picture
        }
        last_status_obj {
          id
          dbid
          locked
          content
        }
        dynamic_annotation_report_design {
          id
          dbid
          data
        }
        team {
          name
          slug
          avatar
          get_language
          get_languages
          get_report
          get_report_design_image_template
          contacts(first: 1) {
            edges {
              node {
                web
              }
            }
          }
        }
      }
    `,
  },
});

const ReportDesigner = (props) => {
  const ids = `${props.params.mediaId},${props.params.projectId}`;
  const route = new MediaRoute({ ids });

  return (
    <RelayContainer
      Component={ReportDesignerContainer}
      route={route}
      renderFetched={data => <ReportDesignerContainer {...props} {...data} />}
    />
  );
};

ReportDesigner.propTypes = {
  params: PropTypes.shape({
    mediaId: PropTypes.string.isRequired,
    projectId: PropTypes.string,
  }).isRequired,
};

export default ReportDesigner;