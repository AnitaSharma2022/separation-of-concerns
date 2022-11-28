import { showMouseCoordinates } from './handler';
export default function()
{
    document
  .getElementById('user-interface').addEventListener("mousemove",showMouseCoordinates);
}
