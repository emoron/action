import {commitMutation} from 'react-relay';

const mutation = graphql`
  mutation CreateProjectMutation($newProject: ProjectInput!, $area: AreaEnum) {
    createProject(newProject: $newProject, area: $area) {
      project {
        id
        agendaId
        content
        createdAt
        createdBy
        sortOrder
        status
        tags
        teamId
        teamMemberId
        updatedAt
        userId
      }
    }
  }
`;

const CreateProjectMutation = (environment, newProject, area, onError, onCompleted) => {
  // const {viewerId} = environment;
  return commitMutation(environment, {
    mutation,
    variables: {area, newProject},
    // updater: (store) => {
    // },
    // optimisticUpdater: (store) => {
    // TODO add the team to the sidebar when we move teams to relay
    // },
    onError,
    onCompleted
  });
};

export default CreateProjectMutation;
