/* eslint-disable @typescript-eslint/comma-dangle */
import { IGeneratorType } from '@vision/core';
import { useAppTheme } from 'hooks';
import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-fontawesome';
import { generate } from 'services/generatorsService';

import Button from '../Button/Button';
import Icon, { IconName } from '../Icon/CustomIcon/CustomIcon';
import Spinner from '../Spinner/Spinner';
import Tooltip from '../Tooltip/Tooltip';
import Typography from '../Typography/Typography';

interface PromptProps<T> {
    type: IGeneratorType,
    loading: boolean;
    setData?: (data: T[]) => void;
    setLoading?: (value: boolean) => void;
}

export const Prompt = <T,>({
  setData,
  loading,
  setLoading,
  type,
}: PromptProps<T>): React.ReactElement => {
  // const a: T = {} as T;

  const storageKey = `${type}-prompts`;
  // #region HOOKS
  const { theme } = useAppTheme();
  // #endregion

  // #region TODO: TRANSLATIONS
  // #endregion

  // #region STATE
  const [prompt, setPrompt] = useState<string>('');
  const [prompts, setPrompts] = useState<string[]>([]);
  //#endregion

  // #region HELPERS
  const loadRecentPrompts = () => {
    const prompts = JSON.parse(localStorage.getItem(storageKey) as string) || [];

    return prompts;
  };

  const savePrompt = (prompt: string) => {
    const loadedPrompts = loadRecentPrompts();
    let tempPrompts = [];

    if (loadedPrompts.includes(prompt)) {
      const index = loadedPrompts?.findIndex((a: string) => a === prompt);
      tempPrompts = [
        prompt,
        ...loadedPrompts.slice(0, index),
        ...loadedPrompts.slice(index + 1)
      ];
    } else {
      tempPrompts = [
        prompt,
        ...loadedPrompts
      ];
      setPrompts(tempPrompts);
      localStorage.setItem(storageKey, JSON.stringify(tempPrompts));
    }
  };
  // #endregion

  // #region HANDLERS
  // const handleClearPrompts = () => {
  //     localStorage.setItem(storageKey, JSON.stringify([]))
  //     setPrompts([])
  // }

  const handleClearPrompt = (index: number) => {
    const tempPrompts = [
      ...prompts.slice(0, index),
      ...prompts.slice(index + 1),
    ];

    setPrompts(tempPrompts);
    localStorage.setItem(storageKey, JSON.stringify(tempPrompts));
  };

  const handleGenerateMedia = () => {
    if (prompt.length === 0) {
      return;
    }

    setLoading?.(true);
    generate({
      type,
      userPrompt: prompt
    }).then((response: { status: number, data: any }) => {
      console.log({ status: response.status });
      setData?.(response.data);
      savePrompt(prompt);
    }).catch((error: any) => {
      // console.log(error)
    }).finally(() => setLoading?.(false));
  };
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    setPrompts(loadRecentPrompts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // #endregion
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-row items-center">
        <Icon
          size={24}
          name={type?.toLowerCase() as IconName}
          color={theme?.TEXT_LIGHT}
        />
        <input
          id={`prompt-${type}`}
          value={prompt}
          placeholder={`Enter prompt to generate AI ${type}`}
          onChange={(e: any) => setPrompt(e?.target?.value)}
          // className="w-full mt-4 mb-8"
          // className='w-full py-4 indent-8 leading-3'
          className='w-full py-4 leading-3 ml-2'
          style={{ color: theme?.TEXT, width: 'calc(100% - 2rem)', }}
        />
      </div>

      <div className="flex flex-col justify-center items-center text-center my-4">
        {loading
          ? <Spinner color={theme?.PRIMARY} />
          // <div className="loader" />
          : (
            <>
              <Button className="w-full my-8"
                onClick={handleGenerateMedia}
                // TODO: translations
                backgroundColor={theme?.PRIMARY}
                style={{
                  background: 'transparent',
                  border: `1px solid ${theme?.TEXT_LIGHT}`,
                  color: theme?.TEXT_LIGHT
                }}>
                <span>Generate</span>
                <FontAwesome name="cogs" className="mx-2" />
                <span>AI {type}</span>
              </Button>
            </>
          )
        }
      </div>

      {/* TODO: translations */}
      {/* <Accordion title="History"> */}
      {/* <div className="w-full flex flex-row justify-center">
                    <Button onClick={handleClearPrompts} className="w-fit mx-auto ml-2 hover:bg-red-500 border border-red-500 text-red-500 hover:text-white">Clear all prompts</Button>
                </div> */}
      <div className="flex flex-row flex-wrap h-full">
        {prompts.map((p: string, i: number) => (
          <Tooltip key={i} content={p} trigger={'hover'} direction={'bottom'} themeName={'dark'}>
            <div key={`prompt-${i}-${p}`}
              onClick={() => setPrompt(p)}
              className="flex flex-row items-center pr-4 py-1 bg-blue-300 bg-opacity-50 m-1 rounded-3xl cursor-pointer"
              style={{ height: '2rem', maxWidth: '12rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              <div className="w-8 h-8 flex-grow px-2 hover:bg-red-500 rounded-full" onClick={(e: any) => {
                // e.stopPropagation()
                handleClearPrompt(i);
              }}>
                <Icon name="close" color={theme?.TEXT} imageClass="mt-2 px-3 -ml-2.5" />
              </div>
              <div className="flex-shrink">
                <Typography>{p}</Typography>
              </div>
            </div>
          </Tooltip>
        ))}
      </div>
      {/* </Accordion> */}

    </div>
  );
};

export default Prompt;