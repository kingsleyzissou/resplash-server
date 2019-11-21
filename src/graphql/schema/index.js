import { gql } from 'apollo-server-express';
import aggregation from './aggregator';

export default aggregation.map((s) => s(gql));
