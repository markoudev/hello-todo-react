import { AnyAppAction } from "../actions";

const defaultState: UserState = {
  loggedIn: false
}

/**
 * This reducer doesn't do anything but it just here as an example that in a
 * real-world situation you would probably have several reducers.
 */
export default function reducer(
  state: UserState | undefined = defaultState,
  _action: AnyAppAction
) {

  return state;

}
