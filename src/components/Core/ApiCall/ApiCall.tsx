import { useAppTheme } from 'hooks';
import React from 'react';
import { detectEnv } from 'utils/environment';

import { getRestVerbColor, getStatusColor, getStatusDescription } from './ApiCall.utils';
import Accordion from '../Accordion/Accordion';
import Markdown from '../Markdown/Markdown';


export type ApiRequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

const env = detectEnv();

export interface ApiDataProps {
    // Request
    request: {
        url: string,
        method: ApiRequestMethod,
        payload?: any,
    }
    // Response
    response: {
        data: any;
        status: number;
        error?: any,
        timeInMS?: number
    }
}

export const ApiCall: React.FC<ApiDataProps> = ({
  request,
  response,
}) => (
  <Accordion
    isOpenDefault
    hasPadding={false}
    className='mb-1'
    title={<div className="w-full flex flex-row items-center px-2 py-2" style={{
      backgroundColor: `${getRestVerbColor(request.method)}00`,
    }}>
      <strong className="w-fit px-2 py-1 text-xs rounded-md" style={{ backgroundColor: getRestVerbColor(request.method), color: '#FFF' }}>
        {request.method}
      </strong>
      <span className="px-2" style={{ color: getStatusColor(response.status) }}>
        {response.status}
      </span>
      <div>
        <pre className="rounded-lg overflow-hidden text-xs">
          <code>
            {request.url.replace(env.serverUrl, '/api')}
          </code>
        </pre>
      </div>
    </div>
    }>
    <div className="flex flex-col">
      <div>
        {request.payload && (
          <Accordion
            isOpenDefault
            title={'Payload'}>
            <CodeBlock data={request.payload} />
          </Accordion>
        )}
        <Accordion
          isOpenDefault
          title={(
            <div className="w-full flex flex-row">
              <div>Response
                <span style={{ color: getStatusColor(response.status) }}>
                  {' '}{response.status}{'  -> '}{getStatusDescription(response.status)}
                </span>
                                    &nbsp;{response.timeInMS ? response.timeInMS + 'ms' : null}
              </div>
            </div>
          )}
        >
          <CodeBlock data={response.data} />
        </Accordion>
      </div>
    </div>
  </Accordion>
);

const CodeBlock = ({ data }: { data: any | any[] }) => {
  const { name: themeName } = useAppTheme();

  return (
    <div className="mt-2 p-0 bg-black bg-opacity-70 text-white rounded-lg overflow-hidden">

      <pre className="w-full h-fit overflow-hidden">
        <code>
          <Markdown content={JSON.stringify(data, null, 2)} themeName={themeName} />
        </code>
      </pre>
    </div>
  );
};
export default ApiCall;
