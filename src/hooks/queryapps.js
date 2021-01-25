import { useQuery, useMutation, useQueryClient } from 'react-query';
import axiosWithAuth from '../utils/axiosWithAuth';

/*
react-query hook to keep track of multiple apps. The idea is that main admins and partners need to be able to review submitted applications. So we have a query key ['Apps', orgid] to store apps to that org, and the ability to PATCH them to update the status (like accepted, declined, etc)
*/

// GET request for applications to specified org.
async function getApps(auth, orgid) {
  const token = auth.authState.accessToken;
  return await axiosWithAuth(token).get(`/orgs/org/${orgid}/apps`);
}

// PATCH for an application
function patchApp(auth, appData) {
  const token = auth.authState.accessToken;
  return axiosWithAuth(token).patch(`apps/app/${appData.appid}`, appData);
}

// returns a mutation function that will update backend
// with the object given as an argument. it will then
// invalidate ['apps', orgid] triggering an automatic
// update to the server state kept by react query.
function useMutationForApp(auth, orgid) {
  const queryClient = useQueryClient();
  return useMutation(appData => patchApp(auth, appData), {
    onSuccess: () => {
      queryClient.invalidateQueries(['apps', orgid]);
    },
  });
}

// Function to return the query and mutation in an array
// index 0 will be an object with various fields including
// 'isLoading', 'error', and returned data in 'data'
// index 1 will be the mutation that can be invoked via
// .mutate(appData)
export function useAppsQuery(auth, orgid) {
  return [
    useQuery(['apps', orgid], () => getApps(auth, orgid)),
    useMutationForApp(auth, orgid),
  ];
}
