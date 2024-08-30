import { useAppTheme } from 'hooks';
import React from 'react';
import { Layout, Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface GridProps {
    data: {
        layout: any,
        key: string;
        view: React.ReactElement
    }[];
}

export const Grid: React.FC<GridProps> = ({
  data,
}) => {
  const { theme, name: themeName } = useAppTheme();

  return (
    <ResponsiveGridLayout
      className="layout w-full"
      // cols={12}
      rowHeight={30}
      width={1200}
      verticalCompact
      // compactType={'horizontal'}
    >
      {data?.map((d: {
                layout: Layout,
                key: string,
                view: React.ReactElement
            }) => (
        <div key={d.key}
          className={'grid-tile bg-transparent'}
          data-grid={d.layout}
          style={{
            backgroundColor: `${theme?.BACKGROUND}33`

          }}
        >
          {d.view}
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};
